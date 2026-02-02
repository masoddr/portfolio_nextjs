'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from 'gsap'
import { useLanguage } from '@/contexts/LanguageContext'

interface CircularBadgeProps {
  text: string
  centerText?: string
  size?: number
  className?: string
  href?: string
}

export function CircularBadge({ text, centerText, size = 160, className = '', href }: CircularBadgeProps) {
  const router = useRouter()
  const badgeRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const rotatingRef = useRef<SVGSVGElement>(null)
  const shineRef = useRef<HTMLDivElement>(null)
  const borderRef = useRef<HTMLDivElement>(null)
  const isHovering = useRef(false)

  useEffect(() => {
    const badge = badgeRef.current
    const card = cardRef.current
    const glow = glowRef.current
    const rotating = rotatingRef.current
    const shine = shineRef.current
    const border = borderRef.current
    if (!badge || !card || !glow || !rotating || !shine || !border) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    // Initial state
    gsap.set(card, { opacity: 0, scale: 0.8 })
    gsap.set(glow, { opacity: 0 })

    // Entrance animation
    gsap.to(card, {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 1.5,
      ease: 'power3.out',
    })

    // Continuous rotation
    const rotationTween = gsap.to(rotating, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
      transformOrigin: 'center center',
    })

    // Periodic shine animation (every 8 seconds)
    const shineAnimation = () => {
      if (isHovering.current) return

      const tl = gsap.timeline()

      // Shine sweep (diagonal: top-left to bottom-right)
      tl.fromTo(shine,
        { x: '-150%', y: '-150%', opacity: 0 },
        { x: '150%', y: '150%', opacity: 1, duration: 1, ease: 'power2.inOut' }
      )
      tl.to(shine, { opacity: 0, duration: 0.2 }, '-=0.2')

      // Border glow (synced with shine - both end at 1s)
      tl.to(border, {
        borderColor: 'rgb(16, 185, 129)',
        boxShadow: '0 0 20px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.1)',
        duration: 0.3,
        ease: 'power2.out'
      }, 0.2)
      tl.to(border, {
        borderColor: 'rgb(82, 82, 91)',
        boxShadow: 'none',
        duration: 0.2,
        ease: 'power2.out'
      }, 0.8)
    }

    // Initial delay then repeat
    const shineTimeout = setTimeout(() => {
      shineAnimation()
    }, 3000)

    const shineInterval = setInterval(shineAnimation, 8000)

    // Mouse interaction
    const handleMouseEnter = () => {
      isHovering.current = true
      gsap.to(glow, { opacity: 1, duration: 0.3 })
      gsap.to(card, { scale: 1.05, duration: 0.4, ease: 'power2.out' })
      // Speed up rotation on hover
      gsap.to(rotationTween, { timeScale: 2, duration: 0.5 })
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering.current) return

      const rect = badge.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -15
      const rotateY = ((x - centerX) / centerX) * 15

      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: 'power2.out',
      })

      // Move glow to follow mouse
      gsap.to(glow, {
        background: `radial-gradient(circle at ${x}px ${y}px, rgba(16, 185, 129, 0.4) 0%, transparent 60%)`,
        duration: 0.3,
      })
    }

    const handleMouseLeave = () => {
      isHovering.current = false
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
      })
      gsap.to(glow, { opacity: 0, duration: 0.4 })
      // Reset rotation speed
      gsap.to(rotationTween, { timeScale: 1, duration: 0.5 })
    }

    badge.addEventListener('mouseenter', handleMouseEnter)
    badge.addEventListener('mousemove', handleMouseMove)
    badge.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      gsap.killTweensOf(card)
      gsap.killTweensOf(glow)
      gsap.killTweensOf(rotating)
      gsap.killTweensOf(rotationTween)
      gsap.killTweensOf(shine)
      gsap.killTweensOf(border)
      clearTimeout(shineTimeout)
      clearInterval(shineInterval)
      badge.removeEventListener('mouseenter', handleMouseEnter)
      badge.removeEventListener('mousemove', handleMouseMove)
      badge.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Create text with bullet separators to fill the circle
  const spacedText = `${text}   •   `

  const handleClick = () => {
    if (href) {
      router.push(href)
    }
  }

  return (
    <div
      ref={badgeRef}
      className={`group relative cursor-pointer ${className}`}
      style={{ width: size, height: size, perspective: '800px' }}
      onClick={handleClick}
      role={href ? 'link' : undefined}
    >
      <div
        ref={cardRef}
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 rounded-full opacity-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.3) 0%, transparent 60%)',
          }}
        />

        {/* Outer circle border */}
        <div
          ref={borderRef}
          className="absolute inset-0 rounded-full border border-zinc-600 transition-colors duration-300 group-hover:border-accent"
        />

        {/* Shine effect container - clips the shine to the circle */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <div
            ref={shineRef}
            className="absolute h-[200%] w-[200%] opacity-0"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%)',
              top: '-50%',
              left: '-50%',
            }}
          />
        </div>

        {/* Rotating text */}
        <svg
          ref={rotatingRef}
          className="absolute inset-0"
          viewBox="0 0 100 100"
          width={size}
          height={size}
        >
          <defs>
            <path
              id="textCircle"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
          </defs>
          <text
            className="fill-zinc-400 uppercase transition-colors duration-300 group-hover:fill-foreground"
            style={{ fontSize: '7.5px', fontWeight: 500, letterSpacing: '0.255em' }}
          >
            <textPath href="#textCircle" startOffset="0%">
              {spacedText}
            </textPath>
          </text>
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-dm-sans text-4xl font-black text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-accent">
            {centerText}
          </span>
        </div>

        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  )
}

interface Badge3DSceneProps {
  badges: Array<{
    value: string
    label: string
  }>
}

export function Badge3DScene({ badges }: Badge3DSceneProps) {
  const { t } = useLanguage()
  return (
    <CircularBadge text={t.badge.rotatingText} centerText={t.badge.centerValue} size={180} />
  )
}
