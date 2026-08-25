import type { Metadata } from "next";
import BooksPageClient from "@/app/_pages/books/BooksPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": {
    title: "書目",
    description: "瀏覽 Panorama Scholarly Books 已出版及即將出版的學術專著、編著文集與研究報告完整目錄。",
  },
  "zh-Hans": {
    title: "书目",
    description: "浏览 Panorama Scholarly Books 已出版及即将出版的学术专著、编著文集与研究报告完整目录。",
  },
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
    alternates: localeAlternates("/books", locale),
  };
}

export default async function LocaleBooksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <BooksPageClient locale={locale} />;
}
