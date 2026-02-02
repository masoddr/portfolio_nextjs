'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { personalProjects } from '@/data/personal-projects'
import { useLanguage } from '@/contexts/LanguageContext'
import { SimpleLayout } from '@/components/SimpleLayout'
import { TechBadge } from '@/components/TechBadge'

gsap.registerPlugin(ScrollTrigger)

export default function PersonalProjectsPage() {
  const { language, t } = useLanguage()
  const listRef = useRef<HTMLUListElement>(null)

  const getTranslatedProject = (project: typeof personalProjects[0]) => {
    const translation = project.translations?.[language]
    if (translation) {
      return {
        ...project,
        title: translation.title,
        description: translation.description,
      }
    }
    return project
  }

  useEffect(() => {
    if (!listRef.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const items = Array.from(listRef.current.children)

    gsap.set(items, { opacity: 0, y: 30 })

    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: listRef.current,
        start: 'top 80%',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      items.forEach((el) => gsap.set(el, { clearProps: 'all' }))
    }
  }, [])

  return (
    <SimpleLayout title={t.personalProjects.title} intro={t.personalProjects.intro}>
      <ul
        ref={listRef}
        role="list"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {personalProjects.map((project) => {
          const translatedProject = getTranslatedProject(project)
          return (
            <li
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all hover:border-zinc-700 hover:bg-zinc-900"
            >
              <Link
                href={translatedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {/* Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                  <Image
                    src={translatedProject.image}
                    alt={translatedProject.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
                        {translatedProject.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {translatedProject.description}
                      </p>
                      
                      {/* Tech Stack */}
                      {project.techStack && project.techStack.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.techStack.map((tech, idx) => (
                            <TechBadge key={`${project.id}-${tech}-${idx}`} tech={tech} index={idx} />
                          ))}
                        </div>
                      )}
                    </div>
                    <ArrowTopRightOnSquareIcon className="mt-1 h-5 w-5 flex-shrink-0 text-muted transition-colors group-hover:text-accent" />
                  </div>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </SimpleLayout>
  )
}
