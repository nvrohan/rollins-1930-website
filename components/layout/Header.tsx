"use client";

import { useState, useEffect } from "react";
import Link from "@/components/ui/Link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/saxophones", label: "Saxophones" },
  { href: "/about",      label: "About"      },
  { href: "/partners",   label: "Partners"   },
  { href: "/contact",    label: "Contact"    },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 h-full flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────── */}
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.25em] text-gold uppercase hover:text-gold-light transition-colors duration-200"
        >
          ROLLINS 1930
        </Link>

        {/* ── Desktop Nav ──────────────────────────────── */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans text-xs tracking-[0.15em] uppercase px-5 py-2.5 border border-gold text-gold hover:bg-gold hover:text-black transition-all duration-300"
          >
            Inquire →
          </Link>
        </nav>

        {/* ── Mobile Hamburger ─────────────────────────── */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Drawer ──────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-border"
          >
            <nav id="mobile-nav" aria-label="Mobile navigation" className="flex flex-col px-6 py-8 gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm tracking-[0.15em] uppercase text-muted hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="font-sans text-sm tracking-[0.15em] uppercase px-5 py-3 border border-gold text-gold text-center hover:bg-gold hover:text-black transition-all duration-300 mt-2"
              >
                Inquire →
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
