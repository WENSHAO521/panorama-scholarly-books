"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { CaretDown, Check, Globe } from "@phosphor-icons/react/dist/ssr";
import { LOCALES, HTML_LANG, getLocaleFromPathname, stripLocalePrefix, localeHref, type Locale } from "@/lib/locale";

const SHORT: Record<Locale, string> = { en: "EN", "zh-Hant": "繁", "zh-Hans": "简" };
const NATIVE: Record<Locale, string> = { en: "English", "zh-Hant": "繁體中文", "zh-Hans": "简体中文" };
const BUTTON_LABEL: Record<Locale, string> = {
  en: "Language",
  "zh-Hant": "語言",
  "zh-Hans": "语言",
};

/** Compact disclosure menu. `inline` renders the three options as a row
    (used inside the mobile menu, where a popover would be redundant). */
export default function LanguageMenu({ inline = false }: { inline?: boolean }) {
  const pathname = usePathname() || "/";
  const current = getLocaleFromPathname(pathname);
  const basePath = stripLocalePrefix(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const option = (loc: Locale, cls: string) => (
    <Link
      key={loc}
      href={localeHref(basePath, loc)}
      lang={HTML_LANG[loc]}
      hrefLang={HTML_LANG[loc]}
      aria-current={loc === current ? "true" : undefined}
      className={cls}
    >
      <span>{NATIVE[loc]}</span>
      {loc === current && <Check size={14} weight="bold" aria-hidden="true" />}
    </Link>
  );

  if (inline) {
    return (
      <div className="flex flex-wrap gap-2" role="group" aria-label={BUTTON_LABEL[current]}>
        {LOCALES.map((loc) =>
          option(
            loc,
            `inline-flex items-center gap-2 min-h-[44px] px-4 font-sans text-[15px] border rounded-sm transition-colors ${
              loc === current
                ? "border-forest bg-forest-tint text-forest font-semibold"
                : "border-line text-ink-2 hover:border-forest hover:text-forest"
            }`
          )
        )}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${BUTTON_LABEL[current]}: ${NATIVE[current]}`}
        className="inline-flex items-center gap-1.5 h-9 px-2.5 rounded-sm font-sans text-[14px] font-medium text-ink-2 hover:text-forest hover:bg-stone-soft transition-colors"
      >
        <Globe size={16} weight="regular" aria-hidden="true" />
        <span>{SHORT[current]}</span>
        <CaretDown size={10} weight="bold" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        id={listId}
        hidden={!open}
        className="absolute right-0 top-full mt-2 min-w-[168px] py-1.5 bg-surface border border-line rounded-sm shadow-[var(--shadow-raise)] z-50"
      >
        {LOCALES.map((loc) =>
          option(
            loc,
            `flex items-center justify-between gap-4 px-3.5 py-2.5 font-sans text-[15px] transition-colors ${
              loc === current ? "text-forest font-semibold" : "text-ink-2 hover:bg-stone-soft hover:text-forest"
            }`
          )
        )}
      </div>
    </div>
  );
}
