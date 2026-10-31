"use client";

import React, { useState } from "react";
import SubpageHero from "@/components/SubpageHero";
import ContactForm from "@/components/ContactForm";
import MarqueeText from "@/components/MarqueeText";
import {
  Building,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const DEPARTMENTS = [
  {
    role: "Commercial Off-Take Desk",
    email: "commercial@rivantagreen.com",
    focus: "Green Silicon (6N purity / 99.999%) product specifications, material trials, sample requests, and multi-year supply contracts.",
  },
  {
    role: "Feedstock Sourcing & Logistics",
    email: "sourcing@rivantagreen.com",
    focus: "Rice milling aggregation partnerships, biomass logistics, and regional cooperative off-take agreements.",
  },
  {
    role: "Capital & Project Finance",
    email: "investors@rivantagreen.com",
    focus: "Infrastructure equity, development finance (DFI) collaboration, and joint venture project structures.",
  },
  {
    role: "General Corporate Desk",
    email: "contact@rivantagreen.com",
    focus: "Official corporate correspondence, regulatory communications, vendor registrations, and media inquiries.",
  },
];

const FAQS = [
  {
    q: "How can industrial clients request testing samples of Green Silicon?",
    a: "Qualified technology, solar wafer, and electronics procurement teams can request certified 6N purity (99.999%) testing lots. Submit your inquiry selecting 'Green Silicon (6N Purity / 99.999%)' with your target material or crystal specifications.",
  },
  {
    q: "What is the typical commercial off-take agreement structure for Compressed Biogas (CBG)?",
    a: "We structure 5 to 10 year take-or-pay supply contracts with City Gas Distribution (CGD) companies and industrial off-takers, delivered via pipeline injection or 250-bar mobile cascade storage banks.",
  },
  {
    q: "How can regional rice millers and Farmer Producer Organizations (FPOs) partner with Rivanta?",
    a: "We execute multi-year biomass supply agreements offering guaranteed floor pricing, scheduled trailer collections, and on-site moisture testing to establish dependable secondary income for agricultural communities.",
  },
  {
    q: "Are laboratory Certificates of Analysis (COA) available for material lots?",
    a: "Yes. Every production run is accompanied by an independent accredited laboratory COA documenting amorphous phase verification via XRD, trace metals via ICP-OES, and specific surface area via BET nitrogen adsorption.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Official Corporate Desk"
        title="Direct Channels For Commercial And"
        highlightedText="Technical Engagement."
        description="Connect directly with our engineering, feedstock logistics, and commercial off-take desks to discuss project parameters, Green Silicon (6N) testing lots, or strategic joint ventures."
        breadcrumbs={[{ label: "Contact & Corporate Desk" }]}
        primaryCtaText="Submit Formal Inquiry"
        primaryCtaHref="#inquiry-form"
        secondaryCtaText="View Corporate Background"
        secondaryCtaHref="/about"
        telemetryTag="Direct Response • 24hr Technical SLA"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="OFFICIAL CORPORATE DESK — COMMERCIAL OFF-TAKE INQUIRIES — TESTING SAMPLE LOTS — FEEDSTOCK AGGREGATION PARTNERSHIPS — 24HR RESPONSE SLA — "
        theme="light"
      />

      {/* Main Two-Column Contact Section */}
      <section id="inquiry-form" className="py-20 md:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Department Pathways */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="u-ts--1 mb-4 reveal-up">
                  <span className="indicator-dot"></span>
                  <span>Corporate Directory</span>
                </div>
                <h2 className="font-sans font-normal text-3xl sm:text-4xl tracking-tight text-[#13271e] reveal-up delay-100">
                  Specialized departmental desks.
                </h2>
                <p className="font-sans text-sm md:text-base text-[#13271e]/75 font-light mt-2 leading-relaxed reveal-up delay-200">
                  Route your inquiry directly to the specialized engineering or commercial team responsible for project qualification.
                </p>
              </div>

              <div className="space-y-4">
                {DEPARTMENTS.map((dept, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs space-y-2 card-interactive reveal-up delay-${(idx + 1) * 75}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold">
                        {dept.role}
                      </span>
                    </div>
                    <a
                      href={`mailto:${dept.email}`}
                      className="font-sans font-medium text-base text-[#13271e] hover:text-[#e06425] transition-colors block"
                    >
                      {dept.email}
                    </a>
                    <p className="font-sans text-xs text-[#13271e]/70 font-light leading-relaxed">
                      {dept.focus}
                    </p>
                  </div>
                ))}
              </div>

              {/* Entity Info Box */}
              <div className="p-6 rounded-2xl bg-[#d6e8dc] text-[#13271e] space-y-3 card-interactive reveal-up">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#2d7a54]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#2d7a54] font-semibold">
                    Registered Corporate Entity
                  </span>
                </div>
                <div className="font-sans font-medium text-base">
                  RIVANTA Green Innovative Venture Private Limited
                </div>
                <p className="font-sans text-xs text-[#13271e]/80 font-light leading-relaxed">
                  Incorporated as an industrial green manufacturing venture operating in biomass valorization, Green Silicon (6N purity / 99.999%), and renewable energy infrastructure.
                </p>
                <div className="pt-2 border-t border-[#13271e]/10 flex items-center gap-2 font-mono text-xs text-[#13271e]/70">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon – Fri: 09:00 – 18:00 IST</span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Functional Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#13271e]/10 shadow-lg card-interactive reveal-up delay-200">
                <div className="h-1.5 w-full rounded-full flowline-animated mb-8" />
                <div className="mb-8">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#2d7a54]" />
                    <span>Direct Server-Validated Portal</span>
                  </div>
                  <h3 className="font-sans font-medium text-2xl sm:text-3xl tracking-tight text-[#13271e]">
                    Formal Business Inquiry
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/70 font-light mt-1">
                    Provide your organization details and partnership scope. Our technical desk responds within 24 business hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial FAQ Accordion Section */}
      <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
        <div className="u-container u-container--1 u-container--pad">
          <div className="max-w-2xl mb-12">
            <div className="u-ts--1 mb-4 reveal-up">
              <span className="indicator-dot"></span>
              <span>Common Questions</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e] reveal-up delay-100">
              Commercial engagement & procurement FAQ.
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#13271e]/10 shadow-xs overflow-hidden transition-all duration-300 card-interactive reveal-up delay-150"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-sans font-medium text-lg text-[#13271e]">
                      {faq.q}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#f6f8f6] flex items-center justify-center flex-shrink-0 text-[#13271e]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm font-sans text-[#13271e]/80 font-light leading-relaxed border-t border-[#13271e]/6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
