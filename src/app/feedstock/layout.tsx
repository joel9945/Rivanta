import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedstock & Agricultural Value — Biomass Aggregation & Farmer Engagement",
  description:
    "Building resilient aggregation frameworks for rice husk and agricultural straw, converting regional crop residue challenges into structured rural economic participation.",
  alternates: {
    canonical: "https://rivantagreen.com/feedstock",
  },
  openGraph: {
    title: "Feedstock & Agricultural Value | Rivanta Green",
    description:
      "Structured biomass aggregation frameworks converting agricultural residues into commercial feedstock and rural economic opportunities.",
    url: "https://rivantagreen.com/feedstock",
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
      "Structured biomass aggregation frameworks converting agricultural residues into commercial feedstock and rural economic opportunities.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rivantagreen.com/feedstock#webpage",
      url: "https://rivantagreen.com/feedstock",
      name: "Feedstock & Agricultural Value — Biomass Aggregation & Farmer Engagement",
      description:
        "Building resilient aggregation frameworks for rice husk and agricultural straw, converting regional residue into rural economic opportunities.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/feedstock#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://rivantagreen.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Feedstock & Agritech",
          item: "https://rivantagreen.com/feedstock",
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

