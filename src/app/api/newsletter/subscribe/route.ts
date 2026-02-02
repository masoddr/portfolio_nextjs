import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute
const MAX_REQUESTS = 3 // 3 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return false
  }

  if (record.count >= MAX_REQUESTS) {
    return true
  }

  record.count++
  return false
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

function sanitizeEmail(email: string): string {
  // Remove any potential header injection characters
  return email.replace(/[\r\n]/g, '').trim()
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 },
      )
    }

    const json = await request.json()
    const { subscriber } = json

    if (!subscriber || typeof subscriber !== 'string') {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 },
      )
    }

    const sanitizedEmail = sanitizeEmail(subscriber)

    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json(
        { message: 'Please provide a valid email address' },
        { status: 400 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_SUBSCRIBER_DESTINATION,
      subject: 'Newsletter subscriber',
      text: `New subscriber: ${sanitizedEmail}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Successfully subscribed' },
      { status: 200 },
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'Failed to subscribe' },
      { status: 500 },
    )
  }
}
