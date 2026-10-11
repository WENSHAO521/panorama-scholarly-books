"use client";

import Link from "next/link";
import type { AuthorSummary } from "@/data/books";
import Container from "@/components/Container";
import Monogram from "@/components/Monogram";
import { nameRomanizations } from "@/data/books";
import BookCard from "@/components/BookCard";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { pickLocale, localeHref, type Locale } from "@/lib/locale";

const copy = {
  en: {
    backToAuthors: "Back to Authors",
    eyebrow: "Author",
    title: "Title",
    titles: "Titles",
  },
  "zh-Hant": {
    backToAuthors: "返回作者列表",
    eyebrow: "作者",
    title: "著作",
    titles: "著作",
  },
  "zh-Hans": {
    backToAuthors: "返回作者列表",
    eyebrow: "作者",
    title: "著作",
    titles: "著作",
  },
} as const;

export default function AuthorDetailClient({ author, locale }: { author: AuthorSummary; locale: Locale }) {
  const t = copy[locale];
  const bio = author.bio ? pickLocale(author.bio, author.bioZh, author.bioZhHans, locale) : undefined;

  return (
    <>
      <div className="border-b border-line py-4">
        <Container>
          <Link
            href={localeHref("/authors", locale)}
            className="font-serif text-sm text-ink-3 hover:text-brand transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} weight="light" />
            {t.backToAuthors}
          </Link>
        </Container>
      </div>

      <Container narrow>
        <div className="py-12 lg:py-16">
          <div className="flex items-center gap-6 mb-8">
            <Monogram name={author.name} size="lg" />
            <div>
              <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h1 className="type-h1">{author.name}</h1>
              {locale === "en" && nameRomanizations[author.name] && (
                <p className="lede mt-2">{nameRomanizations[author.name]}</p>
              )}
            </div>
          </div>

          {bio && (
            <p className="font-serif text-base text-ink-2 leading-relaxed mb-12">
              {bio}
            </p>
          )}

          <div className="w-full h-px bg-line mb-10" />

          <h2 className="type-h3 mb-6">
            {author.books.length === 1 ? t.title : t.titles}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {author.books.map((book) => (
              <BookCard key={book.slug} book={book} locale={locale} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
