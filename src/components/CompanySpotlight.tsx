import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cpu, Recycle, ShieldCheck } from "lucide-react";

export default function CompanySpotlight() {
  return (
    <section id="company" className="py-20 md:py-28 bg-[#f6f8f6] border-t border-[#13271e]/8">
      <div className="u-container u-container--1 u-container--pad">
        {/* Top Section Header: Label & Sub-Label */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 md:mb-12 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06425] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#13271e]/70 font-semibold">
              02 / CORPORATE PROFILE
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#13271e]/30" />
            <span className="hidden sm:inline-block font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
              Rivanta Green Innovative Venture
            </span>
          </div>
          <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60">
            Industrial Bio-Manufacturing Ecosystem
          </div>
        </div>

        {/* Commanding Editorial Headline & Executive Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end mb-12 md:mb-16">
          <div className="lg:col-span-8">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] tracking-[-0.02em] leading-[1.12] text-[#13271e]">
              Bold Ventures To Unlock Clean Technology{" "}
              <span className="font-normal italic text-[#e06425]">
                For Planetary Health And Resilient Prosperity.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              We are advancing a commercial pipeline of transformative clean technologies using multimodal renewable infrastructure and circular materials engineering.
            </p>
          </div>
        </div>

        {/* Main Content Grid: Visual Facility Showcase + 3 Enterprise Capability Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-12">
          {/* Left Column (7 cols): Facility Visual with Status Overlays */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="group relative w-full h-full min-h-[340px] sm:min-h-[420px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#13271e]/8 bg-[#13271e]/5">
              <Image
                src="/images/company-innovation.jpg"
                alt="Rivanta Research & Engineering Center"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2219]/85 via-[#0e2219]/25 to-transparent" />

              {/* Top Status Pill */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono uppercase tracking-wider text-[#13271e] font-medium shadow-sm">
                  Continuous Operation • Unit 04
                </span>
                <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-[#e06425] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                  Active Facility
                </span>
              </div>

              {/* Bottom Glassmorphism Facility Information Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-md border border-white/60 text-[#13271e]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-sans text-sm sm:text-base font-semibold tracking-tight text-[#13271e]">
                      Integrated Engineering & Materials Facility
                    </h3>
                    <p className="font-sans text-xs text-[#13271e]/70 font-light mt-0.5">
                      Pioneering ultra-pure Green Silicon refining and industrial anaerobic enrichment.
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#e06425] font-semibold whitespace-nowrap self-start sm:self-center">
                    ISO 14064 Verified
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar Under Image */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-white border border-[#13271e]/8 text-center shadow-sm">
                <span className="font-mono text-base sm:text-lg font-bold text-[#e06425] block">
                  100%
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-[#13271e]/70 font-medium">
                  Non-Food Biomass
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#13271e]/8 text-center shadow-sm">
                <span className="font-mono text-base sm:text-lg font-bold text-[#13271e] block">
                  9N (99.9999999%)
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-[#13271e]/70 font-medium">
                  Green Silicon Purity
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-[#13271e]/8 text-center shadow-sm">
                <span className="font-mono text-base sm:text-lg font-bold text-[#2d7a54] block">
                  Net-Zero
                </span>
                <span className="font-sans text-[11px] sm:text-xs text-[#13271e]/70 font-medium">
                  Circular Architecture
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): 3 Enterprise Value Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Card 1: Circular Systems Engineering */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#13271e]/8 shadow-sm hover:border-[#e06425]/40 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#fae9dc] text-[#e06425] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base sm:text-lg font-semibold text-[#13271e] tracking-tight mb-1">
                    Circular Systems Engineering
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                    Transforming regional agricultural residues into premium industrial feedstocks, displacing extractive quartz mining and reducing regional air pollution.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Strategic Semiconductor Materials */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#13271e]/8 shadow-sm hover:border-[#e06425]/40 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#d6e8dc] text-[#2d7a54] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base sm:text-lg font-semibold text-[#13271e] tracking-tight mb-1">
                    Semiconductor-Grade Green Silicon
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                    Synthesizing domestic, conflict-free 9N purity silicon from circular agricultural ash for advanced semiconductor chips and high-efficiency photovoltaics.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Institutional Governance & Off-Take */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#13271e]/8 shadow-sm hover:border-[#e06425]/40 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#13271e]/10 text-[#13271e] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans text-base sm:text-lg font-semibold text-[#13271e] tracking-tight mb-1">
                    Institutional Governance & Off-Take
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                    Structured with tier-1 engineering rigor, bankable commercial off-take, and transparent lifecycle carbon accounting audited to global ISO standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strategic Action Console */}
        <div className="pt-8 border-t border-[#13271e]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* Signature Notched Button */}
            <Link href="/about" className="u-btn--1" aria-label="Learn more about Rivanta">
              <span className="btn_label">
                Discover Our Corporate Story
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

            {/* Secondary Project Link */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#13271e] text-[#13271e] hover:text-white font-sans text-sm font-semibold border border-[#13271e]/10 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <span>View Infrastructure Projects</span>
              <ArrowUpRight className="w-4 h-4 text-[#e06425]" />
            </Link>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#13271e]/70 hover:text-[#e06425] transition-colors"
          >
            <span>Connect With Our Engineering Desk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}