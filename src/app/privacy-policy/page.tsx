import React from "react";
import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Rivanta Green Innovative Venture",
  description:
    "Official Privacy Policy of Rivanta Green Innovative Venture Private Limited, explaining how we collect, process, store, and protect personal data in compliance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.",
  alternates: {
    canonical: "https://www.rivantagreen.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Rivanta Green Innovative Venture",
    description:
      "Official Privacy Policy and Data Governance standards of Rivanta Green Innovative Venture Private Limited.",
    url: "https://www.rivantagreen.com/privacy-policy",
    siteName: "Rivanta Green",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Privacy Policy & Data Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Rivanta Green Innovative Venture",
    description:
      "Official Privacy Policy and Data Governance standards of Rivanta Green Innovative Venture Private Limited.",
    images: ["/images/og-rivanta.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
