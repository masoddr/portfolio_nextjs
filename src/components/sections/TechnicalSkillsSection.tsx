'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/contexts/LanguageContext'
import { techIcons } from '@/components/TechIcons'

gsap.registerPlugin(ScrollTrigger)

type SkillLevel = 'Expert' | 'Avancé' | 'Intermédiaire' | 'Advanced' | 'Intermediate'

interface Skill {
  readonly name: string
  readonly level: SkillLevel
}

interface SkillCategory {
  readonly title: string
  readonly skills: readonly Skill[]
}

const skillLevelMap: Record<SkillLevel, number> = {
  Expert: 95,
  Avancé: 80,
  Intermédiaire: 50,
  Advanced: 80,
  Intermediate: 50,
}

function ProgressBar({ level }: { level: SkillLevel }) {
  const progressRef = useRef<HTMLDivElement>(null)
  const percentage = skillLevelMap[level]

  useEffect(() => {
    if (!progressRef.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      progressRef.current.style.width = `${percentage}%`
      return
    }

    gsap.fromTo(
      progressRef.current,
      { width: '0%' },
      {
        width: `${percentage}%`,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: progressRef.current.closest('.skill-item'),
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [percentage])

  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-zinc-800">
      <div
        ref={progressRef}
        className="h-full rounded-full bg-gradient-to-r from-accent via-accent-light to-accent-dark"
        style={{ width: '0%' }}
      />
    </div>
  )
}

// Mapping for official logo images
const logoImageMap: Record<string, string> = {
  // DevOps & Cloud
  Docker: '/imgs/icons/docker.png',
  Kubernetes: '/imgs/icons/kubernetes.png',
  Ansible: '/imgs/icons/ansible.png',
  'GitLab CI/CD': '/imgs/icons/gitlab.png',
  // Development
  Python: '/imgs/icons/python.png',
  Java: '/imgs/icons/java.png',
  'JavaScript/TypeScript': '/imgs/icons/javascript.png',
  PostgreSQL: '/imgs/icons/postgresql.png',
  'Shell/Bash': '/imgs/icons/bash.png',
  Git: '/imgs/icons/git.png',
}

// Images that need special handling (images without transparency)
const imagesWithoutTransparency: string[] = []

function SkillItem({ skill }: { skill: Skill }) {
  const IconComponent = techIcons[skill.name]
  const logoImage = logoImageMap[skill.name]
  
  return (
    <div className="skill-item space-y-2">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {logoImage ? (
            <div className="relative h-5 w-5 shrink-0 flex items-center justify-center">
              <Image
                src={logoImage}
                alt={`${skill.name} logo`}
                width={20}
                height={20}
                className={`object-contain ${imagesWithoutTransparency.includes(logoImage) ? 'bg-white/10 rounded p-0.5' : ''}`}
                style={{
                  imageRendering: 'auto',
                }}
                unoptimized
              />
            </div>
          ) : IconComponent ? (
            <IconComponent className="h-5 w-5 shrink-0 text-foreground" />
          ) : null}
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-xs font-medium text-muted shrink-0">{skill.level}</span>
      </div>
      <ProgressBar level={skill.level} />
    </div>
  )
}

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/50 p-6 backdrop-blur-sm">
      <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function TechnicalSkillsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const elements: Element[] = []

    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 60 })
      elements.push(titleRef.current)
    }

    if (cardsRef.current) {
      gsap.set(cardsRef.current.children, { opacity: 0, y: 40 })
      elements.push(...Array.from(cardsRef.current.children))
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

    if (cardsRef.current) {
      gsap.to(cardsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
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
      id="technical-skills"
      ref={sectionRef}
      className="relative py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="mb-20 text-center text-[12vw] font-black uppercase leading-none tracking-tighter text-foreground md:mb-32 md:text-[6vw]"
        >
          {t.technicalSkills.title}
        </h2>

        {/* Skills cards grid */}
        <div
          ref={cardsRef}
          className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {t.technicalSkills.categories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
