import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact STARSYNX | Digital & IT Solutions Company",
  description:
    "Contact STARSYNX for web, AI, ERP, SEO and digital marketing services worldwide. Request a free quote today.",
  keywords:
    "contact STARSYNX, digital consultation, SEO services quote, digital marketing services, web development Dubai, app development Pakistan, UI/UX design Australia",
  authors: [{ name: "STARSYNX" }],
  openGraph: {
    title: "Contact STARSYNX | Digital & IT Solutions Company",
    description:
      "Contact STARSYNX for web, AI, ERP, SEO and digital marketing services worldwide. Request a free quote today.",
    url: "https://www.starsynx.com/contact",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact STARSYNX | Digital & IT Solutions Company",
    description:
      "Contact STARSYNX for web, AI, ERP, SEO and digital marketing services worldwide. Request a free quote today.",
  },
};

export default function Contact() {
  return <ContactPage />;
}
