import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Aviation Fuel (SAF) — Strategic Pathways & Aviation Decarbonization",
  description:
    "Exploring sustainable aviation fuel opportunities through technology evaluation and prospective industrial collaboration.",
  alternates: {
    canonical: "https://www.rivantagreen.com/saf",
  },
  openGraph: {
    title: "Sustainable Aviation Fuel (SAF) Development | Rivanta Green",
    description:
      "Exploring sustainable aviation fuel opportunities through technology evaluation and prospective industrial collaboration.",
    url: "https://www.rivantagreen.com/saf",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Sustainable Aviation Fuel Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainable Aviation Fuel (SAF) Development | Rivanta Green",
    description:
      "Exploring sustainable aviation fuel opportunities through technology evaluation and prospective industrial collaboration.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.rivantagreen.com/saf#webpage",
      url: "https://www.rivantagreen.com/saf",
      name: "Sustainable Aviation Fuel (SAF) — Strategic Pathways & Aviation Decarbonization",
      description:
        "Evaluating drop-in sustainable aviation fuel development pathways and industrial partnerships to support long-term decarbonization.",
      isPartOf: {
        "@id": "https://www.rivantagreen.com/#website",
      },
      about: {
        "@id": "https://www.rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.rivantagreen.com/saf#breadcrumb",
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
          name: "Sustainable Aviation Fuels",
          item: "https://www.rivantagreen.com/saf",
        },
      ],
    },
  ],
};

export default function SafLayout({
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

