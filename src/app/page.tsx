import React from "react";
import Hero from "@/components/Hero";
import PlatformHgroup from "@/components/PlatformHgroup";
import UspCards from "@/components/UspCards";
import MarqueeText from "@/components/MarqueeText";
import CompanySpotlight from "@/components/CompanySpotlight";
import TelemetrySection from "@/components/TelemetrySection";
import PostsGrid from "@/components/PostsGrid";

export default function Home() {
  return (
    <>
      {/* Framed Hero Canvas */}
      <Hero />

      {/* Platform Overview */}
      <PlatformHgroup />

      {/* 3-Cards Venture Portfolio: Green Silicon For Chips (9N Purity), CBG, SAF */}
      <UspCards />

      {/* Infinite Industrial Intelligence Ticker */}
      <MarqueeText />

      {/* Editorial Company Narrative */}
      <CompanySpotlight />

      {/* Impact Telemetry & Metrics */}
      <TelemetrySection />

      {/* Dispatches & Newsroom */}
      <PostsGrid />
    </>
  );
}
