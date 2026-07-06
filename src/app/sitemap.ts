import type { MetadataRoute } from "next";
import { books } from "@/data/books";

export const dynamic = "force-static";

const BASE_URL = "https://books.panorama-sg.com";

const staticRoutes = [
  "",
  "/about",
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

  const bookEntries: MetadataRoute.Sitemap = books.map((book) => ({
    url: `${BASE_URL}/books/${book.slug}/`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...bookEntries];
}
