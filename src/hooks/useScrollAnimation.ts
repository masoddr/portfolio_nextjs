'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  animation: 'fade-up' | 'fade-in' | 'slide-right' | 'scale-up'
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  end?: string
  scrub?: boolean | number
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const element = ref.current
    const {
      animation,
      delay = 0,
      duration = 0.6,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
    } = options

    const animations: Record<string, gsap.TweenVars> = {
      'fade-up': { opacity: 0, y: 30 },
      'fade-in': { opacity: 0 },
      'slide-right': { opacity: 0, x: 50 },
      'scale-up': { opacity: 0, scale: 0.95 },
    }

    gsap.set(element, animations[animation])

    const tween = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      // Reset element to visible state for next navigation
      gsap.set(element, { clearProps: 'all' })
    }
  }, [options])

  return ref
}
