"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Droplet,
  Wind,
  RefreshCw,
  BarChart3,
  ArrowRight,
  Activity,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const LCA_STAGES = [
  {
    step: "01",
    phase: "Agronomic Field Diversion",
    title: "100% Stubble Burning Avoidance",
    metric: "0% Seasonal Field Fires",
    delta: "Massive PM2.5 & CO2e Prevention",
    description:
      "Rice husk is aggregated directly from regional millers within a 100km radius, preventing seasonal open-air field burning that degrades regional airsheds across millions of residents.",
    deliverable: "Scope 1 agricultural emissions elimination",
  },
  {
    step: "02",
    phase: "Thermo-Chemical Processing",
    title: "Isothermal Energy Integration",
    metric: "<700°C Thermal Threshold",
    delta: "50%+ Thermal Energy Savings",
    description:
      "Controlled calcination maintains the 100% non-crystalline amorphous structure. Waste flue gas is routed through Heat Recovery Steam Generators (HRSG), supplying 100% of process steam.",
    deliverable: "Zero fossil fuel reliance for internal steam loops",
  },
  {
    step: "03",
    phase: "Water & Effluent Circulation",
    title: "Zero Liquid Discharge (ZLD)",
    metric: "98%+ Closed-Loop Water Recovery",
    delta: "Zero Toxic Effluent Discharge",
    description:
      "Process wash water is treated through multi-stage high-recovery reverse osmosis and mechanical vapor recompression (MVR) evaporators, recycling pure condensate continuously.",
    deliverable: "Groundwater conservation & zero chemical discharge",
  },
  {
    step: "04",
    phase: "Downstream Displacement",
    title: "Scope 3 Industrial Decarbonization",
    metric: "-65% Embodied CO2e vs Mined Quartz",
    delta: "Direct Supply Chain Decarbonization",
    description:
      "When integrated into semiconductor manufacturing and clean technologies, Green Silicon For Chips (with 9N purity / 99.9999999%) displaces virgin fossil-melted quartz and carbon-intensive electric-arc smelting at scale.",
    deliverable: "Audited cradle-to-gate LCA displacement under ISO 14044",
  },
];

const IMPACT_PILLARS = [
  {
    id: "air-quality",
    title: "Airshed Smog Mitigation",
    subtitle: "Field Burning Elimination",
    metricValue: "100%",
    metricLabel: "Residue Diversion",
    progressPct: 100,
    description:
      "By securing regional farmer off-take contracts, we eliminate seasonal stubble burning, removing thousands of metric tons of toxic PM2.5, carbon monoxide, and polycyclic aromatic hydrocarbons from rural airsheds.",
    icon: Wind,
    color: "#e06425",
  },
  {
    id: "embodied-carbon",
    title: "Scope 3 Materials Decarbonization",
    subtitle: "Embodied Carbon Displacement",
    metricValue: "-65%",
    metricLabel: "Carbon Intensity Delta",
    progressPct: 65,
    description:
      "Traditional electronic-grade silicon requires smelting mined quartz sand at over 1900°C with heavy fossil carbon reductants. Rivanta's Green Silicon For Chips achieves 9N purity (99.9999999%) through clean circular processing at a fraction of that thermal energy, yielding a verified 65% cradle-to-gate carbon abatement.",
    icon: BarChart3,
    color: "#2d7a54",
  },
  {
    id: "water-stewardship",
    title: "Closed-Loop Aquifer Stewardship",
    subtitle: "Zero Liquid Discharge (ZLD)",
    metricValue: "98%+",
    metricLabel: "Process Condensate Recycled",
    progressPct: 98,
    description:
      "Multi-stage membrane filtration and thermal crystallizers ensure zero hazardous effluent leaves the facility. Over 98% of all process wash water is recovered and reused internally.",
    icon: Droplet,
    color: "#34835a",
  },
  {
    id: "soil-rejuvenation",
    title: "Agricultural Topsoil Rejuvenation",
    subtitle: "Bio-Fertilizer Circularity",
    metricValue: "100%",
    metricLabel: "Digestate Recirculation",
    progressPct: 100,
    description:
      "Anaerobic digestion residues are pelletized into Fermented Organic Manure (FOM) and distributed back to regional farmlands, replenishing organic carbon, mycorrhizal biodiversity, and soil moisture holding capacity.",
    icon: RefreshCw,
    color: "#ea6e2d",
  },
];

export default function SustainabilityPage() {
  const [activeLcaStep, setActiveLcaStep] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Evidence-Based Impact"
        title="Responsible engineering for"
        highlightedText="measurable ecological value."
        description="Our environmental framework is built on transparent lifecycle accounting, resource efficiency, and verified operational benchmarks — strictly grounded in engineering reality, not speculative marketing."
        imageSrc="/images/hero-facility.jpg"
        breadcrumbs={[{ label: "Sustainability & Ecological Impact" }]}
        primaryCtaText="Inspect LCA Framework"
        primaryCtaHref="#lca-flow"
        secondaryCtaText="Explore Feedstock Supply"
        secondaryCtaHref="/feedstock"
        telemetryTag="ISO 14044 LCA • Scope 3 Displacement"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="EVIDENCE-BASED SUSTAINABILITY — ISO 14040/14044 LIFE CYCLE ASSESSMENT — SCOPE 3 INDUSTRIAL DISPLACEMENT — ZERO PROCESS LIQUID DISCHARGE — 100% AGRICULTURAL STUBBLE BURNING DIVERSION — "
        theme="light"
      />

      {/* 4 Core Ecological Impact Pillars with Interactive Progress Gauges */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Ecological Interventions</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
              Four pillars of verified{" "}
              <span className="text-[#a0b0a5]">environmental intervention.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
              Every facility design is governed by strict mass and energy balances that eliminate agricultural waste liabilities while manufacturing low-carbon industrial raw materials.
            </p>
          </div>

          {/* Impact Pillars Grid with Animated Gauges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {IMPACT_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  className={`p-8 md:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-6 card-interactive reveal-up delay-${(idx + 1) * 75}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#f0f4f1] flex items-center justify-center">
                        <Icon className="w-6 h-6" style={{ color: pillar.color }} />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60">
                        Pillar 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-1">
                        {pillar.subtitle}
                      </span>
                      <h3 className="font-sans font-medium text-2xl text-[#13271e]">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="font-sans text-sm md:text-base text-[#13271e]/75 font-light leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Animated Metric Gauge Bar */}
                  <div className="pt-4 border-t border-[#13271e]/8 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#13271e]/70">{pillar.metricLabel}</span>
                      <span className="font-mono text-base font-semibold" style={{ color: pillar.color }}>
                        {pillar.metricValue}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#f0f4f1] overflow-hidden">
                      <div
                        className="h-full rounded-full animated-meter-fill transition-all duration-1000"
                        style={{
                          width: `${pillar.progressPct}%`,
                          backgroundColor: pillar.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Cradle-to-Gate Life Cycle Assessment (LCA) Flowsheet */}
      <section id="lca-flow" className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>ISO 14044 LCA Boundary</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Cradle-to-gate lifecycle flowsheet.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex items-center gap-2 reveal-up delay-200">
              <Activity className="w-4 h-4 text-[#e06425]" />
              <span>Audited Greenhouse Gas Baseline</span>
            </div>
          </div>

          {/* Interactive Stage Step Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {LCA_STAGES.map((stage, idx) => {
              const isSelected = activeLcaStep === idx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveLcaStep(idx)}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer card-interactive reveal-up delay-${(idx + 1) * 75} ${
                    isSelected
                      ? "bg-[#132c21] text-white border-[#132c21] shadow-lg"
                      : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-2xl font-light" style={{ color: isSelected ? "#ea6e2d" : "#e06425" }}>
                      {stage.step}
                    </span>
                    <span className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                      isSelected ? "bg-white/10 text-white" : "bg-[#f6f8f6] text-[#2d7a54]"
                    }`}>
                      {stage.metric}
                    </span>
                  </div>
                  <h4 className="font-sans font-medium text-base mb-1">
                    {stage.title}
                  </h4>
                  <span className={`font-mono text-xs block ${isSelected ? "text-white/60" : "text-[#13271e]/60"}`}>
                    {stage.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#13271e]/10 shadow-lg card-interactive reveal-up delay-300">
            {/* Animated Industrial Energy Beam */}
            <div className="h-1.5 w-full rounded-full flowline-animated mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                    Stage {LCA_STAGES[activeLcaStep].step} Detailed Protocol
                  </span>
                  <span className="font-mono text-xs text-[#2d7a54] font-medium bg-[#d6e8dc]/40 px-2.5 py-0.5 rounded">
                    {LCA_STAGES[activeLcaStep].delta}
                  </span>
                </div>

                <h3 className="font-sans font-medium text-2xl sm:text-3xl text-[#13271e]">
                  {LCA_STAGES[activeLcaStep].title}
                </h3>

                <p className="font-sans text-base text-[#13271e]/80 font-light leading-relaxed">
                  {LCA_STAGES[activeLcaStep].description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#2d7a54]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Deliverable: {LCA_STAGES[activeLcaStep].deliverable}</span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 font-semibold block">
                  Accounting Benchmark
                </span>
                <div className="font-sans font-medium text-xl text-[#13271e]">
                  {LCA_STAGES[activeLcaStep].metric}
                </div>
                <p className="font-sans text-xs text-[#13271e]/70 font-light leading-relaxed">
                  Calculated against electric-arc mined quartz calcination and seasonal open-air burning baseline data.
                </p>
                <div className="pt-2 border-t border-[#13271e]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-[#e06425] font-medium hover:underline"
                  >
                    <span>Request Full LCA Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third-Party Auditing & Standards Box */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#132c21] text-white flex flex-col md:flex-row items-center justify-between gap-8 card-interactive reveal-up">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ea6e2d]">
                <ShieldCheck className="w-4 h-4" />
                <span>Audited Governance Standards</span>
              </div>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl">
                Accredited third-party verification under ISO 14040/14044 & ISO 14064.
              </h3>
              <p className="font-sans text-sm md:text-base text-white/75 font-light leading-relaxed">
                We clearly separate operational empirical data from predictive development models. All emission offsets, water recoveries, and carbon displacement figures are audited annually by accredited environmental verification bodies.
              </p>
            </div>

            <Link href="/contact" className="u-btn--1 flex-shrink-0">
              <span className="btn_label">
                Engage Sustainability Desk
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
