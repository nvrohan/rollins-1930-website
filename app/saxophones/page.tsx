import Link from "@/components/ui/Link";
import type { Metadata } from "next";
import {
  products,
  type SaxophoneType,
  type SeriesTier,
} from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Saxophones — Rollins 1930",
  description:
    "Browse all 9 Rollins 1930 saxophone models across the Legacy, Heritage, and Imperial series.",
  openGraph: {
    title: "Saxophones — Rollins 1930",
    description:
      "Browse all 9 Rollins 1930 saxophone models across the Legacy, Heritage, and Imperial series.",
  },
};

const TYPES: SaxophoneType[] = ["Alto", "Tenor", "Soprano"];
const TIERS: SeriesTier[] = ["Legacy", "Heritage", "Imperial"];

function isValidType(v: string | undefined): v is SaxophoneType {
  return TYPES.includes(v as SaxophoneType);
}

function isValidTier(v: string | undefined): v is SeriesTier {
  return TIERS.includes(v as SeriesTier);
}

export default async function SaxophonesPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; tier?: string }>;
}) {
  const { type, tier } = await searchParams;

  const activeType = isValidType(type) ? type : undefined;
  const activeTier = isValidTier(tier) ? tier : undefined;

  const filtered = products.filter((p) => {
    if (activeType && p.type !== activeType) return false;
    if (activeTier && p.tier !== activeTier) return false;
    return true;
  });

  function pillHref(key: "type" | "tier", value: string | undefined) {
    const params = new URLSearchParams();
    const nextType = key === "type" ? value : activeType;
    const nextTier = key === "tier" ? value : activeTier;
    if (nextType) params.set("type", nextType);
    if (nextTier) params.set("tier", nextTier);
    const qs = params.toString();
    return `/saxophones${qs ? `?${qs}` : ""}`;
  }

  return (
    <>
      {/* Hero */}
      <section className="min-h-[40vh] bg-charcoal flex items-end pb-16 px-6 pt-28">
        <div className="max-w-screen-xl mx-auto w-full">
          <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Collection
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl font-light text-white tracking-widest uppercase mb-4">
            Our Saxophones
          </h1>
          <p className="font-sans text-sm text-muted">
            9 models across three tiers of precision.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-black border-y border-border py-6 px-6 sticky top-20 z-40 backdrop-blur-md bg-black/90">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-6">
          {/* Type pills */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted mr-1">
              Type
            </span>
            <Link
              href={pillHref("type", undefined)}
              className={`font-sans text-xs px-4 py-2 transition-all duration-200 ${
                !activeType
                  ? "bg-gold text-black"
                  : "border border-border text-muted hover:text-white"
              }`}
            >
              All
            </Link>
            {TYPES.map((t) => (
              <Link
                key={t}
                href={pillHref("type", t)}
                className={`font-sans text-xs px-4 py-2 transition-all duration-200 ${
                  activeType === t
                    ? "bg-gold text-black"
                    : "border border-border text-muted hover:text-white"
                }`}
              >
                {t}
              </Link>
            ))}
          </div>

          {/* Tier pills */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted mr-1">
              Tier
            </span>
            <Link
              href={pillHref("tier", undefined)}
              className={`font-sans text-xs px-4 py-2 transition-all duration-200 ${
                !activeTier
                  ? "bg-gold text-black"
                  : "border border-border text-muted hover:text-white"
              }`}
            >
              All
            </Link>
            {TIERS.map((t) => (
              <Link
                key={t}
                href={pillHref("tier", t)}
                className={`font-sans text-xs px-4 py-2 transition-all duration-200 ${
                  activeTier === t
                    ? "bg-gold text-black"
                    : "border border-border text-muted hover:text-white"
                }`}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          {filtered.length === 0 ? (
            <p className="font-sans text-sm text-muted text-center py-24">
              No models match your filter.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((product, i) => (
                <FadeUp key={product.id} delay={i * 0.05}>
                  <ProductCard product={product} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
