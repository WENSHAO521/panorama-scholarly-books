import type { Metadata } from "next";
import PoliciesPageClient from "@/app/_pages/policies/PoliciesPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": { title: "出版政策", description: "Panorama Scholarly Books 出版政策，涵蓋出版倫理、著作權歸屬、版權、開放獲取、抄襲檢查等。" },
  "zh-Hans": { title: "出版政策", description: "Panorama Scholarly Books 出版政策，涵盖出版伦理、著作权归属、版权、开放获取、抄袭检查等。" },
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
    alternates: localeAlternates("/policies", locale),
  };
}

export default async function LocalePoliciesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <PoliciesPageClient locale={locale} />;
}
