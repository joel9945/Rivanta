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
} from "lucide-react";

const PROJECT_INITIATIVES = [
  {
    id: "init-cbg",
    name: "Commercial Biogas & Bio-Fertilizer Facilities",
    vertical: "Alternative Fuels & Soil Products",
    status: "Engineering & Planning",
    scope:
      "Integrated anaerobic digestion systems producing commercial-grade biomethane for regional grid supply and enriched organic soil amendments.",
    deliverables: [
      "Process engineering and environmental clearance documentation",
      "Gas off-take framework with city gas distribution networks",
      "Digestate valorization for regional agricultural soil application",
      "Modular facility design for regional replication",
    ],
    badge: "Alternative Fuels",
    color: "#2d7a54",
  },
  {
    id: "init-silica",
    name: "Biogenic Silica Refining Facility",
    vertical: "Advanced Materials",
    status: "Under Development",
    scope:
      "Advanced manufacturing facility designed to extract high-purity biogenic silica from agricultural residues for rubber, concrete, and industrial applications.",
    deliverables: [
      "Material quality testing with industrial compounding partners",
      "Zero Liquid Discharge (ZLD) utility integration design",
      "Thermal energy recovery from process exhaust streams",
      "Evaluation of downstream high-purity precursor pathways",
    ],
    badge: "Advanced Materials",
    color: "#e06425",
  },
  {
    id: "init-saf",
    name: "Sustainable Aviation Fuel Processing",
    vertical: "Aviation Decarbonization",
    status: "Feasibility Stage",
    scope:
      "Techno-economic evaluation of alcohol-to-jet and catalytic synthesis pathways utilizing non-food agricultural biomass feedstocks.",
    deliverables: [
      "Feedstock availability assessment for non-food biomass",
      "Technology partner screening and licensor evaluation",
      "Long-term airline off-take interest mapping",
      "Regulatory alignment with national bio-aviation directives",
    ],
    badge: "Strategic Study",
    color: "#3f6050",
  },
  {
    id: "init-logistics",
    name: "Regional Biomass Aggregation Hubs",
    vertical: "Supply Chain & Logistics",
    status: "Proposed",
    scope:
      "Decentralized collection, pre-treatment, and storage depots situated near major milling clusters to secure stable, year-round feedstock availability.",
    deliverables: [
      "Regional milling density mapping across key agrarian belts",
      "Automated quality inspection and moisture control bays",
      "Farmer Producer Organization (FPO) long-term procurement frameworks",
      "Enclosed storage infrastructure with fire safety controls",
    ],
    badge: "Supply Infrastructure",
    color: "#4a6b58",
  },
];

const DEVELOPMENT_PHASES = [
  {
    phase: "Stage 01",
    name: "Feasibility & Baseline Modeling",
    status: "Completed Studies",
    timeline: "Stage 1",
    stageStatus: "Baseline Evaluation Completed",
    description:
      "Regional agricultural residue availability mapping, milling cluster assessments, material characterization studies, and preliminary mass-balance modeling.",
    deliverables: [
      "Regional biomass availability mapping across agricultural belts",
      "Assessment of biogenic silica extraction and CBG conversion pathways",
      "Preliminary site suitability reviews and logistics evaluation",
      "Engagement models for agricultural collectives and milling clusters",
    ],
  },
  {
    phase: "Stage 02",
    name: "Detailed Engineering & Regulatory Preparation",
    status: "In Preparation",
    timeline: "Stage 2",
    stageStatus: "Engineering & Permitting Underway",
    description:
      "Detailed process engineering, vendor screening, statutory clearance documentation preparation, and commercial off-take framework discussions.",
    deliverables: [
      "Process engineering packages and equipment sizing specifications",
      "Environmental and statutory documentation planning",
      "Utility interconnection and site infrastructure requirements",
      "Prospective off-take discussions with industrial users",
    ],
  },
  {
    phase: "Stage 03",
    name: "Facility Construction & Commissioning",
    status: "Proposed",
    timeline: "Proposed Stage",
    stageStatus: "Phased Execution Planned",
    description:
      "Civil works execution, equipment erection, utility integration, phased commissioning, and commercial production commencement subject to necessary statutory approvals.",
    deliverables: [
      "Turnkey facility erection under industrial safety codes",
      "Installation of automated process control systems",
      "Testing, pre-commissioning, and validation protocols",
      "Commercial distribution to industrial and energy partners",
    ],
  },
];

const OPERATIONAL_STANDARDS = [
  {
    title: "Process Control Automation",
    description:
      "Centralized instrumentation and control systems planned to monitor process temperatures, flow rates, and operational parameters to maintain consistent output quality.",
    icon: Cog,
  },
  {
    title: "Continuous Emission Monitoring",
    description:
      "Stack sensors and emission controls planned to ensure operational compliance with applicable statutory environmental standards and regulatory norms.",
    icon: ShieldCheck,
  },
  {
    title: "Industrial Safety Architecture",
    description:
      "Enclosed pneumatic conveying, dust suppression systems, and comprehensive fire protection measures engineered for planned agricultural biomass handling environments.",
    icon: HardHat,
  },
];

export default function ProjectsPage() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(1);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Industrial Infrastructure"
        title="Developing Modern Infrastructure For"
        highlightedText="Long-Term Capability."
        description="Advancing a portfolio of proposed industrial facilities through feasibility, engineering, infrastructure planning and phased development."
        imageSrc="/images/hero-facility.png"
        breadcrumbs={[{ label: "Infrastructure & Projects" }]}
        primaryCtaText="Inspect Project Pipeline"
        primaryCtaHref="#pipeline"
        secondaryCtaText="Contact Corporate Desk"
        secondaryCtaHref="/contact"
        telemetryTag="Industrial Development • Bhopal, India"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="MANUFACTURING INFRASTRUCTURE — ALTERNATIVE FUELS — BIOGENIC SILICA — LOGISTICS HUBS — PROCESS RELIABILITY — DISCIPLINED CAPITAL STEWARDSHIP — "
        theme="light"
      />

      {/* Project Initiatives Overview */}
      <section id="pipeline" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Project Initiatives</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Core development initiatives.
              </h2>
            </div>
            <p className="font-sans text-sm md:text-base text-[#13271e]/70 max-w-md reveal-up delay-200">
              Every initiative is classified by its verified development status, reflecting disciplined project progression from concept through execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECT_INITIATIVES.map((init, idx) => (
              <div
                key={init.id}
                className={`p-8 md:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-6 card-interactive reveal-up delay-${(idx + 1) * 75}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-[#f6f8f6] text-[#e06425] font-semibold">
                      {init.badge}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-medium ${
                        init.status === "Under Development"
                          ? "bg-[#e06425]/10 text-[#e06425]"
                          : init.status === "Engineering & Planning"
                          ? "bg-[#2d7a54]/10 text-[#2d7a54]"
                          : "bg-black/5 text-[#13271e]/70"
                      }`}
                    >
                      {init.status}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-[#13271e]/60 block">
                    {init.vertical}
                  </span>

                  <h3 className="font-sans font-medium text-2xl text-[#13271e] leading-snug">
                    {init.name}
                  </h3>

                  <p className="font-sans text-sm md:text-base text-[#13271e]/75 font-light leading-relaxed">
                    {init.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#13271e]/8 space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#13271e]/60 block font-semibold">
                    Key Workstreams:
                  </span>
                  <div className="space-y-1.5">
                    {init.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-xs font-sans text-[#13271e]/80 font-light"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2d7a54] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phased Roadmap Timeline */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
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
                  Disciplined execution across{" "}
                  <span className="text-[#a0b0a5]">defined phases.</span>
                </h2>
                <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
                  Phased development ensures technical qualification, statutory approvals, and commercial alignment precede major capital deployment.
                </p>
              </div>

              {/* Interactive Timeline Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-1.5 rounded-2xl bg-[#e1e4de] reveal-up delay-250">
                {DEVELOPMENT_PHASES.map((p, idx) => (
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
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] ${
                          p.status === "Completed"
                            ? "bg-[#2d7a54]/20 text-[#2d7a54]"
                            : p.status === "Underway"
                            ? "bg-[#e06425]/20 text-[#e06425]"
                            : "bg-black/10 text-[#13271e]/60"
                        }`}
                      >
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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#13271e]/8 pb-6 mb-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-1">
                      {DEVELOPMENT_PHASES[activePhaseIndex].phase} — {DEVELOPMENT_PHASES[activePhaseIndex].timeline}
                    </span>
                    <h3 className="font-sans font-medium text-2xl md:text-3xl text-[#13271e]">
                      {DEVELOPMENT_PHASES[activePhaseIndex].name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#13271e]/60">Stage Status</span>
                    <span
                      className={`font-mono text-xs font-semibold px-2.5 py-1 rounded ${
                        DEVELOPMENT_PHASES[activePhaseIndex].status === "Completed"
                          ? "bg-[#2d7a54]/10 text-[#2d7a54]"
                          : DEVELOPMENT_PHASES[activePhaseIndex].status === "Underway"
                          ? "bg-[#e06425]/10 text-[#e06425]"
                          : "bg-black/5 text-[#13271e]/70"
                      }`}
                    >
                      {DEVELOPMENT_PHASES[activePhaseIndex].status}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-base text-[#13271e]/80 font-light leading-relaxed mb-6">
                  {DEVELOPMENT_PHASES[activePhaseIndex].description}
                </p>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 block mb-3 font-semibold">
                    Core Deliverables:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {DEVELOPMENT_PHASES[activePhaseIndex].deliverables.map((item, idx) => (
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

      {/* Engineering Standards */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Engineering Standards</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
              Operational safety and reliability.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {OPERATIONAL_STANDARDS.map((sys, idx) => {
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
                Industrial Partnership Desk
              </span>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl">
                Collaborate on industrial development initiatives.
              </h3>
              <p className="font-sans text-sm text-white/75 font-light">
                Connect with our corporate team to discuss project partnerships, technology collaboration, or equipment qualification.
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
