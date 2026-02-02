'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface WireframeIcosahedronProps {
  position: [number, number, number]
  scrollProgress: number
  size?: number
}

export function WireframeIcosahedron({
  position,
  scrollProgress,
  size = 3,
}: WireframeIcosahedronProps) {
  const groupRef = useRef<THREE.Group>(null)
  const targetPosition = useRef(new THREE.Vector3(...position))
  const currentPosition = useRef(new THREE.Vector3(...position))

  // Mouse drag rotation state
  const isDragging = useRef(false)
  const previousMouse = useRef({ x: 0, y: 0 })
  const dragRotation = useRef({ x: 0, y: 0 })
  const targetDragRotation = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // Only start drag if not clicking on interactive elements
      const target = e.target as HTMLElement
      if (target.closest('a, button, input, textarea, [role="button"]')) return

      isDragging.current = true
      previousMouse.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return

      const deltaX = e.clientX - previousMouse.current.x
      const deltaY = e.clientY - previousMouse.current.y

      // Add to target rotation (will be smoothly interpolated)
      targetDragRotation.current.y += deltaX * 0.01
      targetDragRotation.current.x += deltaY * 0.01

      previousMouse.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return

    // Update target position
    targetPosition.current.set(...position)

    // Smoothly interpolate to target position
    currentPosition.current.lerp(targetPosition.current, 0.05)

    // Apply bobbing animation
    const bobOffset = Math.sin(state.clock.elapsedTime * 0.8) * 0.15

    groupRef.current.position.set(
      currentPosition.current.x,
      currentPosition.current.y + bobOffset,
      currentPosition.current.z
    )

    // Smoothly interpolate drag rotation
    dragRotation.current.x += (targetDragRotation.current.x - dragRotation.current.x) * 0.1
    dragRotation.current.y += (targetDragRotation.current.y - dragRotation.current.y) * 0.1

    // Combine scroll rotation with drag rotation
    groupRef.current.rotation.x = scrollProgress * Math.PI * 2 + dragRotation.current.x
    groupRef.current.rotation.y = scrollProgress * Math.PI * 2 * 0.5 + dragRotation.current.y
  })

  return (
    <group ref={groupRef}>
      {/* Solid fill with low opacity */}
      <mesh>
        <icosahedronGeometry args={[size, 0]} />
        <meshBasicMaterial
          color="#71717a"
          transparent
          opacity={0.04}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Wireframe edges with higher opacity */}
      <mesh>
        <icosahedronGeometry args={[size, 0]} />
        <meshBasicMaterial
          color="#71717a"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}
