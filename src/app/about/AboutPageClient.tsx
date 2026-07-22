"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    eyebrow: "About",
    heading: "About Panorama Scholarly Books",
    subheading: "Publisher information, mission, and academic standards.",
    missionHeading: "Mission",
    missionP1:
      "Panorama Scholarly Books is dedicated to publishing academic works that contribute to scholarly communication, interdisciplinary research, and global knowledge exchange.",
    missionP2:
      "As part of Panorama Scholarly Group, the platform supports academic authors, editors, researchers, and institutions through responsible publishing practices and professional production services. We are committed to maintaining high scholarly standards, supporting intellectual diversity, and making serious academic work accessible to researchers, educators, and practitioners worldwide.",
    scopeHeading: "Publishing Scope",
    scopeIntro:
      "We publish scholarly monographs, edited volumes, research reports, academic textbooks, conference proceedings, and interdisciplinary works across the following fields:",
    fields: [
      "Humanities",
      "Social Sciences",
      "Education and Educational Policy",
      "Arts and Cultural Studies",
      "Public Policy and Governance",
      "Interdisciplinary and Emerging Fields",
      "AI, Technology, and Future Society",
      "Global Studies and International Relations",
    ],
    publisherInfoHeading: "Publisher Information",
    publisherInfo: [
      ["Legal Publisher", "Panorama Scholarly Group Limited"],
      ["Publishing Imprint", "Panorama Scholarly Books"],
      ["Type", "Independent Academic Book Publisher"],
      [
        "Registered Address",
        "Room 1508, 15/F., Office Tower Two, Grand Plaza, 625 Nathan Road, Mong Kok, Kowloon, Hong Kong",
      ],
      ["Website", "books.panorama-sg.com"],
      ["Publishing Inquiries", "books@panorama-sg.com"],
    ],
    standardsHeading: "Academic Standards",
    standardsP1:
      "Panorama Scholarly Books is committed to responsible publishing practices that uphold the integrity of scholarly work. All submissions are subject to editorial evaluation for scholarly merit, originality, methodological rigour, and clarity of argumentation.",
    standardsP2:
      "Our publishing policies address key dimensions of research and publication ethics, including authorship, plagiarism, conflicts of interest, data integrity, and the use of artificial intelligence in research and writing. Authors are expected to read and adhere to these policies as a condition of publication.",
    readPolicies: "Read our publishing policies",
    relationshipHeading: "Relationship with Panorama Scholarly Group Limited",
    relationshipP1:
      "Panorama Scholarly Books is the academic book publishing imprint of Panorama Scholarly Group Limited. Panorama Scholarly Group Limited is the legal entity responsible for publishing agreements, publisher administration, bibliographic records, ISBN use, and publication under the Panorama Scholarly Books imprint.",
    relationshipP2:
      "Panorama Scholarly Books maintains its own editorial identity, author relationships, book catalogue, publishing policies, and production standards within the broader scholarly publishing activities of Panorama Scholarly Group Limited, which also spans academic journals, conference proceedings, and research communication services.",
    contactHeading: "Contact",
    booksDepartment: "Books Department",
    contactUs: "Contact Us",
  },
  "zh-Hant": {
    eyebrow: "關於我們",
    heading: "關於 Panorama Scholarly Books",
    subheading: "出版者資訊、使命與學術標準。",
    missionHeading: "使命",
    missionP1:
      "Panorama Scholarly Books 致力於出版有助於學術交流、跨學科研究與全球知識共享的學術著作。",
    missionP2:
      "作為 Panorama Scholarly Group 的一部分，本平台透過負責任的出版實踐與專業的製作服務，支持學術作者、編者、研究人員與機構。我們致力於維持嚴謹的學術標準、支持思想多元性，並讓全球的研究人員、教育工作者與從業者都能取得嚴肅的學術成果。",
    scopeHeading: "出版範疇",
    scopeIntro:
      "我們出版學術專著、編著文集、研究報告、學術教材、會議論文集，以及以下領域的跨學科著作：",
    fields: [
      "人文學科",
      "社會科學",
      "教育與教育政策",
      "藝術與文化研究",
      "公共政策與治理",
      "跨學科與新興領域",
      "人工智能、科技與未來社會",
      "全球研究與國際關係",
    ],
    publisherInfoHeading: "出版者資訊",
    publisherInfo: [
      ["法定出版者", "Panorama Scholarly Group Limited"],
      ["出版品牌", "Panorama Scholarly Books"],
      ["類型", "獨立學術圖書出版社"],
      ["註冊地址", "香港旺角彌敦道625號雅蘭中心辦公樓二期15樓1508室"],
      ["網站", "books.panorama-sg.com"],
      ["出版洽詢", "books@panorama-sg.com"],
    ],
    standardsHeading: "學術標準",
    standardsP1:
      "Panorama Scholarly Books 致力於維護學術著作誠信的負責任出版實踐。所有投稿均需經過編輯審查，評估其學術價值、原創性、方法嚴謹性與論述清晰度。",
    standardsP2:
      "我們的出版政策涵蓋研究與出版倫理的關鍵面向，包括著作權歸屬、抄襲、利益衝突、資料誠信，以及人工智能於研究與寫作中的使用。作者須閱讀並遵守這些政策，方可獲得出版。",
    readPolicies: "閱讀我們的出版政策",
    relationshipHeading: "與 Panorama Scholarly Group Limited 的關係",
    relationshipP1:
      "Panorama Scholarly Books 是 Panorama Scholarly Group Limited 旗下的學術圖書出版品牌。Panorama Scholarly Group Limited 為負責出版協議、出版管理、書目紀錄、ISBN 使用，以及 Panorama Scholarly Books 品牌出版事務的法定實體。",
    relationshipP2:
      "在 Panorama Scholarly Group Limited 更廣泛的學術出版業務（亦涵蓋學術期刊、會議論文集與研究傳播服務）之下，Panorama Scholarly Books 維持自身獨立的編輯定位、作者關係、書目、出版政策與製作標準。",
    contactHeading: "聯絡方式",
    booksDepartment: "圖書部門",
    contactUs: "聯絡我們",
  },
} as const;

export default function AboutPageClient() {
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

          {/* Mission */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.missionHeading}
            </h2>
            <p className="font-serif text-lg text-[#555555] leading-relaxed mb-5">
              {t.missionP1}
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              {t.missionP2}
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Scope */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.scopeHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
              {t.scopeIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e2e2e2]">
              {t.fields.map((field) => (
                <div key={field} className="bg-white px-5 py-4">
                  <p className="font-serif text-sm text-[#555555]">{field}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Publisher information */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.publisherInfoHeading}
            </h2>
            <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
              {t.publisherInfo.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b border-[#e2e2e2] py-4"
                >
                  <span className="font-serif text-sm text-[#888888]">{label}</span>
                  <span className="font-serif text-sm text-[#555555]">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Academic standards */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.standardsHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              {t.standardsP1}
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              {t.standardsP2}
            </p>
            <Link
              href="/policies"
              className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              {t.readPolicies}
            </Link>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Relationship with PSG */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.relationshipHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              {t.relationshipP1}
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed">
              {t.relationshipP2}
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Contact */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.contactHeading}
            </h2>
            <div className="border border-[#e2e2e2] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-sm text-[#888888] mb-1">{t.booksDepartment}</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <Link
                href="/contact"
                className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-6 py-3 hover:bg-transparent hover:text-[#111111] transition-colors text-center"
              >
                {t.contactUs}
              </Link>
            </div>
          </section>

        </div>
      </Container>
    </>
  );
}
