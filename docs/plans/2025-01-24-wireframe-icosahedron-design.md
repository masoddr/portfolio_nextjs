# Wireframe Icosahedron Background Element

## Overview

A large, low-opacity wireframe icosahedron in the homepage background that animates to predefined positions as users scroll into each section. The shape rotates based on scroll progress and gently bobs when idle.

## Visual Properties

- **Geometry**: Icosahedron with wireframe material (edges only, no faces)
- **Color**: Zinc-500 (`#71717a`)
- **Opacity**: 15-20%
- **Size**: ~60-70% of viewport height
- **Z-index**: Behind all content (`-z-10`)

## Section Positions

| Section | Position | Notes |
|---------|----------|-------|
| Hero | Right side, vertically centered | Complements the 3D badge |
| What I Do | Left side, slightly higher | Creates visual balance |
| Featured Work | Right side, lower third | Stays out of project cards |
| Contact | Center, behind the form | Draws focus to CTA |

## Animation Behavior

### Scroll-Based Movement
- GSAP ScrollTrigger interpolates between positions as each section enters viewport
- Smooth transitions with `power2.inOut` easing

### Scroll-Based Rotation
- Full 360° rotation mapped across entire page scroll
- 0% scroll = 0° rotation, 100% scroll = 360° rotation

### Idle Bobbing
- Gentle sine-wave vertical movement
- ~10-15px amplitude
- ~3-4 second cycle
- Implemented via `useFrame` from react-three-fiber

## Technical Implementation

### File Structure

```
src/components/three/
├── HeroScene.tsx           (existing - unchanged)
├── FloatingParticles.tsx   (existing - unchanged)
├── BackgroundScene.tsx     (new - page-wide canvas)
└── WireframeIcosahedron.tsx (new - the 3D element)
```

### BackgroundScene

- Fixed position canvas spanning entire homepage
- Full viewport dimensions
- Separate from HeroScene to avoid conflicts
- Receives scroll progress and active section as props

### WireframeIcosahedron

- `IcosahedronGeometry` with `MeshBasicMaterial({ wireframe: true })`
- Props: `targetPosition`, `scrollProgress`
- Internal bobbing via `useFrame`
- Rotation driven by scroll progress (0-1)

### Scroll Integration

GSAP ScrollTrigger in homepage:
- Tracks active section index
- Calculates scroll progress (0-1)
- Passes values to BackgroundScene component

## Edge Cases

- **Mobile**: Positions adjusted for portrait (centered horizontally, vertical movement)
- **Reduced motion**: Static render at center, no animations
- **Initial load**: 0.5s fade-in to avoid pop-in
- **Resize**: Recalculates positions on viewport change
- **Section overlap**: Smooth interpolation during scroll (no snapping)

## Performance

- `will-change: transform` on canvas container
- Single geometry instance
- Minimal draw calls (wireframe material is lightweight)
- Respects `prefers-reduced-motion` media query
