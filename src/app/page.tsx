import React from "react";
import Hero from "@/components/Hero";
import PlatformHgroup from "@/components/PlatformHgroup";
import UspCards from "@/components/UspCards";
import MarqueeText from "@/components/MarqueeText";
import CompanySpotlight from "@/components/CompanySpotlight";
import CorporateFoundations from "@/components/CorporateFoundations";
import ValueChainGallery from "@/components/ValueChainGallery";
import SharedValueAndContribution from "@/components/SharedValueAndContribution";

export default function Home() {
  return (
    <>
      {/* 1. Framed Hero Canvas */}
      <Hero />

      {/* 2. Corporate Introduction */}
      <PlatformHgroup />

      {/* 3. Our Businesses: 6 Strategic Business Verticals */}
      <UspCards />

      {/* 4. Infinite Industrial Ticker */}
      <MarqueeText />

      {/* 5. Strategic Focus & National Priorities */}
      <CompanySpotlight />

      {/* 6. Environmental Stewardship & Operations */}
      <CorporateFoundations />

      {/* 7. Integrated Industrial Workstreams Portfolio */}
      <ValueChainGallery />

      {/* 8. Creating Shared Value: Farmers & Communities + Contribution to India */}
      <SharedValueAndContribution />
    </>
  );
}
