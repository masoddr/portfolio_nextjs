'use client'

import { useRef, useState } from 'react'
import clsx from 'clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  tiltEnabled?: boolean
}

export function GlassCard({
  children,
  className,
  tiltEnabled = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEnabled || !cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    )
  }

  const handleMouseLeave = () => {
    setTransform('')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={clsx(
        'rounded-2xl border border-zinc-700/50 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-200 ease-out',
        'hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5',
        className
      )}
    >
      {children}
    </div>
  )
}
