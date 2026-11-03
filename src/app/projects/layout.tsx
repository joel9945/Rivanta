import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects & Infrastructure — Integrated Industrial Manufacturing Campuses",
  description:
    "Planning and developing integrated industrial campuses with captive utilities, regional biomass aggregation networks, and disciplined execution benchmarks.",
  alternates: {
    canonical: "https://rivantagreen.com/projects",
  },
  openGraph: {
    title: "Projects & Industrial Infrastructure | Rivanta Green",
    description:
      "Planning and developing integrated manufacturing facilities, captive cogeneration utilities, and regional supply chain infrastructure.",
    url: "https://rivantagreen.com/projects",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Industrial Infrastructure Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Industrial Infrastructure | Rivanta Green",
    description:
      "Planning and developing integrated manufacturing facilities, captive cogeneration utilities, and regional supply chain infrastructure.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rivantagreen.com/projects#webpage",
      url: "https://rivantagreen.com/projects",
      name: "Projects & Infrastructure — Integrated Industrial Manufacturing Campuses",
      description:
        "Planning and developing integrated manufacturing facilities, captive cogeneration utilities, and regional infrastructure.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/projects#breadcrumb",
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
          name: "Projects & Infrastructure",
          item: "https://rivantagreen.com/projects",
        },
      ],
    },
  ],
};

export default function ProjectsLayout({
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

