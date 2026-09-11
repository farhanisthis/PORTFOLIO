"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { DISCIPLINES } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Chapter06Disciplines() {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const track3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Alternating directional movement on scroll
      if (track1Ref.current) {
        gsap.to(track1Ref.current, {
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (track2Ref.current) {
        gsap.to(track2Ref.current, {
          xPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      if (track3Ref.current) {
        gsap.to(track3Ref.current, {
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="ch-06"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-base py-32 border-t border-b border-white/[0.06]"
    >
      {/* Chapter Index */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            06 / 09 · Creative Disciplines
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-ink-primary uppercase tracking-tight">
          FORMAT DIVERSITY & <span className="text-champagne font-normal">TECHNICAL SCOPE</span>
        </h2>
      </div>

      {/* Kinetic Alternating Scroll Tracks */}
      <div className="space-y-6 select-none opacity-85">
        {/* Track 1: Moving Left (SOCIAL / EDM) */}
        <div
          ref={track1Ref}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.07] uppercase hover:text-champagne/40 transition-colors">
            SOCIAL
          </span>
          <div className="relative w-36 sm:w-48 aspect-video rounded overflow-hidden border border-white/10 shrink-0">
            <Image
              src={DISCIPLINES[0].image}
              alt="Social deliverable preview"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-ink-primary/20 uppercase">
            694 DELIVERABLES
          </span>
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.07] uppercase hover:text-champagne/40 transition-colors">
            DIRECT RESPONSE
          </span>
        </div>

        {/* Track 2: Moving Right (EDM / MOTION) */}
        <div
          ref={track2Ref}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform -translate-x-32"
        >
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.07] uppercase hover:text-champagne/40 transition-colors">
            EDM & WHATSAPP
          </span>
          <div className="relative w-28 sm:w-36 aspect-[9/16] rounded overflow-hidden border border-white/10 shrink-0">
            <Image
              src={DISCIPLINES[1].image}
              alt="EDM deliverable preview"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-ink-primary/20 uppercase">
            674 EDMS
          </span>
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.07] uppercase hover:text-champagne/40 transition-colors">
            MOTION SYSTEMS
          </span>
          <div className="relative w-36 sm:w-48 aspect-video rounded overflow-hidden border border-white/10 shrink-0">
            <Image
              src={DISCIPLINES[2].image}
              alt="Motion deliverable preview"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Track 3: Moving Left (PRINT / BRAND / DIGITAL) */}
        <div
          ref={track3Ref}
          className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        >
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.07] uppercase hover:text-champagne/40 transition-colors">
            LARGE FORMAT PRINT
          </span>
          <div className="relative w-24 sm:w-32 aspect-[1/2] rounded overflow-hidden border border-white/10 shrink-0">
            <Image
              src={DISCIPLINES[3].image}
              alt="Print deliverable preview"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-ink-primary/20 uppercase">
            HOARDINGS & STANDEES
          </span>
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl text-white/[0.07] uppercase hover:text-champagne/40 transition-colors">
            BRAND IDENTITY
          </span>
        </div>
      </div>

      {/* Grid of Disciplines Details */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISCIPLINES.map((d, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-bg-panel/50 border border-white/[0.06] hover:border-champagne-line/50 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="font-serif text-xl text-ink-primary">{d.name}</span>
                <span className="font-mono text-xs text-champagne">{d.count} Assets</span>
              </div>
              <p className="text-xs text-ink-secondary leading-relaxed font-light font-sans">
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
