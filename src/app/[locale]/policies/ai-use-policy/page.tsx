import type { Metadata } from "next";
import AIUsePolicyClient from "@/app/_pages/policies/ai-use-policy/AIUsePolicyClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "人工智能使用政策", description: "有關投稿至 Panorama Scholarly Books 之書稿使用人工智能工具的政策。" },
  "zh-Hans": { title: "人工智能使用政策", description: "有关投稿至 Panorama Scholarly Books 的书稿使用人工智能工具的政策。" },
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
    alternates: localeAlternates("/policies/ai-use-policy", locale),
  };
}

export default async function LocaleAIUsePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <AIUsePolicyClient locale={locale} />;
}
