import type { Metadata } from "next";
import DistributionPageClient from "./DistributionPageClient";

export const metadata: Metadata = {
  title: "Distribution",
  description:
    "Information about book sales and distribution channels for Panorama Scholarly Books titles.",
};

export default function DistributionPage() {
  return <DistributionPageClient />;
}
