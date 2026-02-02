'use client'

import Link from 'next/link'
import { experiences } from '@/data/experiences'
import { ProjectCard } from '@/components/ProjectCard'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslatedExperiences } from '@/lib/experience-translations'

export default function WorkPage() {
  const { language, t } = useLanguage()
  const translatedProjects = getTranslatedExperiences(experiences, language)
  const sortedProjects = [...translatedProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="bg-background pt-32 md:pt-40">
      <div className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Page header */}
        <header className="mb-20 md:mb-32">
          <h1 className="text-[20vw] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[8vw]">
            {t.work.title}
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted md:text-xl">
            {t.work.subtitle}
          </p>
        </header>

        {/* Projects list */}
        <div className="space-y-16 pb-32 md:space-y-24 md:pb-48">
          {sortedProjects.map((project, index) => (
            <article key={project.title}>
              {project.slug ? (
                <ProjectCard project={project} index={index} showTags />
              ) : (
                <div>
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="md:max-w-2xl">
                      <span className="text-sm font-medium text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                        {project.title}
                      </h2>
                      <p className="mt-4 text-lg text-muted">
                        {project.description}
                      </p>
                      <p className="mt-2 text-sm text-zinc-500">{project.date}</p>
                    </div>
                    {project.link && (
                      <Link
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                      >
                        <span className="text-sm font-medium uppercase tracking-wider">
                          {project.link.label}
                        </span>
                        <span>&rarr;</span>
                      </Link>
                    )}
                  </div>
                  <div className="mt-8 h-px w-full bg-zinc-800" />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
