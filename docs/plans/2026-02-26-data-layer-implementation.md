# Data Layer Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create `data/products.ts` — a single static file with TypeScript types, full marketing copy for all 9 Rollins 1930 saxophone products, and helper query functions.

**Architecture:** Single file at `data/products.ts`. Exported types (`SaxophoneType`, `SeriesTier`, `Product`), a typed `products` array of 9 entries, and three helper functions. No external dependencies. Accessed via `@/data/products` from any page.

**Tech Stack:** TypeScript strict, no runtime dependencies

---

## Task 1: Scaffold — types, empty array, and helpers

**Files:**
- Create: `data/products.ts`

**Step 1: Create the file with types, an empty array, and helpers**

Create `C:/Users/rohang/workspace/rollins-1930-website/data/products.ts` with this exact content:

```typescript
export type SaxophoneType = "Alto" | "Tenor" | "Soprano";
export type SeriesTier   = "Legacy" | "Heritage" | "Imperial";

export interface Product {
  id:            string;
  name:          string;
  series:        string;
  tier:          SeriesTier;
  type:          SaxophoneType;
  tagline:       string;
  description:   string;
  features:      string[];
  specs:         Record<string, string>;
  images:        string[];
  finishOptions: string[];
}

export const products: Product[] = [
  // Alto — added in Task 2
  // Tenor — added in Task 3
  // Soprano — added in Task 4
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByType(type: SaxophoneType): Product[] {
  return products.filter((p) => p.type === type);
}

export function getProductsByTier(tier: SeriesTier): Product[] {
  return products.filter((p) => p.tier === tier);
}
```

**Step 2: Verify TypeScript compiles**

```bash
cd "C:/Users/rohang/workspace/rollins-1930-website"
npx tsc --noEmit
```

Expected: no errors.

**Step 3: Commit**

```bash
git add data/products.ts
git commit -m "feat: scaffold data/products.ts with types and helper functions"
```

---

## Task 2: Add Alto products (Legacy A1, Heritage A2, Imperial A3)

**Files:**
- Modify: `data/products.ts` — replace the `// Alto` comment with 3 product objects

**Step 1: Replace the `// Alto — added in Task 2` comment with these 3 entries**

```typescript
  {
    id:          "legacy-a1",
    name:        "Legacy A1",
    series:      "Legacy Series",
    tier:        "Legacy",
    type:        "Alto",
    tagline:     "Your First Step Into the World of Saxophones",
    description:
      "The Legacy A1 is built for emerging saxophonists who demand reliability and playability from their first serious instrument. Crafted in Taiwan to exacting tolerances, it delivers a warm, responsive tone that grows with the player. Every component is precision-machined for consistent action and effortless technique.",
    features: [
      "Yellow brass body with durable gold lacquer finish",
      "Precision-machined keywork for consistent action",
      "High F# key included",
      "Adjustable thumb rest for all-day comfort",
      "Italian leather pads for an airtight seal",
      "Compatible with all standard alto mouthpieces",
      "Sturdy carry case included",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Brass",
      Keys:         "Phosphor Bronze",
      Pads:         "Italian Leather",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "None",
    },
    images: [
      "/images/products/legacy-a1/hero.jpg",
      "/images/products/legacy-a1/detail-1.jpg",
      "/images/products/legacy-a1/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Vintage Lacquer"],
  },
  {
    id:          "heritage-a2",
    name:        "Heritage A2",
    series:      "Heritage Series",
    tier:        "Heritage",
    type:        "Alto",
    tagline:     "Refined Craftsmanship for the Advancing Player",
    description:
      "The Heritage A2 bridges the gap between student and professional performance. With enhanced keywork geometry, a silver-plated neck, and upgraded pad specification, it rewards technical growth with a richer, more nuanced tonal palette. A natural choice for the saxophonist ready to take the next step.",
    features: [
      "Yellow brass body with hand-smoothed lacquer",
      "Silver-plated neck for enhanced resonance",
      "Adjustable palm keys for ergonomic comfort",
      "High F# and front F keys",
      "Italian leather pads with metal resonators",
      "Adjustable thumb rest and neck strap ring",
      "Includes mouthpiece, ligature, and contoured case",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Brass with Silver Plate",
      Keys:         "Phosphor Bronze",
      Pads:         "Italian Leather with Metal Resonators",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "Bell Engraving",
    },
    images: [
      "/images/products/heritage-a2/hero.jpg",
      "/images/products/heritage-a2/detail-1.jpg",
      "/images/products/heritage-a2/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Silver Plate", "Black Nickel"],
  },
  {
    id:          "imperial-a3",
    name:        "Imperial A3",
    series:      "Imperial Series",
    tier:        "Imperial",
    type:        "Alto",
    tagline:     "The Pinnacle of Rollins 1930 Alto Craftsmanship",
    description:
      "The Imperial A3 is the instrument serious performers choose when compromise is not an option. Hand-fitted keywork, a sterling silver neck, and meticulous hand-finishing deliver a tonal character of extraordinary depth and projection. Built for the concert stage and the recording studio alike.",
    features: [
      "Solid yellow brass body, hand-lacquered",
      "Sterling silver neck for superior resonance and response",
      "Hand-fitted and individually adjusted keywork",
      "Full hand engraving on bell and upper body",
      "Premium Italian leather pads with gold resonators",
      "High F#, front F, and articulated G# keys",
      "Ships with custom contoured presentation case",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Sterling Silver",
      Keys:         "Sterling Silver",
      Pads:         "Premium Italian Leather with Gold Resonators",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "Full Hand Engraving",
    },
    images: [
      "/images/products/imperial-a3/hero.jpg",
      "/images/products/imperial-a3/detail-1.jpg",
      "/images/products/imperial-a3/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Silver Plate", "Black Nickel", "Unlacquered Brass"],
  },
```

**Step 2: Verify TypeScript compiles**

```bash
cd "C:/Users/rohang/workspace/rollins-1930-website"
npx tsc --noEmit
```

Expected: no errors.

**Step 3: Commit**

```bash
git add data/products.ts
git commit -m "feat: add Alto products — Legacy A1, Heritage A2, Imperial A3"
```

---

## Task 3: Add Tenor products (Legacy T1, Heritage T2, Imperial T3)

**Files:**
- Modify: `data/products.ts` — replace the `// Tenor` comment with 3 product objects

**Step 1: Replace the `// Tenor — added in Task 3` comment with these 3 entries**

```typescript
  {
    id:          "legacy-t1",
    name:        "Legacy T1",
    series:      "Legacy Series",
    tier:        "Legacy",
    type:        "Tenor",
    tagline:     "A Tenor Voice You Can Trust From Day One",
    description:
      "The Legacy T1 offers the deep, full-bodied tone of a professional tenor saxophone at an entry-level price point. Designed for students transitioning to tenor, it provides the playability and durability essential for consistent daily practice and ensemble performance.",
    features: [
      "Brass body with durable gold lacquer finish",
      "Comfortable low-position thumb hook",
      "High F# key included",
      "Adjustable palm keys for natural hand position",
      "Italian leather pads for consistent response",
      "Reinforced bow guard for durability",
      "Hard carry case included",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Brass",
      Keys:         "Phosphor Bronze",
      Pads:         "Italian Leather",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "None",
    },
    images: [
      "/images/products/legacy-t1/hero.jpg",
      "/images/products/legacy-t1/detail-1.jpg",
      "/images/products/legacy-t1/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Vintage Lacquer"],
  },
  {
    id:          "heritage-t2",
    name:        "Heritage T2",
    series:      "Heritage Series",
    tier:        "Heritage",
    type:        "Tenor",
    tagline:     "Depth, Warmth, and the Clarity of a Developing Voice",
    description:
      "The Heritage T2 is engineered for saxophonists who have outgrown their first instrument and are ready to explore the full expressive range of the tenor. An enhanced bow guard design, silver-plated neck, and upgraded pad specification deliver a darker, more resonant tone with improved projection.",
    features: [
      "Brass body with reinforced bow guard",
      "Silver-plated neck for improved projection",
      "Adjustable palm and side keys",
      "High F# and front F keys",
      "Italian leather pads with metal resonators",
      "Removable and adjustable neck strap ring",
      "Includes mouthpiece, ligature, and padded gig bag",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Brass with Silver Plate",
      Keys:         "Phosphor Bronze",
      Pads:         "Italian Leather with Metal Resonators",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "Bell Engraving",
    },
    images: [
      "/images/products/heritage-t2/hero.jpg",
      "/images/products/heritage-t2/detail-1.jpg",
      "/images/products/heritage-t2/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Silver Plate", "Black Nickel"],
  },
  {
    id:          "imperial-t3",
    name:        "Imperial T3",
    series:      "Imperial Series",
    tier:        "Imperial",
    type:        "Tenor",
    tagline:     "A Tenor Saxophone Built for the Concert Stage",
    description:
      "The Imperial T3 is Rollins 1930's definitive statement in tenor saxophone design. Every component — from the hand-rolled tone holes to the custom-curved sterling silver neck — has been individually engineered and hand-fitted by our master craftsmen for performers who demand the absolute best.",
    features: [
      "Yellow brass body with hand-rolled tone holes",
      "Custom-curve sterling silver neck",
      "Hand-fitted and individually voiced keywork throughout",
      "Full hand engraving on bell and body",
      "Premium Italian leather pads with gold resonators",
      "High F#, front F, and G# articulation keys",
      "Bespoke case with humidity control insert",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Sterling Silver",
      Keys:         "Sterling Silver",
      Pads:         "Premium Italian Leather with Gold Resonators",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "Full Hand Engraving",
    },
    images: [
      "/images/products/imperial-t3/hero.jpg",
      "/images/products/imperial-t3/detail-1.jpg",
      "/images/products/imperial-t3/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Silver Plate", "Black Nickel", "Unlacquered Brass"],
  },
```

**Step 2: Verify TypeScript compiles**

```bash
cd "C:/Users/rohang/workspace/rollins-1930-website"
npx tsc --noEmit
```

Expected: no errors.

**Step 3: Commit**

```bash
git add data/products.ts
git commit -m "feat: add Tenor products — Legacy T1, Heritage T2, Imperial T3"
```

---

## Task 4: Add Soprano products (Legacy S1, Heritage S2, Imperial S3)

**Files:**
- Modify: `data/products.ts` — replace the `// Soprano` comment with 3 product objects

**Step 1: Replace the `// Soprano — added in Task 4` comment with these 3 entries**

```typescript
  {
    id:          "legacy-s1",
    name:        "Legacy S1",
    series:      "Legacy Series",
    tier:        "Legacy",
    type:        "Soprano",
    tagline:     "Discover the Brilliance of Soprano Saxophone",
    description:
      "The Legacy S1 introduces the brilliant, focused voice of the soprano saxophone to students and doubling players. Its straight-body design ensures consistent intonation across the full range, making it an ideal second instrument for alto or tenor players looking to expand their tonal repertoire.",
    features: [
      "Straight brass body for optimal intonation stability",
      "Durable gold lacquer finish",
      "High F# key included",
      "Single-piece body construction for rigidity",
      "Italian leather pads for consistent seal",
      "Adjustable thumb hook",
      "Lightweight gig bag included",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Integral (Straight Body)",
      Keys:         "Phosphor Bronze",
      Pads:         "Italian Leather",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "None",
    },
    images: [
      "/images/products/legacy-s1/hero.jpg",
      "/images/products/legacy-s1/detail-1.jpg",
      "/images/products/legacy-s1/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Vintage Lacquer"],
  },
  {
    id:          "heritage-s2",
    name:        "Heritage S2",
    series:      "Heritage Series",
    tier:        "Heritage",
    type:        "Soprano",
    tagline:     "Focused Tone, Expressive Colour, Refined Control",
    description:
      "The Heritage S2 rewards intermediate players with enhanced intonation stability and a broader tonal palette. The detachable neck design opens up new expressive possibilities, while upgraded keywork geometry and resonator pads deliver the crystal clarity the soprano is renowned for.",
    features: [
      "Straight brass body with reinforced tone holes",
      "Detachable neck for tonal flexibility",
      "Silver-plated keywork for smooth, consistent action",
      "High F# and front F keys",
      "Italian leather pads with metal resonators",
      "Adjustable thumb rest",
      "Hard carry case with accessory compartment",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Detachable, Brass with Silver Plate",
      Keys:         "Phosphor Bronze with Silver Plate",
      Pads:         "Italian Leather with Metal Resonators",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "Bell Engraving",
    },
    images: [
      "/images/products/heritage-s2/hero.jpg",
      "/images/products/heritage-s2/detail-1.jpg",
      "/images/products/heritage-s2/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Silver Plate", "Black Nickel"],
  },
  {
    id:          "imperial-s3",
    name:        "Imperial S3",
    series:      "Imperial Series",
    tier:        "Imperial",
    type:        "Soprano",
    tagline:     "The Summit of Soprano Saxophone Perfection",
    description:
      "The Imperial S3 is crafted for performers who require perfection in every register. With a hand-hammered bell, sterling silver detachable neck, and exhaustive hand-regulation, it produces the singing, crystalline tone that defines world-class soprano playing. An instrument that inspires.",
    features: [
      "Yellow brass body with hand-hammered bell",
      "Sterling silver detachable neck",
      "Fully hand-regulated keywork",
      "Full hand engraving on bell and upper body",
      "Premium Italian leather pads with gold resonators",
      "High F# and G# articulation keys",
      "Bespoke velvet-lined presentation case",
    ],
    specs: {
      Body:         "Yellow Brass",
      Neck:         "Sterling Silver, Detachable",
      Keys:         "Sterling Silver",
      Pads:         "Premium Italian Leather with Gold Resonators",
      Finish:       "Gold Lacquer",
      "Key Range":  "Low Bb – High F#",
      "Octave Keys": "1",
      Engraving:    "Full Hand Engraving",
    },
    images: [
      "/images/products/imperial-s3/hero.jpg",
      "/images/products/imperial-s3/detail-1.jpg",
      "/images/products/imperial-s3/detail-2.jpg",
    ],
    finishOptions: ["Gold Lacquer", "Silver Plate", "Black Nickel", "Unlacquered Brass"],
  },
```

**Step 2: Verify TypeScript compiles**

```bash
cd "C:/Users/rohang/workspace/rollins-1930-website"
npx tsc --noEmit
```

Expected: no errors.

**Step 3: Commit**

```bash
git add data/products.ts
git commit -m "feat: add Soprano products — Legacy S1, Heritage S2, Imperial S3"
```

---

## Task 5: Final verification

**Step 1: Confirm all 9 products are present**

```bash
cd "C:/Users/rohang/workspace/rollins-1930-website"
node -e "const { products } = require('./.next/server/chunks/data/products.js') 2>/dev/null || true"
```

If that doesn't work, use a quick TypeScript check instead — count product entries in the file:

```bash
grep -c '"id":' "C:/Users/rohang/workspace/rollins-1930-website/data/products.ts"
```

Expected: `9`

**Step 2: Run production build**

```bash
npm run build
```

Expected: builds cleanly with no TypeScript or ESLint errors.

**Step 3: Verify data integrity — check IDs are unique slugs**

All expected IDs should be present:
- `legacy-a1`, `heritage-a2`, `imperial-a3`
- `legacy-t1`, `heritage-t2`, `imperial-t3`
- `legacy-s1`, `heritage-s2`, `imperial-s3`

Check each appears exactly once:

```bash
grep "id:" "C:/Users/rohang/workspace/rollins-1930-website/data/products.ts"
```

Expected: 9 lines, each with a unique ID matching the list above.

**Step 4: Push to remote**

```bash
cd "C:/Users/rohang/workspace/rollins-1930-website"
git push origin master
```

---

## Summary of files

| Action | Path |
|---|---|
| Create | `data/products.ts` |

## What this phase does NOT include (deferred)

- Home page (Phase 3)
- Saxophones listing page + filtering UI (Phase 4)
- Product Detail Pages (Phase 5)
- About + Partners + Contact pages (Phase 6)
- Real product images (added when assets are available)
