import type { Metadata } from "next";
import AuthorshipClient from "@/app/_pages/policies/authorship/AuthorshipClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Authorship and Contributorship Policy",
  description: "Authorship and contributorship policy of Panorama Scholarly Books.",
  alternates: localeAlternates("/policies/authorship", "en"),
};

export default function AuthorshipPage() {
  return <AuthorshipClient locale="en" />;
}
