export type Locale = "en" | "zh-Hant" | "zh-Hans";

export const LOCALES: Locale[] = ["en", "zh-Hant", "zh-Hans"];

export const LOCALE_URL_SEGMENTS: Record<Exclude<Locale, "en">, string> = {
  "zh-Hant": "zh-hant",
  "zh-Hans": "zh-hans",
};

export const HTML_LANG: Record<Locale, string> = {
  en: "en",
  "zh-Hant": "zh-Hant",
  "zh-Hans": "zh-Hans",
};

export function urlSegmentToLocale(segment: string): Locale {
  if (segment === "zh-hant") return "zh-Hant";
  if (segment === "zh-hans") return "zh-Hans";
  return "en";
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/zh-hant" || pathname.startsWith("/zh-hant/")) return "zh-Hant";
  if (pathname === "/zh-hans" || pathname.startsWith("/zh-hans/")) return "zh-Hans";
  return "en";
}

export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(zh-hant|zh-hans)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function localeHref(path: string, locale: Locale): string {
  if (locale === "en") return path;
  const prefix = `/${LOCALE_URL_SEGMENTS[locale]}`;
  return path === "/" ? prefix : `${prefix}${path}`;
}

export function pickLocale(
  en: string,
  zhHant: string | undefined,
  zhHans: string | undefined,
  locale: Locale
): string {
  if (locale === "zh-Hant" && zhHant) return zhHant;
  if (locale === "zh-Hans" && zhHans) return zhHans;
  return en;
}

export function pickLocaleList(
  en: string[],
  zhHant: string[] | undefined,
  zhHans: string[] | undefined,
  locale: Locale
): string[] {
  if (locale === "zh-Hant" && zhHant && zhHant.length > 0) return zhHant;
  if (locale === "zh-Hans" && zhHans && zhHans.length > 0) return zhHans;
  return en;
}
