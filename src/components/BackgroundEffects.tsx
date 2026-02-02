'use client'

import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
  driftX: number
  driftY: number
}

export function BackgroundEffects() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Generate random particles on client only
    const newParticles: Particle[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * -30,
      driftX: (Math.random() - 0.5) * 100,
      driftY: (Math.random() - 0.5) * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/imgs/noise.svg')",
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-accent/70"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `particle-drift ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              ['--drift-x' as string]: `${particle.driftX}px`,
              ['--drift-y' as string]: `${particle.driftY}px`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
