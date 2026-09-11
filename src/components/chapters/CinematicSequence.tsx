"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function CinematicSequence() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Chapter 01 Refs
  const ch01Ref = useRef<HTMLDivElement>(null);
  const orbitRingsRef = useRef<HTMLDivElement>(null);
  const fragmentsRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const heroSubRef = useRef<HTMLDivElement>(null);
  const heroNameRef = useRef<HTMLHeadingElement>(null);
  const introExpandRef = useRef<HTMLDivElement>(null);
  const flipperRef = useRef<HTMLSpanElement>(null);

  // Chapter 02 Refs
  const ch02Ref = useRef<HTMLDivElement>(null);
  const aboutWordRef = useRef<HTMLSpanElement>(null);
  const aboutTargetRef = useRef<HTMLSpanElement>(null);
  const aboutBodyRef = useRef<HTMLDivElement>(null);

  // Chapter 03 Refs
  const ch03Ref = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const journeyPropacityRef = useRef<HTMLSpanElement>(null);
  const milestoneNodesRef = useRef<HTMLDivElement>(null);

  // Chapter 04 Refs
  const ch04Ref = useRef<HTMLDivElement>(null);
  const workAtWordRef = useRef<HTMLSpanElement>(null);
  const propacityTargetRef = useRef<HTMLSpanElement>(null);
  const propacityMetaRef = useRef<HTMLDivElement>(null);
  const propacityContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let introComplete = false;

    // Subtle mouse parallax on hero fragments (desktop only, active after load intro)
    const handleMouseMove = (e: MouseEvent) => {
      if (!fragmentsRef.current || !introComplete || window.innerWidth < 768) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 28;
      const y = (e.clientY / innerHeight - 0.5) * 28;

      gsap.to(fragmentsRef.current.children, {
        x: (i) => x * ((i + 1) * 0.38),
        y: (i) => y * ((i + 1) * 0.38),
        duration: 1.4,
        ease: "power2.out",
        stagger: 0.03,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    let ctx: gsap.Context | null = null;

    const setupTimelines = () => {
      if (
        !containerRef.current ||
        !heroNameRef.current ||
        !aboutTargetRef.current ||
        !aboutWordRef.current ||
        !journeyPropacityRef.current ||
        !propacityTargetRef.current
      )
        return;

      if (ctx) {
        ctx.revert();
      }

      ctx = gsap.context(() => {
        // ---------------------------------------------------------------------
        // RESET TRANSFORMS FOR ACCURATE GEOMETRIC RECT MEASUREMENT
        // ---------------------------------------------------------------------
        gsap.set(heroNameRef.current, { clearProps: "all" });
        if (flipperRef.current) gsap.set(flipperRef.current, { clearProps: "all" });
        gsap.set(aboutWordRef.current, { clearProps: "all" });
        gsap.set(journeyPropacityRef.current, { clearProps: "all" });
        gsap.set(workAtWordRef.current, { clearProps: "all" });

        // ---------------------------------------------------------------------
        // 0. CINEMATIC PAGE LOAD ANIMATION:
        // STAGE 1: KASHISH TEXT BECOMES FULLY VISIBLE FIRST
        // STAGE 2: SUDDEN BURST OF 4 IMAGES & SUPPORTING TEXT
        // ---------------------------------------------------------------------
        if (ch01Ref.current && fragmentsRef.current && introExpandRef.current) {
          const containerRect = ch01Ref.current.getBoundingClientRect();
          const centerX = containerRect.width / 2;
          const centerY = containerRect.height / 2;

          const introTl = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
              introComplete = true;
            },
          });

          // STAGE 1: KASHISH expands outward horizontally and becomes 100% visible first
          introTl.fromTo(
            introExpandRef.current,
            {
              clipPath: "inset(0 50% 0 50%)",
              scale: 0.72,
              opacity: 0,
              letterSpacing: "-0.04em",
              transformOrigin: "center center",
            },
            {
              clipPath: "inset(0 0% 0 0%)",
              scale: 1,
              opacity: 1,
              letterSpacing: "-0.025em",
              duration: 1.3,
              ease: "power3.out",
            },
            0.1
          );

          // STAGE 2 (Starts at 1.65s): SUDDEN BURST of 4 images and supporting text
          // A. The 4 floating picture fragments burst outward with explosive velocity to their corners
          const cards = Array.from(fragmentsRef.current.children) as HTMLElement[];
          cards.forEach((card, idx) => {
            const cardRect = card.getBoundingClientRect();
            const currentLeft = cardRect.left - containerRect.left + cardRect.width / 2;
            const currentTop = cardRect.top - containerRect.top + cardRect.height / 2;

            const startOffsetX = centerX - currentLeft;
            const startOffsetY = centerY - currentTop;

            introTl.fromTo(
              card,
              {
                x: startOffsetX,
                y: startOffsetY,
                scale: 0.04,
                opacity: 0,
              },
              {
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "power4.out",
              },
              1.65 + idx * 0.08
            );
          });

          // B. Orbit rings bloom outward simultaneously with the burst
          if (orbitRingsRef.current) {
            introTl.fromTo(
              orbitRingsRef.current,
              { scale: 0.2, opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.4, ease: "power2.out" },
              1.7
            );
          }

          // C. Eyebrow & Role line suddenly snap/reveal into place right with the images
          introTl.fromTo(
            [eyebrowRef.current, heroSubRef.current],
            { opacity: 0, y: 25, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
            1.85
          );
        }

        // ---------------------------------------------------------------------
        // 1. HERO -> ABOUT ME (PHYSICAL TRAVEL + 3D FLIP TO ME AT ABOUT)
        // ---------------------------------------------------------------------
        const heroRect = heroNameRef.current!.getBoundingClientRect();
        const aboutTargetRect = aboutTargetRef.current!.getBoundingClientRect();

        const deltaX1 = aboutTargetRect.left - heroRect.left;
        const deltaY1 = aboutTargetRect.top - heroRect.top;
        const scale1 = aboutTargetRect.height / (heroRect.height || 1);

        const heroAboutTl = gsap.timeline({
          scrollTrigger: {
            trigger: ch01Ref.current,
            start: "top top",
            endTrigger: aboutTargetRef.current,
            end: "top 32%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // KASHISH typography travels continuously and scales to match About heading
        heroAboutTl.to(
          heroNameRef.current,
          {
            x: deltaX1,
            y: deltaY1,
            scale: Math.max(0.32, Math.min(0.78, scale1)),
            transformOrigin: "top left",
            ease: "power1.inOut",
            duration: 1,
          },
          0
        );

        // Parallax project fragments drift outward and fade
        if (fragmentsRef.current) {
          heroAboutTl.to(
            fragmentsRef.current.children,
            {
              opacity: 0,
              y: (i) => (i % 2 === 0 ? -70 : 70),
              x: (i) => (i < 2 ? -50 : 50),
              scale: 0.9,
              ease: "power1.out",
              duration: 0.45,
            },
            0
          );
        }

        // Hero subtitle & eyebrow fade away upward
        heroAboutTl.to(
          [eyebrowRef.current, heroSubRef.current],
          {
            opacity: 0,
            y: -35,
            ease: "power1.out",
            duration: 0.35,
          },
          0
        );

        // ABOUT emerges with editorial elegance from the left
        heroAboutTl.fromTo(
          aboutWordRef.current,
          {
            opacity: 0,
            x: -40,
          },
          {
            opacity: 1,
            x: 0,
            ease: "power1.out",
            duration: 0.4,
          },
          0.38
        );

        // 3D CARD FLIP: KASHISH travels down as KASHISH, then flips vertically into ME right at ABOUT!
        if (flipperRef.current) {
          heroAboutTl.fromTo(
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

        // About locked body copy cascades in
        if (aboutBodyRef.current) {
          heroAboutTl.fromTo(
            aboutBodyRef.current,
            {
              opacity: 0.15,
              y: 30,
            },
            {
              opacity: 1,
              y: 0,
              ease: "power1.out",
              duration: 0.45,
            },
            0.55
          );
        }

        // ---------------------------------------------------------------------
        // 2. ABOUT -> JOURNEY (ARCHITECTURAL BEAM SCRUB)
        // ---------------------------------------------------------------------
        if (timelineLineRef.current && ch03Ref.current) {
          gsap.fromTo(
            timelineLineRef.current,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ch03Ref.current,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true,
              },
            }
          );
        }

        // ---------------------------------------------------------------------
        // 3. JOURNEY -> WORK AT PROPACITY (PROPACITY PHYSICAL ELEMENT TRAVEL)
        // ---------------------------------------------------------------------
        const initialPropScale = 0.38;
        gsap.set(journeyPropacityRef.current, {
          scale: initialPropScale,
          transformOrigin: "top left",
        });

        const propOriginRect = journeyPropacityRef.current!.getBoundingClientRect();
        const propTargetRect = propacityTargetRef.current!.getBoundingClientRect();

        const deltaX2 = propTargetRect.left - propOriginRect.left;
        const deltaY2 = propTargetRect.top - propOriginRect.top;

        const journeyPropacityTl = gsap.timeline({
          scrollTrigger: {
            trigger: journeyPropacityRef.current,
            start: "top 65%",
            endTrigger: propacityTargetRef.current,
            end: "top 32%",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // PROPACITY travels physically down to Chapter 04 and scales to 1.0 (native crispness)
        journeyPropacityTl.fromTo(
          journeyPropacityRef.current,
          {
            x: 0,
            y: 0,
            scale: initialPropScale,
            transformOrigin: "top left",
          },
          {
            x: deltaX2,
            y: deltaY2,
            scale: 1.0,
            transformOrigin: "top left",
            ease: "power1.inOut",
            duration: 1,
          },
          0
        );

        // WORK AT slides in smoothly beside the arriving PROPACITY
        if (workAtWordRef.current) {
          journeyPropacityTl.fromTo(
            workAtWordRef.current,
            {
              opacity: 0,
              x: -35,
            },
            {
              opacity: 1,
              x: 0,
              ease: "power1.out",
              duration: 0.45,
            },
            0.45
          );
        }

        // Chapter 04 Metadata & Locked Paragraphs cascade in
        if (propacityMetaRef.current) {
          journeyPropacityTl.fromTo(
            propacityMetaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, ease: "power1.out", duration: 0.35 },
            0.65
          );
        }

        if (propacityContentRef.current) {
          journeyPropacityTl.fromTo(
            propacityContentRef.current,
            { opacity: 0.2, y: 30 },
            { opacity: 1, y: 0, ease: "power1.out", duration: 0.4 },
            0.72
          );
        }
      }, containerRef);
    };

    // Ensure DOM, fonts, and layout are settled before measuring
    const timer = setTimeout(() => {
      setupTimelines();
      ScrollTrigger.refresh();
    }, 200);

    const handleResize = () => {
      setupTimelines();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, []);

  const milestones = [
    {
      year: "2023",
      title: "Bachelor of Computer Applications (BCA)",
      institution: AUTHORITATIVE_PROFILE.education.institution,
      detail:
        "Commenced undergraduate studies in computing, interface principles, and systems architecture.",
      badge: "Academic Foundation",
    },
    {
      year: "2024",
      title: "Graphic Designer Intern",
      institution: AUTHORITATIVE_PROFILE.experience.company,
      detail:
        "4 months of high-velocity agency production (June–Sept 2024) across 14+ commercial & luxury real estate brands.",
      badge: "Agency Experience",
      isHighlight: true,
    },
    {
      year: "2026",
      title: "BCA Graduation & Expansion",
      institution: AUTHORITATIVE_PROFILE.education.institution,
      detail:
        "Completion of BCA degree; full-time visual communication, digital marketing, and motion direction.",
      badge: "Target Milestone",
    },
  ];

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
    <div ref={containerRef} className="relative bg-bg-base overflow-visible">
      {/* ========================================================================= */}
      {/* CHAPTER 01: INTRODUCTION */}
      {/* ========================================================================= */}
      <section
        id="ch-01"
        ref={ch01Ref}
        className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-20 overflow-visible"
      >
        {/* Background Architectural Orbit Rings */}
        <div
          ref={orbitRingsRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden will-change-transform"
        >
          <div className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-champagne-line/40 opacity-20" />
          <div className="w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full border border-champagne-line/30 opacity-15" />
          <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border border-champagne-line/20 opacity-10" />
          <div className="absolute w-full max-w-4xl h-96 subtle-glow rounded-full blur-3xl opacity-30 pointer-events-none" />
        </div>

        {/* Floating Project Fragments (Burst outward from center on load) */}
        <div
          ref={fragmentsRef}
          className="absolute inset-0 pointer-events-none z-10 max-w-7xl mx-auto hidden md:block"
        >
          {/* Fragment 1: Trevoc SVS Grid snippet (Top Right) */}
          <div className="absolute top-[18%] right-[8%] w-48 lg:w-56 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform rotate-3 will-change-transform">
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
          <div className="absolute bottom-[20%] left-[8%] w-40 lg:w-48 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform -rotate-4 will-change-transform">
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
          <div className="absolute top-[22%] left-[10%] w-36 lg:w-44 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform -rotate-6 will-change-transform">
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
          <div className="absolute bottom-[22%] right-[10%] w-52 lg:w-60 p-2 bg-bg-card/90 border border-champagne-line/40 rounded shadow-2xl backdrop-blur-sm transform rotate-2 will-change-transform">
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

          {/* The Traveling Headline Container with 3D Flip */}
          <div className="my-2 relative flex justify-center">
            <h1
              ref={heroNameRef}
              id="hero-name"
              className="inline-block will-change-transform [perspective:1200px]"
            >
              {/* Inner wrapper for Page-Load Center-Outward Expansion */}
              <div
                ref={introExpandRef}
                className="relative will-change-transform inline-block"
              >
                <span
                  ref={flipperRef}
                  className="relative block [transform-style:preserve-3d]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front Face: KASHISH */}
                  <span
                    className="block font-serif font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-ink-primary leading-none uppercase select-none drop-shadow-sm [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {AUTHORITATIVE_PROFILE.name}
                  </span>

                  {/* Back Face: ME (Revealed on 3D Flip at About) */}
                  <span
                    className="absolute top-0 left-0 block font-serif font-normal text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight text-champagne leading-none uppercase select-none drop-shadow-[0_0_24px_rgba(198,168,125,0.35)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateX(180deg)",
                    }}
                  >
                    ME
                  </span>
                </span>
              </div>
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
      {/* CHAPTER 02: ABOUT ME (DOCK POINT FOR TRAVELING FLIP TEXT) */}
      {/* ========================================================================= */}
      <section
        id="ch-02"
        ref={ch02Ref}
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

          {/* Destination Heading: ABOUT + Docking Target Slot for ME */}
          <h2
            id="about-heading"
            className="font-serif text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-ink-primary uppercase tracking-tight mb-8 flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 min-h-[1.2em]"
          >
            <span ref={aboutWordRef} className="inline-block opacity-0">
              ABOUT
            </span>
            {/* Target placeholder slot where hero text physically docks as ME */}
            <span
              ref={aboutTargetRef}
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

      {/* ========================================================================= */}
      {/* CHAPTER 03: JOURNEY & TIMELINE */}
      {/* ========================================================================= */}
      <section
        id="ch-03"
        ref={ch03Ref}
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
            CONTINUOUS <span className="text-champagne font-normal">PROGRESSION</span>
          </h2>

          {/* Timeline Structure */}
          <div className="relative pl-8 md:pl-16">
            {/* Animated Connecting Vertical Line */}
            <div
              ref={timelineLineRef}
              className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-champagne via-champagne/60 to-champagne/10 origin-top"
            />

            <div ref={milestoneNodesRef} className="space-y-16">
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

                    {/* Company Line with the Native-Crisp Traveling PROPACITY element for 2024 */}
                    {item.isHighlight ? (
                      <div className="relative overflow-visible my-3">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span
                            ref={journeyPropacityRef}
                            className="font-serif uppercase tracking-tight text-champagne font-normal text-2xl sm:text-4xl md:text-6xl lg:text-7xl leading-none inline-block will-change-transform select-none"
                            style={{ transformOrigin: "top left" }}
                          >
                            PROPACITY
                          </span>
                          <span className="text-xs sm:text-sm font-sans text-champagne/70 self-center">
                            Proptech Pvt. Ltd.
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm font-sans text-champagne/80 mb-3 font-medium">
                        {item.institution}
                      </p>
                    )}

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

      {/* ========================================================================= */}
      {/* CHAPTER 04: WORK EXPERIENCE (WORK AT PROPACITY) */}
      {/* ========================================================================= */}
      <section
        id="ch-04"
        ref={ch04Ref}
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

          {/* Destination Heading: WORK AT + Docking PROPACITY Slot */}
          <h2
            id="propacity-heading"
            className="font-serif text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-ink-primary uppercase tracking-tight mb-4 flex flex-wrap items-baseline gap-x-3 sm:gap-x-4 min-h-[1.2em]"
          >
            <span ref={workAtWordRef} className="inline-block opacity-0">
              WORK AT
            </span>
            {/* Target placeholder slot where Journey Propacity text physically docks */}
            <span
              ref={propacityTargetRef}
              className="inline-block opacity-0 pointer-events-none select-none text-champagne font-normal"
              aria-hidden="true"
            >
              PROPACITY
            </span>
          </h2>

          <div
            ref={propacityMetaRef}
            className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-widest text-ink-muted mt-6 mb-12 pb-6 border-b border-white/[0.08]"
          >
            <span className="text-champagne">{AUTHORITATIVE_PROFILE.experience.role}</span>
            <span>·</span>
            <span>{AUTHORITATIVE_PROFILE.experience.dates}</span>
            <span>·</span>
            <span>{AUTHORITATIVE_PROFILE.experience.duration}</span>
            <span>·</span>
            <span>14+ Real Estate Brands</span>
          </div>

          {/* Locked 3-Paragraph Copy Block (Section 6) */}
          <div
            ref={propacityContentRef}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
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

        {/* Architectural Exit Connector Leading to Chapter 05 Work */}
        <div className="mt-20 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-[10px] font-mono uppercase tracking-widest text-champagne/60 mb-2">
            Selected Work Archive
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-champagne/40 to-transparent" />
        </div>
      </section>
    </div>
  );
}
