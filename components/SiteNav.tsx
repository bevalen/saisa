"use client";

import { useLayoutEffect, useState } from "react";

const SCROLL_THRESHOLD = 48;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center gap-6 px-6 py-5 md:px-10 md:py-6 transition-[background,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
        scrolled
          ? "bg-white/65 backdrop-blur-xl backdrop-saturate-150 border-b border-zinc-200/50 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_32px_-8px_rgba(0,0,0,0.08)]"
          : "border-b border-transparent",
      ].join(" ")}
      aria-label="Site"
    >
      <div className="flex min-w-0 flex-col gap-0.5 text-black">
        <span className="text-sm font-semibold uppercase leading-tight tracking-tight">
          Ben & Celine Valentin
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-black">
          INDIA 2026
        </span>
      </div>

      <a
        href="#next-steps"
        className={[
          "pointer-events-auto shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-colors active:scale-[0.98]",
          scrolled
            ? "bg-zinc-950 text-white hover:bg-zinc-800"
            : "bg-zinc-950 text-white hover:bg-zinc-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)]",
        ].join(" ")}
      >
        Next steps
      </a>
    </nav>
  );
}
