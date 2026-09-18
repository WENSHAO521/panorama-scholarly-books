"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const others = LOCALES.filter((loc) => loc !== current);

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 font-serif text-[12px] tracking-[0.08em] border border-[#e2e2e2] px-2.5 py-1 text-[#111111] hover:border-[#111111] transition-colors"
      >
        {LABELS[current]}
        <CaretDown size={9} weight="bold" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-1 min-w-full border border-[#e2e2e2] bg-white shadow-sm z-50"
        >
          {others.map((loc) => (
            <Link
              key={loc}
              href={localeHref(basePath, loc)}
              aria-label={ARIA_LABELS[loc]}
              role="option"
              className="block whitespace-nowrap font-serif text-[12px] tracking-[0.08em] px-2.5 py-1.5 text-[#555555] hover:text-[#111111] hover:bg-[#f5f5f5] transition-colors"
            >
              {LABELS[loc]}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
