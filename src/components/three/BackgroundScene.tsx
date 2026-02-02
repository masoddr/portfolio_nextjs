'use client'

import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { WireframeIcosahedron } from './WireframeIcosahedron'

// Section positions in 3D space [x, y, z]
// x: -3 = left, 0 = center, 3 = right
// y: -2 = bottom, 0 = center, 2 = top
const SECTION_POSITIONS: [number, number, number][] = [
  [2.5, 0, 0],    // Hero: right side, centered
  [-2.5, 0.5, 0], // What I Do: left side, slightly higher
  [2.5, -1, 0],   // Featured Work: right side, lower
  [0, 0, 0],      // Contact: center
]

interface BackgroundSceneProps {
  activeSection: number
  scrollProgress: number
}

export function BackgroundScene({
  activeSection,
  scrollProgress,
}: BackgroundSceneProps) {
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
  }, [])

  if (!mounted) return null

  // For reduced motion, show static centered icosahedron
  const position = prefersReducedMotion
    ? [0, 0, 0] as [number, number, number]
    : SECTION_POSITIONS[activeSection] || SECTION_POSITIONS[0]

  const effectiveScrollProgress = prefersReducedMotion ? 0 : scrollProgress

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-0 transition-opacity duration-500"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} style={{ pointerEvents: 'none' }}>
        <Suspense fallback={null}>
          <WireframeIcosahedron
            position={position}
            scrollProgress={effectiveScrollProgress}
            size={1.8}
          />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
