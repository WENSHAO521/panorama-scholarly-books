import type { Metadata } from "next";
import BooksPageClient from "./BooksPageClient";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Browse the full catalogue of published and forthcoming academic monographs, edited volumes, and research reports from Panorama Scholarly Books.",
};

export default function BooksPage() {
  return <BooksPageClient />;
}
