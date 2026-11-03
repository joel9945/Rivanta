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
  title: "Rivanta Green | Sustainable Industrial Innovation",
  description:
    "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
  alternates: {
    canonical: "https://rivantagreen.com",
  },
  openGraph: {
    title: "Rivanta Green | Sustainable Industrial Innovation",
    description:
      "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
    url: "https://rivantagreen.com",
    siteName: "Rivanta Green",
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
    title: "Rivanta Green | Sustainable Industrial Innovation",
    description:
      "Rivanta Green is developing integrated industrial initiatives across bio-silica, compressed biogas, sustainable aviation fuel and biomass valorisation in India.",
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
