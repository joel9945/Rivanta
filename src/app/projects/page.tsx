"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  HardHat,
  Cog,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Building,
} from "lucide-react";

const PHASES = [
  {
    phase: "Phase 01",
    name: "Feedstock Catchment & Agronomic Modeling",
    status: "Completed",
    timeline: "2024 – 2025",
    progress: 100,
    description:
      "Comprehensive biomass availability studies, regional rice mill mapping, sample chemical characterization of rice husk ash, and initial thermodynamic mass balance modeling.",
    deliverables: [
      "Feedstock aggregation logistics model across 100km radius",
      "Laboratory chemical characterization of Green Silicon (6N / 99.999%) yield",
      "Initial geotechnical and statutory site suitability screening",
      "Agronomic Farmer Producer Organization (FPO) off-take framework",
    ],
  },
  {
    phase: "Phase 02",
    name: "Front-End Engineering Design (FEED) & Clearances",
    status: "Underway",
    timeline: "2025 – 2026",
    progress: 65,
    description:
      "Detailed process engineering, equipment sizing, vendor qualification, Environmental Impact Assessment (EIA) baseline monitoring, and off-take specification alignment.",
    deliverables: [
      "Process Flow Diagrams (PFD) and Piping & Instrumentation Diagrams (P&ID)",
      "Licensor selection for 6N green silicon purification and gas upgrading",
      "Statutory environmental clearances and land acquisition closure",
      "Grid interconnection study with state transmission utility",
    ],
  },
  {
    phase: "Phase 03",
    name: "Commercial EPC & Infrastructure Realization",
    status: "Planned",
    timeline: "2026 – 2027",
    progress: 15,
    description:
      "Civil works construction, equipment procurement and erection, utility interconnection (substation, water treatment, boiler plant), commissioning, and ramp-up.",
    deliverables: [
      "Turnkey manufacturing facility construction & erection",
      "Cold & hot commissioning of flagship green silicon (6N) production train",
      "Biomethane grid compression and cascade filling commissioning",
      "Commercial off-take delivery to advanced clean technology and electronics partners",
    ],
  },
];

const ASSET_UNITS = [
  {
    id: "unit-01",
    unitCode: "UNIT 01",
    name: "Flagship Green Silicon & Cogeneration Train",
    footprint: "14.5 Acres Allocated",
    grid: "33kV Dedicated Substation Interconnect",
    status: "Engineering Specified",
    description:
      "Advanced reduction reactors, hydrometallurgical purification tanks, flash dry systems, and induction refining units yielding 6N purity (99.999%) Green Silicon.",
    badge: "Flagship Asset",
    color: "#e06425",
  },
  {
    id: "unit-02",
    unitCode: "UNIT 02",
    name: "Anaerobic Digestion & Biomethane Enrichment",
    footprint: "8.0 Acres Allocated",
    grid: "CGD Pipeline Interconnect & Cascade Bay",
    status: "Technology Aligned",
    description:
      "Continuous Stirred Tank Reactors (CSTR), biological desulfurization columns, selective membrane gas separation, and 250-bar cascade compression cylinders.",
    badge: "Renewable Gas",
    color: "#2d7a54",
  },
  {
    id: "unit-03",
    unitCode: "UNIT 03",
    name: "Zero Liquid Discharge & Process Water Loop",
    footprint: "4.2 Acres Allocated",
    grid: "High-Efficiency Closed-Loop Recirculation",
    status: "Closed-Loop Design",
    description:
      "Multi-stage high-recovery reverse osmosis, mechanical vapor recompression (MVR) evaporators, and crystallizers recovering 98%+ of process water.",
    badge: "ZLD System",
    color: "#3f6050",
  },
];

const SAFETY_SYSTEMS = [
  {
    title: "Distributed Control System (DCS)",
    description: "Centralized SCADA architecture with dual-redundant programmable logic controllers (PLCs), monitoring temperature profiles, flow rates, and chemical stoichiometry in real time.",
    icon: Cog,
  },
  {
    title: "Continuous Emission Monitoring (CEMS)",
    description: "Multi-gas stack sensors providing 24/7 telemetry of particulate matter (PM), sulfur dioxide, and nitrogen oxides directly connected to state environmental regulatory servers.",
    icon: ShieldCheck,
  },
  {
    title: "Automated Material Handling & Safety",
    description: "Dust explosion suppression, pneumatic enclosed transport conveyors, and infrared flame detectors engineered for volatile agricultural biomass dust environments.",
    icon: HardHat,
  },
];

export default function ProjectsPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Capital Infrastructure"
        title="Engineering Modern Infrastructure For"
        highlightedText="Operational Permanence."
        description="Our manufacturing assets are engineered to institutional standards — combining robust civil engineering, automated SCADA process control, and transparent implementation milestones."
        imageSrc="/images/hero-facility.jpg"
        breadcrumbs={[{ label: "Infrastructure" }, { label: "Projects & Engineering" }]}
        primaryCtaText="Inspect Project Phasing"
        primaryCtaHref="#roadmap"
        secondaryCtaText="Contact Engineering Desk"
        secondaryCtaHref="/contact"
        telemetryTag="Phase 2 FEED • Industrial Safety Instrumented"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="INFRASTRUCTURE BLUEPRINT — ADVANCED PROCESS ENGINEERING — 33KV GRID INTERCONNECTION — CONTINUOUS EMISSION MONITORING (CEMS) — ASME & IS STANDARDS COMPLIANT — "
        theme="light"
      />

      {/* Phased Roadmap Interactive Timeline */}
      <section id="roadmap" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Development Roadmap</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <div>
                <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                  Phased realization from FEED to{" "}
                  <span className="text-[#a0b0a5]">commercial production.</span>
                </h2>
                <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
                  Structured engineering milestones aligning FEED design, industrial procurement, and commercial EPC execution under auditable governance standards.
                </p>
              </div>

              {/* Interactive Timeline Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[#e1e4de] reveal-up delay-250">
                {PHASES.map((p, idx) => (
                  <button
                    key={p.phase}
                    type="button"
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`py-3.5 px-4 rounded-xl text-left transition-all duration-300 font-mono text-xs uppercase tracking-wider cursor-pointer ${
                      activePhaseIndex === idx
                        ? "bg-[#132c21] text-white shadow-md font-medium"
                        : "text-[#13271e]/70 hover:text-[#13271e] hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span>{p.phase}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        p.status === "Completed"
                          ? "bg-[#2d7a54]/20 text-[#2d7a54]"
                          : p.status === "Underway"
                          ? "bg-[#e06425]/20 text-[#e06425]"
                          : "bg-black/10 text-[#13271e]/60"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <div className="font-sans text-xs normal-case truncate">
                      {p.timeline}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Phase Detail Card */}
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-md card-interactive reveal-up delay-300">
                <div className="h-1.5 w-full rounded-full flowline-animated mb-6" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#13271e]/8 pb-6 mb-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-1">
                      {PHASES[activePhaseIndex].phase} — {PHASES[activePhaseIndex].timeline}
                    </span>
                    <h3 className="font-sans font-medium text-2xl md:text-3xl text-[#13271e]">
                      {PHASES[activePhaseIndex].name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#13271e]/60">Stage Progress</span>
                    <div className="w-24 h-2.5 rounded-full bg-[#e1e4de] overflow-hidden">
                      <div
                        className="h-full bg-[#e06425] transition-all duration-700"
                        style={{ width: `${PHASES[activePhaseIndex].progress}%` }}
                      />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#13271e]">
                      {PHASES[activePhaseIndex].progress}%
                    </span>
                  </div>
                </div>

                <p className="font-sans text-base text-[#13271e]/80 font-light leading-relaxed mb-6">
                  {PHASES[activePhaseIndex].description}
                </p>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 block mb-3 font-semibold">
                    Key Deliverables & Verification Gates:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PHASES[activePhaseIndex].deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-[#f6f8f6] border border-[#13271e]/6 flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#2d7a54] flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-[#13271e]/85 font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Asset Blueprint (Dedicated Unit Architecture) */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Asset Blueprint</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Integrated manufacturing unit operations.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex items-center gap-2 reveal-up delay-200">
              <Building className="w-4 h-4 text-[#e06425]" />
              <span>Consolidated 26.7-Acre Footprint</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ASSET_UNITS.map((unit, idx) => (
              <div
                key={unit.id}
                className={`p-8 md:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-6 card-interactive reveal-up delay-${(idx + 1) * 100}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#f6f8f6] text-[#e06425]">
                      {unit.unitCode}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#f0f4f1] text-[#2d7a54] font-medium">
                      {unit.badge}
                    </span>
                  </div>

                  <h3 className="font-sans font-medium text-2xl text-[#13271e] leading-snug">
                    {unit.name}
                  </h3>

                  <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    {unit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#13271e]/8 space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#13271e]/70">
                    <span>Footprint:</span>
                    <span className="font-medium text-[#13271e]">{unit.footprint}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#13271e]/70">
                    <span>Grid Link:</span>
                    <span className="font-medium text-[#2d7a54]">{unit.grid}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Control & Safety Architecture */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Process Reliability</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
              Safety-instrumented industrial automation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SAFETY_SYSTEMS.map((sys, idx) => {
              const Icon = sys.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-4 card-interactive reveal-up delay-${(idx + 1) * 75}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f4f1] text-[#2d7a54] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-medium text-xl text-[#13271e]">
                    {sys.title}
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    {sys.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#132c21] text-white flex flex-col md:flex-row items-center justify-between gap-6 reveal-up">
            <div className="max-w-xl space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#ea6e2d]">
                EPC & Technology Licensors
              </span>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl">
                Interested in equipment supply or turnkey engineering tenders?
              </h3>
              <p className="font-sans text-sm text-white/75 font-light">
                Our projects procurement desk conducts regular vendor qualification rounds for reaction vessels, filter presses, and gas compression modules.
              </p>
            </div>

            <Link href="/contact" className="u-btn--1 flex-shrink-0">
              <span className="btn_label">
                Engage Projects Desk
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
