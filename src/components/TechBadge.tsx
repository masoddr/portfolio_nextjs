'use client'

import { memo } from 'react'

interface TechBadgeProps {
  tech: string
  index?: number
}

// Color mapping for different technologies
const techColors: Record<string, { bg: string; text: string; border: string }> = {
  Astro: {
    bg: 'bg-gradient-to-br from-orange-500/20 to-orange-600/10',
    text: 'text-orange-400',
    border: 'border-orange-500/30',
  },
  React: {
    bg: 'bg-gradient-to-br from-cyan-500/20 to-blue-600/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  'Backend Python': {
    bg: 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30',
  },
  Python: {
    bg: 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10',
    text: 'text-yellow-400',
    border: 'border-yellow-500/30',
  },
  VPS: {
    bg: 'bg-gradient-to-br from-green-500/20 to-emerald-600/10',
    text: 'text-green-400',
    border: 'border-green-500/30',
  },
  'Reverse Proxy': {
    bg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/10',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
  },
  'Administration Serveur': {
    bg: 'bg-gradient-to-br from-indigo-500/20 to-indigo-600/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
  },
  'LLM API': {
    bg: 'bg-gradient-to-br from-pink-500/20 to-rose-600/10',
    text: 'text-pink-400',
    border: 'border-pink-500/30',
  },
  Groq: {
    bg: 'bg-gradient-to-br from-violet-500/20 to-violet-600/10',
    text: 'text-violet-400',
    border: 'border-violet-500/30',
  },
}

// Default colors for unknown technologies
const defaultColors = {
  bg: 'bg-gradient-to-br from-zinc-500/20 to-zinc-600/10',
  text: 'text-zinc-400',
  border: 'border-zinc-500/30',
}

export const TechBadge = memo(function TechBadge({ tech, index = 0 }: TechBadgeProps) {
  const colors = techColors[tech] || defaultColors

  return (
    <span
      className={`
        group/badge relative inline-flex items-center overflow-hidden rounded-lg border px-2.5 py-1 text-xs font-medium
        backdrop-blur-sm
        transition-all duration-300 ease-out
        ${colors.bg}
        ${colors.text}
        ${colors.border}
        hover:scale-105 hover:border-opacity-60 hover:shadow-lg hover:shadow-accent/20
        hover:brightness-110
      `}
      style={{
        animationDelay: `${index * 30}ms`,
      }}
    >
      {/* Shine effect on hover */}
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent 
                   transition-transform duration-700 group-hover/badge:translate-x-full"
      />
      <span className="relative z-10">{tech}</span>
    </span>
  )
})

TechBadge.displayName = 'TechBadge'
