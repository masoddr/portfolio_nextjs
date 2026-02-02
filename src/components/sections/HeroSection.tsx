'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Badge3DScene } from '@/components/Badge3D'
import { useLanguage } from '@/contexts/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLSpanElement>(null)
  const line2Ref = useRef<HTMLSpanElement>(null)
  const line3Ref = useRef<HTMLSpanElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const elements = [
      line1Ref.current,
      line2Ref.current,
      line3Ref.current,
      imageRef.current,
      subtitleRef.current,
      ctaRef.current,
    ].filter(Boolean)

    // Reset elements to initial hidden state
    gsap.set(elements, { opacity: 0, y: 100 })
    gsap.set([subtitleRef.current, ctaRef.current], { y: 30 })
    gsap.set(imageRef.current, { scale: 0.8, opacity: 0 })

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

    tl.to(line1Ref.current, { opacity: 1, y: 0, duration: 1 })
      .to(line2Ref.current, { opacity: 1, y: 0, duration: 1 }, '-=0.7')
      .to(line3Ref.current, { opacity: 1, y: 0, duration: 1 }, '-=0.7')
      .to(imageRef.current, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.5')
      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')

    return () => {
      tl.kill()
      // Reset to visible state on cleanup for next navigation
      gsap.set(elements, { clearProps: 'all' })
    }
  }, [t])

  return (
    <section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
      <div
        ref={containerRef}
        className="mx-auto w-full max-w-[1800px] px-6 py-32 md:px-12 lg:px-24"
      >
        {/* Main headline with image */}
        <div className="flex items-start gap-8 md:gap-12 lg:gap-16">
          <h1 className="flex-1 overflow-hidden">
            <span
              ref={line1Ref}
              className="block text-[14vw] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw]"
            >
              {t.hero.line1}
            </span>
            <span
              ref={line2Ref}
              className="block text-[14vw] font-black uppercase leading-[0.85] tracking-tighter text-accent md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw]"
            >
              {t.hero.line2}
            </span>
            <span
              ref={line3Ref}
              className="block text-[14vw] font-black uppercase leading-[0.85] tracking-tighter text-accent md:text-[10vw] lg:text-[9vw] xl:text-[8vw] 2xl:text-[7vw]"
            >
              {t.hero.line3}
            </span>
          </h1>
          
          {/* Circular profile image */}
          <div
            ref={imageRef}
            className="relative hidden flex-shrink-0 md:block"
          >
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-accent/20 md:h-40 md:w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56">
              <Image
                src="/imgs/massyl.jpg"
                alt="Massyl Ouaddour"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, (max-width: 1280px) 192px, 224px"
              />
            </div>
          </div>
        </div>

        {/* Circular rotating badge - Bottom right */}
        <div className="absolute bottom-[38vh] -right-4 scale-[0.5] sm:bottom-24 sm:right-4 sm:scale-[0.6] md:bottom-64 md:right-8 md:scale-75 lg:bottom-64 lg:right-12 lg:scale-90 xl:bottom-64 xl:right-16 xl:scale-100 2xl:right-32">
          <Badge3DScene badges={[]} />
        </div>

        {/* Subtitle and CTA */}
        <div className="mt-16 flex flex-col gap-8 md:mt-24 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              ref={subtitleRef}
              className="text-2xl font-semibold text-foreground md:text-3xl lg:text-4xl xl:text-5xl"
            >
              {t.hero.subtitle}
            </p>
            <p className="mt-4 text-lg text-muted md:text-xl">
              {t.hero.description}
            </p>
          </div>

          <div ref={ctaRef} className="flex items-center gap-6">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 whitespace-nowrap text-lg font-medium text-foreground transition-colors hover:text-accent"
            >
              <span>{t.hero.contact}</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
            <Link
              href="/work"
              className="whitespace-nowrap text-lg font-medium text-muted transition-colors hover:text-foreground"
            >
              {t.hero.viewWork}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-xs uppercase tracking-widest">{t.hero.scroll}</span>
          <div className="h-12 w-px bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  )
}
