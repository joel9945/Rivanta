import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function CompanySpotlight() {
  return (
    <section id="company" className="py-20 md:py-32 bg-[#f6f8f6] border-t border-[#13271e]/8">
      <div className="u-container u-container--1 u-container--pad">
        {/* Top Minimal Section Identifier */}
        <div className="flex items-center pb-5 md:pb-6 border-b border-[#13271e]/10 mb-10 md:mb-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e06425]" />
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#13271e]/70 font-medium">
              02 / OUR COMPANY
            </span>
          </div>
        </div>

        {/* 2-Column Balanced Editorial Layout (Zero Card Clutter) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column (5 cols): Clean Media Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] lg:aspect-[4/5] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#13271e]/8 group">
              <Image
                src="/images/company-innovation.jpg"
                alt="Rivanta Research & Engineering Center"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2219]/60 via-transparent to-transparent opacity-60" />
            </div>
            <div className="pt-3 flex items-center justify-between font-mono text-[11px] text-[#13271e]/50 uppercase tracking-wider">
              <span>Integrated Engineering Facility — Unit 04</span>
              <span>Active Operation</span>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Narrative & Inline Benchmarks */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Bold Ventures To Unlock Clean Technology{" "}
              <span className="font-normal italic text-[#e06425]">
                For Planetary Health And Resilient Prosperity.
              </span>
            </h2>

            <div className="space-y-5 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed">
              <p>
                We are advancing a commercial pipeline of transformative clean technologies using multimodal renewable infrastructure and circular materials engineering.
              </p>
              <p>
                Built on rigorous systems engineering and led by pioneering scientists and infrastructure developers, Rivanta pushes the boundaries of how human industry operates in equilibrium with nature — synthesizing 9N purity Green Silicon for semiconductor microchips while refining commercial Compressed Biogas (CBG) and Sustainable Aviation Fuel (SAF).
              </p>
            </div>

            {/* Clean Minimalist Key Benchmarks (No Boxes, Pure Typography) */}
            <div className="grid grid-cols-3 gap-6 pt-6 pb-2 border-t border-b border-[#13271e]/10">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-light text-[#13271e] block">
                  100%
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#13271e]/65 block mt-1">
                  Circular Agro Biomass
                </span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-light text-[#e06425] block">
                  9N Purity
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#13271e]/65 block mt-1">
                  Semiconductor Silicon
                </span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-light text-[#13271e] block">
                  Zero
                </span>
                <span className="font-sans text-xs sm:text-sm text-[#13271e]/65 block mt-1">
                  Fossil Quartz Inputs
                </span>
              </div>
            </div>

            {/* Action Buttons (Aligned & Uncluttered) */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <Link href="/about" className="u-btn--1" aria-label="Learn more about Rivanta">
                <span className="btn_label">
                  Learn More About Us
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
                  View Infrastructure Projects
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}