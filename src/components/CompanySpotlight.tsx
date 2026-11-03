import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Factory, Wheat, ShieldCheck, Flame, Compass, TrendingUp } from "lucide-react";

const STRATEGIC_THEMES = [
  {
    id: "harvest-value",
    headline: "Value Beyond the Harvest.",
    challenge: "Agricultural Residue Utilization",
    description: "Agricultural residues represent an important yet underutilized resource. Rivanta aims to support their productive use through industrial development, creating new opportunities across agriculture and manufacturing.",
    icon: Wheat,
    color: "#e06425",
  },
  {
    id: "air-quality",
    headline: "A More Productive Use of Resources.",
    challenge: "Air Quality & Seasonal Alternatives",
    description: "Organized agricultural residue utilization provides a productive alternative to open-field burning, contributing constructively to regional air-quality efforts across northern and central agrarian corridors.",
    icon: Compass,
    color: "#2d7a54",
  },
  {
    id: "domestic-manufacturing",
    headline: "Strengthening Domestic Manufacturing.",
    challenge: "Supply-Chain Resilience",
    description: "India relies heavily on international supply chains for critical industrial materials. Our long-term strategy focuses on developing qualified domestic capabilities in advanced biogenic silica and material inputs.",
    icon: Factory,
    color: "#13271e",
  },
  {
    id: "energy-transition",
    headline: "Supporting India's Energy Transition.",
    challenge: "Alternative Fuel Diversification",
    description: "Developing domestic Compressed Biogas and alternative gaseous fuels strengthens national energy security while advancing clean industrial and transport fuel options.",
    icon: Flame,
    color: "#ea6e2d",
  },
  {
    id: "resource-efficiency",
    headline: "Making Better Use of Resources.",
    challenge: "Industrial Water & Energy Discipline",
    description: "Our infrastructure planning prioritizes industrial water conservation, heat recovery, and Zero Liquid Discharge (ZLD) as an essential design objective where operationally applicable.",
    icon: ShieldCheck,
    color: "#2d7a54",
  },
  {
    id: "rural-opportunity",
    headline: "Creating Opportunity Across Communities.",
    challenge: "Rural Economic Development",
    description: "Decentralized residue procurement, regional logistics, and manufacturing investments create direct employment, rural supplier opportunities, and expanded technical skills.",
    icon: TrendingUp,
    color: "#e06425",
  },
];

export default function CompanySpotlight() {
  return (
    <section id="strategic-focus" aria-label="Strategic Focus" className="py-20 md:py-32 bg-[#fcfdfc] border-b border-[#13271e]/8">
      <div className="u-container u-container--1 u-container--pad">
        {/* Section Identifier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 md:mb-16 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06425]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
              03 / STRATEGIC PRIORITIES & NATIONAL RELEVANCE
            </span>
          </div>
          <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
            Building Value From India's Resources
          </span>
        </div>

        {/* Executive Headline & Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.025em] leading-[1.14] text-[#13271e]">
              Connecting Domestic Resources With{" "}
              <span className="font-normal italic text-[#e06425]">
                Industrial Capability.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              India's industrial expansion requires dependable domestic supply chains, clean alternative fuels, and responsible resource utilization. Rivanta is aligning its manufacturing ambitions with these critical national priorities.
            </p>
            <div className="flex items-center gap-5 pt-2">
              <Link href="/about" className="u-btn--1" aria-label="About Rivanta">
                <span className="btn_label">
                  About Our Strategy
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
                href="/sustainability"
                className="group inline-flex items-center gap-1.5 font-sans text-sm font-medium text-[#13271e] hover:text-[#e06425] transition-colors"
              >
                <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors">
                  Environmental Stewardship
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Panoramic Facility Overview Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.35/1] rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-xl mb-16 md:mb-20 group select-none">
          <Image
            src="/images/company-facility-overview.jpg"
            alt="Rivanta Proposed Bio-Industrial Manufacturing Facility Concept"
            fill
            sizes="100vw"
            className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white/80 font-mono text-[11px] tracking-wider uppercase">
            Integrated Facility Concept • Under Development
          </div>
        </div>

        {/* 6 Strategic Challenge Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-4">
          {STRATEGIC_THEMES.map((theme) => {
            const Icon = theme.icon;
            return (
              <div key={theme.id} className="flex flex-col space-y-3 border-l-2 border-[#13271e]/15 pl-6 py-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#13271e]/60">
                  <Icon className="w-4 h-4" style={{ color: theme.color }} />
                  <span>{theme.challenge}</span>
                </div>
                <h3 className="font-sans text-xl font-medium text-[#13271e] tracking-tight">
                  {theme.headline}
                </h3>
                <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
