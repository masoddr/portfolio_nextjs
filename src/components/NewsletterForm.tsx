'use client'

import { Button } from '@/components/Button'
import { useRouter } from 'next/navigation'
import { Section } from './Section'
import { useState, useEffect } from 'react'

export function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export function NewsletterForm(
  props: React.ComponentPropsWithoutRef<'section'>,
) {
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')

  // Reset success message after 5 seconds
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [status])

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subscriber: email }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Something went wrong')
      }

      setStatus('success')
      setEmail('') // Clear the input
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error ? error.message : 'Something went wrong',
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section {...props}>
      <form onSubmit={onSubmit}>
        <Section.Title>
          <MailIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Stay up to date</span>
        </Section.Title>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Get notified when I publish something new, and unsubscribe at any
          time.
        </p>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex">
            <input
              name="subscriber"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="ml-4 flex-none"
            >
              {isLoading ? 'Subscribing...' : 'Join'}
            </Button>
          </div>

          {status === 'success' && (
            <p className="animate-fade-in text-sm text-emerald-600 dark:text-emerald-400">
              Thanks for subscribing! I might send you an email from time to
              time.
            </p>
          )}

          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">
              {errorMessage}
            </p>
          )}
        </div>
      </form>
    </Section>
  )
}
