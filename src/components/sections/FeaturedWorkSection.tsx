'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '@/data/experiences'
import { ProjectCard } from '@/components/ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslatedExperiences } from '@/lib/experience-translations'

gsap.registerPlugin(ScrollTrigger)

export function FeaturedWorkSection() {
  const { t, language } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)

  const translatedProjects = getTranslatedExperiences(experiences, language)
  const featuredProjects = translatedProjects
    .filter((p) => p.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

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

    if (projectsRef.current) {
      gsap.set(projectsRef.current.children, { opacity: 0, y: 60 })
      elements.push(...Array.from(projectsRef.current.children))
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

    if (projectsRef.current) {
      gsap.to(projectsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
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
    <section id="featured-work" ref={sectionRef} className="py-32 md:py-48">
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="mb-20 text-[12vw] font-black uppercase leading-none tracking-tighter text-foreground md:mb-32 md:text-[6vw]"
        >
          {t.featuredWork.title}
        </h2>

        {/* Projects */}
        <div ref={projectsRef} className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              size="large"
            />
          ))}
        </div>

        {/* View all link */}
        <div className="mt-20 md:mt-32">
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-xl font-medium text-foreground transition-colors hover:text-accent"
          >
            <span>{t.featuredWork.viewAll}</span>
            <span className="inline-block transition-transform group-hover:translate-x-2">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
