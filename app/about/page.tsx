import type { Metadata } from "next";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "About — Rollins 1930",
  description:
    "Founded in 2008, Rollins 1930 crafts world-class saxophones in Taiwan with uncompromising precision.",
  openGraph: {
    title: "About — Rollins 1930",
    description:
      "Founded in 2008, Rollins 1930 crafts world-class saxophones in Taiwan with uncompromising precision.",
  },
};

const MANUFACTURING = [
  {
    num: "01",
    title: "Taiwan Heritage",
    body: "Rollins 1930 draws on Taiwan's decades-long tradition of precision instrument manufacturing. Our facility combines time-honoured craft with modern engineering to produce instruments that compete at the highest level.",
  },
  {
    num: "02",
    title: "Hand Finishing",
    body: "Every saxophone is individually set up by our master craftsmen. From key regulation to pad seating, each instrument is hand-finished to ensure flawless playability out of the case.",
  },
  {
    num: "03",
    title: "Quality Control",
    body: "Before leaving our workshop, each instrument undergoes a rigorous multi-point inspection. We test action, intonation, and seal integrity so that every Rollins 1930 meets a single standard — perfection.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="min-h-[50vh] bg-charcoal flex items-center px-6 pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto w-full">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
              Our Story
            </p>
            <h1 className="font-serif text-5xl sm:text-7xl font-light text-white tracking-widest uppercase mb-6 leading-tight">
              Crafted in Taiwan.
              <br />
              Built for the World.
            </h1>
            <p className="font-sans text-sm text-muted">
              Est. 2008
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Mission ───────────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp className="flex gap-8 items-start">
            <div className="w-0.5 h-12 bg-gold flex-shrink-0 mt-2" />
            <blockquote className="font-serif text-3xl lg:text-4xl italic text-white leading-snug">
              &ldquo;We believe every musician deserves an instrument that inspires.&rdquo;
            </blockquote>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-col divide-y divide-gold/30">
            {[
              {
                title: "Precision",
                body: "Tolerances measured in hundredths of a millimetre. Every keywork mechanism is engineered for repeatable, effortless performance.",
              },
              {
                title: "Craftsmanship",
                body: "Machine precision meets artisan hand-finishing. Our instruments are built by people who understand the difference a thousandth of a millimetre makes to a musician's touch.",
              },
              {
                title: "Legacy",
                body: "Founded in 2008, we are building a legacy of instruments that will be played, loved, and passed down for generations.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="py-8 first:pt-0 last:pb-0">
                <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ── Founded Story ─────────────────────────────── */}
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-8">
              Our Beginning
            </p>
            <p className="font-sans text-base text-white leading-relaxed mb-6">
              Rollins 1930 was founded in 2008 with a singular vision: to craft saxophones in Taiwan that stand alongside the finest instruments in the world. From the outset, we committed to using premium materials, precision engineering, and painstaking hand-finishing — the same standards that define the legendary makers of Europe and Japan.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Today, our instruments are played by professionals, students, and passionate amateurs across the globe. Every Rollins 1930 saxophone is a testament to what happens when world-class manufacturing capability meets an unwavering commitment to musical excellence. We don't just build saxophones — we build instruments that inspire confidence, expression, and a lifelong connection to music.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── Manufacturing ─────────────────────────────── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-screen-xl mx-auto">
          <FadeUp>
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-16 text-center">
              How We Build
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {MANUFACTURING.map((item, i) => (
              <FadeUp key={item.num} delay={i * 0.1}>
                <span className="font-serif text-4xl text-gold/40 mb-4 block">
                  {item.num}
                </span>
                <h3 className="font-serif text-2xl text-white mb-4">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {item.body}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
