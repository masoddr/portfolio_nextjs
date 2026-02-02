'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingParticlesProps {
  count?: number
  color?: string
  mousePosition?: { x: number; y: number }
}

export function FloatingParticles({
  count = 50,
  color = '#10b981',
  mousePosition = { x: 0, y: 0 },
}: FloatingParticlesProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 5,
        ],
        speed: 0.01 + Math.random() * 0.02,
        offset: Math.random() * Math.PI * 2,
        scale: 0.02 + Math.random() * 0.04,
      })
    }
    return temp
  }, [count])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state) => {
    if (!meshRef.current) return

    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed + particle.offset

      dummy.position.set(
        particle.position[0] + Math.sin(t) * 0.5 + mousePosition.x * 0.5,
        particle.position[1] + Math.cos(t) * 0.5 + mousePosition.y * 0.5,
        particle.position[2] + Math.sin(t * 0.5) * 0.2
      )
      dummy.scale.setScalar(particle.scale)
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  )
}
