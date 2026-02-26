# Home Page Design
**Date:** 2026-02-26
**Phase:** 3 — Home Page
**Status:** Approved

---

## Overview

Replace the Phase 1 placeholder `app/page.tsx` with the full Rollins 1930 home page. Six sections, one shared animation wrapper, all data from `@/data/products` (static). No async fetching.

---

## Files

```
components/ui/FadeUp.tsx    ← new: reusable scroll-triggered fade wrapper
app/page.tsx                ← replaced: full home page (Server Component)
```

---

## Architecture

- `page.tsx` is a **Server Component** — imports product data statically
- `FadeUp.tsx` is a **Client Component** (`"use client"`) — uses Framer Motion `useInView`
- Featured products hardcoded by ID: `imperial-a3`, `heritage-t2`, `legacy-s1`
- No async data fetching, no loading states needed

---

## Shared: FadeUp Component

```tsx
// components/ui/FadeUp.tsx
"use client"
// Props: children, delay (default 0), className
// Animation: opacity 0→1, y 24→0, duration 0.7s, ease-out
// Trigger: when element enters viewport (useInView, once: true)
```

---

## Section 1: Hero

- **Height:** `min-h-screen`
- **Background:** Charcoal-to-black gradient (`from-charcoal to-black`)
- **Layout:** Centered column, vertically centered
- **Content (top to bottom):**
  - Gold horizontal rule (40px × 1px)
  - `Est. 2008 · Taiwan` — Inter xs, gold, tracking-[0.3em], uppercase
  - `ROLLINS 1930` — Cormorant 7xl desktop/5xl mobile, font-light, white, tracking-widest
  - `The Sound of Precision Since 2008` — Cormorant xl italic, text-muted
  - `Explore Collection →` — gold border button, links to `/saxophones`
  - Animated bouncing chevron scroll indicator (fades out on scroll)
- **Animation:** Staggered entrance on page load (not scroll), 0.15s between each element

---

## Section 2: Featured Models

- **Background:** Black (`bg-black`)
- **Section label:** `FEATURED MODELS` — Inter xs, gold, uppercase, tracking-[0.2em], centered
- **Grid:** `grid-cols-1 md:grid-cols-3 gap-8`, max-w-screen-xl centered
- **Products:** Imperial A3, Heritage T2, Legacy S1
- **Card contents:**
  - Placeholder image area (4:5 ratio, `bg-charcoal` with gold gradient shimmer)
  - Series label: Inter xs, gold, uppercase, tracking
  - Product name: Cormorant 2xl, white
  - Tagline: Cormorant italic sm, text-muted
  - `View Details →`: Inter xs, gold, links to `/saxophones/[id]`
- **Stagger:** FadeUp with 0.1s delay between cards
- **Below grid:** `View All Saxophones →` centered link to `/saxophones`

---

## Section 3: Craftsmanship

- **Background:** `bg-charcoal`
- **Layout:** 2-column grid (stacks on mobile), max-w-screen-xl
- **Left column:**
  - Gold accent bar (2px × 48px)
  - Pull quote: *"Every saxophone begins as a sheet of brass and ends as a voice."* — Cormorant 3xl italic, white
- **Right column:** 3 craft blocks with gold dividers:
  1. **Precision Engineering** — hand-rolled tone holes, machined keywork
  2. **Hand Finishing** — individually set up and regulated
  3. **Made in Taiwan** — world-class manufacturing, founded 2008
- **Animation:** FadeUp on section entry

---

## Section 4: Series Overview

- **Background:** Black (`bg-black`)
- **Section label:** `OUR SERIES` — centered
- **Grid:** `grid-cols-1 md:grid-cols-3`, 3 columns
- **Each column:**
  - Gold top border (2px)
  - Series name: Cormorant 2xl, white
  - Tier label: Inter xs, gold, uppercase
  - Description: Inter sm, text-muted (2–3 sentences)
  - `Explore →` link to `/saxophones?tier=[Tier]`
- **Stagger:** FadeUp 0.1s per column

---

## Section 5: Partners Highlight

- **Background:** Black, centered
- **Content:**
  - `OUR PARTNERS` label — Inter xs, gold, uppercase
  - Gold rule
  - `Rohan Gore · Partner — India` — Cormorant xl, white
  - `Learn More about our Partners →` — links to `/partners`
- **Animation:** FadeUp on entry

---

## Section 6: Final CTA

- **Background:** `bg-charcoal`, full width
- **Content (centered):**
  - Gold horizontal rule
  - `Ready to Find Your Sound?` — Cormorant 4xl, white
  - `Discover the complete Rollins 1930 collection.` — Inter sm, text-muted
  - Two buttons side by side:
    - Primary: `Explore the Collection →` — gold filled, links to `/saxophones`
    - Secondary: `Inquire Now →` — gold border, links to `/contact`
- **Animation:** FadeUp on entry

---

## Decisions Made

- Approach A (single page.tsx) chosen — all sections inline, no per-section files
- Featured: one per tier (Imperial A3, Heritage T2, Legacy S1)
- Animation: subtle fade-ups on scroll entry, hero staggered on load
- Partners: minimal home mention, full content on Partners page (Phase 6)
- No real images yet — placeholder `bg-charcoal` divs with fixed aspect ratios
