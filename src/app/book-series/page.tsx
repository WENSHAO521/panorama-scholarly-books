import type { Metadata } from "next";
import BookSeriesPageClient from "./BookSeriesPageClient";

export const metadata: Metadata = {
  title: "Book Series",
  description:
    "Academic book series published under the Panorama Scholarly Books imprint.",
};

export default function BookSeriesPage() {
  return <BookSeriesPageClient />;
}
