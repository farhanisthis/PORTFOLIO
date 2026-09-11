import React from "react";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";

export default function Chapter07People() {
  return (
    <section
      id="ch-07"
      className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg-panel/40 py-24 border-b border-white/[0.05]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Chapter Index */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            07 / 09 · Collaborators & Team
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-primary uppercase tracking-tight mb-4">
          PROFESSIONAL <span className="text-champagne font-normal">COLLABORATION</span>
        </h2>

        {/* Factual Statement (Zero Testimonial Fabrication) */}
        <p className="text-lg sm:text-xl font-serif text-ink-primary/90 max-w-3xl mb-12 italic">
          &ldquo;{AUTHORITATIVE_PROFILE.collaboratorsFactLine}&rdquo;
        </p>

        {/* Collaborators Directory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {AUTHORITATIVE_PROFILE.collaborators.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-bg-card border border-white/[0.08] hover:border-champagne-line/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-full border border-champagne-line/50 flex items-center justify-center text-xs font-mono text-champagne mb-4">
                0{i + 1}
              </div>
              <h3 className="font-serif text-lg text-ink-primary mb-1">{c.name}</h3>
              <p className="text-xs font-mono text-champagne mb-2">{c.role}</p>
              <p className="text-xs text-ink-muted font-sans">{c.company}</p>
            </div>
          ))}
        </div>

        {/* Editorial Footnote */}
        <div className="p-4 rounded border border-white/[0.06] bg-bg-base/60 text-xs font-mono text-ink-muted flex items-center gap-3">
          <span className="text-champagne font-bold">NOTE:</span>
          <span>
            Verified leadership and management colleagues during agency tenure. Formal testimonial
            quotes pending direct addition.
          </span>
        </div>
      </div>
    </section>
  );
}
