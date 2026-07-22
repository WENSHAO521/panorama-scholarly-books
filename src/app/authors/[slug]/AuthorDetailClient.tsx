"use client";

import Link from "next/link";
import type { AuthorSummary } from "@/data/books";
import Container from "@/components/Container";
import BookCard from "@/components/BookCard";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/context/LanguageContext";
import { pickLocale } from "@/lib/locale";

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
} as const;

export default function AuthorDetailClient({ author }: { author: AuthorSummary }) {
  const { locale } = useLanguage();
  const t = copy[locale];
  const bio = author.bio ? pickLocale(author.bio, author.bioZh, locale) : undefined;

  return (
    <>
      <div className="border-b border-[#e2e2e2] py-4">
        <Container>
          <Link
            href="/authors"
            className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} weight="light" />
            {t.backToAuthors}
          </Link>
        </Container>
      </div>

      <Container narrow>
        <div className="py-12 lg:py-16">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-8">
            {author.name}
          </h1>

          {bio && (
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-12">
              {bio}
            </p>
          )}

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <h2 className="font-serif text-xl text-[#111111] font-medium mb-6">
            {author.books.length === 1 ? t.title : t.titles}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {author.books.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
