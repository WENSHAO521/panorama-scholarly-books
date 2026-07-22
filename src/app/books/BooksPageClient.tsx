"use client";

import { useState } from "react";
import { books } from "@/data/books";
import type { BookType } from "@/data/books";
import BookCard from "@/components/BookCard";
import Container from "@/components/Container";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/context/LanguageContext";
import { bookTypeLabel } from "@/lib/i18nLabels";

type FilterTab = "All" | BookType | "Open Access" | "Forthcoming";

const tabs: FilterTab[] = [
  "All",
  "Monograph",
  "Edited Volume",
  "Textbook",
  "Research Report",
  "Conference Proceedings",
  "Open Access",
  "Forthcoming",
];

const copy = {
  en: {
    eyebrow: "Catalogue",
    heading: "Books",
    subheading: "All published and forthcoming titles from Panorama Scholarly Books.",
    searchPlaceholder: "Search by title, author, or subject",
    searchAria: "Search books",
    noMatch: "No titles match your search.",
    noneYet: "No titles in this category yet.",
    tryDifferent: "Try a different title, author, or subject area.",
    checkBack: "New titles are added regularly. Please check back soon.",
    forthcomingNote:
      "This catalogue represents all currently announced and published titles. Additional titles are in preparation and will appear here upon announcement. For manuscript inquiries, please contact",
  },
  "zh-Hant": {
    eyebrow: "目錄",
    heading: "書目",
    subheading: "Panorama Scholarly Books 所有已出版及即將出版的書目。",
    searchPlaceholder: "依書名、作者或學科搜尋",
    searchAria: "搜尋書目",
    noMatch: "沒有符合搜尋條件的書目。",
    noneYet: "此分類目前尚無書目。",
    tryDifferent: "請嘗試其他書名、作者或學科領域。",
    checkBack: "我們會定期新增書目，請稍後再回來查看。",
    forthcomingNote:
      "本目錄呈現目前所有已公布及已出版的書目。其他書目仍在準備中，一經公布即會顯示於此。如有書稿查詢，請聯絡",
  },
} as const;

export default function BooksPageClient() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const [active, setActive] = useState<FilterTab>("All");
  const [query, setQuery] = useState("");

  const filtered = (() => {
    const byTab = (() => {
      if (active === "All") return books;
      if (active === "Forthcoming") return books.filter((b) => b.status === "Forthcoming");
      if (active === "Open Access") return books.filter((b) => b.license === "CC BY-NC-ND 4.0");
      return books.filter((b) => b.bookType === active);
    })();

    const q = query.trim().toLowerCase();
    if (!q) return byTab;
    return byTab.filter((b) =>
      [b.title, b.subtitle ?? "", ...b.authors, ...b.editors, ...b.subjectArea]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  })();

  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            {t.heading}
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch] mb-8">
            {t.subheading}
          </p>
          <div className="relative max-w-[420px]">
            <MagnifyingGlass
              size={16}
              weight="light"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              aria-label={t.searchAria}
              className="w-full font-serif text-sm text-[#111111] border border-[#e2e2e2] pl-11 pr-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#aaaaaa]"
            />
          </div>
        </Container>
      </section>

      {/* Filter tabs */}
      <section className="border-b border-[#e2e2e2] bg-[#f7f7f7]">
        <Container>
          <div className="flex flex-wrap gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`font-serif text-sm px-5 py-4 border-r border-[#e2e2e2] transition-colors whitespace-nowrap ${
                  active === tab
                    ? "bg-[#111111] text-white"
                    : "bg-transparent text-[#555555] hover:text-[#111111] hover:bg-white"
                }`}
              >
                {bookTypeLabel(tab, locale)}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Books grid */}
      <section className="py-16">
        <Container>
          {filtered.length === 0 ? (
            <div className="py-20 text-center border border-[#e2e2e2]">
              <p className="font-serif text-xl text-[#888888] mb-2">
                {query.trim() ? t.noMatch : t.noneYet}
              </p>
              <p className="font-serif text-sm text-[#888888]">
                {query.trim() ? t.tryDifferent : t.checkBack}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Forthcoming note */}
      <section className="border-t border-[#e2e2e2] py-10 bg-[#f7f7f7]">
        <Container narrow>
          <p className="font-serif text-sm text-[#888888] text-center leading-relaxed">
            {t.forthcomingNote}{" "}
            <a
              href="mailto:books@panorama-sg.com"
              className="text-[#555555] underline underline-offset-2 hover:text-[#111111] transition-colors"
            >
              books@panorama-sg.com
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
