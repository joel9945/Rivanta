import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedstock & Agricultural Value — Biomass Aggregation & Supply Chain Logistics",
  description:
    "Building structured agricultural residue procurement and logistics networks to support reliable industrial feedstock supply.",
  alternates: {
    canonical: "https://www.rivantagreen.com/feedstock",
  },
  openGraph: {
    title: "Feedstock & Agricultural Value | Rivanta Green",
    description:
      "Building structured agricultural residue procurement and logistics networks to support reliable industrial feedstock supply.",
    url: "https://www.rivantagreen.com/feedstock",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Agricultural Feedstock Sourcing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedstock & Agricultural Value | Rivanta Green",
    description:
      "Building structured agricultural residue procurement and logistics networks to support reliable industrial feedstock supply.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rivantagreen.com/feedstock#webpage",
      url: "https://www.rivantagreen.com/feedstock",
      name: "Feedstock & Agricultural Value — Biomass Aggregation & Farmer Engagement",
      description:
        "Building resilient aggregation frameworks for rice husk and agricultural straw, converting regional residue into rural economic opportunities.",
      isPartOf: {
        "@id": "https://www.rivantagreen.com/#website",
      },
      about: {
        "@id": "https://www.rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rivantagreen.com/feedstock#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.rivantagreen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Feedstock & Agritech",
          item: "https://www.rivantagreen.com/feedstock",
        },
      ],
    },
  ],
};

export default function FeedstockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

