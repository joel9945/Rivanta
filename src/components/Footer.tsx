import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FooterPartnerButton,
  ScrollToTopButton,
} from "./FooterInteractions";

async function getCopyrightYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}

export default async function Footer() {
  const currentYear = await getCopyrightYear();

  return (
    <footer className="relative bg-[#0e2219] text-white pt-20 md:pt-32 pb-12 overflow-hidden border-t border-white/10">
      {/* Ambient Green & Terracotta Orange Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(45,122,84,0.18),_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(224,100,37,0.12),_transparent_70%)] pointer-events-none" />

      <div className="u-container u-container--1 u-container--pad relative z-10">
        {/* Main Upper Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 md:pb-24 border-b border-white/10 items-start">
          {/* Left Callout */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md w-fit font-mono text-xs uppercase tracking-wider text-white/80">
              <span className="w-2 h-2 rounded-full bg-[#ea6e2d]"></span>
              <span>Industrial Bio-Value Ecosystem</span>
            </div>

            <h3 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] tracking-tight leading-[1.08] text-white max-w-xl">
              From agricultural residue to{" "}
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#f9a65c]">
                industrial value.
              </span>
            </h3>

            <p className="font-sans text-sm md:text-base text-white/70 font-light max-w-md leading-relaxed">
              Rivanta Green Innovative Venture Private Limited is developing an integrated biomass manufacturing ecosystem: flagship Green Silicon (6N purity / 99.999%), compressed biogas, and sustainable aviation fuel pathways.
            </p>

            <div>
              <FooterPartnerButton />
            </div>
          </div>

          {/* Right Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
            {/* Column 1: Manufacturing */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Manufacturing
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/green-silicon"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Green Silicon (6N / 99.999%)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cbg"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Compressed Biogas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saf"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Aviation Fuel (SAF)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Operations */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Operations
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/feedstock"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Feedstock Sourcing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sustainability"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    About Rivanta
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Commercial */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Commercial
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/investors"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Investors & Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Contact & Off-Take Desk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Connect & Scroll Top */}
            <div className="flex flex-col space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-white/50">
                Connect
              </span>
              <ul className="space-y-3 font-sans font-light text-white/80 text-xs sm:text-sm">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@rivantagreen.com"
                    className="hover:text-[#ea6e2d] transition-colors"
                  >
                    Email Desk
                  </a>
                </li>
              </ul>

              <div className="pt-2">
                <ScrollToTopButton />
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Identity & Watermark Row */}
        <div className="pt-12 pb-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 md:w-12 md:h-12 relative flex-shrink-0 flex items-center">
              <Image
                src="/logo/logo-icon.svg"
                alt="Rivanta Eagle Emblem"
                width={48}
                height={48}
                style={{ width: "auto", height: "100%" }}
                className="object-contain filter drop-shadow-[0_2px_8px_rgba(242,178,36,0.35)]"
              />
            </div>
            <span className="font-sans font-semibold text-sm md:text-base tracking-wide text-white/95">
              RIVANTA Green Innovative Venture Private Limited
            </span>
          </div>

          <div className="font-mono text-xs text-white/50 text-center md:text-right">
            © {currentYear} Rivanta Green Innovative Venture Pvt. Ltd. All rights reserved.
          </div>
        </div>

        {/* Massive Watermark Typography */}
        <div className="mt-8 select-none pointer-events-none opacity-[0.06] flex items-center justify-center overflow-hidden">
          <span className="font-sans font-black text-[18vw] leading-none tracking-tighter text-white whitespace-nowrap">
            RIVANTA
          </span>
        </div>
      </div>
    </footer>
  );
}
