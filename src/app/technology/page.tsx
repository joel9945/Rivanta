"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Flame,
  RefreshCw,
  Zap,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const STAGES = [
  {
    step: "01",
    name: "Feedstock Logistics, Sizing & De-Stoning",
    system: "Mechanical Pre-Conditioning",
    description:
      "Raw biomass residues undergo vibratory screening, multi-stage magnetic separation of ferrous tramp metal, air classification for dust elimination, and gravity destoning to safeguard downstream reaction loops.",
    controls: "Automated moisture sensors, loss-in-weight feeders, negative-pressure dust filtration",
  },
  {
    step: "02",
    name: "Controlled Atmosphere Isothermal Calcination",
    system: "Fluidized Bed / Calciner",
    description:
      "Biomass is thermally decomposed under calibrated temperature thresholds (strictly below 700°C) and controlled oxygen stoichiometry, guaranteeing complete carbon burnout while avoiding quartz or cristobalite crystallization.",
    controls: "Multi-point thermocouple arrays, continuous flue-gas O2/CO analyzers, PLC damper actuators",
  },
  {
    step: "03",
    name: "Thermo-Chemical Digestion & Precursor Refining",
    system: "Reaction Crystallization",
    description:
      "Ash is digested with mild alkaline liquor to extract high-purity silicon precursors, followed by advanced hydrometallurgical reduction and multi-stage zone refining to synthesize Green Silicon For Chips with 9N purity (99.9999999%).",
    controls: "High-precision digital pH loop controllers, automated reagent metering, variable agitator speeds",
  },
  {
    step: "04",
    name: "Neutral Washing, Dewatering & Ultra-Pure Drying",
    system: "Separation & Moisture Elimination",
    description:
      "Refined silicon precursor slurry is filtered through automated membrane filter presses with ultra-pure deionized counter-current washing, then atomized in flash drying systems with <0.1% residual moisture.",
    controls: "In-line conductivity filtrate monitoring, inlet/outlet thermal safety interlocks",
  },
  {
    step: "05",
    name: "Electronic-Grade Induction & 9N Classification",
    system: "Advanced Refining & Sealed Handling",
    description:
      "Purified green silicon is processed under inert argon atmospheres into semiconductor-grade polycrystalline and epitaxial feedstock, achieving 9N purity (99.9999999%) calibrated for chip foundries and solar wafer manufacturing.",
    controls: "In-line mass spectrometry, laser diffraction particle sizers, Class 10 cleanroom packaging",
  },
];

const UTILITIES_CARDS = [
  {
    index: "01.",
    title: "Waste Heat Recovery (HRSG)",
    badge: "Thermal Integration",
    text: "Flue gases from biomass calcination pass through heat recovery steam generators (HRSG), generating 100% of process steam required for chemical digestion and spray drying stages.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Flame,
    stat: "High Thermodynamic Efficiency",
  },
  {
    index: "02.",
    title: "Zero Liquid Discharge (ZLD)",
    badge: "Water Conservation",
    text: "Process wash effluents are treated through high-recovery reverse osmosis and mechanical vapor recompression (MVR) evaporators, recycling 98%+ of clean water back into the extraction cycle.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: RefreshCw,
    stat: "98%+ Closed-Loop Recycled Water",
  },
  {
    index: "03.",
    title: "Integrated Biogas Island",
    badge: "Renewable Cogeneration",
    text: "Non-combustible organic residues and wastewater concentrates feed high-rate anaerobic digesters, producing purified biomethane to power plant compressors and logistics transport.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Zap,
    stat: "Internal Renewable Energy Loop",
  },
];

export default function TechnologyPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Engineering Architecture"
        title="Integrated systems engineering and"
        highlightedText="manufacturing flowsheet."
        description="Our manufacturing architecture integrates thermal conversion, precision Green Silicon For Chips refining (9N purity), anaerobic digestion, and waste-heat recovery into an interconnected, energy-efficient industrial ecosystem."
        imageSrc="/images/company-innovation.jpg"
        breadcrumbs={[{ label: "Technology" }]}
        primaryCtaText="Review Process Flowsheet"
        primaryCtaHref="#flowsheet"
        secondaryCtaText="Explore Green Silicon Specs"
        secondaryCtaHref="/green-silicon"
        telemetryTag="ZLD Engineering • SCADA Automation"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="INTEGRATED FLOWSHEET — FLUIDIZED BED ISOTHERMAL CALCINATION — HIGH RECOVERY MEMBRANE SEPARATION — WASTE HEAT STEAM RECOVERY (HRSG) — ZERO LIQUID DISCHARGE (ZLD) — "
        theme="light"
      />

      {/* Flowsheet Overview (Matching Homepage PlatformHgroup) */}
      <section id="flowsheet" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Process Architecture</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Step-by-step conversion from raw husk to{" "}
                <span className="text-[#a0b0a5]">Green Silicon For Chips (9N).</span>
              </h2>

              <p className="text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed max-w-2xl reveal-up delay-200">
                Every unit operation in our flagship extraction facility is calibrated for strict batch-to-batch repeatability, high recovery efficiency, and complete amorphous phase integrity without secondary environmental burdens.
              </p>

              {/* 5 Stages Breakdown with Interactive Styling */}
              <div className="space-y-4 pt-4">
                {STAGES.map((st, idx) => (
                  <div
                    key={st.step}
                    onClick={() => setActiveStage(idx)}
                    className={`p-6 sm:p-8 rounded-3xl border transition-all duration-400 cursor-pointer card-interactive reveal-up delay-${(idx + 1) * 75} ${
                      activeStage === idx
                        ? "bg-[#132c21] text-white border-[#132c21] shadow-xl"
                        : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40 shadow-xs"
                    }`}
                  >
                    {activeStage === idx && (
                      <div className="h-1 w-full rounded-full flowline-animated mb-4" />
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-4" style={{ borderColor: activeStage === idx ? "rgba(255,255,255,0.12)" : "rgba(19,39,30,0.08)" }}>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-2xl font-light" style={{ color: activeStage === idx ? "#ea6e2d" : "#e06425" }}>
                          {st.step}
                        </span>
                        <h3 className="font-sans font-medium text-lg md:text-xl">
                          {st.name}
                        </h3>
                      </div>
                      <span className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded w-fit ${activeStage === idx ? "bg-white/10 text-white" : "bg-[#f6f8f6] text-[#2d7a54]"}`}>
                        {st.system}
                      </span>
                    </div>

                    <p className={`font-sans text-sm md:text-base font-light leading-relaxed mb-4 ${activeStage === idx ? "text-white/85" : "text-[#13271e]/75"}`}>
                      {st.description}
                    </p>

                    <div className="text-xs font-mono pt-3 border-t flex items-start gap-2" style={{ borderColor: activeStage === idx ? "rgba(255,255,255,0.1)" : "rgba(19,39,30,0.06)", color: activeStage === idx ? "rgba(255,255,255,0.7)" : "rgba(19,39,30,0.6)" }}>
                      <span className="font-semibold" style={{ color: activeStage === idx ? "#ea6e2d" : "#e06425" }}>Controls:</span>
                      <span>{st.controls}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4 flex-wrap reveal-up delay-300">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Request Process Data
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
                  href="/green-silicon"
                  className="u-btn--3"
                  data-label="Explore Green Silicon Specs"
                >
                  <span className="btn_label">Explore Green Silicon Specs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 3-Color Card Trio: Integrated Utilities (Matching Homepage UspCards) */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {UTILITIES_CARDS.map((card, idx) => {
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
    </>
  );
}
