"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";

export type GalleryImageItem = {
  src: string;
  alt: string;
  imageClassName?: string;
};

type ImageGalleryProps = {
  images: GalleryImageItem[];
};

/**
 * Infinite-scroll image carousel with gradient edge fades.
 * Renders 3 copies of the images array and starts centered on the middle copy.
 * When the user scrolls near the edges, it silently recenters to maintain
 * the illusion of infinite scrolling in both directions.
 */
export function ImageGallery({ images }: ImageGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  // We render 3 copies: [copy0][copy1][copy2]
  // Start scrolled to the middle of copy1 so user can scroll both ways.
  const tripled = [...images, ...images, ...images];
  const copyWidth = useRef(0);

  // On mount, scroll to center of the middle copy (no animation)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || hasInitialized.current) return;

    // Wait a tick for layout
    requestAnimationFrame(() => {
      const singleCopyWidth = el.scrollWidth / 3;
      copyWidth.current = singleCopyWidth;
      // Scroll to the middle of the center copy
      el.scrollLeft = singleCopyWidth + singleCopyWidth / 2 - el.clientWidth / 2;
      hasInitialized.current = true;
    });
  }, []);

  // Recenter when scroll gets close to the edges
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const cw = copyWidth.current;
        if (cw === 0) return;

        // If scrolled into the first copy, jump forward by one copy width
        if (el.scrollLeft < cw * 0.5) {
          el.scrollLeft += cw;
        }
        // If scrolled into the third copy, jump back by one copy width
        else if (el.scrollLeft > cw * 2.5) {
          el.scrollLeft -= cw;
        }
      });
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Lightbox logic — map tripled index back to real index
  const realIndex = openIndex !== null ? openIndex % images.length : null;

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return i > 0 ? i - 1 : images.length * 3 - 1;
    });
  }, [images.length]);

  const goNext = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return i < images.length * 3 - 1 ? i + 1 : 0;
    });
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openIndex, close, goPrev, goNext]);

  const active = realIndex !== null ? images[realIndex] : null;

  return (
    <>
      <div
        className="relative -mx-6 md:-mx-12 mt-12 md:mt-16"
        aria-label="Photo gallery"
      >
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent" />
        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent" />

        <div
          ref={scrollRef}
          className={[
            "flex gap-4 overflow-x-auto overflow-y-hidden px-6 md:px-12 pb-3",
            "snap-x snap-mandatory scroll-ps-6 scroll-pe-6 md:scroll-ps-12 md:scroll-pe-12",
            "scrollbar-none",
          ].join(" ")}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {tripled.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setOpenIndex(index)}
              className={[
                "group relative aspect-[4/5] w-[min(78vw,320px)] shrink-0 snap-center overflow-hidden rounded-2xl",
                "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.18)] ring-1 ring-zinc-900/5 transition-transform",
                "hover:ring-zinc-900/10 active:scale-[0.98] focus-visible:z-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-950",
              ].join(" ")}
              aria-label={`Open photo: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="320px"
                className={[
                  "object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]",
                  image.imageClassName ?? "",
                ].join(" ")}
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-12 text-left text-xs font-medium uppercase tracking-[0.16em] text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                View larger
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && realIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Fullscreen photo"
          >
            <button
              type="button"
              onClick={close}
              className="absolute inset-0 cursor-default"
              aria-label="Close gallery"
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:left-6 md:h-12 md:w-12"
              aria-label="Previous photo"
            >
              <CaretLeft className="h-6 w-6" weight="bold" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 md:right-6 md:h-12 md:w-12"
              aria-label="Next photo"
            >
              <CaretRight className="h-6 w-6" weight="bold" />
            </button>

            <motion.div
              key={active.src + openIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex w-full max-w-6xl flex-col"
            >
              <div className="mb-3 flex items-start justify-between gap-4 px-1">
                <p className="max-w-[85%] text-sm leading-snug text-white/85 md:text-base">
                  {active.alt}
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 active:scale-95"
                  aria-label="Close fullscreen photo"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative mx-auto h-[min(78dvh,820px)] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-black">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  className={[
                    "object-contain",
                    active.imageClassName ?? "",
                  ].join(" ")}
                  priority
                />
              </div>

              <p className="mt-3 text-center text-xs text-white/45">
                {realIndex + 1} / {images.length}
                <span className="mx-2 text-white/25">·</span>
                Arrow keys to move · Esc to close
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
