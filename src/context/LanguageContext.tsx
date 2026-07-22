"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Locale = "en" | "zh-Hant";

const STORAGE_KEY = "psb-locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyLocaleToDocument(locale: Locale) {
  document.documentElement.lang = locale === "zh-Hant" ? "zh-Hant" : "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh-Hant") {
      setLocaleState(stored);
      applyLocaleToDocument(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    applyLocaleToDocument(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "en" ? "zh-Hant" : "en");
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
