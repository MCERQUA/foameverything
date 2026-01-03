import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = "https://foameverything.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Foam Everything | Spray Foam Industry Merchandise & Apparel",
    template: "%s | Foam Everything",
  },
  description:
    "The #1 destination for spray foam industry merchandise. Premium hoodies, t-shirts & longsleeves for spray foam professionals. Vegas 2026 pre-orders now available with early bird pricing.",
  keywords: [
    "spray foam",
    "spray foam merchandise",
    "spray foam apparel",
    "spray foam industry",
    "spray foam hoodies",
    "spray foam t-shirts",
    "insulation contractor apparel",
    "Vegas 2026",
    "SprayFoam convention",
    "SPFA",
    "foam insulation",
    "contractor merchandise",
    "Swag Wars",
    "spray foam racing",
    "NASCAR spray foam",
  ],
  authors: [{ name: "Foam Everything" }],
  creator: "Foam Everything",
  publisher: "Foam Everything",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Foam Everything | Spray Foam Industry Merchandise",
    description:
      "Premium apparel for spray foam professionals. Hoodies, t-shirts, and longsleeves with industry-themed designs. Vegas 2026 pre-orders available!",
    url: baseUrl,
    siteName: "Foam Everything",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Foam Everything - Spray Foam Industry Merchandise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foam Everything | Spray Foam Industry Merchandise",
    description:
      "Premium apparel for spray foam professionals. Vegas 2026 pre-orders now available!",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  manifest: "/manifest.json",
  category: "ecommerce",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Schema for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Foam Everything",
  url: baseUrl,
  logo: `${baseUrl}/images/smlogo.png`,
  description:
    "The #1 destination for spray foam industry merchandise and apparel.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@foameverything.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://sprayfoamtv.com",
    "https://sprayfoamradio.com",
    "https://nerffusion.com",
  ],
};

// JSON-LD Schema for WebSite with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Foam Everything",
  url: baseUrl,
  description: "Spray foam industry merchandise and apparel store",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${baseUrl}/shop?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// JSON-LD Schema for Store
const storeSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Foam Everything",
  url: baseUrl,
  description:
    "Premium spray foam industry merchandise including hoodies, t-shirts, and longsleeves.",
  priceRange: "$25-$55",
  image: `${baseUrl}/images/smlogo.png`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  paymentAccepted: ["Credit Card", "Debit Card"],
  currenciesAccepted: "USD",
};

// JSON-LD Schema for Event (Vegas 2026)
const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "SprayFoam 2026 Convention & Expo",
  description:
    "The #1 event for spray foam professionals featuring educational sessions, expo hall, certifications, and networking.",
  startDate: "2026-03-22",
  endDate: "2026-03-25",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Westgate Las Vegas Resort & Casino",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3000 Paradise Road",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89109",
      addressCountry: "US",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Spray Polyurethane Foam Alliance (SPFA)",
    url: "https://www.sprayfoam.org/",
  },
  offers: {
    "@type": "Offer",
    url: "https://sprayfoamshow.org/",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="store-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(storeSchema),
          }}
        />
        <Script
          id="event-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[var(--bg-black)] text-white`}
      >
        <Providers>
          <Header />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
