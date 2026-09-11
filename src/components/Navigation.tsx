"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AUTHORITATIVE_PROFILE, CASE_STUDIES } from "@/lib/portfolioData";

interface NavigationProps {
  currentChapter?: number;
  totalChapters?: number;
}

export default function Navigation({
  currentChapter = 1,
  totalChapters = 9,
}: NavigationProps) {
  const [activeChapter, setActiveChapter] = useState(currentChapter);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveChapter(currentChapter);
  }, [currentChapter]);

  const padNum = (num: number) => (num < 10 ? `0${num}` : `${num}`);

  const scrollToChapter = (chapterId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-5 md:px-12 backdrop-blur-md bg-bg-base/75 border-b border-white/[0.06] transition-all duration-300">
        {/* Brand Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-ink-primary hover:text-champagne transition-colors duration-200"
        >
          <span className="font-serif tracking-tight text-xl font-normal">
            {AUTHORITATIVE_PROFILE.name}
          </span>
          <span className="text-[11px] uppercase tracking-widest text-ink-muted border border-white/10 px-2 py-0.5 rounded-full font-sans">
            Archive 2024–26
          </span>
        </Link>

        {/* Center: Live Chapter Counter */}
        <div className="flex items-center gap-3 bg-bg-panel/80 border border-champagne-line px-4 py-1.5 rounded-full shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          <span className="font-mono text-xs text-champagne tracking-widest uppercase">
            CHAPTER {padNum(activeChapter)} / {padNum(totalChapters)}
          </span>
        </div>

        {/* Right: Quick Jump Drawer Trigger & Direct Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/work/trevoc"
            className="hidden md:inline-flex text-xs uppercase tracking-wider text-ink-secondary hover:text-champagne transition-colors font-sans"
          >
            Direct Case Studies
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest px-3 py-1.5 rounded border border-white/15 bg-bg-panel text-ink-primary hover:border-champagne hover:text-champagne transition-all"
            aria-label="Toggle Chapter Menu"
          >
            <span>{menuOpen ? "Close" : "Index"}</span>
            <span className="text-champagne text-xs">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </header>

      {/* Chapter Index Modal / Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-bg-base/95 backdrop-blur-lg flex flex-col justify-center px-6 md:px-24 py-16 animate-in fade-in duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <div className="max-w-4xl mx-auto w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <span className="text-xs font-mono uppercase tracking-widest text-champagne">
                Chapter Directory
              </span>
              <span className="text-xs text-ink-muted font-mono">
                Press any chapter to navigate
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                { id: "ch-01", num: "01", label: "Introduction" },
                { id: "ch-02", num: "02", label: "About Kashish" },
                { id: "ch-03", num: "03", label: "Journey & Education" },
                { id: "ch-04", num: "04", label: "Propacity Internship" },
                { id: "ch-05", num: "05", label: "Selected Work" },
                { id: "ch-06", num: "06", label: "Disciplines (6 Tracks)" },
                { id: "ch-07", num: "07", label: "Collaborators" },
                { id: "ch-08", num: "08", label: "Tools & Software" },
                { id: "ch-09", num: "09", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToChapter(item.id)}
                  className="flex items-center justify-between py-3 border-b border-white/[0.06] text-left group hover:border-champagne transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-champagne/70 group-hover:text-champagne">
                      {item.num}
                    </span>
                    <span className="font-serif text-lg md:text-xl text-ink-primary group-hover:text-champagne transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs text-ink-muted group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              ))}
            </div>

            {/* Direct Case Studies Links */}
            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
                Direct Recruiter Deep Dives
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.values(CASE_STUDIES).map((cs) => (
                  <Link
                    key={cs.slug}
                    href={`/work/${cs.slug}`}
                    className="text-xs px-3 py-1.5 rounded-full border border-champagne-line bg-bg-card hover:bg-champagne hover:text-bg-base transition-all font-sans"
                  >
                    {cs.brand} ({cs.categoryTitle})
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
