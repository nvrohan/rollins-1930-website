import Link from "@/components/ui/Link";

const FOOTER_LINKS = [
  { href: "/saxophones", label: "Saxophones" },
  { href: "/about",      label: "About"      },
  { href: "/partners",   label: "Partners"   },
  { href: "/contact",    label: "Contact"    },
] as const;

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* ── Brand ─────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <span className="font-serif text-xl tracking-[0.25em] text-gold uppercase">
              ROLLINS 1930
            </span>
            <p className="font-serif text-sm italic text-muted leading-relaxed">
              Crafted in Taiwan.<br />
              Heard Around the World.
            </p>
          </div>

          {/* ── Nav ───────────────────────────────────── */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-white transition-colors w-fit"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Copyright ─────────────────────────────── */}
          <div className="flex flex-col justify-end">
            <p className="font-sans text-xs text-muted leading-relaxed">
              © {new Date().getFullYear()} Rollins 1930.<br />
              All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
