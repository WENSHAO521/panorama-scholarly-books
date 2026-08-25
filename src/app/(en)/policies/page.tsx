import type { Metadata } from "next";
import PoliciesPageClient from "@/app/_pages/policies/PoliciesPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Publishing Policies",
  description:
    "Publishing policies of Panorama Scholarly Books, covering ethics, authorship, copyright, open access, plagiarism, and more.",
  alternates: localeAlternates("/policies", "en"),
};

export default function PoliciesPage() {
  return <PoliciesPageClient locale="en" />;
}
