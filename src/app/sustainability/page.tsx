"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Droplet,
  RefreshCw,
  ShieldCheck,
  Wind,
  Flame,
} from "lucide-react";

const STEWARDSHIP_PILLARS = [
  {
    id: "water-stewardship",
    title: "Industrial Water Stewardship",
    subtitle: "Closed-Loop Design Objective",
    metricValue: "ZLD Target",
    metricLabel: "Design Standard",
    progressPct: 90,
    description:
      "Engineering facilities with Zero Liquid Discharge (ZLD) as a primary design objective where technically and operationally applicable, incorporating multi-stage recycling to minimize freshwater intake.",
    icon: Droplet,
    color: "#2d7a54",
  },
  {
    id: "air-emissions",
    title: "Air Quality & Emission Controls",
    subtitle: "Continuous Monitoring",
    metricValue: "CEMS Standards",
    metricLabel: "Regulatory Alignment",
    progressPct: 85,
    description:
      "Integrating continuous emission monitoring systems (CEMS), high-efficiency baghouse filters, and enclosed pneumatic handling systems to manage particulate matter and operational emissions.",
    icon: Wind,
    color: "#e06425",
  },
  {
    id: "energy-efficiency",
    title: "Waste-Heat & Energy Recovery",
    subtitle: "Process Integration",
    metricValue: "Thermal Loops",
    metricLabel: "Efficiency Target",
    progressPct: 80,
    description:
      "Recovering waste heat from high-temperature process streams to generate process steam and preheat incoming streams, reducing external thermal energy demand across plant operations.",
    icon: Flame,
    color: "#34835a",
  },
  {
    id: "circular-byproducts",
    title: "Circular By-Product Recovery",
    subtitle: "Resource Utilization",
    metricValue: "Soil Nutrients",
    metricLabel: "By-Product Use",
    progressPct: 90,
    description:
      "Processing residual streams and anaerobic digestate into organic soil amendments, returning valuable carbon and nutrients to regional farmland to support sustainable agriculture.",
    icon: RefreshCw,
    color: "#ea6e2d",
  },
];

const FRAMEWORK_STAGES = [
  {
    step: "01",
    phase: "Resource Sourcing",
    title: "Agricultural Residue Utilization",
    focus: "Field Diversion",
    description:
      "Organizing regional procurement of agricultural residues through structured partnerships, providing a commercial alternative to avoidable open-field burning across agrarian belts.",
    deliverable: "Supply chain traceability and verified regional sourcing",
  },
  {
    step: "02",
    phase: "Thermal Efficiency",
    title: "Energy-Efficient Process Design",
    focus: "Thermal Integration",
    description:
      "Designing conversion systems with integrated heat-exchange loops, ensuring thermal energy generated during processing is captured and recycled for plant utilities.",
    deliverable: "Reduced primary fuel consumption and balanced energy budgets",
  },
  {
    step: "03",
    phase: "Water Conservation",
    title: "Closed-Loop Water Management",
    focus: "Effluent Minimization",
    description:
      "Applying membrane filtration and condensation recycling systems to treat and reuse process water, maintaining water conservation as an essential operational principle.",
    deliverable: "ZLD engineering standards applied across all processing loops",
  },
  {
    step: "04",
    phase: "Material Reintegration",
    title: "Circular Materials & Downstream Use",
    focus: "By-Product Valorization",
    description:
      "Developing commercial channels for refined biogenic materials and enriched organic soil nutrients, ensuring comprehensive material utilization across the full production cycle.",
    deliverable: "Material lifecycle accounting structured for environmental transparency",
  },
];

export default function SustainabilityPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Environmental Stewardship"
        title="Responsible Engineering For"
        highlightedText="Sustainable Industrial Growth."
        description="Our environmental framework integrates water stewardship, emissions controls, waste-heat recovery, and auditable governance into every stage of project planning and industrial operations."
        imageSrc="/images/hero-facility.jpg"
        breadcrumbs={[{ label: "Sustainability" }]}
        primaryCtaText="Review Operational Pillars"
        primaryCtaHref="#pillars"
        secondaryCtaText="Explore Feedstock Sourcing"
        secondaryCtaHref="/feedstock"
        telemetryTag="Environmental Stewardship • Design Accountability"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="WATER STEWARDSHIP — EMISSION CONTROLS — WASTE HEAT RECOVERY — CIRCULAR RESOURCE RECOVERY — ZERO LIQUID DISCHARGE OBJECTIVES — ENVIRONMENTAL ACCOUNTABILITY — "
        theme="light"
      />

      {/* 4 Core Stewardship Pillars */}
      <section id="pillars" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Operational Commitments</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
              Four pillars of responsible{" "}
              <span className="text-[#a0b0a5]">industrial operations.</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
              Our project planning incorporates environmental engineering priorities across water conservation, air emissions management, energy efficiency, and circular by-product utilization across all planned facilities.
            </p>
          </div>

          {/* Stewardship Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STEWARDSHIP_PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  className={`p-8 md:p-10 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-6 card-interactive reveal-up delay-${(idx + 1) * 75}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#f0f4f1] flex items-center justify-center">
                        <Icon
                          className="w-6 h-6"
                          style={{ color: pillar.color }}
                        />
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

                  {/* Standard Indicator Bar */}
                  <div className="pt-4 border-t border-[#13271e]/8 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#13271e]/70">
                        {pillar.metricLabel}
                      </span>
                      <span
                        className="font-mono text-base font-semibold"
                        style={{ color: pillar.color }}
                      >
                        {pillar.metricValue}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#f0f4f1] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
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

      {/* Operational Environmental Management Framework */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Environmental Management</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Integrated resource management.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex items-center gap-2 reveal-up delay-200">
              <Activity className="w-4 h-4 text-[#e06425]" />
              <span>Environmental Planning Frameworks</span>
            </div>
          </div>

          {/* Stage Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {FRAMEWORK_STAGES.map((stage, idx) => {
              const isSelected = activeStage === idx;

              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`p-6 rounded-2xl text-left border transition-all duration-300 cursor-pointer card-interactive reveal-up delay-${(idx + 1) * 75} ${
                    isSelected
                      ? "bg-[#132c21] text-white border-[#132c21] shadow-lg"
                      : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="font-mono text-2xl font-light"
                      style={{ color: isSelected ? "#ea6e2d" : "#e06425" }}
                    >
                      {stage.step}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                        isSelected
                          ? "bg-white/10 text-white"
                          : "bg-[#f6f8f6] text-[#2d7a54]"
                      }`}
                    >
                      {stage.focus}
                    </span>
                  </div>
                  <h3 className="font-sans font-medium text-base mb-1">
                    {stage.title}
                  </h3>
                  <span
                    className={`font-mono text-xs block ${
                      isSelected ? "text-white/60" : "text-[#13271e]/60"
                    }`}
                  >
                    {stage.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#13271e]/10 shadow-lg card-interactive reveal-up delay-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                    Stage {FRAMEWORK_STAGES[activeStage].step} Operational Specification
                  </span>
                  <span className="font-mono text-xs text-[#2d7a54] font-medium bg-[#d6e8dc]/40 px-2.5 py-0.5 rounded">
                    {FRAMEWORK_STAGES[activeStage].focus}
                  </span>
                </div>

                <h3 className="font-sans font-medium text-2xl sm:text-3xl text-[#13271e]">
                  {FRAMEWORK_STAGES[activeStage].title}
                </h3>

                <p className="font-sans text-base text-[#13271e]/80 font-light leading-relaxed">
                  {FRAMEWORK_STAGES[activeStage].description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#2d7a54]">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>
                    Objective: {FRAMEWORK_STAGES[activeStage].deliverable}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/8 space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 font-semibold block">
                  Design Benchmark
                </span>
                <div className="font-sans font-medium text-xl text-[#13271e]">
                  {FRAMEWORK_STAGES[activeStage].focus}
                </div>
                <p className="font-sans text-xs text-[#13271e]/70 font-light leading-relaxed">
                  Evaluated against industrial environmental standards and regional regulatory clearances.
                </p>
                <div className="pt-2 border-t border-[#13271e]/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase text-[#e06425] font-medium hover:underline"
                  >
                    <span>Engage Corporate Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Verification Callout */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#132c21] text-white flex flex-col md:flex-row items-center justify-between gap-8 card-interactive reveal-up">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ea6e2d]">
                <ShieldCheck className="w-4 h-4" />
                <span>Governance & Verification Framework</span>
              </div>
              <h3 className="font-sans font-normal text-2xl sm:text-3xl md:text-4xl">
                Planning for environmental accountability and transparency.
              </h3>
              <p className="font-sans text-sm md:text-base text-white/75 font-light leading-relaxed">
                We maintain a clear distinction between project design targets and operational results. Water reuse systems, emissions controls, and resource accounting are planned in accordance with applicable statutory guidelines and established environmental engineering practices.
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
