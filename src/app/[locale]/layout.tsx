import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import SiteChrome from "@/components/SiteChrome";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import { urlSegmentToLocale, HTML_LANG } from "@/lib/locale";
import { localeAlternates } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "zh-hant" }, { locale: "zh-hans" }];
}

const SITE_TITLE = {
  "zh-Hant": {
    default: "學術圖書出版 | Panorama Scholarly Books",
    template: "%s | Panorama Scholarly Books",
  },
  "zh-Hans": {
    default: "学术图书出版 | Panorama Scholarly Books",
    template: "%s | Panorama Scholarly Books",
  },
} as const;

const SITE_DESCRIPTION = {
  "zh-Hant": "Panorama Scholarly Books 出版學術專著、編著文集、學術教材、研究報告及跨學科研究專書，隸屬於 Panorama Scholarly Group Limited。",
  "zh-Hans": "Panorama Scholarly Books 出版学术专著、编著文集、学术教材、研究报告及跨学科研究专书，隶属于 Panorama Scholarly Group Limited。",
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = urlSegmentToLocale((await params).locale);
  if (locale === "en") return {};

  return {
    title: SITE_TITLE[locale],
    description: SITE_DESCRIPTION[locale],
    metadataBase: new URL("https://books.panorama-sg.com"),
    alternates: localeAlternates("", locale),
    openGraph: {
      siteName: "Panorama Scholarly Books",
      type: "website",
    },
  };
}

export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = urlSegmentToLocale((await params).locale);

  return (
    <html lang={HTML_LANG[locale]} className={fontVariables}>
      <body>
        <AnalyticsScripts />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
