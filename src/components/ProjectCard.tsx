'use client'

import Link from 'next/link'
import { GitHubIcon, GitLabIcon } from '@/components/SocialIcons'
import { ExperienceOverview } from '@/lib/experiences'
import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslatedExperience } from '@/lib/experience-translations'

interface ProjectCardProps {
  project: ExperienceOverview
  index: number
  showTags?: boolean
  size?: 'default' | 'large'
}

export function ProjectCard({
  project,
  index,
  showTags = false,
  size = 'default',
}: ProjectCardProps) {
  const { language } = useLanguage()
  const translatedProject = getTranslatedExperience(project, language)
  const indexDisplay =
    size === 'large'
      ? `0${index + 1}`
      : String(index + 1).padStart(2, '0')

  const titleClasses =
    size === 'large'
      ? 'mt-4 text-4xl font-bold text-foreground transition-colors group-hover:text-accent md:text-5xl lg:text-6xl'
      : 'mt-4 text-3xl font-bold text-foreground transition-colors group-hover:text-accent md:text-4xl lg:text-5xl'

  const descriptionClasses =
    size === 'large'
      ? 'mt-6 text-lg leading-relaxed text-muted md:text-xl'
      : 'mt-4 text-lg text-muted'

  return (
    <Link href={`/work/${translatedProject.slug}`} className="group block">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="md:max-w-2xl">
          <span className="text-sm font-medium text-accent">{indexDisplay}</span>
          <h3 className={titleClasses}>{translatedProject.title}</h3>
          <p className={descriptionClasses}>{translatedProject.description}</p>
          {showTags && (translatedProject.repository || translatedProject.tags) && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {translatedProject.repository &&
                (translatedProject.repository.provider === 'github' ? (
                  <GitHubIcon className="size-5 fill-zinc-500" />
                ) : (
                  <GitLabIcon className="size-5 fill-zinc-500" />
                ))}
              {translatedProject.tags?.map((tag) => (
                <span key={tag} className="text-sm text-zinc-500">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-3 text-muted transition-colors group-hover:text-accent">
          <span className="text-sm font-medium uppercase tracking-wider">
            View project
          </span>
          <span className="inline-block transition-transform group-hover:translate-x-2">
            &rarr;
          </span>
        </div>
      </div>
      <div className="mt-8 h-px w-full bg-zinc-800" />
    </Link>
  )
}
