"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PlayCircle, X } from "@phosphor-icons/react";

type VideoLightboxProps = {
  videoId: string;
  thumbnailSrc: string;
  title: string;
  eyebrow?: string;
};

export function VideoLightbox({
  videoId,
  thumbnailSrc,
  title,
  eyebrow = "Play Film",
}: VideoLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl text-left shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        aria-label={`Play ${title}`}
      >
        <div className="relative aspect-video w-full">
          <div className="absolute inset-0 z-10 bg-black/25 transition-colors duration-500 group-hover:bg-black/40" />
          <Image
            src={thumbnailSrc}
            alt={title}
            fill
            sizes="(min-width: 1280px) 80rem, 100vw"
            className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="rounded-full border border-white/10 bg-white/10 p-6 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
              <PlayCircle weight="fill" className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-4 p-6">
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                {eyebrow}
              </p>
              <p className="text-lg font-medium text-white">{title}</p>
            </div>
            <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
              Watch Here
            </span>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 cursor-default"
              aria-label="Close video"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                    India 2026
                  </p>
                  <h3 className="mt-1 text-base font-medium text-white md:text-lg">
                    {title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 active:scale-95"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
