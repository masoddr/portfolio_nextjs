'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal'
}

export function useParallax<T extends HTMLElement>(
  options: ParallaxOptions = {}
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const element = ref.current
    const { speed = 0.5, direction = 'vertical' } = options

    const tween = gsap.to(element, {
      [direction === 'vertical' ? 'y' : 'x']: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [options])

  return ref
}
