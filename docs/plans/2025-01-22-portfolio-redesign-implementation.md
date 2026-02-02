# Portfolio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the portfolio with bold visuals, 3D animations, and emerald accent to position Nicolas as a problem solver targeting startups and agencies.

**Architecture:** Next.js 16.1 with App Router, GSAP for animations, Three.js for 3D elements, Tailwind CSS for styling. The homepage features scroll-driven sections with immersive transitions. Data-driven content from TypeScript files.

**Tech Stack:** Next.js 16.1, React 19.2, GSAP + ScrollTrigger, Three.js, Tailwind CSS 3.x

---

## Phase 1: Foundation Setup

### Task 1.1: Upgrade Next.js to 16.1

**Files:**
- Modify: `package.json`

**Step 1: Update package.json dependencies**

```json
{
  "dependencies": {
    "next": "^16.1.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

**Step 2: Run npm install**

Run: `npm install`
Expected: Dependencies installed successfully

**Step 3: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts without errors

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: upgrade to Next.js 16.1 and React 19.2"
```

---

### Task 1.2: Install Animation Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install GSAP and Three.js**

Run: `npm install gsap @gsap/react three @react-three/fiber @react-three/drei`

**Step 2: Install type definitions**

Run: `npm install -D @types/three`

**Step 3: Verify installation**

Run: `npm run dev`
Expected: Server starts without errors

**Step 4: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: add GSAP and Three.js dependencies"
```

---

### Task 1.3: Update Tailwind Config with Emerald Palette

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Add emerald colors and extend theme**

```typescript
import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'

import typographyStyles from './typography'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  darkMode: 'class',
  plugins: [typographyPlugin, require('@tailwindcss/container-queries')],
  theme: {
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#fafafa',
        muted: '#a1a1aa',
        accent: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
      },
      backgroundImage: {
        'noise': "url('/imgs/noise.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
} satisfies Config
```

**Step 2: Commit**

```bash
git add tailwind.config.ts
git commit -m "feat: add emerald color palette and animation utilities"
```

---

### Task 1.4: Create Noise Texture SVG

**Files:**
- Create: `public/imgs/noise.svg`

**Step 1: Create noise texture**

```svg
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="noise">
    <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
    <feColorMatrix type="saturate" values="0"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#noise)" opacity="0.05"/>
</svg>
```

**Step 2: Commit**

```bash
git add public/imgs/noise.svg
git commit -m "feat: add noise texture for section backgrounds"
```

---

### Task 1.5: Create Data Files for Talks and Testimonials

**Files:**
- Create: `src/data/talks.ts`
- Create: `src/data/testimonials.ts`

**Step 1: Create talks data file**

```typescript
// src/data/talks.ts
export interface Talk {
  slug: string
  title: string
  event: string
  date: string
  description: string
  tags: string[]
  videoUrl?: string
  slidesUrl?: string
  eventUrl?: string
  thumbnail?: string
}

export const talks: Talk[] = [
  {
    slug: 'claude-code-france-2025',
    title: 'Building with Claude Code',
    event: 'Claude Code France',
    date: '2025-01-15',
    description: 'Sharing insights on leveraging AI-assisted development to build products faster and smarter.',
    tags: ['AI', 'Claude Code', 'Developer Tools'],
    // videoUrl: 'https://...',
    // slidesUrl: 'https://...',
  },
]
```

**Step 2: Create testimonials data file**

```typescript
// src/data/testimonials.ts
export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
  avatarUrl?: string
}

export const testimonials: Testimonial[] = [
  // Placeholder - add testimonials here when available
  // {
  //   id: '1',
  //   quote: 'Your testimonial here.',
  //   author: 'Client Name',
  //   role: 'CEO',
  //   company: 'Company Name',
  // },
]
```

**Step 3: Commit**

```bash
git add src/data/talks.ts src/data/testimonials.ts
git commit -m "feat: add data files for talks and testimonials"
```

---

## Phase 2: Animation Infrastructure

### Task 2.1: Create GSAP Animation Hooks

**Files:**
- Create: `src/hooks/useScrollAnimation.ts`
- Create: `src/hooks/useParallax.ts`

**Step 1: Create scroll animation hook**

```typescript
// src/hooks/useScrollAnimation.ts
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollAnimationOptions {
  animation: 'fade-up' | 'fade-in' | 'slide-right' | 'scale-up'
  delay?: number
  duration?: number
  stagger?: number
  start?: string
  end?: string
  scrub?: boolean | number
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const element = ref.current
    const {
      animation,
      delay = 0,
      duration = 0.6,
      start = 'top 80%',
      end = 'bottom 20%',
      scrub = false,
    } = options

    const animations: Record<string, gsap.TweenVars> = {
      'fade-up': { opacity: 0, y: 30 },
      'fade-in': { opacity: 0 },
      'slide-right': { opacity: 0, x: 50 },
      'scale-up': { opacity: 0, scale: 0.95 },
    }

    gsap.set(element, animations[animation])

    const tween = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub,
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [options])

  return ref
}
```

**Step 2: Create parallax hook**

```typescript
// src/hooks/useParallax.ts
'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxOptions {
  speed?: number
  direction?: 'vertical' | 'horizontal'
}

export function useParallax<T extends HTMLElement>(options: ParallaxOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const element = ref.current
    const { speed = 0.5, direction = 'vertical' } = options

    const tween = gsap.to(element, {
      [direction === 'vertical' ? 'y' : 'x']: () => speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.kill()
    }
  }, [options])

  return ref
}
```

**Step 3: Commit**

```bash
git add src/hooks/useScrollAnimation.ts src/hooks/useParallax.ts
git commit -m "feat: add GSAP scroll animation and parallax hooks"
```

---

### Task 2.2: Create Three.js Hero Scene Component

**Files:**
- Create: `src/components/three/HeroScene.tsx`
- Create: `src/components/three/FloatingParticles.tsx`

**Step 1: Create floating particles component**

```typescript
// src/components/three/FloatingParticles.tsx
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
```

**Step 2: Create hero scene component**

```typescript
// src/components/three/HeroScene.tsx
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
```

**Step 3: Commit**

```bash
git add src/components/three/HeroScene.tsx src/components/three/FloatingParticles.tsx
git commit -m "feat: add Three.js hero scene with floating particles"
```

---

## Phase 3: Homepage Redesign

### Task 3.1: Create Social Proof Badge Component

**Files:**
- Create: `src/components/SocialProofBadge.tsx`

**Step 1: Create badge component**

```typescript
// src/components/SocialProofBadge.tsx
import Link from 'next/link'
import clsx from 'clsx'

interface SocialProofBadgeProps {
  href: string
  icon?: React.ReactNode
  text: string
  className?: string
}

export function SocialProofBadge({
  href,
  icon,
  text,
  className,
}: SocialProofBadgeProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm transition-all hover:border-accent/50 hover:text-accent',
        className
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/SocialProofBadge.tsx
git commit -m "feat: add social proof badge component"
```

---

### Task 3.2: Create Glass Card Component

**Files:**
- Create: `src/components/GlassCard.tsx`

**Step 1: Create glass card with 3D tilt**

```typescript
// src/components/GlassCard.tsx
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
```

**Step 2: Commit**

```bash
git add src/components/GlassCard.tsx
git commit -m "feat: add glass card component with 3D tilt effect"
```

---

### Task 3.3: Create Hero Section Component

**Files:**
- Create: `src/components/sections/HeroSection.tsx`

**Step 1: Create hero section**

```typescript
// src/components/sections/HeroSection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { HeroScene } from '@/components/three/HeroScene'
import { SocialProofBadge } from '@/components/SocialProofBadge'
import { InstagramIcon } from '@/components/SocialIcons'
import { AiGuideIcon } from '@/components/icons/AiGuideLogo'
import profileImage from '@/../public/imgs/profile-transparent.png'

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const eyebrowRef = useRef<HTMLParagraphElement>(null)
  const badgesRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(eyebrowRef.current, { opacity: 0, y: 20, duration: 0.6 })
      .from(
        headlineRef.current?.children || [],
        { opacity: 0, y: 30, duration: 0.8, stagger: 0.1 },
        '-=0.3'
      )
      .from(badgesRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from(ctaRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
      .from(
        imageRef.current,
        { opacity: 0, scale: 0.95, duration: 1 },
        '-=0.8'
      )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <HeroScene />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-12 px-6 py-24 lg:flex-row lg:gap-16">
        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <p
            ref={eyebrowRef}
            className="mb-4 text-sm font-medium uppercase tracking-widest text-accent"
          >
            Software Architect. Problem Solver. Builder.
          </p>

          <h1
            ref={headlineRef}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">You don't need</span>
            <span className="block">more code.</span>
            <span className="block text-accent">You need better systems.</span>
          </h1>

          <div ref={badgesRef} className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <SocialProofBadge
              href="https://instagram.com/laforet.dev/"
              icon={<InstagramIcon className="h-4 w-4 fill-current" />}
              text="15.5k builders follow my journey"
            />
            <SocialProofBadge
              href="/guides/ai/mvp"
              icon={<AiGuideIcon className="h-4 w-4 [&>path]:fill-current" />}
              text="Helped 850+ devs leverage AI"
            />
          </div>

          <div ref={ctaRef} className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-background transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              Let's talk
            </Link>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="relative flex-1">
          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <Image
              src={profileImage}
              alt="Nicolas Laforêt"
              priority
              className="relative z-10 h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: add hero section with GSAP animations and 3D scene"
```

---

### Task 3.4: Create What I Do Section

**Files:**
- Create: `src/components/sections/WhatIDoSection.tsx`

**Step 1: Create what I do section**

```typescript
// src/components/sections/WhatIDoSection.tsx
'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlassCard } from '@/components/GlassCard'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    problem: 'Your MVP is stuck in planning',
    solution:
      'I architect systems that ship. From idea to production, with the foundation to scale.',
  },
  {
    problem: 'Your codebase is slowing you down',
    solution:
      'I untangle complexity. Better architecture, cleaner code, faster teams.',
  },
  {
    problem: 'You need senior expertise, not just hands',
    solution:
      'I solve problems, not just tickets. Security, performance, and systems thinking built in.',
  },
]

export function WhatIDoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !cardsRef.current) return

    const cards = cardsRef.current.children

    gsap.from(cards, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-background bg-noise py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          ref={cardsRef}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <GlassCard key={index}>
              <h3 className="text-xl font-bold text-foreground">
                "{service.problem}"
              </h3>
              <p className="mt-4 text-muted">{service.solution}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/WhatIDoSection.tsx
git commit -m "feat: add what I do section with glass cards"
```

---

### Task 3.5: Create Featured Work Section

**Files:**
- Create: `src/components/sections/FeaturedWorkSection.tsx`

**Step 1: Create featured work section with scroll pinning**

```typescript
// src/components/sections/FeaturedWorkSection.tsx
'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const featuredProjects = projects
    .filter((p) => p.slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !containerRef.current) return

    const projectElements = containerRef.current.querySelectorAll('.project-card')

    projectElements.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={containerRef} className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.slug}
              className="project-card flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16"
            >
              <div className="flex-1">
                <span className="text-sm font-medium uppercase tracking-widest text-muted">
                  Featured Project
                </span>
                <h3 className="mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                  <span className="text-accent">{project.title}</span>
                </h3>
                <p className="mt-4 text-lg text-muted">
                  The challenge: {project.description}
                </p>
                {project.tags && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-8 inline-flex items-center text-accent transition-colors hover:text-accent-light"
                >
                  View case study
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="flex-1">
                <div className="aspect-video rounded-2xl border border-zinc-700/50 bg-zinc-900/50 p-4">
                  <div className="flex h-full items-center justify-center text-muted">
                    Project Visual
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center text-lg text-accent transition-colors hover:text-accent-light"
          >
            See all work
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/FeaturedWorkSection.tsx
git commit -m "feat: add featured work section with scroll animations"
```

---

### Task 3.6: Create Testimonials Section

**Files:**
- Create: `src/components/sections/TestimonialsSection.tsx`

**Step 1: Create testimonials section**

```typescript
// src/components/sections/TestimonialsSection.tsx
'use client'

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GlassCard } from '@/components/GlassCard'
import { testimonials } from '@/data/testimonials'

gsap.registerPlugin(ScrollTrigger)

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !sectionRef.current) return

    gsap.from(sectionRef.current.querySelectorAll('.testimonial-card'), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Don't render if no testimonials
  if (testimonials.length === 0) return null

  return (
    <section ref={sectionRef} className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="space-y-8">
          {testimonials.map((testimonial) => (
            <GlassCard
              key={testimonial.id}
              className="testimonial-card border-accent/20"
            >
              <blockquote>
                <p className="text-xl italic text-foreground md:text-2xl">
                  <span className="text-4xl text-accent">"</span>
                  {testimonial.quote}
                  <span className="text-4xl text-accent">"</span>
                </p>
                <footer className="mt-6">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </footer>
              </blockquote>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/TestimonialsSection.tsx
git commit -m "feat: add testimonials section"
```

---

### Task 3.7: Create Contact Section

**Files:**
- Create: `src/components/sections/ContactSection.tsx`

**Step 1: Create contact section**

```typescript
// src/components/sections/ContactSection.tsx
'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const EMAIL = 'nicolas@laforet.dev'
const CAL_URL = 'https://cal.com/laforet' // Update with actual Cal.com URL

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion || !contentRef.current) return

    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
        toggleActions: 'play none none reverse',
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-background py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div ref={contentRef}>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Let's build something great
          </h2>
          <p className="mt-6 text-lg text-muted">
            I'm selective about projects I take on. If you're solving
            interesting problems, let's connect.
          </p>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <Link
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-8 py-4 text-lg font-semibold text-background transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
            >
              Book a call
            </Link>
            <Link
              href={`mailto:${EMAIL}`}
              className="text-lg text-muted transition-colors hover:text-accent"
            >
              {EMAIL}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add src/components/sections/ContactSection.tsx
git commit -m "feat: add contact section"
```

---

### Task 3.8: Create New Homepage

**Files:**
- Modify: `src/app/(home)/page.tsx`

**Step 1: Replace homepage with new sections**

```typescript
// src/app/(home)/page.tsx
import { HeroSection } from '@/components/sections/HeroSection'
import { WhatIDoSection } from '@/components/sections/WhatIDoSection'
import { FeaturedWorkSection } from '@/components/sections/FeaturedWorkSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatIDoSection />
      <FeaturedWorkSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/(home)/page.tsx
git commit -m "feat: rebuild homepage with new sections"
```

---

## Phase 4: Update Layout and Navigation

### Task 4.1: Update Root Layout for Dark Theme

**Files:**
- Modify: `src/app/layout.tsx`

**Step 1: Update layout with dark background**

Read the current layout first, then update the body classes to use the new dark theme by default. Add `bg-background` class and ensure dark mode is properly applied.

**Step 2: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat: update layout for dark theme"
```

---

### Task 4.2: Update Header Navigation

**Files:**
- Modify: `src/components/Header.tsx`

**Step 1: Update navigation items**

Update the navigation to include: Home, Work, Talks, Articles, About. Remove Uses and AI Chat from main nav. Update colors from teal to emerald accent.

**Step 2: Commit**

```bash
git add src/components/Header.tsx
git commit -m "feat: update header navigation for redesign"
```

---

### Task 4.3: Update Footer

**Files:**
- Modify: `src/components/Footer.tsx`

**Step 1: Update footer styling**

Update footer to match dark theme with emerald accents. Simplify layout.

**Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: update footer for redesign"
```

---

## Phase 5: Secondary Pages

### Task 5.1: Create Work Page

**Files:**
- Create: `src/app/(home)/work/page.tsx`

**Step 1: Create work listing page**

```typescript
// src/app/(home)/work/page.tsx
import Link from 'next/link'
import { projects } from '@/data/projects'
import { GlassCard } from '@/components/GlassCard'

export const metadata = {
  title: 'Work',
  description: 'Problems solved, systems built.',
}

export default function WorkPage() {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const featured = sortedProjects.filter((p) => p.slug).slice(0, 2)
  const others = sortedProjects.filter(
    (p) => !featured.find((f) => f.title === p.title)
  )

  return (
    <main className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">
            Work
          </h1>
          <p className="mt-4 text-xl text-muted">
            Problems solved, systems built.
          </p>
        </header>

        {/* Featured */}
        <section className="mb-24">
          <div className="grid gap-8 lg:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project.title}
                href={project.slug ? `/work/${project.slug}` : '#'}
              >
                <GlassCard className="h-full transition-transform hover:scale-[1.02]">
                  <div className="aspect-video rounded-lg bg-zinc-800 mb-4" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted">{project.description}</p>
                  {project.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-zinc-700 px-2 py-1 text-xs text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <GlassCard key={project.title}>
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{project.description}</p>
                <p className="mt-4 text-xs text-zinc-500">{project.date}</p>
              </GlassCard>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/(home)/work/page.tsx
git commit -m "feat: add work listing page"
```

---

### Task 5.2: Create Work Detail Page Template

**Files:**
- Create: `src/app/(home)/work/[slug]/page.tsx`

**Step 1: Create case study template**

```typescript
// src/app/(home)/work/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects
    .filter((p) => p.slug)
    .map((project) => ({
      slug: project.slug,
    }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const nextProject = projects.filter((p) => p.slug)[projectIndex + 1]

  return (
    <main className="bg-background py-24 md:py-32">
      <article className="mx-auto max-w-4xl px-6">
        <header className="mb-16">
          <Link
            href="/work"
            className="mb-8 inline-flex items-center text-muted hover:text-accent"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Work
          </Link>
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            {project.title}
          </h1>
          {project.tags && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-700 px-3 py-1 text-sm text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <section>
            <h2 className="text-accent">The Problem</h2>
            <p>{project.description}</p>
          </section>

          <section>
            <h2 className="text-accent">The Approach</h2>
            <p>
              Detail the approach taken to solve this problem. What technologies
              were chosen and why? What was the architecture?
            </p>
          </section>

          <section>
            <h2 className="text-accent">The Solution</h2>
            <p>
              Describe the final solution and how it addresses the original
              problem.
            </p>
          </section>

          <section>
            <h2 className="text-accent">Results</h2>
            <p>What was the impact? Include metrics if available.</p>
          </section>
        </div>

        {project.link && (
          <div className="mt-12">
            <Link
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-accent px-6 py-3 font-semibold text-background transition-all hover:bg-accent-light"
            >
              View Live Project
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
          </div>
        )}

        {nextProject && (
          <nav className="mt-24 border-t border-zinc-800 pt-12">
            <p className="text-sm text-muted">Next Project</p>
            <Link
              href={`/work/${nextProject.slug}`}
              className="mt-2 inline-block text-2xl font-bold text-foreground hover:text-accent"
            >
              {nextProject.title}
            </Link>
          </nav>
        )}
      </article>
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add "src/app/(home)/work/[slug]/page.tsx"
git commit -m "feat: add case study detail page template"
```

---

### Task 5.3: Create Talks Page

**Files:**
- Create: `src/app/(home)/talks/page.tsx`

**Step 1: Create talks page**

```typescript
// src/app/(home)/talks/page.tsx
import Link from 'next/link'
import { talks } from '@/data/talks'
import { GlassCard } from '@/components/GlassCard'

export const metadata = {
  title: 'Talks',
  description: 'Sharing what I've learned.',
}

export default function TalksPage() {
  const sortedTalks = talks.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-16">
          <h1 className="text-5xl font-bold text-foreground md:text-6xl">
            Talks
          </h1>
          <p className="mt-4 text-xl text-muted">
            Sharing what I've learned.
          </p>
        </header>

        <div className="space-y-8">
          {sortedTalks.map((talk) => (
            <GlassCard key={talk.slug}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">
                    {talk.title}
                  </h3>
                  <p className="mt-1 text-accent">
                    {talk.event} · {talk.date}
                  </p>
                  <p className="mt-3 text-muted">{talk.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {talk.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-700 px-2 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  {talk.videoUrl && (
                    <Link
                      href={talk.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent-light"
                    >
                      Watch recording
                    </Link>
                  )}
                  {talk.slidesUrl && (
                    <Link
                      href={talk.slidesUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent-light"
                    >
                      View slides
                    </Link>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {talks.length === 0 && (
          <p className="text-center text-muted">
            More talks coming soon.
          </p>
        )}
      </div>
    </main>
  )
}
```

**Step 2: Commit**

```bash
git add src/app/(home)/talks/page.tsx
git commit -m "feat: add talks page"
```

---

### Task 5.4: Update Articles Page

**Files:**
- Modify: `src/app/(home)/articles/page.tsx`

**Step 1: Update articles page styling**

Update the articles page to match the new dark theme with emerald accents. Change from grid to list layout.

**Step 2: Commit**

```bash
git add src/app/(home)/articles/page.tsx
git commit -m "feat: update articles page for redesign"
```

---

### Task 5.5: Update About Page

**Files:**
- Modify: `src/app/(home)/about/page.tsx`

**Step 1: Update about page**

Rewrite about page with new positioning: "Software Architect. Problem Solver. Builder." Two-column layout with photo. Remove corporate mentions and freelance label.

**Step 2: Commit**

```bash
git add src/app/(home)/about/page.tsx
git commit -m "feat: update about page for redesign"
```

---

## Phase 6: Polish and Cleanup

### Task 6.1: Update Global Styles

**Files:**
- Modify: `src/app/globals.css` (if exists) or create if needed

**Step 1: Add base dark theme styles**

Ensure the base styles support the dark theme and emerald accents.

**Step 2: Commit**

```bash
git add src/app/globals.css
git commit -m "feat: update global styles for dark theme"
```

---

### Task 6.2: Update Typography Config

**Files:**
- Modify: `typography.ts`

**Step 1: Update typography for dark theme**

Update the typography configuration to use emerald for links and proper dark mode colors.

**Step 2: Commit**

```bash
git add typography.ts
git commit -m "feat: update typography config for dark theme"
```

---

### Task 6.3: Remove Old Components and Clean Up

**Files:**
- Various cleanup

**Step 1: Remove unused components**

Remove or archive components that are no longer needed after the redesign (old homepage sections, etc.)

**Step 2: Commit**

```bash
git add -A
git commit -m "chore: clean up unused components"
```

---

### Task 6.4: Test and Fix Issues

**Step 1: Run development server**

Run: `npm run dev`
Expected: Server starts, navigate through all pages

**Step 2: Run build**

Run: `npm run build`
Expected: Build completes without errors

**Step 3: Run lint**

Run: `npm run lint`
Expected: No linting errors

**Step 4: Fix any issues found**

Address any errors or warnings from the above steps.

**Step 5: Commit fixes**

```bash
git add -A
git commit -m "fix: address build and lint issues"
```

---

### Task 6.5: Final Review and Polish

**Step 1: Visual review**

Check all pages for visual consistency, animations working, responsive design.

**Step 2: Performance check**

Ensure Three.js and GSAP don't cause performance issues. Check reduced motion is respected.

**Step 3: Accessibility check**

Verify proper contrast, keyboard navigation, screen reader support.

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio redesign"
```

---

## Summary

This plan covers:

1. **Phase 1:** Foundation - Next.js 16.1 upgrade, dependencies, Tailwind config, data files
2. **Phase 2:** Animation infrastructure - GSAP hooks, Three.js components
3. **Phase 3:** Homepage - Hero, What I Do, Featured Work, Testimonials, Contact sections
4. **Phase 4:** Layout and navigation updates
5. **Phase 5:** Secondary pages - Work, Talks, Articles, About
6. **Phase 6:** Polish and cleanup

Each task is atomic with exact file paths and code. Commits are frequent and descriptive following the gitmoji convention.
