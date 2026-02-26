import Link from "next/link";
import { products } from "@/data/products";
import FadeUp from "@/components/ui/FadeUp";

const FEATURED_IDS = ["imperial-a3", "heritage-t2", "legacy-s1"] as const;

const SERIES = [
  {
    name:  "Legacy Series",
    tier:  "Legacy",
    label: "Student",
    desc:  "Accessible, encouraging, and built for the player taking their first steps. The Legacy Series offers professional-grade quality at an achievable price.",
  },
  {
    name:  "Heritage Series",
    tier:  "Heritage",
    label: "Semi-Professional",
    desc:  "Crafted for the advancing player who demands more. The Heritage Series bridges the gap between student and professional with enhanced keywork and materials.",
  },
  {
    name:  "Imperial Series",
    tier:  "Imperial",
    label: "Professional",
    desc:  "Uncompromising precision for the concert stage. Every Imperial instrument is hand-finished and individually regulated by our master craftsmen.",
  },
] as const;

export default function Home() {
  const featured = FEATURED_IDS.map((id) => products.find((p) => p.id === id)!);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-gradient-to-b from-charcoal to-black flex items-center justify-center overflow-hidden">
        <div className="text-center px-6 max-w-3xl mx-auto">
          {/* Decorative rule */}
          <div
            className="w-10 h-px bg-gold mx-auto mb-8 animate-[fadeUpIn_0.7s_ease-out_both]"
            style={{ animationDelay: "0ms" }}
          />
          {/* Eyebrow */}
          <p
            className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6 animate-[fadeUpIn_0.7s_ease-out_both]"
            style={{ animationDelay: "150ms" }}
          >
            Est. 2008 · Taiwan
          </p>
          {/* Headline */}
          <h1
            className="font-serif text-5xl sm:text-7xl font-light text-white tracking-widest uppercase mb-6 animate-[fadeUpIn_0.7s_ease-out_both]"
            style={{ animationDelay: "300ms" }}
          >
            ROLLINS 1930
          </h1>
          {/* Tagline */}
          <p
            className="font-serif text-xl italic text-muted mb-10 animate-[fadeUpIn_0.7s_ease-out_both]"
            style={{ animationDelay: "450ms" }}
          >
            The Sound of Precision Since 2008
          </p>
          {/* CTA */}
          <Link
            href="/saxophones"
            className="inline-block font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300 animate-[fadeUpIn_0.7s_ease-out_both]"
            style={{ animationDelay: "600ms" }}
          >
            Explore Collection →
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUpIn_0.7s_ease-out_both]"
          style={{ animationDelay: "800ms" }}
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent animate-bounce" />
        </div>
      </section>

      {/* ── Featured Models ───────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold text-center mb-16">
              Featured Models
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <FadeUp key={product.id} delay={i * 0.1}>
                <Link href={`/saxophones/${product.id}`} className="group block">
                  {/* Placeholder image — swap with next/image when photos available */}
                  <div className="w-full aspect-[4/5] bg-charcoal relative overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-2">
                    {product.series}
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="font-serif text-sm italic text-muted mb-4 line-clamp-2">
                    {product.tagline}
                  </p>
                  <span className="font-sans text-xs tracking-[0.15em] uppercase text-gold group-hover:text-gold-light transition-colors">
                    View Details →
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-16">
            <Link
              href="/saxophones"
              className="font-sans text-xs tracking-[0.2em] uppercase text-muted hover:text-white transition-colors"
            >
              View All Saxophones →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Craftsmanship ─────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Pull quote */}
          <FadeUp className="flex gap-8 items-start">
            <div className="w-0.5 h-12 bg-gold flex-shrink-0 mt-2" />
            <blockquote className="font-serif text-3xl lg:text-4xl italic text-white leading-snug">
              "Every saxophone begins as a sheet of brass and ends as a voice."
            </blockquote>
          </FadeUp>

          {/* Craft blocks */}
          <FadeUp delay={0.2} className="flex flex-col divide-y divide-border">
            {[
              {
                title: "Precision Engineering",
                body:  "Hand-rolled tone holes and precision-machined keywork deliver consistency and playability across every instrument we produce.",
              },
              {
                title: "Hand Finishing",
                body:  "Each saxophone is individually set up and regulated by our craftsmen — ensuring every key, pad, and spring performs to specification.",
              },
              {
                title: "Made in Taiwan",
                body:  "Founded in 2008, Rollins 1930 draws on Taiwan's world-class manufacturing heritage to produce instruments that stand beside the finest global brands.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="py-8 first:pt-0 last:pb-0">
                <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── Series Overview ───────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold text-center mb-16">
              Our Series
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERIES.map((s, i) => (
              <FadeUp key={s.tier} delay={i * 0.1}>
                <div className="border-t-2 border-gold pt-8">
                  <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold mb-3">
                    {s.label}
                  </p>
                  <h3 className="font-serif text-2xl text-white mb-4">{s.name}</h3>
                  <p className="font-sans text-sm text-muted leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <Link
                    href={`/saxophones?tier=${s.tier}`}
                    className="font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors"
                  >
                    Explore →
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners Highlight ────────────────────────────── */}
      <section className="bg-black py-24 px-6 border-t border-border">
        <div className="max-w-screen-xl mx-auto text-center">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6">
              Our Partners
            </p>
            <div className="w-16 h-px bg-gold/30 mx-auto mb-10" />
            <p className="font-serif text-2xl text-white mb-2">Rohan Gore</p>
            <p className="font-sans text-sm text-muted tracking-[0.1em] uppercase mb-10">
              Partner — India
            </p>
            <Link
              href="/partners"
              className="font-sans text-xs tracking-[0.2em] uppercase text-gold hover:text-gold-light transition-colors"
            >
              Learn More about our Partners →
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeUp>
            <div className="w-16 h-px bg-gold mx-auto mb-12" />
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-4">
              Ready to Find Your Sound?
            </h2>
            <p className="font-sans text-sm text-muted mb-10 leading-relaxed">
              Discover the complete Rollins 1930 collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/saxophones"
                className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 bg-gold text-black hover:bg-gold-light transition-colors duration-300"
              >
                Explore the Collection →
              </Link>
              <Link
                href="/contact"
                className="font-sans text-xs tracking-[0.2em] uppercase px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
              >
                Inquire Now →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
