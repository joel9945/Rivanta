import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability & Environmental Stewardship — Circular Industrial Development",
  description:
    "Embedding resource efficiency, responsible water management, emissions control and circular material utilization into industrial development.",
  alternates: {
    canonical: "https://rivantagreen.com/sustainability",
  },
  openGraph: {
    title: "Sustainability & Environmental Stewardship | Rivanta Green",
    description:
      "Embedding resource efficiency, responsible water management, emissions control and circular material utilization into industrial development.",
    url: "https://rivantagreen.com/sustainability",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Sustainability and Circular Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainability & Environmental Stewardship | Rivanta Green",
    description:
      "Embedding resource efficiency, responsible water management, emissions control and circular material utilization into industrial development.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rivantagreen.com/sustainability#webpage",
      url: "https://rivantagreen.com/sustainability",
      name: "Sustainability & Environmental Stewardship — Circular Industrial Development",
      description:
        "Responsible resource utilization, crop-residue air quality mitigation, co-product recovery, and disciplined environmental governance.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/sustainability#breadcrumb",
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
          name: "Sustainability",
          item: "https://rivantagreen.com/sustainability",
        },
      ],
    },
  ],
};

export default function SustainabilityLayout({
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

