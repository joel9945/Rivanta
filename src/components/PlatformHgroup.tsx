import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PlatformHgroup() {
  return (
    <section id="platform" aria-label="Corporate Introduction" className="bg-[#f6f8f6] pt-10 sm:pt-14 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <div className="u-container u-container--1 u-container--pad">
        {/* Top: Understated Section Identifier */}
        <div className="flex items-center pb-4 sm:pb-6 border-b border-[#13271e]/10 reveal-up" suppressHydrationWarning>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#13271e]/60 font-medium">
            01 / CORPORATE OVERVIEW
          </span>
        </div>

        {/* Main Two-Column Content */}
        <div className="pt-6 sm:pt-8 md:pt-12 lg:pt-14 pb-6 sm:pb-8 md:pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Institutional Headline */}
          <div className="lg:col-span-7 reveal-up delay-100" suppressHydrationWarning>
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              Industrial Progress, Built on Opportunity.
            </h2>
          </div>

          {/* Right Column: Factual Supporting Copy & Corporate CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1 md:pt-2 reveal-up delay-200" suppressHydrationWarning>
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed max-w-xl">
              Rivanta Green is developing a diversified industrial portfolio focused on advanced materials, renewable fuels, and resource-efficient manufacturing. Our development strategy connects domestic resources with long-term industrial capability.
            </p>

            <div className="pt-6 md:pt-8 flex items-center gap-6">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[#13271e] hover:text-[#e06425] transition-colors duration-200"
              >
                <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors duration-200">
                  About Our Enterprise
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[#13271e]/70 hover:text-[#13271e] transition-colors duration-200"
              >
                <span className="border-b border-transparent hover:border-[#13271e]/30 pb-0.5 transition-colors duration-200">
                  View Projects
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Divider Separating Intro from Portfolio */}
        <div className="w-full h-[1px] bg-[#13271e]/10 mt-6" />
      </div>
    </section>
  );
}
