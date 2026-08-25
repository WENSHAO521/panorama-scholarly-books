import type { Metadata } from "next";
import PlagiarismClient from "@/app/_pages/policies/plagiarism/PlagiarismClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Plagiarism and Similarity Check Policy",
  description: "Plagiarism and text similarity policy of Panorama Scholarly Books.",
  alternates: localeAlternates("/policies/plagiarism", "en"),
};

export default function PlagiarismPage() {
  return <PlagiarismClient locale="en" />;
}
