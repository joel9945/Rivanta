"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { submitInquiry, type InquiryResult } from "@/app/actions/inquiry";

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    sector: "Renewable Energy Infrastructure",
    message: "",
    honeypot: "",
  });

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Autofocus first input when opened
    const timer = setTimeout(() => {
      firstInputRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const res = await submitInquiry(formData);
      setResult(res);
      if (res.success) {
        setFormData({
          name: "",
          email: "",
          org: "",
          sector: "Renewable Energy Infrastructure",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      setResult({
        success: false,
        message: "A network error occurred while submitting. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="partner-modal-title"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#13271e]/10 overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f6f8f6] hover:bg-[#e06425] hover:text-white flex items-center justify-center text-[#13271e] transition-colors cursor-pointer"
          aria-label="Close partnership dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {result?.success ? (
          <div className="py-12 flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#f0f7f3] text-[#2d7a54] flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3
              id="partner-modal-title"
              className="font-sans font-medium text-2xl text-[#13271e]"
            >
              Inquiry Transmitted
            </h3>
            <p className="font-sans text-sm text-[#13271e]/70 max-w-md">
              {result.message} Our technical partnerships desk will review your project parameters within 24 business hours.
            </p>
            <button
              type="button"
              onClick={() => {
                setResult(null);
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-xl bg-[#13271e] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#e06425] transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="u-ts--1 mb-2">
                <span className="indicator-dot"></span>
                <span>Institutional Engagement</span>
              </div>
              <h3
                id="partner-modal-title"
                className="font-sans font-normal text-2xl sm:text-3xl tracking-tight text-[#13271e]"
              >
                Partner with Rivanta
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#13271e]/70 font-light mt-1">
                Collaborate on multi-megawatt energy deployment, industrial decarbonization, or circular bio-ventures.
              </p>
            </div>

            {/* General Error Banner */}
            {result && !result.success && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{result.message}</span>
              </div>
            )}

            {/* Honeypot field: invisible to real users, catches bots */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="inquiry-honeypot">Leave blank</label>
              <input
                id="inquiry-honeypot"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.honeypot}
                onChange={(e) =>
                  setFormData({ ...formData, honeypot: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
                >
                  Full Name <span className="text-[#e06425]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="inquiry-name"
                  required
                  type="text"
                  placeholder="Dr. Julian Vance"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border text-sm focus:outline-none transition-colors ${
                    result?.errors?.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#13271e]/10 focus:border-[#e06425]"
                  }`}
                />
                {result?.errors?.name && (
                  <span className="text-red-500 font-sans text-[11px] mt-1 block">
                    {result.errors.name}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
                >
                  Corporate Email <span className="text-[#e06425]">*</span>
                </label>
                <input
                  id="inquiry-email"
                  required
                  type="email"
                  placeholder="vance@infrastructure.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border text-sm focus:outline-none transition-colors ${
                    result?.errors?.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#13271e]/10 focus:border-[#e06425]"
                  }`}
                />
                {result?.errors?.email && (
                  <span className="text-red-500 font-sans text-[11px] mt-1 block">
                    {result.errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="inquiry-org"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
                >
                  Organization / Entity <span className="text-[#e06425]">*</span>
                </label>
                <input
                  id="inquiry-org"
                  required
                  type="text"
                  placeholder="Renewable Energy Partners"
                  value={formData.org}
                  onChange={(e) =>
                    setFormData({ ...formData, org: e.target.value })
                  }
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border text-sm focus:outline-none transition-colors ${
                    result?.errors?.org
                      ? "border-red-400 focus:border-red-500"
                      : "border-[#13271e]/10 focus:border-[#e06425]"
                  }`}
                />
                {result?.errors?.org && (
                  <span className="text-red-500 font-sans text-[11px] mt-1 block">
                    {result.errors.org}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="inquiry-sector"
                  className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
                >
                  Focus Domain
                </label>
                <select
                  id="inquiry-sector"
                  value={formData.sector}
                  onChange={(e) =>
                    setFormData({ ...formData, sector: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border border-[#13271e]/10 text-sm focus:outline-none focus:border-[#e06425] transition-colors cursor-pointer"
                >
                  <option>Renewable Energy Infrastructure</option>
                  <option>Industrial Decarbonization</option>
                  <option>Regenerative Bio-Ventures</option>
                  <option>Capital & Joint Venture Structuring</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="inquiry-message"
                className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
              >
                Project Scope / Message
              </label>
              <textarea
                id="inquiry-message"
                rows={3}
                placeholder="Outline project capacity, geography, and strategic timeline..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border border-[#13271e]/10 text-sm focus:outline-none focus:border-[#e06425] transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#13271e] hover:bg-[#e06425] disabled:opacity-60 text-white font-mono text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <span>Submit Partnership Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
