"use client";

import React from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Sprout,
  ShieldCheck,
  Warehouse,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Recycle,
} from "lucide-react";

const LOGISTICS_PILLARS = [
  {
    title: "Regional Catchment Hubs (50–100 km Radius)",
    description:
      "Centralized aggregation hubs established in close proximity to high-density rice milling clusters, minimizing transport carbon footprint and haulage costs.",
    icon: MapPin,
    stat: "50-100 km Catchment Radius",
  },
  {
    title: "Weatherproof Covered Storage & Thermal Safety",
    description:
      "High-clearance ventilated hangars equipped with continuous temperature probes, active aeration tunnels, and automated spark/dust explosion suppression systems.",
    icon: Warehouse,
    stat: "Automated Spark Suppression",
  },
  {
    title: "NIR Moisture Verification & Quality Gates",
    description:
      "In-line Near-Infrared (NIR) sensors analyze incoming deliveries at weighbridges. Husk with moisture >12% is routed through solar drying tunnels before storage.",
    icon: ShieldCheck,
    stat: "<12% Moisture Quality Threshold",
  },
  {
    title: "Direct Miller & Farmer Producer (FPO) Contracts",
    description:
      "Long-term guaranteed off-take contracts with regional rice millers and Farmer Producer Organizations, injecting steady income into rural farming economies.",
    icon: Sprout,
    stat: "Multi-Year Supply Contracts",
  },
];

const SIGNATURE_VENTURE_CARDS = [
  {
    index: "01.",
    title: "Upstream Aggregation",
    badge: "Field Diversion",
    text: "Rice husk and field residues are collected from regional millers, preventing hundreds of thousands of tons of open-air agricultural burning each harvest season.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: MapPin,
    stat: "100% Burning Diversion",
  },
  {
    index: "02.",
    title: "Industrial Refining",
    badge: "Dual-Stream Processing",
    text: "Biomass is thermally calcined and refined to synthesize ultra-pure Green Silicon For Chips (9N purity / 99.9999999%), while organic residues generate biomethane and process steam.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Layers,
    stat: "Zero Residual Ash Waste",
  },
  {
    index: "03.",
    title: "Downstream Reintegration",
    badge: "Nutrient Recycling",
    text: "Digestate co-products are pelletized into Fermented Organic Manure (FOM) and delivered back to farmers, replenishing soil carbon and closing the loop.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Recycle,
    stat: "Closed-Loop Nutrient Return",
  },
];

export default function FeedstockPage() {
  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Supply Chain & Circularity"
        title="Building Resilient Supply Chains For"
        highlightedText="Agricultural Biomass."
        description="Our feedstock architecture combines regional aggregation logistics, automated quality testing, and multi-year miller partnerships to secure continuous biomass supplies without competing with food security."
        imageSrc="/images/feedstock-aggregation.jpg"
        breadcrumbs={[
          { label: "Circularity" },
          { label: "Feedstock Sourcing" },
        ]}
        primaryCtaText="Partner as Feedstock Supplier"
        primaryCtaHref="/contact"
        secondaryCtaText="Explore Green Silicon (9N)"
        secondaryCtaHref="/green-silicon"
        telemetryTag="NIR Sensor Testing • 100km Catchment"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="AGRONOMIC BIOMASS SOURCING — 50-100 KM CATCHMENT RADIUS — NIR MOISTURE VALIDATION (<12%) — FARMER PRODUCER PARTNERSHIPS (FPOs) — ZERO-WASTE CLOSED-LOOP CIRCULARITY — "
        theme="sage"
      />

      {/* Sourcing Strategy Editorial (Matching Homepage PlatformHgroup) */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Sourcing Model</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Transforming agricultural residues into{" "}
                <span className="text-[#a0b0a5]">dependable industrial inputs.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  Industrial processing requires rigid predictability in feedstock moisture, biogenic precursor yield, and supply security. Our aggregation network contracts directly with regional rice mills and agrarian Farmer Producer Organizations (FPOs).
                </p>
                <p>
                  By creating a reliable, transparent monetization channel for rice husk and crop residues, we transform regional waste into bankable economic value while eliminating the seasonal air pollution associated with crop residue burning.
                </p>
              </div>

              {/* Logistics Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {LOGISTICS_PILLARS.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-8 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs space-y-4 card-interactive reveal-up delay-${(idx + 1) * 75}`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#f0f4f1] text-[#2d7a54] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-sans font-medium text-xl text-[#13271e]">
                        {p.title}
                      </h3>
                      <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                        {p.description}
                      </p>
                      <div className="pt-2 font-mono text-xs uppercase tracking-wider text-[#e06425] font-medium border-t border-[#13271e]/8">
                        {p.stat}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center gap-4 flex-wrap reveal-up delay-300">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Become a Sourcing Partner
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
                  href="/green-silicon"
                  className="u-btn--3"
                  data-label="Explore Green Silicon Specs"
                >
                  <span className="btn_label">Explore Green Silicon Specs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 3-Color Card Trio: Closed Loop Circularity (Matching Homepage UspCards) */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {SIGNATURE_VENTURE_CARDS.map((card, idx) => {
              const Icon = card.icon;
              const isDark = card.textColor === "#ffffff";

              return (
                <div
                  key={card.index}
                  style={{ backgroundColor: card.bg, color: card.textColor }}
                  className={`group relative min-h-[380px] md:min-h-[440px] lg:min-h-[480px] p-8 md:p-12 flex flex-col justify-between transition-all duration-500 overflow-hidden text-left card-interactive reveal-up delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between w-full opacity-70">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/5 font-medium">
                      {card.badge}
                    </span>
                    <span className="font-mono text-xs md:text-sm tracking-wider uppercase">
                      {card.index}
                    </span>
                  </div>

                  <div className="my-auto py-6">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${
                        isDark ? "bg-white/10" : "bg-black/5"
                      }`}
                    >
                      <Icon
                        className="w-8 h-8 md:w-10 md:h-10 transition-colors"
                        style={{ color: card.accent }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-medium text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-[#e06425] transition-colors">
                        {card.title}
                      </h3>
                      <div
                        className={`card-arrow-circle w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isDark ? "bg-white/10 text-white" : "bg-black/5 text-[#13271e]"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <p
                      className={`font-sans text-sm md:text-base leading-relaxed font-light ${
                        isDark ? "text-white/80" : "text-[#13271e]/80"
                      }`}
                    >
                      {card.text}
                    </p>
                    <div className="pt-2 font-mono text-xs uppercase tracking-wider font-medium" style={{ color: card.accent }}>
                      {card.stat}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${card.accent}25, transparent 70%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
