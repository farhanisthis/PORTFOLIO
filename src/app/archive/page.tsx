"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AUTHORITATIVE_PROFILE, CASE_STUDIES } from "@/lib/portfolioData";
import ImageLightboxModal, { LightboxData } from "@/components/ImageLightboxModal";

interface ArchiveAsset {
  id: string;
  brand: string;
  category: string;
  title: string;
  format: string;
  image: string;
  badge?: string;
  isRestricted?: boolean;
}

const ARCHIVE_ASSETS: ArchiveAsset[] = [
  // Trevoc
  {
    id: "AST-2293",
    brand: "Trevoc",
    category: "Grid",
    title: "Panoramic SVS Grid-1: 'The Art of Stillness' (8K)",
    format: "Multi-Tile Panoramic Grid",
    image: "/work/trevoc/trevoc_hero_01.webp",
    badge: "FEATURE · 5/5",
  },
  {
    id: "AST-2104",
    brand: "Trevoc",
    category: "Social",
    title: "OTT Campaign Teaser: 'Brochures Are Retiring'",
    format: "Campaign Teaser",
    image: "/work/trevoc/trevoc_support_01.webp",
  },
  {
    id: "AST-2107",
    brand: "Trevoc",
    category: "Social",
    title: "OTT Campaign Teaser: 'Walkthroughs Are Retiring'",
    format: "Campaign Teaser",
    image: "/work/trevoc/trevoc_support_02.webp",
  },
  {
    id: "AST-2110",
    brand: "Trevoc",
    category: "Social",
    title: "OTT Campaign Teaser: 'Print Ads Are Retiring'",
    format: "Campaign Teaser",
    image: "/work/trevoc/trevoc_support_03.webp",
  },
  {
    id: "AST-2409",
    brand: "Trevoc",
    category: "Digital",
    title: "Celebrity Brand Ambassador LinkedIn Banner",
    format: "High-Stakes Digital Banner",
    image: "/work/trevoc/trevoc_celebrity_banner.webp",
    badge: "Private — Permission Pending",
    isRestricted: true,
  },
  {
    id: "AST-2415",
    brand: "Trevoc",
    category: "Corporate",
    title: "Internal Corporate Employee Portrait",
    format: "HR / Corporate",
    image: "/work/trevoc/trevoc_hr_01.webp",
    badge: "Private — Permission Pending",
    isRestricted: true,
  },

  // Kreeva
  {
    id: "AST-1010",
    brand: "Kreeva",
    category: "Social",
    title: "Friendship Day Crimson & Gold Narrative (Static-1)",
    format: "Editorial Social Story",
    image: "/work/kreeva/kreeva_hero_01.webp",
    badge: "FEATURE · 5/4",
  },
  {
    id: "AST-1012",
    brand: "Kreeva",
    category: "Social",
    title: "Friendship Day Philosophical Narrative (Static-3)",
    format: "Editorial Social Story",
    image: "/work/kreeva/kreeva_support_01.webp",
  },
  {
    id: "AST-1013",
    brand: "Kreeva",
    category: "Social",
    title: "Friendship Day Finale (Static-4)",
    format: "Editorial Social Story",
    image: "/work/kreeva/kreeva_support_02.webp",
  },
  {
    id: "AST-1040",
    brand: "Kreeva",
    category: "Print",
    title: "Corporate Stationery Foil Envelope Mockup",
    format: "Stationery / Collateral",
    image: "/work/kreeva/kreeva_envelope_01.webp",
    badge: "Designed by Kashish",
  },
  {
    id: "AST-1042",
    brand: "Kreeva",
    category: "Print",
    title: "Tactile Invitation Card (Front & Reverse)",
    format: "Stationery / Collateral",
    image: "/work/kreeva/kreeva_card_01.webp",
  },
  {
    id: "AST-1025",
    brand: "Kreeva",
    category: "EDM",
    title: "Swaranaya Static EDM Suite",
    format: "Direct Response EDM",
    image: "/work/kreeva/kreeva_swaranaya_01.webp",
    badge: "Designed by Kashish",
  },

  // Elevate Vanya
  {
    id: "AST-0209",
    brand: "Elevate Vanya",
    category: "Print",
    title: "2:1 Exhibition Roll-Up Standee S-1",
    format: "Large-Format Print",
    image: "/work/elevate-vanya/elevate-vanya_hero_01.webp",
    badge: "Designed by Kashish",
  },
  {
    id: "AST-0210",
    brand: "Elevate Vanya",
    category: "Print",
    title: "2:1 Exhibition Roll-Up Standee S-2",
    format: "Large-Format Print",
    image: "/work/elevate-vanya/elevate-vanya_support_01.webp",
    badge: "Designed by Kashish",
  },
  {
    id: "AST-0201",
    brand: "Elevate Vanya",
    category: "Print",
    title: "2:1 Exhibition Roll-Up Standee S-2 (Master)",
    format: "Large-Format Print",
    image: "/work/elevate-vanya/elevate-vanya_standee_02.webp",
    badge: "Designed by Kashish",
  },
  {
    id: "AST-0212",
    brand: "Elevate Vanya",
    category: "Grid",
    title: "Sunset Architectural & Greenery Grid",
    format: "Multi-Tile Social Grid",
    image: "/work/elevate-vanya/elevate-vanya_support_02.webp",
  },

  // Indus Valley
  {
    id: "AST-0720",
    brand: "Indus Valley",
    category: "Grid",
    title: "Himalayan Hill Cottages Panoramic Grid",
    format: "Multi-Tile Grid",
    image: "/work/indus-valley/indus-valley_hero_01.webp",
  },
  {
    id: "AST-0610",
    brand: "Indus Valley",
    category: "EDM",
    title: "Dholera SIR Infrastructure Intelligence EDM",
    format: "Direct Response EDM",
    image: "/work/indus-valley/indus-valley_support_01.webp",
  },
  {
    id: "AST-0612",
    brand: "Indus Valley",
    category: "Digital",
    title: "Transit & Route Infrastructure Infographic",
    format: "Market News Infographic",
    image: "/work/indus-valley/indus-valley_support_02.webp",
  },

  // Soul / Vankriti
  {
    id: "AST-1622",
    brand: "Soul",
    category: "Grid",
    title: "12K Panoramic Biophilic Grid (12,960×5,400)",
    format: "Multi-Tile Grid",
    image: "/work/soul/soul_hero_01.webp",
    badge: "FEATURE · 5/5",
  },
  {
    id: "AST-1630",
    brand: "Soul",
    category: "EDM",
    title: "August Nurture EDM 01 — Forest Escape",
    format: "Direct Response EDM",
    image: "/work/soul/soul_edm_01.webp",
  },
  {
    id: "AST-1645",
    brand: "Soul",
    category: "Print",
    title: "Channel Partner B2B Acquisition Creative",
    format: "B2B Marketing Collateral",
    image: "/work/soul/soul_cp_01.webp",
  },
  {
    id: "AST-1660",
    brand: "Soul",
    category: "Motion",
    title: "Botanical Canopy & Architecture Grid",
    format: "Multi-Tile Grid",
    image: "/work/soul/soul_grid_02.webp",
  },
];

const CATEGORIES = ["All", "Grid", "Social", "EDM", "Print", "Digital", "Motion", "Corporate"];

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const filteredAssets =
    selectedCategory === "All"
      ? ARCHIVE_ASSETS
      : ARCHIVE_ASSETS.filter((a) => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-bg-base text-ink-primary selection:bg-champagne selection:text-bg-base">
      {/* Lightbox Modal */}
      <ImageLightboxModal data={lightboxData} onClose={() => setLightboxData(null)} />
      {/* Header */}
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

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-champagne uppercase tracking-widest">
            2,421 Archive Deliverables
          </span>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-champagne block mb-2">
            Deliverable Index
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-ink-primary uppercase tracking-tight mb-4">
            ALL DELIVERABLES <span className="text-champagne font-normal">ARCHIVE</span>
          </h1>
          <p className="text-sm sm:text-base text-ink-secondary max-w-2xl font-light">
            Comprehensive directory of digital marketing, direct-response sequences, panoramic
            grids, large-format print, and motion assets from the agency archive.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-lg bg-bg-panel border border-white/[0.08] mb-10">
          <div>
            <span className="text-[11px] font-mono text-ink-muted uppercase block">Total Deliverables</span>
            <span className="font-mono text-2xl text-champagne font-bold">2,421</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-ink-muted uppercase block">Active Campaigns</span>
            <span className="font-mono text-2xl text-ink-primary font-bold">34</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-ink-muted uppercase block">Client Brands</span>
            <span className="font-mono text-2xl text-ink-primary font-bold">14+</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-ink-muted uppercase block">Tenure</span>
            <span className="font-mono text-2xl text-ink-secondary font-bold">4 Months</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-mono uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                selectedCategory === cat
                  ? "bg-champagne text-bg-base border-champagne"
                  : "bg-bg-panel text-ink-secondary border-white/10 hover:border-champagne-line"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              onClick={() =>
                setLightboxData({
                  src: asset.image,
                  alt: asset.title,
                  title: asset.title,
                  brand: asset.brand,
                  format: asset.format,
                  authorship: asset.badge,
                  isRestricted: asset.isRestricted,
                })
              }
              className={`p-4 rounded-lg bg-bg-panel/60 border border-white/[0.08] hover:border-champagne-line/60 transition-all flex flex-col justify-between cursor-zoom-in group ${
                asset.isRestricted ? "border-amber-500/30" : ""
              }`}
            >
              <div>
                <div className="relative aspect-video rounded overflow-hidden mb-3 bg-bg-card border border-white/5">
                  <Image
                    src={asset.image}
                    alt={asset.title}
                    fill
                    sizes="400px"
                    className={`object-cover group-hover:scale-105 transition-transform duration-500 ${
                      asset.isRestricted ? "restricted-asset opacity-35" : ""
                    }`}
                  />
                  <div className="absolute top-2 right-2 bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                    Full Size ⤢
                  </div>
                  {asset.isRestricted && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-amber-950 border border-amber-500/60 text-amber-300">
                        Private — Permission Pending
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-serif text-champagne">{asset.brand}</span>
                  <span className="text-[10px] font-mono text-ink-muted">{asset.id}</span>
                </div>

                <h3 className="text-sm font-sans text-ink-primary font-medium mb-1">
                  {asset.title}
                </h3>
                <p className="text-xs text-ink-muted font-sans font-light">{asset.format}</p>
              </div>

              {asset.badge && (
                <div className="mt-4 pt-3 border-t border-white/5">
                  <span className="text-[10px] font-mono text-champagne border border-champagne-line/40 px-2 py-0.5 rounded">
                    {asset.badge}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
