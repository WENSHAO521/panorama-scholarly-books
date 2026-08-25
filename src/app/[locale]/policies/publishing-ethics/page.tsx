import type { Metadata } from "next";
import PublishingEthicsClient from "@/app/_pages/policies/publishing-ethics/PublishingEthicsClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "出版倫理", description: "Panorama Scholarly Books 出版倫理政策。" },
  "zh-Hans": { title: "出版伦理", description: "Panorama Scholarly Books 出版伦理政策。" },
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
    alternates: localeAlternates("/policies/publishing-ethics", locale),
  };
}

export default async function LocalePublishingEthicsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <PublishingEthicsClient locale={locale} />;
}
