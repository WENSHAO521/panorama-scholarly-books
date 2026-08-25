import type { Metadata } from "next";
import PlagiarismClient from "@/app/_pages/policies/plagiarism/PlagiarismClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "抄襲與相似度檢查政策", description: "Panorama Scholarly Books 抄襲與文字相似度政策。" },
  "zh-Hans": { title: "抄袭与相似度检查政策", description: "Panorama Scholarly Books 抄袭与文本相似度政策。" },
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
    alternates: localeAlternates("/policies/plagiarism", locale),
  };
}

export default async function LocalePlagiarismPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <PlagiarismClient locale={locale} />;
}
