"use client";

import { useState } from "react";
import type { Locale } from "@/lib/locale";

type Bi = { en: string; "zh-Hant": string; "zh-Hans": string };

function optionLabel(opt: Bi, locale: Locale): string {
  if (locale === "zh-Hant") return opt["zh-Hant"];
  if (locale === "zh-Hans") return opt["zh-Hans"];
  return opt.en;
}

const inquiryTypes = [
  { label: { en: "Book Publishing Inquiry", "zh-Hant": "圖書出版洽詢", "zh-Hans": "图书出版咨询" }, subject: "Book Publishing Inquiry" },
  { label: { en: "Order / Copy Request", "zh-Hant": "訂購／索書申請", "zh-Hans": "订购/索书申请" }, subject: "Book Order Request" },
  { label: { en: "Institutional Purchase", "zh-Hant": "機構採購", "zh-Hans": "机构采购" }, subject: "Institutional Purchase Inquiry" },
  { label: { en: "Rights and Permissions", "zh-Hant": "版權與授權", "zh-Hans": "版权与授权" }, subject: "Rights and Permissions Inquiry" },
  { label: { en: "General Inquiry", "zh-Hant": "一般查詢", "zh-Hans": "一般咨询" }, subject: "General Inquiry" },
];

const bookTypeOptions: Bi[] = [
  { en: "Scholarly Monograph", "zh-Hant": "學術專著", "zh-Hans": "学术专著" },
  { en: "Edited Volume", "zh-Hant": "編著文集", "zh-Hans": "编著文集" },
  { en: "Academic Textbook", "zh-Hant": "學術教材", "zh-Hans": "学术教材" },
  { en: "Research Report", "zh-Hant": "研究報告", "zh-Hans": "研究报告" },
  { en: "Conference Proceedings", "zh-Hant": "會議論文集", "zh-Hans": "会议论文集" },
  { en: "Doctoral Dissertation-Based Book", "zh-Hant": "博士論文改編專書", "zh-Hans": "博士论文改编专书" },
  { en: "Other", "zh-Hant": "其他", "zh-Hans": "其他" },
];

const manuscriptStatusOptions: Bi[] = [
  { en: "Proposal / draft outline only", "zh-Hant": "僅有提案／草稿大綱", "zh-Hans": "仅有提案/草稿大纲" },
  { en: "In progress", "zh-Hant": "撰寫中", "zh-Hans": "撰写中" },
  { en: "Complete, not yet proofread", "zh-Hant": "已完成，尚未校對", "zh-Hans": "已完成，尚未校对" },
  { en: "Complete and fully proofread", "zh-Hant": "已完成並全面校對", "zh-Hans": "已完成并全面校对" },
];

const productFormatOptions: Bi[] = [
  { en: "Paperback", "zh-Hant": "平裝本", "zh-Hans": "平装本" },
  { en: "Hardback", "zh-Hant": "精裝本", "zh-Hans": "精装本" },
  { en: "PDF eBook", "zh-Hant": "PDF 電子書", "zh-Hans": "PDF 电子书" },
  { en: "EPUB", "zh-Hant": "EPUB", "zh-Hans": "EPUB" },
  { en: "Multiple formats", "zh-Hant": "多種格式", "zh-Hans": "多种格式" },
  { en: "Not yet decided", "zh-Hant": "尚未決定", "zh-Hans": "尚未决定" },
];

const publishingPackageOptions: Bi[] = [
  { en: "Package A — Author-Prepared Publication, digital only (USD 999)", "zh-Hant": "方案 A — 作者自備稿件出版，僅數位版（USD 999）", "zh-Hans": "方案 A — 作者自备稿件出版，仅数字版（USD 999）" },
  { en: "Package B — Standard Academic Book Production, digital only (USD 1,799)", "zh-Hant": "方案 B — 標準學術圖書製作，僅數位版（USD 1,799）", "zh-Hans": "方案 B — 标准学术图书制作，仅数字版（USD 1,799）" },
  { en: "Package C — Extended and Complex Book Production, digital only (From USD 2,499)", "zh-Hant": "方案 C — 延伸與複雜圖書製作，僅數位版（USD 2,499 起）", "zh-Hans": "方案 C — 延伸与复杂图书制作，仅数字版（USD 2,499 起）" },
  { en: "Essential Print Publication — Package A + printed copies (USD 1,999)", "zh-Hant": "Essential Print Publication — 方案 A ＋紙質出版（USD 1,999）", "zh-Hans": "Essential Print Publication — 方案 A ＋纸质出版（USD 1,999）" },
  { en: "Standard Academic Print Publication — Package B + printed copies (USD 2,799)", "zh-Hant": "Standard Academic Print Publication — 方案 B ＋紙質出版（USD 2,799）", "zh-Hans": "Standard Academic Print Publication — 方案 B ＋纸质出版（USD 2,799）" },
  { en: "Extended Academic Print Publication — Package C + printed copies (From USD 3,499)", "zh-Hant": "Extended Academic Print Publication — 方案 C ＋紙質出版（USD 3,499 起）", "zh-Hans": "Extended Academic Print Publication — 方案 C ＋纸质出版（USD 3,499 起）" },
  { en: "Not sure — please advise", "zh-Hant": "尚未確定 — 請提供建議", "zh-Hans": "尚未确定 — 请提供建议" },
];

const ACCESS_KEY = "0eb32213-c404-42e4-adf6-850fedb7679d";

const copy = {
  en: {
    successTitle: "Inquiry Received",
    successBody:
      "Thank you for contacting Panorama Scholarly Books. We have received your inquiry and will respond within 5–7 business days. Submission of this inquiry does not constitute acceptance, ISBN assignment, or a publishing agreement.",
    submitAnother: "Submit Another Inquiry",
    selectInquiryHeading: "Select Your Inquiry Type",
    sendEmail: "Send Email",
    contactFormHeading: "Contact Form",
    contactFormNote:
      "All fields marked with an asterisk are required. Submission of this form does not constitute acceptance, ISBN assignment, or a publishing agreement.",
    name: "Name *",
    namePlaceholder: "Your full name",
    email: "Email *",
    emailPlaceholder: "your@email.com",
    institution: "Institution / Affiliation",
    institutionPlaceholder: "University, institution, or organisation",
    country: "Country or Region",
    countryPlaceholder: "Country or region",
    inquiryType: "Inquiry Type *",
    selectInquiryType: "Select inquiry type",
    publishingDetailsHeading: "Publishing Assessment Details",
    bookTitle: "Proposed Book Title",
    bookTitlePlaceholder: "Working title and subtitle",
    bookType: "Book Type",
    selectBookType: "Select book type",
    subjectArea: "Subject Area",
    subjectAreaPlaceholder: "e.g. Public Policy, Education",
    manuscriptLanguage: "Manuscript Language",
    manuscriptLanguagePlaceholder: "e.g. English, Chinese (Simplified)",
    wordCount: "Current Word Count",
    wordCountPlaceholder: "e.g. 55,000",
    pageCount: "Estimated Page Count",
    pageCountPlaceholder: "e.g. 200",
    tablesFigures: "Tables and Figures",
    tablesFiguresPlaceholder: "e.g. 12",
    manuscriptStatus: "Current Manuscript Status",
    selectStatus: "Select status",
    productFormat: "Required Product Format",
    selectFormat: "Select format",
    publishingPackage: "Required Publishing Package",
    selectPackage: "Select package",
    requiredDate: "Required Publication Date",
    requiredDatePlaceholder: "e.g. Q1 2027, or flexible",
    previouslyPublished: "Previously Published Material",
    previouslyPublishedPlaceholder: "None, or describe (e.g. based on a doctoral thesis, prior journal articles)",
    thirdPartyCopyright: "Third-Party Copyright Material",
    thirdPartyCopyrightPlaceholder: "None, or describe material and permission status",
    uploadProposal: "Upload Proposal",
    uploadManuscript: "Upload Sample Chapter or Manuscript",
    fileNote: "Files up to 10 MB. PDF or Word documents only. For larger files, please email books@panorama-sg.com directly.",
    message: "Message *",
    messagePlaceholder:
      "Please describe your inquiry in detail. For book proposals, please include the working title, subject area, and a brief description of the project.",
    consent:
      "I consent to Panorama Scholarly Books retaining my contact details for the purpose of responding to this inquiry. My information will not be shared with third parties.",
    declaration:
      "I confirm that the information supplied is accurate and that submission of this inquiry does not constitute acceptance, ISBN assignment, or a publishing agreement.",
    errorMessage: "Something went wrong. Please try again or email us directly at books@panorama-sg.com.",
    submitting: "Submitting…",
    submit: "Submit Inquiry",
    alternative: "Alternatively, email us directly at",
  },
  "zh-Hant": {
    successTitle: "已收到您的查詢",
    successBody:
      "感謝您聯絡 Panorama Scholarly Books。我們已收到您的查詢，將於5–7個工作天內回覆。提交本查詢並不構成接受出版、ISBN 分配或出版協議。",
    submitAnother: "提交另一項查詢",
    selectInquiryHeading: "選擇查詢類型",
    sendEmail: "發送電郵",
    contactFormHeading: "聯絡表格",
    contactFormNote: "標有星號的欄位為必填。提交本表格並不構成接受出版、ISBN 分配或出版協議。",
    name: "姓名 *",
    namePlaceholder: "您的全名",
    email: "電郵 *",
    emailPlaceholder: "your@email.com",
    institution: "所屬機構／單位",
    institutionPlaceholder: "大學、機構或組織名稱",
    country: "國家或地區",
    countryPlaceholder: "國家或地區",
    inquiryType: "查詢類型 *",
    selectInquiryType: "選擇查詢類型",
    publishingDetailsHeading: "出版評估詳情",
    bookTitle: "擬出版書名",
    bookTitlePlaceholder: "暫定書名及副題",
    bookType: "圖書類型",
    selectBookType: "選擇圖書類型",
    subjectArea: "學科領域",
    subjectAreaPlaceholder: "例如：公共政策、教育",
    manuscriptLanguage: "書稿語言",
    manuscriptLanguagePlaceholder: "例如：英文、簡體中文",
    wordCount: "目前字數",
    wordCountPlaceholder: "例如：55,000",
    pageCount: "預估頁數",
    pageCountPlaceholder: "例如：200",
    tablesFigures: "圖表數量",
    tablesFiguresPlaceholder: "例如：12",
    manuscriptStatus: "書稿目前狀態",
    selectStatus: "選擇狀態",
    productFormat: "所需產品格式",
    selectFormat: "選擇格式",
    publishingPackage: "所需出版方案",
    selectPackage: "選擇方案",
    requiredDate: "預定出版日期",
    requiredDatePlaceholder: "例如：2027年第一季，或彈性安排",
    previouslyPublished: "曾發表之內容",
    previouslyPublishedPlaceholder: "無，或請說明（例如：改編自博士論文、先前期刊文章）",
    thirdPartyCopyright: "第三方版權材料",
    thirdPartyCopyrightPlaceholder: "無，或請說明相關材料及授權狀況",
    uploadProposal: "上傳提案",
    uploadManuscript: "上傳樣章或書稿",
    fileNote: "檔案上限 10 MB，僅接受 PDF 或 Word 文件。如檔案較大，請直接電郵至 books@panorama-sg.com。",
    message: "訊息 *",
    messagePlaceholder: "請詳細描述您的查詢。如為圖書提案，請附上暫定書名、學科領域及專案簡述。",
    consent: "本人同意 Panorama Scholarly Books 保留本人聯絡資料，以便回覆本次查詢。本人資料將不會提供予第三方。",
    declaration: "本人確認所提供之資料屬實，且提交本查詢並不構成接受出版、ISBN 分配或出版協議。",
    errorMessage: "發生錯誤，請重試，或直接電郵至 books@panorama-sg.com。",
    submitting: "提交中…",
    submit: "提交詢問",
    alternative: "您亦可直接電郵至",
  },
  "zh-Hans": {
    successTitle: "已收到您的咨询",
    successBody:
      "感谢您联系 Panorama Scholarly Books。我们已收到您的咨询，将于5–7个工作日内回复。提交本咨询并不构成接受出版、ISBN 分配或出版协议。",
    submitAnother: "提交另一项咨询",
    selectInquiryHeading: "选择咨询类型",
    sendEmail: "发送电邮",
    contactFormHeading: "联系表格",
    contactFormNote: "标有星号的栏位为必填。提交本表格并不构成接受出版、ISBN 分配或出版协议。",
    name: "姓名 *",
    namePlaceholder: "您的全名",
    email: "电邮 *",
    emailPlaceholder: "your@email.com",
    institution: "所属机构/单位",
    institutionPlaceholder: "大学、机构或组织名称",
    country: "国家或地区",
    countryPlaceholder: "国家或地区",
    inquiryType: "咨询类型 *",
    selectInquiryType: "选择咨询类型",
    publishingDetailsHeading: "出版评估详情",
    bookTitle: "拟出版书名",
    bookTitlePlaceholder: "暂定书名及副标题",
    bookType: "图书类型",
    selectBookType: "选择图书类型",
    subjectArea: "学科领域",
    subjectAreaPlaceholder: "例如：公共政策、教育",
    manuscriptLanguage: "书稿语言",
    manuscriptLanguagePlaceholder: "例如：英文、简体中文",
    wordCount: "目前字数",
    wordCountPlaceholder: "例如：55,000",
    pageCount: "预估页数",
    pageCountPlaceholder: "例如：200",
    tablesFigures: "图表数量",
    tablesFiguresPlaceholder: "例如：12",
    manuscriptStatus: "书稿目前状态",
    selectStatus: "选择状态",
    productFormat: "所需产品格式",
    selectFormat: "选择格式",
    publishingPackage: "所需出版方案",
    selectPackage: "选择方案",
    requiredDate: "预定出版日期",
    requiredDatePlaceholder: "例如：2027年第一季度，或灵活安排",
    previouslyPublished: "曾发表的内容",
    previouslyPublishedPlaceholder: "无，或请说明（例如：改编自博士论文、先前期刊文章）",
    thirdPartyCopyright: "第三方版权材料",
    thirdPartyCopyrightPlaceholder: "无，或请说明相关材料及授权状况",
    uploadProposal: "上传提案",
    uploadManuscript: "上传样章或书稿",
    fileNote: "文件上限 10 MB，仅接受 PDF 或 Word 文件。如文件较大，请直接电邮至 books@panorama-sg.com。",
    message: "留言 *",
    messagePlaceholder: "请详细描述您的咨询。如为图书提案，请附上暂定书名、学科领域及项目简述。",
    consent: "本人同意 Panorama Scholarly Books 保留本人联系资料，以便回复本次咨询。本人资料将不会提供给第三方。",
    declaration: "本人确认所提供的资料属实，且提交本咨询并不构成接受出版、ISBN 分配或出版协议。",
    errorMessage: "发生错误，请重试，或直接电邮至 books@panorama-sg.com。",
    submitting: "提交中…",
    submit: "提交咨询",
    alternative: "您也可直接电邮至",
  },
} as const;

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [inquiryType, setInquiryType] = useState("");

  const isPublishingInquiry = inquiryType === "Book Publishing Inquiry";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#e2e2e2] p-8 md:p-12">
        <p className="font-serif text-2xl text-[#111111] font-medium mb-3">{t.successTitle}</p>
        <p className="font-serif text-base text-[#555555] mb-6 leading-relaxed">
          {t.successBody}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-6 py-2 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
        >
          {t.submitAnother}
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Inquiry type quick-links */}
      <section className="mb-12">
        <h2 className="font-serif text-xl text-[#111111] font-medium mb-6">
          {t.selectInquiryHeading}
        </h2>
        <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
          {inquiryTypes.map((item) => (
            <div
              key={item.subject}
              className="border-b border-[#e2e2e2] py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <p className="font-serif text-base text-[#111111] font-medium">{item.label[locale]}</p>
              <a
                href={`mailto:books@panorama-sg.com?subject=${encodeURIComponent(item.subject)}`}
                className="shrink-0 font-serif text-[11px] tracking-[0.12em] uppercase border border-[#e2e2e2] px-4 py-2 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors whitespace-nowrap"
              >
                {t.sendEmail}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section>
        <h2 className="font-serif text-xl text-[#111111] font-medium mb-2">{t.contactFormHeading}</h2>
        <p className="font-serif text-sm text-[#888888] mb-6">
          {t.contactFormNote}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                {t.name}
              </label>
              <input
                type="text"
                name="name"
                required
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder={t.namePlaceholder}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                {t.email}
              </label>
              <input
                type="email"
                name="email"
                required
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder={t.emailPlaceholder}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                {t.institution}
              </label>
              <input
                type="text"
                name="institution"
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder={t.institutionPlaceholder}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                {t.country}
              </label>
              <input
                type="text"
                name="country"
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder={t.countryPlaceholder}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
              {t.inquiryType}
            </label>
            <select
              name="subject"
              required
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
            >
              <option value="">{t.selectInquiryType}</option>
              {inquiryTypes.map((item) => (
                <option key={item.subject} value={item.subject}>
                  {item.label[locale]}
                </option>
              ))}
            </select>
          </div>

          {isPublishingInquiry && (
            <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-5 md:p-6 flex flex-col gap-5">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888]">
                {t.publishingDetailsHeading}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.bookTitle}
                  </label>
                  <input
                    type="text"
                    name="book_title"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.bookTitlePlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.bookType}
                  </label>
                  <select
                    name="book_type"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">{t.selectBookType}</option>
                    {bookTypeOptions.map((opt) => (
                      <option key={opt.en}>{optionLabel(opt, locale)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.subjectArea}
                  </label>
                  <input
                    type="text"
                    name="subject_area"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.subjectAreaPlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.manuscriptLanguage}
                  </label>
                  <input
                    type="text"
                    name="manuscript_language"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.manuscriptLanguagePlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.wordCount}
                  </label>
                  <input
                    type="text"
                    name="word_count"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.wordCountPlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.pageCount}
                  </label>
                  <input
                    type="text"
                    name="page_count"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.pageCountPlaceholder}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.tablesFigures}
                  </label>
                  <input
                    type="text"
                    name="tables_figures_count"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.tablesFiguresPlaceholder}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.manuscriptStatus}
                  </label>
                  <select
                    name="manuscript_status"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">{t.selectStatus}</option>
                    {manuscriptStatusOptions.map((opt) => (
                      <option key={opt.en}>{optionLabel(opt, locale)}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.productFormat}
                  </label>
                  <select
                    name="product_format"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">{t.selectFormat}</option>
                    {productFormatOptions.map((opt) => (
                      <option key={opt.en}>{optionLabel(opt, locale)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.publishingPackage}
                  </label>
                  <select
                    name="publishing_package"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">{t.selectPackage}</option>
                    {publishingPackageOptions.map((opt) => (
                      <option key={opt.en}>{optionLabel(opt, locale)}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.requiredDate}
                  </label>
                  <input
                    type="text"
                    name="required_publication_date"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder={t.requiredDatePlaceholder}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                  {t.previouslyPublished}
                </label>
                <input
                  type="text"
                  name="previously_published"
                  className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                  placeholder={t.previouslyPublishedPlaceholder}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                  {t.thirdPartyCopyright}
                </label>
                <input
                  type="text"
                  name="third_party_copyright"
                  className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                  placeholder={t.thirdPartyCopyrightPlaceholder}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.uploadProposal}
                  </label>
                  <input
                    type="file"
                    name="proposal_file"
                    accept=".pdf,.doc,.docx"
                    className="font-serif text-xs text-[#555555] border border-[#e2e2e2] px-4 py-3 bg-white file:mr-3 file:border-0 file:bg-[#111111] file:text-white file:px-3 file:py-1.5 file:font-serif file:text-xs file:uppercase file:tracking-[0.08em] file:cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    {t.uploadManuscript}
                  </label>
                  <input
                    type="file"
                    name="manuscript_file"
                    accept=".pdf,.doc,.docx"
                    className="font-serif text-xs text-[#555555] border border-[#e2e2e2] px-4 py-3 bg-white file:mr-3 file:border-0 file:bg-[#111111] file:text-white file:px-3 file:py-1.5 file:font-serif file:text-xs file:uppercase file:tracking-[0.08em] file:cursor-pointer"
                  />
                </div>
              </div>
              <p className="font-serif text-xs text-[#888888] leading-relaxed">
                {t.fileNote}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
              {t.message}
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8] resize-none"
              placeholder={t.messagePlaceholder}
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 shrink-0 border-[#e2e2e2]"
            />
            <label htmlFor="consent" className="font-serif text-xs text-[#888888] leading-relaxed">
              {t.consent}
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="declaration"
              name="declaration"
              required
              className="mt-1 shrink-0 border-[#e2e2e2]"
            />
            <label htmlFor="declaration" className="font-serif text-xs text-[#888888] leading-relaxed">
              {t.declaration}
            </label>
          </div>

          {status === "error" && (
            <p className="font-serif text-sm text-[#c00000]">
              {t.errorMessage}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-8 py-3 hover:bg-transparent hover:text-[#111111] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? t.submitting : t.submit}
            </button>
          </div>
        </form>

        <p className="font-serif text-xs text-[#888888] mt-6 leading-relaxed">
          {t.alternative}{" "}
          <a href="mailto:books@panorama-sg.com" className="text-[#555555] underline underline-offset-2">
            books@panorama-sg.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
