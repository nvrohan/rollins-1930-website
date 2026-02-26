/**
 * Product catalogue — Rollins 1930
 *
 * Single source of truth for all 9 saxophone products.
 * Products are added in Tasks 2–4 (Alto, Tenor, Soprano).
 * All product query logic for the application lives here.
 */

export type SaxophoneType = "Alto" | "Tenor" | "Soprano";
export type SeriesTier   = "Legacy" | "Heritage" | "Imperial";

export interface Product {
  id:            string;
  name:          string;
  /** Human-readable series name, e.g. "Legacy Series". Always paired with `tier`. */
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

export const products: readonly Product[] = [
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
  // Tenor — added in Task 3
  // Soprano — added in Task 4
];

/** Returns the product matching the given id slug, or undefined if not found. */
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

/** Returns all products of the given saxophone type. */
export function getProductsByType(type: SaxophoneType): Product[] {
  return products.filter((p) => p.type === type);
}

/** Returns all products in the given series tier. */
export function getProductsByTier(tier: SeriesTier): Product[] {
  return products.filter((p) => p.tier === tier);
}
