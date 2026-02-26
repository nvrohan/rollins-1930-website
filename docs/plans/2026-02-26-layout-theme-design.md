# Layout + Theme System Design
**Date:** 2026-02-26
**Phase:** 1 — Layout + Theme System
**Status:** Approved

---

## Overview

Establish the brand foundation for the Rollins 1930 website: global CSS theme tokens, font system, root layout, sticky Header, and Footer. All subsequent pages and components build on this layer.

---

## File Structure

```
rollins-1930-website/
├── app/
│   ├── layout.tsx          # Root layout — mounts fonts + Header + Footer
│   ├── globals.css         # @theme brand tokens + base resets
│   └── page.tsx            # Placeholder — replaced in Phase 3 (Home)
├── components/
│   └── layout/
│       ├── Header.tsx      # Sticky nav: logo + 5 links + Inquire CTA
│       └── Footer.tsx      # Brand footer: logo + nav links + tagline
├── lib/
│   └── fonts.ts            # Cormorant Garamond + Inter via next/font/google
└── public/
    └── images/             # Empty — populated in later phases
```

---

## Color Palette

Defined as CSS custom properties in `globals.css` under Tailwind v4's `@theme inline` block.

| Token | Hex | Usage |
|---|---|---|
| `--color-black` | `#0A0A0A` | Page background |
| `--color-charcoal` | `#141414` | Card / surface backgrounds |
| `--color-charcoal-light` | `#1F1F1F` | Hover surface, borders |
| `--color-gold` | `#C9A84C` | Primary accent — CTAs, highlights |
| `--color-gold-light` | `#E2C875` | Hover state for gold elements |
| `--color-gold-muted` | `#8A6D2E` | Subtle gold — secondary text accent |
| `--color-white` | `#F5F0E8` | Warm white — headings, primary text |
| `--color-muted` | `#8A8A8A` | Secondary / body text |
| `--color-border` | `#2A2A2A` | Dividers, card borders |

---

## Typography

**Fonts loaded:** Cormorant Garamond (serif) + Inter (sans-serif) via `next/font/google`.
Defined in `lib/fonts.ts`, applied to `<html>` as CSS variables in `app/layout.tsx`.

| Role | Font | Approx Size | Weight | Usage |
|---|---|---|---|---|
| display | Cormorant | 5xl–7xl | 300 | Hero headlines |
| h1 | Cormorant | 4xl–5xl | 400 | Page titles |
| h2 | Cormorant | 3xl–4xl | 400 | Section headings |
| h3 | Cormorant | 2xl | 500 | Product names, card titles |
| body | Inter | base | 400 | Paragraphs, descriptions |
| small | Inter | sm | 400 | Captions, labels, specs |
| label | Inter | xs | 500 | Tags, badges, series labels (uppercase + tracking) |

---

## Header

- **Height:** 80px
- **Behavior:** Transparent on hero; transitions to `#0A0A0A` + `backdrop-blur-md` on scroll (via `useScrollY` or `scroll` event listener with `"use client"`)
- **Logo:** `ROLLINS 1930` — Cormorant Garamond, gold (`#C9A84C`), tracking-widest, uppercase
- **Nav links:** `Saxophones / About / Partners / Contact` — Inter, sm, uppercase, tracking-wide, muted white; hover → gold
- **CTA button:** `Inquire →` — gold border + gold text, hover fills gold background with black text
- **Mobile:** Hamburger icon → full-screen slide-in panel with nav links

---

## Footer

- **Background:** `#141414`
- **Top border:** 1px, gold at 20% opacity
- **Layout:** 3 columns (logo+tagline | nav links | copyright)
- **Tagline:** *"Crafted in Taiwan. Heard Around the World."* — Cormorant Garamond, italic, muted
- **Copyright:** `© 2025 Rollins 1930. All rights reserved.` — Inter xs, muted

---

## Animations

- Framer Motion installed
- Header scroll effect: CSS class toggle (no Framer needed for this)
- Future use: scroll-triggered section reveals, page transitions

---

## Decisions Made

- Approach B (Modular) chosen over flat globals.css or full design system
- No `tailwind.config.ts` — Tailwind v4 configured via CSS `@theme` only
- Framer Motion included for future phases
- No pricing UI, no Pages Router, App Router only
