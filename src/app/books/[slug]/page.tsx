import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, getBookBySlug } from "@/data/books";
import BookDetailClient from "./BookDetailClient";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

const languageCodes: Record<string, string> = {
  English: "en",
  "Chinese (Simplified)": "zh",
};

// PSG Format — Panorama Scholarly Group's house citation style
// (Chicago-style author-date structure with APA-style digital elements)
function invertAuthorName(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length < 2) return name;
  const surname = parts.pop();
  return `${surname}, ${parts.join(" ")}`;
}

function formatPSGAuthorList(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return invertAuthorName(names[0]);
  const [first, ...rest] = names;
  const inverted = invertAuthorName(first);
  if (rest.length === 1) return `${inverted}, and ${rest[0]}`;
  return `${inverted}, ${rest.slice(0, -1).join(", ")}, and ${rest[rest.length - 1]}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  const citationAuthors = book.isEdited ? book.editors : book.authors;
  const pageUrl = `https://books.panorama-sg.com/books/${book.slug}/`;
  const isOpenAccess = book.license === "CC BY-NC-ND 4.0";

  return {
    title: book.title,
    description: book.abstract.slice(0, 160),
    alternates: {
      canonical: pageUrl,
    },
    // Sample/placeholder titles are excluded from search engines entirely —
    // they carry non-real authors, ISBNs, and DOIs, so indexing them (on
    // Google generally or Scholar specifically) would risk the whole
    // domain's credibility. See the citationEligible guard below.
    ...(!book.citationEligible ? { robots: { index: false, follow: true } } : {}),
    other: {
      // Highwire Press citation_* tags are read by Google Scholar as claims of a
      // real, citable publication. Only emit them for verified, real titles —
      // demo/placeholder titles must not expose fabricated authors or DOIs to
      // a scholarly crawler, which would risk the whole domain's credibility.
      ...(book.citationEligible
        ? {
            citation_title: book.title + (book.subtitle ? `: ${book.subtitle}` : ""),
            citation_author: citationAuthors,
            citation_publication_date: String(book.publicationYear),
            citation_publisher: "Panorama Scholarly Group Limited",
            citation_language: languageCodes[book.language] ?? "en",
            ...(/^\d/.test(book.isbn) ? { citation_isbn: book.isbn } : {}),
            citation_abstract_html_url: pageUrl,
            ...(book.doi ? { citation_doi: book.doi } : {}),
            ...(book.subjectArea.length ? { citation_keywords: book.subjectArea } : {}),
            // Signals to Google Scholar that the full text is freely readable, no login/paywall
            ...(isOpenAccess ? { citation_fulltext_world_readable: "yes" } : {}),
          }
        : {}),
    },
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const credit = book.isEdited
    ? book.editors.join(", ") + (book.editors.length === 1 ? " (Ed.)" : " (Eds.)")
    : book.authors.join(", ");

  const citationNames = book.isEdited ? book.editors : book.authors;
  const citationAuthorList =
    formatPSGAuthorList(citationNames) +
    (book.isEdited ? (book.editors.length === 1 ? ", ed." : ", eds.") : "");
  const citationPSG = `${citationAuthorList}. ${book.publicationYear}. ${book.title}${book.subtitle ? `: ${book.subtitle}` : ""}. ${book.placeOfPublication}: Panorama Scholarly Group Limited.${book.doi ? ` https://doi.org/${book.doi}` : ""}`;

  // Structured data is only emitted for verified, real titles — see the
  // citationEligible guard in generateMetadata for the same rationale.
  const jsonLd = book.citationEligible
    ? {
        "@context": "https://schema.org",
        "@type": "Book",
        name: book.title,
        ...(book.subtitle ? { alternateName: book.subtitle } : {}),
        author: citationNames.map((name) => ({ "@type": "Person", name })),
        publisher: {
          "@type": "Organization",
          name: "Panorama Scholarly Group Limited",
        },
        datePublished: String(book.publicationYear),
        inLanguage: languageCodes[book.language] ?? "en",
        ...(/^\d/.test(book.isbn) ? { isbn: book.isbn } : {}),
        ...(book.doi ? { sameAs: `https://doi.org/${book.doi}` } : {}),
        url: `https://books.panorama-sg.com/books/${book.slug}/`,
        abstract: book.abstract,
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BookDetailClient
        book={book}
        credit={credit}
        citationNames={citationNames}
        citationPSG={citationPSG}
      />
    </>
  );
}
