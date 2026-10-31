import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, ShieldCheck, Target } from "lucide-react";

export default function CorporateFoundations() {
  return (
    <section
      id="foundations"
      className="py-20 md:py-32 bg-[#eeeeee] rounded-t-[32px] md:rounded-t-[48px] -mt-6 relative z-10 border-t border-[#13271e]/8"
    >
      <div className="u-container u-container--1 u-container--pad">
        {/* Top Header: Section Label & Sub-Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 md:mb-16 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06425] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
              03 / CORPORATE PURPOSE & FOUNDATIONS
            </span>
          </div>
          <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
            Incorporated Bio-Industrial Venture
          </span>
        </div>

        {/* Commanding Editorial Headline & Lead Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Built On Engineering Discipline,{" "}
              <span className="font-normal italic text-[#e06425]">
                Committed To Measurable Impact.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              Rivanta Green was incorporated to engineer a market-driven, capital-efficient countermeasure to biomass waste: establishing modern manufacturing units that synthesize ultra-pure 9N Green Silicon, commercial Compressed Biogas (CBG), and drop-in Sustainable Aviation Fuel (SAF).
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Link href="/about" className="u-btn--1" aria-label="Explore About Rivanta">
                <span className="btn_label">
                  About Rivanta
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
                href="/investors"
                className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#13271e] hover:text-[#e06425] transition-colors"
              >
                <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors">
                  Investors & Capital
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Vision & Mission Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {/* Card 1: Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#13271e]/8 shadow-sm flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#fae9dc] text-[#e06425] font-semibold">
                Strategic Vision
              </span>
              <span className="font-mono text-xs text-[#13271e]/40 font-semibold">
                PILLAR 01
              </span>
            </div>
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight mb-3">
                Decarbonizing Heavy Industry Through Circular Bio-Materials.
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#13271e]/75 font-light leading-relaxed">
                To be India’s premier bio-industrial manufacturer, providing conflict-free 9N green silicon for semiconductor chips, clean biomethane for municipal grids, and drop-in SAF to transform aviation corridors.
              </p>
            </div>
            <div className="pt-4 border-t border-[#13271e]/8 font-mono text-xs text-[#e06425] font-medium">
              Targeting Net-Zero Industrial Permanence
            </div>
          </div>

          {/* Card 2: Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#13271e] text-white shadow-lg flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-[#f9a65c] font-semibold">
                Operational Mission
              </span>
              <span className="font-mono text-xs text-white/40 font-semibold">
                PILLAR 02
              </span>
            </div>
            <div>
              <h3 className="font-sans text-2xl sm:text-3xl font-light text-white tracking-tight mb-3">
                Engineering Value With Rigorous Capital & Ecological Efficiency.
              </h3>
              <p className="font-sans text-sm sm:text-base text-white/80 font-light leading-relaxed">
                To engineer and commission integrated manufacturing plants that extract maximum thermodynamic value from agrarian residues, operating with Zero Liquid Discharge (ZLD) and auditable governance under ISO 14064.
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 font-mono text-xs text-[#f9a65c] font-medium">
              Audited Under Global Environmental Standards
            </div>
          </div>
        </div>

        {/* Three Core Operating Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#13271e]/10">
          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-xl bg-white text-[#e06425] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Engineering Rigor
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Modeled on thermodynamic mass and energy balances, ASME pressure standards, and automated in-line process control.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-xl bg-white text-[#2d7a54] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Resource Efficiency
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Zero-waste flowsheet recycling 98%+ of process water, capturing waste heat steam, and returning nutrient humus to farmland.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4">
            <div className="w-10 h-10 rounded-xl bg-white text-[#13271e] flex items-center justify-center flex-shrink-0 shadow-xs border border-[#13271e]/8">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e] tracking-tight mb-1">
                Auditable Governance
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                Institutional transparency with lifecycle carbon accounting verified by independent bodies under ISO 14064 benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}