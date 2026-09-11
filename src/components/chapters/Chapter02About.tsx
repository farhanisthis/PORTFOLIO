"use client";

import React, { useRef, useEffect } from "react";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Chapter02About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          y: -60,
          opacity: 0.4,
          letterSpacing: "0.2em",
        },
        {
          y: 0,
          opacity: 1,
          letterSpacing: "0.02em",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "top 25%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ch-02"
      ref={containerRef}
      className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg-panel/40 border-t border-b border-white/[0.04] py-24"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Chapter Index Badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            02 / 09 · Profile
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        {/* Traveling / Morphing Headline */}
        <h2
          ref={headingRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary uppercase tracking-tight mb-8"
        >
          ABOUT <span className="text-champagne font-normal">KASHISH</span>
        </h2>

        {/* Section 6 Locked Copy */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-white/[0.08]">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase text-ink-muted tracking-wider">
              Core Discipline & Scope
            </span>
            <p className="mt-2 text-sm text-champagne font-serif italic">
              Digital Marketing · Brand Identity · Motion Systems
            </p>
          </div>

          <div className="md:col-span-8 space-y-6 text-base sm:text-lg text-ink-primary/90 leading-relaxed font-sans font-light">
            <p className="text-xl sm:text-2xl font-serif text-ink-primary leading-snug">
              {AUTHORITATIVE_PROFILE.introHeadline}
            </p>

            <div className="h-px w-full bg-white/[0.06] my-6" />

            <p className="text-ink-secondary text-sm sm:text-base leading-relaxed">
              Operating at the intersection of direct-response performance and editorial restraint,
              crafting campaign ecosystems for luxury residential developments, corporate identity,
              and high-velocity digital marketing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
