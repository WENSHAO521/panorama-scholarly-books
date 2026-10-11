"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { localeHref, type Locale } from "@/lib/locale";
import { series, seriesTypeLabel } from "@/data/series";

const copy = {
  en: {
    eyebrow: "Book Series",
    heading: "Book Series",
    subheading:
      "Panorama Scholarly Books publishes under a number of specialist series, each with its own editorial focus and scope. All series are currently open for submissions.",
    aimsScope: "Aims and Scope",
    submitToSeries: "Submit to This Series",
    authorGuidelines: "Author guidelines",
    note: "Note",
    noteP1: "Books may be submitted as part of a named series or as standalone titles under the Panorama Scholarly Books imprint. Series affiliation is determined during the editorial review process.",
    noteP2Prefix: "If you are interested in proposing a new series or in becoming a series editor, please contact",
  },
  "zh-Hant": {
    eyebrow: "書系",
    heading: "書系",
    subheading: "Panorama Scholarly Books 下設多個專門書系，各具編輯重點與範疇。目前所有書系皆接受投稿。",
    aimsScope: "宗旨與範疇",
    submitToSeries: "投稿至本書系",
    authorGuidelines: "作者指南",
    note: "備註",
    noteP1: "書稿可作為特定書系的一部分投稿，亦可作為 Panorama Scholarly Books 品牌下的獨立書目投稿。書系歸屬將於編輯審查過程中確定。",
    noteP2Prefix: "如有意提出新書系企劃或擔任書系編輯，請聯絡",
  },
  "zh-Hans": {
    eyebrow: "书系",
    heading: "书系",
    subheading: "Panorama Scholarly Books 下设多个专门书系，各具编辑重点与范畴。目前所有书系均接受投稿。",
    aimsScope: "宗旨与范畴",
    submitToSeries: "投稿至本书系",
    authorGuidelines: "作者指南",
    note: "备注",
    noteP1: "书稿可作为特定书系的一部分投稿，也可作为 Panorama Scholarly Books 品牌下的独立书目投稿。书系归属将在编辑审查过程中确定。",
    noteP2Prefix: "如有意提出新书系企划或担任书系编辑，请联系",
  },
} as const;

export default function BookSeriesPageClient({ locale }: { locale: Locale }) {
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

      <Container>
        <div className="py-12 lg:py-16">
          <div className="flex flex-col gap-0 border-t border-line">
            {series.map((s) => (
              <div
                key={s.id}
                id={s.id}
                className="scroll-mt-24 border-b border-line py-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Series title + status */}
                <div className="lg:col-span-1">
                  <p className="eyebrow mb-2">
                    {s.status[locale]}
                  </p>
                  <h2 className="type-h3 leading-snug mb-4">
                    {s.title[locale]}
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {s.types.map((type) => (
                      <span
                        key={type}
                        className="btn btn-quiet"
                      >
                        {seriesTypeLabel(type, locale)}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope + CTA */}
                <div className="lg:col-span-2">
                  <p className="font-serif text-sm text-ink-3 mb-2">
                    {t.aimsScope}
                  </p>
                  <p className="font-serif text-base text-ink-2 leading-relaxed mb-6">
                    {s.scope[locale]}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:books@panorama-sg.com?subject=Book Proposal: ${s.title.en}`}
                      className="btn btn-secondary text-center sm:text-left"
                    >
                      {t.submitToSeries}
                    </a>
                    <Link
                      href={localeHref("/for-authors", locale)}
                      className="font-serif text-sm text-ink-3 hover:text-forest transition-colors self-center"
                    >
                      {t.authorGuidelines}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="border border-line bg-stone-soft p-6 md:p-8 mt-12">
            <p className="eyebrow mb-3">
              {t.note}
            </p>
            <p className="font-serif text-sm text-ink-2 leading-relaxed mb-3">
              {t.noteP1}
            </p>
            <p className="font-serif text-sm text-ink-2 leading-relaxed">
              {t.noteP2Prefix}{" "}
              <a
                href="mailto:books@panorama-sg.com?subject=New Series Proposal"
                className="link"
              >
                books@panorama-sg.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
