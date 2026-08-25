import type { Locale } from "@/lib/locale";

export const SITE_URL = "https://books.panorama-sg.com";

const LOCALE_PATH_PREFIX: Record<Locale, string> = {
  en: "",
  "zh-Hant": "/zh-hant",
  "zh-Hans": "/zh-hans",
};

export function urlFor(route: string, locale: Locale): string {
  return `${SITE_URL}${LOCALE_PATH_PREFIX[locale]}${route}/`;
}

export function localeAlternates(route: string, locale: Locale) {
  return {
    canonical: urlFor(route, locale),
    languages: {
      en: urlFor(route, "en"),
      "zh-Hant": urlFor(route, "zh-Hant"),
      "zh-Hans": urlFor(route, "zh-Hans"),
      "x-default": urlFor(route, "en"),
    },
  };
}
