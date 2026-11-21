"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { localeHref, type Locale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "About",
    heading: "About Panorama Scholarly Books",
    subheading: "Publisher information, mission and academic standards.",
    missionHeading: "Mission",
    missionP1:
      "Panorama Scholarly Books publishes academic works that contribute to scholarly communication, interdisciplinary research and international knowledge exchange.",
    missionP2:
      "As an imprint of Panorama Scholarly Group, the press serves academic authors, editors, researchers and institutions through responsible publishing practice and professional editorial and production services. It upholds high scholarly standards and intellectual diversity, and makes rigorous academic work available to researchers, educators and practitioners internationally.",
    scopeHeading: "Publishing scope",
    scopeIntro:
      "The press publishes scholarly monographs, edited volumes, research reports, academic textbooks, conference proceedings and interdisciplinary works in the following fields:",
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
    publisherInfoHeading: "Publisher information",
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
    standardsHeading: "Academic standards",
    standardsP1:
      "Panorama Scholarly Books adheres to responsible publishing practice that upholds the integrity of the scholarly record. All submissions undergo editorial evaluation of their scholarly merit, originality, methodological rigour and clarity of argument.",
    standardsP2:
      "The publishing policies address the principal aspects of research and publication ethics, including authorship, plagiarism, conflicts of interest, data integrity and the use of artificial intelligence in research and writing. Compliance with these policies is a condition of publication.",
    readPolicies: "Publishing policies",
    relationshipHeading: "Relationship with Panorama Scholarly Group Limited",
    relationshipP1:
      "Panorama Scholarly Books is the academic book publishing imprint of Panorama Scholarly Group Limited. Panorama Scholarly Group Limited is the legal entity responsible for publishing agreements, publisher administration, bibliographic records, ISBN use, and publication under the Panorama Scholarly Books imprint.",
    relationshipP2:
      "Panorama Scholarly Books maintains its own editorial identity, author relationships, book catalogue, publishing policies, and production standards within the broader scholarly publishing activities of Panorama Scholarly Group Limited, which also spans academic journals, conference proceedings, and research communication services.",
    contactHeading: "Contact",
    booksDepartment: "Books Division",
    contactUs: "Contact us",
  },
  "zh-Hant": {
    eyebrow: "關於我們",
    heading: "關於 Panorama Scholarly Books",
    subheading: "出版者資料、出版宗旨及學術規範。",
    missionHeading: "出版宗旨",
    missionP1:
      "Panorama Scholarly Books 出版有助於學術交流、跨學科研究及國際知識交流的學術著作。",
    missionP2:
      "本社為 Panorama Scholarly Group 旗下出版品牌，秉持規範的出版實踐，為學術作者、主編、研究人員及機構提供專業的編輯與出版製作服務。本社堅持嚴謹的學術標準，尊重學術思想的多元性，使嚴謹的學術成果得以為各地研究人員、教育工作者及業界人士所用。",
    scopeHeading: "出版範圍",
    scopeIntro:
      "本社出版以下學科領域的學術專著、編著文集、研究報告、學術教材、會議論文集及跨學科著作：",
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
    publisherInfoHeading: "出版者資料",
    publisherInfo: [
      ["法定出版者", "Panorama Scholarly Group Limited"],
      ["出版品牌", "Panorama Scholarly Books"],
      ["類型", "獨立學術圖書出版社"],
      ["註冊地址", "香港旺角彌敦道625號雅蘭中心辦公樓二期15樓1508室"],
      ["網站", "books.panorama-sg.com"],
      ["出版諮詢", "books@panorama-sg.com"],
    ],
    standardsHeading: "學術規範",
    standardsP1:
      "Panorama Scholarly Books 恪守規範的出版實踐，維護學術記錄的誠信。所有投稿均須經編輯審稿，就其學術價值、原創性、研究方法的嚴謹性及論證的清晰度進行評估。",
    standardsP2:
      "本社出版政策涵蓋研究及出版倫理的主要方面，包括作者署名、抄襲、利益衝突、數據誠信，以及在研究與寫作中使用人工智能等。遵守上述政策為出版的前提條件。",
    readPolicies: "出版政策",
    relationshipHeading: "與 Panorama Scholarly Group Limited 的關係",
    relationshipP1:
      "Panorama Scholarly Books 為 Panorama Scholarly Group Limited 旗下學術圖書出版品牌。Panorama Scholarly Group Limited 為該品牌的法定出版者，負責出版協議、出版管理、書目紀錄、國際標準書號（ISBN）使用及以該品牌出版之一切事宜。",
    relationshipP2:
      "Panorama Scholarly Group Limited 的學術出版業務另涵蓋學術期刊、會議論文集及研究傳播服務；Panorama Scholarly Books 在其中保持獨立的編輯方針、作者關係、出版書目、出版政策及製作標準。",
    contactHeading: "聯絡方式",
    booksDepartment: "圖書出版部",
    contactUs: "聯絡我們",
  },
  "zh-Hans": {
    eyebrow: "关于我们",
    heading: "关于 Panorama Scholarly Books",
    subheading: "出版者信息、出版宗旨及学术规范。",
    missionHeading: "出版宗旨",
    missionP1:
      "Panorama Scholarly Books 出版有助于学术交流、跨学科研究及国际知识交流的学术著作。",
    missionP2:
      "本社为 Panorama Scholarly Group 旗下出版品牌，秉持规范的出版实践，为学术作者、主编、研究人员及机构提供专业的编辑与出版制作服务。本社坚持严谨的学术标准，尊重学术思想的多元性，使严谨的学术成果得以为各地研究人员、教育工作者及业界人士所用。",
    scopeHeading: "出版范围",
    scopeIntro:
      "本社出版以下学科领域的学术专著、编著文集、研究报告、学术教材、会议论文集及跨学科著作：",
    fields: [
      "人文学科",
      "社会科学",
      "教育与教育政策",
      "艺术与文化研究",
      "公共政策与治理",
      "跨学科与新兴领域",
      "人工智能、科技与未来社会",
      "全球研究与国际关系",
    ],
    publisherInfoHeading: "出版者信息",
    publisherInfo: [
      ["法定出版者", "Panorama Scholarly Group Limited"],
      ["出版品牌", "Panorama Scholarly Books"],
      ["类型", "独立学术图书出版社"],
      ["注册地址", "香港旺角弥敦道625号雅兰中心办公楼二期15楼1508室"],
      ["网站", "books.panorama-sg.com"],
      ["出版咨询", "books@panorama-sg.com"],
    ],
    standardsHeading: "学术规范",
    standardsP1:
      "Panorama Scholarly Books 恪守规范的出版实践，维护学术记录的诚信。所有投稿均须经编辑审稿，就其学术价值、原创性、研究方法的严谨性及论证的清晰度进行评估。",
    standardsP2:
      "本社出版政策涵盖研究及出版伦理的主要方面，包括作者署名、抄袭、利益冲突、数据诚信，以及在研究与写作中使用人工智能等。遵守上述政策为出版的前提条件。",
    readPolicies: "出版政策",
    relationshipHeading: "与 Panorama Scholarly Group Limited 的关系",
    relationshipP1:
      "Panorama Scholarly Books 为 Panorama Scholarly Group Limited 旗下学术图书出版品牌。Panorama Scholarly Group Limited 为该品牌的法定出版者，负责出版协议、出版管理、书目记录、国际标准书号（ISBN）使用及以该品牌出版的一切事宜。",
    relationshipP2:
      "Panorama Scholarly Group Limited 的学术出版业务另涵盖学术期刊、会议论文集及研究传播服务；Panorama Scholarly Books 在其中保持独立的编辑方针、作者关系、出版书目、出版政策及制作标准。",
    contactHeading: "联系方式",
    booksDepartment: "图书出版部",
    contactUs: "联系我们",
  },
} as const;

export default function AboutPageClient({ locale }: { locale: Locale }) {
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

          {/* Mission */}
          <section className="mb-14">
            <h2 className="type-h2 mb-6">
              {t.missionHeading}
            </h2>
            <p className="font-serif text-lg text-ink-2 leading-relaxed mb-5">
              {t.missionP1}
            </p>
            <p className="font-serif text-base text-ink-2 leading-relaxed mb-5">
              {t.missionP2}
            </p>
          </section>

          <div className="w-full h-px bg-line mb-14" />

          {/* Scope */}
          <section className="mb-14">
            <h2 className="type-h2 mb-6">
              {t.scopeHeading}
            </h2>
            <p className="font-serif text-base text-ink-2 leading-relaxed mb-6">
              {t.scopeIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-line rounded-lg overflow-hidden border border-line">
              {t.fields.map((field) => (
                <div key={field} className="bg-surface px-5 py-4">
                  <p className="font-serif text-sm text-ink-2">{field}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-line mb-14" />

          {/* Publisher information */}
          <section className="mb-14">
            <h2 className="type-h2 mb-6">
              {t.publisherInfoHeading}
            </h2>
            <div className="flex flex-col gap-0 border-t border-line">
              {t.publisherInfo.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b border-line py-4"
                >
                  <span className="font-serif text-sm text-ink-3">{label}</span>
                  <span className="font-serif text-sm text-ink-2">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-line mb-14" />

          {/* Academic standards */}
          <section className="mb-14">
            <h2 className="type-h2 mb-6">
              {t.standardsHeading}
            </h2>
            <p className="font-serif text-base text-ink-2 leading-relaxed mb-5">
              {t.standardsP1}
            </p>
            <p className="font-serif text-base text-ink-2 leading-relaxed mb-5">
              {t.standardsP2}
            </p>
            <Link
              href={localeHref("/policies", locale)}
              className="link-arrow"
            >
              {t.readPolicies}
            </Link>
          </section>

          <div className="w-full h-px bg-line mb-14" />

          {/* Relationship with PSG */}
          <section className="mb-14">
            <h2 className="type-h2 mb-6">
              {t.relationshipHeading}
            </h2>
            <p className="font-serif text-base text-ink-2 leading-relaxed mb-5">
              {t.relationshipP1}
            </p>
            <p className="font-serif text-base text-ink-2 leading-relaxed">
              {t.relationshipP2}
            </p>
          </section>

          <div className="w-full h-px bg-line mb-14" />

          {/* Contact */}
          <section>
            <h2 className="type-h2 mb-6">
              {t.contactHeading}
            </h2>
            <div className="border border-line p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg">
              <div>
                <p className="font-serif text-sm text-ink-3 mb-1">{t.booksDepartment}</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-base text-ink hover:text-brand transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <Link
                href={localeHref("/contact", locale)}
                className="btn btn-primary shrink-0 text-center"
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
