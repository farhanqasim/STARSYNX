import { Metadata } from "next";
import PrivacyPage from "./PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy - STARSYNX (PVT) LTD.",
  description:
    "Read STARSYNX (PVT) LTD.'s Privacy Policy to understand how we collect, use, and protect your personal information.",
  keywords:
    "privacy policy, data protection, STARSYNX privacy, personal information, data security",
  authors: [{ name: "STARSYNX (PVT) LTD." }],
  openGraph: {
    title: "Privacy Policy - STARSYNX (PVT) LTD.",
    description:
      "Read STARSYNX (PVT) LTD.'s Privacy Policy to understand how we collect, use, and protect your personal information.",
    url: "https://www.starsynx.com/privacy",
    siteName: "STARSYNX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - STARSYNX",
    description: "STARSYNX Privacy Policy and data protection information.",
  },
};

export default function Privacy() {
  return <PrivacyPage />;
}
