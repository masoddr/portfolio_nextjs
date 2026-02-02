# Wireframe Icosahedron Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a scroll-animated wireframe icosahedron background element that moves between section positions, rotates on scroll, and bobs when idle.

**Architecture:** Create two new components: `WireframeIcosahedron` (the 3D mesh with bobbing animation) and `BackgroundScene` (the fixed-position canvas with scroll integration). Use GSAP ScrollTrigger to track scroll progress and active section, passing these values to the Three.js components.

**Tech Stack:** React Three Fiber, Three.js, GSAP ScrollTrigger, TypeScript

---

## Task 1: Create WireframeIcosahedron Component

**Files:**
- Create: `src/components/three/WireframeIcosahedron.tsx`

**Step 1: Create the component file**

```tsx
'use client'

import { useRef } from 'react'
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
  const meshRef = useRef<THREE.Mesh>(null)
  const targetPosition = useRef(new THREE.Vector3(...position))
  const currentPosition = useRef(new THREE.Vector3(...position))

  useFrame((state) => {
    if (!meshRef.current) return

    // Update target position
    targetPosition.current.set(...position)

    // Smoothly interpolate to target position
    currentPosition.current.lerp(targetPosition.current, 0.05)

    // Apply bobbing animation
    const bobOffset = Math.sin(state.clock.elapsedTime * 0.8) * 0.15

    meshRef.current.position.set(
      currentPosition.current.x,
      currentPosition.current.y + bobOffset,
      currentPosition.current.z
    )

    // Rotate based on scroll progress (full 360° over page scroll)
    meshRef.current.rotation.x = scrollProgress * Math.PI * 2
    meshRef.current.rotation.y = scrollProgress * Math.PI * 2 * 0.5
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[size, 0]} />
      <meshBasicMaterial
        color="#71717a"
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}
```

**Step 2: Verify file exists and has no syntax errors**

Run: `npx tsc --noEmit src/components/three/WireframeIcosahedron.tsx 2>&1 || echo "Type check complete"`

**Step 3: Commit**

```bash
git add src/components/three/WireframeIcosahedron.tsx
git commit -m "✨ add WireframeIcosahedron component"
```

---

## Task 2: Create BackgroundScene Component

**Files:**
- Create: `src/components/three/BackgroundScene.tsx`

**Step 1: Create the component file**

```tsx
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
      className="pointer-events-none fixed inset-0 -z-20 opacity-0 transition-opacity duration-500"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Suspense fallback={null}>
          <WireframeIcosahedron
            position={position}
            scrollProgress={effectiveScrollProgress}
            size={2.5}
          />
          <ambientLight intensity={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
```

**Step 2: Verify file exists and has no syntax errors**

Run: `npx tsc --noEmit src/components/three/BackgroundScene.tsx 2>&1 || echo "Type check complete"`

**Step 3: Commit**

```bash
git add src/components/three/BackgroundScene.tsx
git commit -m "✨ add BackgroundScene component with scroll props"
```

---

## Task 3: Create Homepage Wrapper with Scroll Tracking

**Files:**
- Create: `src/components/HomePageClient.tsx`

**Step 1: Create the client component with GSAP scroll tracking**

```tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BackgroundScene } from '@/components/three/BackgroundScene'

gsap.registerPlugin(ScrollTrigger)

interface HomePageClientProps {
  children: React.ReactNode
}

export function HomePageClient({ children }: HomePageClientProps) {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    // Track overall scroll progress
    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setScrollProgress(self.progress)
      },
    })

    // Track active section
    const sections = ['#hero', '#what-i-do', '#featured-work', '#contact']
    sections.forEach((selector, index) => {
      const element = document.querySelector(selector)
      if (!element) return

      ScrollTrigger.create({
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef}>
      <BackgroundScene
        activeSection={activeSection}
        scrollProgress={scrollProgress}
      />
      {children}
    </div>
  )
}
```

**Step 2: Verify file exists and has no syntax errors**

Run: `npx tsc --noEmit src/components/HomePageClient.tsx 2>&1 || echo "Type check complete"`

**Step 3: Commit**

```bash
git add src/components/HomePageClient.tsx
git commit -m "✨ add HomePageClient with GSAP scroll tracking"
```

---

## Task 4: Add Section IDs to Homepage Sections

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`
- Modify: `src/components/sections/WhatIDoSection.tsx`
- Modify: `src/components/sections/FeaturedWorkSection.tsx`
- Modify: `src/components/sections/ContactSection.tsx`

**Step 1: Add id="hero" to HeroSection**

In `src/components/sections/HeroSection.tsx`, change the opening `<section>` tag:

```tsx
// Find:
<section className="relative flex min-h-screen flex-col justify-center overflow-hidden">

// Replace with:
<section id="hero" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
```

**Step 2: Add id="what-i-do" to WhatIDoSection**

Read the file first, then add `id="what-i-do"` to the main section element.

**Step 3: Add id="featured-work" to FeaturedWorkSection**

Read the file first, then add `id="featured-work"` to the main section element.

**Step 4: Add id="contact" to ContactSection**

Read the file first, then add `id="contact"` to the main section element.

**Step 5: Commit**

```bash
git add src/components/sections/*.tsx
git commit -m "🔧 add section IDs for scroll tracking"
```

---

## Task 5: Integrate HomePageClient into Homepage

**Files:**
- Modify: `src/app/(home)/page.tsx`

**Step 1: Wrap content with HomePageClient**

```tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatIDoSection } from '@/components/sections/WhatIDoSection'
import { FeaturedWorkSection } from '@/components/sections/FeaturedWorkSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { HomePageClient } from '@/components/HomePageClient'

export default function Home() {
  return (
    <HomePageClient>
      <main>
        <HeroSection />
        <WhatIDoSection />
        <FeaturedWorkSection />
        <ContactSection />
      </main>
    </HomePageClient>
  )
}
```

**Step 2: Test the dev server**

Run: `npm run dev`

Open browser to http://localhost:3000 and verify:
- Wireframe icosahedron is visible in background
- It moves as you scroll between sections
- It rotates as you scroll
- It bobs gently when idle

**Step 3: Commit**

```bash
git add "src/app/(home)/page.tsx"
git commit -m "✨ integrate BackgroundScene into homepage"
```

---

## Task 6: Final Polish and Testing

**Step 1: Run build to verify no errors**

Run: `npm run build`

**Step 2: Test reduced motion preference**

In browser DevTools, enable "Reduce motion" in Rendering settings. Verify icosahedron shows static in center.

**Step 3: Test on mobile viewport**

Resize browser to mobile width, verify icosahedron positions look reasonable.

**Step 4: Final commit and push**

```bash
git add .
git commit -m "✨ complete wireframe icosahedron background feature"
git push
```
