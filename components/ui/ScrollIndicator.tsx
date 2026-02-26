"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade from opacity 1 at scrollY=0 to opacity 0 at scrollY=120px
      const newOpacity = Math.max(0, 1 - scrollY / 120);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUpIn_0.7s_ease-out_both] text-muted"
      style={{ animationDelay: "800ms", opacity }}
    >
      <span className="font-sans text-[10px] tracking-[0.2em] uppercase">
        Scroll
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        className="animate-bounce"
        aria-hidden="true"
      >
        <path
          d="M1 1L10 10L19 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
