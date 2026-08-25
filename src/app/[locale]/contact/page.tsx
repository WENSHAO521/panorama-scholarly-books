import type { Metadata } from "next";
import ContactPageClient from "@/app/_pages/contact/ContactPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "聯絡我們", description: "聯絡 Panorama Scholarly Books，洽詢出版、訂購及其他一般問題。" },
  "zh-Hans": { title: "联系我们", description: "联系 Panorama Scholarly Books，咨询出版、订购及其他一般问题。" },
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
    alternates: localeAlternates("/contact", locale),
  };
}

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <ContactPageClient locale={locale} />;
}
