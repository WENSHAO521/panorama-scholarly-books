import type { Metadata } from "next";
import ForAuthorsPageClient from "./ForAuthorsPageClient";

export const metadata: Metadata = {
  title: "Publish an Academic Book | Author Guidelines and Proposal Process",
  description:
    "Submit a scholarly monograph, edited volume, textbook, research report, conference proceedings, or interdisciplinary academic book proposal.",
};

export default function ForAuthorsPage() {
  return <ForAuthorsPageClient />;
}
