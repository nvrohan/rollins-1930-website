# Data Layer Design
**Date:** 2026-02-26
**Phase:** 2 — Data Layer
**Status:** Approved

---

## Overview

Create `data/products.ts` — a single static file containing TypeScript type definitions, full marketing copy for all 9 products, and helper query functions. No backend, no API. All data is static for v1.

---

## File

```
data/
  products.ts    # Types + all 9 products + helper functions
```

Imported via `@/data/products` from any page or component.

---

## TypeScript Types

```typescript
export type SaxophoneType = "Alto" | "Tenor" | "Soprano";
export type SeriesTier   = "Legacy" | "Heritage" | "Imperial";

export interface Product {
  id:            string;                  // slug, e.g. "legacy-a1"
  name:          string;                  // e.g. "Legacy A1"
  series:        string;                  // e.g. "Legacy Series"
  tier:          SeriesTier;
  type:          SaxophoneType;
  tagline:       string;                  // one-line PDP hero subtitle
  description:   string;                 // 2-3 sentence marketing paragraph
  features:      string[];                // 5-7 bullet points
  specs:         Record<string, string>;  // key/value spec table
  images:        string[];                // paths under /public/images/products/[id]/
  finishOptions: string[];
}
```

---

## Helper Functions

```typescript
export const products: Product[]
export function getProductById(id: string): Product | undefined
export function getProductsByType(type: SaxophoneType): Product[]
export function getProductsByTier(tier: SeriesTier): Product[]
```

---

## Product Content Rules

### Tier Voice

| Tier | Audience | Tone |
|---|---|---|
| Legacy | Students | Accessible, encouraging, value-forward |
| Heritage | Semi-pro | Craftsmanship, growth, versatile |
| Imperial | Professional | Prestige, hand-finished, uncompromising |

### Spec Keys (consistent across all 9)

```
Body / Neck / Keys / Pads / Finish / Key Range / Octave Keys / Engraving
```

### Finish Options by Tier

| Tier | Options |
|---|---|
| Legacy | Gold Lacquer, Vintage Lacquer |
| Heritage | Gold Lacquer, Silver Plate, Black Nickel |
| Imperial | Gold Lacquer, Silver Plate, Black Nickel, Unlacquered Brass |

### Image Paths

Placeholder paths for each product — `[id]` is the product slug:
```
/images/products/[id]/hero.jpg
/images/products/[id]/detail-1.jpg
/images/products/[id]/detail-2.jpg
```

---

## Product List

| ID | Name | Type | Tier |
|---|---|---|---|
| legacy-a1 | Legacy A1 | Alto | Legacy |
| heritage-a2 | Heritage A2 | Alto | Heritage |
| imperial-a3 | Imperial A3 | Alto | Imperial |
| legacy-t1 | Legacy T1 | Tenor | Legacy |
| heritage-t2 | Heritage T2 | Tenor | Heritage |
| imperial-t3 | Imperial T3 | Tenor | Imperial |
| legacy-s1 | Legacy S1 | Soprano | Legacy |
| heritage-s2 | Heritage S2 | Soprano | Heritage |
| imperial-s3 | Imperial S3 | Soprano | Imperial |

---

## Decisions Made

- Approach A (single file) chosen — appropriate for 9 static products
- `tagline` field added beyond CLAUDE.md minimum for PDP hero use
- No backend, no API, no CMS — all static for v1
- Image paths are placeholders; real images populated in a later phase
