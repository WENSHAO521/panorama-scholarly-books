import HomePageClient from "@/app/_pages/home/HomePageClient";
import { urlSegmentToLocale } from "@/lib/locale";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);
  return <HomePageClient locale={locale} />;
}
