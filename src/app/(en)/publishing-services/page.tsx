import type { Metadata } from "next";
import PublishingServicesPageClient from "@/app/_pages/publishing-services/PublishingServicesPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Academic Book Publishing Services and Fees",
  description:
    "Review academic book publishing packages, production services, ISBN assignment policies, printing options, payment terms, and publication requirements.",
  alternates: localeAlternates("/publishing-services", "en"),
};

export default function PublishingServicesPage() {
  return <PublishingServicesPageClient locale="en" />;
}
