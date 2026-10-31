"use client";

import MarqueeText from "@/components/MarqueeText";
import SubpageHero from "@/components/SubpageHero";
import {
    Activity,
    AlertCircle,
    ArrowRight,
    ArrowUpRight,
    Flame,
    Fuel,
    Plane,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const SPEC_METRICS = [
  {
    id: "drop-in",
    value: "100%",
    label: "Drop-In Parity",
    detail:
      "Identical freezing point (-47°C), flash point, and density to conventional Jet A-1 kerosene.",
    trend: "ASTM D7566 Annex",
  },
  {
    id: "emissions",
    value: "Up to -80%",
    label: "Lifecycle GHG Reduction",
    detail:
      "Cradle-to-wake greenhouse gas displacement assessed under ICAO CORSIA baseline standards.",
    trend: "CORSIA Audited",
  },
  {
    id: "feedstock-class",
    value: "Non-Food",
    label: "Feedstock Integrity",
    detail:
      "Strictly non-competing second-generation lignocellulosic residues and non-edible lipid fractions.",
    trend: "Zero Land-Use Conflict",
  },
  {
    id: "aromatics",
    value: "Low Aromatic",
    label: "Soot & Particulate Abatement",
    detail:
      "Near-zero sulfur and low aromatic content dramatically lowers contrail formation in upper atmospheres.",
    trend: "Cleaner Combustion",
  },
];

const SIGNATURE_VENTURE_CARDS = [
  {
    index: "01.",
    title: "Alcohol-to-Jet (ATJ)",
    badge: "ASTM D7566 Annex A5",
    text: "Catalytic dehydration of non-food biological alcohols into olefins, followed by oligomerization, hydrogenation, and precision distillation into synthetic paraffinic kerosene.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Fuel,
    stat: "High Paraffinic Selectivity",
  },
  {
    index: "02.",
    title: "Gasification + FT Synthesis",
    badge: "ASTM D7566 Annex A1",
    text: "High-temperature gasification of dry agricultural straw into clean synthesis gas (syngas: CO + H2), followed by catalytic hydrocarbon chain growth via Fischer-Tropsch reactors.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Flame,
    stat: "Multi-Biomass Resilience",
  },
  {
    index: "03.",
    title: "HEFA Co-Processing",
    badge: "ASTM D7566 Annex A2",
    text: "Catalytic deoxygenation and isomerization of non-edible industrial fats and waste cooking fractions, producing branched synthetic hydrocarbons ready for immediate pipeline blending.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: Plane,
    stat: "Commercial Aviation Maturity",
  },
];

const CRITERIA_STEPS = [
  {
    step: "01",
    title: "Zero Infrastructure Retooling Required",
    detail:
      "Synthesized drop-in SAF flows through existing airport hydrant pipelines, storage terminals, and standard commercial jet engine architectures without modification.",
  },
  {
    step: "02",
    title: "Strict Food-vs-Fuel Ringfencing",
    detail:
      "Feedstock aggregation strictly excludes arable food crops, utilizing exclusively regional agricultural residues and second-generation non-edible materials.",
  },
  {
    step: "03",
    title: "Transparent Technological Disclosure",
    detail:
      "Our SAF pathway remains in technological feasibility and technology-licensing screening, with disciplined evaluation of front-end engineering design (FEED).",
  },
];

export default function SafPage() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Synthetic Clean Hydrocarbon Pathway"
        title="Engineering Drop-In Synthetic Fuels For"
        highlightedText="Sustainable Aviation."
        description="Rivanta Green is evaluating advanced technology pathways and licensors to synthesize drop-in Sustainable Aviation Fuel (SAF) from non-food biological residues — accelerating aviation decarbonization."
        imageSrc="/images/newsroom-solar.jpg"
        breadcrumbs={[
          { label: "Ventures", href: "/#ventures" },
          { label: "Aviation Fuel (SAF)" },
        ]}
        primaryCtaText="Inquire on Technology Dialogue"
        primaryCtaHref="/contact"
        secondaryCtaText="View Infrastructure Projects"
        secondaryCtaHref="/projects"
        telemetryTag="ASTM D7566 Standards • CORSIA Compliant"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="SUSTAINABLE AVIATION FUEL (SAF) — ASTM D7566 SYNTHETIC KEROSENE — ALCOHOL-TO-JET (ATJ) — GASIFICATION-FT — 80% LIFECYCLE GHG ABATEMENT — NON-FOOD BIOMASS — "
        theme="dark"
      />

      {/* Overview Layout (Matching Homepage PlatformHgroup) */}
      <section id="details" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>The Aviation Mandate</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Aviation cannot decarbonize with batteries alone.{" "}
                <span className="text-[#a0b0a5]">
                  Drop-in synthetic fuels are vital.
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  Long-haul commercial aviation requires immense volumetric and
                  gravimetric energy density. Battery and hydrogen technologies
                  cannot bridge transcontinental flights without heavy payload
                  compromises. Drop-in synthetic paraffinic kerosene is the
                  essential near-term solution.
                </p>
                <p>
                  Rivanta Green is actively evaluating licensed conversion
                  technologies that transform regional agricultural residues
                  into certified drop-in fuels matching every physical criterion
                  of Jet A-1 kerosene.
                </p>
              </div>

              {/* Status Disclosure Pill */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs flex items-start gap-4 reveal-up delay-300">
                <AlertCircle className="w-5 h-5 text-[#e06425] flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h3 className="font-sans font-medium text-base text-[#13271e]">
                    Development Status Disclosure
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#13271e]/75 font-light leading-relaxed">
                    Our SAF initiative is in the technological assessment and
                    feasibility phase. We are screening licensed conversion
                    technologies, conducting preliminary feedstock logistics
                    modeling, and structuring dialogue with regional refining
                    and airline partners.
                  </p>
                </div>
              </div>

              <div className="pt-2 reveal-up delay-400">
                <Link href="/contact" className="u-btn--1">
                  <span className="btn_label">
                    Initiate Technical Collaboration
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

      {/* Signature 3-Color Card Trio (Matching Homepage UspCards) */}
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
                          isDark
                            ? "bg-white/10 text-white"
                            : "bg-black/5 text-[#13271e]"
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
                    <div
                      className="pt-2 font-mono text-xs uppercase tracking-wider font-medium"
                      style={{ color: card.accent }}
                    >
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

      {/* Interactive Specifications Deck (Matching Homepage TelemetrySection) */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
            <div>
              <div className="u-ts--1 mb-4 reveal-up">
                <span className="indicator-dot"></span>
                <span>International Standards</span>
              </div>
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Rigorous drop-in fuel specifications & criteria.
              </h2>
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex items-center gap-2 reveal-up delay-200">
              <Activity className="w-4 h-4 text-[#e06425]" />
              <span>ASTM D7566 • Def Stan 91-091</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPEC_METRICS.map((metric, idx) => {
              const isSelected = selectedMetric === idx;

              return (
                <div
                  key={metric.id}
                  onClick={() => setSelectedMetric(idx)}
                  className={`relative rounded-2xl p-8 transition-all duration-400 cursor-pointer flex flex-col justify-between min-h-[260px] border card-interactive reveal-up delay-${(idx + 1) * 100} ${
                    isSelected
                      ? "bg-[#132c21] text-white border-[#132c21] shadow-xl -translate-y-1.5"
                      : "bg-white text-[#13271e] border-[#13271e]/8 hover:border-[#e06425]/40 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-white/10 text-[#ea6e2d]"
                          : "bg-[#f6f8f6] text-[#13271e]"
                      }`}
                    >
                      <Fuel className="w-6 h-6" />
                    </div>
                    <span
                      className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isSelected
                          ? "bg-[#ea6e2d] text-white"
                          : "bg-[#f0f4f1] text-[#2d7a54]"
                      }`}
                    >
                      {metric.trend}
                    </span>
                  </div>

                  <div>
                    <div
                      className={`font-sans font-light tracking-tight text-3xl sm:text-4xl md:text-[2.6rem] leading-none mb-3 ${
                        isSelected ? "text-white" : "text-[#13271e]"
                      }`}
                    >
                      {metric.value}
                    </div>
                    <div
                      className={`font-mono text-xs uppercase tracking-wider mb-2 font-medium ${
                        isSelected ? "text-[#ea6e2d]" : "text-[#13271e]/70"
                      }`}
                    >
                      {metric.label}
                    </div>
                    <p
                      className={`text-xs leading-relaxed ${
                        isSelected ? "text-white/70" : "text-[#13271e]/60"
                      }`}
                    >
                      {metric.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance & Technical Evaluation */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Evaluation Pillars</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
                Evaluating commercial off-take and technology licensors.
              </h2>
              <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light max-w-2xl reveal-up delay-200">
                To guarantee zero fuel incompatibility and full certification,
                our technical review aligns with global airline consortia and
                the International Civil Aviation Organization (ICAO).
              </p>

              <div className="space-y-4 pt-4">
                {CRITERIA_STEPS.map((s, idx) => (
                  <div
                    key={s.step}
                    className={`p-6 sm:p-8 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-4 items-center card-interactive reveal-up delay-${(idx + 1) * 75}`}
                  >
                    <div className="sm:col-span-2 font-mono text-3xl font-light text-[#e06425]">
                      {s.step}
                    </div>
                    <div className="sm:col-span-10 space-y-1">
                      <h3 className="font-sans font-medium text-lg md:text-xl text-[#13271e]">
                        {s.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#13271e]/70 font-light leading-relaxed">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center gap-4 reveal-up delay-300">
                <Link href="/contact" className="u-btn--1 w-full sm:w-auto">
                  <span className="btn_label">
                    Initiate Technical Dialogue
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
                  className="u-btn--3"
                  data-label="View Infrastructure Projects"
                >
                  <span className="btn_label">View Infrastructure Projects</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
