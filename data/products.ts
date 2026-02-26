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
  // Alto — added in Task 2
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
