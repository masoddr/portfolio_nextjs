import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Experience } from '@/lib/experiences'

export function ProjectLayout({
  title,
  description,
  author,
  date,
  link,
  repository,
  tags = [],
  children,
}: Experience & {
  children: React.ReactNode
}) {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/projects"
            aria-label="Go back to projects"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-3 w-3 stroke-zinc-500 stroke-[3px] transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </Link>
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {title}
              </h1>
              <div className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
                <time dateTime={date} className="flex items-center">
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(date)}</span>
                </time>

                {author && (
                  <>
                    <span className="mx-2">·</span>
                    <span>{author}</span>
                  </>
                )}
              </div>
            </header>

            <div className="mt-8 flex flex-col gap-8">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-200 px-2 text-xs font-medium text-zinc-800 dark:bg-zinc-500 dark:text-zinc-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {[link, repository].map(
                  (item) =>
                    item && (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        className="font-medium text-teal-500 underline decoration-teal-500/50 transition hover:text-teal-500 hover:decoration-teal-500"
                      >
                        {item.label}
                      </a>
                    ),
                )}
              </div>

              {description && (
                <p className="border-l-[3px] border-zinc-200 pl-2 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
                  {description}
                </p>
              )}
            </div>

            <div className="mt-8">{children}</div>
          </article>

          <div className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Want to launch a project together? 🚀
            </h2>
            <p>
              Send me an email at{' '}
              <a
                href="mailto:ouaddour.massyl@gmail.com?subject=Let's start a project together!"
                className="font-medium text-teal-500 underline decoration-teal-500/50 transition hover:text-teal-500 hover:decoration-teal-500"
              >
                ouaddour.massyl@gmail.com
              </a>{' '}
              and let&apos;s talk!
            </p>
          </div>
        </div>
      </div>
    </Container>
  )
}
