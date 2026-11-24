import React from "react";
import type { Metadata } from "next";
import {
  SkipLink,
  SiteHeader,
  Hero,
  About,
  PartnerNetwork,
  CaseStudies,
  PartnerMap,
  Principals,
  PartnerDirectory,
  FooterBrand,
  FooterMetadata,
  SiteHead,
} from "@/components/site/Sections";
import ContactModal from "@/components/site/ContactModal";
import SiteRuntime from "@/components/site/SiteRuntime";
import documentAttributes from "@/content/document.json";

export const metadata: Metadata = {
  title: "Rivanta Green | Sustainable Industrial Innovation",
  description:
    "Rivanta Green Innovative Venture Private Limited is developing an Indian biomass-based industrial ecosystem with focus areas including Precipitated Silica & Silicon, Sustainable Aviation Fuel (SAF), and EDSP / EOCM (Renewable Gas).",
  alternates: {
    canonical: "https://www.rivantagreen.com",
  },
  openGraph: {
    title: "Rivanta Green | Sustainable Industrial Innovation",
    description:
      "Rivanta Green Innovative Venture Private Limited is developing an Indian biomass-based industrial ecosystem with focus areas including Precipitated Silica & Silicon, Sustainable Aviation Fuel (SAF), and EDSP / EOCM (Renewable Gas).",
    url: "https://www.rivantagreen.com",
    siteName: "Rivanta Green Innovative Venture Private Limited",
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
      "Rivanta Green Innovative Venture Private Limited is developing an Indian biomass-based industrial ecosystem with focus areas including Precipitated Silica & Silicon, Sustainable Aviation Fuel (SAF), and EDSP / EOCM (Renewable Gas).",
    images: ["/images/og-rivanta.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <SiteHead />
      <SkipLink />
      <SiteHeader />
      <div id="smooth-wrapper" suppressHydrationWarning>
        <div id="smooth-content" suppressHydrationWarning>
          <main id={documentAttributes.main.id} className={documentAttributes.main.class}>
            <Hero />
            <About />
            <PartnerNetwork />
            <CaseStudies />
            <PartnerMap />
            <Principals />
            <PartnerDirectory />
            <FooterBrand />
          </main>
          <FooterMetadata />
        </div>
      </div>
      <ContactModal />
      <SiteRuntime />
    </>
  );
}
