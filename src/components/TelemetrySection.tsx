"use client";

import React, { useState } from "react";
import { Activity, ShieldCheck, Zap, Globe, TrendingUp } from "lucide-react";

const METRICS = [
  {
    id: "clean-power",
    value: "285 MW",
    label: "Clean Capacity Installed",
    detail: "Utility-scale solar arrays & hybrid storage synchronized to regional transmission networks.",
    icon: Zap,
    trend: "+42% YoY",
  },
  {
    id: "carbon-offset",
    value: "420,000 T",
    label: "Annual CO2e Offset",
    detail: "Verified emissions avoidance audited under ISO 14064 greenhouse gas standards.",
    icon: Globe,
    trend: "99.4% Verified",
  },
  {
    id: "circularity",
    value: "100%",
    label: "Byproduct Circularity",
    detail: "Closed-loop reuse of industrial effluent and agricultural residues across portfolio assets.",
    icon: ShieldCheck,
    trend: "Zero Landfill",
  },
  {
    id: "capital",
    value: "$180M+",
    label: "Sustainable Capital Deployed",
    detail: "Green project financing and infrastructure equity structured with institutional partners.",
    icon: TrendingUp,
    trend: "AAA Environmental Rating",
  },
];

export default function TelemetrySection() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-[#eceee9] border-t border-[#13271e]/8">
      <div className="u-container u-container--1 u-container--pad">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="reveal-up">
            <div className="u-ts--1 mb-4">
              <span className="indicator-dot"></span>
              <span>Auditable Impact Telemetry</span>
            </div>
            <h2 className="font-sans font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#13271e]">
              Engineering measurable, transparent progress.
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-wider text-[#13271e]/60 flex items-center gap-2 reveal-up delay-100">
            <Activity className="w-4 h-4 text-[#e06425] animate-pulse" />
            <span>Updated Real-Time • Q4 2026 Audit</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            const isSelected = selectedMetric === idx;

            return (
              <div
                key={metric.id}
                onClick={() => setSelectedMetric(idx)}
                className={`relative rounded-2xl p-8 cursor-pointer flex flex-col justify-between min-h-[260px] border card-interactive reveal-up delay-${(idx + 1) * 75} ${
                  isSelected
                    ? "bg-[#132c21] text-white border-[#132c21] shadow-2xl scale-[1.02]"
                    : "bg-white text-[#13271e] border-[#13271e]/10 shadow-xs"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isSelected ? "bg-white/10 text-[#ea6e2d]" : "bg-[#f6f8f6] text-[#13271e]"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`font-mono text-xs uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      isSelected ? "bg-[#ea6e2d] text-white" : "bg-[#f0f4f1] text-[#2d7a54]"
                    }`}
                  >
                    {metric.trend}
                  </span>
                </div>

                <div>
                  <div
                    className={`font-sans font-light tracking-tight text-3xl sm:text-4xl md:text-[2.6rem] leading-none mb-3 ${
                      isSelected ? "text-white" : "text-[#13271e]"
                    }`}
                  >
                    {metric.value}
                  </div>
                  <div
                    className={`font-mono text-xs uppercase tracking-wider mb-2 font-medium ${
                      isSelected ? "text-[#ea6e2d]" : "text-[#13271e]/70"
                    }`}
                  >
                    {metric.label}
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      isSelected ? "text-white/70" : "text-[#13271e]/60"
                    }`}
                  >
                    {metric.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
