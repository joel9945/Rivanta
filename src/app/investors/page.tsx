"use client";

import React, { useState } from "react";
import Link from "next/link";
import SubpageHero from "@/components/SubpageHero";
import MarqueeText from "@/components/MarqueeText";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Lock,
  ArrowRight,
} from "lucide-react";

const COMMERCIAL_TRACKS = [
  {
    id: "offtake",
    title: "Multi-Year Industrial Off-Take",
    subtitle: "Green Silicon (9N) & CBG Supply Agreements",
    detail: "Structuring 5 to 10 year off-take agreements with semiconductor chip foundries, solar wafer producers, and regional City Gas Distribution (CGD) entities.",
    terms: "Long-Term Take-or-Pay • Price Indexing Mechanisms",
    icon: TrendingUp,
  },
  {
    id: "project-equity",
    title: "Green Infrastructure Project Equity",
    subtitle: "Asset-Level Capital Structuring",
    detail: "Partnering with institutional green funds, development finance institutions (DFIs), and sovereign sustainability vehicles to co-capitalize commercial manufacturing facilities.",
    terms: "Senior Secured Debt • Infrastructure Equity Tranches",
    icon: Building2,
  },
  {
    id: "feedstock-jv",
    title: "Catchment Joint Ventures & FPO Links",
    subtitle: "Agronomic Upstream Integration",
    detail: "Establishing structured joint ventures with large rice milling clusters and regional agricultural organizations, ensuring long-term biomass security with shared upside.",
    terms: "Indexed Biomass Contracts • Farmer Prosperity Models",
    icon: ShieldCheck,
  },
];

const RISK_PILLARS = [
  {
    category: "Feedstock Price Volatility",
    mitigation: "Secured through 3 to 5 year bilateral supply contracts with regional millers within a 100km radius, combined with indexed buffer storage facilities.",
    rating: "Hedging Mechanism: Contractual Collars",
  },
  {
    category: "Technology & Process Risk",
    mitigation: "Licensed equipment packages backed by vendor performance warranties and process completion guarantees under turnkey EPC structures.",
    rating: "Warranties: Tier-1 Technology Licensors",
  },
  {
    category: "Market Off-Take Risk",
    mitigation: "Dual revenue model pairing high-margin electronic materials (Green Silicon For Chips with 9N purity) with regulated, government-backed clean mobility fuel programs (SATAT).",
    rating: "Off-Take: Multi-Sector Diversification",
  },
  {
    category: "Environmental & Regulatory",
    mitigation: "Zero Liquid Discharge (ZLD) closed-loop engineering and ISO 14064 verified carbon avoidance eliminating compliance penalties.",
    rating: "Audit: Accredited Third-Party Verification",
  },
];

export default function InvestorsPage() {
  const [activeTrack, setActiveTrack] = useState(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Commercial Engagement"
        title="Institutional capital & commercial off-take for"
        highlightedText="sustainable industrial assets."
        description="We structure disciplined commercial partnerships across industrial off-take, project capital, and feedstock joint ventures — delivering bankable green manufacturing assets with verified unit economics."
        imageSrc="/images/company-innovation.jpg"
        breadcrumbs={[{ label: "Commercial" }, { label: "Investors & Off-Take" }]}
        primaryCtaText="Engage on Commercial Off-Take"
        primaryCtaHref="/contact"
        secondaryCtaText="Review Facility Phasing"
        secondaryCtaHref="/projects"
        telemetryTag="Bankable Green Assets • Institutional Governance"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="COMMERCIAL BANKABILITY — LONG-TERM TAKE-OR-PAY OFF-TAKE — INSTITUTIONAL ESG GOVERNANCE — TIER-1 TECHNOLOGY LICENSING — DUAL REVENUE ENGINE — "
        theme="light"
      />

      {/* Commercial Pathways Section */}
      <section className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <div className="u-ts--1 sticky top-28 reveal-up">
                <span className="indicator-dot"></span>
                <span>Commercial Architecture</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col space-y-8 md:space-y-10">
              <div>
                <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.12] text-[#13271e] reveal-up delay-100">
                  Engineered for commercial bankability and{" "}
                  <span className="text-[#a0b0a5]">institutional governance.</span>
                </h2>
                <p className="font-sans text-base md:text-lg text-[#13271e]/80 font-light mt-4 leading-relaxed reveal-up delay-200">
                  Our capital model pairs high-margin advanced biomaterials with inflation-hedged renewable gas off-take agreements — delivering resilient cash flows insulated from cyclical commodity shocks.
                </p>
              </div>

              {/* Commercial Tracks Grid */}
              <div className="space-y-4 pt-2">
                {COMMERCIAL_TRACKS.map((track, idx) => {
                  const Icon = track.icon;
                  const isSelected = activeTrack === idx;

                  return (
                    <div
                      key={track.id}
                      onClick={() => setActiveTrack(idx)}
                      className={`p-8 rounded-3xl border transition-all duration-400 cursor-pointer card-interactive reveal-up delay-${(idx + 1) * 100} ${
                        isSelected
                          ? "bg-[#132c21] text-white border-[#132c21] shadow-xl"
                          : "bg-white text-[#13271e] border-[#13271e]/10 hover:border-[#e06425]/40 shadow-xs"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-4" style={{ borderColor: isSelected ? "rgba(255,255,255,0.12)" : "rgba(19,39,30,0.08)" }}>
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? "bg-white/10 text-[#ea6e2d]" : "bg-[#f6f8f6] text-[#2d7a54]"}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-mono text-xs uppercase tracking-wider block" style={{ color: isSelected ? "#ea6e2d" : "#e06425" }}>
                              {track.subtitle}
                            </span>
                            <h3 className="font-sans font-medium text-xl md:text-2xl">
                              {track.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <p className={`font-sans text-sm md:text-base font-light leading-relaxed mb-4 ${isSelected ? "text-white/85" : "text-[#13271e]/75"}`}>
                        {track.detail}
                      </p>

                      <div className="pt-3 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono" style={{ borderColor: isSelected ? "rgba(255,255,255,0.1)" : "rgba(19,39,30,0.06)", color: isSelected ? "#ea6e2d" : "#2d7a54" }}>
                        <span>{track.terms}</span>
                        <Link
                          href="/contact"
                          className={`inline-flex items-center gap-1.5 uppercase font-medium hover:underline ${isSelected ? "text-white" : "text-[#13271e]"}`}
                        >
                          <span>Initiate Dialogue</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Mitigation Matrix */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-2xl mb-12 md:mb-16">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Risk Management</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
              Structured risk mitigation matrix.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {RISK_PILLARS.map((r, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-3xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col justify-between space-y-4 card-interactive reveal-up delay-${(idx + 1) * 75}`}
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                    Risk Category 0{idx + 1}
                  </span>
                  <h3 className="font-sans font-medium text-xl text-[#13271e]">
                    {r.category}
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                    {r.mitigation}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#13271e]/8 font-mono text-xs text-[#2d7a54] font-medium">
                  {r.rating}
                </div>
              </div>
            ))}
          </div>

          {/* Virtual Data Room CTA Banner */}
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#132c21] text-white flex flex-col md:flex-row items-center justify-between gap-8 card-interactive reveal-up delay-200 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 flowline-animated" />
            <div className="max-w-xl space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#ea6e2d]">
                <Lock className="w-3.5 h-3.5" />
                <span>Confidential Investor Data Room</span>
              </div>
              <h3 className="font-sans font-medium text-2xl sm:text-3xl">
                Access detailed financial models, mass balances & FEED reports.
              </h3>
              <p className="font-sans text-sm text-white/75 font-light">
                Available to verified institutional equity partners, off-take procurement executives, and accredited financial institutions under mutual NDA.
              </p>
            </div>

            <Link href="/contact" className="u-btn--1 flex-shrink-0">
              <span className="btn_label">
                Request Data Room Access
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
      </section>
    </>
  );
}
