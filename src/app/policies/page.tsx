import type { Metadata } from "next";
import PoliciesPageClient from "./PoliciesPageClient";

export const metadata: Metadata = {
  title: "Publishing Policies",
  description:
    "Publishing policies of Panorama Scholarly Books, covering ethics, authorship, copyright, open access, plagiarism, and more.",
};

export default function PoliciesPage() {
  return <PoliciesPageClient />;
}
