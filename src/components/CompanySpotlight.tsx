import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CompanySpotlight() {
  return (
    <section id="company" className="py-24 md:py-36 bg-[#fcfdfc] border-t border-[#13271e]/8">
      <div className="u-container u-container--1 u-container--pad">
        {/* 1. Top Section Identifier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 md:mb-16 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06425]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
              02 / OUR COMPANY & INFRASTRUCTURE
            </span>
          </div>
          <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
            Industrial Bio-Manufacturing Ecosystem
          </span>
        </div>

        {/* 2. Executive Statement: Asymmetric Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] tracking-[-0.025em] leading-[1.12] text-[#13271e]">
              Bold Ventures To Unlock Clean Technology{" "}
              <span className="font-normal italic text-[#e06425]">
                For Planetary Health And Resilient Prosperity.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              Rivanta Green Innovative Venture is developing an integrated, commercial-scale bio-manufacturing ecosystem that converts agricultural residues into strategic industrial feedstocks — displacing fossil hydrocarbons and high-emission minerals.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Link href="/about" className="u-btn--1" aria-label="Learn more about Rivanta">
                <span className="btn_label">
                  Discover Our Story
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
                className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#13271e] hover:text-[#e06425] transition-colors"
              >
                <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors">
                  View Projects
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. The Panoramic Facility Showcase: Pure, Untagged, Authentic */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.35/1] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-2xl mb-16 md:mb-20 group select-none">
          <Image
            src="/images/company-facility-overview.jpg"
            alt="Rivanta Integrated Bio-Industrial Refinery and Engineering Facility"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            priority
          />
        </div>

        {/* 4. Three Structural Foundation Pillars (Clean Architectural Grid, No Floating Card Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-4">
          {/* Pillar 01 */}
          <div className="flex flex-col space-y-3 border-l-2 border-[#e06425] pl-6 py-1">
            <span className="font-mono text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
              100%
            </span>
            <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight">
              Circular Feedstock Logistics
            </h3>
            <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
              Aggregating non-food agricultural biomass residues from regional farmers and rice mills, creating resilient rural value loops with zero competition against food security.
            </p>
          </div>

          {/* Pillar 02 */}
          <div className="flex flex-col space-y-3 border-l-2 border-[#2d7a54] pl-6 py-1">
            <span className="font-mono text-2xl sm:text-3xl font-light text-[#e06425] tracking-tight">
              9N Purity
            </span>
            <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight">
              Semiconductor Green Silicon
            </h3>
            <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
              Synthesizing ultra-pure electronic-grade silicon (99.9999999%) directly from biogenic silica without high-carbon quartz smelting or toxic chlorosilanes.
            </p>
          </div>

          {/* Pillar 03 */}
          <div className="flex flex-col space-y-3 border-l-2 border-[#13271e]/30 pl-6 py-1">
            <span className="font-mono text-2xl sm:text-3xl font-light text-[#13271e] tracking-tight">
              Zero Fossil
            </span>
            <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight">
              Multimodal Energy Vectors
            </h3>
            <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
              Commercial Compressed Biogas (CBG) for city gas grids and synthetic drop-in SAF for aviation, slashing lifecycle emissions by up to 80% under verified standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}