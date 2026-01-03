import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Foam Everything | Spray Foam Industry Merchandise",
  description: "The #1 destination for spray foam industry merchandise. Premium apparel for spray foam professionals. Vegas 2026 pre-orders now available.",
  keywords: ["spray foam", "merchandise", "apparel", "hoodies", "t-shirts", "Vegas 2026", "convention"],
  openGraph: {
    title: "Foam Everything | Spray Foam Industry Merchandise",
    description: "Premium apparel for spray foam professionals",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[var(--bg-black)] text-white`}>
        <Providers>
          <Header />
          <main className="pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
