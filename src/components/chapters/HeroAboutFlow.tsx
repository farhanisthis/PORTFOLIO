"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroAboutFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fragmentsRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const heroSubRef = useRef<HTMLDivElement>(null);
  const heroNameRef = useRef<HTMLHeadingElement>(null);
  const flipperRef = useRef<HTMLSpanElement>(null);
  const aboutWordRef = useRef<HTMLSpanElement>(null);
  const targetSlotRef = useRef<HTMLSpanElement>(null);
  const aboutBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Mouse parallax for floating fragments
    const handleMouseMove = (e: MouseEvent) => {
      if (!fragmentsRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 24;
      const y = (e.clientY / innerHeight - 0.5) * 24;

      gsap.to(fragmentsRef.current.children, {
        x: (i) => x * ((i + 1) * 0.35),
        y: (i) => y * ((i + 1) * 0.35),
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.04,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ScrollTrigger traveling KASHISH text animation with 3D flip to ME at Chapter 02
    let tl: gsap.core.Timeline | null = null;

    const setupTimeline = () => {
      if (
        !containerRef.current ||
        !heroNameRef.current ||
        !targetSlotRef.current ||
        !aboutWordRef.current
      )
        return;

      if (tl) {
        tl.kill();
      }

      // Reset transforms to measure clean bounding client rects
      gsap.set(heroNameRef.current, { clearProps: "all" });
      if (flipperRef.current) gsap.set(flipperRef.current, { clearProps: "all" });
      gsap.set(aboutWordRef.current, { clearProps: "all" });

      const heroRect = heroNameRef.current.getBoundingClientRect();
      const targetRect = targetSlotRef.current.getBoundingClientRect();

      const deltaX = targetRect.left - heroRect.left;
      const deltaY = targetRect.top - heroRect.top;
      const scale = targetRect.height / (heroRect.height || 1);

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          endTrigger: targetSlotRef.current,
          end: "top 32%",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Hero text travels across the scroll timeline and scales to fit Chapter 02 heading
      tl.to(
        heroNameRef.current,
        {
          x: deltaX,
          y: deltaY,
          scale: Math.max(0.35, Math.min(0.75, scale)),
          transformOrigin: "top left",
          ease: "power1.inOut",
          duration: 1,
        },
        0
      );

      // 2. Hero secondary elements (eyebrow, role line, summary, fragments) fade out upward
      tl.to(
        [eyebrowRef.current, heroSubRef.current, fragmentsRef.current],
        {
          opacity: 0,
          y: -35,
          ease: "power1.out",
          duration: 0.35,
        },
        0
      );

      // 3. ABOUT word emerges from the left
      tl.fromTo(
        aboutWordRef.current,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          ease: "power1.out",
          duration: 0.4,
        },
        0.35
      );

      // 4. 3D card flip: KASHISH travels down as KASHISH, then flips vertically into ME right as it docks at ABOUT
      if (flipperRef.current) {
        tl.fromTo(
          flipperRef.current,
          {
            rotateX: 0,
          },
          {
            rotateX: 180,
            ease: "power2.inOut",
            duration: 0.3,
          },
          0.66
        );
      }

      // 5. About body text cascades in
      if (aboutBodyRef.current) {
        tl.fromTo(
          aboutBodyRef.current,
          {
            opacity: 0.2,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            ease: "power1.out",
            duration: 0.4,
          },
          0.6
        );
      }
    };

    // Small delay to ensure initial fonts and layout are ready
    const timer = setTimeout(() => {
      setupTimeline();
      ScrollTrigger.refresh();
    }, 150);

    const handleResize = () => {
      setupTimeline();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      if (tl) tl.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-bg-base overflow-visible">
      {/* ========================================================================= */}
      {/* CHAPTER 01: INTRODUCTION */}
      {/* ========================================================================= */}
      <section
        id="ch-01"
        className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-20 overflow-visible"
      >
        {/* Background Architectural Orbit Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
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
        <div className="relative z-30 text-center max-w-5xl mx-auto w-full">
          {/* Eyebrow */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-champagne-line/50 bg-bg-panel/60 transition-opacity"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="text-xs font-mono tracking-widest uppercase text-champagne/90">
              {AUTHORITATIVE_PROFILE.introEyebrow}
            </span>
          </div>

          {/* The Traveling KASHISH Headline with 3D Flip to ME */}
          <div className="my-2 relative flex justify-center">
            <h1
              ref={heroNameRef}
              id="hero-name"
              className="inline-block will-change-transform [perspective:1200px]"
            >
              <span
                ref={flipperRef}
                className="relative block [transform-style:preserve-3d]"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front face: KASHISH */}
                <span
                  className="block font-serif font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-ink-primary leading-none uppercase select-none drop-shadow-sm [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {AUTHORITATIVE_PROFILE.name}
                </span>

                {/* Back face: ME */}
                <span
                  className="absolute top-0 left-0 block font-serif font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-champagne leading-none uppercase select-none [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateX(180deg)",
                  }}
                >
                  ME
                </span>
              </span>
            </h1>
          </div>

          {/* Role Line & Summary */}
          <div ref={heroSubRef} className="transition-opacity">
            <p className="mt-6 md:mt-8 font-serif italic text-lg sm:text-2xl md:text-3xl text-champagne/90 tracking-wide font-normal">
              {AUTHORITATIVE_PROFILE.roleLine}
            </p>

            <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-light">
              {AUTHORITATIVE_PROFILE.introHeadline}
            </p>

            {/* Scroll Indicator Prompt */}
            <div className="mt-12 flex flex-col items-center gap-2 text-ink-muted">
              <span className="text-[11px] font-mono uppercase tracking-widest">
                Scroll to explore timeline
              </span>
              <div className="w-4 h-8 border border-white/20 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-champagne rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CHAPTER 02: ABOUT ME */}
      {/* ========================================================================= */}
      <section
        id="ch-02"
        className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg-panel/40 border-t border-b border-white/[0.04] py-28"
      >
        <div className="max-w-5xl mx-auto w-full">
          {/* Chapter Index Badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="font-mono text-xs text-champagne uppercase tracking-widest">
              02 / 09 · Profile
            </span>
            <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
          </div>

          {/* Destination Heading: ABOUT + Docking Target Slot */}
          <h2
            id="about-heading"
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary uppercase tracking-tight mb-8 flex flex-wrap items-baseline gap-x-4 min-h-[1.2em]"
          >
            <span ref={aboutWordRef} className="inline-block opacity-0">
              ABOUT
            </span>
            {/* Target placeholder slot where hero text physically docks */}
            <span
              ref={targetSlotRef}
              className="inline-block opacity-0 pointer-events-none select-none text-champagne font-normal"
              aria-hidden="true"
            >
              ME
            </span>
          </h2>

          {/* Section 6 Locked Copy */}
          <div
            ref={aboutBodyRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-6 border-t border-white/[0.08]"
          >
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
                Operating at the intersection of direct-response performance and editorial
                restraint, crafting campaign ecosystems for luxury residential developments,
                corporate identity, and high-velocity digital marketing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
