import React from "react";
import Link from "next/link";
import { ArrowUpRight, Factory, Zap, RefreshCw, Sprout } from "lucide-react";

export default function IndustrialOpportunity() {
  const pillars = [
    {
      title: "Resource Utilization",
      subtitle: "Agricultural Value Streams",
      description: "Industrial value from agricultural residues.",
      detail:
        "Converting seasonal crop residues including rice husk and straw into structured raw material inputs for manufacturing.",
      icon: Sprout,
      href: "/feedstock",
      badge: "Feedstock Integration",
      color: "#2d7a54",
    },
    {
      title: "Domestic Manufacturing",
      subtitle: "Supply Chain Resilience",
      description: "Advanced materials and industrial capabilities.",
      detail:
        "Developing domestic production of high-purity biogenic silica and evaluating green silicon precursor pathways to reduce import dependency.",
      icon: Factory,
      href: "/bio-silica",
      badge: "Advanced Materials",
      color: "#e06425",
    },
    {
      title: "Energy Diversification",
      subtitle: "Clean Fuels & Mobility",
      description: "Renewable fuels and energy infrastructure.",
      detail:
        "Engineering commercial Compressed Biogas facilities and evaluating sustainable aviation fuel pathways to advance domestic energy security.",
      icon: Zap,
      href: "/cbg",
      badge: "Renewable Gas",
      color: "#34835a",
    },
    {
      title: "Circular Industry",
      subtitle: "Closed-Loop Operations",
      description: "Resource-efficient manufacturing and recovery.",
      detail:
        "Targeting closed-loop water systems, process heat recovery, and beneficial soil-amendment applications from organic digestate.",
      icon: RefreshCw,
      href: "/sustainability",
      badge: "Zero-Waste Design",
      color: "#ea6e2d",
    },
  ];

  return (
    <section
      id="industrial-opportunity"
      aria-label="India's Industrial Opportunity"
      className="py-12 sm:py-16 md:py-28 lg:py-32 bg-[#ffffff] border-t border-[#13271e]/8 relative overflow-hidden"
    >
      <div className="u-container u-container--1 u-container--pad">
        {/* Section Identifier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 md:mb-16 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06425]" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
              02 / NATIONAL PERSPECTIVE
            </span>
          </div>
          <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
            Domestic Resources • Strategic Industries • Long-Term Value
          </span>
        </div>

        {/* Section Headline & Editorial Perspective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10 sm:mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold block mb-3">
              India&apos;s Industrial Opportunity
            </span>
            <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.025em] leading-[1.12] text-[#13271e]">
              Domestic Resources.{" "}
              <span className="font-normal italic text-[#2d7a54]">
                Strategic Industries.
              </span>{" "}
              Long-Term Value.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-3">
            <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
              India&apos;s agricultural resources present an opportunity to
              strengthen domestic manufacturing, diversify energy supply and
              develop high-value industrial materials.
            </p>
            <p className="font-sans text-sm sm:text-base text-[#13271e]/70 font-light leading-relaxed">
              Rivanta Green is building its long-term industrial strategy around
              these opportunities—connecting resource availability with
              commercially driven manufacturing development.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid: 2 columns on tablet / small desktop (including 1127x866) to prevent word scrambling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 hover:border-[#13271e]/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 sm:mb-6">
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors shadow-xs flex-shrink-0"
                      style={{
                        backgroundColor: `${pillar.color}15`,
                        color: pillar.color,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#13271e]/60 font-semibold bg-white px-2.5 py-1 rounded border border-[#13271e]/8 whitespace-nowrap">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-lg sm:text-xl font-medium text-[#13271e] tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <div
                    className="font-sans text-xs sm:text-sm font-semibold mb-3"
                    style={{ color: pillar.color }}
                  >
                    {pillar.description}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#13271e]/70 font-light leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-[#13271e]/8">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#13271e] group-hover:text-[#e06425] transition-colors"
                  >
                    <span>Strategic Overview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

