"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
} from "lucide-react";

const CATEGORIES = [
  "All Dispatches",
  "Green Silicon (9N)",
  "Compressed Biogas",
  "Sustainable Aviation",
  "Circular Logistics",
];

const ARTICLES = [
  {
    id: "art-1",
    category: "Green Silicon (9N)",
    date: "October 14, 2026",
    title: "Green Silicon For Chips: Achieving 9N Purity (99.9999999%) from Circular Biogenic Precursors",
    excerpt:
      "A comparative technical assessment examining the synthesis of semiconductor-grade 9N green silicon for microchips and photovoltaic wafers, demonstrating a 65% cradle-to-gate carbon abatement versus electric arc furnace coal smelting.",
    readTime: "7 min read",
    author: "Materials Engineering Group",
    image: "/images/bio-silica-lab.jpg",
  },
  {
    id: "art-2",
    category: "Compressed Biogas",
    date: "September 28, 2026",
    title: "Membrane Separation vs. PSA in Agricultural Residue Biogas Upgrading",
    excerpt:
      "A systems engineering comparison of gas upgrading technologies for Compressed Biogas (CBG) facilities processing agricultural residues, focusing on methane recovery rates (>98%), parasitic power consumption, and H2S tolerance.",
    readTime: "5 min read",
    author: "Process Engineering Desk",
    image: "/images/cbg-plant.jpg",
  },
  {
    id: "art-3",
    category: "Sustainable Aviation",
    date: "August 19, 2026",
    title: "ASTM D7566 Certification Pathways for Synthetic Paraffinic Kerosene from Second-Generation Biomass",
    excerpt:
      "An analytical review of conversion technologies, hydrogen balance requirements, and certification annexes governing the production of drop-in Sustainable Aviation Fuel (SAF) from non-food agricultural biomass.",
    readTime: "9 min read",
    author: "Hydrocarbon Synthesis Group",
    image: "/images/newsroom-solar.jpg",
  },
  {
    id: "art-4",
    category: "Circular Logistics",
    date: "July 11, 2026",
    title: "Optimizing Aggregation Radius and Covered Storage Economics for Seasonal Biomass Residues",
    excerpt:
      "Logistical modeling of rice husk transport economics within a 75 km catchment radius, addressing seasonal moisture preservation, bulk density optimization, and fire safety protocols in industrial hangars.",
    readTime: "6 min read",
    author: "Agronomic Sourcing Team",
    image: "/images/feedstock-aggregation.jpg",
  },
];

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState("All Dispatches");

  const filteredArticles =
    activeCategory === "All Dispatches"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Dispatches & Intelligence"
        title="Technical insight on biomass valorization and"
        highlightedText="industrial engineering."
        description="Explore our technical whitepapers, engineering analyses, and regulatory briefs on Green Silicon For Chips (9N purity), compressed biogas, and sustainable energy transitions."
        imageSrc="/images/newsroom-solar.jpg"
        breadcrumbs={[{ label: "News & Insights" }]}
        primaryCtaText="Read Featured Whitepaper"
        primaryCtaHref="#featured"
        secondaryCtaText="Contact Media Desk"
        secondaryCtaHref="/contact"
        telemetryTag="Peer-Reviewed Engineering • Industry Briefs"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="TECHNICAL WHITEPAPERS — SEMICONDUCTOR 9N PURITY (99.9999999%) — IS 16087 BIOMETHANE SPECIFICATIONS — AIRSHED PM2.5 SMOG MITIGATION — PEER-REVIEWED ANALYSES — "
        theme="light"
      />

      {/* Featured Whitepaper Spotlight */}
      <section id="featured" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="u-ts--1 reveal-up">
              <span className="indicator-dot"></span>
              <span>Lead Technical Whitepaper</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 reveal-up delay-100">
              Q4 2026 Research Release
            </span>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#13271e]/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center overflow-hidden card-interactive reveal-up delay-200">
            <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#13271e]/5">
              <Image
                src={ARTICLES[0].image}
                alt={ARTICLES[0].title}
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex-wrap">
                <span className="px-3 py-1 rounded-md bg-[#fae9dc] text-[#e06425] font-semibold">
                  {ARTICLES[0].category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#13271e]/40" />
                  <time>{ARTICLES[0].date}</time>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#13271e]/40" />
                  <span>{ARTICLES[0].readTime}</span>
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#13271e] leading-snug">
                  {ARTICLES[0].title}
                </h2>
                <p className="font-sans text-sm md:text-base text-[#13271e]/75 font-light leading-relaxed">
                  {ARTICLES[0].excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#13271e]/8 flex items-center justify-between flex-wrap gap-4">
                <span className="font-mono text-xs text-[#13271e]/60">
                  By {ARTICLES[0].author}
                </span>

                <Link
                  href="/contact"
                  className="u-btn--1"
                  aria-label="Request complete technical whitepaper"
                >
                  <span className="btn_label">
                    Request Whitepaper PDF
                    <div className="label_corner">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="48"
                        fill="none"
                        viewBox="0 0 18 48"
                      >
                        <path
                          fill="currentColor"
                          d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
                        />
                      </svg>
                    </div>
                  </span>
                  <i className="btn_icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="51"
                      height="48"
                      fill="none"
                      viewBox="0 0 51 48"
                    >
                      <path
                        fill="currentColor"
                        d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
                      />
                    </svg>
                    <ArrowRight className="w-4 h-4 btn_icon_arrow" />
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Chronological Feed */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          {/* Header & Category Pills */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Archive & Dispatches</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Engineering papers & operational dispatches.
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-2 flex-wrap reveal-up delay-200">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#132c21] text-white shadow-sm font-medium"
                      : "bg-white text-[#13271e]/70 hover:text-[#13271e] hover:bg-white/80 border border-[#13271e]/8"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredArticles.map((art, idx) => (
              <div
                key={art.id}
                className={`p-8 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-6 card-interactive reveal-up delay-${(idx + 1) * 75}`}
              >
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#13271e]/5">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#13271e]/60">
                    <span className="px-2.5 py-0.5 rounded bg-[#f6f8f6] text-[#e06425] font-semibold">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-sans font-medium text-xl text-[#13271e] leading-snug">
                    {art.title}
                  </h3>

                  <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#13271e]/8 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#13271e]/50">{art.date}</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 uppercase font-medium text-[#e06425] hover:underline"
                  >
                    <span>Request Paper</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Media Desk Box */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#132c21] text-white flex flex-col sm:flex-row items-center justify-between gap-6 card-interactive reveal-up delay-200 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 flowline-animated" />
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ea6e2d]">
                Press & Media Relations
              </span>
              <h3 className="font-sans font-medium text-2xl">
                Journalists, industry analysts & conference inquiries
              </h3>
              <p className="font-sans text-sm text-white/75 font-light">
                For executive interviews, high-resolution plant imagery, or technical quotes, reach our communications desk directly.
              </p>
            </div>

            <Link href="/contact" className="u-btn--3 flex-shrink-0" data-label="Contact Media Desk">
              <span className="btn_label">Contact Media Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
