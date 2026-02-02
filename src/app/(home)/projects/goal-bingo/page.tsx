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

export default function GoalBingoCaseStudy() {
  const project = experiences.find((project) => project.slug === 'goal-bingo')

  if (!project) {
    return redirect('/projects')
  }

  return (
    <ProjectLayout
      {...project}
      description="Goal Bingo helps users achieve their personal and professional goals in
        a fun, engaging, and gamified way. By turning goal-setting into a
        bingo-style challenge, the app encourages consistency, motivation, and
        progress tracking in an interactive format."
    >
      <Image
        src="/imgs/goal-bingo/goal-bingo-nlaforet.png"
        alt="Goal Bingo public page of nlaforet"
        width={2700}
        height={2048}
        className="rounded-lg border-4 border-zinc-300 shadow-lg dark:border-zinc-700/40"
      />

      <ListSection
        title="Problem Statement"
        items={[
          {
            icon: FrownIcon,
            text: 'Many people struggle with traditional goal-setting methods due to lack of motivation, overwhelming task lists, or ineffective tracking.',
          },
          {
            icon: LockIcon,
            text: 'Most productivity tools focus on rigid structures rather than making goal achievement engaging.',
          },
          {
            icon: Gamepad2Icon,
            text: 'Gamification is a proven way to boost motivation, but existing goal-setting apps lack a simple and fun approach.',
          },
          {
            icon: PartyPopperIcon,
            text: 'Goal Bingo was created to solve this by making goal tracking enjoyable and visually rewarding.',
          },
        ]}
      />

      <ListSection
        title="Goals & Objectives"
        items={[
          {
            icon: ZapIcon,
            text: 'Build a lightweight, engaging, and easy-to-use web app for goal tracking.',
          },
          {
            icon: Gamepad2Icon,
            text: 'Leverage gamification mechanics (bingo grids, rewards) to encourage consistency.',
          },
          {
            icon: UserRoundPlusIcon,
            text: 'Provide a simple onboarding experience that lets users set up their goals quickly.',
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
            text: 'A bingo board system, where users add goals and mark progress.',
          },
          {
            icon: TrophyIcon,
            text: 'A reward-based progression system that makes goal completion exciting.',
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
            <item.icon className="size-6 mt-1 shrink-0 text-teal-500" />
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  )
}
