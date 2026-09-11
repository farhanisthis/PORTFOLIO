"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";
import { gsap } from "gsap";

export default function Chapter01Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fragmentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!fragmentsRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;

      gsap.to(fragmentsRef.current.children, {
        x: (i) => x * ((i + 1) * 0.4),
        y: (i) => y * ((i + 1) * 0.4),
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.05,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="ch-01"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-bg-base pt-24 pb-16"
    >
      {/* Background Architectural Orbit Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-champagne-line/40 opacity-20" />
        <div className="w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full border border-champagne-line/30 opacity-15" />
        <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-champagne-line/20 opacity-10" />
        <div className="absolute w-full max-w-4xl h-96 subtle-glow rounded-full blur-3xl opacity-30 pointer-events-none" />
      </div>

      {/* Floating Project Fragments (Parallax Layer) */}
      <div
        ref={fragmentsRef}
        className="absolute inset-0 pointer-events-none z-10 max-w-7xl mx-auto hidden md:block"
      >
        {/* Fragment 1: Trevoc SVS Grid snippet (Top Right) */}
        <div className="absolute top-[18%] right-[8%] w-48 lg:w-56 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform rotate-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded">
            <Image
              src="/work/trevoc/trevoc_hero_01.webp"
              alt="Trevoc Ultra-Luxury Grid Preview"
              fill
              sizes="224px"
              className="object-cover"
            />
          </div>
          <p className="mt-1.5 text-[10px] font-mono text-champagne/80 uppercase tracking-widest">
            02 · Trevoc Sector-56
          </p>
        </div>

        {/* Fragment 2: Kreeva Swaranaya EDM snippet (Bottom Left) */}
        <div className="absolute bottom-[20%] left-[8%] w-40 lg:w-48 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform -rotate-4">
          <div className="relative aspect-[9/16] max-h-56 overflow-hidden rounded">
            <Image
              src="/work/kreeva/kreeva_swaranaya_01.webp"
              alt="Kreeva Luxury EDM Preview"
              fill
              sizes="192px"
              className="object-cover"
            />
          </div>
          <p className="mt-1.5 text-[10px] font-mono text-champagne/80 uppercase tracking-widest">
            01 · Kreeva Swaranaya
          </p>
        </div>

        {/* Fragment 3: Elevate Vanya Standee (Top Left) */}
        <div className="absolute top-[22%] left-[10%] w-36 lg:w-44 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform -rotate-6">
          <div className="relative aspect-[1/2] max-h-48 overflow-hidden rounded">
            <Image
              src="/work/elevate-vanya/elevate-vanya_hero_01.webp"
              alt="Elevate Vanya Roll-up Standee Preview"
              fill
              sizes="176px"
              className="object-cover"
            />
          </div>
          <p className="mt-1.5 text-[10px] font-mono text-champagne/80 uppercase tracking-widest">
            03 · Elevate Standee
          </p>
        </div>

        {/* Fragment 4: Soul 12K Grid snippet (Bottom Right) */}
        <div className="absolute bottom-[22%] right-[10%] w-52 lg:w-60 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform rotate-2">
          <div className="relative aspect-[21/9] overflow-hidden rounded">
            <Image
              src="/work/soul/soul_hero_01.webp"
              alt="Soul Eco-Luxury Forest Grid Preview"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>
          <p className="mt-1.5 text-[10px] font-mono text-champagne/80 uppercase tracking-widest">
            03 · Soul Forest Grid
          </p>
        </div>
      </div>

      {/* Main Hero Typographic Core */}
      <div className="relative z-20 text-center max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-champagne-line/50 bg-bg-panel/60">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
          <span className="text-xs font-mono tracking-widest uppercase text-champagne/90">
            {AUTHORITATIVE_PROFILE.introEyebrow}
          </span>
        </div>

        {/* Huge Name Headline */}
        <h1
          id="hero-name"
          className="font-serif font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-ink-primary leading-none uppercase select-none drop-shadow-sm"
        >
          {AUTHORITATIVE_PROFILE.name}
        </h1>

        {/* Parenthetical Role Line */}
        <p className="mt-6 md:mt-8 font-serif italic text-lg sm:text-2xl md:text-3xl text-champagne/90 tracking-wide font-normal">
          {AUTHORITATIVE_PROFILE.roleLine}
        </p>

        {/* Agency Summary */}
        <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-light">
          {AUTHORITATIVE_PROFILE.introHeadline}
        </p>

        {/* Scroll Indicator Prompt */}
        <div className="mt-12 flex flex-col items-center gap-2 text-ink-muted">
          <span className="text-[11px] font-mono uppercase tracking-widest">
            Scroll to begin continuous timeline
          </span>
          <div className="w-4 h-8 border border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-champagne rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
