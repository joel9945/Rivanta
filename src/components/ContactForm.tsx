"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { submitInquiry, type InquiryResult } from "@/app/actions/inquiry";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    sector: "Green Silicon (6N Purity / 99.999%)",
    message: "",
    honeypot: "",
  });

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
          sector: "Green Silicon (6N Purity / 99.999%)",
          message: "",
          honeypot: "",
        });
      }
    } catch {
      setResult({
        success: false,
        message: "A network error occurred while submitting your inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (result?.success) {
    return (
      <div className="py-12 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-[#f0f7f3] text-[#2d7a54] flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-sans font-medium text-2xl text-[#13271e]">
          Inquiry Successfully Transmitted
        </h3>
        <p className="font-sans text-sm text-[#13271e]/70 max-w-md">
          {result.message} A member of our technical and commercial team will contact you directly within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setResult(null)}
          className="mt-6 px-6 py-2.5 rounded-xl bg-[#13271e] hover:bg-[#e06425] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {result && !result.success && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{result.message}</span>
        </div>
      )}

      {/* Honeypot anti-spam trap */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-honeypot">Do not fill</label>
        <input
          id="contact-honeypot"
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
            htmlFor="contact-name"
            className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
          >
            Full Name <span className="text-[#e06425]">*</span>
          </label>
          <input
            id="contact-name"
            required
            type="text"
            placeholder="Dr. Julian Vance"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
            htmlFor="contact-email"
            className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
          >
            Corporate Email <span className="text-[#e06425]">*</span>
          </label>
          <input
            id="contact-email"
            required
            type="email"
            placeholder="vance@enterprise.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
            htmlFor="contact-org"
            className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
          >
            Organization / Entity <span className="text-[#e06425]">*</span>
          </label>
          <input
            id="contact-org"
            required
            type="text"
            placeholder="Industrial Materials Group"
            value={formData.org}
            onChange={(e) => setFormData({ ...formData, org: e.target.value })}
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
            htmlFor="contact-sector"
            className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
          >
            Engagement Domain
          </label>
          <select
            id="contact-sector"
            value={formData.sector}
            onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border border-[#13271e]/10 text-sm focus:outline-none focus:border-[#e06425] transition-colors cursor-pointer"
          >
            <option>Green Silicon (6N Purity / 99.999%)</option>
            <option>Compressed Biogas (CBG)</option>
            <option>Sustainable Aviation Fuel (SAF)</option>
            <option>Feedstock Sourcing & Supply</option>
            <option>Capital & Joint Venture Structuring</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-[11px] uppercase tracking-wider text-[#13271e]/70 mb-1"
        >
          Inquiry Parameters & Project Scope
        </label>
        <textarea
          id="contact-message"
          rows={4}
          placeholder="Outline target product specifications, estimated off-take volume, delivery timeline, or partnership parameters..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[#f6f8f6] border border-[#13271e]/10 text-sm focus:outline-none focus:border-[#e06425] transition-colors resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 rounded-xl bg-[#13271e] hover:bg-[#e06425] disabled:opacity-60 text-white font-mono text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Inquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Formal Business Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
