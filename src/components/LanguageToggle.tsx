"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, getLocaleFromPathname, stripLocalePrefix, localeHref, type Locale } from "@/lib/locale";

const LABELS: Record<Locale, string> = { en: "EN", "zh-Hant": "繁中", "zh-Hans": "简中" };
const ARIA_LABELS: Record<Locale, string> = {
  en: "Switch to English",
  "zh-Hant": "切換為繁體中文",
  "zh-Hans": "切换为简体中文",
};

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const current = getLocaleFromPathname(pathname);
  const basePath = stripLocalePrefix(pathname);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {LOCALES.map((loc) => (
        <Link
          key={loc}
          href={localeHref(basePath, loc)}
          aria-label={ARIA_LABELS[loc]}
          aria-current={loc === current ? "true" : undefined}
          className={`font-serif text-[12px] tracking-[0.08em] transition-colors border px-2.5 py-1 ${
            loc === current
              ? "text-[#111111] border-[#111111]"
              : "text-[#555555] hover:text-[#111111] border-[#e2e2e2] hover:border-[#111111]"
          }`}
        >
          {LABELS[loc]}
        </Link>
      ))}
    </div>
  );
}
