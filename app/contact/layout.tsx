import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact — Rollins 1930",
  description:
    "Inquire about Rollins 1930 saxophones. Reach out to our team for pricing, partnerships, and instrument consultations.",
  openGraph: {
    title: "Contact — Rollins 1930",
    description:
      "Inquire about Rollins 1930 saxophones. Reach out to our team for pricing, partnerships, and instrument consultations.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense>{children}</Suspense>;
}
