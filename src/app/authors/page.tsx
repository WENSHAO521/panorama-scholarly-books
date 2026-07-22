import type { Metadata } from "next";
import { getAllAuthors } from "@/data/books";
import AuthorsPageClient from "./AuthorsPageClient";

export const metadata: Metadata = {
  title: "Authors",
  description:
    "Authors and editors published by Panorama Scholarly Books.",
};

export default function AuthorsPage() {
  const authors = getAllAuthors();
  return <AuthorsPageClient authors={authors} />;
}
