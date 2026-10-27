"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  X,
  Sparkles,
  Fuel,
  Flame,
  Cpu,
  Building2,
  TrendingUp,
  Newspaper,
} from "lucide-react";
import { useModal } from "@/context/ModalContext";

interface HeaderProps {
  onOpenPartnerModal?: () => void;
}

export default function Header({ onOpenPartnerModal }: HeaderProps = {}) {
  const modalContext = useModal();
  const handleOpenPartner = onOpenPartnerModal || modalContext.openPartnerModal;
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"manufacturing" | "company" | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close dropdown and drawer upon route transition
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  const isManufacturingActive =
    pathname?.startsWith("/green-silicon") ||
    pathname?.startsWith("/cbg") ||
    pathname?.startsWith("/saf") ||
    pathname?.startsWith("/technology");

  const isCompanyActive =
    pathname === "/about" ||
    pathname?.startsWith("/newsroom");

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none px-3 sm:px-6 md:px-8 ${
          scrolled ? "pt-2.5 md:pt-3" : "pt-5 sm:pt-6 md:pt-7"
        }`}
      >
        <div className="max-w-[1300px] mx-auto pointer-events-auto">
          {/* Architectural Borderless Floating Island */}
          <div
            className={`w-full flex items-center justify-between px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 border-0 ${
              scrolled
                ? "bg-white/94 backdrop-blur-2xl shadow-[0_16px_40px_-12px_rgba(19,39,30,0.12),0_2px_8px_rgba(19,39,30,0.04)]"
                : "bg-white/75 backdrop-blur-xl shadow-[0_4px_24px_-4px_rgba(19,39,30,0.06),0_1px_3px_rgba(19,39,30,0.02)]"
            }`}
          >
            {/* Left Cluster: Brand Lockup + Seamless Desktop Navigation */}
            <div className="flex items-center gap-6 xl:gap-8">
              {/* Precision-Aligned Brand Lockup (Phoenix Emblem + Official RIVANTA Wordmark) */}
              <Link
                href="/"
                className="group flex items-center transition-all duration-300 flex-shrink-0 select-none"
                aria-label="RIVANTA - Green Innovative Venture Private Limited"
              >
                <div className="relative h-11.5 sm:h-12 md:h-12.5 w-auto flex-shrink-0 flex items-center">
                  <Image
                    src="/logo/logo-brand-lockup.svg"
                    alt="RIVANTA - Green Innovative Venture Private Limited"
                    width={230}
                    height={48}
                    style={{ width: "auto", height: "100%" }}
                    className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    priority
                  />
                </div>
              </Link>

              {/* Desktop Navigation Links (Zero Borders, Tactile Pills, Active Indicators) */}
              <nav
                ref={navRef}
                className="hidden lg:flex items-center gap-1 xl:gap-1.5"
                aria-label="Main Navigation"
              >
                {/* 1. Manufacturing Dropdown Console */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("manufacturing")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((prev) =>
                        prev === "manufacturing" ? null : "manufacturing"
                      )
                    }
                    className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer border-0 ${
                      activeDropdown === "manufacturing" || isManufacturingActive
                        ? "text-[#e06425] bg-[#e06425]/10 font-semibold"
                        : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                    }`}
                    aria-expanded={activeDropdown === "manufacturing"}
                    aria-haspopup="true"
                  >
                    <span>Manufacturing</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === "manufacturing" ? "rotate-180 text-[#e06425]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Panel (Frosted Floating Console, Zero Borders) */}
                  {activeDropdown === "manufacturing" && (
                    <div className="absolute top-full left-0 mt-2.5 w-84 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_24px_60px_-12px_rgba(19,39,30,0.22),0_8px_24px_rgba(19,39,30,0.06)] p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left border-0">
                      <Link
                        href="/green-silicon"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                          pathname === "/green-silicon"
                            ? "bg-[#fae9dc]/60"
                            : "hover:bg-[#13271e]/[0.04]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#fae9dc] text-[#e06425] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors flex items-center gap-1.5">
                            <span>Green Silicon For Chips</span>
                            <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#e06425]/10 text-[#e06425] font-semibold">
                              9N Purity
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                            Ultra-high purity (99.9999999%) green silicon for semiconductor chips.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/cbg"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                          pathname === "/cbg"
                            ? "bg-[#d6e8dc]/60"
                            : "hover:bg-[#13271e]/[0.04]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#d6e8dc] text-[#2d7a54] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Flame className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors flex items-center gap-1.5">
                            <span>Compressed Biogas (CBG)</span>
                            <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#2d7a54]/10 text-[#2d7a54] font-semibold">
                              Clean Fuel
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                            Anaerobic biomethane enrichment for clean mobility and grid.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/saf"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                          pathname === "/saf"
                            ? "bg-[#e1e4de]/60"
                            : "hover:bg-[#13271e]/[0.04]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#e1e4de] text-[#13271e] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Fuel className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors flex items-center gap-1.5">
                            <span>Sustainable Aviation Fuel (SAF)</span>
                            <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#13271e]/10 text-[#13271e] font-semibold">
                              Drop-in
                            </span>
                          </div>
                          <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                            Synthetic drop-in hydrocarbons for aviation decarbonization.
                          </p>
                        </div>
                      </Link>

                      <div className="mt-1 pt-1.5 bg-[#13271e]/[0.03] rounded-xl p-2.5">
                        <Link
                          href="/technology"
                          onClick={() => setActiveDropdown(null)}
                          className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#13271e]/80 hover:text-[#e06425] transition-colors"
                        >
                          <Cpu className="w-3.5 h-3.5 text-[#e06425]" />
                          <span>Process Technology Flow</span>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Feedstock */}
                <Link
                  href="/feedstock"
                  className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                    pathname === "/feedstock"
                      ? "text-[#13271e] bg-[#13271e]/[0.08] font-semibold"
                      : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                  }`}
                >
                  Feedstock
                </Link>

                {/* 3. Sustainability */}
                <Link
                  href="/sustainability"
                  className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                    pathname === "/sustainability"
                      ? "text-[#13271e] bg-[#13271e]/[0.08] font-semibold"
                      : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                  }`}
                >
                  Sustainability
                </Link>

                {/* 4. Projects */}
                <Link
                  href="/projects"
                  className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                    pathname === "/projects"
                      ? "text-[#13271e] bg-[#13271e]/[0.08] font-semibold"
                      : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                  }`}
                >
                  Projects
                </Link>

                {/* 5. Investors (Dedicated Direct Link) */}
                <Link
                  href="/investors"
                  className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                    pathname === "/investors"
                      ? "text-[#13271e] bg-[#13271e]/[0.08] font-semibold"
                      : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                  }`}
                >
                  Investors
                </Link>

                {/* 6. Company Dropdown Console */}
                <div
                  className="relative"
                  onMouseEnter={() => setActiveDropdown("company")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown((prev) => (prev === "company" ? null : "company"))
                    }
                    className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer border-0 ${
                      activeDropdown === "company" || isCompanyActive
                        ? "text-[#e06425] bg-[#e06425]/10 font-semibold"
                        : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                    }`}
                    aria-expanded={activeDropdown === "company"}
                    aria-haspopup="true"
                  >
                    <span>Company</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeDropdown === "company" ? "rotate-180 text-[#e06425]" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Panel (Frosted Floating Console, Zero Borders) */}
                  {activeDropdown === "company" && (
                    <div className="absolute top-full left-0 mt-2.5 w-80 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_24px_60px_-12px_rgba(19,39,30,0.22),0_8px_24px_rgba(19,39,30,0.06)] p-3.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left border-0">
                      <Link
                        href="/about"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                          pathname === "/about"
                            ? "bg-[#fae9dc]/60"
                            : "hover:bg-[#13271e]/[0.04]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#fae9dc] text-[#e06425] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors">
                            About Rivanta
                          </div>
                          <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                            Vision, leadership, and clean venture engineering philosophy.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/investors"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                          pathname === "/investors"
                            ? "bg-[#d6e8dc]/60"
                            : "hover:bg-[#13271e]/[0.04]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#d6e8dc] text-[#2d7a54] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <TrendingUp className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors">
                            Investors & Capital
                          </div>
                          <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                            Institutional capital deployment, governance, and metrics.
                          </p>
                        </div>
                      </Link>

                      <Link
                        href="/newsroom"
                        onClick={() => setActiveDropdown(null)}
                        className={`group flex items-start gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                          pathname === "/newsroom"
                            ? "bg-[#e1e4de]/60"
                            : "hover:bg-[#13271e]/[0.04]"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-xl bg-[#e1e4de] text-[#13271e] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Newspaper className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="font-sans font-medium text-xs text-[#13271e] group-hover:text-[#e06425] transition-colors">
                            News & Media
                          </div>
                          <p className="font-sans text-[11px] text-[#13271e]/60 font-light mt-0.5 leading-tight">
                            Press releases, quarterly breakthroughs, and announcements.
                          </p>
                        </div>
                      </Link>
                    </div>
                  )}
                </div>

                {/* 7. Contact */}
                <Link
                  href="/contact"
                  className={`px-3.5 py-1.5 rounded-full font-sans text-[13.5px] font-medium tracking-[-0.01em] transition-all duration-200 ${
                    pathname === "/contact"
                      ? "text-[#13271e] bg-[#13271e]/[0.08] font-semibold"
                      : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.04]"
                  }`}
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Right Action Buttons (Zero Borders, Harmonized Rhythm) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleOpenPartner}
                className="group hidden sm:inline-flex items-center gap-2 bg-[#13271e] hover:bg-[#e06425] text-white px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full font-sans text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 shadow-[0_2px_10px_rgba(19,39,30,0.1)] hover:shadow-[0_6px_20px_rgba(224,100,37,0.28)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer border-0"
                aria-label="Work With Us - Open project inquiry"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#e06425] group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile Menu Hamburger (Zero Borders) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#13271e]/5 hover:bg-[#13271e]/10 text-[#13271e] transition-colors cursor-pointer border-0"
                aria-label="Open mobile navigation menu"
              >
                <div className="flex flex-col gap-1.5 items-center justify-center">
                  <span className="w-5 h-[2px] bg-[#13271e] rounded-full"></span>
                  <span className="w-5 h-[2px] bg-[#13271e] rounded-full"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Drawer (Zero Borders) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#13271e] text-white flex flex-col p-6 sm:p-8 overflow-y-auto animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Header Bar (Zero Borders) */}
          <div className="flex items-center justify-between pb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
              aria-label="RIVANTA Home"
            >
              <div className="relative h-11.5 sm:h-12 w-auto flex-shrink-0 flex items-center">
                <Image
                  src="/logo/logo-brand-lockup-light.svg"
                  alt="RIVANTA - Green Innovative Venture Private Limited"
                  width={230}
                  height={48}
                  style={{ width: "auto", height: "100%" }}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer border-0"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grouped Navigation Links */}
          <div className="flex flex-col py-8 space-y-8 flex-1">
            {/* Group 1: Strategic Manufacturing */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-3">
                Strategic Manufacturing
              </span>
              <div className="grid grid-cols-1 gap-2.5 text-left">
                <Link
                  href="/green-silicon"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors flex items-center justify-between py-1"
                >
                  <span>Green Silicon For Chips</span>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#e06425] text-white">
                    9N Purity
                  </span>
                </Link>
                <Link
                  href="/cbg"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors py-1"
                >
                  Compressed Biogas (CBG)
                </Link>
                <Link
                  href="/saf"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors py-1"
                >
                  Sustainable Aviation Fuel (SAF)
                </Link>
                <Link
                  href="/technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-xl font-light hover:text-[#ea6e2d] transition-colors py-1"
                >
                  Technology & Process Flow
                </Link>
              </div>
            </div>

            {/* Group 2: Operations & Impact */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-3">
                Operations & Impact
              </span>
              <div className="grid grid-cols-1 gap-2.5 text-left">
                <Link
                  href="/feedstock"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-light text-white/90 hover:text-[#ea6e2d] transition-colors"
                >
                  Circular Economy & Feedstock
                </Link>
                <Link
                  href="/sustainability"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-light text-white/90 hover:text-[#ea6e2d] transition-colors"
                >
                  Sustainability & Carbon LCA
                </Link>
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-lg font-light text-white/90 hover:text-[#ea6e2d] transition-colors"
                >
                  Project Infrastructure
                </Link>
              </div>
            </div>

            {/* Group 3: Corporate & Engagement */}
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#e06425] font-semibold block mb-3">
                Company & Governance
              </span>
              <div className="grid grid-cols-2 gap-2.5 text-left">
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  About Rivanta
                </Link>
                <Link
                  href="/investors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  Investors & Capital
                </Link>
                <Link
                  href="/newsroom"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  News & Media
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-base font-light text-white/80 hover:text-[#ea6e2d] transition-colors"
                >
                  Official Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Action (Zero Borders) */}
          <div className="mt-auto pt-6 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleOpenPartner();
              }}
              className="w-full py-4 rounded-full bg-[#e06425] hover:bg-[#ea6e2d] text-white font-sans text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors border-0"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs text-white/50">
              contact@rivantagreen.com
            </span>
          </div>
        </div>
      )}
    </>
  );
}
