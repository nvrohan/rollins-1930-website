# CLAUDE.md — Rollins 1930 Official Website

---

# 1. PROJECT OVERVIEW

Rollins 1930 is a luxury saxophone brand founded in 2008.

The website must position Rollins 1930 as a world-class manufacturer crafting premium saxophones in Taiwan, comparable to the top global brands.

Design inspiration: Henry Selmer Paris — luxury, minimal, cinematic, editorial, dark theme with gold/brass accents.

Primary objective:
Build a premium marketing + product showcase website featuring 9 saxophone models across 3 tiers.

---

# 2. TECH STACK

- Framework: Next.js 16 (App Router only)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS v4
- Runtime: Node.js
- Fonts: Premium serif for headings, modern sans for body
- Images: next/image (optimized)
- Animations: Subtle only (Framer Motion optional)

Do NOT use Pages Router.

Prefer Server Components by default.
Add `"use client"` only when required.

---

# 3. PRODUCT STRUCTURE (FIXED — DO NOT MODIFY)

## Saxophone Types
- Alto
- Tenor
- Soprano

## Series Tiers

Student → Legacy Series  
Semi-Professional → Heritage Series  
Professional → Imperial Series  

## Product List (9 SKUs)

### Alto
- Legacy A1
- Heritage A2
- Imperial A3

### Tenor
- Legacy T1
- Heritage T2
- Imperial T3

### Soprano
- Legacy S1
- Heritage S2
- Imperial S3

Total Products: 9

---

# 4. REQUIRED PAGES

1. Home
2. Saxophones (overview + filtering)
3. Product Detail Page (dynamic route)
4. About Us
5. Partners
6. Contact / Inquiry

---

# 5. PARTNERS PAGE (MANDATORY CONTENT)

Must include:

## Rohan Gore
Title: Partner — India

Include:
- Professional bio paragraph
- Image placeholder component
- Contact section (email placeholder allowed)

This section is required for v1.

---

# 6. VISUAL DESIGN SYSTEM

## Overall Tone
Luxury, premium, cinematic.

## Colors
- Matte black / charcoal background
- Gold / brass accent tones
- Soft gradients allowed
- No bright playful colors

## Layout
- Large hero sections
- Generous whitespace
- Editorial layout
- Clean grids
- No clutter

## Typography
- Serif for headings (luxury feel)
- Clean sans-serif for body
- Strong hierarchy

## Animations
- Subtle fades
- Smooth scroll transitions
- No flashy effects

Avoid:
- SaaS-style UI
- Overcrowded cards
- Generic template feel

---

# 7. DATA ARCHITECTURE

Create:

/src/data/products.ts

Each product must include:

- id
- name
- series
- tier
- type
- description
- features: string[]
- specs: Record<string, string>
- images: string[]
- finishOptions: string[]

No backend required.
All data static for v1.

---

# 8. IMAGE STRATEGY

Store all images in:

/public/images/

Standard Ratios:

- Hero: 16:9
- Product portrait: 4:5
- Macro detail: 1:1

Use next/image optimization.
Provide placeholder fallback images if needed.

---

# 9. SEO REQUIREMENTS

Each page must include:

- Unique metadata title
- Meta description
- OpenGraph tags
- Proper semantic HTML structure

Homepage title example:
"Rollins 1930 — World-Class Saxophones Crafted in Taiwan"

---

# 10. HOMEPAGE STRUCTURE

Hero Section:
- Large saxophone visual
- Tagline:
  "The Sound of Precision Since 2008"
- CTA: Explore Collection

Sections:
- Featured Models
- Craftsmanship (Made in Taiwan story)
- Series Overview (Legacy / Heritage / Imperial)
- Partners Highlight
- Call-to-Action

---

# 11. ABOUT PAGE CONTENT RULES

Must state:

- Founded in 2008
- Crafted in Taiwan
- World-class quality
- Comparable to top global brands
- Focus on precision engineering and hand-finishing

Tone: Confident, premium, not exaggerated.

---

# 12. PRODUCT PAGE TEMPLATE REQUIREMENTS

Each PDP must include:

- Hero image
- Model name + tagline
- Description
- Key features list
- Technical specifications table
- Sound profile section
- Image gallery
- Inquiry button

No pricing displayed unless explicitly requested.

---

# 13. COMPONENTS REQUIRED

- Header (sticky, minimal)
- Footer (newsletter + links)
- Product Card
- Product Grid
- Product Filter (type + tier)
- Product Detail Template
- Partner Card
- Contact Form

---

# 14. DEVELOPMENT CONVENTIONS

- App Router only
- Strict TypeScript (no `any`)
- Use Tailwind utilities
- No inline CSS
- Clean component structure
- Colocate components when appropriate
- Shared components in /components

---

# 15. DEFINITION OF DONE

Project is complete when:

- All 9 products implemented
- Fully responsive (mobile + desktop)
- No lorem ipsum
- Visual consistency maintained
- SEO metadata present
- Smooth subtle animations
- Lighthouse friendly

---

# 16. CLAUDE WORKING INSTRUCTIONS

When implementing:

1. Propose file structure first
2. Build in phases:
   - Layout + theme system
   - Data layer
   - Home page
   - Listing page
   - PDP template
   - About + Partners
3. Keep branding premium
4. Do not invent pricing
5. Do not change product names

Focus on quality over speed.

---

End of file.


