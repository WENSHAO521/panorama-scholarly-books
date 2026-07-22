"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const acceptedTypes = [
  {
    type: { en: "Scholarly Monographs", "zh-Hant": "學術專著" },
    desc: {
      en: "Original research works by one or more authors presenting a sustained argument or investigation.",
      "zh-Hant": "由一位或多位作者撰寫的原創研究著作，提出具連貫性的論述或調查研究。",
    },
  },
  {
    type: { en: "Edited Volumes", "zh-Hant": "編著文集" },
    desc: {
      en: "Collections of original chapters by multiple contributors, organised and introduced by one or more editors.",
      "zh-Hant": "由多位撰稿人撰寫原創章節，並由一位或多位編者統籌與導言的文集。",
    },
  },
  {
    type: { en: "Academic Textbooks", "zh-Hant": "學術教材" },
    desc: {
      en: "Pedagogically structured works designed for use in higher education curricula.",
      "zh-Hant": "依教學需求編排、供高等教育課程使用的著作。",
    },
  },
  {
    type: { en: "Research Reports", "zh-Hant": "研究報告" },
    desc: {
      en: "Structured reports presenting findings from research projects, systematic reviews, or policy investigations.",
      "zh-Hant": "呈現研究專案、系統性回顧或政策調查成果的結構化報告。",
    },
  },
  {
    type: { en: "Conference Proceedings", "zh-Hant": "會議論文集" },
    desc: {
      en: "Collections of peer-reviewed papers presented at academic conferences.",
      "zh-Hant": "收錄於學術會議發表並經同行評審之論文集。",
    },
  },
  {
    type: { en: "Doctoral Dissertation-Based Books", "zh-Hant": "博士論文改編專書" },
    desc: {
      en: "Substantially revised and expanded works based on doctoral theses.",
      "zh-Hant": "以博士論文為基礎，經大幅修訂與擴充的著作。",
    },
  },
  {
    type: { en: "Interdisciplinary Research Books", "zh-Hant": "跨學科研究專書" },
    desc: {
      en: "Works that cross conventional disciplinary boundaries and engage multiple fields of inquiry.",
      "zh-Hant": "跨越傳統學科界線、涉及多重研究領域的著作。",
    },
  },
];

const whoCanSubmit = [
  {
    en: "Academic authors at any career stage, including early-career researchers",
    "zh-Hant": "任何職涯階段的學術作者，包括早期研究人員",
  },
  {
    en: "Editors assembling interdisciplinary or field-specific edited volumes",
    "zh-Hant": "籌組跨學科或特定領域編著文集的編者",
  },
  {
    en: "Researchers working independently or affiliated with academic institutions",
    "zh-Hant": "獨立研究者或隸屬學術機構的研究人員",
  },
  {
    en: "Research groups and policy institutes seeking to disseminate findings",
    "zh-Hant": "希望發表研究成果的研究團隊與政策機構",
  },
  {
    en: "Conference organisers wishing to publish proceedings",
    "zh-Hant": "希望出版會議論文集的會議主辦單位",
  },
  {
    en: "Doctoral graduates seeking to revise and publish their dissertations",
    "zh-Hant": "希望修訂並出版其論文的博士畢業生",
  },
];

const requiredDocs = [
  { en: "Book proposal (see below for content requirements)", "zh-Hant": "圖書提案（內容要求詳見下方）" },
  { en: "Author or editor CV", "zh-Hant": "作者或編者履歷" },
  { en: "Sample chapters or full manuscript", "zh-Hant": "樣章或完整書稿" },
  { en: "Table of contents", "zh-Hant": "目錄" },
  { en: "Abstract and book description (200-400 words)", "zh-Hant": "摘要及內容簡介（200-400字）" },
  { en: "Statement of target readership", "zh-Hant": "目標讀者說明" },
  { en: "Statement of publication purpose and scholarly contribution", "zh-Hant": "出版目的與學術貢獻說明" },
  { en: "Declaration of originality", "zh-Hant": "原創性聲明" },
  { en: "Permission documents for third-party materials, where applicable", "zh-Hant": "第三方材料授權文件（如適用）" },
];

const proposalContent = [
  { en: "Working title and subtitle", "zh-Hant": "暫定書名及副題" },
  { en: "Author / editor details and institutional affiliation", "zh-Hant": "作者／編者資料及所屬機構" },
  { en: "Book type (monograph, edited volume, etc.)", "zh-Hant": "圖書類型（專著、編著文集等）" },
  { en: "Subject area and disciplinary focus", "zh-Hant": "學科領域及研究重點" },
  { en: "Description of the book and its central argument", "zh-Hant": "圖書內容簡介及核心論點" },
  { en: "Table of contents with chapter summaries", "zh-Hant": "含各章摘要之目錄" },
  { en: "Target readership and course adoption potential, if relevant", "zh-Hant": "目標讀者及課程採用潛力（如適用）" },
  { en: "Estimated word count and projected completion date", "zh-Hant": "預估字數及完成日期" },
  { en: "List of competing or complementary titles", "zh-Hant": "同類或互補書目清單" },
  { en: "Status of the manuscript (draft, in progress, complete)", "zh-Hant": "書稿狀態（草稿、撰寫中、已完成）" },
];

const processSteps = [
  {
    step: { en: "Proposal Submission", "zh-Hant": "提交提案" },
    desc: {
      en: "Submit the book proposal, author or editor CV, table of contents, sample chapters or complete manuscript, book description, target-readership statement, originality declaration, and relevant permissions information.",
      "zh-Hant": "提交圖書提案、作者或編者履歷、目錄、樣章或完整書稿、內容簡介、目標讀者說明、原創性聲明及相關授權資訊。",
    },
  },
  {
    step: { en: "Initial Editorial Screening", "zh-Hant": "初步編輯審查" },
    desc: {
      en: "The editorial team assesses the project's subject scope, scholarly contribution, originality, ethical suitability, legal suitability, and basic production feasibility. This normally takes two to four weeks.",
      "zh-Hant": "編輯團隊評估專案的學科範疇、學術貢獻、原創性、倫理及法律適當性，以及基本製作可行性，一般需時兩至四週。",
    },
  },
  {
    step: { en: "Editorial Evaluation", "zh-Hant": "編輯評估" },
    desc: {
      en: "Suitable proposals proceed to detailed editorial evaluation. External academic assessment may be requested where appropriate.",
      "zh-Hant": "符合條件的提案將進入詳細編輯評估，必要時可能安排外部學術審查。",
    },
  },
  {
    step: { en: "Publication Decision", "zh-Hant": "出版決定" },
    desc: {
      en: "The author or editor receives one of the following decisions: accept; accept subject to revision; revise and resubmit; or decline. A fee quotation does not constitute editorial acceptance.",
      "zh-Hant": "作者或編者將收到以下其中一項決定：接受、有條件接受待修訂、修訂後重新提交，或不接受。費用報價並不構成編輯接受。",
    },
  },
  {
    step: { en: "Publishing Agreement and Payment", "zh-Hant": "出版協議與付款" },
    desc: {
      en: "Accepted projects proceed to a written publishing agreement specifying publication format, services, responsibilities, fees, payment schedule, rights and licences, production scope, correction rounds, estimated schedule, and printing and distribution arrangements.",
      "zh-Hant": "獲接受的專案將簽署書面出版協議，載明出版格式、服務內容、責任、費用、付款時程、版權與授權、製作範圍、校訂輪次、預估時程，以及印刷與發行安排。",
    },
  },
  {
    step: { en: "Rights and Metadata Verification", "zh-Hant": "版權與元數據核實" },
    desc: {
      en: "The publisher verifies the final title and subtitle, author and editor names, contributor information, affiliations, copyright ownership, third-party permissions, edition and product format, publication language, book description, subject classification, and publisher information.",
      "zh-Hant": "出版者核實最終書名及副題、作者與編者姓名、撰稿人資訊、所屬機構、版權歸屬、第三方授權、版次及產品格式、出版語言、內容簡介、學科分類及出版者資訊。",
    },
  },
  {
    step: { en: "Production", "zh-Hant": "製作" },
    desc: {
      en: "The project proceeds through the agreed proofreading, editing, typesetting, cover design, file preparation, and correction process.",
      "zh-Hant": "專案依協議進行校對、編輯、排版、封面設計、檔案準備及校訂流程。",
    },
  },
  {
    step: { en: "ISBN Assignment and Final Approval", "zh-Hant": "ISBN 分配與最終核准" },
    desc: {
      en: "Following approval of the publication format and bibliographic metadata, the publisher assigns the appropriate ISBN and completes the copyright-page and barcode information. ISBN assignment does not mean that unfinished or non-compliant files have received final publication approval.",
      "zh-Hant": "出版格式及書目元數據經核准後，出版者將分配對應 ISBN，並完成版權頁及條碼資訊。ISBN 的分配並不代表未完成或不合規之檔案已獲最終出版核准。",
    },
  },
  {
    step: { en: "Publication", "zh-Hant": "出版" },
    desc: {
      en: "After final approval and payment of all outstanding fees, the book receives final publisher approval, an official publication date, final bibliographic metadata, an official book webpage, a publisher publication record, and digital archiving.",
      "zh-Hant": "經最終核准並繳清所有未付費用後，該書將獲得出版者最終核准、正式出版日期、最終書目元數據、官方圖書網頁、出版紀錄及數位典藏。",
    },
  },
  {
    step: { en: "Registration, Deposit, and Archiving", "zh-Hant": "登記、送存與典藏" },
    desc: {
      en: "Where applicable, the publisher coordinates post-publication registration, statutory deposit arrangements, publisher records, and long-term digital archiving. The author or commissioning institution remains responsible for all separately invoiced printing, binding, deposit-copy, delivery, and third-party costs.",
      "zh-Hant": "如適用，出版者將協調出版後登記、法定送存安排、出版紀錄及長期數位典藏。另行開立發票之印刷、裝訂、送存本、運送及第三方費用，仍由作者或委託機構負責。",
    },
  },
];

const manuscriptRequirements = [
  {
    label: { en: "Language", "zh-Hant": "語言" },
    text: {
      en: "Manuscripts may be submitted in English. Bilingual or non-English submissions are considered on a case-by-case basis. Authors are responsible for ensuring language quality.",
      "zh-Hant": "書稿可以英文提交。雙語或非英文投稿將個案考量。作者須自行確保語言品質。",
    },
  },
  {
    label: { en: "Length", "zh-Hant": "篇幅" },
    text: {
      en: "Typical monographs range from 60,000 to 120,000 words. Edited volumes range from 80,000 to 150,000 words. Research reports from 20,000 to 60,000 words. Please discuss specific length requirements with the editorial team.",
      "zh-Hant": "一般專著約60,000至120,000字；編著文集約80,000至150,000字；研究報告約20,000至60,000字。具體篇幅要求請與編輯團隊討論。",
    },
  },
  {
    label: { en: "Format", "zh-Hant": "格式" },
    text: {
      en: "Manuscripts should be submitted as Microsoft Word files (.docx) with consistent formatting. Final production files will be requested at a later stage.",
      "zh-Hant": "書稿應以格式一致的 Microsoft Word 檔案（.docx）提交，最終製作檔案將於後續階段另行要求。",
    },
  },
  {
    label: { en: "Style", "zh-Hant": "格式規範" },
    text: {
      en: "Authors should follow a recognised citation style consistently throughout (APA 7, Chicago, or MLA). Footnotes, endnotes, and bibliographies should be complete and accurate.",
      "zh-Hant": "作者應全文一致採用公認的引用格式（APA 7、芝加哥格式或 MLA）。註腳、尾註及參考書目應完整準確。",
    },
  },
  {
    label: { en: "Permissions", "zh-Hant": "授權" },
    text: {
      en: "Authors are responsible for obtaining and documenting permission for any third-party material reproduced in the manuscript, including figures, tables, photographs, and extended quotations.",
      "zh-Hant": "作者須自行取得並記錄書稿中重製之任何第三方材料的授權，包括圖表、照片及大段引文。",
    },
  },
];

const onThisPage = [
  { href: "#what-we-publish", label: { en: "What We Publish", "zh-Hant": "我們出版的內容" } },
  { href: "#who-can-submit", label: { en: "Who Can Submit", "zh-Hant": "投稿資格" } },
  { href: "#required-documents", label: { en: "Required Documents", "zh-Hant": "所需文件" } },
  { href: "#proposal-content", label: { en: "Proposal Content", "zh-Hant": "提案內容" } },
  { href: "#review-process", label: { en: "Review Process", "zh-Hant": "審查流程" } },
  { href: "#manuscript-requirements", label: { en: "Manuscript Requirements", "zh-Hant": "書稿要求" } },
  { href: "#submit", label: { en: "Submit an Inquiry", "zh-Hant": "提交查詢" } },
];

const copy = {
  en: {
    eyebrow: "For Authors",
    heading: "Publish with Panorama Scholarly Books",
    subheading: "Information for authors and editors seeking to publish with Panorama Scholarly Books.",
    onThisPage: "On This Page",
    readyToSubmit: "Ready to submit?",
    contactEditorialTeam: "Contact the Editorial Team",
    whatWePublish: "What We Publish",
    whatWePublishIntro: "Panorama Scholarly Books publishes original, peer-considered academic works across a broad range of humanistic, social scientific, educational, and interdisciplinary fields. We are committed to high scholarly standards, rigorous argumentation, and accessible academic writing.",
    whoCanSubmit: "Who Can Submit",
    whoCanSubmitIntro: "We welcome proposals from:",
    requiredDocuments: "Required Documents",
    submissionsMustInclude: "Submissions must include the following:",
    bookProposalContent: "Book Proposal Content",
    proposalContentIntro: "The book proposal should be a document of 1,000-3,000 words and address the following:",
    reviewProcess: "Review and Publication Process",
    manuscriptRequirementsHeading: "Manuscript Requirements",
    submitInquiry: "Submit an Inquiry",
    submitIntro: "To submit a book proposal or discuss a publishing project, please email the Books department. Include your proposal and relevant supporting documents as attachments.",
    booksEditorialTeam: "Books Editorial Team",
    submitProposal: "Submit Proposal",
    allowResponse: "Please allow 2-4 weeks for an initial response to proposals. The editorial team will contact you if additional information is required. For questions about services and fees, please also consult the",
    publishingServicesPage: "Publishing Services",
    pageSuffix: "page.",
  },
  "zh-Hant": {
    eyebrow: "作者專區",
    heading: "與 Panorama Scholarly Books 一同出版",
    subheading: "為有意與 Panorama Scholarly Books 合作出版的作者及編者提供的資訊。",
    onThisPage: "本頁內容",
    readyToSubmit: "準備好投稿了嗎？",
    contactEditorialTeam: "聯絡編輯團隊",
    whatWePublish: "我們出版的內容",
    whatWePublishIntro: "Panorama Scholarly Books 出版原創、經審查的學術著作，涵蓋廣泛的人文、社會科學、教育及跨學科領域。我們致力於維持嚴謹的學術標準、扎實的論述，以及易讀的學術寫作風格。",
    whoCanSubmit: "投稿資格",
    whoCanSubmitIntro: "我們歡迎以下人士投稿：",
    requiredDocuments: "所需文件",
    submissionsMustInclude: "投稿須包含以下文件：",
    bookProposalContent: "圖書提案內容",
    proposalContentIntro: "圖書提案應為1,000至3,000字的文件，並涵蓋以下內容：",
    reviewProcess: "審查與出版流程",
    manuscriptRequirementsHeading: "書稿要求",
    submitInquiry: "提交查詢",
    submitIntro: "如需提交圖書提案或討論出版專案，請電郵圖書部門，並將提案及相關輔助文件以附件形式提供。",
    booksEditorialTeam: "圖書編輯團隊",
    submitProposal: "提交提案",
    allowResponse: "請預留2-4週作提案的初步回覆。如需補充資訊，編輯團隊將與您聯絡。如對服務及費用有任何疑問，亦可參閱",
    publishingServicesPage: "出版服務",
    pageSuffix: "頁面。",
  },
} as const;

export default function ForAuthorsPageClient() {
  const { locale } = useLanguage();
  const t = copy[locale];

  return (
    <>
      {/* Page header */}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12 lg:py-16">
          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:border-r border-[#e2e2e2] lg:pr-10 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                {t.onThisPage}
              </p>
              <ul className="flex flex-col gap-2">
                {onThisPage.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      {item.label[locale]}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#e2e2e2] mt-8 pt-8">
                <p className="font-serif text-sm text-[#888888] mb-3">
                  {t.readyToSubmit}
                </p>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Proposal Inquiry"
                  className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-4 py-3 hover:bg-transparent hover:text-[#111111] transition-colors"
                >
                  {t.contactEditorialTeam}
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-2 lg:pl-10">

            {/* What we publish */}
            <section id="what-we-publish" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.whatWePublish}
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-8">
                {t.whatWePublishIntro}
              </p>
              <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {acceptedTypes.map((item) => (
                  <div
                    key={item.type.en}
                    className="border-b border-[#e2e2e2] py-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
                  >
                    <p className="font-serif text-sm text-[#111111] font-medium sm:col-span-1">
                      {item.type[locale]}
                    </p>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed sm:col-span-2">
                      {item.desc[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Who can submit */}
            <section id="who-can-submit" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.whoCanSubmit}
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
                {t.whoCanSubmitIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {whoCanSubmit.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-3 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Required documents */}
            <section id="required-documents" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.requiredDocuments}
              </h2>
              <div className="bg-[#f7f7f7] border border-[#e2e2e2] p-6 mb-6">
                <p className="font-serif text-sm text-[#888888] mb-1">
                  {t.submissionsMustInclude}
                </p>
              </div>
              <ul className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {requiredDocs.map((doc, i) => (
                  <li
                    key={i}
                    className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#e2e2e2] py-4"
                  >
                    <span className="text-[#c8c8c8] shrink-0 tabular-nums text-xs pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {doc[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Proposal content */}
            <section id="proposal-content" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.bookProposalContent}
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
                {t.proposalContentIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {proposalContent.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-3 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Review process */}
            <section id="review-process" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.reviewProcess}
              </h2>
              <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {processSteps.map((item, i) => (
                  <div key={item.step.en} className="border-b border-[#e2e2e2] py-5 grid grid-cols-1 sm:grid-cols-4 gap-2 items-start">
                    <div className="sm:col-span-1 flex items-start gap-3">
                      <span className="font-serif text-xs text-[#c8c8c8] tabular-nums shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-serif text-sm text-[#111111] font-medium">
                        {item.step[locale]}
                      </p>
                    </div>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed sm:col-span-3">
                      {item.desc[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Manuscript requirements */}
            <section id="manuscript-requirements" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.manuscriptRequirementsHeading}
              </h2>
              <div className="flex flex-col gap-4">
                {manuscriptRequirements.map((item) => (
                  <div key={item.label.en} className="border border-[#e2e2e2] p-5">
                    <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">{item.label[locale]}</p>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed">{item.text[locale]}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Submit */}
            <section id="submit" className="scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                {t.submitInquiry}
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-8">
                {t.submitIntro}
              </p>
              <div className="border border-[#e2e2e2] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-sm text-[#888888] mb-1">{t.booksEditorialTeam}</p>
                  <a
                    href="mailto:books@panorama-sg.com"
                    className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors"
                  >
                    books@panorama-sg.com
                  </a>
                </div>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Proposal Submission"
                  className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-6 py-3 hover:bg-transparent hover:text-[#111111] transition-colors text-center"
                >
                  {t.submitProposal}
                </a>
              </div>
              <div className="mt-4 border border-[#e2e2e2] bg-[#f7f7f7] p-5">
                <p className="font-serif text-xs text-[#888888] leading-relaxed">
                  {t.allowResponse}{" "}
                  <Link href="/publishing-services" className="underline underline-offset-2 hover:text-[#555555] transition-colors">
                    {t.publishingServicesPage}
                  </Link>{" "}
                  {t.pageSuffix}
                </p>
              </div>
            </section>
          </main>
        </div>
      </Container>
    </>
  );
}
