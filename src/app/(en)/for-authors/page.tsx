import type { Metadata } from "next";
import ForAuthorsPageClient from "@/app/_pages/for-authors/ForAuthorsPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Publish an Academic Book | Author Guidelines and Proposal Process",
  description:
    "Submit a scholarly monograph, edited volume, textbook, research report, conference proceedings, or interdisciplinary academic book proposal.",
  alternates: localeAlternates("/for-authors", "en"),
};

export default function ForAuthorsPage() {
  return <ForAuthorsPageClient locale="en" />;
}
