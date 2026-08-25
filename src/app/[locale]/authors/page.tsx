import type { Metadata } from "next";
import { getAllAuthors } from "@/data/books";
import AuthorsPageClient from "@/app/_pages/authors/AuthorsPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "作者", description: "在 Panorama Scholarly Books 品牌下出版的作者與編者。" },
  "zh-Hans": { title: "作者", description: "在 Panorama Scholarly Books 品牌下出版的作者与编者。" },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = urlSegmentToLocale((await params).locale);
  if (locale === "en") return {};
  return {
    title: META[locale].title,
    description: META[locale].description,
    alternates: localeAlternates("/authors", locale),
  };
}

export default async function LocaleAuthorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  const authors = getAllAuthors();
  return <AuthorsPageClient authors={authors} locale={locale} />;
}
