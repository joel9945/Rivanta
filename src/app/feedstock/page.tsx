"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Sprout,
  ShieldCheck,
  Warehouse,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Recycle,
} from "lucide-react";

const SOURCING_PILLARS = [
  {
    title: "Regional Aggregation Hubs",
    description:
      "Planning centralized collection and pre-treatment hubs near high-density agricultural clusters to optimize regional logistics and supply reliability.",
    icon: MapPin,
    stat: "Proposed Regional Hubs",
  },
  {
    title: "Enclosed Storage & Safety",
    description:
      "Designing modern covered storage facilities equipped with moisture testing, ventilation controls, and dust suppression systems engineered for agricultural biomass.",
    icon: Warehouse,
    stat: "Planned Storage Infrastructure",
  },
  {
    title: "Quality Verification Gates",
    description:
      "Developing inbound inspection protocols to assess moisture levels and material composition before processing, supporting operational consistency.",
    icon: ShieldCheck,
    stat: "Standardized Quality Framework",
  },
  {
    title: "Farmer & Miller Partnerships",
    description:
      "Structuring direct procurement frameworks with regional millers and Farmer Producer Organizations (FPOs) to provide commercial alternatives for crop residues.",
    icon: Sprout,
    stat: "Agrarian Value Creation",
  },
];

const CIRCULAR_FLOW = [
  {
    index: "01.",
    title: "Value Beyond the Harvest",
    badge: "Field Utilization",
    text: "Agricultural residues represent an important yet underutilized resource. Rivanta aims to support their productive use through organized industrial development.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: MapPin,
    stat: "Productive Biomass Use",
  },
  {
    index: "02.",
    title: "Industrial Processing",
    badge: "Materials & Energy",
    text: "Biomass is converted into high-value biogenic materials, clean biomethane, and process utilities through energy-efficient manufacturing operations.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Layers,
    stat: "Resource Recovery",
  },
  {
    index: "03.",
    title: "Soil Health Reintegration",
    badge: "Circular Agriculture",
    text: "Enriched organic digestate is returned to agricultural soils as fermented organic manure, replenishing essential carbon and nutrients for farming communities.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Recycle,
    stat: "Soil Health Restoration",
  },
];

export default function FeedstockPage() {
  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Supply Chain & Circularity"
        title="Building Resilient Supply Chains For"
        highlightedText="Agricultural Biomass."
        description="Building structured agricultural residue procurement and logistics networks to support reliable industrial feedstock supply."
        imageSrc="/images/feedstock-aggregation.jpg"
        breadcrumbs={[
          { label: "Our Businesses", href: "/#businesses" },
          { label: "Feedstock Sourcing" },
        ]}
        primaryCtaText="Partner as Sourcing Supplier"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Advanced Materials"
        secondaryCtaHref="/bio-silica"
        telemetryTag="Feedstock Supply Architecture • Bhopal, India"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="AGRICULTURAL RESIDUE UTILIZATION — REGIONAL SOURCING HUBS — FARMER PRODUCER PARTNERSHIPS — VALUE BEYOND THE HARVEST — SOIL NUTRIENT CIRCULARITY — "
        theme="sage"
      />

      {/* Sourcing Strategy Editorial */}
      <section className="py-12 sm:py-16 md:py-28 lg:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="u-ts--1 reveal-up">
                <span className="indicator-dot"></span>
                <span>Sourcing Model</span>
              </div>

              <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#13271e]/10 group reveal-up delay-100">
                <Image
                  src="/images/feedstock-rural-aggregation.jpg"
                  alt="Rural Biomass Collection and Aggregation Depot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e2219]/85 via-[#0e2219]/25 to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#f9a65c]">Rural Sourcing Hubs</p>
                  <p className="font-sans text-xs text-white/90 font-light mt-0.5">Mechanized residue baling & storage infrastructure</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                A more productive use of{" "}
                <span className="text-[#a0b0a5]">domestic resources.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  Industrial processing requires consistency in material quality, predictable delivery schedules, and transparent procurement logistics. Our aggregation framework establishes direct partnerships with milling networks and Farmer Producer Organizations.
                </p>
                <p>
                  By creating organized, dependable monetization channels for crop residues, we support rural livelihoods while contributing to reduced seasonal residue burning across key agricultural belts.
                </p>
              </div>

              {/* Sourcing Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {SOURCING_PILLARS.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-8 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs space-y-4 card-interactive reveal-up delay-${(idx + 1) * 75}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#f0f4f1] text-[#2d7a54] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans font-medium text-xl text-[#13271e]">
                        {p.title}
                      </h3>
                      <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                        {p.description}
                      </p>
                      <div className="pt-2 font-mono text-xs uppercase tracking-wider text-[#e06425] font-medium border-t border-[#13271e]/8">
                        {p.stat}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center gap-4 flex-wrap reveal-up delay-300">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Become a Sourcing Partner
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

                <Link
                  href="/bio-silica"
                  className="u-btn--3"
                  data-label="Explore Advanced Materials"
                >
                  <span className="btn_label">Explore Advanced Materials</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 3-Color Card Trio */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {CIRCULAR_FLOW.map((card, idx) => {
              const Icon = card.icon;
              const isDark = card.textColor === "#ffffff";

              return (
                <div
                  key={card.index}
                  style={{ backgroundColor: card.bg, color: card.textColor }}
                  className={`group relative min-h-[380px] md:min-h-[440px] lg:min-h-[480px] p-8 md:p-12 flex flex-col justify-between transition-all duration-500 overflow-hidden text-left card-interactive reveal-up delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between w-full opacity-70">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/5 font-medium">
                      {card.badge}
                    </span>
                    <span className="font-mono text-xs md:text-sm tracking-wider uppercase">
                      {card.index}
                    </span>
                  </div>

                  <div className="my-auto py-6">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                        isDark ? "bg-white/10" : "bg-black/5"
                      }`}
                    >
                      <Icon
                        className="w-8 h-8 md:w-10 md:h-10 transition-colors"
                        style={{ color: card.accent }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-medium text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-[#e06425] transition-colors">
                        {card.title}
                      </h3>
                      <div
                        className={`card-arrow-circle w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isDark ? "bg-white/10 text-white" : "bg-black/5 text-[#13271e]"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p
                      className={`font-sans text-sm md:text-base leading-relaxed font-light ${
                        isDark ? "text-white/80" : "text-[#13271e]/80"
                      }`}
                    >
                      {card.text}
                    </p>
                    <div
                      className="pt-2 font-mono text-xs uppercase tracking-wider font-medium"
                      style={{ color: card.accent }}
                    >
                      {card.stat}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${card.accent}25, transparent 70%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
