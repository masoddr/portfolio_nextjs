'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlassCard } from '@/components/GlassCard'
import { testimonials } from '@/data/testimonials'

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.testimonial-card')

    // Set initial state
    gsap.set(cards, { opacity: 0, y: 30 })

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      gsap.set(cards, { clearProps: 'all' })
    }
  }, [])

  // Don't render if no testimonials
  if (testimonials.length === 0) return null

  return (
    <section ref={sectionRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <GlassCard
              key={testimonial.id}
              className="testimonial-card border-accent/20"
            >
              <blockquote>
                <p className="text-xl italic text-foreground md:text-2xl">
                  <span className="text-4xl text-accent">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-4xl text-accent">&rdquo;</span>
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
