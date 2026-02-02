'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BackgroundScene } from '@/components/three/BackgroundScene'

gsap.registerPlugin(ScrollTrigger)

interface HomePageClientProps {
  children: React.ReactNode
}

export function HomePageClient({ children }: HomePageClientProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    // Track overall scroll progress
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setScrollProgress(self.progress)
      },
    })

    // Track active section
    const sections = ['#hero', '#what-i-do', '#featured-work', '#contact']
    sections.forEach((selector, index) => {
      const element = document.querySelector(selector)
      if (!element) return

      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef}>
      <BackgroundScene
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />
      {children}
    </div>
  )
}
