# Portfolio Redesign Design

## Overview

Complete redesign of Nicolas Laforêt's portfolio to position him as a problem solver and systems architect targeting startups/founders and agencies/studios. The new design emphasizes bold visuals, immersive 3D animations, and clear social proof.

## Target Audience

- **Startups/Founders** - Building products, need technical expertise and systems thinking
- **Agencies/Studios** - Looking for a developer who understands design and delivers premium work

## Positioning

**Core message:** Problem solver and systems architect, not just a developer. Senior expertise means solving problems, designing systems, and building architecture—not just writing code.

**Headline:** "You don't need more code. You need better systems."

**Tagline:** "Software Architect. Problem Solver. Builder."

## Visual Direction

### Style
- **Bold & Confident** - Large typography, high contrast, dramatic animations
- **Dark-dominant theme** - Near-black backgrounds (#0a0a0a)
- **Premium agency vibes** - Sophisticated, commanding attention

### Colors
- **Primary background:** Near-black (#0a0a0a)
- **Text primary:** Off-white (#fafafa)
- **Text secondary:** Muted gray (#a1a1aa)
- **Accent:** Emerald green (#10b981) - connects to "Laforêt" (the forest)

### Typography
- Large, bold display font for headlines
- Clean sans-serif for body text
- Generous sizing - headlines should command attention

### Textures & Effects
- Noise texture for depth on dark sections
- Glass-morphism cards (semi-transparent with blur)
- Subtle emerald glow on interactive elements

## Social Proof Badges

Two prominent badges in the hero:

1. **Instagram:** "15.5k builders follow my journey" → links to Instagram profile
2. **AI Guide:** "Helped 850+ devs leverage AI" → links to AI Guide

## Homepage Structure

### Section 1: Hero
- Full viewport height, dark background
- Transparent photo of Nicolas positioned right of center (40-50% viewport width)
- 3D animated particles/geometric shapes in emerald green floating around photo
- Mouse-responsive parallax on 3D elements

**Content (left side):**
- Eyebrow: "Software Architect. Problem Solver. Builder."
- Headline (massive): "You don't need more code. You need better systems."
- Social proof badges (Instagram + AI Guide)
- CTA button: "Let's talk" (emerald, links to contact section)

**Animation:**
- GSAP entrance: photo fades up, 3D elements scatter in
- Headline words animate in sequentially (staggered fade-up)
- Scroll parallax on photo and 3D elements

### Section 2: What I Do
- Dark section with noise texture
- Three problem→solution cards horizontally (stack on mobile)

**Cards:**

1. **"Your MVP is stuck in planning"**
   → I architect systems that ship. From idea to production, with the foundation to scale.

2. **"Your codebase is slowing you down"**
   → I untangle complexity. Better architecture, cleaner code, faster teams.

3. **"You need senior expertise, not just hands"**
   → I solve problems, not just tickets. Security, performance, and systems thinking built in.

**Animation:**
- 3D tilt on hover (Three.js or CSS 3D transforms)
- Staggered entrance on scroll (GSAP)
- Emerald glow/border on hover
- Glass-morphism card style

### Section 3: Featured Work
- Full-width, each project takes 80-100vh
- GSAP ScrollTrigger pinning for horizontal scroll feel via vertical scrolling
- 2-3 featured case studies

**Per project:**
- Large project title (emerald accent)
- Problem statement: "The challenge: [problem]"
- Key visual on 3D floating card/device
- Technology tags
- "View case study →" link

**Scroll animation sequence:**
1. Title slides in from right
2. Visual scales up / rotates into view
3. Problem statement fades in
4. On continue scroll, project exits while next enters

**After featured projects:**
- "See all work →" link to /work page

### Section 4: Testimonials
- Narrower centered section
- No section title - let quotes speak
- Carousel or stacked cards (2-3 slots)

**Card design:**
- Dark glass-morphism with emerald border
- Large quote text with oversized quotation marks
- Client name, role, company below
- Placeholder content initially

**Animation:**
- 3D tilt on hover
- Smooth carousel transitions (if carousel)
- Fade-in on scroll

**Data:** `src/data/testimonials.ts` - empty initially, easy to populate later

### Section 5: Contact/CTA
- Full-width section, no gradient
- Centered content, generous whitespace

**Content:**
- Headline: "Let's build something great"
- Supporting text: "I'm selective about projects I take on. If you're solving interesting problems, let's connect."
- Primary button (emerald): "Book a call" → links to Cal.com (new tab)
- Email displayed as mailto link (e.g., nicolas@laforet.dev)

**Footer:**
- Minimal: nav links, social icons, copyright
- Keep simple - CTA is the focus

## Navigation

**Structure:** Home, Work, Talks, Articles, About

## Secondary Pages

### Work Page (/work)

**Hero:**
- Page title: "Work" (large, bold)
- One-liner: "Problems solved, systems built."

**Featured Case Studies (top):**
- 2-3 large cards (similar to homepage but static, no scroll pinning)
- Project name, one-line description, key visual
- Clickable to full case study

**Project Grid (below):**
- 3-column grid (2 tablet, 1 mobile)
- Thumbnail, title, short description, year
- Hover: 3D tilt + emerald glow
- All clickable to detail pages

**Case Study Detail Page:**
- Hero: project name + key visual
- Sections: The Problem → The Approach → The Solution → Results/Impact
- Tech stack tags
- Link to live project (if applicable)
- "Next project" navigation at bottom

### Talks Page (/talks)

**Hero:**
- Page title: "Talks" (large, bold)
- One-liner: "Sharing what I've learned."

**Talk Cards (list layout):**
- Talk title (large)
- Event name + date
- Short description (1-2 sentences)
- Tags: topic areas (e.g., "AI", "Claude Code")
- Optional: thumbnail or event logo

**Actions per card:**
- "Watch recording" (if video exists)
- "View slides" (if slides exist)
- Event page link (if relevant)

**Animation:**
- Cards fade/slide in on scroll
- Hover: lift + emerald accent

**Data:** `src/data/talks.ts`

**First entry:** Claude Code France event

### Articles Page (/articles)

**Hero:**
- Page title: "Articles" (large, bold)
- One-liner: "Thoughts on building, shipping, and growing."

**Article List:**
- Clean list layout (not grid)
- Title (large, bold)
- Date
- Short description/excerpt
- Optional: reading time

**Styling:**
- Hover: title shifts to emerald, subtle lift
- Clear spacing between entries

**Article Detail:**
- Keep MDX setup
- Update styling: dark theme + emerald accents
- Improved typography (larger body, better line height)

**Animation:**
- Staggered fade-in on scroll
- Minimal - content is focus

### About Page (/about)

**Layout:**
- Two-column desktop (photo left, content right), stacks mobile
- Photo (transparent or different shot)
- Dark background

**Content:**
- Name large: "Nicolas Laforêt"
- Tagline: "Software Architect. Problem Solver. Builder."
- Location: "Based in Strasbourg, France"

**Bio:**
- Who you are and what drives you
- Approach to problem-solving and systems thinking
- Building in public journey
- Indie hacker path
- No corporate job mentions, no "freelance" label

**What I Believe In (optional):**
- 2-3 guiding principles

**Social Links:**
- Instagram, LinkedIn, YouTube, X, GitLab

**CTA:**
- "Want to work together?" → link to Book a call

## Technical Approach

### Stack
- **Next.js 16.1** - Turbopack default, React Compiler stable, proxy.ts, React 19.2
- **GSAP** - Core animations + ScrollTrigger for scroll-based effects
- **Three.js** - 3D elements (hero particles, floating cards)
- **Tailwind CSS** - Extended with emerald palette, noise textures, glass-morphism utilities

### Animation Implementation

**GSAP:**
- ScrollTrigger for all scroll-based animations and section pinning
- Timeline sequences for coordinated entrances
- `gsap.to()` / `gsap.from()` for element tweens
- Stagger effects for lists and cards

**Three.js:**
- Hero: particle system / geometric shapes around photo
- Mouse-tracking for parallax depth
- Simple geometries, limited particle count for performance

### Performance
- Reusable animation hooks (`useScrollAnimation`, `useParallax`)
- Lazy-load Three.js canvas
- GPU-accelerated properties (`transform`, `opacity`)
- Respect `prefers-reduced-motion`

### Data Files
- `src/data/projects.ts` - Update with case study content
- `src/data/talks.ts` - New file for speaking engagements
- `src/data/testimonials.ts` - New file, empty initially

### Font Pairing
- Bold display font for headlines
- Clean sans-serif for body

## Assets Required

- Transparent photo: `public/imgs/profile-transparent.png` (already added)
- Noise texture (CSS or SVG)
- Project screenshots/visuals for case studies
- Talk thumbnails/event logos (optional)

## Migration Notes

- Rename "Projects" to "Work" in navigation and routes
- Add /talks route
- Update color scheme from teal to emerald throughout
- Preserve existing article MDX content
- Keep AI chatbot functionality
- Remove "Uses" page from main navigation (or keep as unlisted)
