"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import CinematicSequence from "@/components/chapters/CinematicSequence";
import Chapter05Work from "@/components/chapters/Chapter05Work";
import Chapter06Disciplines from "@/components/chapters/Chapter06Disciplines";
import Chapter07People from "@/components/chapters/Chapter07People";
import Chapter08Tools from "@/components/chapters/Chapter08Tools";
import Chapter09Contact from "@/components/chapters/Chapter09Contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(1);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const chapters = [
      { id: "ch-01", num: 1 },
      { id: "ch-02", num: 2 },
      { id: "ch-03", num: 3 },
      { id: "ch-04", num: 4 },
      { id: "ch-05", num: 5 },
      { id: "ch-06", num: 6 },
      { id: "ch-07", num: 7 },
      { id: "ch-08", num: 8 },
      { id: "ch-09", num: 9 },
    ];

    const triggers: ScrollTrigger[] = [];

    chapters.forEach(({ id, num }) => {
      const el = document.getElementById(id);
      if (el) {
        const st = ScrollTrigger.create({
          trigger: el,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setCurrentChapter(num),
          onEnterBack: () => setCurrentChapter(num),
        });
        triggers.push(st);
      }
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-bg-base text-ink-primary selection:bg-champagne selection:text-bg-base">
      {/* Global Minimalist Navigation */}
      <Navigation currentChapter={currentChapter} totalChapters={9} />

      {/* Chapters 01 to 04 Continuous Cinematic Sequence */}
      <CinematicSequence />
      <Chapter05Work />
      <Chapter06Disciplines />
      <Chapter07People />
      <Chapter08Tools />
      <Chapter09Contact />
    </main>
  );
}
