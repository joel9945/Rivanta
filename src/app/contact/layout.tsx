import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Corporate Desk — Industrial Inquiries & Commercial Partnerships",
  description:
    "Connect with Rivanta Green for strategic partnerships, technology collaboration, feedstock sourcing and prospective commercial opportunities.",
  alternates: {
    canonical: "https://rivantagreen.com/contact",
  },
  openGraph: {
    title: "Contact Corporate Desk | Rivanta Green",
    description:
      "Connect with Rivanta Green for strategic partnerships, technology collaboration, feedstock sourcing and prospective commercial opportunities.",
    url: "https://rivantagreen.com/contact",
    images: [
      {
        url: "/images/og-rivanta.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Rivanta Green Corporate Desk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Corporate Desk | Rivanta Green",
    description:
      "Connect with Rivanta Green for strategic partnerships, technology collaboration, feedstock sourcing and prospective commercial opportunities.",
    images: ["/images/og-rivanta.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://rivantagreen.com/contact#webpage",
      url: "https://rivantagreen.com/contact",
      name: "Contact Corporate Desk — Industrial Inquiries & Commercial Partnerships",
      description:
        "Connect with Rivanta Green for industrial partnerships, feedstock aggregation, commercial off-take discussions, and corporate inquiries.",
      isPartOf: {
        "@id": "https://rivantagreen.com/#website",
      },
      about: {
        "@id": "https://rivantagreen.com/#organization",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://rivantagreen.com/contact#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can industrial partners inquire about Biogenic Silica?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Industrial procurement and technical teams in rubber compounding, construction materials, and specialty coatings can request material specification summaries and discuss technical feasibility. Submit your inquiry selecting 'Advanced Materials & Biogenic Silica' along with application requirements.",
          },
        },
        {
          "@type": "Question",
          name: "What commercial structures are used for Compressed Biogas (CBG) off-take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Commercial off-take discussions for planned facilities are structured around long-term agreements with City Gas Distribution (CGD) entities and industrial consumers, with delivery evaluated via regional pipeline interconnection or mobile cascade logistics.",
          },
        },
        {
          "@type": "Question",
          name: "How can regional millers and Farmer Producer Organizations (FPOs) partner with Rivanta?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We develop multi-year biomass aggregation frameworks offering structured pricing, organized regional collection, and verified moisture testing to support dependable secondary value for agricultural communities.",
          },
        },
        {
          "@type": "Question",
          name: "Are technical specifications available for industrial partners?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Preliminary material specification summaries and physical property profiles are shared with qualified industrial partners under formal technical review.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://rivantagreen.com/contact#breadcrumb",
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
          name: "Contact Us",
          item: "https://rivantagreen.com/contact",
        },
      ],
    },
  ],
};

export default function ContactLayout({
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

