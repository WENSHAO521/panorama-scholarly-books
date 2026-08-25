import type { Metadata } from "next";
import BookSeriesPageClient from "@/app/_pages/book-series/BookSeriesPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "書系", description: "Panorama Scholarly Books 品牌下出版的學術書系。" },
  "zh-Hans": { title: "书系", description: "Panorama Scholarly Books 品牌下出版的学术书系。" },
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
    alternates: localeAlternates("/book-series", locale),
  };
}

export default async function LocaleBookSeriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <BookSeriesPageClient locale={locale} />;
}
