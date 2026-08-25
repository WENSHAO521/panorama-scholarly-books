import type { Metadata } from "next";
import DistributionPageClient from "@/app/_pages/distribution/DistributionPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Distribution",
  description:
    "Information about book sales and distribution channels for Panorama Scholarly Books titles.",
  alternates: localeAlternates("/distribution", "en"),
};

export default function DistributionPage() {
  return <DistributionPageClient locale="en" />;
}
