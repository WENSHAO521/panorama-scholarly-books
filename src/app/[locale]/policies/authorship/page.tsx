import type { Metadata } from "next";
import AuthorshipClient from "@/app/_pages/policies/authorship/AuthorshipClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "著作權歸屬與貢獻政策", description: "Panorama Scholarly Books 著作權歸屬與貢獻政策。" },
  "zh-Hans": { title: "著作权归属与贡献政策", description: "Panorama Scholarly Books 著作权归属与贡献政策。" },
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
    alternates: localeAlternates("/policies/authorship", locale),
  };
}

export default async function LocaleAuthorshipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <AuthorshipClient locale={locale} />;
}
