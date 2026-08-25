"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { localeHref, type Locale } from "@/lib/locale";

const policies = [
  {
    href: "/policies/publishing-ethics",
    title: { en: "Publishing Ethics", "zh-Hant": "出版倫理", "zh-Hans": "出版伦理" },
    desc: {
      en: "Standards of conduct for authors, editors, reviewers, and the publisher. Responsibilities and obligations of all parties in the publication process.",
      "zh-Hant": "作者、編者、審稿人及出版者之行為準則，以及出版過程中各方的責任與義務。",
      "zh-Hans": "作者、编者、审稿人及出版者的行为准则，以及出版过程中各方的责任与义务。",
    },
    updated: "2026",
  },
  {
    href: "/policies/authorship",
    title: { en: "Authorship and Contributorship", "zh-Hant": "著作權歸屬與貢獻", "zh-Hans": "著作权归属与贡献" },
    desc: {
      en: "Criteria for authorship and editorship of published works. Acknowledgement of contributions and management of authorship disputes.",
      "zh-Hant": "已出版著作之作者及編者資格標準，貢獻之致謝，以及著作權歸屬爭議之處理。",
      "zh-Hans": "已出版著作的作者及编者资格标准，贡献的致谢，以及著作权归属争议的处理。",
    },
    updated: "2026",
  },
  {
    href: "/policies/plagiarism",
    title: { en: "Plagiarism and Similarity Check", "zh-Hant": "抄襲與相似度檢查", "zh-Hans": "抄袭与相似度检查" },
    desc: {
      en: "Policy on text similarity, self-plagiarism, and duplicate publication. Processes for identification and handling of plagiarism concerns.",
      "zh-Hant": "有關文字相似度、自我抄襲及重複出版之政策，以及識別與處理抄襲疑慮之流程。",
      "zh-Hans": "有关文字相似度、自我抄袭及重复出版的政策，以及识别与处理抄袭疑虑的流程。",
    },
    updated: "2026",
  },
  {
    href: "/policies/copyright",
    title: { en: "Copyright and Licensing", "zh-Hant": "版權與授權", "zh-Hans": "版权与授权" },
    desc: {
      en: "Ownership of copyright in published works, licensing arrangements, and rights retained by authors.",
      "zh-Hant": "已出版著作之版權歸屬、授權安排，以及作者保留之權利。",
      "zh-Hans": "已出版著作的版权归属、授权安排，以及作者保留的权利。",
    },
    updated: "2026",
  },
  {
    href: "/policies/open-access",
    title: { en: "Open Access Books", "zh-Hant": "開放獲取圖書", "zh-Hans": "开放获取图书" },
    desc: {
      en: "Policy on open access publication, Creative Commons licensing, and conditions under which titles may be made freely available.",
      "zh-Hant": "有關開放獲取出版、創用CC授權，以及書目得以免費公開之條件的政策。",
      "zh-Hans": "有关开放获取出版、知识共享许可协议，以及书目得以免费公开的条件的政策。",
    },
    updated: "2026",
  },
  {
    href: "/policies/ai-use-policy",
    title: { en: "AI Use Policy", "zh-Hant": "人工智能使用政策", "zh-Hans": "人工智能使用政策" },
    desc: {
      en: "Policy on the use of artificial intelligence tools in the preparation of manuscripts submitted to Panorama Scholarly Books.",
      "zh-Hant": "有關投稿予 Panorama Scholarly Books 之書稿在撰寫過程中使用人工智能工具之政策。",
      "zh-Hans": "有关投稿至 Panorama Scholarly Books 的书稿在撰写过程中使用人工智能工具的政策。",
    },
    updated: "2026",
  },
];

const copy = {
  en: {
    eyebrow: "Policies",
    heading: "Publishing Policies",
    subheading: "Panorama Scholarly Books is committed to responsible and transparent publishing. All policies apply to authors, editors, reviewers, and the publisher.",
    intro: "The following policies govern the submission, evaluation, production, and publication of works under the Panorama Scholarly Books imprint. Authors are required to familiarise themselves with these policies before submitting a proposal or manuscript.",
    updated: "Updated",
    readPolicy: "Read policy",
    contactPrefix: "For policy-related questions, complaints, or appeals, please contact the Books department at",
    contactSuffix: "Panorama Scholarly Books aims to respond to policy-related correspondence within 10 business days.",
  },
  "zh-Hant": {
    eyebrow: "政策",
    heading: "出版政策",
    subheading: "Panorama Scholarly Books 致力於負責任且透明的出版實踐。所有政策均適用於作者、編者、審稿人及出版者。",
    intro: "以下政策規範 Panorama Scholarly Books 品牌下著作之投稿、評估、製作與出版。作者於提交提案或書稿前，須熟悉這些政策。",
    updated: "更新於",
    readPolicy: "閱讀政策",
    contactPrefix: "如有政策相關問題、投訴或申訴，請聯絡圖書部門，電郵",
    contactSuffix: "Panorama Scholarly Books 致力於在10個工作天內回覆政策相關來函。",
  },
  "zh-Hans": {
    eyebrow: "政策",
    heading: "出版政策",
    subheading: "Panorama Scholarly Books 致力于负责任且透明的出版实践。所有政策均适用于作者、编者、审稿人及出版者。",
    intro: "以下政策规范 Panorama Scholarly Books 品牌下著作的投稿、评估、制作与出版。作者在提交提案或书稿前，须熟悉这些政策。",
    updated: "更新于",
    readPolicy: "阅读政策",
    contactPrefix: "如有政策相关问题、投诉或申诉，请联系图书部门，电邮",
    contactSuffix: "Panorama Scholarly Books 致力于在10个工作日内回复政策相关来函。",
  },
} as const;

export default function PoliciesPageClient({ locale }: { locale: Locale }) {
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
          <p className="font-serif text-base text-[#555555] leading-relaxed mb-12">
            {t.intro}
          </p>

          <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
            {policies.map((policy) => (
              <Link
                key={policy.href}
                href={localeHref(policy.href, locale)}
                className="group border-b border-[#e2e2e2] py-8 grid grid-cols-1 sm:grid-cols-4 gap-4 hover:bg-[#f7f7f7] transition-colors px-0 -mx-0"
              >
                <div className="sm:col-span-3">
                  <p className="font-serif text-xl text-[#111111] font-medium mb-2 group-hover:underline underline-offset-4">
                    {policy.title[locale]}
                  </p>
                  <p className="font-serif text-sm text-[#888888] leading-relaxed">
                    {policy.desc[locale]}
                  </p>
                </div>
                <div className="sm:col-span-1 flex sm:flex-col sm:items-end justify-between sm:justify-start gap-2">
                  <span className="font-serif text-xs text-[#888888]">
                    {t.updated} {policy.updated}
                  </span>
                  <span className="font-serif text-xs text-[#111111] group-hover:underline underline-offset-2">
                    {t.readPolicy}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-6 mt-12">
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              {t.contactPrefix}{" "}
              <a
                href="mailto:books@panorama-sg.com?subject=Policy Inquiry"
                className="text-[#111111] underline underline-offset-2 hover:text-[#555555] transition-colors"
              >
                books@panorama-sg.com
              </a>
              . {t.contactSuffix}
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
