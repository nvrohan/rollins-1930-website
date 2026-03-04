import Link from "@/components/ui/Link";
import type { Metadata } from "next";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Partners — Rollins 1930",
  description:
    "Meet the global network of partners who bring Rollins 1930 saxophones to musicians around the world.",
  openGraph: {
    title: "Partners — Rollins 1930",
    description:
      "Meet the global network of partners who bring Rollins 1930 saxophones to musicians around the world.",
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="min-h-[40vh] bg-charcoal flex items-end pb-16 px-6 pt-28">
        <div className="max-w-screen-xl mx-auto w-full">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Our Partners
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl font-light text-white tracking-widest uppercase mb-4">
              A Global Network of Excellence
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── Rohan Gore — Partner Card ─────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <div className="bg-charcoal p-8 sm:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center">
              {/* Image placeholder */}
              <div className="aspect-square w-full max-w-xs bg-black mx-auto md:mx-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal-light via-black to-charcoal" />
              </div>

              {/* Details */}
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl text-white mb-2">
                  Rohan Gore
                </h2>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
                  Partner — India
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  Rohan Gore brings extensive expertise in the music industry to Rollins 1930, serving as our exclusive partner for the Indian subcontinent. His deep connections with musicians, conservatories, and retailers across India make him instrumental in growing the Rollins 1930 presence in one of the world&apos;s most vibrant musical markets.
                </p>
                <p className="font-sans text-sm text-muted leading-relaxed mb-8">
                  Through strategic partnerships with leading music institutions and a network of dedicated dealers, Rohan ensures that Rollins 1930 saxophones reach the hands of aspiring and professional musicians across the region.
                </p>
                <p className="font-sans text-xs text-muted">
                  <span className="text-gold">Email:</span>{" "}
                  contact@rollins1930.com
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Become a Partner CTA ──────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <div className="w-16 h-px bg-gold mx-auto mb-10" />
            <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
              Interested in Representing Rollins 1930 in Your Region?
            </h2>
            <p className="font-sans text-sm text-muted mb-10 leading-relaxed">
              We are always looking for passionate partners who share our commitment to musical excellence.
            </p>
            <Link
              href="/contact"
              className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Get in Touch →
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
