"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/portfolioData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageLightboxModal, { LightboxData } from "@/components/ImageLightboxModal";

export default function Chapter05Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate project cards reveal on scroll
      const cards = gsap.utils.toArray<HTMLElement>(".work-reveal-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            scale: 0.88,
            y: 50,
            opacity: 0.6,
          },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: 0.8,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const kreeva = CASE_STUDIES["kreeva"];
  const trevoc = CASE_STUDIES["trevoc"];
  const indus = CASE_STUDIES["indus-valley"];
  const elevate = CASE_STUDIES["elevate-vanya"];
  const soul = CASE_STUDIES["soul"];

  return (
    <section id="ch-05" ref={containerRef} className="relative bg-bg-base py-32">
      {/* Lightbox Modal */}
      <ImageLightboxModal data={lightboxData} onClose={() => setLightboxData(null)} />

      {/* Chapter 05 Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            05 / 09 · Selected Work Archive
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary uppercase tracking-tight">
          CREATIVE <span className="text-champagne font-normal">CHALLENGES</span>
        </h2>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-ink-secondary max-w-2xl font-light">
            Work classified by the nature of the creative problem: bespoke luxury narratives,
            ultra-luxury residential positioning, and multi-format campaign engines.
          </p>
          <span className="text-xs font-mono text-champagne/80 border border-champagne-line/40 px-3 py-1.5 rounded-full self-start sm:self-auto shrink-0">
            Click any creative to inspect full resolution ⤢
          </span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-CHAPTER 01: LUXURY & BESPOKE (KREEVA) */}
      {/* ========================================================================= */}
      <div className="border-t border-white/[0.08] pt-20 pb-32 bg-gradient-to-b from-bg-panel/40 via-bg-base to-bg-base">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Sub-chapter Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-kreeva-crimson px-2.5 py-0.5 rounded border border-kreeva-crimson/50 bg-kreeva-dark/30 uppercase tracking-widest">
                  Sub-Chapter 01
                </span>
                <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                  Tactile & Bespoke Narrative
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-primary uppercase tracking-tight">
                LUXURY & <span className="text-kreeva-crimson">BESPOKE</span>
              </h3>
            </div>
            <Link
              href="/work/kreeva"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-white border border-champagne-line/50 hover:border-champagne px-4 py-2 rounded transition-all font-mono self-start md:self-auto"
            >
              <span>View Kreeva Full Case Study</span>
              <span>→</span>
            </Link>
          </div>

          {/* Locked Challenge Copy */}
          <div className="p-6 md:p-8 rounded-lg bg-bg-panel/70 border border-white/[0.08] mb-12 backdrop-blur-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne/90 block mb-3">
              Design Challenge & Creative Intent
            </span>
            <p className="text-base sm:text-lg text-ink-primary/95 leading-relaxed font-sans font-light">
              {kreeva.challengeParagraph}
            </p>
          </div>

          {/* Kreeva Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Left: Swaranaya EDM by Kashish */}
            <div
              onClick={() =>
                setLightboxData({
                  src: kreeva.supportingImages[0].webp,
                  alt: kreeva.supportingImages[0].alt,
                  title: kreeva.supportingImages[0].title,
                  brand: "Kreeva",
                  format: kreeva.supportingImages[0].format,
                  authorship: kreeva.supportingImages[0].authorship,
                })
              }
              className="md:col-span-5 work-reveal-card group cursor-zoom-in"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/10 bg-bg-card shadow-2xl">
                <Image
                  src={kreeva.supportingImages[0].webp}
                  alt={kreeva.supportingImages[0].alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-champagne border border-champagne-line/60">
                  Full Size ⤢
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                  {kreeva.supportingImages[0].title}
                </p>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-champagne-line bg-bg-panel text-champagne">
                  {kreeva.supportingImages[0].authorship}
                </span>
              </div>
            </div>

            {/* Right: Stationery Envelopes & Cards */}
            <div className="md:col-span-7 space-y-8">
              {/* Foil Envelope */}
              <div
                onClick={() =>
                  setLightboxData({
                    src: kreeva.supportingImages[1].webp,
                    alt: kreeva.supportingImages[1].alt,
                    title: kreeva.supportingImages[1].title,
                    brand: "Kreeva",
                    format: kreeva.supportingImages[1].format,
                    authorship: kreeva.supportingImages[1].authorship,
                  })
                }
                className="work-reveal-card group cursor-zoom-in"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 bg-bg-card shadow-2xl">
                  <Image
                    src={kreeva.supportingImages[1].webp}
                    alt={kreeva.supportingImages[1].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-mono text-champagne border border-champagne-line/60">
                    Full Size ⤢
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                    {kreeva.supportingImages[1].title}
                  </p>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-champagne-line bg-bg-panel text-champagne">
                    {kreeva.supportingImages[1].authorship}
                  </span>
                </div>
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() =>
                    setLightboxData({
                      src: kreeva.supportingImages[2].webp,
                      alt: kreeva.supportingImages[2].alt,
                      title: kreeva.supportingImages[2].title,
                      brand: "Kreeva",
                      format: kreeva.supportingImages[2].format,
                    })
                  }
                  className="work-reveal-card group cursor-zoom-in"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                    <Image
                      src={kreeva.supportingImages[2].webp}
                      alt={kreeva.supportingImages[2].alt}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne">
                      ⤢
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] font-mono text-ink-secondary group-hover:text-champagne transition-colors">
                    {kreeva.supportingImages[2].title}
                  </p>
                </div>

                <div
                  onClick={() =>
                    setLightboxData({
                      src: kreeva.supportingImages[3].webp,
                      alt: kreeva.supportingImages[3].alt,
                      title: kreeva.supportingImages[3].title,
                      brand: "Kreeva",
                      format: kreeva.supportingImages[3].format,
                    })
                  }
                  className="work-reveal-card group cursor-zoom-in"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                    <Image
                      src={kreeva.supportingImages[3].webp}
                      alt={kreeva.supportingImages[3].alt}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne">
                      ⤢
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] font-mono text-ink-secondary group-hover:text-champagne transition-colors">
                    {kreeva.supportingImages[3].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-CHAPTER 02: ULTRA-LUXURY REAL ESTATE (TREVOC) */}
      {/* ========================================================================= */}
      <div className="border-t border-white/[0.08] pt-24 pb-32 bg-bg-panel/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Sub-chapter Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-champagne px-2.5 py-0.5 rounded border border-champagne-line/60 bg-champagne-muted uppercase tracking-widest">
                  Sub-Chapter 02
                </span>
                <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                  Gurugram Ultra-Luxury · OTT Campaign
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-primary uppercase tracking-tight">
                ULTRA-LUXURY <span className="text-champagne font-normal">REAL ESTATE</span>
              </h3>
            </div>
            <Link
              href="/work/trevoc"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-white border border-champagne-line/50 hover:border-champagne px-4 py-2 rounded transition-all font-mono self-start md:self-auto"
            >
              <span>View Trevoc Full Case Study</span>
              <span>→</span>
            </Link>
          </div>

          {/* Locked Challenge Copy */}
          <div className="p-6 md:p-8 rounded-lg bg-bg-panel/70 border border-white/[0.08] mb-12 backdrop-blur-sm">
            <span className="font-mono text-xs uppercase tracking-widest text-champagne block mb-3">
              Design Challenge & Creative Intent
            </span>
            <p className="text-base sm:text-lg text-ink-primary/95 leading-relaxed font-sans font-light">
              {trevoc.challengeParagraph}
            </p>
          </div>

          {/* Trevoc Hero Grid: Art of Stillness (AST-2293) */}
          <div
            onClick={() =>
              setLightboxData({
                src: trevoc.heroImage.webp,
                alt: trevoc.heroImage.alt,
                title: "Trevoc Sector-56 · Panoramic SVS Grid 1: 'The Art of Stillness' (8191×3413)",
                brand: "Trevoc",
                format: "8K Panoramic SVS Grid",
              })
            }
            className="work-reveal-card group mb-12 cursor-zoom-in"
          >
            <div className="relative aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden rounded-lg border border-champagne-line/40 bg-bg-card shadow-2xl">
              <Image
                src={trevoc.heroImage.webp}
                alt={trevoc.heroImage.alt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-champagne border border-champagne-line/60">
                View Full Panorama (8K) ⤢
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                Trevoc Sector-56 · Panoramic SVS Grid 1: &apos;The Art of Stillness&apos; (8191×3413)
              </p>
              <span className="text-[10px] font-mono text-champagne">
                FEATURE Asset · Score 5/5
              </span>
            </div>
          </div>

          {/* OTT Teasers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[0, 1, 2].map((idx) => (
              <div
                key={idx}
                onClick={() =>
                  setLightboxData({
                    src: trevoc.supportingImages[idx].webp,
                    alt: trevoc.supportingImages[idx].alt,
                    title: trevoc.supportingImages[idx].title,
                    brand: "Trevoc",
                    format: trevoc.supportingImages[idx].format,
                  })
                }
                className="work-reveal-card group cursor-zoom-in"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                  <Image
                    src={trevoc.supportingImages[idx].webp}
                    alt={trevoc.supportingImages[idx].alt}
                    fill
                    sizes="400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne">
                    ⤢
                  </div>
                </div>
                <p className="mt-2 text-[11px] font-mono text-ink-primary group-hover:text-champagne transition-colors">
                  {trevoc.supportingImages[idx].title}
                </p>
              </div>
            ))}
          </div>

          {/* RESTRICTED CELEBRITY CAMPAIGN — LEGAL COMPLIANCE */}
          <div
            onClick={() =>
              setLightboxData({
                src: trevoc.supportingImages[3].webp,
                alt: "Trevoc Celebrity Campaign (Private — permission pending)",
                title: trevoc.supportingImages[3].title,
                brand: "Trevoc",
                format: trevoc.supportingImages[3].format,
                isRestricted: true,
              })
            }
            className="work-reveal-card p-6 rounded-lg border border-white/10 bg-bg-card/90 relative overflow-hidden cursor-zoom-in"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  Private — Permission Pending
                </span>
              </div>
              <span className="text-[11px] font-mono text-ink-muted">
                Publicity Clearance Protocol (Click to inspect)
              </span>
            </div>

            <div className="relative aspect-[5/1] overflow-hidden rounded border border-white/5 bg-black">
              {/* Desaturated / Blurred Restricted Asset */}
              <Image
                src={trevoc.supportingImages[3].webp}
                alt="Trevoc Celebrity Campaign (Private — permission pending)"
                fill
                sizes="100vw"
                className="object-cover restricted-asset opacity-40"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                <span className="text-xs font-mono uppercase tracking-widest text-ink-primary/90 px-4 py-1.5 rounded bg-bg-base/90 border border-white/20">
                  CONFIDENTIAL CAMPAIGN · ACCESS RESTRICTED
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs text-ink-muted leading-relaxed font-sans">
              Commercial celebrity brand ambassador campaign (Saif Ali Khan & Kareena Kapoor Khan).
              Displayed in preview mode pending final written clearance from the client.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUB-CHAPTER 03: REAL ESTATE CAMPAIGNS (INDUS / ELEVATE / SOUL) */}
      {/* ========================================================================= */}
      <div className="border-t border-white/[0.08] pt-24 pb-16 bg-gradient-to-b from-bg-base via-bg-panel/20 to-bg-base">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Sub-chapter Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-champagne px-2.5 py-0.5 rounded border border-champagne-line/60 bg-champagne-muted uppercase tracking-widest">
                  Sub-Chapter 03
                </span>
                <span className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                  High-Velocity Campaign Engines
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-primary uppercase tracking-tight">
                REAL ESTATE <span className="text-champagne font-normal">CAMPAIGNS</span>
              </h3>
            </div>
          </div>

          {/* ================== 1. INDUS VALLEY ================== */}
          <div className="mb-24 pb-20 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <h4 className="font-serif text-2xl sm:text-3xl text-ink-primary">
                Indus Valley · Himalayan Hill Cottages & Dholera SIR
              </h4>
              <Link
                href="/work/indus-valley"
                className="text-xs font-mono text-champagne hover:underline"
              >
                Case Study →
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-bg-panel/60 border border-white/[0.08] mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne block mb-2">
                Design Challenge
              </span>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                {indus.challengeParagraph}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div
                onClick={() =>
                  setLightboxData({
                    src: indus.heroImage.webp,
                    alt: indus.heroImage.alt,
                    title: "Indus Valley Mountain Cottages Multi-Tile Panoramic Grid",
                    brand: "Indus Valley",
                    format: "Multi-Tile Panoramic Grid",
                  })
                }
                className="md:col-span-7 work-reveal-card group cursor-zoom-in"
              >
                <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                  <Image
                    src={indus.heroImage.webp}
                    alt={indus.heroImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2.5 py-1 rounded text-xs font-mono text-champagne">
                    Full Size ⤢
                  </div>
                </div>
                <p className="mt-2 text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                  Indus Valley Mountain Cottages Multi-Tile Panoramic Grid
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <div
                  onClick={() =>
                    setLightboxData({
                      src: indus.supportingImages[0].webp,
                      alt: indus.supportingImages[0].alt,
                      title: indus.supportingImages[0].title,
                      brand: "Indus Valley",
                      format: indus.supportingImages[0].format,
                    })
                  }
                  className="work-reveal-card group cursor-zoom-in"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                    <Image
                      src={indus.supportingImages[0].webp}
                      alt={indus.supportingImages[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne">
                      ⤢
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-mono text-ink-secondary group-hover:text-champagne transition-colors">
                    {indus.supportingImages[0].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== 2. ELEVATE VANYA ================== */}
          <div className="mb-24 pb-20 border-b border-white/[0.06]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <h4 className="font-serif text-2xl sm:text-3xl text-ink-primary">
                Elevate Vanya · Omnichannel Launch & Large-Format Print
              </h4>
              <Link
                href="/work/elevate-vanya"
                className="text-xs font-mono text-champagne hover:underline"
              >
                Case Study →
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-bg-panel/60 border border-white/[0.08] mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne block mb-2">
                Design Challenge
              </span>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                {elevate.challengeParagraph}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Standee S-1 (By Kashish) */}
              <div
                onClick={() =>
                  setLightboxData({
                    src: elevate.heroImage.webp,
                    alt: elevate.heroImage.alt,
                    title: "2:1 Roll-Up Exhibition Standee S-1",
                    brand: "Elevate Vanya",
                    format: "Large-Format Print",
                    authorship: "Designed by Kashish",
                  })
                }
                className="md:col-span-4 work-reveal-card group cursor-zoom-in"
              >
                <div className="relative aspect-[1/2] max-h-[500px] overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                  <Image
                    src={elevate.heroImage.webp}
                    alt={elevate.heroImage.alt}
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2.5 py-1 rounded text-xs font-mono text-champagne">
                    Full Size ⤢
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <p className="text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                    2:1 Roll-Up Standee S-1
                  </p>
                  <span className="text-[10px] font-mono text-champagne border border-champagne-line px-1.5 py-0.5 rounded">
                    Designed by Kashish
                  </span>
                </div>
              </div>

              {/* Standee S-2 & Grid */}
              <div className="md:col-span-8 space-y-6">
                <div
                  onClick={() =>
                    setLightboxData({
                      src: elevate.supportingImages[0].webp,
                      alt: elevate.supportingImages[0].alt,
                      title: elevate.supportingImages[0].title,
                      brand: "Elevate Vanya",
                      format: elevate.supportingImages[0].format,
                      authorship: elevate.supportingImages[0].authorship,
                    })
                  }
                  className="work-reveal-card group cursor-zoom-in"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                    <Image
                      src={elevate.supportingImages[0].webp}
                      alt={elevate.supportingImages[0].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2.5 py-1 rounded text-xs font-mono text-champagne">
                      Full Size ⤢
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                      {elevate.supportingImages[0].title}
                    </p>
                    <span className="text-[10px] font-mono text-champagne border border-champagne-line px-1.5 py-0.5 rounded">
                      {elevate.supportingImages[0].authorship}
                    </span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setLightboxData({
                      src: elevate.supportingImages[1].webp,
                      alt: elevate.supportingImages[1].alt,
                      title: elevate.supportingImages[1].title,
                      brand: "Elevate Vanya",
                      format: elevate.supportingImages[1].format,
                    })
                  }
                  className="work-reveal-card group cursor-zoom-in"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                    <Image
                      src={elevate.supportingImages[1].webp}
                      alt={elevate.supportingImages[1].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2.5 py-1 rounded text-xs font-mono text-champagne">
                      Full Size ⤢
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-mono text-ink-secondary group-hover:text-champagne transition-colors">
                    {elevate.supportingImages[1].title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================== 3. SOUL / VANKRITI ================== */}
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
              <h4 className="font-serif text-2xl sm:text-3xl text-ink-primary">
                Soul / Vankriti · 12K Forest Panorama & B2B Channel Partner
              </h4>
              <Link
                href="/work/soul"
                className="text-xs font-mono text-champagne hover:underline"
              >
                Case Study →
              </Link>
            </div>

            <div className="p-6 rounded-lg bg-bg-panel/60 border border-white/[0.08] mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-champagne block mb-2">
                Design Challenge (Synthesized from CSV AST-1622)
              </span>
              <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-light">
                {soul.challengeParagraph}
              </p>
            </div>

            {/* 12K Panoramic Grid (AST-1622) */}
            <div
              onClick={() =>
                setLightboxData({
                  src: soul.heroImage.webp,
                  alt: soul.heroImage.alt,
                  title: "Soul / Vankriti 12K Panoramic Biophilic Grid (12,960×5,400 Master)",
                  brand: "Soul / Vankriti",
                  format: "12K Panoramic Grid",
                })
              }
              className="work-reveal-card group mb-8 cursor-zoom-in"
            >
              <div className="relative aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden rounded-lg border border-champagne-line/40 bg-bg-card">
                <Image
                  src={soul.heroImage.webp}
                  alt={soul.heroImage.alt}
                  fill
                  sizes="100vw"
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm px-3 py-1 rounded text-xs font-mono text-champagne border border-champagne-line/60">
                  Inspect 12K Panorama ⤢
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-xs font-mono text-ink-primary group-hover:text-champagne transition-colors">
                  Soul / Vankriti 12K Panoramic Biophilic Grid (12,960×5,400 Master)
                </p>
                <span className="text-[10px] font-mono text-champagne">
                  AST-1622 · FEATURE 5/5
                </span>
              </div>
            </div>

            {/* Supporting Soul tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[0, 1, 3].map((idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    setLightboxData({
                      src: soul.supportingImages[idx].webp,
                      alt: soul.supportingImages[idx].alt,
                      title: soul.supportingImages[idx].title,
                      brand: "Soul / Vankriti",
                      format: soul.supportingImages[idx].format,
                    })
                  }
                  className="work-reveal-card group cursor-zoom-in"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-white/10 bg-bg-card">
                    <Image
                      src={soul.supportingImages[idx].webp}
                      alt={soul.supportingImages[idx].alt}
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne">
                      ⤢
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-mono text-ink-secondary group-hover:text-champagne transition-colors">
                    {soul.supportingImages[idx].title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
