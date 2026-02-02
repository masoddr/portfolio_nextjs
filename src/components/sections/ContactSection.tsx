'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/contexts/LanguageContext'

gsap.registerPlugin(ScrollTrigger)

const EMAIL = 'ouaddour.massyl@gmail.com'

export function ContactSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const elements: Element[] = []

    // Set initial states
    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 80 })
      elements.push(titleRef.current)
    }

    if (contentRef.current) {
      gsap.set(contentRef.current.children, { opacity: 0, y: 30 })
      elements.push(...Array.from(contentRef.current.children))
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

    if (contentRef.current) {
      gsap.to(contentRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
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
      id="contact"
      ref={sectionRef}
      className="py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Big headline */}
        <h2
          ref={titleRef}
          className="text-[13vw] font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-[8vw]"
        >
          {t.contact.title}
          <br />
          <span className="text-accent">{t.contact.titleAccent}</span>
        </h2>

        {/* Contact details */}
        <div
          ref={contentRef}
          className="mt-16 flex flex-col gap-8 md:mt-24 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-lg text-muted md:text-xl">
            {t.contact.description}
            <br />
            {t.contact.descriptionLine2}
          </p>

          <div className="flex flex-col gap-4 md:items-end">
            <Link
              href={`mailto:${EMAIL}`}
              className="text-lg text-muted transition-colors hover:text-accent"
            >
              {EMAIL}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
