import type { Metadata } from "next";
import ForAuthorsPageClient from "@/app/_pages/for-authors/ForAuthorsPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": {
    title: "出版學術圖書｜作者指南與提案流程",
    description: "提交學術專著、編著文集、教材、研究報告、會議論文集或跨學科學術圖書提案。",
  },
  "zh-Hans": {
    title: "出版学术图书｜作者指南与提案流程",
    description: "提交学术专著、编著文集、教材、研究报告、会议论文集或跨学科学术图书提案。",
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
