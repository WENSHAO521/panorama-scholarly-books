"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import { catalogue, bookCredit, bookLangTag } from "@/data/books";
import BookCover from "@/components/BookCover";
import { searchBooks } from "@/lib/search";
import { localeHref, type Locale } from "@/lib/locale";
import { bookTypeLabel } from "@/lib/i18nLabels";

const copy = {
  en: {
    title: "Search the catalogue",
    placeholder: "Title, author, subject or ISBN",
    close: "Close search",
    results: (n: number) => (n === 1 ? "1 title" : `${n} titles`),
    none: "No titles match this search.",
    hint: "Try an author's name, a subject such as “Buddhist Studies”, or an ISBN.",
    all: "See all results in the catalogue",
    browse: "Browse the full catalogue",
  },
  "zh-Hant": {
    title: "搜尋書目",
    placeholder: "書名、作者、學科或 ISBN",
    close: "關閉搜尋",
    results: (n: number) => `${n} 種書目`,
    none: "沒有符合的書目。",
    hint: "可嘗試作者姓名、學科（如「佛教研究」）或 ISBN。",
    all: "在書目頁查看全部結果",
    browse: "瀏覽完整書目",
  },
  "zh-Hans": {
    title: "搜索书目",
    placeholder: "书名、作者、学科或 ISBN",
    close: "关闭搜索",
    results: (n: number) => `${n} 种书目`,
    none: "没有符合的书目。",
    hint: "可尝试作者姓名、学科（如“佛教研究”）或 ISBN。",
    all: "在书目页查看全部结果",
    browse: "浏览完整书目",
  },
} as const;

export default function SearchDialog({
  open,
  onClose,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
}) {
  const t = copy[locale];
  const ref = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const titleId = useId();
  const statusId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      dialog.showModal();
      inputRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  const q = query.trim();
  const results = q ? searchBooks(catalogue, q).slice(0, 6) : [];
  const booksHref = localeHref("/books", locale);
  const allHref = q ? `${booksHref}/?q=${encodeURIComponent(q)}` : `${booksHref}/`;

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby={titleId}
      className="m-0 sm:mx-auto sm:mt-[10vh] w-full max-w-none sm:max-w-[640px] max-h-[100dvh] sm:max-h-[80vh] h-full sm:h-auto bg-surface text-ink sm:rounded-sm sm:border border-line shadow-[var(--shadow-raise)] p-0 backdrop:bg-ink/40"
    >
      <div className="flex flex-col h-full">
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
            router.push(allHref);
          }}
          className="flex items-center gap-3 px-4 sm:px-5 border-b border-line"
        >
          <h2 id={titleId} className="sr-only">{t.title}</h2>
          <MagnifyingGlass size={20} className="text-ink-3 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            aria-label={t.title}
            aria-describedby={statusId}
            enterKeyHint="search"
            className="flex-1 min-w-0 h-16 bg-transparent font-sans text-[17px] text-ink placeholder:text-ink-3 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-sm text-ink-2 hover:bg-stone-soft hover:text-forest"
            aria-label={t.close}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </form>

        <div className="overflow-y-auto px-2 sm:px-3 py-3">
          <p id={statusId} aria-live="polite" className="meta px-2 sm:px-2 pb-2">
            {q ? (results.length ? t.results(results.length) : t.none) : t.hint}
          </p>
          {q && results.length === 0 && <p className="meta px-2">{t.hint}</p>}
          <ul>
            {results.map((book) => (
              <li key={book.slug}>
                <Link
                  href={localeHref(`/books/${book.slug}`, locale)}
                  onClick={onClose}
                  className="flex gap-4 items-start p-2 rounded-sm hover:bg-stone-soft focus-visible:bg-stone-soft"
                >
                  <div className="w-11 shrink-0">
                    <BookCover book={book} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-serif text-[17px] leading-snug text-ink" lang={bookLangTag(book)}>
                      {book.title}
                    </p>
                    <p className="meta mt-0.5">
                      <span lang={bookLangTag(book)}>{bookCredit(book)}</span> · {book.publicationYear} ·{" "}
                      {bookTypeLabel(book.bookType, locale)}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto border-t border-line px-4 sm:px-5 py-3">
          <Link href={allHref} onClick={onClose} className="link-arrow">
            {q ? t.all : t.browse}
            <ArrowRight size={14} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </dialog>
  );
}
