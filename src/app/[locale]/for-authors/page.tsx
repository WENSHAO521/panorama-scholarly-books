import type { Metadata } from "next";
import ForAuthorsPageClient from "@/app/_pages/for-authors/ForAuthorsPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": {
    title: "作者投稿指南｜出版計劃書及審稿流程",
    description: "提交學術專著、編著文集、教材、研究報告、會議論文集或跨學科學術著作的出版計劃書。",
  },
  "zh-Hans": {
    title: "作者投稿指南｜出版计划书及审稿流程",
    description: "提交学术专著、编著文集、教材、研究报告、会议论文集或跨学科学术著作的出版计划书。",
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
    alternates: localeAlternates("/for-authors", locale),
  };
}

export default async function LocaleForAuthorsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <ForAuthorsPageClient locale={locale} />;
}
