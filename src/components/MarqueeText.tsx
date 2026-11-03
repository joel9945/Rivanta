import React from "react";

interface MarqueeTextProps {
  phrase?: string;
  theme?: "light" | "dark" | "sage";
}

export default function MarqueeText({
  phrase = "ADVANCED MATERIALS — SUSTAINABLE FUELS — RENEWABLE ENERGY — RESOURCE RECOVERY — INDUSTRIAL INFRASTRUCTURE — BUILDING INDUSTRIAL VALUE FROM INDIA'S RESOURCES — ",
  theme = "light",
}: MarqueeTextProps) {
  const bgClass =
    theme === "dark"
      ? "bg-[#132c21] text-white/90 border-white/10"
      : theme === "sage"
      ? "bg-[#d6e8dc] text-[#13271e] border-[#13271e]/10"
      : "bg-[#f6f8f6] text-[#13271e]/80 border-[#13271e]/10";

  const dotColor = theme === "dark" ? "text-[#ea6e2d]" : "text-[#e06425]";

  return (
    <section className={`w-full py-7 md:py-9 border-y overflow-hidden select-none ${bgClass}`}>
      <div className="marquee">
        <div className="marquee_scroll">
          <div className="marquee_collection">
            <span className="font-mono text-base sm:text-lg md:text-xl uppercase tracking-wider whitespace-nowrap flex items-center gap-4">
              <span>{phrase}</span>
              <span className={`inline-block ${dotColor}`}>✦</span>
            </span>
          </div>
          <div className="marquee_collection" aria-hidden="true">
            <span className="font-mono text-base sm:text-lg md:text-xl uppercase tracking-wider whitespace-nowrap flex items-center gap-4">
              <span>{phrase}</span>
              <span className={`inline-block ${dotColor}`}>✦</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
