import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  type LucideIcon,
  Gamepad2Icon,
  PartyPopperIcon,
  LockIcon,
  FrownIcon,
  ZapIcon,
  SmartphoneIcon,
  UserRoundPlusIcon,
  Grid2X2Icon,
  TrophyIcon,
} from 'lucide-react'

import { experiences } from '@/data/experiences'
import { GitHubIcon, GitLabIcon } from '@/components/SocialIcons'

interface Props {
  params: Promise<{ slug: string }>
}

const iconMap: Record<string, LucideIcon> = {
  Gamepad2Icon,
  PartyPopperIcon,
  LockIcon,
  FrownIcon,
  ZapIcon,
  SmartphoneIcon,
  UserRoundPlusIcon,
  Grid2X2Icon,
  TrophyIcon,
}

export async function generateStaticParams() {
  return experiences
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = experiences.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/50">
      <div className="text-center">
        <div className="text-4xl text-zinc-600">🖼️</div>
        <p className="mt-2 text-sm text-zinc-500">{label}</p>
      </div>
    </div>
  )
}

function ListItems({ items }: { items: { icon: string; text: string }[] }) {
  return (
    <ul className="mt-8 space-y-6">
      {items.map((item, index) => {
        const Icon = iconMap[item.icon]
        return (
          <li key={index} className="flex gap-4 text-lg leading-relaxed text-muted">
            {Icon && <Icon className="mt-1 size-6 shrink-0 text-accent" />}
            {item.text}
          </li>
        )
      })}
    </ul>
  )
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = experiences.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const projectsWithSlugs = experiences.filter((p) => p.slug)
  const projectIndex = projectsWithSlugs.findIndex((p) => p.slug === slug)
  const nextProject = projectsWithSlugs[projectIndex + 1]

  const sections = project.caseStudy?.sections || []
  const problemSection = sections.find((s) => s.title === 'Problem Statement')
  const goalsSection = sections.find((s) => s.title === 'Goals & Objectives')
  const solutionSection = sections.find((s) => s.title === 'The Solution')

  return (
    <main className="bg-background pt-32 md:pt-40">
      <article className="mx-auto max-w-[1800px] px-6 md:px-12 lg:px-24">
        {/* Back link */}
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:text-accent"
        >
          <span className="inline-block transition-transform group-hover:-translate-x-1">
            &larr;
          </span>
          Back to Work
        </Link>

        {/* Header */}
        <header className="mt-12 md:mt-16">
          <h1 className="text-[12vw] font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-[6vw]">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted md:text-2xl">
            {project.description}
          </p>
          {project.tags && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-4 py-1 text-sm text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Project info bar */}
        <div className="mt-12 flex flex-wrap gap-8 border-y border-zinc-800 py-6 md:mt-16">
          {project.link && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Live Project
              </p>
              <Link
                href={project.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                View site &rarr;
              </Link>
            </div>
          )}
          {project.repository && (
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted">
                Source Code
              </p>
              <Link
                href={project.repository.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-accent"
              >
                {project.repository.provider === 'github' ? (
                  <GitHubIcon className="size-5 fill-current" />
                ) : (
                  <GitLabIcon className="size-5 fill-current" />
                )}
                View on {project.repository.provider === 'github' ? 'GitHub' : 'GitLab'} &rarr;
              </Link>
            </div>
          )}
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Year
            </p>
            <p className="mt-1 text-lg text-foreground">
              {new Date(project.date).getFullYear()}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Role
            </p>
            <p className="mt-1 text-lg text-foreground">
              Design & Development
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div className="mt-16 md:mt-24">
          {project.caseStudy?.images?.hero ? (
            <Image
              src={project.caseStudy.images.hero}
              alt={`${project.title} hero`}
              width={1800}
              height={1000}
              className="w-full rounded-lg"
            />
          ) : (
            <ImagePlaceholder label="Hero image – Add screenshot or mockup" />
          )}
        </div>

        {project.caseStudy && (
          <>
            {/* Problem Statement Section */}
            <section className="mt-32 md:mt-48">
              <div className="grid gap-12 md:grid-cols-2 md:items-start">
                <div>
                  <span className="text-sm font-medium text-accent">01</span>
                  <h2 className="mt-4 text-[8vw] font-black uppercase leading-none tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                    Problem Statement
                  </h2>
                  {problemSection && <ListItems items={problemSection.items} />}
                </div>
                <div>
                  {project.caseStudy.images?.exploration ? (
                    <Image
                      src={project.caseStudy.images.exploration}
                      alt="Exploration phase"
                      width={900}
                      height={600}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <ImagePlaceholder label="Research & exploration visuals" />
                  )}
                </div>
              </div>
            </section>

            {/* Goals & Objectives Section */}
            <section className="mt-32 md:mt-48">
              <div className="grid gap-12 md:grid-cols-2 md:items-start">
                <div className="md:order-2">
                  <span className="text-sm font-medium text-accent">02</span>
                  <h2 className="mt-4 text-[8vw] font-black uppercase leading-none tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                    Goals & Objectives
                  </h2>
                  {goalsSection && <ListItems items={goalsSection.items} />}
                </div>
                <div className="md:order-1">
                  {project.caseStudy.images?.solution ? (
                    <Image
                      src={project.caseStudy.images.solution}
                      alt="Solution implementation"
                      width={900}
                      height={600}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <ImagePlaceholder label="Solution screenshots or diagrams" />
                  )}
                </div>
              </div>
            </section>

            {/* The Solution Section */}
            <section className="mt-32 md:mt-48">
              <div className="grid gap-12 md:grid-cols-2 md:items-start">
                <div>
                  <span className="text-sm font-medium text-accent">03</span>
                  <h2 className="mt-4 text-[8vw] font-black uppercase leading-none tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                    The Solution
                  </h2>
                  {solutionSection && <ListItems items={solutionSection.items} />}
                </div>
                <div>
                  {project.caseStudy.images?.architecture ? (
                    <Image
                      src={project.caseStudy.images.architecture}
                      alt="System architecture"
                      width={900}
                      height={600}
                      className="w-full rounded-lg"
                    />
                  ) : (
                    <ImagePlaceholder label="Architecture diagram or system overview" />
                  )}
                </div>
              </div>
            </section>

            {/* Results Section */}
            <section className="mt-32 md:mt-48">
              <span className="text-sm font-medium text-accent">04</span>
              <h2 className="mt-4 text-[8vw] font-black uppercase leading-none tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                Results
              </h2>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted md:text-2xl">
                {project.caseStudy.results}
              </p>
            </section>
          </>
        )}

        {/* Next project */}
        {nextProject && (
          <nav className="mt-32 border-t border-zinc-800 pb-32 pt-16 md:mt-48 md:pb-48">
            <p className="text-sm font-medium uppercase tracking-wider text-muted">
              Next Project
            </p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group mt-4 block"
            >
              <span className="text-4xl font-bold text-foreground transition-colors group-hover:text-accent md:text-5xl lg:text-6xl">
                {nextProject.title}
              </span>
              <span className="ml-4 inline-block text-2xl text-muted transition-transform group-hover:translate-x-2">
                &rarr;
              </span>
            </Link>
          </nav>
        )}
      </article>
    </main>
  )
}
