import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import PlatformHgroup from "@/components/PlatformHgroup";
import MarqueeText from "@/components/MarqueeText";
import IndustrialOpportunity from "@/components/IndustrialOpportunity";
import CompanySpotlight from "@/components/CompanySpotlight";
import CorporateFoundations from "@/components/CorporateFoundations";
import ValueChainGallery from "@/components/ValueChainGallery";

export const metadata: Metadata = {
  title: "Rivanta Green — Diversified Industrial Enterprise",
  description:
    "Building industrial value from India's resources through advanced materials, renewable fuels and integrated manufacturing.",
  alternates: {
    canonical: "https://rivantagreen.com",
  },
  openGraph: {
    title: "Rivanta Green — Diversified Industrial Enterprise",
    description:
      "Building industrial value from India's resources through advanced materials, renewable fuels and integrated manufacturing.",
    url: "https://rivantagreen.com",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Industrial Development Facility Concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rivanta Green — Diversified Industrial Enterprise",
    description:
      "Building industrial value from India's resources through advanced materials, renewable fuels and integrated manufacturing.",
    images: ["/images/og-rivanta.jpg"],
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Framed Hero Canvas */}
      <Hero />

      {/* 2. Corporate Introduction */}
      <PlatformHgroup />

      {/* 3. Infinite Industrial Ticker */}
      <MarqueeText />

      {/* 4. India's Industrial Opportunity */}
      <IndustrialOpportunity />

      {/* 5. Strategic Focus & National Priorities */}
      <CompanySpotlight />

      {/* 6. Environmental Stewardship & Operations */}
      <CorporateFoundations />

      {/* 7. Integrated Industrial Workstreams Portfolio */}
      <ValueChainGallery />
    </>
  );
}
