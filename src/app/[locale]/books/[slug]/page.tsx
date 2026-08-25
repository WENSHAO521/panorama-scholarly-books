import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { books, getBookBySlug } from "@/data/books";
import BookDetailClient from "@/app/_pages/books/[slug]/BookDetailClient";
import { urlSegmentToLocale, pickLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return ["zh-hant", "zh-hans"].flatMap((locale) =>
    books.map((book) => ({ locale, slug: book.slug }))
  );
}

const languageCodes: Record<string, string> = {
  English: "en",
  "Chinese (Simplified)": "zh",
};

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
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const locale = urlSegmentToLocale(localeSegment);
  const book = getBookBySlug(slug);
  if (!book) return {};

  const citationAuthors = book.isEdited ? book.editors : book.authors;
  const pageUrl = `https://books.panorama-sg.com/books/${book.slug}/`;
  const isOpenAccess = book.license === "CC BY-NC-ND 4.0";
  const description = pickLocale(book.abstract, book.abstractZh, book.abstractZhHans, locale).slice(0, 160);

  return {
    title: book.title,
    description,
    alternates: localeAlternates(`/books/${book.slug}`, locale),
    ...(!book.citationEligible ? { robots: { index: false, follow: true } } : {}),
    other: {
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
            ...(isOpenAccess ? { citation_fulltext_world_readable: "yes" } : {}),
          }
        : {}),
    },
  };
}

export default async function LocaleBookDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeSegment, slug } = await params;
  const locale = urlSegmentToLocale(localeSegment);
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
        abstract: pickLocale(book.abstract, book.abstractZh, book.abstractZhHans, locale),
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
        locale={locale}
      />
    </>
  );
}
