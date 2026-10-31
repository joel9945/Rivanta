"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Flame,
  Sprout,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Fuel,
} from "lucide-react";

const SPEC_METRICS = [
  {
    id: "methane",
    value: "≥90.0%",
    label: "Methane (CH4) Enrichment",
    detail: "Purified biomethane complying strictly with IS 16087 standards for automotive and industrial grid injection.",
    trend: "IS 16087 Benchmark",
  },
  {
    id: "co2-removal",
    value: "≤4.0%",
    label: "Carbon Dioxide Residual",
    detail: "High-efficiency selective hollow-fiber membrane separation ensuring maximum volumetric energy density.",
    trend: "Membrane Upgrading",
  },
  {
    id: "h2s-scrub",
    value: "<20 mg/m³",
    label: "H2S Concentration",
    detail: "Biological desulfurization trickling filters combined with zinc oxide polishing beds for pipeline integrity.",
    trend: "Zero Pipeline Corrosion",
  },
  {
    id: "cascade-pressure",
    value: "250 bar",
    label: "Cascade Compression",
    detail: "High-pressure multistage reciprocating compressors for mobile cascade storage and city gas network off-take.",
    trend: "250 Bar Storage",
  },
];

const SIGNATURE_VENTURE_CARDS = [
  {
    index: "01.",
    title: "City Gas & Industrial Grid",
    badge: "Thermal Off-Take",
    text: "Supplying high-caloric biomethane directly into regional City Gas Distribution (CGD) networks to displace fossil natural gas in ceramic, metallurgical, and manufacturing plants.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Flame,
    stat: "≥90% Caloric Equivalent",
  },
  {
    index: "02.",
    title: "Fermented Organic Manure",
    badge: "Circular Bio-Fertilizer",
    text: "Digestate co-product is dewatered and enriched into high-humus solid FOM pellets and liquid bio-nutrients, returning organic carbon and micronutrients to regional soils.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Sprout,
    stat: "High Humic Acid & NPK",
  },
  {
    index: "03.",
    title: "Green Commercial Mobility",
    badge: "Bio-CNG Transport",
    text: "Compressed Bio-CNG for commercial logistics fleets and long-haul transport corridors, reducing particulate matter and tailpipe greenhouse emissions by up to 85%.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Fuel,
    stat: "-85% PM & GHG Reduction",
  },
];

const FEEDSTOCK_TYPES = [
  {
    step: "01",
    name: "Agronomic Field Straw & Stubble",
    characteristics: "Paddy straw, wheat straw, and crop stalks shredded and conditioned to eliminate open-field burning while unlocking hemicellulose sugars.",
  },
  {
    step: "02",
    name: "Agro-Processing Residues & Pressmud",
    characteristics: "Milling byproducts, sugarcane pressmud, and distillery decanter wastes offering rapid methanogenic kinetics and high volatile solids.",
  },
  {
    step: "03",
    name: "Engineered Co-Digestion Mixtures",
    characteristics: "Precision C:N ratio balancing across multi-substrate blends to ensure continuous digester stability and maximize biomethane yield per ton.",
  },
];

export default function CbgPage() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Renewable Clean Gas Pathway"
        title="Biomethane Enrichment From"
        highlightedText="Agricultural Biomass Residues."
        description="Developing utility-scale Compressed Biogas (CBG) facilities to convert regional biomass streams into high-purity renewable methane, displacing fossil natural gas in transport and industrial thermal networks."
        imageSrc="/images/cbg-plant.jpg"
        breadcrumbs={[
          { label: "Ventures", href: "/#ventures" },
          { label: "Compressed Biogas (CBG)" },
        ]}
        primaryCtaText="Inquire on Gas Off-Take"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Feedstock Logistics"
        secondaryCtaHref="/feedstock"
        telemetryTag="Methane Index ≥90% • IS 16087 Certified"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="COMPRESSED BIOGAS (CBG) — ≥90% METHANE ENRICHMENT (CH4) — FERMENTED ORGANIC MANURE (FOM) — IS 16087 SPECIFICATIONS — SCOPE 1 & 2 DISPLACEMENT — ZERO STUBBLE BURNING — "
        theme="sage"
      />

      {/* Overview Layout (Matching Homepage PlatformHgroup) */}
      <section id="details" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>The CBG Opportunity</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Decarbonizing industrial heat and transport through{" "}
                <span className="text-[#a0b0a5]">anaerobic enrichment.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  Compressed Biogas (CBG) is purified biomethane produced via the anaerobic microbiological digestion of crop residues and organic agro-waste. Once desulfurized and stripped of carbon dioxide, it delivers an identical calorific value to fossil compressed natural gas.
                </p>
                <p>
                  Rivanta Green is developing modern CBG infrastructure to inject drop-in renewable methane directly into regional gas grids and commercial logistics cascades, converting liability agricultural waste into continuous baseload energy.
                </p>
              </div>

              <div className="pt-2 reveal-up delay-300">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Initiate Off-Take Discussion
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

      {/* Signature 3-Color Card Trio (Matching Homepage UspCards) */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {SIGNATURE_VENTURE_CARDS.map((card, idx) => {
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
                    <div className="pt-2 font-mono text-xs uppercase tracking-wider font-medium" style={{ color: card.accent }}>
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

      {/* Interactive Specifications Deck */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Engineering Standards</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Caloric parity with pipeline compressed natural gas.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex items-center gap-2 reveal-up delay-200">
              <Activity className="w-4 h-4 text-[#e06425]" />
              <span>CEMS Audited • 250 Bar Cascade</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPEC_METRICS.map((metric, idx) => {
              const isSelected = selectedMetric === idx;

              return (
                <div
                  key={metric.id}
                  onClick={() => setSelectedMetric(idx)}
                  className={`relative rounded-2xl p-8 transition-all duration-400 cursor-pointer flex flex-col justify-between min-h-[260px] border card-interactive reveal-up delay-${(idx + 1) * 100} ${
                    isSelected
                      ? "bg-[#132c21] text-white border-[#132c21] shadow-xl -translate-y-1.5"
                      : "bg-white text-[#13271e] border-[#13271e]/8 hover:border-[#e06425]/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isSelected ? "bg-white/10 text-[#ea6e2d]" : "bg-[#f6f8f6] text-[#13271e]"
                      }`}
                    >
                      <Flame className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isSelected ? "bg-[#ea6e2d] text-white" : "bg-[#f0f4f1] text-[#2d7a54]"
                      }`}
                    >
                      {metric.trend}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`font-sans font-light tracking-tight text-3xl sm:text-4xl md:text-[2.6rem] leading-none mb-3 ${
                        isSelected ? "text-white" : "text-[#13271e]"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div
                      className={`font-mono text-xs uppercase tracking-wider mb-2 font-medium ${
                        isSelected ? "text-[#ea6e2d]" : "text-[#13271e]/70"
                      }`}
                    >
                      {metric.label}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? "text-white/70" : "text-[#13271e]/60"
                      }`}
                    >
                      {metric.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feedstock Compatibility & Digestate Valorization */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Feedstock & Co-Products</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Multi-substrate conditioning & biological digestate recovery.
              </h2>
              <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light max-w-2xl reveal-up delay-200">
                Beyond clean methane, the solid digestate residue is refined into Fermented Organic Manure (FOM) — returning vital soil carbon, nitrogen, phosphorus, and moisture retention to agricultural farmlands.
              </p>

              <div className="space-y-4 pt-4">
                {FEEDSTOCK_TYPES.map((f, idx) => (
                  <div
                    key={f.step}
                    className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-4 items-center card-interactive reveal-up delay-${(idx + 1) * 75}`}
                  >
                    <div className="sm:col-span-2 font-mono text-3xl font-light text-[#2d7a54]">
                      {f.step}
                    </div>
                    <div className="sm:col-span-10 space-y-1">
                      <h3 className="font-sans font-medium text-lg md:text-xl text-[#13271e]">
                        {f.name}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#13271e]/70 font-light leading-relaxed">
                        {f.characteristics}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 reveal-up delay-300">
                <Link href="/contact" className="u-btn--1 w-full sm:w-auto">
                  <span className="btn_label">
                    Inquire on Gas Off-take
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
                  href="/feedstock"
                  className="u-btn--3"
                  data-label="Explore Feedstock Logistics"
                >
                  <span className="btn_label">Explore Feedstock Logistics</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
