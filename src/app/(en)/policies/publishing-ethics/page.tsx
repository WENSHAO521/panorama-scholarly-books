import type { Metadata } from "next";
import PublishingEthicsClient from "@/app/_pages/policies/publishing-ethics/PublishingEthicsClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Publishing Ethics",
  description: "Publishing ethics policy of Panorama Scholarly Books.",
  alternates: localeAlternates("/policies/publishing-ethics", "en"),
};

export default function PublishingEthicsPage() {
  return <PublishingEthicsClient locale="en" />;
}
