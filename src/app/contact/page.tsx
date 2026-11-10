"use client";

import React, { useState } from "react";
import SubpageHero from "@/components/SubpageHero";
import ContactForm from "@/components/ContactForm";
import MarqueeText from "@/components/MarqueeText";
import {
  Building,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const OFFICES = [
  {
    badge: "Corporate & Operations Office",
    entity: "Rivanta Green Innovative Venture Private Limited",
    lines: [
      "B-29, 3rd Floor, Kasturba Nagar,",
      "Next to Lake City Hospital, Chetak Bridge,",
      "Bhopal, Madhya Pradesh, 462023 - India.",
    ],
    phone: "+91 98930 25375",
    phoneTel: "+919893025375",
    email: "info@rivantagreen.com",
    website: "www.rivantagreen.com",
    webUrl: "https://www.rivantagreen.com",
    isPrimary: true,
  },
  {
    badge: "Registered Office (MCA)",
    lines: [
      "E4/271 Arera Colony, Huzur,",
      "Bhopal, Madhya Pradesh, 462016 - India.",
    ],
    phone: "+91 98930 25375",
    phoneTel: "+919893025375",
    email: "support@rivantagreen.com",
    website: "www.rivantagreen.com",
    webUrl: "https://www.rivantagreen.com",
    isPrimary: false,
  },
];

const DEPARTMENTS = [
  {
    role: "Corporate Inquiries & Commercial Desk",
    email: "info@rivantagreen.com",
    phone: "+91 98930 25375",
    focus: "Official corporate correspondence, executive offices, commercial off-take, strategic industrial partnerships, and media relations.",
  },
  {
    role: "Operations & Partner Support Desk",
    email: "support@rivantagreen.com",
    phone: "+91 98930 25375",
    focus: "Feedstock sourcing coordination, partner operations, technical documentation assistance, and operational inquiries.",
  },
];

const FAQS = [
  {
    q: "How can industrial partners inquire about Biogenic Silica?",
    a: "Industrial procurement and technical teams in rubber compounding, construction materials, and specialty coatings can request material specification summaries and discuss technical feasibility. Submit your inquiry selecting 'Advanced Materials & Biogenic Silica' along with application requirements.",
  },
  {
    q: "What commercial structures are used for Compressed Biogas (CBG) off-take?",
    a: "Commercial off-take discussions for planned facilities are structured around long-term agreements with City Gas Distribution (CGD) entities and industrial consumers, with delivery evaluated via regional pipeline interconnection or mobile cascade logistics.",
  },
  {
    q: "How can regional millers and Farmer Producer Organizations (FPOs) partner with Rivanta?",
    a: "We develop multi-year biomass aggregation frameworks offering structured pricing, organized regional collection, and verified moisture testing to support dependable secondary value for agricultural communities.",
  },
  {
    q: "Are technical specifications available for industrial partners?",
    a: "Preliminary material specification summaries and physical property profiles are shared with qualified industrial partners under formal technical review.",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Framed Canvas Hero */}
      <SubpageHero
        badge="Official Corporate Directory"
        title="Direct Channels For Commercial And"
        highlightedText="Corporate Engagement."
        description="Connect with Rivanta Green for strategic partnerships, technology collaboration, feedstock sourcing and prospective commercial opportunities."
        breadcrumbs={[{ label: "Contact & Corporate Desk" }]}
        primaryCtaText="Submit Business Inquiry"
        primaryCtaHref="#inquiry-form"
        secondaryCtaText="View Corporate Background"
        secondaryCtaHref="/about"
        telemetryTag="Direct Phone • +91 98930 25375 • Bhopal, India"
      />

      {/* Infinite Industrial Ticker */}
      <MarqueeText
        phrase="REGISTERED OFFICE: ARERA COLONY, BHOPAL — CORPORATE OFFICE: KASTURBA NAGAR, BHOPAL — PHONE: +91 98930 25375 — INFO: INFO@RIVANTAGREEN.COM — SUPPORT: SUPPORT@RIVANTAGREEN.COM — "
        theme="light"
      />

      {/* Direct Contact Overview Cards (Fast Access) */}
      <section className="py-12 bg-white border-b border-[#13271e]/10">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Phone Card */}
            <a
              href="tel:+919893025375"
              className="p-6 rounded-2xl bg-[#f6f8f6] hover:bg-[#fae9dc] border border-[#13271e]/10 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#e06425]/10 text-[#e06425] group-hover:bg-[#e06425] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#13271e]/60 block mb-1">
                  Direct Line
                </span>
                <span className="font-sans font-medium text-base text-[#13271e] group-hover:text-[#e06425] transition-colors block">
                  +91 98930 25375
                </span>
                <span className="font-mono text-[11px] text-[#13271e]/50 mt-1 block">
                  Mon – Sat, 09:30 – 18:30 IST
                </span>
              </div>
            </a>

            {/* Corporate Email Card */}
            <a
              href="mailto:info@rivantagreen.com"
              className="p-6 rounded-2xl bg-[#f6f8f6] hover:bg-[#d6e8dc] border border-[#13271e]/10 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#2d7a54]/10 text-[#2d7a54] group-hover:bg-[#2d7a54] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#13271e]/60 block mb-1">
                  Corporate Inquiries
                </span>
                <span className="font-sans font-medium text-base text-[#13271e] group-hover:text-[#2d7a54] transition-colors block truncate max-w-[200px]">
                  info@rivantagreen.com
                </span>
                <span className="font-mono text-[11px] text-[#13271e]/50 mt-1 block">
                  General & Commercial
                </span>
              </div>
            </a>

            {/* Operations & Support Email Card */}
            <a
              href="mailto:support@rivantagreen.com"
              className="p-6 rounded-2xl bg-[#f6f8f6] hover:bg-[#d6e8dc] border border-[#13271e]/10 transition-all duration-300 group flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-[#2d7a54]/10 text-[#2d7a54] group-hover:bg-[#2d7a54] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#13271e]/60 block mb-1">
                  Partner Support
                </span>
                <span className="font-sans font-medium text-base text-[#13271e] group-hover:text-[#2d7a54] transition-colors block truncate max-w-[200px]">
                  support@rivantagreen.com
                </span>
                <span className="font-mono text-[11px] text-[#13271e]/50 mt-1 block">
                  Operations & Sourcing
                </span>
              </div>
            </a>

            {/* Desk Hours Card */}
            <div className="p-6 rounded-2xl bg-[#f6f8f6] border border-[#13271e]/10 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#132c21]/10 text-[#132c21] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#13271e]/60 block mb-1">
                  Desk Hours
                </span>
                <span className="font-sans font-medium text-base text-[#13271e] block">
                  09:30 – 18:30 IST
                </span>
                <span className="font-mono text-[11px] text-[#13271e]/50 mt-1 block">
                  Monday through Saturday
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Contact Section */}
      <section id="inquiry-form" className="py-12 sm:py-16 md:py-28 lg:py-32 bg-[#f6f8f6]">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Offices & Department Desks */}
            <div className="lg:col-span-5 space-y-8">
              {/* Official Office Locations */}
              <div>
                <div className="u-ts--1 mb-4 reveal-up">
                  <span className="indicator-dot"></span>
                  <span>Office Locations</span>
                </div>
                <h2 className="font-sans font-normal text-3xl sm:text-4xl tracking-tight text-[#13271e] reveal-up delay-100">
                  Registered Office & Address.
                </h2>
                <p className="font-sans text-sm md:text-base text-[#13271e]/75 font-light mt-2 leading-relaxed reveal-up delay-200">
                  Headquartered in Bhopal, Madhya Pradesh, supporting regional bio-industrial aggregation and engineering.
                </p>
              </div>

              {/* Office Location Cards */}
              <div className="space-y-5">
                {OFFICES.map((office, idx) => (
                  <div
                    key={idx}
                    className={`p-7 rounded-2xl border shadow-sm transition-all duration-300 space-y-4 ${
                      office.isPrimary
                        ? "bg-white border-[#13271e]/15 shadow-md"
                        : "bg-white/80 border-[#13271e]/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold flex items-center gap-1.5">
                        <Building className="w-4 h-4" />
                        {office.badge}
                      </span>
                      {office.isPrimary && (
                        <span className="font-mono text-[10px] uppercase tracking-wider bg-[#2d7a54]/10 text-[#2d7a54] px-2 py-0.5 rounded font-semibold">
                          Main Headquarters
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="font-sans font-semibold text-lg text-[#13271e] leading-snug">
                        {office.entity}
                      </h3>
                      <div className="mt-2 text-sm text-[#13271e]/80 font-light leading-relaxed flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#e06425] shrink-0 mt-0.5" />
                        <div>
                          {office.lines.map((line, lIdx) => (
                            <div key={lIdx}>{line}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#13271e]/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      <a
                        href={`tel:${office.phoneTel}`}
                        className="flex items-center gap-1.5 text-[#13271e]/80 hover:text-[#e06425] transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#e06425]" />
                        <span>{office.phone}</span>
                      </a>
                      <a
                        href={`mailto:${office.email}`}
                        className="flex items-center gap-1.5 text-[#13271e]/80 hover:text-[#2d7a54] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#2d7a54]" />
                        <span className="truncate">{office.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Specialized Department Desks Header */}
              <div className="pt-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 font-semibold block mb-3">
                  Specialized Department Desks
                </span>
                <div className="space-y-3">
                  {DEPARTMENTS.map((dept, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs space-y-1.5 card-interactive"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#e06425] font-semibold">
                          {dept.role}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={`mailto:${dept.email}`}
                          className="font-sans font-medium text-sm text-[#13271e] hover:text-[#e06425] transition-colors"
                        >
                          {dept.email}
                        </a>
                        {dept.phone && (
                          <>
                            <span className="text-[#13271e]/20">•</span>
                            <a
                              href={`tel:${dept.phone.replace(/\s+/g, "")}`}
                              className="font-mono text-xs text-[#13271e]/75 hover:text-[#e06425] transition-colors"
                            >
                              {dept.phone}
                            </a>
                          </>
                        )}
                      </div>
                      <p className="font-sans text-xs text-[#13271e]/70 font-light leading-relaxed">
                        {dept.focus}
                      </p>
                    </div>
                  ))}
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
                    <span>Business Inquiries</span>
                  </div>
                  <h3 className="font-sans font-medium text-2xl sm:text-3xl tracking-tight text-[#13271e]">
                    Business Inquiry
                  </h3>
                  <p className="font-sans text-sm text-[#13271e]/70 font-light mt-1">
                    Tell us about your organization and the scope of your inquiry. Our team will review and respond promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial FAQ Accordion Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
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
                    <h3 className="font-sans font-medium text-lg text-[#13271e]">
                      {faq.q}
                    </h3>
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
