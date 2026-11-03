import React from "react";
import Link from "next/link";
import { Sparkles, Flame, Fuel, Zap, RefreshCw, Building2, ArrowUpRight } from "lucide-react";

interface BusinessVertical {
  id: string;
  index: string;
  title: string;
  status: string;
  statusType: "active" | "planned" | "eval";
  description: string;
  focusAreas: string[];
  href: string;
  bg: string;
  textColor: string;
  icon: React.ElementType;
  accent: string;
}

const VERTICALS: BusinessVertical[] = [
  {
    id: "advanced-materials",
    index: "01.",
    title: "Advanced Materials",
    status: "Under Development",
    statusType: "active",
    description: "Developing domestic capabilities in biogenic silica and industrial materials, with long-term opportunities in high-value domestic supply chains.",
    focusAreas: ["Biogenic silica applications", "Industrial silica materials", "Domestic supply chains", "Downstream materials evaluation"],
    href: "/bio-silica",
    bg: "#fae9dc",
    textColor: "#13271e",
    icon: Sparkles,
    accent: "#e06425",
  },
  {
    id: "compressed-biogas",
    index: "02.",
    title: "Compressed Biogas (CBG)",
    status: "Under Development",
    statusType: "active",
    description: "Developing commercial Compressed Biogas infrastructure from regional agricultural residues to support domestic energy diversification and clean transport.",
    focusAreas: ["Alternative gaseous fuels", "CBG distribution infrastructure", "Domestic energy diversification", "Industrial & mobility off-take"],
    href: "/cbg",
    bg: "#d6e8dc",
    textColor: "#13271e",
    icon: Flame,
    accent: "#2d7a54",
  },
  {
    id: "sustainable-aviation-fuels",
    index: "03.",
    title: "Sustainable Aviation Fuels",
    status: "Strategic Evaluation",
    statusType: "eval",
    description: "Evaluating technology pathways and industrial partnerships for drop-in synthetic fuels to support the long-term decarbonization of commercial aviation.",
    focusAreas: ["Low-carbon aviation fuels", "Industrial technology partnerships", "Decarbonization corridors", "Synthetic fuel evaluation"],
    href: "/saf",
    bg: "#132c21",
    textColor: "#ffffff",
    icon: Fuel,
    accent: "#ea6e2d",
  },
  {
    id: "renewable-utilities",
    index: "04.",
    title: "Renewable Energy & Utilities",
    status: "Planned Integration",
    statusType: "planned",
    description: "Planning captive biomass-based cogeneration and energy-efficient utilities to ensure reliable, resource-efficient power for manufacturing operations.",
    focusAreas: ["Biomass-based infrastructure", "Captive power generation", "Industrial energy efficiency", "Utility integration"],
    href: "/projects",
    bg: "#f3f5f3",
    textColor: "#13271e",
    icon: Zap,
    accent: "#c47a27",
  },
  {
    id: "circular-materials",
    index: "05.",
    title: "Circular Materials & Recovery",
    status: "Under Development",
    statusType: "active",
    description: "Utilizing industrial co-products and biochar streams for soil improvement and mineral recovery, reducing material losses across operating cycles.",
    focusAreas: ["Co-product utilization", "Biochar evaluation", "Soil improvement inputs", "Responsible resource recovery"],
    href: "/feedstock",
    bg: "#e9ede9",
    textColor: "#13271e",
    icon: RefreshCw,
    accent: "#2d7a54",
  },
  {
    id: "industrial-infrastructure",
    index: "06.",
    title: "Industrial Infrastructure",
    status: "Planned Development",
    statusType: "planned",
    description: "Planning integrated manufacturing campuses with specialized logistics, regional utilities, and long-term capacity for industrial expansion.",
    focusAreas: ["Integrated industrial campuses", "Regional logistics hubs", "Utility interconnections", "Long-term infrastructure planning"],
    href: "/projects",
    bg: "#183226",
    textColor: "#ffffff",
    icon: Building2,
    accent: "#f4a261",
  },
];

export default function UspCards() {
  return (
    <section id="businesses" aria-label="Our Businesses" className="w-full bg-[#f6f8f6] py-16 md:py-24 border-b border-[#13271e]/10">
      <div className="u-container u-container--1 u-container--pad">
        {/* Section Header */}
        <div className="pb-8 md:pb-12 border-b border-[#13271e]/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#13271e]/60 font-medium">
              02 / OUR BUSINESSES
            </span>
            <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
              Strategic Industrial Portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            <div className="lg:col-span-6">
              <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl tracking-[-0.02em] leading-[1.15] text-[#13271e]">
                A Diversified Industrial Portfolio.
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light leading-relaxed">
                Rivanta Green is developing business interests across advanced materials, sustainable fuels, renewable energy, and resource-efficient manufacturing, with a focus on long-term industrial value creation.
              </p>
            </div>
          </div>
        </div>

        {/* 6-Vertical Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10 md:pt-14">
          {VERTICALS.map((vertical, idx) => {
            const Icon = vertical.icon;
            const isDark = vertical.textColor === "#ffffff";

            return (
              <Link
                key={vertical.id}
                href={vertical.href}
                style={{ backgroundColor: vertical.bg, color: vertical.textColor }}
                className={`group relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden text-left reveal-up delay-${((idx % 3) + 1) * 100}`}
              >
                {/* Top Row: Index and Actual Status Badge */}
                <div>
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className="font-mono text-xs tracking-wider uppercase font-medium opacity-60">
                      {vertical.index}
                    </span>
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 rounded font-medium ${
                        vertical.statusType === "active"
                          ? isDark
                            ? "bg-[#2d7a54]/40 text-[#86efac] border border-[#86efac]/30"
                            : "bg-[#2d7a54]/10 text-[#2d7a54] border border-[#2d7a54]/20"
                          : isDark
                          ? "bg-white/10 text-white/80 border border-white/20"
                          : "bg-black/5 text-[#13271e]/70 border border-black/10"
                      }`}
                    >
                      {vertical.status}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        isDark ? "bg-white/10" : "bg-black/5"
                      }`}
                    >
                      <Icon className="w-6 h-6" style={{ color: vertical.accent }} />
                    </div>
                    <h3 className="font-sans font-medium text-xl sm:text-2xl tracking-tight leading-snug group-hover:text-[#e06425] transition-colors duration-200">
                      {vertical.title}
                    </h3>
                  </div>

                  {/* Factual Description */}
                  <p
                    className={`font-sans text-sm font-light leading-relaxed mb-6 ${
                      isDark ? "text-white/80" : "text-[#13271e]/80"
                    }`}
                  >
                    {vertical.description}
                  </p>
                </div>

                {/* Focus Areas Bullets & Arrow CTA */}
                <div className="pt-6 border-t border-current/10 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {vertical.focusAreas.slice(0, 3).map((area, i) => (
                      <span
                        key={i}
                        className={`font-sans text-[11.5px] px-2 py-0.5 rounded ${
                          isDark ? "bg-white/5 text-white/70" : "bg-black/5 text-[#13271e]/70"
                        }`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono font-medium pt-1">
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                      Business Overview
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#e06425]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
