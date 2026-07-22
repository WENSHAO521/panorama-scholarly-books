"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle({ className = "" }: { className?: string }) {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Switch to Traditional Chinese" : "切換為英文"}
      className={`font-serif text-[12px] tracking-[0.08em] text-[#555555] hover:text-[#111111] transition-colors border border-[#e2e2e2] hover:border-[#111111] px-2.5 py-1 ${className}`}
    >
      {locale === "en" ? "繁中" : "EN"}
    </button>
  );
}
