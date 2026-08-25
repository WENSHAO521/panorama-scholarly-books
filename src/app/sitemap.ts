import type { MetadataRoute } from "next";
import { books, getAllAuthors } from "@/data/books";
import { LOCALES } from "@/lib/locale";
import { urlFor, localeAlternates } from "@/lib/seo";

export const dynamic = "force-static";

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
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: urlFor(route, locale),
      changeFrequency: (route === "" || route === "/books" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : route === "/books" ? 0.9 : 0.6,
      alternates: localeAlternates(route, locale),
    }))
  );

  // Sample/placeholder titles are kept off the sitemap and noindexed on their
  // own page (see generateMetadata in books/[slug]/page.tsx) so search
  // engines never surface their non-real authors, ISBNs, or DOIs.
  const bookEntries: MetadataRoute.Sitemap = books
    .filter((book) => book.citationEligible)
    .flatMap((book) =>
      LOCALES.map((locale) => ({
        url: urlFor(`/books/${book.slug}`, locale),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: localeAlternates(`/books/${book.slug}`, locale),
      }))
    );

  const authorEntries: MetadataRoute.Sitemap = getAllAuthors().flatMap((author) =>
    LOCALES.map((locale) => ({
      url: urlFor(`/authors/${author.slug}`, locale),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: localeAlternates(`/authors/${author.slug}`, locale),
    }))
  );

  return [...staticEntries, ...bookEntries, ...authorEntries];
}
