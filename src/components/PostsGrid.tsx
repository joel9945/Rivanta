"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface PostsGridProps {
  onSelectArticle?: (title: string) => void;
}

const ARTICLES = [
  {
    id: "art-1",
    category: "White Paper",
    date: "October 14, 2026",
    title: "Bio-circular composites replacing virgin polymers in automotive and industrial supply chains",
    excerpt:
      "A comparative lifecycle study assessing mechanical tensile retention and 78% embodied carbon reduction in bio-derived composite matrices.",
    link: "#",
  },
  {
    id: "art-2",
    category: "Partnership",
    date: "September 28, 2026",
    title: "Rivanta and State Transmission Grid announce 500MWh battery energy storage joint venture",
    excerpt:
      "Deployment of next-generation lithium-iron-phosphate and flow battery configurations to provide real-time grid inertia and frequency response.",
    link: "#",
  },
  {
    id: "art-3",
    category: "Impact Audit",
    date: "August 19, 2026",
    title: "Annual ESG Telemetry: 99.4% emission avoidance verification across all operating portfolio ventures",
    excerpt:
      "Independent verification report validating real-world avoidance of 420,000 tons of CO2 equivalent emissions across regional operating assets.",
    link: "#",
  },
];

export default function PostsGrid({ onSelectArticle }: PostsGridProps) {
  const modalContext = useModal();
  const handleSelect = onSelectArticle || (() => modalContext.openPartnerModal());
  return (
    <section id="newsroom" className="py-20 md:py-32 bg-[#eeeeee] rounded-t-[32px] md:rounded-t-[48px] -mt-6 relative z-10">
      <div className="u-container u-container--1 u-container--pad">
        {/* Header with Title & Action Button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 md:mb-16 gap-6 reveal-up">
          <div className="flex flex-col gap-2">
            <div className="u-ts--1 w-fit">
              <span className="indicator-dot"></span>
              <span>Dispatches & Intelligence</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e]">
              Newsroom
            </h2>
          </div>

          <Link href="#newsroom" className="u-btn--1">
            <span className="btn_label">
              View all articles
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

        {/* Featured Post Card matching Integrated Bio's e-post-feature */}
        <div className="mb-10 reveal-up delay-100">
          <div
            onClick={() =>
              handleSelect(
                "Commissioning Western Grid 180MW Hybrid Solar & Storage Facility"
              )
            }
            className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 border border-[#13271e]/10 cursor-pointer shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center overflow-hidden card-interactive"
          >
            {/* Left Media */}
            <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-xl md:rounded-2xl overflow-hidden bg-[#13271e]/5">
              <Image
                src="/images/newsroom-solar.jpg"
                alt="Western Grid 180MW Solar Installation"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#13271e]/60">
                <span className="px-3 py-1 rounded-md bg-[#f0f4f1] text-[#2d7a54] font-medium">
                  Venture Milestone
                </span>
                <time>October 20, 2026</time>
              </div>

              <div className="space-y-3">
                <h3 className="font-sans font-medium text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#13271e] group-hover:text-[#e06425] transition-colors duration-300 leading-snug">
                  Commissioning Western Grid 180MW Hybrid Solar & Storage Facility
                </h3>
                <p className="font-sans text-sm md:text-base text-[#13271e]/75 font-light leading-relaxed">
                  Our flagship clean energy installation achieves full grid synchronization, supplying over 420GWh of annual zero-carbon power and integrating 120MWh of high-density battery capacity.
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#13271e]/8">
                <span className="font-mono text-xs uppercase tracking-wider text-[#13271e] font-medium group-hover:text-[#e06425] transition-colors">
                  Read dispatch
                </span>
                <div className="card-arrow-circle w-10 h-10 rounded-full bg-[#13271e] text-white flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Secondary Cards Grid matching e-post-thumb */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art, idx) => (
            <div
              key={art.id}
              onClick={() => handleSelect(art.title)}
              className={`group relative bg-white rounded-2xl p-6 md:p-8 border border-[#13271e]/10 cursor-pointer shadow-xs flex flex-col justify-between min-h-[300px] card-interactive reveal-up delay-${(idx + 1) * 100}`}
            >
              {/* Meta */}
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-[#13271e]/60 mb-5">
                  <span className="px-2.5 py-0.5 rounded bg-[#f6f8f6] text-[#13271e] font-medium">
                    {art.category}
                  </span>
                  <time>{art.date}</time>
                </div>

                {/* Title */}
                <h4 className="font-sans font-medium text-lg md:text-xl tracking-tight text-[#13271e] group-hover:text-[#e06425] transition-colors duration-300 leading-snug mb-3">
                  {art.title}
                </h4>

                <p className="font-sans text-xs md:text-sm text-[#13271e]/70 font-light leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              {/* Bottom Footer with Interactive Button */}
              <div className="flex items-center justify-between pt-6 border-t border-[#13271e]/8 mt-6">
                <span className="font-mono text-xs uppercase tracking-wider text-[#13271e] font-medium group-hover:text-[#e06425] transition-colors">
                  Read article
                </span>
                <div className="card-arrow-circle w-9 h-9 rounded-full bg-[#f6f8f6] text-[#13271e] flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
