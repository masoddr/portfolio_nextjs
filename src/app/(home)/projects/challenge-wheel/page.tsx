import { redirect } from 'next/navigation'
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
import { ProjectLayout } from '@/components/ProjectLayout'

export default function ChallengeWheelCaseStudy() {
  const project = experiences.find((project) => project.slug === 'challenge-wheel')

  if (!project) {
    return redirect('/projects')
  }

  return (
    <ProjectLayout
      {...project}
      description="Challenge Wheel helps users overcome decision paralysis by challenging them with exciting tasks that fate selects for them. "
    >
      <Image
        src="/imgs/challenge-wheel/nlaforet-challenge-wheel-page.png"
        alt="Challenge Wheel public page of nlaforet"
        width={2700}
        height={2048}
        className="rounded-lg border-4 border-zinc-300 shadow-lg dark:border-zinc-700/40"
      />

      <ListSection
        title="Problem Statement"
        items={[
          {
            icon: FrownIcon,
            text: 'Decision Paralysis: You have a list of challenges you want to tackle, but can’t decide which one to start with, leading to procrastination and inaction.',
          },
          {
            icon: LockIcon,
            text: 'Lack of Motivation: Traditional to-do lists feel boring and overwhelming, making it hard to stay motivated to complete your challenges.',
          },
          {
            icon: Gamepad2Icon,
            text: 'Inconsistent Progress: Without a structured way to track and celebrate achievements, it’s easy to lose momentum and abandon challenges halfway.',
          },
          {
            icon: PartyPopperIcon,
            text: 'Isolated Journey: Working on challenges alone makes it harder to stay accountable and share your progress with others who might be inspired.',
          },
        ]}
      />

      <ListSection
        title="Goals & Objectives"
        items={[
          {
            icon: ZapIcon,
            text: 'Create a fun, engaging, and easy-to-use web app for decision making.',
          },
          {
            icon: Gamepad2Icon,
            text: 'Let fate decide your challenges, making each day an exciting adventure.',
          },
          {
            icon: UserRoundPlusIcon,
            text: 'Provide a simple onboarding experience that lets users set up their challenges quickly.',
          },
          {
            icon: SmartphoneIcon,
            text: 'Ensure the app is mobile-friendly and intuitive.',
          },
        ]}
      />

      <ListSection
        title="The Solution"
        items={[
          {
            icon: Grid2X2Icon,
            text: 'A wheel of fortune system, where users add challenges and mark progress.',
          },
          {
            icon: TrophyIcon,
            text: 'A reward-based progression system that makes challenge completion exciting.',
          },
          {
            icon: SmartphoneIcon,
            text: 'A minimalist, distraction-free UI to keep users focused.',
          },
        ]}
      />
    </ProjectLayout>
  )
}

function ListSection({
  title,
  items,
}: {
  title: string
  items: { icon: LucideIcon; text: string }[]
}) {
  return (
    <section className="my-24 flex flex-col gap-4 sm:my-32 sm:flex-row sm:gap-8">
      <h2 className="whitespace-nowrap font-bold text-teal-500 sm:text-right sm:text-sm sm:[writing-mode:sideways-lr]">
        {title}
      </h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex gap-4">
            <item.icon className="mt-1 size-6 shrink-0 text-teal-500" />
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
