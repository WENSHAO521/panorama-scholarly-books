import type { Metadata } from "next";
import { getAllAuthors } from "@/data/books";
import AuthorsPageClient from "@/app/_pages/authors/AuthorsPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Authors",
  description:
    "Authors and editors published by Panorama Scholarly Books.",
  alternates: localeAlternates("/authors", "en"),
};

export default function AuthorsPage() {
  const authors = getAllAuthors();
  return <AuthorsPageClient authors={authors} locale="en" />;
}
