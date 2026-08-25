import type { Metadata } from "next";
import OpenAccessClient from "@/app/_pages/policies/open-access/OpenAccessClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "開放獲取圖書政策", description: "Panorama Scholarly Books 開放獲取圖書政策。" },
  "zh-Hans": { title: "开放获取图书政策", description: "Panorama Scholarly Books 开放获取图书政策。" },
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
    alternates: localeAlternates("/policies/open-access", locale),
  };
}

export default async function LocaleOpenAccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <OpenAccessClient locale={locale} />;
}
