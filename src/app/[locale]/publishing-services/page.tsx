import type { Metadata } from "next";
import PublishingServicesPageClient from "@/app/_pages/publishing-services/PublishingServicesPageClient";
import { urlSegmentToLocale } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const META = {
  "zh-Hant": {
    title: "學術圖書出版服務與費用",
    description: "了解學術圖書出版套餐、製作服務、ISBN 分配政策、印刷選項、付款條款及出版要求。",
  },
  "zh-Hans": {
    title: "学术图书出版服务与费用",
    description: "了解学术图书出版套餐、制作服务、ISBN 分配政策、印刷选项、付款条款及出版要求。",
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
    alternates: localeAlternates("/publishing-services", locale),
  };
}

export default async function LocalePublishingServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <PublishingServicesPageClient locale={locale} />;
}
