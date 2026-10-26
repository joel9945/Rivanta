import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompanySpotlight() {
  return (
    <section id="company" className="py-20 md:py-32 bg-[#f6f8f6]">
      <div className="u-container u-container--1 u-container--pad">
        {/* Top Section Label */}
        <div className="mb-10 md:mb-16">
          <div className="u-ts--1 reveal-up">
            <span className="indicator-dot"></span>
            <span>Our Company</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Media Image */}
          <div className="lg:col-span-5 relative group reveal-left delay-100">
            <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#13271e]/8 card-interactive">
              <Image
                src="/images/company-innovation.jpg"
                alt="Rivanta Research and Engineering Center"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#13271e]/60 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 text-xs font-mono uppercase tracking-wider text-[#13271e]">
                <span>Integrated Engineering Facility — Unit 04</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Button */}
          <div className="lg:col-span-7 flex flex-col space-y-8 reveal-right delay-200">
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12] text-[#13271e]">
              Bold ventures to unlock clean technology for planetary health and resilient prosperity.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed">
              <div className="space-y-4">
                <p>
                  We are advancing a pipeline of transformative clean technologies using multimodal renewable infrastructure and circular materials engineering.
                </p>
                <p>
                  Built on rigorous systems engineering and led by pioneering scientists and infrastructure developers, Rivanta pushes the boundaries of how human industry operates in equilibrium with nature.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Our project portfolio is engineered to institutional standards, with auditable lifecycle assessments and verifiable carbon mitigation verified by independent global benchmarks.
                </p>
                <p>
                  Today, our ventures generate clean gigawatt-hours; tomorrow, our ambition is to fundamentally power a regenerative global economy.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="#contact" className="u-btn--1">
                <span className="btn_label">
                  Learn more about us
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
        </div>
      </div>
    </section>
  );
}
