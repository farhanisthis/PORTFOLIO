"use client";

import React, { useEffect } from "react";
import Image from "next/image";

export interface LightboxData {
  src: string;
  alt: string;
  title?: string;
  brand?: string;
  format?: string;
  authorship?: string;
  isRestricted?: boolean;
}

interface ImageLightboxModalProps {
  data: LightboxData | null;
  onClose: () => void;
}

export default function ImageLightboxModal({ data, onClose }: ImageLightboxModalProps) {
  useEffect(() => {
    if (!data) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [data, onClose]);

  if (!data) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar: Metadata & Close Button */}
      <div
        className="flex items-center justify-between w-full max-w-7xl mx-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          {data.brand && (
            <span className="text-xs font-serif uppercase tracking-widest text-champagne border border-champagne-line/60 px-2.5 py-1 rounded bg-bg-panel/80">
              {data.brand}
            </span>
          )}
          {data.format && (
            <span className="text-xs font-mono uppercase tracking-wider text-ink-secondary hidden sm:inline-block">
              {data.format}
            </span>
          )}
          {data.isRestricted && (
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 border border-amber-500/50 px-2.5 py-0.5 rounded bg-amber-950/80">
              Private — Permission Pending
            </span>
          )}
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/20 bg-bg-panel text-ink-primary hover:border-champagne hover:text-champagne transition-all"
          aria-label="Close Lightbox"
        >
          <span>Close</span>
          <span className="text-base leading-none">✕</span>
        </button>
      </div>

      {/* Main Image Center Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 max-w-7xl mx-auto w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full max-h-[82vh] flex items-center justify-center">
          <Image
            src={data.src}
            alt={data.alt}
            fill
            sizes="100vw"
            priority
            className={`object-contain rounded-md shadow-2xl transition-all ${
              data.isRestricted ? "restricted-asset opacity-40" : ""
            }`}
          />
          {data.isRestricted && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
              <span className="text-xs font-mono uppercase tracking-widest px-4 py-2 rounded bg-bg-base/90 border border-white/20 text-ink-primary mb-2 shadow-2xl">
                CONFIDENTIAL CAMPAIGN · ACCESS RESTRICTED
              </span>
              <p className="text-xs text-ink-muted max-w-md">
                Displayed in preview mode pending final written clearance from the client.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Bar: Title & Authorship */}
      <div
        className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-white/[0.08] text-xs font-mono text-ink-secondary z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-sm font-serif text-ink-primary">
          {data.title || data.alt}
        </p>

        <div className="flex items-center gap-4">
          {data.authorship && (
            <span className="text-champagne border border-champagne-line/60 px-2 py-0.5 rounded">
              {data.authorship}
            </span>
          )}
          <span className="text-ink-muted text-[11px]">Press ESC or click anywhere outside to exit</span>
        </div>
      </div>
    </div>
  );
}
