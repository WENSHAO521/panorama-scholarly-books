import type { Metadata } from "next";
import BooksPageClient from "@/app/_pages/books/BooksPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Browse the full catalogue of published and forthcoming academic monographs, edited volumes, and research reports from Panorama Scholarly Books.",
  alternates: localeAlternates("/books", "en"),
};

export default function BooksPage() {
  return <BooksPageClient locale="en" />;
}
