"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { localeHref, type Locale } from "@/lib/locale";
import { series, seriesTypeLabel } from "@/data/series";

const copy = {
  en: {
    eyebrow: "Book series",
    heading: "Book series",
    subheading:
      "Panorama Scholarly Books publishes a number of specialist book series, each with a defined editorial focus and disciplinary scope. All series are currently accepting proposals.",
    aimsScope: "Aims and scope",
    submitToSeries: "Submit a proposal to this series",
    authorGuidelines: "Author guidelines",
    note: "Note",
    noteP1: "Books may be proposed for inclusion in a named series or as standalone titles under the Panorama Scholarly Books imprint. Inclusion in a series is determined during editorial review.",
    noteP2Prefix: "Proposals for new series and expressions of interest in serving as a series editor may be addressed to",
  },
  "zh-Hant": {
    eyebrow: "書系",
    heading: "書系",
    subheading: "Panorama Scholarly Books 下設多個專題書系，各有明確的編輯方向及學科範圍。目前各書系均在徵稿中。",
    aimsScope: "宗旨與範疇",
    submitToSeries: "投稿至本書系",
    authorGuidelines: "作者投稿指南",
    note: "說明",
    noteP1: "書稿可申請納入指定書系出版，亦可作為 Panorama Scholarly Books 品牌下的單行本出版。是否納入書系，於審稿過程中確定。",
    noteP2Prefix: "如擬申請設立新書系或擔任書系主編，請聯絡",
  },
  "zh-Hans": {
    eyebrow: "书系",
    heading: "书系",
    subheading: "Panorama Scholarly Books 下设多个专题书系，各有明确的编辑方向及学科范围。目前各书系均在征稿中。",
    aimsScope: "宗旨与范畴",
    submitToSeries: "投稿至本书系",
    authorGuidelines: "作者投稿指南",
    note: "说明",
    noteP1: "书稿可申请纳入指定书系出版，也可作为 Panorama Scholarly Books 品牌下的单行本出版。是否纳入书系，于审稿过程中确定。",
    noteP2Prefix: "如拟申请设立新书系或担任书系主编，请联系",
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
                      className="font-serif text-sm text-ink-3 hover:text-brand transition-colors self-center"
                    >
                      {t.authorGuidelines}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="border border-line bg-stone-soft p-6 md:p-8 mt-12 rounded-lg">
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
