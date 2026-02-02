## Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run linting
```

## Environment Setup

Required environment variables in `.env.local`:

- `NEXT_PUBLIC_SITE_URL` - Site's public URL (e.g., https://example.com)
- `EMAIL_SUBSCRIBER_DESTINATION` - Newsletter subscription destination email
- `EMAIL_USERNAME` - Email service username
- `EMAIL_PASSWORD` - Email service password
- `OPENAI_API_KEY` - For AI chatbot functionality

## Architecture Overview

Next.js 16 portfolio site with TypeScript, Tailwind CSS, MDX content, and animation libraries (GSAP, Three.js).

### Key Directory Structure

- `src/app/` - Next.js App Router
  - `(home)/` - Main site pages with grouped routing
  - `api/` - API routes for chat and newsletter
  - `chat/` - AI chat interface
- `src/components/` - UI components
  - `sections/` - Homepage sections (Hero, WhatIDo, FeaturedWork, Testimonials, Contact)
  - `three/` - Three.js components (HeroScene, FloatingParticles)
- `src/hooks/` - GSAP animation hooks (useScrollAnimation, useParallax)
- `src/data/` - Static data files (projects, articles, talks, testimonials)

### Content Management

Dual system for articles:
- **MDX files**: `src/app/(home)/articles/{slug}/page.mdx`
- **Data file**: `src/data/articles.ts` (used by AI chatbot)

**Important**: When adding articles, update both the MDX file AND `src/data/articles.ts`.

Each article requires metadata export:
```typescript
export const article = {
  title: string,
  description: string,
  author: string,
  date: string, // ISO format
  link?: { href: string, label: string }
}
```

### Design System

Dark theme with emerald accent colors (defined in `tailwind.config.ts`):
- `background`: #0a0a0a
- `foreground`: #fafafa
- `muted`: #a1a1aa
- `accent`: #10b981 (emerald)

Glass-morphism cards with 3D tilt effects via `GlassCard` component.

### Animation Infrastructure

- **GSAP**: ScrollTrigger animations via custom hooks
- **Three.js**: Floating particles in hero section (`@react-three/fiber`, `@react-three/drei`)
- All animations respect `prefers-reduced-motion`

