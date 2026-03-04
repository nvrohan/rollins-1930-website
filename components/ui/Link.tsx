"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * App Link wrapper. Uses prefetch={false} to avoid Next.js 16 RSC path 404s
 * when deployed to Vercel (see https://github.com/vercel/next.js/issues/85374).
 * Can be removed once Next.js fixes the issue.
 */
export default function Link(props: ComponentProps<typeof NextLink>) {
  return <NextLink prefetch={false} {...props} />;
}
