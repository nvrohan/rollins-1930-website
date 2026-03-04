import Image from "next/image";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductById } from "@/data/products";
import FadeUp from "@/components/ui/FadeUp";

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} — Rollins 1930`,
    description: product.tagline,
    openGraph: {
      title: `${product.name} — Rollins 1930`,
      description: product.tagline,
    },
  };
}

const SPEC_KEYS = [
  "Body",
  "Neck",
  "Keys",
  "Pads",
  "Finish",
  "Key Range",
  "Octave Keys",
  "Engraving",
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="min-h-[70vh] bg-charcoal flex items-end pb-20 px-6 pt-28">
        <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
              {product.series}
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl font-light text-white tracking-widest uppercase mb-4">
              {product.name}
            </h1>
            <p className="font-serif text-xl italic text-muted">
              {product.tagline}
            </p>
          </div>
          <div className="w-full max-w-sm ml-auto aspect-[4/5] bg-black relative overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────── */}
      {product.images.length > 1 && (
        <section className="bg-black py-16 px-6">
          <div className="max-w-screen-xl mx-auto">
            <FadeUp>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.images.slice(1).map((src, i) => (
                  <div
                    key={src}
                    className="aspect-square bg-charcoal relative overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`${product.name} detail ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* ── Description + Features ───────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
              About This Model
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              {product.description}
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Key Features
            </p>
            <ul className="flex flex-col gap-4">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">—</span>
                  <span className="font-sans text-sm text-white">{f}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* ── Specifications ───────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-10">
              Specifications
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {SPEC_KEYS.map((key) => (
                <div key={key} className="bg-charcoal px-6 py-4">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted mb-1">
                    {key}
                  </p>
                  <p className="font-sans text-sm text-white">
                    {product.specs[key] ?? "—"}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Finish Options ───────────────────────────── */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Available Finishes
            </p>
            <div className="flex flex-wrap gap-3">
              {product.finishOptions.map((f) => (
                <span
                  key={f}
                  className="border border-border px-4 py-2 font-sans text-xs text-muted"
                >
                  {f}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Inquiry CTA ──────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
              Interested in the {product.name}?
            </h2>
            <Link
              href={`/contact?model=${product.id}`}
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Inquire About This Model →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
