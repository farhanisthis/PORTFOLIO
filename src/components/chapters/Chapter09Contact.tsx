"use client";

import React from "react";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";

export default function Chapter09Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="ch-09"
      className="relative min-h-[85vh] flex flex-col justify-between px-6 md:px-16 lg:px-24 bg-bg-panel/80 pt-28 pb-12 overflow-hidden"
    >
      {/* Background Subtle Glow & Ring */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full border border-champagne-line/20 pointer-events-none opacity-20 -mr-32 -mb-32" />

      <div className="max-w-5xl mx-auto w-full">
        {/* Chapter Index */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            09 / 09 · Connect
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        {/* Locked Headline */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary uppercase tracking-tight leading-tight mb-8">
          LET&apos;S CREATE <br />
          <span className="text-champagne font-normal">SOMETHING GOOD.</span>
        </h2>

        <p className="text-sm sm:text-lg text-ink-secondary max-w-xl font-light mb-12">
          Open for Graphic Design, Creative Direction, and Brand Identity opportunities across
          residential, luxury, and digital environments.
        </p>

        {/* Direct Channel Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <a
            href={`mailto:${AUTHORITATIVE_PROFILE.contact.email}`}
            className="p-6 rounded-lg bg-bg-card border border-white/[0.08] hover:border-champagne transition-all group"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-champagne block mb-2">
              Direct Inquiries
            </span>
            <span className="font-serif text-lg text-ink-primary group-hover:text-champagne transition-colors block">
              {AUTHORITATIVE_PROFILE.contact.email}
            </span>
            <span className="text-xs text-ink-muted mt-2 block">Initiate email conversation →</span>
          </a>

          <a
            href={AUTHORITATIVE_PROFILE.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg bg-bg-card border border-white/[0.08] hover:border-champagne transition-all group"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest text-champagne block mb-2">
              Professional Network
            </span>
            <span className="font-serif text-lg text-ink-primary group-hover:text-champagne transition-colors block">
              LinkedIn Profile
            </span>
            <span className="text-xs text-ink-muted mt-2 block">View endorsements & history →</span>
          </a>

          <div className="p-6 rounded-lg bg-bg-card border border-white/[0.08]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-champagne block mb-2">
              Current Location
            </span>
            <span className="font-serif text-lg text-ink-primary block">
              {AUTHORITATIVE_PROFILE.contact.location}
            </span>
            <span className="text-xs text-ink-muted mt-2 block">
              IST (UTC+5:30) · Hybrid & Remote
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Colophon Bar */}
      <div className="max-w-5xl mx-auto w-full pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted">
        <div>
          <span>© 2024–2026 {AUTHORITATIVE_PROFILE.name}. All rights reserved.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-champagne transition-colors uppercase tracking-widest"
        >
          <span>Back to Top (Chapter 01)</span>
          <span>↑</span>
        </button>
      </div>
    </footer>
  );
}
