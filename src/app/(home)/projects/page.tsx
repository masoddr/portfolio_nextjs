'use client'

import Image from 'next/image'
import { ArrowRightIcon, LinkIcon } from '@heroicons/react/24/outline'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { experiences } from '@/data/experiences'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslatedExperiences } from '@/lib/experience-translations'

export default function Projects() {
  const { language, t } = useLanguage()
  const translatedProjects = getTranslatedExperiences(experiences, language)

  return (
    <SimpleLayout
      title={t.projects.title}
      intro={t.projects.intro}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {translatedProjects.map((project) => (
          <Card asChild key={project.title}>
            <li>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link
                  href={
                    project.slug
                      ? `/projects/${project.slug}`
                      : project.link?.href ?? project.repository?.href ?? '#'
                  }
                  target={project.slug ? undefined : '_blank'}
                >
                  {project.title}
                </Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex flex-1 items-end text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                {project.slug ? (
                  <>
                    <span className="ml-2">Case Study</span>
                    <ArrowRightIcon className="mb-1 ml-2 h-4 w-4 flex-none stroke-2" />
                  </>
                ) : (
                  <>
                    <LinkIcon className="mb-1 ml-2 h-4 w-4 flex-none stroke-2" />
                    <span className="ml-2">
                      {project.link?.label ?? project.repository?.label}
                    </span>
                  </>
                )}
              </p>
            </li>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
