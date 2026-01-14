import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/shared/WhatsAppButton";
import Schema from "../components/shared/Schema";
import { AnalyticsProvider } from "@/contexts/AnalyticsContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "STARSYNX PVT LTD | Digital, AI & IT Solutions Company",
  description:
    "STARSYNX delivers web, AI, ERP, SEO and digital marketing services worldwide. Get a free quote today.",
  keywords:
    "STARSYNX, SEO services, digital marketing, web development, mobile app development, UI/UX design, AI machine learning, API integration, ERP CRM, social media management, IT hardware trade, import export, Meta ads, Google ads, WordPress, Shopify, Lahore, Dubai, Canberra, Pakistan, UAE, Australia",
  authors: [{ name: "STARSYNX (PVT) LTD." }, { name: "Muhammad Hamza Nadeem" }],
  openGraph: {
    title: "STARSYNX PVT LTD | Digital, AI & IT Solutions Company",
    description:
      "STARSYNX delivers web, AI, ERP, SEO and digital marketing services worldwide. Get a free quote today.",
    url: "https://www.starsynx.com",
    siteName: "STARSYNX PVT LTD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@starsynx",
    creator: "@starsynx",
    title: "STARSYNX PVT LTD | Digital, AI & IT Solutions Company",
    description:
      "STARSYNX delivers web, AI, ERP, SEO and digital marketing services worldwide. Get a free quote today.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-slate-900`}>
        <AnalyticsProvider>
          <Schema />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppButton />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
