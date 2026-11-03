import React from "react";
import Link from "next/link";
import { ArrowUpRight, Users, Truck, Briefcase, Award, TrendingUp, ShieldCheck, Factory, Lightbulb } from "lucide-react";

export default function SharedValueAndContribution() {
  return (
    <>
      {/* 1. Creating Shared Value: Farmers & Communities */}
      <section
        id="communities"
        aria-label="Farmers and Communities"
        className="py-20 md:py-32 bg-[#ffffff] border-t border-[#13271e]/8"
      >
        <div className="u-container u-container--1 u-container--pad">
          {/* Section Identifier */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 md:mb-16 border-b border-[#13271e]/10 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#e06425]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
                06 / FARMERS & REGIONAL COMMUNITIES
              </span>
            </div>
            <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
              Rural Economic Integration
            </span>
          </div>

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-18">
            <div className="lg:col-span-7">
              <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-[#13271e]">
                Creating Value Beyond{" "}
                <span className="font-normal italic text-[#e06425]">
                  Industry.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
              <p className="font-sans text-base sm:text-lg text-[#13271e]/80 font-light leading-relaxed">
                Our proposed agricultural sourcing and industrial initiatives aim to create additional economic opportunities for farming communities, regional enterprises, and skilled workers.
              </p>
              <div className="pt-2">
                <Link
                  href="/feedstock"
                  className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-[#13271e] hover:text-[#e06425] transition-colors duration-200"
                >
                  <span className="border-b border-[#13271e]/25 group-hover:border-[#e06425] pb-0.5 transition-colors duration-200">
                    Feedstock Procurement Framework
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#e06425] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Rural & Community Opportunity */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="p-7 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#e06425] flex items-center justify-center shadow-xs border border-[#13271e]/8">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight mb-2">
                  Agricultural Procurement
                </h3>
                <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                  Structured commercial agreements with regional farmer collectives and agricultural aggregators for seasonal biomass residues.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#2d7a54] flex items-center justify-center shadow-xs border border-[#13271e]/8">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight mb-2">
                  Rural Supply Chains & Logistics
                </h3>
                <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                  Developing local transport, storage, and handling networks, creating recurring business for rural logistics operators.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#13271e] flex items-center justify-center shadow-xs border border-[#13271e]/8">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight mb-2">
                  Employment & Skills
                </h3>
                <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                  Generating direct and indirect manufacturing roles alongside technical skills development for local youth and engineering personnel.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#f8faf8] border border-[#13271e]/8 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white text-[#c47a27] flex items-center justify-center shadow-xs border border-[#13271e]/8">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-[#13271e] tracking-tight mb-2">
                  Community Engagement
                </h3>
                <p className="font-sans text-sm text-[#13271e]/75 font-light leading-relaxed">
                  Fostering transparent, responsible community relationships focused on regional infrastructure improvement and ecological well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Contribution to India */}
      <section
        id="contribution"
        aria-label="Contribution to India"
        className="py-20 md:py-32 bg-[#13271e] text-white relative overflow-hidden"
      >
        <div className="u-container u-container--1 u-container--pad relative z-10">
          {/* Section Identifier */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-12 md:mb-16 border-b border-white/10 gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f9a65c]" />
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/75 font-semibold">
                07 / NATIONAL INDUSTRIAL PRIORITIES
              </span>
            </div>
            <span className="font-mono text-xs text-white/50 uppercase tracking-wider">
              Long-Term Economic Contribution
            </span>
          </div>

          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 md:mb-18">
            <div className="lg:col-span-7">
              <h2 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] tracking-[-0.02em] leading-[1.14] text-white">
                Contributing to India's{" "}
                <span className="font-normal italic text-[#f9a65c]">
                  Industrial Growth.
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 pt-1 sm:pt-2">
              <p className="font-sans text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Rivanta's long-term development strategy seeks to connect domestic resources with manufacturing opportunities, supporting industrial diversification, regional economic activity, and more resilient supply chains.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 font-sans text-sm md:text-base font-medium text-white hover:text-[#f9a65c] transition-colors duration-200"
                >
                  <span className="border-b border-white/30 group-hover:border-[#f9a65c] pb-0.5 transition-colors duration-200">
                    Connect With Corporate Desk
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#f9a65c] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 4 Strategic Themes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-4">
            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#f9a65c] flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Domestic Manufacturing
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Supporting capital investment in domestic industrial materials and alternative gaseous energy capabilities.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#86efac] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Supply-Chain Resilience
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Developing qualified domestic alternatives to reduce exposure to international supply-chain concentration.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#f9a65c] flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Energy Diversification
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Expanding the role of domestic renewable gases in municipal distribution networks and industrial mobility.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-medium text-white tracking-tight mb-2">
                  Industrial Innovation
                </h3>
                <p className="font-sans text-sm text-white/75 font-light leading-relaxed">
                  Fostering engineering partnerships, technology evaluation, and commercial research with domestic and international institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
