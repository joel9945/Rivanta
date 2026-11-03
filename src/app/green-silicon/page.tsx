"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Factory,
  CheckCircle2,
  Cpu,
  Building2,
  FileCheck,
} from "lucide-react";

const MATERIAL_COMPARISONS = [
  {
    parameter: "Raw Material Source",
    biogenicSilica: "Sustainable agricultural residues (rice husk)",
    traditionalSilica: "Mined quartz sand and energy-intensive extraction",
    advantage: "Renewable Domestic Origin",
  },
  {
    parameter: "Thermal Processing Profile",
    biogenicSilica: "Controlled low-temperature thermal calcination",
    traditionalSilica: "High-temperature electric arc furnaces (>1900°C)",
    advantage: "Significantly Lower Thermal Intensity",
  },
  {
    parameter: "Material Consistency & Reactivity",
    biogenicSilica: "High specific surface area and uniform amorphous phase",
    traditionalSilica: "Crystalline quartz requiring extensive mechanical milling",
    advantage: "Superior Dispersibility & Reactivity",
  },
  {
    parameter: "Supply Chain Security",
    biogenicSilica: "Domestic agricultural sourcing insulated from import shocks",
    traditionalSilica: "Dependent on mineral extraction and import logistics",
    advantage: "Domestic Supply Resilience",
  },
  {
    parameter: "By-Product Integration",
    biogenicSilica: "Co-generates process steam and agricultural soil products",
    traditionalSilica: "Mineral quarrying with heavy solid tailings liabilities",
    advantage: "Circular Resource Recovery",
  },
];

const APPLICATION_AREAS = [
  {
    id: "rubber-tires",
    title: "Rubber & Tire Reinforcement",
    role: "Green Tire Formulations",
    headline: "Enhancing rolling resistance and wear performance.",
    description:
      "Biogenic silica serves as a high-reinforcing filler for automotive tires and industrial rubber compounds, improving fuel efficiency, wet-grip traction, and tread longevity.",
    specs: [
      "High specific surface area for optimal polymer dispersion",
      "Reduces rolling resistance to lower vehicle fuel consumption",
      "Compatible with modern synthetic and natural elastomer matrices",
      "Sustainable alternative to carbon black and mined silica",
    ],
  },
  {
    id: "construction",
    title: "Green Concrete & Infrastructure",
    role: "Supplementary Cementitious Material",
    headline: "Strengthening durability while reducing cement content.",
    description:
      "Active pozzolanic biogenic silica reacts with calcium hydroxide during cement hydration, enhancing compressive strength, reducing permeability, and lowering concrete embodied carbon.",
    specs: [
      "Accelerates early and long-term compressive strength development",
      "Significantly reduces chloride penetration and chemical corrosion",
      "Allows partial displacement of Portland cement in structural mix designs",
      "Optimizes pore structure in precast and marine grade concrete",
    ],
  },
  {
    id: "coatings-chemicals",
    title: "Specialty Coatings & Chemicals",
    role: "Industrial Thixotrope & Matting Agent",
    headline: "Precision rheology and finish control for industrial coatings.",
    description:
      "Engineered particle sizing provides consistent matting, anti-settling, and viscosity control across architectural paints, industrial resins, and high-performance sealants.",
    specs: [
      "Controlled particle distribution for uniform surface finishes",
      "Excellent thixotropic rheology control in paints and adhesives",
      "Chemically inert with high thermal and chemical stability",
      "Consistent batch-to-batch dispersibility in solvent and waterborne systems",
    ],
  },
  {
    id: "downstream",
    title: "Downstream Materials & Silicon",
    role: "Strategic Development Area",
    headline: "Evaluating high-purity precursors for domestic industries.",
    description:
      "Rivanta evaluates downstream refining pathways to convert biogenic silica into high-purity precursors for energy storage anodes, ceramics, and advanced clean technology components.",
    specs: [
      "Targeting high chemical purity from agricultural residues",
      "Evaluating battery anode precursor compatibility and morphology",
      "Structured to support long-term domestic supply-chain resilience",
      "Development projects advanced through phased technical qualification",
    ],
  },
];

export default function GreenSiliconPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Advanced Materials"
        title="Strengthening Domestic Manufacturing With"
        highlightedText="Biogenic Silica."
        description="Developing high-quality biogenic silica from agricultural residues to supply domestic rubber, concrete, specialty coatings, and advanced industrial supply chains."
        imageSrc="/images/bio-silica-lab.jpg"
        breadcrumbs={[
          { label: "Our Businesses", href: "/#businesses" },
          { label: "Advanced Materials" },
        ]}
        primaryCtaText="Explore Applications"
        primaryCtaHref="#applications"
        secondaryCtaText="Contact Commercial Desk"
        secondaryCtaHref="/contact"
        telemetryTag="Advanced Materials • Industrial Grade"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="BIOGENIC SILICA — RUBBER REINFORCEMENT — GREEN CONCRETE — SPECIALTY COATINGS — DOMESTIC SUPPLY-CHAIN RESILIENCE — DOWNSTREAM PRECURSORS — "
        theme="light"
      />

      {/* Material Benchmark Comparison */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Material Comparison</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#13271e] reveal-up delay-100">
              Sustainable materials for modern industry.
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
              Biogenic silica derived from agricultural residues provides high surface area, consistent reactivity, and commercial advantages over conventional mined quartz materials.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl bg-white border border-[#13271e]/10 shadow-sm reveal-up delay-250">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#13271e]/10 bg-[#f0f4f1] text-[#13271e] font-mono text-xs uppercase tracking-wider">
                  <th className="p-6">Parameter</th>
                  <th className="p-6 text-[#e06425] font-semibold">
                    Rivanta Biogenic Silica
                  </th>
                  <th className="p-6 text-[#13271e]/70">
                    Conventional Mined Silica
                  </th>
                  <th className="p-6 text-[#2d7a54]">Commercial Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#13271e]/8 font-sans text-sm">
                {MATERIAL_COMPARISONS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f6f8f6] transition-colors">
                    <td className="p-6 font-medium text-[#13271e] font-mono text-xs uppercase tracking-wider">
                      {row.parameter}
                    </td>
                    <td className="p-6 text-[#13271e] font-medium bg-[#fae9dc]/20">
                      {row.biogenicSilica}
                    </td>
                    <td className="p-6 text-[#13271e]/70">
                      {row.traditionalSilica}
                    </td>
                    <td className="p-6 font-mono text-xs font-semibold text-[#2d7a54]">
                      {row.advantage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Showcase */}
      <section id="applications" className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Industrial Applications</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Diverse applications across key sectors.
              </h2>
            </div>

            {/* Application Tabs */}
            <div className="flex items-center gap-2 flex-wrap reveal-up delay-200">
              {APPLICATION_AREAS.map((tab, idx) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeTab === idx
                      ? "bg-[#132c21] text-white shadow-md font-medium"
                      : "bg-white text-[#13271e]/70 hover:text-[#13271e] hover:bg-white/80 border border-[#13271e]/8"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Tab Showcase Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#13271e]/10 shadow-lg card-interactive reveal-up delay-250 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                Sector: {APPLICATION_AREAS[activeTab].role}
              </span>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl text-[#13271e] leading-snug">
                {APPLICATION_AREAS[activeTab].headline}
              </h3>
              <p className="font-sans text-base text-[#13271e]/80 font-light leading-relaxed">
                {APPLICATION_AREAS[activeTab].description}
              </p>

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Engage Commercial Desk
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
                  href="/projects"
                  className="u-btn--3"
                  data-label="View Projects"
                >
                  <span className="btn_label">View Projects</span>
                </Link>
              </div>
            </div>

            {/* Application Features */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#13271e] font-semibold border-b border-[#13271e]/10 pb-3">
                <FileCheck className="w-4 h-4 text-[#2d7a54]" />
                <span>Commercial Specifications</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#13271e]/85">
                {APPLICATION_AREAS[activeTab].specs.map((spec, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-[#13271e]/6"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#e06425]" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 text-[11px] font-sans text-[#13271e]/60 font-light">
                *Material specifications and sample lots available for qualified industrial partners upon formal inquiry.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
