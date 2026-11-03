"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  Target,
  Compass,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  TrendingUp,
  Cpu,
  Factory,
} from "lucide-react";

const STRATEGIC_VALUES = [
  {
    index: "01.",
    title: "Industrial Ambition",
    badge: "Long-Term Vision",
    description:
      "Developing scalable manufacturing infrastructure that converts underutilized domestic resources into high-value industrial inputs for key manufacturing sectors.",
    bg: "#fae9dc",
    textColor: "#13271e",
    accent: "#e06425",
    icon: Target,
    stat: "Integrated Industrial Development",
  },
  {
    index: "02.",
    title: "Resource Efficiency",
    badge: "Circular Stewardship",
    description:
      "Integrating zero-waste engineering and closed-loop process utility design to maximize material recovery while minimizing primary resource consumption.",
    bg: "#d6e8dc",
    textColor: "#13271e",
    accent: "#2d7a54",
    icon: Compass,
    stat: "Zero Liquid Discharge (ZLD) Design",
  },
  {
    index: "03.",
    title: "Corporate Accountability",
    badge: "Institutional Governance",
    description:
      "Operating with disciplined corporate governance, statutory compliance planning, and transparent frameworks for resource accounting and operational reporting.",
    bg: "#132c21",
    textColor: "#ffffff",
    accent: "#ea6e2d",
    icon: ShieldCheck,
    stat: "Disciplined Governance Standards",
  },
];

const DEVELOPMENT_MILESTONES = [
  {
    stage: "Stage 01",
    status: "Project Planning",
    title: "Feedstock Sourcing & Supply Chain Modeling",
    detail:
      "Developing regional agricultural residue collection frameworks, engaging prospective milling partners, and evaluating material handling logistics.",
  },
  {
    stage: "Stage 02",
    status: "In Preparation",
    title: "Facility Planning & Detailed Engineering",
    detail:
      "Advancing process engineering packages, preparing statutory clearance documentation, and assessing utility integration requirements for planned hubs.",
  },
  {
    stage: "Stage 03",
    status: "Strategic Evaluation",
    title: "Commercial Structuring & Downstream Pathways",
    detail:
      "Evaluating prospective industrial off-take arrangements, technology licensor qualification, and downstream biogenic material applications.",
  },
];

const STRATEGIC_PRIORITIES = [
  {
    title: "Domestic Supply Chain Resilience",
    description:
      "Strengthening domestic availability of biogenic silica and essential clean energy vectors to support Indian manufacturing competitiveness.",
    icon: Factory,
  },
  {
    title: "Rural Value Creation",
    description:
      "Generating secondary economic value for farming communities and rural logistics operators through organized biomass procurement.",
    icon: TrendingUp,
  },
  {
    title: "Energy & Materials Diversification",
    description:
      "Building commercial-scale capacity across Compressed Biogas (CBG) and evaluating Sustainable Aviation Fuel (SAF) production pathways.",
    icon: Cpu,
  },
  {
    title: "Environmental Stewardship",
    description:
      "Designing manufacturing facilities with continuous emissions controls, water recycling systems, and waste-heat recovery loops.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  const [activeMilestone, setActiveMilestone] = useState(1);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Corporate Profile"
        title="Building Industrial Value From"
        highlightedText="India's Resources."
        description="Rivanta Green Innovative Venture Private Limited is an emerging Indian industrial enterprise developing an integrated portfolio across renewable energy, advanced materials, sustainable fuels, and circular manufacturing."
        imageSrc="/images/company-innovation.jpg"
        breadcrumbs={[{ label: "About Us" }]}
        primaryCtaText="Explore Projects"
        primaryCtaHref="/projects"
        secondaryCtaText="Contact Corporate Desk"
        secondaryCtaHref="/contact"
        telemetryTag="Emerging Industrial Enterprise • Bhopal, India"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="ADVANCED MATERIALS — SUSTAINABLE FUELS — RENEWABLE ENERGY — RESOURCE RECOVERY — INDUSTRIAL INFRASTRUCTURE — BUILDING INDUSTRIAL VALUE FROM INDIA'S RESOURCES — "
        theme="light"
      />

      {/* Corporate Overview & Purpose */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Corporate Purpose</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                Industrial development built on{" "}
                <span className="text-[#a0b0a5]">responsible resource use.</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#13271e]/80 text-base md:text-lg font-light leading-relaxed reveal-up delay-200">
                <p>
                  India generates substantial volumes of agricultural residues every harvest season. Without structured industrial demand and organized collection logistics, valuable economic potential remains unutilized.
                </p>
                <p>
                  Rivanta Green was incorporated to convert these renewable resources into high-value industrial inputs: biogenic silica, clean biomethane, and circular materials that strengthen domestic manufacturing.
                </p>
              </div>

              {/* Vision & Mission Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 reveal-up delay-300">
                <div className="p-8 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs space-y-3 card-interactive">
                  <div className="w-10 h-10 rounded-xl bg-[#fae9dc] text-[#e06425] flex items-center justify-center font-mono text-sm font-semibold">
                    01
                  </div>
                  <h3 className="font-sans font-medium text-xl text-[#13271e]">
                    Strategic Vision
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    To build a competitive Indian industrial enterprise that creates sustainable economic value from domestic agricultural resources while advancing national manufacturing resilience.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-[#d6e8dc] text-[#13271e] space-y-3 card-interactive">
                  <div className="w-10 h-10 rounded-xl bg-[#2d7a54] text-white flex items-center justify-center font-mono text-sm font-semibold">
                    02
                  </div>
                  <h3 className="font-sans font-medium text-xl text-[#13271e]">
                    Operational Mission
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/85 font-light leading-relaxed">
                    To engineer, finance, and operate modern industrial manufacturing facilities that combine high-efficiency processing, environmental responsibility, and value for regional communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="py-20 md:py-28 bg-white border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-3xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Focus Areas</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] text-[#13271e] reveal-up delay-100">
              Four strategic priorities guiding our development.
            </h2>
            <p className="font-sans text-base md:text-lg text-[#13271e]/70 font-light mt-4 reveal-up delay-200">
              Each priority aligns commercial growth with national industrial objectives and measurable regional impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_PRIORITIES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/8 hover:border-[#e06425]/30 transition-all duration-300 card-interactive"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#13271e]/5 text-[#13271e] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#2d7a54]" />
                  </div>
                  <h3 className="font-sans font-medium text-lg text-[#13271e] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature 3-Color Card Trio */}
      <section className="w-full bg-transparent reveal-fade">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {STRATEGIC_VALUES.map((val, idx) => {
              const Icon = val.icon;
              const isDark = val.textColor === "#ffffff";

              return (
                <div
                  key={val.index}
                  style={{ backgroundColor: val.bg, color: val.textColor }}
                  className={`group relative min-h-[380px] md:min-h-[440px] lg:min-h-[480px] p-8 md:p-12 flex flex-col justify-between transition-all duration-500 overflow-hidden text-left card-interactive reveal-up delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between w-full opacity-70">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded bg-black/5 font-medium">
                      {val.badge}
                    </span>
                    <span className="font-mono text-xs md:text-sm tracking-wider uppercase">
                      {val.index}
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
                        style={{ color: val.accent }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-sans font-medium text-2xl md:text-3xl tracking-tight leading-tight group-hover:text-[#e06425] transition-colors">
                        {val.title}
                      </h3>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 ${
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
                      {val.description}
                    </p>
                    <div
                      className="pt-2 font-mono text-xs uppercase tracking-wider font-medium"
                      style={{ color: val.accent }}
                    >
                      {val.stat}
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${val.accent}25, transparent 70%)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industrial Development Phasing & Outlook */}
      <section className="py-20 md:py-32 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="mb-10 md:mb-16">
            <div className="u-ts--1 reveal-up">
              <span className="indicator-dot"></span>
              <span>Development Outlook</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative group reveal-up delay-100">
              <div className="relative aspect-[4/3] lg:aspect-[3/4] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border border-[#13271e]/8">
                <Image
                  src="/images/company-innovation.jpg"
                  alt="Rivanta Industrial Engineering Development"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#13271e]/60 via-transparent to-transparent opacity-60" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/80 backdrop-blur-md border border-white/40 text-xs font-mono uppercase tracking-wider text-[#13271e]">
                  <span>Industrial Planning & Engineering Desk — Bhopal</span>
                </div>
              </div>
            </div>

            {/* Right Copy */}
            <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 reveal-up delay-200">
              <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12] text-[#13271e]">
                A disciplined approach to long-term industrial capability.
              </h2>

              <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light leading-relaxed">
                Industrial development requires disciplined execution, verified engineering standards, and reliable feedstock networks. We evaluate every initiative against stringent commercial and operational benchmarks.
              </p>

              <div className="space-y-4 pt-2">
                {DEVELOPMENT_MILESTONES.map((m, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActiveMilestone(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer card-interactive ${
                      activeMilestone === idx
                        ? "bg-[#132c21] text-white border-[#132c21] shadow-lg"
                        : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span
                          className="font-mono text-xs uppercase tracking-wider font-semibold"
                          style={{
                            color: activeMilestone === idx ? "#ea6e2d" : "#e06425",
                          }}
                        >
                          {m.stage}
                        </span>
                        <span
                          className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded ${
                            activeMilestone === idx
                              ? "bg-white/10 text-white"
                              : "bg-[#2d7a54]/10 text-[#2d7a54]"
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#2d7a54]" />
                    </div>
                    <h3 className="font-sans font-medium text-lg mb-1">
                      {m.title}
                    </h3>
                    <p
                      className={`font-sans text-xs sm:text-sm font-light leading-relaxed ${
                        activeMilestone === idx
                          ? "text-white/75"
                          : "text-[#13271e]/70"
                      }`}
                    >
                      {m.detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4 flex-wrap">
                <Link href="/projects" className="u-btn--1">
                  <span className="btn_label">
                    View Project Initiatives
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
                  href="/contact"
                  className="u-btn--3"
                  data-label="Contact Corporate Desk"
                >
                  <span className="btn_label">Contact Corporate Desk</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
