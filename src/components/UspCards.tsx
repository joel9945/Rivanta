import React from "react";
import Link from "next/link";
import { Sparkles, Flame, Fuel, ArrowUpRight } from "lucide-react";

const CARDS = [
  {
    index: "01.",
    title: "Green Silicon For Chips",
    badge: "9N Purity Flagship",
    text: "Synthesizing ultra-high purity Green Silicon (purity 9N / 99.9999999%) from circular sustainable feedstocks to supply semiconductor chip foundries, photovoltaic wafers, and advanced microelectronics.",
    bg: "#fae9dc",
    textColor: "#13271e",
    icon: Sparkles,
    accent: "#e06425",
    href: "/green-silicon",
  },
  {
    index: "02.",
    title: "Compressed Biogas (CBG)",
    badge: "Renewable Gas Pathway",
    text: "Harnessing regional agricultural biomass residues through anaerobic digestion, biological desulfurization, and biomethane enrichment for clean mobility and industrial off-take.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    icon: Flame,
    accent: "#2d7a54",
    href: "/cbg",
  },
  {
    index: "03.",
    title: "Sustainable Aviation Fuel",
    badge: "Synthetic Hydrocarbons",
    text: "Evaluating technology licensors and processing pathways to synthesize drop-in synthetic paraffinic kerosene (SAF) to accelerate aviation sector decarbonization.",
    bg: "#132c21",
    textColor: "#ffffff",
    icon: Fuel,
    accent: "#ea6e2d",
    href: "/saf",
  },
];

export default function UspCards() {
  return (
    <section id="ventures" className="w-full bg-transparent">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            const isDark = card.textColor === "#ffffff";

            return (
              <Link
                key={card.index}
                href={card.href}
                suppressHydrationWarning
                style={{ backgroundColor: card.bg, color: card.textColor }}
                className={`group relative min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] p-8 sm:p-10 md:p-12 flex flex-col justify-between transition-all duration-500 overflow-hidden text-left card-interactive reveal-up delay-${(idx + 1) * 100}`}
              >
                {/* Index & Badge in Top Row */}
                <div className="flex items-center justify-between w-full opacity-75 z-10">
                  <span
                    className={`font-mono text-[10.5px] uppercase tracking-wider px-2.5 py-1 rounded font-medium ${
                      isDark ? "bg-white/10 text-white" : "bg-black/5 text-[#13271e]"
                    }`}
                  >
                    {card.badge}
                  </span>
                  <span className="font-mono text-xs md:text-sm tracking-wider uppercase font-medium">
                    {card.index}
                  </span>
                </div>

                {/* Tactile Icon in Middle */}
                <div className="my-auto py-8 z-10">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm ${
                      isDark ? "bg-white/10" : "bg-black/5"
                    }`}
                  >
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10"
                      style={{ color: card.accent }}
                    />
                  </div>
                </div>

                {/* Card Content at bottom */}
                <div className="flex flex-col space-y-3 z-10">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-sans font-medium text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-[#e06425] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <div
                      className={`card-arrow-circle w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isDark ? "bg-white/10 text-white" : "bg-black/5 text-[#13271e]"
                      } group-hover:bg-[#e06425] group-hover:text-white`}
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p
                    className={`font-sans text-sm md:text-base leading-relaxed font-light ${
                      isDark ? "text-white/80" : "text-[#13271e]/80"
                    }`}
                  >
                    {card.text}
                  </p>
                </div>

                {/* Subtle Hover Ambient Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 80% 20%, ${
                      card.accent
                    }20, transparent 70%)`,
                  }}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
