"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const seriesTypeZh: Record<string, string> = {
  Monographs: "專著",
  "Edited Volumes": "編著文集",
  "Research Reports": "研究報告",
  "Conference Proceedings": "會議論文集",
};

const series = [
  {
    id: "panorama-studies-education",
    title: { en: "Panorama Studies in Education", "zh-Hant": "Panorama 教育研究叢書" },
    scope: {
      en: "Publishes original research monographs and edited volumes addressing education policy, pedagogy, curriculum studies, higher education governance, and comparative education across national and international contexts.",
      "zh-Hant": "出版探討教育政策、教學法、課程研究、高等教育治理及國內外比較教育之原創研究專著與編著文集。",
    },
    types: ["Monographs", "Edited Volumes", "Research Reports"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
  {
    id: "panorama-studies-public-policy",
    title: { en: "Panorama Studies in Public Policy", "zh-Hant": "Panorama 公共政策研究叢書" },
    scope: {
      en: "Covers public administration, governance reform, policy analysis, regulatory studies, and the relationship between state institutions and civil society, with a comparative and interdisciplinary orientation.",
      "zh-Hant": "涵蓋公共行政、治理改革、政策分析、監管研究，以及國家機構與公民社會的關係，採比較與跨學科取向。",
    },
    types: ["Monographs", "Edited Volumes"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
  {
    id: "panorama-studies-arts-humanities",
    title: { en: "Panorama Studies in Arts and Humanities", "zh-Hant": "Panorama 人文藝術研究叢書" },
    scope: {
      en: "Encompasses original scholarship in literature, philosophy, history, cultural studies, art history, media studies, and performance, with particular interest in interdisciplinary and cross-cultural approaches.",
      "zh-Hant": "涵蓋文學、哲學、歷史、文化研究、藝術史、媒體研究及表演藝術之原創學術著作，特別重視跨學科與跨文化取向。",
    },
    types: ["Monographs", "Edited Volumes"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
  {
    id: "panorama-studies-global-society",
    title: { en: "Panorama Studies in Global Society", "zh-Hant": "Panorama 全球社會研究叢書" },
    scope: {
      en: "Addresses questions of globalisation, international relations, transnational civil society, migration, global governance, and the social consequences of geopolitical transformation.",
      "zh-Hant": "探討全球化、國際關係、跨國公民社會、移民、全球治理，以及地緣政治變遷所帶來的社會影響。",
    },
    types: ["Monographs", "Edited Volumes"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
  {
    id: "panorama-studies-ai-future-society",
    title: { en: "Panorama Studies in AI and Future Society", "zh-Hant": "Panorama 人工智能與未來社會研究叢書" },
    scope: {
      en: "Examines the social, ethical, political, and philosophical dimensions of artificial intelligence, automation, digital transformation, and emerging technologies, from interdisciplinary perspectives.",
      "zh-Hant": "從跨學科視角探討人工智能、自動化、數位轉型及新興科技在社會、倫理、政治與哲學層面的意涵。",
    },
    types: ["Monographs", "Edited Volumes", "Research Reports"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
  {
    id: "panorama-conference-proceedings",
    title: { en: "Panorama Conference Proceedings Series", "zh-Hant": "Panorama 會議論文集叢書" },
    scope: {
      en: "Publishes peer-reviewed conference proceedings across all fields covered by Panorama Scholarly Books, providing a dedicated venue for conference organisers seeking professional academic publication.",
      "zh-Hant": "出版涵蓋 Panorama Scholarly Books 各學科領域之同行評審會議論文集，為會議主辦單位提供專業學術出版渠道。",
    },
    types: ["Conference Proceedings"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
  {
    id: "panorama-research-reports",
    title: { en: "Panorama Research Report Series", "zh-Hant": "Panorama 研究報告叢書" },
    scope: {
      en: "A dedicated series for research reports, policy briefs, and investigation findings from academic research groups, policy institutes, and interdisciplinary research projects.",
      "zh-Hant": "專門收錄學術研究團隊、政策研究機構及跨學科研究專案之研究報告、政策簡報與調查成果。",
    },
    types: ["Research Reports"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中" },
  },
];

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
} as const;

export default function BookSeriesPageClient() {
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

      <Container>
        <div className="py-12 lg:py-16">
          <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
            {series.map((s) => (
              <div
                key={s.id}
                className="border-b border-[#e2e2e2] py-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Series title + status */}
                <div className="lg:col-span-1">
                  <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">
                    {s.status[locale]}
                  </p>
                  <h2 className="font-serif text-xl text-[#111111] font-medium leading-snug mb-4">
                    {s.title[locale]}
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {s.types.map((type) => (
                      <span
                        key={type}
                        className="font-serif text-[10px] tracking-[0.1em] uppercase border border-[#e2e2e2] text-[#888888] px-2 py-0.5"
                      >
                        {locale === "zh-Hant" ? seriesTypeZh[type] ?? type : type}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope + CTA */}
                <div className="lg:col-span-2">
                  <p className="font-serif text-sm text-[#888888] mb-2">
                    {t.aimsScope}
                  </p>
                  <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
                    {s.scope[locale]}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:books@panorama-sg.com?subject=Book Proposal: ${s.title.en}`}
                      className="font-serif text-[11px] tracking-[0.12em] uppercase border border-[#111111] px-5 py-2.5 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center sm:text-left"
                    >
                      {t.submitToSeries}
                    </a>
                    <Link
                      href="/for-authors"
                      className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors self-center"
                    >
                      {t.authorGuidelines}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-6 md:p-8 mt-12">
            <p className="font-serif text-xs tracking-[0.2em] uppercase text-[#888888] mb-3">
              {t.note}
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
              {t.noteP1}
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              {t.noteP2Prefix}{" "}
              <a
                href="mailto:books@panorama-sg.com?subject=New Series Proposal"
                className="text-[#111111] underline underline-offset-2 hover:text-[#555555] transition-colors"
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
