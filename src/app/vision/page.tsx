"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Leaf,
  Wind,
  Sprout,
  ShieldCheck,
  Factory,
  ArrowRight,
  ArrowUpRight,
  Compass,
  RefreshCw,
  Droplet,
  Layers,
  Users,
} from "lucide-react";

const STRATEGIC_ISSUES = [
  {
    id: "nature-dependency",
    index: "01",
    tag: "Resource Depletion",
    title: "Breaking Finite Nature Dependency",
    concern:
      "Heavy industry has historically relied on the extraction of non-renewable geological resources — blasting mountains for mined quartz, excavating silica sands, and depleting scarce groundwater aquifers. This linear model accelerates environmental degradation and carries significant embodied carbon.",
    response:
      "Rivanta is founded on decoupling industrial manufacturing from finite mineral quarrying. By utilizing annually replenishable agricultural residues such as rice husk, we derive high-purity biogenic silica (SiO₂) without disturbing natural geological formations or virgin mineral deposits.",
    icon: Leaf,
    color: "#2d7a54",
    stat: "Agricultural Rather Than Mined Origin",
  },
  {
    id: "stubble-burning",
    index: "02",
    tag: "Air Quality Crisis",
    title: "Diverting Seasonal Crop-Residue Burning",
    concern:
      "Every harvest season, millions of tonnes of surplus crop residues and paddy straw are burned across agrarian corridors. This open-field burning generates severe seasonal smog, dangerous spikes in PM2.5 and PM10 particulate pollution, and public health disruptions across northern and central India.",
    response:
      "We provide an organized, commercially viable alternative to open-field burning. Through structured aggregation frameworks with farmers and millers, we channel agricultural residues into high-value biogenic materials and clean Compressed Biogas, converting an atmospheric liability into productive industrial energy.",
    icon: Wind,
    color: "#e06425",
    stat: "Productive Alternative to Field Burning",
  },
  {
    id: "soil-health",
    index: "03",
    tag: "Circular Agriculture",
    title: "Reversing Soil Carbon Depletion",
    concern:
      "Decades of intensive monoculture and excessive reliance on chemical fertilizers have depleted natural organic carbon across agricultural soils, degrading soil microbiomes and reducing natural water-retention capacity.",
    response:
      "Our processing ecosystem is engineered for complete circular nutrient return. Solid anaerobic digestate and bio-char co-products from our facilities are refined into organic soil amendments, replenishing vital carbon and macro-nutrients back into regional farmland to support long-term soil vitality.",
    icon: Sprout,
    color: "#2d7a54",
    stat: "Nutrient & Carbon Circularity",
  },
  {
    id: "supply-chain",
    index: "04",
    tag: "Industrial Resilience",
    title: "Reducing Industrial Import Dependency",
    concern:
      "Indian manufacturing remains significantly dependent on foreign supply chains for essential industrial materials, including precipitated silica for green tires, high-performance concrete additives, and imported fossil hydrocarbons.",
    response:
      "We aim to build qualified domestic industrial manufacturing capabilities directly from Indian agricultural resources. Producing biogenic silica and commercial biomethane domestically strengthens domestic supply-chain resilience and protects key manufacturing sectors from international volatility.",
    icon: Factory,
    color: "#13271e",
    stat: "Domestic Manufacturing Capability",
  },
  {
    id: "agrarian-equity",
    index: "05",
    tag: "Commercial Supply Chain",
    title: "Agricultural Residue Procurement & Logistics",
    concern:
      "Agricultural residues are historically underutilized or burned in fields due to the absence of organized industrial demand and structured collection logistics.",
    response:
      "We establish commercial procurement frameworks with regional aggregators, farmer producer organizations, and agricultural processors. Sourcing biomass residues at scale establishes a dependable domestic feedstock supply chain for industrial conversion.",
    icon: Users,
    color: "#e06425",
    stat: "Commercial Feedstock Procurement",
  },
];

const VISION_PILLARS = [
  {
    index: "01.",
    title: "Ecological Stewardship",
    badge: "Design Principle",
    description:
      "Engineering facilities with Zero Liquid Discharge (ZLD) as a primary design objective, closed-loop process water recycling, and captive waste-heat recovery to conserve natural ecosystems.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Droplet,
    stat: "Closed-Loop Utility Design",
  },
  {
    index: "02.",
    title: "Industrial Circularity",
    badge: "Zero Landfill Target",
    description:
      "Ensuring comprehensive resource recovery where every processing output — from biogenic silica and clean biomethane to organic bio-fertilizers — serves a productive commercial use.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: RefreshCw,
    stat: "Comprehensive Material Valorization",
  },
  {
    index: "03.",
    title: "Institutional Accountability",
    badge: "Governance Standard",
    description:
      "Operating with disciplined corporate governance, statutory compliance planning, and transparent frameworks for resource accounting to build an enduring Indian industrial institution.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: ShieldCheck,
    stat: "Responsible Long-Term Vision",
  },
];

export default function VisionPage() {
  const [activeIssue, setActiveIssue] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Vision & Mission"
        title="Industrial Progress Beyond"
        highlightedText="Resource Depletion."
        description="Rivanta Green is founded on the conviction that India's industrial future must not depend on continuous environmental extraction. By addressing nature dependency, seasonal stubble burning, and critical material imports, we build enduring industrial capability from agricultural resources."
        imageSrc="/images/company-innovation.jpg"
        breadcrumbs={[
          { label: "Company", href: "/about" },
          { label: "Vision & Purpose" },
        ]}
        primaryCtaText="Explore Core Priorities"
        primaryCtaHref="#core-challenges"
        secondaryCtaText="About Our Enterprise"
        secondaryCtaHref="/about"
        telemetryTag="Corporate Vision • Ecological Responsibility"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="NATURE DEPENDENCY — ECOLOGICAL STEWARDSHIP — CIRCULAR RESOURCE RECOVERY — AIR QUALITY ALTERNATIVES — IMPORT SUBSTITUTION — SHARED AGRARIAN VALUE — "
        theme="light"
      />

      {/* Guiding Philosophy Editorial */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Foundational Purpose</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Rethinking heavy industry&apos;s relationship with the{" "}
                <span className="text-[#a0b0a5]">natural world.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  Modern industrial growth has predominantly followed an extractive pattern: consuming finite geological minerals, burning fossil fuels, and treating post-harvest crop residues as discarded waste to be burned.
                </p>
                <p>
                  Rivanta Green was conceived to bridge this divide. We believe sustainable industrial resilience requires shifting from non-renewable geological extraction toward renewable biological cycles — creating high-performance materials and clean energy from annually replenished agricultural resources.
                </p>
              </div>

              {/* Central Thought Banner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-sm space-y-3 card-interactive reveal-up delay-300">
                <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block">
                  Central Corporate Conviction
                </span>
                <p className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight leading-snug">
                  &ldquo;Building Industrial Value From India&apos;s Resources.&rdquo;
                </p>
                <p className="font-sans text-sm text-[#13271e]/70 font-light leading-relaxed pt-1">
                  A commitment to manufacturing self-reliance, ecological stewardship, and commercial value creation rooted in India&apos;s agrarian strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Critical Issues Matrix */}
      <section id="core-challenges" className="py-20 md:py-32 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Critical Challenges</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                The issues that define our mission.
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60">
              5 Core Strategic Priorities
            </span>
          </div>

          {/* Interactive Issue Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
            {STRATEGIC_ISSUES.map((issue, idx) => {
              const isSelected = activeIssue === idx;
              return (
                <button
                  key={issue.id}
                  type="button"
                  onClick={() => setActiveIssue(idx)}
                  className={`p-5 rounded-2xl text-left border transition-all duration-300 cursor-pointer card-interactive ${
                    isSelected
                      ? "bg-[#132c21] text-white border-[#132c21] shadow-lg"
                      : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40"
                  }`}
                >
                  <span
                    className="font-mono text-xs font-semibold block mb-2"
                    style={{ color: isSelected ? "#ea6e2d" : "#e06425" }}
                  >
                    Priority {issue.index}
                  </span>
                  <h3 className="font-sans font-medium text-sm leading-snug line-clamp-2">
                    {issue.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Selected Issue Detail Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#13271e]/10 shadow-lg card-interactive reveal-up delay-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                    Strategic Issue {STRATEGIC_ISSUES[activeIssue].index}
                  </span>
                  <span className="font-mono text-xs text-[#2d7a54] font-medium bg-[#d6e8dc]/40 px-2.5 py-0.5 rounded">
                    {STRATEGIC_ISSUES[activeIssue].tag}
                  </span>
                </div>

                <h3 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl text-[#13271e] leading-snug">
                  {STRATEGIC_ISSUES[activeIssue].title}
                </h3>

                {/* The Concern */}
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/50 font-semibold block">
                    The Challenge
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#13271e]/75 font-light leading-relaxed">
                    {STRATEGIC_ISSUES[activeIssue].concern}
                  </p>
                </div>

                {/* Rivanta's Response */}
                <div className="space-y-2 pt-2 border-t border-[#13271e]/8">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#2d7a54] font-semibold block">
                    Rivanta&apos;s Strategic Response
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#13271e]/85 font-light leading-relaxed">
                    {STRATEGIC_ISSUES[activeIssue].response}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-4 flex-wrap">
                  <Link href="/bio-silica" className="u-btn--1">
                    <span className="btn_label">
                      Explore Advanced Materials
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

                  <Link href="/cbg" className="u-btn--3" data-label="View CBG Solutions">
                    <span className="btn_label">View CBG Solutions</span>
                  </Link>
                </div>
              </div>

              {/* Sidebar Info Card */}
              <div className="lg:col-span-5 p-7 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white text-[#2d7a54] flex items-center justify-center shadow-xs border border-[#13271e]/8">
                  {React.createElement(STRATEGIC_ISSUES[activeIssue].icon, {
                    className: "w-6 h-6",
                    style: { color: STRATEGIC_ISSUES[activeIssue].color },
                  })}
                </div>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 block mb-1">
                    Measurable Focus
                  </span>
                  <div className="font-sans font-medium text-lg text-[#13271e]">
                    {STRATEGIC_ISSUES[activeIssue].stat}
                  </div>
                </div>

                <p className="font-sans text-xs text-[#13271e]/70 font-light leading-relaxed">
                  Our development approach integrates regional agrarian sourcing with advanced conversion technologies, supporting India&apos;s environmental objectives and commercial self-reliance.
                </p>

                <div className="pt-3 border-t border-[#13271e]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-[#e06425] font-medium hover:underline"
                  >
                    <span>Engage Corporate Desk</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 3-Color Card Trio */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {VISION_PILLARS.map((val, idx) => {
              const Icon = val.icon;
              const isDark = val.textColor === "#ffffff";

              return (
                <div
                  key={val.index}
                  style={{ backgroundColor: val.bg, color: val.textColor }}
                  className={`group relative min-h-[380px] md:min-h-[440px] lg:min-h-[480px] p-8 md:p-12 flex flex-col justify-between transition-all duration-500 overflow-hidden text-left card-interactive reveal-up delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between w-full opacity-70">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/5 font-medium">
                      {val.badge}
                    </span>
                    <span className="font-mono text-xs md:text-sm tracking-wider uppercase">
                      {val.index}
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
                        style={{ color: val.accent }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-medium text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-[#e06425] transition-colors">
                        {val.title}
                      </h3>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${
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
                      {val.description}
                    </p>
                    <div
                      className="pt-2 font-mono text-xs uppercase tracking-wider font-medium"
                      style={{ color: val.accent }}
                    >
                      {val.stat}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${val.accent}25, transparent 70%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Institutional Callout Banner */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#132c21] text-white flex flex-col md:flex-row items-center justify-between gap-8 card-interactive reveal-up">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ea6e2d]">
                <Compass className="w-4 h-4" />
                <span>Long-Term Strategic Engagement</span>
              </div>
              <h3 className="font-sans font-normal text-2xl sm:text-3xl md:text-4xl">
                Partner with us in building a sustainable industrial future.
              </h3>
              <p className="font-sans text-sm md:text-base text-white/75 font-light leading-relaxed">
                We welcome dialogue with regional agricultural bodies, industrial off-takers, research institutions, and technology partners who share our commitment to resource-efficient manufacturing.
              </p>
            </div>

            <Link href="/contact" className="u-btn--1 flex-shrink-0">
              <span className="btn_label">
                Engage Corporate Desk
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
      </section>
    </>
  );
}

