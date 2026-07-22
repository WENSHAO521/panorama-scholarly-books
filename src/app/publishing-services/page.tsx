import type { Metadata } from "next";
import PublishingServicesPageClient from "./PublishingServicesPageClient";

export const metadata: Metadata = {
  title: "Academic Book Publishing Services and Fees",
  description:
    "Review academic book publishing packages, production services, ISBN assignment policies, printing options, payment terms, and publication requirements.",
};

export default function PublishingServicesPage() {
  return <PublishingServicesPageClient />;
}
