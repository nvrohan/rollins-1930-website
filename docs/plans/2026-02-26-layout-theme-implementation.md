# Layout + Theme System Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Establish the Rollins 1930 brand foundation — CSS theme tokens, Cormorant Garamond + Inter font system, root layout, sticky animated Header, and Footer.

**Architecture:** Modular approach. `lib/fonts.ts` defines fonts. `globals.css` holds Tailwind v4 `@theme` brand tokens and base resets. `components/layout/` holds Header and Footer as separate components. `app/layout.tsx` wires everything together. A dark placeholder replaces the default `page.tsx`. No pages are built in this phase.

**Tech Stack:** Next.js 16 App Router, TypeScript strict, Tailwind CSS v4 (`@tailwindcss/postcss`), Framer Motion, `next/font/google` (Cormorant Garamond + Inter)

---

## Task 1: Install Framer Motion + create images directory

**Files:**
- Modify: `package.json` (via npm install)
- Create: `public/images/.gitkeep`

**Step 1: Install framer-motion**

```bash
cd C:/Users/rohang/workspace/rollins-1930-website
npm install framer-motion
```

Expected output: `added X packages` — no errors. `framer-motion` appears in `package.json` dependencies.

**Step 2: Create images directory placeholder**

```bash
mkdir -p public/images && touch public/images/.gitkeep
```

**Step 3: Verify**

```bash
cat package.json | grep framer-motion
```

Expected: `"framer-motion": "^X.X.X"`

**Step 4: Commit**

```bash
git add package.json package-lock.json public/images/.gitkeep
git commit -m "feat: install framer-motion, add public/images dir"
```

---

## Task 2: Create font definitions

**Files:**
- Create: `lib/fonts.ts`

**Step 1: Create `lib/` directory and `fonts.ts`**

Full file contents for `lib/fonts.ts`:

```typescript
import { Cormorant_Garamond, Inter } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});
```

**Step 2: Verify TypeScript compiles**

```bash
cd C:/Users/rohang/workspace/rollins-1930-website
npx tsc --noEmit
```

Expected: no errors

**Step 3: Commit**

```bash
git add lib/fonts.ts
git commit -m "feat: add Cormorant Garamond + Inter font definitions"
```

---

## Task 3: Replace globals.css with brand theme tokens

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace the entire file**

Full file contents for `app/globals.css`:

```css
@import "tailwindcss";

@theme inline {
  /* ── Brand Colors ─────────────────────────────────────── */
  --color-black:          #0A0A0A;   /* page background       */
  --color-charcoal:       #141414;   /* card / surface        */
  --color-charcoal-light: #1F1F1F;   /* hover surface/borders */
  --color-gold:           #C9A84C;   /* primary accent        */
  --color-gold-light:     #E2C875;   /* hover gold            */
  --color-gold-muted:     #8A6D2E;   /* subtle gold           */
  --color-white:          #F5F0E8;   /* warm white / headings */
  --color-muted:          #8A8A8A;   /* secondary text        */
  --color-border:         #2A2A2A;   /* dividers              */

  /* ── Fonts ────────────────────────────────────────────── */
  --font-serif: var(--font-cormorant);
  --font-sans:  var(--font-inter);
}

/* ── Base Reset ───────────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0A0A0A;
  color: #F5F0E8;
  font-family: var(--font-inter), system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

**Step 2: Verify build still compiles**

```bash
npx tsc --noEmit
```

Expected: no errors

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: add Rollins 1930 brand color tokens and base resets to globals.css"
```

---

## Task 4: Create the Header component

**Files:**
- Create: `components/layout/Header.tsx`

**Step 1: Create directory and file**

Full file contents for `components/layout/Header.tsx`:

```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/saxophones", label: "Saxophones" },
  { href: "/about",      label: "About"      },
  { href: "/partners",   label: "Partners"   },
  { href: "/contact",    label: "Contact"    },
] as const;

export default function Header() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

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
          Rollins 1930
        </Link>

        {/* ── Desktop Nav ──────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-8">
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-border"
          >
            <nav className="flex flex-col px-6 py-8 gap-6">
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
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

**Step 3: Commit**

```bash
git add components/layout/Header.tsx
git commit -m "feat: add sticky Header with scroll effect and mobile drawer"
```

---

## Task 5: Create the Footer component

**Files:**
- Create: `components/layout/Footer.tsx`

**Step 1: Create file**

Full file contents for `components/layout/Footer.tsx`:

```tsx
import Link from "next/link";

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
              Rollins 1930
            </span>
            <p className="font-serif text-sm italic text-muted leading-relaxed">
              Crafted in Taiwan.<br />
              Heard Around the World.
            </p>
          </div>

          {/* ── Nav ───────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-white transition-colors w-fit"
              >
                {link.label}
              </Link>
            ))}
          </div>

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
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

**Step 3: Commit**

```bash
git add components/layout/Footer.tsx
git commit -m "feat: add Footer with brand tagline and nav links"
```

---

## Task 6: Update root layout.tsx

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Replace the entire file**

Full file contents for `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rollins 1930 — World-Class Saxophones Crafted in Taiwan",
  description:
    "Rollins 1930 crafts premium saxophones in Taiwan. Discover the Legacy, Heritage, and Imperial series — precision engineering for the world's finest players.",
  openGraph: {
    title: "Rollins 1930 — World-Class Saxophones Crafted in Taiwan",
    description:
      "Premium saxophones crafted in Taiwan since 2008. Explore our Legacy, Heritage, and Imperial series.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: wire fonts, Header, Footer, and root metadata into layout.tsx"
```

---

## Task 7: Replace page.tsx with branded placeholder

**Files:**
- Modify: `app/page.tsx`

**Step 1: Replace the entire file**

Full file contents for `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6">
          Est. 2008 · Taiwan
        </p>
        <h1 className="font-serif text-6xl sm:text-7xl font-light text-white tracking-widest uppercase mb-6">
          Rollins 1930
        </h1>
        <p className="font-serif text-lg italic text-muted">
          The Sound of Precision Since 2008
        </p>
      </div>
    </div>
  );
}
```

**Step 2: Verify TypeScript**

```bash
npx tsc --noEmit
```

Expected: no errors

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: replace default page with branded Rollins 1930 placeholder"
```

---

## Task 8: Full build verification

**Step 1: Run production build**

```bash
cd C:/Users/rohang/workspace/rollins-1930-website
npm run build
```

Expected: `✓ Compiled successfully` — zero TypeScript errors, zero ESLint errors.

If build fails:
- TypeScript errors → fix types in the flagged file
- ESLint errors → fix according to the error message
- Font load errors → verify Cormorant_Garamond and Inter are valid exports from `next/font/google`

**Step 2: Start dev server and visually verify**

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- [ ] Page background is near-black (`#0A0A0A`)
- [ ] Header shows `ROLLINS 1930` in gold serif font
- [ ] Nav links visible (Saxophones / About / Partners / Contact)
- [ ] `Inquire →` button has gold border
- [ ] Scrolling down triggers the frosted glass header background
- [ ] Footer appears at bottom with tagline
- [ ] On mobile (< 768px): hamburger icon visible, desktop nav hidden
- [ ] Tapping hamburger: drawer animates in with nav links

**Step 3: Final commit if any lint fixes were needed**

```bash
git add -A
git commit -m "fix: resolve build warnings from full verification"
```

---

## Summary of files created / modified

| Action | Path |
|---|---|
| Install | `framer-motion` (package.json) |
| Create | `lib/fonts.ts` |
| Create | `public/images/.gitkeep` |
| Modify | `app/globals.css` |
| Create | `components/layout/Header.tsx` |
| Create | `components/layout/Footer.tsx` |
| Modify | `app/layout.tsx` |
| Modify | `app/page.tsx` |

---

## What this phase does NOT include (deferred to later phases)

- Product data layer (`data/products.ts`) — Phase 2
- Home page sections (hero, featured models, etc.) — Phase 3
- Saxophones listing page — Phase 4
- Product detail pages — Phase 5
- About + Partners + Contact pages — Phase 6
