"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/lib/portfolioData";
import ImageLightboxModal, { LightboxData } from "@/components/ImageLightboxModal";

interface WorkCaseStudyViewProps {
  project: CaseStudy;
  nextSlug: string;
  nextProject: CaseStudy;
}

export default function WorkCaseStudyView({
  project,
  nextSlug,
  nextProject,
}: WorkCaseStudyViewProps) {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  return (
    <div className="min-h-screen bg-bg-base text-ink-primary selection:bg-champagne selection:text-bg-base">
      {/* Lightbox Modal */}
      <ImageLightboxModal data={lightboxData} onClose={() => setLightboxData(null)} />

      {/* Top Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-bg-base/80 border-b border-white/[0.06]">
        <Link
          href="/"
          className="flex items-center gap-3 text-ink-primary hover:text-champagne transition-colors"
        >
          <span className="font-serif text-lg">Kashish</span>
          <span className="text-[11px] font-mono text-ink-muted uppercase tracking-widest border border-white/10 px-2 py-0.5 rounded-full">
            Back to Timeline
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-champagne uppercase tracking-widest px-3 py-1 rounded-full border border-champagne-line/40 bg-bg-panel">
            {project.categoryNumber} · {project.categoryTitle}
          </span>
          <Link
            href="/"
            className="text-xs uppercase tracking-widest text-ink-secondary hover:text-white px-3 py-1 border border-white/10 rounded font-mono"
          >
            All Chapters
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-16 lg:px-24 border-b border-white/[0.06] overflow-hidden">
        {/* Background Orbit Ring */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-champagne-line/20 pointer-events-none opacity-25" />

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-champagne">
              Case Study Deep Dive
            </span>
            <span>·</span>
            <span className="text-xs font-mono uppercase tracking-widest text-ink-muted">
              {project.year}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-ink-primary uppercase tracking-tight mb-4">
            {project.brand}
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-champagne/90 mb-8 max-w-3xl font-normal">
            {project.tagline}
          </p>

          <div className="flex flex-wrap gap-4 text-xs font-mono text-ink-secondary border-t border-white/10 pt-6">
            <div>
              <span className="text-ink-muted uppercase block">Discipline & Role:</span>
              <span className="text-ink-primary">{project.role}</span>
            </div>
            <div className="md:ml-auto flex items-center gap-6">
              <div>
                <span className="text-ink-muted uppercase block">Deliverables:</span>
                <span className="text-champagne font-bold">{project.stats.deliverables}</span>
              </div>
              <div>
                <span className="text-ink-muted uppercase block">Campaigns:</span>
                <span className="text-champagne font-bold">{project.stats.campaigns}</span>
              </div>
              <div>
                <span className="text-ink-muted uppercase block">Timeline:</span>
                <span className="text-ink-primary">{project.stats.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Presentation */}
      <section className="px-6 md:px-16 lg:px-24 py-12">
        <div className="max-w-6xl mx-auto">
          <div
            onClick={() =>
              setLightboxData({
                src: project.heroImage.webp,
                alt: project.heroImage.alt,
                title: `${project.brand} — Master Showcase`,
                brand: project.brand,
                format: project.categoryTitle,
              })
            }
            className="relative aspect-[21/9] sm:aspect-[2.4/1] overflow-hidden rounded-lg border border-champagne-line/40 bg-bg-card shadow-2xl cursor-zoom-in group"
          >
            <Image
              src={project.heroImage.webp}
              alt={project.heroImage.alt}
              fill
              sizes="100vw"
              priority
              className="object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm px-3 py-1.5 rounded text-xs font-mono text-champagne border border-champagne-line/60 opacity-0 group-hover:opacity-100 transition-opacity">
              View Full Size ⤢
            </div>
          </div>
          <p className="mt-3 text-xs font-mono text-ink-secondary flex items-center justify-between">
            <span>{project.heroImage.alt}</span>
            <span className="text-champagne">Click to inspect full resolution ⤢</span>
          </p>
        </div>
      </section>

      {/* Context Section (Locked Two-Block Copy Pattern + Photo with Ring Accent) */}
      <section className="px-6 md:px-16 lg:px-24 py-20 bg-bg-panel/40 border-t border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline Top + Two Stacked Labeled Text Blocks */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-2">
                Strategic Foundation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary uppercase tracking-tight">
                CONTEXT & OBJECTIVE
              </h2>
            </div>

            {/* Block 1: Project Goal */}
            <div className="p-6 rounded-lg bg-bg-card border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-wider text-champagne block mb-2">
                Project Goal
              </span>
              <p className="text-sm sm:text-base text-ink-primary/90 leading-relaxed font-sans font-light">
                {project.projectGoal}
              </p>
            </div>

            {/* Block 2: Design Decision */}
            <div className="p-6 rounded-lg bg-bg-card border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-wider text-champagne block mb-2">
                Design Decision
              </span>
              <p className="text-sm sm:text-base text-ink-primary/90 leading-relaxed font-sans font-light">
                {project.designDecision}
              </p>
            </div>
          </div>

          {/* Right Column: Supporting Photo with Orbit Ring Accent */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Real Estate Site Plan Radius Ring */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-champagne-line/40 pointer-events-none opacity-40 -z-0" />
            <div className="absolute w-[240px] h-[240px] rounded-full border border-champagne-line/20 pointer-events-none opacity-30 -z-0" />

            <div
              onClick={() =>
                setLightboxData({
                  src: project.supportingImages[0]?.webp || project.heroImage.webp,
                  alt: project.supportingImages[0]?.alt || "Context supporting piece",
                  title: project.supportingImages[0]?.title,
                  brand: project.brand,
                  format: project.supportingImages[0]?.format,
                })
              }
              className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-lg overflow-hidden border border-white/10 bg-bg-card shadow-2xl cursor-zoom-in group"
            >
              <Image
                src={project.supportingImages[0]?.webp || project.heroImage.webp}
                alt={project.supportingImages[0]?.alt || "Context supporting piece"}
                fill
                sizes="400px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 bg-black/75 px-2 py-1 rounded text-[10px] font-mono text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                ⤢
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section (Locked Paragraph from Brief) */}
      <section className="px-6 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto p-8 rounded-lg bg-bg-card border border-champagne-line/30">
          <span className="font-mono text-xs uppercase tracking-widest text-champagne block mb-3">
            Authoritative Challenge Statement
          </span>
          <p className="text-base sm:text-lg text-ink-primary leading-relaxed font-sans font-light">
            {project.challengeParagraph}
          </p>
        </div>
      </section>

      {/* Deliverable Mosaic Grid */}
      <section className="px-6 md:px-16 lg:px-24 py-20 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-1">
                Execution Deliverables
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink-primary uppercase tracking-tight">
                DELIVERABLE ARTIFACTS
              </h2>
            </div>
            <span className="text-xs font-mono text-ink-muted">
              Click any item to view in full resolution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.supportingImages.map((img) => (
              <div
                key={img.id}
                onClick={() =>
                  setLightboxData({
                    src: img.webp,
                    alt: img.alt,
                    title: img.title,
                    brand: project.brand,
                    format: img.format,
                    authorship: img.authorship,
                    isRestricted: img.isRestricted,
                  })
                }
                className={`group p-4 rounded-lg bg-bg-panel/70 border border-white/[0.08] hover:border-champagne-line/60 transition-all cursor-zoom-in ${
                  img.isRestricted ? "border-amber-500/30" : ""
                }`}
              >
                <div className="relative aspect-square overflow-hidden rounded mb-3 bg-bg-card border border-white/5">
                  <Image
                    src={img.webp}
                    alt={img.alt}
                    fill
                    sizes="400px"
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      img.isRestricted ? "restricted-asset opacity-35" : ""
                    }`}
                  />
                  <div className="absolute top-2 right-2 bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                    ⤢
                  </div>
                  {img.isRestricted && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/40 text-center">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-950/80 border border-amber-500/50 text-amber-300 mb-1">
                        Private — Permission Pending
                      </span>
                      <span className="text-[10px] text-ink-muted">Clearance Protocol</span>
                    </div>
                  )}
                </div>

                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xs font-serif text-ink-primary mb-1 group-hover:text-champagne transition-colors">
                      {img.title}
                    </h3>
                    <span className="text-[10px] font-mono text-ink-muted uppercase tracking-wider block">
                      {img.format}
                    </span>
                  </div>
                  {img.authorship && (
                    <span className="text-[9px] font-mono text-champagne border border-champagne-line px-1.5 py-0.5 rounded shrink-0">
                      {img.authorship}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Next Project Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-24 bg-bg-panel border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-2">
              Next Case Study
            </span>
            <Link
              href={`/work/${nextSlug}`}
              className="font-serif text-2xl sm:text-4xl text-ink-primary hover:text-champagne transition-colors uppercase tracking-tight flex items-center gap-3"
            >
              <span>{nextProject.brand}</span>
              <span className="text-xl">→</span>
            </Link>
            <p className="text-xs font-mono text-ink-muted mt-1">{nextProject.tagline}</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs uppercase tracking-widest px-5 py-2.5 rounded border border-champagne-line text-champagne hover:bg-champagne hover:text-bg-base transition-all font-mono"
            >
              Return to All Chapters
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
