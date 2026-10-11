"use client";

import { useEffect, useId, useMemo, useState } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import { catalogue } from "@/data/books";
import BookCard, { BookEntry } from "@/components/BookCard";
import Container from "@/components/Container";
import PageHeader from "@/components/PageHeader";
import { searchBooks } from "@/lib/search";
import { type Locale } from "@/lib/locale";
import { bookTypeLabel } from "@/lib/i18nLabels";

type SortKey = "newest" | "oldest" | "title";

const languageNames: Record<string, Record<Locale, string>> = {
  English: { en: "English", "zh-Hant": "英文", "zh-Hans": "英文" },
  "Chinese (Simplified)": { en: "Chinese (Simplified)", "zh-Hant": "簡體中文", "zh-Hans": "简体中文" },
  "Chinese (Traditional)": { en: "Chinese (Traditional)", "zh-Hant": "繁體中文", "zh-Hans": "繁体中文" },
};

const copy = {
  en: {
    eyebrow: "Catalogue",
    heading: "Books",
    lede: "Published and forthcoming titles from Panorama Scholarly Books. Search by title, author, subject or ISBN.",
    searchLabel: "Search the catalogue",
    searchPlaceholder: "Title, author, subject or ISBN",
    subject: "Subject",
    language: "Language",
    type: "Book type",
    sort: "Sort by",
    any: "All",
    newest: "Newest first",
    oldest: "Oldest first",
    title: "Title A–Z",
    filters: "Filter the catalogue",
    active: "Active filters",
    clearAll: "Clear all",
    remove: "Remove filter",
    results: (n: number, total: number) =>
      n === total ? `${total} ${total === 1 ? "title" : "titles"}` : `${n} of ${total} ${total === 1 ? "title" : "titles"}`,
    query: "Search",
    noMatch: "No titles match these criteria.",
    noMatchHint: "Check the spelling, try a broader subject, or clear the filters to see the full catalogue.",
    reset: "Show all titles",
    viewBook: "View book details",
    growingHeading: "A deliberately small, growing list",
    growing:
      "Panorama Scholarly Books adds titles as they complete review and production. Forthcoming titles appear here once formally announced. For manuscript inquiries, contact",
  },
  "zh-Hant": {
    eyebrow: "目錄",
    heading: "書目",
    lede: "Panorama Scholarly Books 已出版及即將出版之書目。可依書名、作者、學科或 ISBN 搜尋。",
    searchLabel: "搜尋書目",
    searchPlaceholder: "書名、作者、學科或 ISBN",
    subject: "學科",
    language: "語言",
    type: "圖書類型",
    sort: "排序",
    any: "全部",
    newest: "最新優先",
    oldest: "最早優先",
    title: "依書名",
    filters: "篩選書目",
    active: "已啟用的篩選",
    clearAll: "全部清除",
    remove: "移除篩選",
    results: (n: number, total: number) => (n === total ? `共 ${total} 種書目` : `${total} 種中符合 ${n} 種`),
    query: "搜尋",
    noMatch: "沒有符合條件的書目。",
    noMatchHint: "請檢查拼寫、嘗試較廣的學科，或清除篩選以查看完整書目。",
    reset: "顯示全部書目",
    viewBook: "查看圖書詳情",
    growingHeading: "精選而持續增加的書目",
    growing: "Panorama Scholarly Books 的書目於完成審查與製作後陸續加入；即將出版之書目於正式公布後顯示於此。書稿洽詢請聯絡",
  },
  "zh-Hans": {
    eyebrow: "目录",
    heading: "书目",
    lede: "Panorama Scholarly Books 已出版及即将出版的书目。可按书名、作者、学科或 ISBN 搜索。",
    searchLabel: "搜索书目",
    searchPlaceholder: "书名、作者、学科或 ISBN",
    subject: "学科",
    language: "语言",
    type: "图书类型",
    sort: "排序",
    any: "全部",
    newest: "最新优先",
    oldest: "最早优先",
    title: "按书名",
    filters: "筛选书目",
    active: "已启用的筛选",
    clearAll: "全部清除",
    remove: "移除筛选",
    results: (n: number, total: number) => (n === total ? `共 ${total} 种书目` : `${total} 种中符合 ${n} 种`),
    query: "搜索",
    noMatch: "没有符合条件的书目。",
    noMatchHint: "请检查拼写、尝试更宽泛的学科，或清除筛选以查看完整书目。",
    reset: "显示全部书目",
    viewBook: "查看图书详情",
    growingHeading: "精选而持续增加的书目",
    growing: "Panorama Scholarly Books 的书目在完成审查与制作后陆续加入；即将出版的书目在正式公布后显示于此。书稿咨询请联系",
  },
} as const;

function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

function Select({
  label,
  value,
  onChange,
  options,
  defaultValue = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  defaultValue?: string;
}) {
  const id = useId();
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block meta mb-1.5">{label}</label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`field appearance-none pr-9 cursor-pointer ${value !== defaultValue ? "!border-forest !bg-forest-tint/40" : ""}`}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-3" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
          <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </div>
  );
}

export default function BooksPageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [language, setLanguage] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [ready, setReady] = useState(false);

  // Read initial state from the URL (?q=&subject=&lang=&type=&sort=) so
  // search results from the header dialog and shared links land filtered.
  // The page is statically prerendered without a query string, so URL state
  // can only be read after hydration; an effect is the correct place for it.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuery(p.get("q") ?? "");
    setSubject(p.get("subject") ?? "");
    setLanguage(p.get("lang") ?? "");
    setType(p.get("type") ?? "");
    const s = p.get("sort");
    if (s === "oldest" || s === "title") setSort(s);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    if (query.trim()) p.set("q", query.trim());
    if (subject) p.set("subject", subject);
    if (language) p.set("lang", language);
    if (type) p.set("type", type);
    if (sort !== "newest") p.set("sort", sort);
    const qs = p.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}`);
  }, [query, subject, language, type, sort, ready]);

  const subjects = useMemo(() => uniqueSorted(catalogue.flatMap((b) => b.subjectArea)), []);
  const languages = useMemo(() => uniqueSorted(catalogue.map((b) => b.language)), []);
  const types = useMemo(() => uniqueSorted(catalogue.map((b) => b.bookType)), []);

  const results = useMemo(() => {
    let list = catalogue.filter(
      (b) =>
        (!subject || b.subjectArea.includes(subject)) &&
        (!language || b.language === language) &&
        (!type || b.bookType === type)
    );
    if (query.trim()) {
      list = searchBooks(list, query);
    } else {
      list = [...list].sort((a, b) =>
        sort === "title"
          ? a.title.localeCompare(b.title, locale)
          : sort === "oldest"
            ? a.publicationYear - b.publicationYear
            : b.publicationYear - a.publicationYear
      );
    }
    return list;
  }, [query, subject, language, type, sort, locale]);

  const chips = [
    query.trim() && { key: "q", label: `${t.query}: “${query.trim()}”`, clear: () => setQuery("") },
    subject && { key: "subject", label: `${t.subject}: ${subject}`, clear: () => setSubject("") },
    language && { key: "lang", label: `${t.language}: ${languageNames[language]?.[locale] ?? language}`, clear: () => setLanguage("") },
    type && { key: "type", label: `${t.type}: ${bookTypeLabel(type, locale)}`, clear: () => setType("") },
  ].filter(Boolean) as { key: string; label: string; clear: () => void }[];

  const clearAll = () => {
    setQuery("");
    setSubject("");
    setLanguage("");
    setType("");
  };

  const fewTitles = catalogue.length <= 3;
  const useEntries = results.length > 0 && results.length <= 2;

  return (
    <>
      <PageHeader eyebrow={t.eyebrow} title={t.heading} lede={t.lede}>
        <form
          role="search"
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 max-w-[560px]"
        >
          <label htmlFor="catalogue-search" className="sr-only">{t.searchLabel}</label>
          <div className="relative">
            <MagnifyingGlass size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-3 pointer-events-none" aria-hidden="true" />
            <input
              id="catalogue-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="field !min-h-[52px] !pl-11 !text-[17px]"
              enterKeyHint="search"
            />
          </div>
        </form>
      </PageHeader>

      <Container>
        {/* Filters — hidden while the list is too short to need them */}
        {!fewTitles && (
          <fieldset className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-6 border-b border-line">
            <legend className="sr-only">{t.filters}</legend>
            <Select label={t.subject} value={subject} onChange={setSubject} options={[{ value: "", label: t.any }, ...subjects.map((s) => ({ value: s, label: s }))]} />
            <Select
              label={t.language}
              value={language}
              onChange={setLanguage}
              options={[{ value: "", label: t.any }, ...languages.map((l) => ({ value: l, label: languageNames[l]?.[locale] ?? l }))]}
            />
            <Select label={t.type} value={type} onChange={setType} options={[{ value: "", label: t.any }, ...types.map((v) => ({ value: v, label: bookTypeLabel(v, locale) }))]} />
            <Select
              label={t.sort}
              value={sort}
              onChange={(v) => setSort(v as SortKey)}
              defaultValue="newest"
              options={[
                { value: "newest", label: t.newest },
                { value: "oldest", label: t.oldest },
                { value: "title", label: t.title },
              ]}
            />
          </fieldset>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3 py-5">
          <p className="meta" role="status" aria-live="polite">
            {t.results(results.length, catalogue.length)}
          </p>
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2" aria-label={t.active} role="group">
              {chips.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={c.clear}
                  className="tag !bg-forest-tint !border-forest/30 !text-forest hover:!border-forest min-h-[32px]"
                  aria-label={`${t.remove}: ${c.label}`}
                >
                  {c.label}
                  <X size={12} weight="bold" aria-hidden="true" />
                </button>
              ))}
              {chips.length > 1 && (
                <button type="button" onClick={clearAll} className="font-sans text-[14px] font-semibold text-forest underline underline-offset-4 px-1 min-h-[32px]">
                  {t.clearAll}
                </button>
              )}
            </div>
          )}
        </div>

        {results.length === 0 ? (
          <div className="py-16 sm:py-24 text-center border-t border-line">
            <p className="type-h3">{t.noMatch}</p>
            <p className="text-ink-2 mt-3 max-w-[48ch] mx-auto">{t.noMatchHint}</p>
            <button type="button" onClick={clearAll} className="btn btn-secondary mt-8">
              {t.reset}
            </button>
          </div>
        ) : useEntries ? (
          <div className="space-y-16 border-t border-line pt-10">
            {results.map((book) => (
              <BookEntry key={book.slug} book={book} locale={locale} headingLevel={2} moreLabel={t.viewBook} />
            ))}
          </div>
        ) : (
          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-12 border-t border-line pt-10">
            {results.map((book) => (
              <li key={book.slug}>
                <BookCard book={book} locale={locale} />
              </li>
            ))}
          </ul>
        )}

        <aside className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 border-t border-line pt-8">
          <h2 className="md:col-span-4 type-h3">{t.growingHeading}</h2>
          <p className="md:col-span-7 md:col-start-6 text-ink-2">
            {t.growing}{" "}
            <a href="mailto:books@panorama-sg.com" className="link">books@panorama-sg.com</a>.
          </p>
        </aside>
      </Container>
    </>
  );
}
