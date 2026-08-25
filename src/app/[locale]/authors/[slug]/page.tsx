import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllAuthors, getAuthorBySlug } from "@/data/books";
import AuthorDetailClient from "@/app/_pages/authors/[slug]/AuthorDetailClient";
import { urlSegmentToLocale, pickLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  const authors = getAllAuthors();
  return ["zh-hant", "zh-hans"].flatMap((locale) =>
    authors.map((author) => ({ locale, slug: author.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const locale = urlSegmentToLocale(localeSegment);
  const author = getAuthorBySlug(slug);
  if (!author) return {};

  const bio = author.bio ? pickLocale(author.bio, author.bioZh, author.bioZhHans, locale) : undefined;
  const fallbackDescription =
    locale === "zh-Hant"
      ? `${author.name} 在 Panorama Scholarly Books 出版的著作。`
      : `${author.name} 在 Panorama Scholarly Books 出版的著作。`;

  return {
    title: author.name,
    description: bio ? bio.slice(0, 160) : fallbackDescription,
    alternates: localeAlternates(`/authors/${author.slug}`, locale),
  };
}

export default async function LocaleAuthorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeSegment, slug } = await params;
  const locale = urlSegmentToLocale(localeSegment);
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  return <AuthorDetailClient author={author} locale={locale} />;
}
