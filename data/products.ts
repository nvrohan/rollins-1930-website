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
