import type { Metadata } from "next";
import DistributionPageClient from "@/app/_pages/distribution/DistributionPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "發行", description: "Panorama Scholarly Books 書目銷售與發行渠道資訊。" },
  "zh-Hans": { title: "发行", description: "Panorama Scholarly Books 书目销售与发行渠道信息。" },
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
    alternates: localeAlternates("/distribution", locale),
  };
}

export default async function LocaleDistributionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <DistributionPageClient locale={locale} />;
}
