"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";

const SCROLL_THRESHOLD = 48;

const NAV_LINKS = [
  { href: "#heart", label: "Story" },
  { href: "#video", label: "Video" },
  { href: "#gallery", label: "Gallery" },
  { href: "#homebase", label: "Homebase" },
  { href: "#details", label: "Logistics" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const linkClass =
    "text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950";

  return (
    <>
      <nav
        className={[
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-6 py-5 md:gap-8 md:px-10 md:py-6 transition-[background,box-shadow,border-color,backdrop-filter] duration-300 ease-out",
          scrolled
            ? "bg-white/65 backdrop-blur-xl backdrop-saturate-150 border-b border-zinc-200/50 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_8px_32px_-8px_rgba(0,0,0,0.08)]"
            : "border-b border-transparent",
        ].join(" ")}
        aria-label="Site"
      >
        <Link
          href="/"
          className="flex min-w-0 flex-col gap-0.5 text-black outline-none ring-zinc-950 focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          <span className="text-sm font-semibold uppercase leading-tight tracking-tight">
            Ben &amp; Celine Valentin
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-black">
            INDIA 2026
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className={linkClass}>
              {label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white/80 text-zinc-950 transition-colors hover:bg-zinc-100 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="site-mobile-menu"
            aria-label="Open menu"
          >
            <List className="h-5 w-5" weight="bold" />
          </button>
          <a
            href="#next-steps"
            className={[
              "hidden shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition-colors active:scale-[0.98] sm:px-5 md:inline-flex md:items-center md:justify-center",
              scrolled
                ? "bg-zinc-950 text-white hover:bg-zinc-800"
                : "bg-zinc-950 text-white hover:bg-zinc-800 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.35)]",
            ].join(" ")}
          >
            Talk to us
          </a>
        </div>
      </nav>

      {menuOpen ? (
        <div
          id="site-mobile-menu"
          className="fixed inset-0 z-[100] flex flex-col bg-[#fcfcfc] px-8 pb-10 pt-24 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Page sections"
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-950 transition-colors hover:bg-zinc-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" weight="bold" />
          </button>

          <nav className="flex flex-1 flex-col gap-2" aria-label="Sections">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="border-b border-zinc-200 py-4 text-2xl font-medium tracking-tight text-zinc-950 transition-colors hover:text-zinc-600"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <a
            href="#next-steps"
            className="mt-6 w-full rounded-full bg-zinc-950 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-800 active:scale-[0.99]"
            onClick={() => setMenuOpen(false)}
          >
            Talk to us
          </a>
        </div>
      ) : null}
    </>
  );
}
