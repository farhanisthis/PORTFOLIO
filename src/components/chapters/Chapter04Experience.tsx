"use client";

import React, { useRef, useEffect } from "react";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Chapter04Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !headingRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        {
          x: -40,
          opacity: 0.5,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const deliverableFormats = [
    "Social Posts (1:1 & 4:5)",
    "Mobile WhatsApp EDMs",
    "Panoramic SVS Grids (8K–12K)",
    "Motion Graphics & Reels",
    "Digital Banners & Headers",
    "Large-Format Highway Hoardings",
    "Exhibition Roll-up Standees",
    "Corporate Foil Stationery",
  ];

  return (
    <section
      id="ch-04"
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg-panel/60 border-t border-b border-white/[0.05] py-28"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Chapter Index */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            04 / 09 · Work Experience
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        {/* Detaching Heading */}
        <h2
          ref={headingRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary uppercase tracking-tight mb-4"
        >
          PROPACITY <span className="text-champagne font-normal">PROPTECH</span>
        </h2>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest text-ink-muted mb-12 pb-6 border-b border-white/[0.08]">
          <span className="text-champagne">{AUTHORITATIVE_PROFILE.experience.role}</span>
          <span>·</span>
          <span>{AUTHORITATIVE_PROFILE.experience.dates}</span>
          <span>·</span>
          <span>{AUTHORITATIVE_PROFILE.experience.duration}</span>
          <span>·</span>
          <span>14+ Real Estate Brands</span>
        </div>

        {/* Locked 3-Paragraph Copy Block (Section 6) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-ink-primary/90 leading-relaxed font-sans font-light">
            {AUTHORITATIVE_PROFILE.aboutParagraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "font-serif text-xl sm:text-2xl text-ink-primary leading-snug font-normal"
                    : "text-ink-secondary text-sm sm:text-base leading-relaxed"
                }
              >
                {para}
              </p>
            ))}
          </div>

          {/* Formats Shipped Matrix */}
          <div className="lg:col-span-4 p-6 rounded-lg bg-bg-card border border-champagne-line/30 space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne block">
              Deliverable Formats Shipped
            </span>
            <div className="flex flex-wrap gap-2">
              {deliverableFormats.map((fmt, i) => (
                <span
                  key={i}
                  className="text-[11px] font-sans px-2.5 py-1 rounded bg-bg-panel border border-white/[0.08] text-ink-secondary hover:border-champagne-line/60 transition-colors"
                >
                  {fmt}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
