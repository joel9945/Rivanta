"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Target,
  Compass,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const VALUES = [
  {
    index: "01.",
    title: "Engineering Rigor",
    badge: "Process Discipline",
    description:
      "Every processing pathway—from thermal ash calcination to catalytic desulfurization—is modeled on verified thermodynamic balances, ASME pressure piping, and institutional safety codes.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Target,
    stat: "Verified Mass & Energy Balances",
  },
  {
    index: "02.",
    title: "Resource Efficiency",
    badge: "Zero-Waste Circularity",
    description:
      "We treat agricultural residues as valuable material feeds, producing Green Silicon For Chips (9N purity), combustible biomethane, and organic humus to eliminate waste.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Compass,
    stat: "Zero-Liquid-Discharge (ZLD)",
  },
  {
    index: "03.",
    title: "Auditable Governance",
    badge: "Institutional Integrity",
    description:
      "Our environmental reporting and lifecycle assessments are audited by independent accredited bodies under ISO 14064, guaranteeing transparent stakeholder accountability.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: ShieldCheck,
    stat: "ISO 14064 & 14044 Compliance",
  },
];

const MILESTONES = [
  {
    stage: "Phase 01",
    status: "Completed",
    title: "Catchment Profiling & Agronomic Feasibility",
    detail: "Extensive regional field surveys analyzing rice husk generation density, milling logistics, and biogenic silicon precursor yield across a 100km radius.",
  },
  {
    stage: "Phase 02",
    status: "Underway",
    title: "Front-End Engineering Design (FEED) & Permitting",
    detail: "Detailed process engineering for the flagship Green Silicon For Chips refining plant (9N purity), biomethane upgrading columns, and statutory environmental clearances.",
  },
  {
    stage: "Phase 03",
    status: "Planned",
    title: "Commercial Commissioning & Industrial Off-Take",
    detail: "Turnkey equipment installation, grid synchronization, and commercial supply of 9N purity (99.9999999%) Green Silicon to semiconductor and electronics partners.",
  },
];

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(1);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Corporate Profile"
        title="Engineering Sustainable Value From"
        highlightedText="Agricultural Biomass."
        description="Rivanta Green Innovative Venture Private Limited is developing an integrated biomass-to-value manufacturing ecosystem, unlocking the industrial potential of rice husk and agricultural residues."
        imageSrc="/images/company-innovation.jpg"
        breadcrumbs={[{ label: "About" }]}
        primaryCtaText="Explore Our Technology"
        primaryCtaHref="/technology"
        secondaryCtaText="Contact Corporate Desk"
        secondaryCtaHref="/contact"
        telemetryTag="Incorporated Venture • Industrial Manufacturing"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="CIRCULAR BIO-MANUFACTURING — GREEN SILICON FOR CHIPS (9N PURITY) — COMPRESSED BIOGAS (CBG) — ZERO-WASTE AGRICULTURAL VALORIZATION — AUDITABLE ESG GOVERNANCE — "
        theme="light"
      />

      {/* Corporate Purpose Editorial Layout (Matching Homepage PlatformHgroup) */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Corporate Purpose</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Transforming agricultural residues into{" "}
                <span className="text-[#a0b0a5]">high-performance industrial materials.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  Across key agrarian belts, millions of metric tons of crop residues are burned or dumped, triggering seasonal smog and wasting high-energy biomaterials.
                </p>
                <p>
                  Rivanta Green was incorporated to engineer a market-driven, capital-efficient countermeasure: establishing modern processing units that synthesize ultra-pure Green Silicon For Chips (9N purity / 99.9999999%), alongside clean biomethane and organic soil nourishment.
                </p>
              </div>

              {/* Vision & Mission Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 reveal-up delay-300">
                <div className="p-8 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs space-y-3 card-interactive">
                  <div className="w-10 h-10 rounded-xl bg-[#fae9dc] text-[#e06425] flex items-center justify-center font-mono text-sm font-semibold">
                    01
                  </div>
                  <h3 className="font-sans font-medium text-xl text-[#13271e]">
                    Our Vision
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    To be the leading industrial producer of sustainable bio-materials and clean energy vectors, setting circular benchmarks that accelerate industrial decarbonization.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-[#d6e8dc] text-[#13271e] space-y-3 card-interactive">
                  <div className="w-10 h-10 rounded-xl bg-[#2d7a54] text-white flex items-center justify-center font-mono text-sm font-semibold">
                    02
                  </div>
                  <h3 className="font-sans font-medium text-xl text-[#13271e]">
                    Our Mission
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/85 font-light leading-relaxed">
                    To engineer and operate energy-integrated manufacturing units that recover maximum value from agricultural residues with transparent governance and zero ecological compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 3-Color Card Trio (Matching Homepage UspCards) */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {VALUES.map((val, idx) => {
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
                    <div className="pt-2 font-mono text-xs uppercase tracking-wider font-medium" style={{ color: val.accent }}>
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

      {/* Editorial Spotlight Media Section (Matching Homepage CompanySpotlight) */}
      <section className="py-20 md:py-32 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="mb-10 md:mb-16">
            <div className="u-ts--1 reveal-up">
              <span className="indicator-dot"></span>
              <span>Engineering Facility</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Media Image */}
            <div className="lg:col-span-5 relative group reveal-up delay-100">
              <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#13271e]/8">
                <Image
                  src="/images/company-innovation.jpg"
                  alt="Rivanta Research & Engineering Center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13271e]/60 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 text-xs font-mono uppercase tracking-wider text-[#13271e]">
                  <span>Demonstration & Materials Lab — Unit 01</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 reveal-up delay-200">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12] text-[#13271e]">
                Science-backed innovation with disciplined capital stewardship.
              </h2>

              <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light leading-relaxed">
                Rivanta Green bridges the gap between academic chemical innovation and commercial manufacturing. We de-risk complex thermo-chemical processes through phased engineering, pilot verification, and modular scaling.
              </p>

              <div className="space-y-4 pt-2">
                {MILESTONES.map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveMilestone(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer card-interactive ${
                      activeMilestone === idx
                        ? "bg-[#132c21] text-white border-[#132c21] shadow-lg"
                        : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs uppercase tracking-wider font-semibold" style={{ color: activeMilestone === idx ? "#ea6e2d" : "#e06425" }}>
                          {m.stage}
                        </span>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                            activeMilestone === idx
                              ? "bg-white/10 text-white"
                              : "bg-[#2d7a54]/10 text-[#2d7a54]"
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#2d7a54]" />
                    </div>
                    <h4 className="font-sans font-medium text-lg mb-1">
                      {m.title}
                    </h4>
                    <p className={`font-sans text-xs sm:text-sm font-light leading-relaxed ${activeMilestone === idx ? "text-white/75" : "text-[#13271e]/70"}`}>
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <Link href="/projects" className="u-btn--1">
                  <span className="btn_label">
                    Explore Project Pipeline
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
                  href="/contact"
                  className="u-btn--3"
                  data-label="Contact Corporate Desk"
                >
                  <span className="btn_label">Contact Corporate Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
