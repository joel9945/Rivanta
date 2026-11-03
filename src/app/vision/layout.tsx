import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Vision & Long-Term Ambition — Building Value for India",
  description:
    "Strengthening India's industrial capabilities by connecting domestic resources with advanced manufacturing and long-term economic opportunity.",
  alternates: {
    canonical: "https://rivantagreen.com/vision",
  },
  openGraph: {
    title: "Corporate Vision & National Development | Rivanta Green",
    description:
      "Strengthening India's industrial capabilities by connecting domestic resources with advanced manufacturing and long-term economic opportunity.",
    url: "https://rivantagreen.com/vision",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Rivanta Green Corporate Vision & National Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Vision & National Development | Rivanta Green",
    description:
      "Strengthening India's industrial capabilities by connecting domestic resources with advanced manufacturing and long-term economic opportunity.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://rivantagreen.com/vision#webpage",
      url: "https://rivantagreen.com/vision",
      name: "Corporate Vision & Long-Term Ambition — Building Value for India",
      description:
        "Long-term industrial strategy aligned with India's economic priorities, domestic manufacturing capabilities, and resource-efficient industrialization.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/vision#breadcrumb",
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
          name: "Corporate Vision",
          item: "https://rivantagreen.com/vision",
        },
      ],
    },
  ],
};

export default function VisionLayout({
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

