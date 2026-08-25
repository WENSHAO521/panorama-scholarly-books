import type { Metadata } from "next";
import BookSeriesPageClient from "@/app/_pages/book-series/BookSeriesPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Book Series",
  description:
    "Academic book series published under the Panorama Scholarly Books imprint.",
  alternates: localeAlternates("/book-series", "en"),
};

export default function BookSeriesPage() {
  return <BookSeriesPageClient locale="en" />;
}
