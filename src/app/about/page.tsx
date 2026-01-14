import { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About STARSYNX | Global Digital Solutions Company",
  description:
    "STARSYNX is a global IT solutions company providing web, AI and digital services worldwide. Contact us for a free quote.",
  keywords:
    "about STARSYNX, digital marketing company, SEO services, web development team, app development experts, UI/UX design, Dubai, Lahore, Canberra",
  authors: [{ name: "STARSYNX" }],
  openGraph: {
    title: "About STARSYNX | Global Digital Solutions Company",
    description:
      "STARSYNX is a global IT solutions company providing web, AI and digital services worldwide. Contact us for a free quote.",
    url: "https://www.starsynx.com/about",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About STARSYNX | Global Digital Solutions Company",
    description:
      "STARSYNX is a global IT solutions company providing web, AI and digital services worldwide. Contact us for a free quote.",
  },
};

export default function About() {
  return <AboutPage />;
}
