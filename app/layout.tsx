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
