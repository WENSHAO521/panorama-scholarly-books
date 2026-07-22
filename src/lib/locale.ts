import type { Locale } from "@/context/LanguageContext";

export function pickLocale(en: string, zh: string | undefined, locale: Locale): string {
  if (locale === "zh-Hant" && zh) return zh;
  return en;
}

export function pickLocaleList(en: string[], zh: string[] | undefined, locale: Locale): string[] {
  if (locale === "zh-Hant" && zh && zh.length > 0) return zh;
  return en;
}
