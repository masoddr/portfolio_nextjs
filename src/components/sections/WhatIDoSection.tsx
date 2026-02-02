'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

export function WhatIDoSection() {
  const { t } = useLanguage()
  const services = t.whatIDo.services
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const itemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const elements: Element[] = []

    // Set initial states
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 60 })
      elements.push(titleRef.current)
    }

    if (itemsRef.current) {
      gsap.set(itemsRef.current.children, { opacity: 0, y: 40 })
      elements.push(...Array.from(itemsRef.current.children))
    }

    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })

    if (itemsRef.current) {
      gsap.to(itemsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: itemsRef.current,
          start: 'top 70%',
        },
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      elements.forEach((el) => gsap.set(el, { clearProps: 'all' }))
    }
  }, [])

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className="relative py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="mb-20 text-[12vw] font-black uppercase leading-none tracking-tighter text-foreground md:mb-32 md:text-[6vw]"
        >
          {t.whatIDo.title}
        </h2>

        {/* Services grid */}
        <div
          ref={itemsRef}
          className="grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-16"
        >
          {services.map((service) => (
            <div key={service.number} className="group">
              <span className="text-sm font-medium text-accent">
                {service.number}
              </span>
              <h3 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {service.title}
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
