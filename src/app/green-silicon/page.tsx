"use client";

import MarqueeText from "@/components/MarqueeText";
import SubpageHero from "@/components/SubpageHero";
import {
  ArrowRight,
  Cpu,
  FileCheck,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const COMPARISON_ROWS = [
  {
    parameter: "Feedstock & Extraction Origin",
    greenSilicon: "Sustainable Circular Precursor (Renewable Biogenic Residue)",
    minedSilicon: "Mined Quartz Sand & Coal/Coke Smelting (Fossil Minerals)",
    advantage: "100% Fossil-Free Circular Origin",
  },
  {
    parameter: "Thermal Synthesis Threshold",
    greenSilicon: "<900°C Low-Emission Induction & Catalytic Reduction",
    minedSilicon: ">1900°C Carbon-Intensive Submerged Electric Arc Smelting",
    advantage: ">55% Process Thermal Energy Savings",
  },
  {
    parameter: "Silicon Purity Grade",
    greenSilicon: "6N Purity (99.999% High-Purity Silicon)",
    minedSilicon:
      "Standard Metallurgical Grade (MG-Si 98-99%) before chlorosilanes",
    advantage: "Direct 6N High Purity",
  },
  {
    parameter: "Embodied Carbon Footprint",
    greenSilicon:
      "-65% Cradle-to-Gate CO2e (Displaces fossil carbon reductants)",
    minedSilicon: "Extreme Scope 1 & 2 emissions from coal and petroleum coke",
    advantage: "-65% Scope 3 Carbon Displacement",
  },
  {
    parameter: "Hazardous Chemical Refining",
    greenSilicon:
      "Closed-loop hydrometallurgical purification (Zero toxic chlorosilanes)",
    minedSilicon:
      "Hazardous trichlorosilane (TCS) and toxic SiCl4 distillation",
    advantage: "Non-Toxic Closed Loop Process",
  },
  {
    parameter: "Trace Critical Impurities (B, P)",
    greenSilicon: "<1 ppm Boron & Phosphorus (High-Purity Grade)",
    minedSilicon:
      "High trace boron and phosphorus requiring multiple chemical passes",
    advantage: "Precision Low-Impurity Specification",
  },
];

const APPLICATION_TABS = [
  {
    id: "electronics",
    title: "Advanced Electronics & Wafers",
    role: "High-Purity Silicon (6N / 99.999%)",
    icon: Cpu,
    headline:
      "Ultra-pure 6N silicon (99.999%) for advanced electronics and clean technology.",
    description:
      "Engineered specifically for high-spec silicon applications. Our 6N purity (99.999%) Green Silicon meets the stringent requirements for crystal pulling, advanced substrate production, and precision electronic fabrication with minimal crystal lattice defect densities.",
    specs: [
      "Silicon Purity: ≥ 99.999% (6N Purity)",
      "Boron (B) Impurity: ≤ 0.5 ppm",
      "Phosphorus (P) Impurity: ≤ 0.5 ppm",
      "Total Carbon & Oxygen: ≤ 0.5 ppma",
    ],
  },
  {
    id: "solar",
    title: "Photovoltaic Wafers",
    role: "High-Efficiency Solar Grade",
    icon: Zap,
    headline:
      "Ultra-low carbon silicon for next-generation TOPCon and HJT solar cells.",
    description:
      "Displacing coal-fired polysilicon production, our Green Silicon enables tier-1 solar manufacturers to produce ultra-high efficiency solar wafers with a 65% lower embodied carbon score, accelerating the global transition to true net-zero clean energy.",
    specs: [
      "Purity Rating: ≥ 6N Grade Specification (99.999%)",
      "Minority Carrier Lifetime: > 1,200 µs",
      "Resistivity Range: 0.5 – 3.0 Ω·cm",
      "Embodied Carbon Footprint: -65% vs Mined Quartz",
    ],
  },
  {
    id: "power",
    title: "Power Electronics & MEMS",
    role: "Discrete Devices & Sensors",
    icon: Layers,
    headline:
      "High dielectric strength and thermal conductivity for automotive and industrial power devices.",
    description:
      "Tailored for high-voltage power management ICs, IGBT substrates, and precision MEMS micro-sensors, our green silicon delivers optimal thermal dissipation and switching reliability across electric vehicle and industrial robotics architectures.",
    specs: [
      "Thermal Conductivity: 148 W/(m·K)",
      "Dislocation Etch Pit Density (EPD): < 100 cm⁻²",
      "Surface Defect Free: Class 10 Cleanroom Handled",
      "Heavy Metals: < 1 ppm Total",
    ],
  },
  {
    id: "anodes",
    title: "Advanced Silicon Anodes",
    role: "High-Density Energy Storage",
    icon: Sparkles,
    headline:
      "Engineered nano-silicon for next-generation high-energy EV batteries.",
    description:
      "Produced with calibrated particle morphology to serve as high-capacity active material for advanced lithium-ion and solid-state battery anodes, offering up to 10x higher specific theoretical capacity compared to legacy graphite.",
    specs: [
      "Theoretical Specific Capacity: ~3,500 mAh/g",
      "Precursor Silicon Purity: ≥ 6N Specification (99.999%)",
      "Sub-Micron d50 Classification: 80 – 150 nm",
      "First Cycle Coulombic Efficiency: ≥ 88%",
    ],
  },
];

export default function GreenSiliconPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="High-Purity Advanced Material"
        title="Engineering Sustainable Deep-Tech With"
        highlightedText="Green Silicon (6N)."
        description="Developing advanced, low-carbon circular refining infrastructure to synthesize ultra-high purity Green Silicon with verified 6N purity (99.999%) for clean technology, solar photovoltaics, and advanced electronics."
        imageSrc="/images/bio-silica-lab.jpg"
        breadcrumbs={[
          { label: "Ventures", href: "/#ventures" },
          { label: "Green Silicon (6N)" },
        ]}
        primaryCtaText="Request 6N Technical Lot"
        primaryCtaHref="/contact"
        secondaryCtaText="Compare Mined vs Green Silicon"
        secondaryCtaHref="#comparison"
        telemetryTag="Green Silicon Purity 6N (99.999%) • Advanced Grade"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="GREEN SILICON (6N PURITY / 99.999%) — SOLAR & ELECTRONICS GRADE — 65% EMBODIED CARBON REDUCTION — ZERO COAL SMELTING — ADVANCED CIRCULAR DEEP-TECH — "
        theme="light"
      />

      {/* Flagship Technical Differentiation (Materials Science Comparison Table) */}
      <section id="comparison" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Deep-Tech Benchmark</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#13271e] reveal-up delay-100">
              Why Green Silicon out-engineers mined quartz smelting.
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
              Conventional electronic silicon relies on carbon-heavy coal
              smelting of mined quartz at 1900°C followed by toxic chlorosilane
              distillation. Rivanta transforms sustainable agricultural residues
              into ultra-pure 6N silicon (99.999%) with zero coal usage and an audited 65%
              reduction in cradle-to-gate carbon emissions.
            </p>
          </div>

          {/* Desktop & Mobile Responsive Comparison Table */}
          <div className="overflow-x-auto rounded-3xl bg-white border border-[#13271e]/10 shadow-sm reveal-up delay-250">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-[#13271e]/10 bg-[#f0f4f1] text-[#13271e] font-mono text-xs uppercase tracking-wider">
                  <th className="p-6">Technical Metric</th>
                  <th className="p-6 text-[#e06425] font-semibold">
                    Rivanta Green Silicon (6N)
                  </th>
                  <th className="p-6 text-[#13271e]/70">
                    Conventional Mined Silicon
                  </th>
                  <th className="p-6 text-[#2d7a54]">Engineered Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#13271e]/8 font-sans text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#f6f8f6] transition-colors"
                  >
                    <td className="p-6 font-medium text-[#13271e] font-mono text-xs uppercase tracking-wider">
                      {row.parameter}
                    </td>
                    <td className="p-6 text-[#13271e] font-medium bg-[#fae9dc]/20">
                      {row.greenSilicon}
                    </td>
                    <td className="p-6 text-[#13271e]/70">
                      {row.minedSilicon}
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

      {/* Interactive Application Focus Tabs */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>Advanced Material Applications</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Calibrated specifications for high-purity industrial applications.
              </h2>
            </div>

            {/* Application Selector Tabs */}
            <div className="flex items-center gap-2 flex-wrap reveal-up delay-200">
              {APPLICATION_TABS.map((tab, idx) => (
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
            <div className="lg:col-span-12 h-1.5 w-full rounded-full flowline-animated" />
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                Sector: {APPLICATION_TABS[activeTab].role}
              </span>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl text-[#13271e] leading-snug">
                {APPLICATION_TABS[activeTab].headline}
              </h3>
              <p className="font-sans text-base text-[#13271e]/80 font-light leading-relaxed">
                {APPLICATION_TABS[activeTab].description}
              </p>

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Request 6N Technical Testing Lot
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
                  href="/technology"
                  className="u-btn--3"
                  data-label="Inspect Refining Process"
                >
                  <span className="btn_label">Inspect Refining Process</span>
                </Link>
              </div>
            </div>

            {/* Target Specifications Matrix */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/8 space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#13271e] font-semibold border-b border-[#13271e]/10 pb-3">
                <FileCheck className="w-4 h-4 text-[#2d7a54]" />
                <span>6N Target Specification Sheet</span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-[#13271e]/85">
                {APPLICATION_TABS[activeTab].specs.map((spec, sIdx) => (
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
                *Customized high-purity green silicon specifications, ingot
                sizing, and testing lots available on formal inquiry.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
