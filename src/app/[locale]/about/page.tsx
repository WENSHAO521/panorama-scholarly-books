import type { Metadata } from "next";
import AboutPageClient from "@/app/_pages/about/AboutPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "關於我們", description: "關於 Panorama Scholarly Books——使命、出版範疇與出版者資訊。" },
  "zh-Hans": { title: "关于我们", description: "关于 Panorama Scholarly Books——使命、出版范畴与出版者信息。" },
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
    alternates: localeAlternates("/about", locale),
  };
}

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <AboutPageClient locale={locale} />;
}
