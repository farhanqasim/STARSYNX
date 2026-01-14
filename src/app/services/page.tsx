import { Metadata } from "next";
import ServicesPage from "./ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | Web, AI, ERP & Marketing Solutions",
  description:
    "Explore STARSYNX services including web development, AI, ERP and marketing solutions. Get a free quote now.",
  keywords:
    "STARSYNX services, digital services, SEO services, digital marketing, web development, mobile app development, UI UX design, AI machine learning, ERP CRM, API integration, social media management, IT hardware trade, import export, Meta ads, Google ads, WordPress, Shopify, Pakistan, UAE, Australia",
  authors: [{ name: "STARSYNX (Pvt) Ltd." }],
  openGraph: {
    title: "Our Services | Web, AI, ERP & Marketing Solutions",
    description:
      "Explore STARSYNX services including web development, AI, ERP and marketing solutions. Get a free quote now.",
    url: "https://www.starsynx.com/services",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@starsynx",
    creator: "@starsynx",
    title: "Our Services | Web, AI, ERP & Marketing Solutions",
    description:
      "Explore STARSYNX services including web development, AI, ERP and marketing solutions. Get a free quote now.",
  },
};

export default function Services() {
  return <ServicesPage />;
}
