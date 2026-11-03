import React from "react";
import Link from "next/link";
import { Droplet, Flame, Wind, RefreshCw, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";

const STEWARDSHIP_PILLARS = [
  {
    id: "water-stewardship",
    title: "Water Stewardship & ZLD Planning",
    badge: "Design Objective",
    headline: "Managing Water Responsibly.",
    description: "Zero Liquid Discharge (ZLD) is a core design objective where technically and operationally applicable. Our planning prioritizes high-recovery membrane filtration, closed-loop recycling, and aquifer conservation.",
    icon: Droplet,
    color: "#2d7a54",
  },
  {
    id: "energy-efficiency",
    title: "Waste Heat Recovery & Utilities",
    badge: "Energy Efficiency",
    headline: "Maximizing Thermal Synergy.",
    description: "Engineering closed-loop cogeneration and waste-heat recovery across processing streams to maximize thermodynamic efficiency and reduce overall manufacturing energy intensity.",
    icon: Flame,
    color: "#e06425",
  },
  {
    id: "emission-control",
    title: "Air-Emission Management",
    badge: "Air Quality",
    headline: "Controlling Industrial Emissions.",
    description: "Planning high-efficiency particulate capture, electrostatic precipitators, and continuous in-line monitoring systems to ensure full compliance with national environmental standards.",
    icon: Wind,
    color: "#13271e",
  },
  {
    id: "circular-byproducts",
    title: "Circular By-Product Recovery",
    badge: "Material Efficiency",
    headline: "Reducing Material Losses.",
    description: "Evaluating soil-amendment applications and industrial mineral recovery for solid residues, ensuring responsible stewardship and minimal landfill footprint.",
    icon: RefreshCw,
    color: "#2d7a54",
  },
];

export default function CorporateFoundations() {
  return (
    <section
      id="environmental-stewardship"
      aria-label="Environmental Stewardship"
      className="py-8 sm:py-14 md:py-20 lg:py-28 bg-[#eeeeee] rounded-t-[28px] sm:rounded-t-[36px] md:rounded-t-[48px] -mt-3 sm:-mt-5 relative z-10 border-t border-[#13271e]/8"
    >
      <div className="u-container u-container--1 u-container--pad">
        {/* Section Identifier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 md:mb-16 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2d7a54]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
              04 / ENVIRONMENTAL STEWARDSHIP
            </span>
          </div>
          <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
            Operational Responsibility
          </span>
        </div>

        {/* Section Headline & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-8 sm:mb-12 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Responsibility Across{" "}
              <span className="font-normal italic text-[#2d7a54]">
                Our Operations.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              Environmental responsibility is central to Rivanta&apos;s industrial development approach. Our planning emphasizes efficient resource utilization, water management, emission control, and the responsible handling of industrial materials.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Link
                href="/sustainability"
                className="u-btn--1"
                aria-label="Explore Sustainability"
              >
                <span className="btn_label">
                  Sustainability Policy
                  <div className="label_corner">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="48" fill="none" viewBox="0 0 18 48">
                      <path fill="currentColor" d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z" />
                    </svg>
                  </div>
                </span>
                <i className="btn_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="none" viewBox="0 0 51 48">
                    <path fill="currentColor" d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z" />
                  </svg>
                  <ArrowRight className="w-4 h-4 btn_icon_arrow" />
                </i>
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#13271e] hover:text-[#e06425] transition-colors"
              >
                <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors">
                  Facility Planning
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid (Clean, mature institutional design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-14">
          {STEWARDSHIP_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white border border-[#13271e]/8 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#f3f5f3] text-[#13271e]/80 font-medium border border-[#13271e]/10">
                    {pillar.badge}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#f6f8f6] flex items-center justify-center">
                    <Icon className="w-5 h-5" style={{ color: pillar.color }} />
                  </div>
                </div>

                <div>
                  <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider block mb-1">
                    {pillar.title}
                  </span>
                  <h3 className="font-sans text-2xl font-light text-[#13271e] tracking-tight mb-3">
                    {pillar.headline}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-[#13271e]/75 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Three Core Governance Benchmarks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#13271e]/10">
          <div className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/60 sm:bg-transparent">
            <div className="w-10 h-10 rounded-xl bg-white text-[#2d7a54] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Environmental Planning & Accountability
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Our project planning incorporates environmental benchmarks, resource efficiency standards, and systems for future operating performance monitoring.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/60 sm:bg-transparent">
            <div className="w-10 h-10 rounded-xl bg-white text-[#e06425] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Aquifer Protection
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Prioritizing closed-loop water treatment and high-recovery recycling to protect local groundwater reservoirs across all planned facilities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 sm:gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/60 sm:bg-transparent">
            <div className="w-10 h-10 rounded-xl bg-white text-[#13271e] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Resource Conservation
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Continuous monitoring of raw materials, energy loops, and process inputs to ensure sustainable, commercially viable operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
