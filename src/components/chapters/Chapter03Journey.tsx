"use client";

import React, { useRef, useEffect } from "react";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Chapter03Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    {
      year: "2023",
      title: "Bachelor of Computer Applications (BCA)",
      institution: AUTHORITATIVE_PROFILE.education.institution,
      detail: "Commenced undergraduate studies in computing, interface principles, and systems architecture.",
      badge: "Academic Foundation",
    },
    {
      year: "2024",
      title: "Graphic Designer Intern",
      institution: AUTHORITATIVE_PROFILE.experience.company,
      detail: "4 months of high-velocity agency production (June–Sept 2024) across 14+ commercial & luxury real estate brands.",
      badge: "Agency Experience",
      isHighlight: true,
    },
    {
      year: "2026",
      title: "BCA Graduation & Expansion",
      institution: AUTHORITATIVE_PROFILE.education.institution,
      detail: "Completion of BCA degree; full-time visual communication, digital marketing, and motion direction.",
      badge: "Target Milestone",
    },
  ];

  return (
    <section
      id="ch-03"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg-base py-28"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Chapter Index */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            03 / 09 · Journey & Timeline
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-primary uppercase tracking-tight mb-16">
          CONTINUOUS <span className="text-champagne">PROGRESSION</span>
        </h2>

        {/* Timeline Structure */}
        <div className="relative pl-8 md:pl-16">
          {/* Animated Connecting Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-champagne via-champagne/60 to-champagne/10 origin-top"
          />

          <div className="space-y-16">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div
                  className={`absolute -left-[35px] md:-left-[67px] top-1.5 w-3.5 h-3.5 rounded-full border ${
                    item.isHighlight
                      ? "border-champagne bg-champagne shadow-[0_0_12px_rgba(198,168,125,0.6)]"
                      : "border-champagne-line bg-bg-base"
                  }`}
                />

                <div
                  className={`p-6 md:p-8 rounded-lg border transition-all duration-300 ${
                    item.isHighlight
                      ? "bg-bg-panel/90 border-champagne-line/80 shadow-xl"
                      : "bg-bg-panel/40 border-white/[0.06] hover:border-champagne-line/40"
                  }`}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                    <span className="font-mono text-xl sm:text-2xl font-light text-champagne">
                      {item.year}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-champagne-line/40 bg-bg-card text-ink-secondary">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-ink-primary mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm font-sans text-champagne/80 mb-3 font-medium">
                    {item.institution}
                  </p>

                  <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-light">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
