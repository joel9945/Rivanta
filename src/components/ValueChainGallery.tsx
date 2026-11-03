"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface GallerySlide {
  id: string;
  category: string;
  title: string;
  desc: string;
  short: string;
  img: string;
  href: string;
}

const SLIDES: GallerySlide[] = [
  {
    id: "01",
    category: "01 / AGRICULTURAL RESOURCES",
    title: "Sustained by agricultural resources.",
    desc: "Agricultural residues represent an underutilized domestic resource, forming the supply foundation for Rivanta's planned industrial facilities.",
    short: "Agricultural resources",
    img: "/images/gallery/01-raw-materials.jpg",
    href: "/feedstock",
  },
  {
    id: "02",
    category: "02 / RENEWABLE GASEOUS FUELS",
    title: "Developing alternative gaseous fuels.",
    desc: "Commercial Compressed Biogas (CBG) infrastructure designed for city gas distribution networks and industrial clean mobility off-take.",
    short: "Compressed Biogas (CBG)",
    img: "/images/gallery/02-renewable-gas.jpg",
    href: "/cbg",
  },
  {
    id: "03",
    category: "03 / ENERGY RECOVERY",
    title: "Industrial energy efficiency.",
    desc: "Integrated closed-loop cogeneration and thermal heat recovery engineered to maximize utility efficiency across manufacturing operations.",
    short: "Energy efficiency",
    img: "/images/gallery/03-energy-integration.jpg",
    href: "/projects",
  },
  {
    id: "04",
    category: "04 / ADVANCED MATERIALS",
    title: "High-purity bio-silica & silicon.",
    desc: "Developing domestic capabilities in high-value biogenic silica and evaluating green silicon precursor pathways for domestic manufacturing.",
    short: "Bio-silica & silicon",
    img: "/images/gallery/04-bio-silica.jpg",
    href: "/bio-silica",
  },
  {
    id: "05",
    category: "05 / SUSTAINABLE FUELS",
    title: "Exploring future aviation fuels.",
    desc: "Evaluating emerging technology partnerships and sustainable aviation fuel (SAF) pathways to participate in long-term transport decarbonization.",
    short: "Sustainable aviation",
    img: "/images/gallery/05-future-fuels.jpg",
    href: "/saf",
  },
  {
    id: "06",
    category: "06 / RESOURCE RECOVERY",
    title: "Responsible resource recovery.",
    desc: "Evaluating soil-amendment applications and industrial mineral recovery for co-products, minimizing material losses across the facility lifecycle.",
    short: "Resource recovery",
    img: "/images/gallery/06-circular-products.jpg",
    href: "/sustainability",
  },
];

export default function ValueChainGallery() {
  const [current, setCurrent] = useState(0);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevSlide, nextSlide]);

  const active = SLIDES[current];

  return (
    <section
      id="businesses"
      aria-label="Integrated Industrial Workstreams"
      className="w-full bg-[#f6f8f6] py-20 md:py-32 border-t border-[#13271e]/8"
    >
      <div className="u-container u-container--1 u-container--pad">
        {/* Section Identifier */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-10 md:mb-14 border-b border-[#13271e]/10 gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e06425]" />
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-[#13271e]/75 font-semibold">
              05 / INTEGRATED INDUSTRIAL WORKSTREAMS
            </h2>
          </div>
          <span className="font-mono text-xs text-[#13271e]/50 uppercase tracking-wider">
            Portfolio Focus Areas
          </span>
        </div>

        {/* Gallery Hero Viewer */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2.2/1] rounded-[24px] lg:rounded-[36px] overflow-hidden shadow-2xl bg-[#13271e] text-white group select-none">
          {/* Main Background Image */}
          <div className="absolute inset-0">
            <Image
              src={active.img}
              alt={active.title}
              fill
              sizes="100vw"
              priority
              className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
          </div>

          {/* Top Overlays */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 right-6 sm:right-8 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90 font-medium">
                RIVANTA GREEN / INDUSTRIAL PORTFOLIO
              </span>
              <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/60 border border-white/10">
                Planning Visualization
              </span>
            </div>
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
              {active.id} / 0{SLIDES.length}
            </span>
          </div>

          {/* Bottom Narrative Overlay */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10">
            <div className="max-w-xl">
              <span className="font-mono text-xs text-[#f9a65c] uppercase tracking-widest block mb-2 font-medium">
                {active.category}
              </span>
              <h3 className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-3 leading-snug">
                {active.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm md:text-base text-white/80 font-light leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
                {active.desc}
              </p>
              <Link
                href={active.href}
                className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-medium text-white hover:text-[#f9a65c] transition-colors group/link"
              >
                <span className="border-b border-white/40 group-hover/link:border-[#f9a65c] pb-0.5">
                  Explore this workstream
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#f9a65c] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center gap-2 self-end md:self-auto">
              <button
                type="button"
                onClick={prevSlide}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer border-0"
                aria-label="Previous workstream"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer border-0"
                aria-label="Next workstream"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {SLIDES.map((slide, idx) => {
            const isSelected = idx === current;
            return (
              <button
                type="button"
                key={slide.id}
                onClick={() => setCurrent(idx)}
                className={`relative text-left p-3 rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden border-0 ${
                  isSelected
                    ? "bg-[#13271e] text-white ring-2 ring-[#e06425] shadow-lg -translate-y-1"
                    : "bg-white text-[#13271e]/75 hover:bg-[#13271e]/5"
                }`}
              >
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-2">
                  <Image
                    src={slide.img}
                    alt={slide.short}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      isSelected ? "bg-black/20" : "bg-black/40 hover:bg-black/10"
                    }`}
                  />
                </div>
                <span className="font-mono text-[10px] block opacity-60 uppercase mb-0.5">
                  {slide.id}
                </span>
                <span className="font-sans text-xs font-medium tracking-tight block truncate">
                  {slide.short}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
