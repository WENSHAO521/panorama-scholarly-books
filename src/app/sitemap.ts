import type { MetadataRoute } from "next";
import { books, getAllAuthors } from "@/data/books";

export const dynamic = "force-static";

const BASE_URL = "https://books.panorama-sg.com";

const staticRoutes = [
  "",
  "/about",
  "/authors",
  "/book-series",
  "/books",
  "/contact",
  "/distribution",
  "/for-authors",
  "/policies",
  "/policies/ai-use-policy",
  "/policies/authorship",
  "/policies/copyright",
  "/policies/open-access",
  "/policies/plagiarism",
  "/policies/publishing-ethics",
  "/publishing-services",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}/`,
    changeFrequency: route === "" || route === "/books" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/books" ? 0.9 : 0.6,
  }));

  // Sample/placeholder titles are kept off the sitemap and noindexed on their
  // own page (see generateMetadata in books/[slug]/page.tsx) so search
  // engines never surface their non-real authors, ISBNs, or DOIs.
  const bookEntries: MetadataRoute.Sitemap = books
    .filter((book) => book.citationEligible)
    .map((book) => ({
      url: `${BASE_URL}/books/${book.slug}/`,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  const authorEntries: MetadataRoute.Sitemap = getAllAuthors().map((author) => ({
    url: `${BASE_URL}/authors/${author.slug}/`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticEntries, ...bookEntries, ...authorEntries];
}
