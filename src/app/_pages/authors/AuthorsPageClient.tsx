"use client";

import type { AuthorSummary } from "@/data/books";
import Container from "@/components/Container";
import Monogram from "@/components/Monogram";
import { nameRomanizations } from "@/data/books";
import { localeHref, type Locale } from "@/lib/locale";
import { commonLabel } from "@/lib/i18nLabels";

const copy = {
  en: {
    eyebrow: "Authors",
    heading: "Authors & Editors",
    subheading: "Scholars published under the Panorama Scholarly Books imprint.",
    empty: "Author profiles will appear here as titles are published.",
    title: "title",
    titles: "titles",
  },
  "zh-Hant": {
    eyebrow: "作者",
    heading: "作者與編者",
    subheading: "在 Panorama Scholarly Books 品牌下出版的學者。",
    empty: "作者簡介將於書目出版後顯示於此。",
    title: "本著作",
    titles: "本著作",
  },
  "zh-Hans": {
    eyebrow: "作者",
    heading: "作者与编者",
    subheading: "在 Panorama Scholarly Books 品牌下出版的学者。",
    empty: "作者简介将于书目出版后显示于此。",
    title: "本著作",
    titles: "本著作",
  },
} as const;

export default function AuthorsPageClient({ authors, locale }: { authors: AuthorSummary[]; locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <section className="border-b border-line pt-16 pb-12">
        <Container>
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h1 className="type-h1 mb-4">
            {t.heading}
          </h1>
          <p className="lede max-w-[62ch]">
            {t.subheading}
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">
          {authors.length === 0 ? (
            <p className="font-serif text-base text-ink-3">
              {t.empty}
            </p>
          ) : (
            <div className="flex flex-col gap-0 border-t border-line">
              {authors.map((author) => (
                // Plain <a>, not next/link — see the note on the author link
                // in books/[slug]/page.tsx: client-side transitions into a
                // unicode author slug 404 on this static host.
                <a
                  key={author.slug}
                  href={`${localeHref(`/authors/${author.slug}`, locale)}/`}
                  className="group flex items-center justify-between gap-4 border-b border-line py-6 hover:bg-stone-soft transition-colors"
                >
                  <div className="flex items-center gap-5">
                    <Monogram name={author.name} />
                    <div>
                    <p className="font-serif text-lg text-ink font-medium group-hover:text-brand transition-colors">
                      {author.name}
                    </p>
                    <p className="font-serif text-xs text-ink-3 mt-1">
                      {locale === "en" && nameRomanizations[author.name] && <>{nameRomanizations[author.name]} · </>}
                      {author.books.length} {author.books.length === 1 ? t.title : t.titles}
                    </p>
                    </div>
                  </div>
                  <span className="font-serif text-[11px] text-ink shrink-0">{commonLabel("View →", locale)}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
