import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PlatformHgroup() {
  return (
    <section id="platform" aria-label="The Rivanta Platform" className="bg-[#f6f8f6] pt-12 md:pt-16 lg:pt-20">
      <div className="u-container u-container--1 u-container--pad">
        {/* Top: Understated Section Identifier */}
        <div className="flex items-center pb-5 md:pb-6 border-b border-[#13271e]/10 reveal-up" suppressHydrationWarning>
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#13271e]/60 font-medium">
            01 / THE RIVANTA PLATFORM
          </span>
        </div>

        {/* Main Two-Column Content */}
        <div className="pt-8 md:pt-12 lg:pt-14 pb-12 md:pb-16 lg:pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Confident Editorial Headline */}
          <div className="lg:col-span-7 reveal-up delay-100" suppressHydrationWarning>
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
              From agricultural residue<br className="hidden sm:inline" /> to industrial value.
            </h2>
          </div>

          {/* Right Column: Factual Paragraph & Understated CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-1 md:pt-2 reveal-up delay-200" suppressHydrationWarning>
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed max-w-xl">
              Rivanta is developing an integrated manufacturing facility that transforms agricultural residues into high-value bio-silica, compressed biogas, and sustainable aviation fuel.
            </p>

            <div className="pt-6 md:pt-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[#13271e] hover:text-[#e06425] transition-colors duration-200"
              >
                <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors duration-200">
                  Explore our model
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Divider Separating Intro from Manufacturing Panels */}
        <div className="w-full h-[1px] bg-[#13271e]/10" />
      </div>
    </section>
  );
}
