"use client";

import type { AuthorSummary } from "@/data/books";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";
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
} as const;

export default function AuthorsPageClient({ authors }: { authors: AuthorSummary[] }) {
  const { locale } = useLanguage();
  const t = copy[locale];

  return (
    <>
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            {t.heading}
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            {t.subheading}
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">
          {authors.length === 0 ? (
            <p className="font-serif text-base text-[#888888]">
              {t.empty}
            </p>
          ) : (
            <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
              {authors.map((author) => (
                // Plain <a>, not next/link — see the note on the author link
                // in books/[slug]/page.tsx: client-side transitions into a
                // unicode author slug 404 on this static host.
                <a
                  key={author.slug}
                  href={`/authors/${author.slug}/`}
                  className="group flex items-center justify-between gap-4 border-b border-[#e2e2e2] py-6 hover:bg-[#f7f7f7] transition-colors"
                >
                  <div>
                    <p className="font-serif text-lg text-[#111111] font-medium group-hover:text-[#555555] transition-colors">
                      {author.name}
                    </p>
                    <p className="font-serif text-xs text-[#888888] mt-1">
                      {author.books.length} {author.books.length === 1 ? t.title : t.titles}
                    </p>
                  </div>
                  <span className="font-serif text-[11px] text-[#111111] shrink-0">{commonLabel("View →", locale)}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
