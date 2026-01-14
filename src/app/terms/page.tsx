import { Metadata } from "next";
import TermsPage from "./TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions - STARSYNX (PVT) LTD.",
  description:
    "Read STARSYNX (PVT) LTD.'s Terms & Conditions to understand the terms of use for our services and website.",
  keywords:
    "terms and conditions, terms of service, STARSYNX terms, service agreement, user agreement",
  authors: [{ name: "STARSYNX (PVT) LTD." }],
  openGraph: {
    title: "Terms & Conditions - STARSYNX (PVT) LTD.",
    description:
      "Read STARSYNX (PVT) LTD.'s Terms & Conditions to understand the terms of use for our services and website.",
    url: "https://www.starsynx.com/terms",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions - STARSYNX",
    description: "STARSYNX Terms & Conditions and service agreement.",
  },
};

export default function Terms() {
  return <TermsPage />;
}
