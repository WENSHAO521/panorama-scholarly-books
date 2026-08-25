import type { Metadata } from "next";
import CopyrightClient from "@/app/_pages/policies/copyright/CopyrightClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "版權與授權政策", description: "Panorama Scholarly Books 版權與授權政策。" },
  "zh-Hans": { title: "版权与授权政策", description: "Panorama Scholarly Books 版权与授权政策。" },
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
    alternates: localeAlternates("/policies/copyright", locale),
  };
}

export default async function LocaleCopyrightPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <CopyrightClient locale={locale} />;
}
