import React from "react";
import { AUTHORITATIVE_PROFILE } from "@/lib/portfolioData";

export default function Chapter08Tools() {
  return (
    <section
      id="ch-08"
      className="relative min-h-[75vh] flex flex-col justify-center px-6 md:px-16 lg:px-24 bg-bg-base py-24 border-b border-white/[0.05]"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Chapter Index */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-champagne uppercase tracking-widest">
            08 / 09 · Technical Capabilities
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-champagne-line/40" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ink-primary uppercase tracking-tight mb-4">
          SOFTWARE & <span className="text-champagne font-normal">TOOLSET</span>
        </h2>
        <p className="text-sm sm:text-base text-ink-secondary mb-12 font-light max-w-2xl">
          Core creative suite utilized for vector art, digital compositing, large-format printing,
          and motion graphics across agency client briefs.
        </p>

        {/* Tools Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {AUTHORITATIVE_PROFILE.tools.map((tool, i) => (
            <div
              key={i}
              className="p-6 rounded-lg bg-bg-panel/70 border border-white/[0.08] hover:border-champagne-line/60 transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-champagne">{tool.level}</span>
                <span className="w-2 h-2 rounded-full bg-champagne/40 group-hover:bg-champagne transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-ink-primary mb-1">{tool.name}</h3>
              <p className="text-xs text-ink-muted font-sans font-light">{tool.category}</p>
            </div>
          ))}
        </div>

        {/* Flagged Tooling Note (CorelDRAW & Figma) */}
        <div className="p-5 rounded-lg border border-champagne-line/30 bg-bg-card text-xs font-sans text-ink-secondary flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono uppercase tracking-wider text-champagne block text-[11px]">
              Specialized Tooling & Verification Flag
            </span>
            <p className="leading-relaxed font-light">
              {AUTHORITATIVE_PROFILE.additionalToolsFlag}
            </p>
          </div>
          <span className="shrink-0 px-3 py-1 rounded border border-white/10 bg-bg-panel text-[11px] font-mono text-ink-muted">
            Status: Documented
          </span>
        </div>
      </div>
    </section>
  );
}
