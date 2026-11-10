"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Lock,
  Mail,
  Phone,
  MapPin,
  Globe,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  FileText,
  Search,
  SlidersHorizontal,
  Bookmark,
} from "lucide-react";

interface SectionMeta {
  id: string;
  num: string;
  title: string;
  part: number;
  partLabel: string;
}

const SECTIONS_META: SectionMeta[] = [
  { id: "section-1", num: "01", title: "Introduction", part: 1, partLabel: "Part 1: Foundations & Collection" },
  { id: "section-2", num: "02", title: "Scope of This Policy", part: 1, partLabel: "Part 1: Foundations & Collection" },
  { id: "section-3", num: "03", title: "Information We Collect", part: 1, partLabel: "Part 1: Foundations & Collection" },
  { id: "section-4", num: "04", title: "How We Use Personal Information", part: 1, partLabel: "Part 1: Foundations & Collection" },
  { id: "section-5", num: "05", title: "Consent and Lawful Processing", part: 2, partLabel: "Part 2: Processing & Safeguards" },
  { id: "section-6", num: "06", title: "Cookies and Website Technologies", part: 2, partLabel: "Part 2: Processing & Safeguards" },
  { id: "section-7", num: "07", title: "Information Sharing and Disclosure", part: 2, partLabel: "Part 2: Processing & Safeguards" },
  { id: "section-8", num: "08", title: "Data Security", part: 2, partLabel: "Part 2: Processing & Safeguards" },
  { id: "section-9", num: "09", title: "Data Retention", part: 3, partLabel: "Part 3: Retention & User Rights" },
  { id: "section-10", num: "10", title: "Your Privacy Rights", part: 3, partLabel: "Part 3: Retention & User Rights" },
  { id: "section-11", num: "11", title: "International Data Transfers", part: 3, partLabel: "Part 3: Retention & User Rights" },
  { id: "section-12", num: "12", title: "Third-Party Websites", part: 3, partLabel: "Part 3: Retention & User Rights" },
  { id: "section-13", num: "13", title: "Children's Privacy", part: 4, partLabel: "Part 4: Governance & Redressal" },
  { id: "section-14", num: "14", title: "Changes to This Privacy Policy", part: 4, partLabel: "Part 4: Governance & Redressal" },
  { id: "section-15", num: "15", title: "Privacy Enquiries and Grievance Redressal", part: 4, partLabel: "Part 4: Governance & Redressal" },
  { id: "section-16", num: "16", title: "Contact Information", part: 4, partLabel: "Part 4: Governance & Redressal" },
];

const PARTS = [
  {
    page: 1,
    label: "Part 1",
    title: "Foundations & Collection",
    range: "Sections 01–04",
    sectionIds: ["section-1", "section-2", "section-3", "section-4"],
  },
  {
    page: 2,
    label: "Part 2",
    title: "Processing & Safeguards",
    range: "Sections 05–08",
    sectionIds: ["section-5", "section-6", "section-7", "section-8"],
  },
  {
    page: 3,
    label: "Part 3",
    title: "Retention & User Rights",
    range: "Sections 09–12",
    sectionIds: ["section-9", "section-10", "section-11", "section-12"],
  },
  {
    page: 4,
    label: "Part 4",
    title: "Governance & Redressal",
    range: "Sections 13–16",
    sectionIds: ["section-13", "section-14", "section-15", "section-16"],
  },
];

export default function PrivacyPolicyClient() {
  // Pagination State: 1 to 4 (or 'all' for complete document view)
  const [currentPage, setCurrentPage] = useState<number | "all">(1);

  // By default, expand the sections of the active page for immediate, friction-free reading
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "section-1": true,
    "section-2": true,
    "section-3": true,
    "section-4": true,
  });

  const [searchQuery, setSearchQuery] = useState("");

  // Handle URL hash anchor jumps on mount
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.hash) return;
    const targetId = window.location.hash.replace("#", "");
    if (!targetId.startsWith("section-")) return;

    const timer = setTimeout(() => {
      const matchedPart = PARTS.find((p) => p.sectionIds.includes(targetId));
      if (matchedPart) {
        setCurrentPage(matchedPart.page);
      }
      setOpenSections((prev) => ({ ...prev, [targetId]: true }));
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  const handlePageChange = (newPage: number | "all") => {
    setCurrentPage(newPage);
    if (newPage !== "all") {
      const activePart = PARTS.find((p) => p.page === newPage);
      if (activePart) {
        const nextOpen = { ...openSections };
        activePart.sectionIds.forEach((id) => {
          nextOpen[id] = true;
        });
        setOpenSections(nextOpen);
      }
    }
    const readingArea = document.getElementById("privacy-reading-area");
    if (readingArea) {
      readingArea.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectSectionFromNav = (id: string) => {
    const matchedPart = PARTS.find((p) => p.sectionIds.includes(id));
    if (matchedPart) {
      setCurrentPage(matchedPart.page);
    }
    setOpenSections((prev) => ({
      ...prev,
      [id]: true,
    }));
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 120);
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    SECTIONS_META.forEach((sec) => {
      allOpen[sec.id] = true;
    });
    setOpenSections(allOpen);
  };

  const collapseAll = () => {
    setOpenSections({});
  };

  // Filter sections based on pagination and search query
  const displayedSections = useMemo(() => {
    if (searchQuery.trim()) {
      return SECTIONS_META.filter(
        (sec) =>
          sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sec.num.includes(searchQuery.trim())
      );
    }
    if (currentPage === "all") {
      return SECTIONS_META;
    }
    return SECTIONS_META.filter((sec) => sec.part === currentPage);
  }, [currentPage, searchQuery]);

  const areAllOnPageExpanded = useMemo(() => {
    return displayedSections.every((sec) => openSections[sec.id]);
  }, [displayedSections, openSections]);

  const activePartMeta = useMemo(() => {
    if (currentPage === "all") return null;
    return PARTS.find((p) => p.page === currentPage);
  }, [currentPage]);

  return (
    <div className="bg-[#f6f8f6] min-h-screen text-[#13271e]">
      {/* 1. Dignified Executive Document Header */}
      <header className="pt-28 sm:pt-32 md:pt-36 pb-10 sm:pb-14 border-b border-[#13271e]/10 bg-white">
        <div className="u-container u-container--1 u-container--pad">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#13271e]/60 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-[#e06425] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#13271e]/30" />
            <span className="text-[#13271e]/50">Institutional Governance</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#13271e]/30" />
            <span className="text-[#13271e] font-semibold">Privacy Policy</span>
          </nav>

          {/* Title & Organization Identity */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0f4f1] border border-[#13271e]/10 font-mono text-xs uppercase tracking-wider text-[#2d7a54] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2d7a54]" />
              <span>Statutory Data Protection Policy</span>
            </div>

            <h1 className="font-sans font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#13271e] tracking-tight leading-[1.08]">
              Privacy <span className="font-semibold text-[#e06425]">Policy.</span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-[#13271e]/75 font-light leading-relaxed">
              Rivanta Green Innovative Venture Private Limited
            </p>

            {/* Document Key Metadata Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs text-[#13271e]/70 border-t border-[#13271e]/8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#e06425]" />
                <span>Effective Date: <strong>3 November 2026</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#2d7a54]" />
                <span>Framework: <strong>DPDP Act, 2023 & IT Act, 2000</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#13271e]/60" />
                <span>Website: <strong>https://www.rivantagreen.com</strong></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Document Body with Paginated Reading Area */}
      <main id="privacy-reading-area" className="py-8 sm:py-12 md:py-16 scroll-mt-24">
        <div className="u-container u-container--1 u-container--pad">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Sidebar: Table of Contents & Part Index (Sticky on Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-5">
              <div className="bg-white rounded-3xl p-5 border border-[#13271e]/10 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#13271e]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#e06425] font-semibold flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Table of Contents
                  </span>
                  <span className="font-mono text-[11px] text-[#13271e]/50 font-medium">16 Sections</span>
                </div>

                {/* 4 Paginated Parts Grouping */}
                <div className="space-y-3">
                  {PARTS.map((part) => {
                    const isPartActive = currentPage === part.page;
                    return (
                      <div
                        key={part.page}
                        className={`rounded-2xl p-2.5 transition-all ${
                          isPartActive
                            ? "bg-[#f8faf8] border border-[#e06425]/30 shadow-2xs"
                            : "border border-transparent hover:border-[#13271e]/8"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => handlePageChange(part.page)}
                          className="w-full text-left flex items-center justify-between cursor-pointer border-0 bg-transparent mb-1.5"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`px-2 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider ${
                                isPartActive
                                  ? "bg-[#e06425] text-white"
                                  : "bg-[#13271e]/8 text-[#13271e]/70"
                              }`}
                            >
                              {part.label}
                            </span>
                            <span className="font-sans text-xs font-semibold text-[#13271e] truncate">
                              {part.title}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-[#13271e]/40">
                            {part.range}
                          </span>
                        </button>

                        <div className="space-y-0.5 pl-2 border-l-2 border-[#13271e]/10 ml-2">
                          {SECTIONS_META.filter((sec) => sec.part === part.page).map((sec) => {
                            const isOpen = !!openSections[sec.id];
                            return (
                              <button
                                key={sec.id}
                                type="button"
                                onClick={() => handleSelectSectionFromNav(sec.id)}
                                className={`w-full text-left group flex items-center justify-between py-1 px-2 rounded-lg font-sans text-[11px] transition-all cursor-pointer border-0 ${
                                  isPartActive && isOpen
                                    ? "bg-[#fae9dc]/70 text-[#e06425] font-medium"
                                    : "text-[#13271e]/75 hover:text-[#13271e] hover:bg-[#13271e]/[0.03]"
                                }`}
                              >
                                <div className="flex items-center gap-1.5 truncate">
                                  <span className="font-mono text-[10px] text-[#13271e]/40 font-semibold">
                                    {sec.num}
                                  </span>
                                  <span className="truncate">{sec.title}</span>
                                </div>
                                {isPartActive && isOpen && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#e06425] flex-shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* View All Sections Toggle */}
                <div className="pt-2 border-t border-[#13271e]/8">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage === "all" ? 1 : "all")}
                    className={`w-full py-2 px-3 rounded-xl font-mono text-xs font-medium flex items-center justify-center gap-2 transition-all cursor-pointer border ${
                      currentPage === "all"
                        ? "bg-[#13271e] text-white border-[#13271e]"
                        : "bg-white text-[#13271e]/75 border-[#13271e]/15 hover:border-[#13271e]/30"
                    }`}
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>{currentPage === "all" ? "Exit Continuous View" : "View All 16 Sections (Continuous)"}</span>
                  </button>
                </div>
              </div>

              {/* Quick Contact Desk Card */}
              <div className="bg-[#13271e] text-white rounded-3xl p-5 space-y-3 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-widest text-[#f9a65c] font-semibold block">
                  Privacy Helpdesk
                </span>
                <p className="font-sans text-xs text-white/75 font-light leading-relaxed">
                  For statutory inquiries, consent withdrawal, or data requests, connect directly with our compliance desk.
                </p>
                <div className="space-y-1.5 font-mono text-xs pt-1 border-t border-white/10">
                  <a
                    href="mailto:support@rivantagreen.com"
                    className="flex items-center gap-2 text-white/90 hover:text-[#f9a65c] transition-colors py-1 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#ea6e2d] flex-shrink-0" />
                    <span className="truncate">support@rivantagreen.com</span>
                  </a>
                  <a
                    href="mailto:info@rivantagreen.com"
                    className="flex items-center gap-2 text-white/90 hover:text-[#f9a65c] transition-colors py-1 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#ea6e2d] flex-shrink-0" />
                    <span className="truncate">info@rivantagreen.com</span>
                  </a>
                  <a
                    href="tel:+919893025375"
                    className="flex items-center gap-2 text-white/90 hover:text-[#f9a65c] transition-colors py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#ea6e2d] flex-shrink-0" />
                    <span>+91 98930 25375</span>
                  </a>
                </div>
              </div>
            </aside>

            {/* Right Column: Paginated Non-Stretching Content Flow */}
            <article className="lg:col-span-8 space-y-5">
              {/* Top Navigation & Pagination Control Bar */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#13271e]/10 shadow-xs space-y-3.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Current Page / Part Banner */}
                  <div>
                    {activePartMeta ? (
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#e06425]/10 text-[#e06425] font-mono text-xs font-bold uppercase tracking-wider">
                            {activePartMeta.label}
                          </span>
                          <span className="font-mono text-xs text-[#13271e]/50">
                            {activePartMeta.range}
                          </span>
                        </div>
                        <h2 className="font-sans text-base sm:text-lg font-medium text-[#13271e] tracking-tight mt-0.5">
                          {activePartMeta.title}
                        </h2>
                      </div>
                    ) : (
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#13271e] text-white font-mono text-xs font-bold uppercase tracking-wider">
                          All 16 Sections
                        </span>
                        <h2 className="font-sans text-base sm:text-lg font-medium text-[#13271e] tracking-tight mt-0.5">
                          Complete Statutory Policy
                        </h2>
                      </div>
                    )}
                  </div>

                  {/* Expand / Collapse All Toggle Button */}
                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={areAllOnPageExpanded ? collapseAll : expandAll}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-sans text-xs font-medium text-[#13271e] bg-[#f0f4f1] hover:bg-[#e1e4de] transition-colors cursor-pointer border-0"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5 text-[#e06425]" />
                      <span>{areAllOnPageExpanded ? "Collapse View" : "Expand All"}</span>
                    </button>
                  </div>
                </div>

                {/* Pagination Switcher Controls */}
                <div className="pt-2 border-t border-[#13271e]/8 flex flex-wrap items-center justify-between gap-2.5">
                  <div className="flex items-center gap-1.5">
                    {PARTS.map((part) => {
                      const isActive = currentPage === part.page;
                      return (
                        <button
                          key={part.page}
                          type="button"
                          onClick={() => handlePageChange(part.page)}
                          className={`px-3 py-1.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer border ${
                            isActive
                              ? "bg-[#e06425] text-white border-[#e06425] shadow-xs"
                              : "bg-[#f8faf8] text-[#13271e]/75 border-[#13271e]/10 hover:border-[#13271e]/25 hover:text-[#13271e]"
                          }`}
                        >
                          <span className="hidden sm:inline">{part.label}: </span>
                          <span>{part.range.replace("Sections ", "")}</span>
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      onClick={() => handlePageChange("all")}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-medium transition-all cursor-pointer border ${
                        currentPage === "all"
                          ? "bg-[#13271e] text-white border-[#13271e] shadow-xs"
                          : "bg-[#f8faf8] text-[#13271e]/60 border-[#13271e]/10 hover:text-[#13271e]"
                      }`}
                    >
                      All (16)
                    </button>
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full sm:w-48">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#13271e]/40" />
                    <input
                      type="text"
                      placeholder="Search policy..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-8 pr-2.5 py-1 rounded-xl border border-[#13271e]/10 bg-[#f8faf8] text-xs font-sans text-[#13271e] placeholder:text-[#13271e]/40 focus:outline-none focus:border-[#e06425] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Paginated Sections Container (Exactly 4 per page, Zero Stretching) */}
              <div className="space-y-3.5">
                {displayedSections.map((sec) => {
                  const isOpen = !!openSections[sec.id];
                  return (
                    <div
                      key={sec.id}
                      id={sec.id}
                      className={`scroll-mt-28 rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? "bg-white border-[#e06425]/40 shadow-sm"
                          : "bg-white/85 hover:bg-white border-[#13271e]/10 hover:border-[#13271e]/20"
                      }`}
                    >
                      {/* Section Accordion Trigger Header */}
                      <button
                        type="button"
                        onClick={() => toggleSection(sec.id)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer border-0 bg-transparent transition-colors"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <span
                            className={`w-8 h-8 rounded-xl font-mono text-xs font-semibold flex items-center justify-center flex-shrink-0 transition-colors ${
                              isOpen
                                ? "bg-[#e06425] text-white"
                                : "bg-[#f0f4f1] text-[#13271e]/70"
                            }`}
                          >
                            {sec.num}
                          </span>
                          <div className="min-w-0">
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#e06425] font-semibold block mb-0.5">
                              {sec.partLabel}
                            </span>
                            <h2 className="font-sans text-base sm:text-lg font-medium text-[#13271e] tracking-tight truncate">
                              {sec.title}
                            </h2>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="hidden sm:inline font-mono text-[11px] text-[#13271e]/40">
                            {isOpen ? "Close" : "Open"}
                          </span>
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 ${
                              isOpen
                                ? "bg-[#e06425]/10 text-[#e06425] rotate-180"
                                : "bg-[#f0f4f1] text-[#13271e]/60"
                            }`}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </button>

                      {/* Expandable Content Area */}
                      {isOpen && (
                        <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-1 border-t border-[#13271e]/6 text-[14px] sm:text-[15px] font-sans font-light leading-relaxed text-[#13271e]/85 space-y-3 animate-in fade-in duration-200">
                          {renderSectionBody(sec.id)}
                        </div>
                      )}
                    </div>
                  );
                })}

                {displayedSections.length === 0 && (
                  <div className="p-8 text-center bg-white rounded-2xl border border-[#13271e]/10 text-[#13271e]/60 text-sm">
                    No sections matched your search query. Clear search to view sections.
                  </div>
                )}
              </div>

              {/* Bottom Pagination Stepper (Prev / Next & Numbered Page Pills) */}
              {currentPage !== "all" && (
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#13271e]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
                  {/* Prev Button */}
                  <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-sans text-xs font-medium transition-all border cursor-pointer ${
                      currentPage === 1
                        ? "opacity-40 cursor-not-allowed bg-transparent border-[#13271e]/10 text-[#13271e]/50"
                        : "bg-[#f8faf8] hover:bg-[#fae9dc] hover:text-[#e06425] border-[#13271e]/10 text-[#13271e]"
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous Part</span>
                  </button>

                  {/* Centered Numbered Page Pills */}
                  <div className="flex items-center gap-1.5">
                    {PARTS.map((part) => {
                      const isActive = currentPage === part.page;
                      return (
                        <button
                          key={part.page}
                          type="button"
                          onClick={() => handlePageChange(part.page)}
                          className={`w-8 h-8 rounded-xl font-mono text-xs font-semibold flex items-center justify-center transition-all cursor-pointer border ${
                            isActive
                              ? "bg-[#e06425] text-white border-[#e06425] shadow-xs"
                              : "bg-[#f8faf8] text-[#13271e]/75 border-[#13271e]/10 hover:border-[#e06425] hover:text-[#e06425]"
                          }`}
                        >
                          {part.page}
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    disabled={currentPage === 4}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-sans text-xs font-medium transition-all border cursor-pointer ${
                      currentPage === 4
                        ? "opacity-40 cursor-not-allowed bg-transparent border-[#13271e]/10 text-[#13271e]/50"
                        : "bg-[#f8faf8] hover:bg-[#fae9dc] hover:text-[#e06425] border-[#13271e]/10 text-[#13271e]"
                    }`}
                  >
                    <span>Next Part</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}

function renderSectionBody(id: string) {
  switch (id) {
    case "section-1":
      return (
        <>
          <p>
            Rivanta Green Innovative Venture Private Limited (“Rivanta Green,” “Company,” “we,” “our,” or “us”) respects the privacy of individuals who interact with our organisation and is committed to handling personal information responsibly, transparently, and securely.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, process, store, disclose, and protect personal information obtained through our official website, business communications, corporate enquiries, and other relevant interactions.
          </p>
          <p>
            Our approach to privacy is guided by applicable Indian laws, including the Information Technology Act, 2000, relevant rules thereunder, and the Digital Personal Data Protection Act, 2023, together with its applicable rules and provisions as they come into force.
          </p>
          <p>
            By interacting with our website or providing information to us, you acknowledge the practices described in this Policy. Where processing requires consent under applicable law, we will seek that consent separately.
          </p>
        </>
      );

    case "section-2":
      return (
        <>
          <p>This Privacy Policy applies to personal information processed in connection with:</p>
          <ul className="space-y-1.5 pl-5 list-disc marker:text-[#e06425]">
            <li>Visitors accessing our official corporate website.</li>
            <li>Individuals submitting business enquiries or contacting our representatives.</li>
            <li>Prospective investors, business partners, suppliers, and other stakeholders.</li>
            <li>Individuals communicating with us through email, telephone, or other authorised channels.</li>
            <li>Candidates submitting employment-related enquiries or applications.</li>
          </ul>
          <p className="pt-1 text-[#13271e]/60 text-xs">
            This Policy does not automatically govern independent third-party websites or services linked from our website.
          </p>
        </>
      );

    case "section-3":
      return (
        <div className="space-y-3">
          <p>Depending on the nature of your interaction with us, we may collect the following categories of information:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1">
              <span className="font-mono text-[10px] text-[#e06425] font-semibold uppercase tracking-wider block">
                Category A
              </span>
              <h4 className="font-sans text-sm font-semibold text-[#13271e]">
                Personal &amp; Contact Information
              </h4>
              <p className="text-xs text-[#13271e]/75 font-light leading-relaxed">
                Name, business email address, telephone number, organisation name, job title, and other contact details voluntarily provided.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1">
              <span className="font-mono text-[10px] text-[#2d7a54] font-semibold uppercase tracking-wider block">
                Category B
              </span>
              <h4 className="font-sans text-sm font-semibold text-[#13271e]">
                Business &amp; Professional Information
              </h4>
              <p className="text-xs text-[#13271e]/75 font-light leading-relaxed">
                Information relating to business proposals, partnerships, investment enquiries, supplier communications, and professional correspondence.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1">
              <span className="font-mono text-[10px] text-[#13271e]/60 font-semibold uppercase tracking-wider block">
                Category C
              </span>
              <h4 className="font-sans text-sm font-semibold text-[#13271e]">
                Website &amp; Technical Information
              </h4>
              <p className="text-xs text-[#13271e]/75 font-light leading-relaxed">
                IP address, browser type, device information, referring pages, and basic website usage information collected through website infrastructure.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#f8faf8] border border-[#13271e]/8 space-y-1">
              <span className="font-mono text-[10px] text-[#ea6e2d] font-semibold uppercase tracking-wider block">
                Category D
              </span>
              <h4 className="font-sans text-sm font-semibold text-[#13271e]">
                Communications &amp; Enquiries
              </h4>
              <p className="text-xs text-[#13271e]/75 font-light leading-relaxed">
                Messages, documents, attachments, and other information voluntarily submitted through authorised contact channels.
              </p>
            </div>
          </div>
          <p className="text-xs text-[#13271e]/70 italic pt-1">
            We seek to collect only information reasonably necessary for specified and legitimate purposes.
          </p>
        </div>
      );

    case "section-4":
      return (
        <>
          <p>We may process personal information for the following purposes:</p>
          <ul className="space-y-1.5 pl-5 list-disc marker:text-[#e06425]">
            <li>Responding to enquiries and facilitating business communications.</li>
            <li>Evaluating potential partnerships, commercial proposals, and professional collaborations.</li>
            <li>Maintaining relationships with suppliers, investors, and other business stakeholders.</li>
            <li>Operating, maintaining, and securing our website and associated systems.</li>
            <li>Improving website functionality, accessibility, and user experience.</li>
            <li>Reviewing recruitment enquiries and employment applications.</li>
            <li>Fulfilling contractual, regulatory, and legal obligations.</li>
            <li>Preventing unauthorised access, misuse, fraud, and other security incidents.</li>
            <li>Providing corporate updates or promotional communications where permitted by applicable law and, when required, with consent.</li>
          </ul>
          <p className="pt-1 text-xs text-[#13271e]/75">
            We will not use personal information for materially unrelated purposes without an appropriate legal basis or additional consent where required.
          </p>
        </>
      );

    case "section-5":
      return (
        <>
          <p>
            Where consent is required, we seek to ensure that it is informed, specific, and provided through a clear affirmative action.
          </p>
          <p>
            Individuals may withdraw their consent by contacting us using the details provided in this Policy, subject to applicable law and any continuing lawful basis for processing.
          </p>
          <p>
            Withdrawal of consent does not affect processing lawfully carried out before withdrawal. Certain information may also be processed without consent where expressly permitted or required under applicable law.
          </p>
        </>
      );

    case "section-6":
      return (
        <>
          <p>
            Our website may use cookies or similar technologies to support essential functionality, website security, and performance.
          </p>
          <p>
            Where analytics or other optional tracking technologies are implemented, relevant information about their purposes and available choices will be provided.
          </p>
          <p>
            Visitors may manage cookies through their browser settings. Where applicable law requires prior consent for non-essential technologies, appropriate consent mechanisms will be implemented. Disabling certain technologies may affect website functionality.
          </p>
        </>
      );

    case "section-7":
      return (
        <>
          <p>
            We may disclose relevant personal information to authorised recipients where reasonably necessary for legitimate business operations or legal compliance, including:
          </p>
          <ul className="space-y-1.5 pl-5 list-disc marker:text-[#e06425]">
            <li>Technology, website-hosting, and IT-support providers.</li>
            <li>Professional advisers, auditors, and authorised consultants.</li>
            <li>Service providers supporting business communications or administration.</li>
            <li>Government authorities, regulators, or law enforcement agencies where legally required.</li>
            <li>Other parties where disclosure is authorised by the individual or otherwise permitted by applicable law.</li>
          </ul>
          <p className="pt-1">
            We seek to limit disclosures to information necessary for the relevant purpose and apply appropriate confidentiality and security obligations to service providers.
          </p>
          <div className="p-3.5 rounded-xl bg-[#e06425]/10 border border-[#e06425]/20 font-medium text-[#13271e] text-xs">
            We do not intend to use personal information collected through corporate enquiries as a commercial data product.
          </div>
        </>
      );

    case "section-8":
      return (
        <>
          <p>
            Rivanta Green recognises the importance of protecting personal information against unauthorised access, disclosure, alteration, loss, and misuse.
          </p>
          <p>
            We seek to implement appropriate technical and organisational safeguards proportionate to the nature of the information and associated risks. These safeguards may include access restrictions, secure communication methods, system monitoring, and appropriate administrative controls.
          </p>
          <p>
            Although reasonable measures are taken to protect information, no electronic transmission or storage environment can be guaranteed to be completely secure. Where a personal data breach occurs, we will take appropriate response and notification measures in accordance with applicable legal requirements.
          </p>
        </>
      );

    case "section-9":
      return (
        <>
          <p>
            We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, or for longer periods where required or permitted by applicable laws, contractual obligations, dispute-resolution needs, or regulatory requirements.
          </p>
          <p>
            When information is no longer required, we will take appropriate steps to securely delete, anonymise, or otherwise dispose of it, subject to applicable retention obligations.
          </p>
        </>
      );

    case "section-10":
      return (
        <div className="space-y-3">
          <p>
            Subject to applicable law and the commencement of relevant statutory provisions, individuals may have rights concerning their personal information, including the right to:
          </p>
          <ul className="space-y-1.5 pl-5 list-disc marker:text-[#e06425]">
            <li>Request information about the processing of their personal data.</li>
            <li>Request correction, completion, or updating of inaccurate or incomplete information.</li>
            <li>Request erasure of personal information where legally applicable.</li>
            <li>Withdraw consent where processing is based on consent.</li>
            <li>Raise concerns or grievances regarding personal data processing.</li>
            <li>Exercise other rights, including nomination rights, where provided under applicable law.</li>
          </ul>
          <div className="p-4 rounded-xl bg-[#f0f4f1] border border-[#13271e]/10 space-y-1.5">
            <p className="font-medium text-[#13271e] text-xs">
              To submit a privacy-related request, contact:{" "}
              <a
                href="mailto:support@rivantagreen.com"
                className="text-[#e06425] font-semibold hover:underline"
              >
                support@rivantagreen.com
              </a>
            </p>
            <p className="text-[11px] text-[#13271e]/70 leading-relaxed font-light">
              We may request reasonable verification of identity before processing a request to prevent unauthorised disclosure or modification. Requests will be handled in accordance with applicable legal requirements.
            </p>
          </div>
        </div>
      );

    case "section-11":
      return (
        <>
          <p>Some technology or service providers may process or store information outside India.</p>
          <p>
            Where international transfers occur, we will seek to ensure that such processing is consistent with applicable Indian data protection requirements, including any relevant restrictions imposed by competent authorities.
          </p>
        </>
      );

    case "section-12":
      return (
        <>
          <p>
            Our website may contain links to external websites, publications, platforms, or other third-party resources. These websites operate independently and may maintain their own privacy policies and data-handling practices.
          </p>
          <p>
            Rivanta Green is not responsible for the privacy practices of independently operated third-party websites. Visitors are encouraged to review the relevant policies before submitting personal information.
          </p>
        </>
      );

    case "section-13":
      return (
        <>
          <p>
            Our corporate website is intended primarily for business and professional audiences and is not specifically directed towards children.
          </p>
          <p>
            We do not intentionally solicit personal information from children through our corporate enquiry channels. Where the processing of children&apos;s personal data becomes necessary, we will apply the safeguards and consent requirements prescribed by applicable law.
          </p>
        </>
      );

    case "section-14":
      return (
        <>
          <p>
            We may review and update this Privacy Policy periodically to reflect changes in applicable laws, business activities, website functionality, or data-handling practices.
          </p>
          <p>
            The most recent version will be made available on our official website, together with its effective or last-updated date. Where required by law, we will provide additional notice or seek consent for relevant changes in processing activities.
          </p>
        </>
      );

    case "section-15":
      return (
        <>
          <p>
            Individuals may contact Rivanta Green regarding questions, requests, or concerns about the collection, use, protection, or processing of their personal information.
          </p>
          <p>
            We will review privacy-related communications and respond in accordance with applicable legal requirements. Where relevant statutory provisions apply, individuals may pursue further remedies through the appropriate regulatory authority after following the applicable grievance-redressal process.
          </p>
        </>
      );

    case "section-16":
      return (
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#13271e]/10 space-y-4">
            <div>
              <h4 className="font-sans text-base font-semibold text-[#13271e]">
                Rivanta Green Innovative Venture Private Limited
              </h4>
              <span className="font-mono text-[11px] text-[#13271e]/60 block mt-0.5">
                Corporate Office &amp; Operations Headquarters
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#13271e]/80 font-light">
              <div className="space-y-1 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e06425] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-[#13271e] block">Corporate Office:</span>
                  B-29, 3rd Floor, Kasturba Nagar,
                  <br />
                  Next to Lake City Hospital,
                  <br />
                  Chetak Bridge, Bhopal,
                  <br />
                  Madhya Pradesh, 462023, India.
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#e06425] flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#13271e]">Official Inquiries: </span>
                    <a href="mailto:support@rivantagreen.com" className="text-[#e06425] hover:underline">
                      support@rivantagreen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#e06425] flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#13271e]">Telephone: </span>
                    <a href="tel:+919893025375" className="text-[#13271e] hover:text-[#e06425]">
                      +91 98930 25375
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#e06425] flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#13271e]">Official Portal: </span>
                    <a href="https://www.rivantagreen.com" className="text-[#13271e] hover:text-[#e06425]">
                      https://www.rivantagreen.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-[#13271e]/8 text-[11px] text-[#13271e]/75 font-mono">
              Subject line for privacy requests: <strong className="text-[#13271e]">“Privacy &amp; Data Protection Request.”</strong>
            </div>

            <div className="text-[11px] text-[#13271e]/50 font-mono">
              © 2026 Rivanta Green Innovative Venture Private Limited. All rights reserved.
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}
