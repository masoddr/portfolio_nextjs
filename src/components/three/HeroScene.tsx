'use client'

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { FloatingParticles } from './FloatingParticles'

export function HeroScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Check for reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  if (!mounted || prefersReducedMotion) return null

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <FloatingParticles
            count={60}
            color="#10b981"
            mousePosition={mousePosition}
          />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
