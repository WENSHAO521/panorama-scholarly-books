"use client";

import Container from "@/components/Container";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/context/LanguageContext";

type Bi = { en: string; "zh-Hant": string };

const packages: {
  id: string;
  label: Bi;
  name: Bi;
  price: string;
  unit: Bi;
  desc: Bi;
  includes: Bi[];
  notIncluded: Bi[];
  featured: boolean;
}[] = [
  {
    id: "a",
    label: { en: "Package A", "zh-Hant": "方案 A" },
    name: { en: "Author-Prepared Publication", "zh-Hant": "作者自備稿件出版" },
    price: "USD 999",
    unit: { en: "per title, edition, and product format", "zh-Hant": "每一書名、版次及產品格式" },
    desc: {
      en: "For authors who provide a final, fully proofread manuscript, a final typeset interior file, and a publication-ready cover.",
      "zh-Hant": "適合已備妥最終完整校對稿件、最終排版內文檔案及出版用封面的作者。",
    },
    includes: [
      { en: "Initial editorial and publication eligibility screening", "zh-Hant": "初步編輯與出版資格審查" },
      { en: "Publishing agreement preparation", "zh-Hant": "出版協議準備" },
      { en: "Authorship and rights documentation review", "zh-Hant": "著作權與授權文件審查" },
      { en: "Final interior and cover file inspection", "zh-Hant": "最終內文及封面檔案檢查" },
      { en: "Copyright-page format review", "zh-Hant": "版權頁格式審查" },
      { en: "One ISBN for one accepted edition and product format", "zh-Hant": "為一個核准版次及格式提供一組 ISBN" },
      { en: "ISBN barcode preparation", "zh-Hant": "ISBN 條碼製作" },
      { en: "Publisher metadata and bibliographic record preparation", "zh-Hant": "出版者元數據與書目紀錄準備" },
      { en: "Official book webpage", "zh-Hant": "官方圖書網頁" },
      { en: "Digital archiving and publication-record management", "zh-Hant": "數位典藏與出版紀錄管理" },
      { en: "Post-publication registration and compliance coordination", "zh-Hant": "出版後登記與合規協調" },
    ],
    notIncluded: [
      { en: "Proofreading, typesetting, or cover design", "zh-Hant": "校對、排版或封面設計" },
      { en: "Printing, shipping, or statutory deposit copies", "zh-Hant": "印刷、運送或法定送存本" },
      { en: "Substantive manuscript revision", "zh-Hant": "實質性書稿修訂" },
    ],
    featured: false,
  },
  {
    id: "b",
    label: { en: "Package B", "zh-Hant": "方案 B" },
    name: { en: "Standard Academic Book Production", "zh-Hant": "標準學術圖書製作" },
    price: "USD 1,799",
    unit: { en: "per title, edition, and product format", "zh-Hant": "每一書名、版次及產品格式" },
    desc: {
      en: "For standard academic books requiring publisher-assisted proofreading, typesetting, cover design, and final production.",
      "zh-Hant": "適合需要出版社協助校對、排版、封面設計及最終製作的標準學術圖書。",
    },
    includes: [
      { en: "All editorial, administrative, metadata, ISBN, webpage, and archiving services in Package A", "zh-Hant": "涵蓋方案 A 所有編輯、管理、元數據、ISBN、網頁及典藏服務" },
      { en: "Basic proofreading", "zh-Hant": "基礎校對" },
      { en: "Standard academic interior typesetting", "zh-Hant": "標準學術內文排版" },
      { en: "Standard academic cover design", "zh-Hant": "標準學術封面設計" },
      { en: "Standard title page and copyright-page preparation", "zh-Hant": "標準書名頁及版權頁準備" },
      { en: "Placement of a normal number of tables and figures", "zh-Hant": "一般數量圖表之編排" },
      { en: "Print-ready PDF preparation", "zh-Hant": "印刷用 PDF 準備" },
      { en: "Final production quality review", "zh-Hant": "最終製作品質審查" },
      { en: "One consolidated round of author corrections after typesetting", "zh-Hant": "排版後一輪整合式作者校訂" },
    ],
    notIncluded: [
      { en: "Manuscripts exceeding 60,000 words / approx. 200 pages", "zh-Hant": "超過60,000字／約200頁之書稿" },
      { en: "Printing, shipping, or statutory deposit copies", "zh-Hant": "印刷、運送或法定送存本" },
    ],
    featured: true,
  },
  {
    id: "c",
    label: { en: "Package C", "zh-Hant": "方案 C" },
    name: { en: "Extended and Complex Book Production", "zh-Hant": "延伸與複雜圖書製作" },
    price: "From USD 2,499",
    unit: { en: "per title, edition, and product format", "zh-Hant": "每一書名、版次及產品格式" },
    desc: {
      en: "For longer, bilingual, multilingual, edited, illustrated, or technically complex academic books.",
      "zh-Hant": "適合篇幅較長、雙語、多語、編著、附插圖或技術上較複雜的學術圖書。",
    },
    includes: [
      { en: "All services in Package B", "zh-Hant": "涵蓋方案 B 所有服務" },
      { en: "Extended proofreading and advanced academic typesetting", "zh-Hant": "延伸校對與進階學術排版" },
      { en: "Complex table, figure, formula, and illustration placement", "zh-Hant": "複雜圖表、公式及插圖編排" },
      { en: "Multi-author chapter standardisation", "zh-Hant": "多作者章節格式統一" },
      { en: "Customized academic cover design", "zh-Hant": "客製化學術封面設計" },
      { en: "Up to two consolidated rounds of author or editor corrections", "zh-Hant": "最多兩輪整合式作者或編者校訂" },
      { en: "Enhanced bibliographic metadata", "zh-Hant": "強化書目元數據" },
      { en: "Book description and promotional-text preparation", "zh-Hant": "內容簡介及宣傳文字準備" },
    ],
    notIncluded: [
      { en: "Printing, shipping, or statutory deposit copies", "zh-Hant": "印刷、運送或法定送存本" },
    ],
    featured: false,
  },
];

const comparisonRows: [Bi, Bi, Bi, Bi][] = [
  [
    { en: "Editorial screening", "zh-Hant": "編輯審查" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
  ],
  [
    { en: "Publishing agreement", "zh-Hant": "出版協議" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
  ],
  [
    { en: "Rights-document review", "zh-Hant": "版權文件審查" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
  ],
  [
    { en: "Proofreading", "zh-Hant": "校對" },
    { en: "Author supplies final text", "zh-Hant": "作者提供最終文本" },
    { en: "Basic proofreading", "zh-Hant": "基礎校對" },
    { en: "Extended or project-specific", "zh-Hant": "延伸或依專案而定" },
  ],
  [
    { en: "Interior typesetting", "zh-Hant": "內文排版" },
    { en: "Author supplies final file", "zh-Hant": "作者提供最終檔案" },
    { en: "Standard typesetting", "zh-Hant": "標準排版" },
    { en: "Advanced typesetting", "zh-Hant": "進階排版" },
  ],
  [
    { en: "Cover design", "zh-Hant": "封面設計" },
    { en: "Author supplies final cover", "zh-Hant": "作者提供最終封面" },
    { en: "Standard cover design", "zh-Hant": "標準封面設計" },
    { en: "Customized cover design", "zh-Hant": "客製化封面設計" },
  ],
  [
    { en: "Copyright page", "zh-Hant": "版權頁" },
    { en: "Format review", "zh-Hant": "格式審查" },
    { en: "Preparation included", "zh-Hant": "包含準備服務" },
    { en: "Preparation included", "zh-Hant": "包含準備服務" },
  ],
  [
    { en: "ISBN", "zh-Hant": "ISBN" },
    { en: "One approved format", "zh-Hant": "一個核准格式" },
    { en: "One approved format", "zh-Hant": "一個核准格式" },
    { en: "One approved format", "zh-Hant": "一個核准格式" },
  ],
  [
    { en: "ISBN barcode", "zh-Hant": "ISBN 條碼" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
  ],
  [
    { en: "Publisher metadata", "zh-Hant": "出版者元數據" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Enhanced", "zh-Hant": "強化版" },
  ],
  [
    { en: "Official book webpage", "zh-Hant": "官方圖書網頁" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
  ],
  [
    { en: "Digital archiving", "zh-Hant": "數位典藏" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
    { en: "Included", "zh-Hant": "包含" },
  ],
  [
    { en: "Correction rounds", "zh-Hant": "校訂輪次" },
    { en: "Not included", "zh-Hant": "不包含" },
    { en: "One consolidated round", "zh-Hant": "一輪整合式校訂" },
    { en: "Up to two consolidated rounds", "zh-Hant": "最多兩輪整合式校訂" },
  ],
  [
    { en: "Printing and shipping", "zh-Hant": "印刷與運送" },
    { en: "Not included", "zh-Hant": "不包含" },
    { en: "Not included", "zh-Hant": "不包含" },
    { en: "Not included", "zh-Hant": "不包含" },
  ],
  [
    { en: "Statutory deposit copies", "zh-Hant": "法定送存本" },
    { en: "Not included", "zh-Hant": "不包含" },
    { en: "Not included", "zh-Hant": "不包含" },
    { en: "Not included", "zh-Hant": "不包含" },
  ],
];

const additionalFormatServices: [Bi, Bi][] = [
  [
    { en: "Additional ISBN, metadata, copyright-page and record setup for another approved product format", "zh-Hant": "為另一核准產品格式提供額外 ISBN、元數據、版權頁及紀錄建置" },
    { en: "USD 999", "zh-Hant": "USD 999" },
  ],
  [{ en: "EPUB preparation", "zh-Hant": "EPUB 製作" }, { en: "From USD 299", "zh-Hant": "USD 299起" }],
  [{ en: "Reflowable eBook conversion", "zh-Hant": "可重排電子書轉換" }, { en: "From USD 299", "zh-Hant": "USD 299起" }],
  [{ en: "Revised edition processing", "zh-Hant": "修訂版處理" }, { en: "From USD 499", "zh-Hant": "USD 499起" }],
  [{ en: "Translated edition processing", "zh-Hant": "翻譯版處理" }, { en: "Quotation-based", "zh-Hant": "另行報價" }],
];

const institutionalRows: [Bi, Bi, Bi][] = [
  [
    { en: "Institutional Publication", "zh-Hant": "機構出版" },
    { en: "Publication planning, metadata preparation, editorial coordination, official webpage, digital archiving", "zh-Hant": "出版規劃、元數據準備、編輯協調、官方網頁、數位典藏" },
    { en: "Quotation-based", "zh-Hant": "另行報價" },
  ],
  [
    { en: "Book Series", "zh-Hant": "書系" },
    { en: "Series setup, series identity, manuscript structure, metadata planning, publication workflow", "zh-Hant": "書系建置、書系識別、稿件架構、元數據規劃、出版流程" },
    { en: "Quotation-based", "zh-Hant": "另行報價" },
  ],
  [
    { en: "Conference Proceedings", "zh-Hant": "會議論文集" },
    { en: "Proceedings structure, chapter formatting, contributor coordination, official publication page", "zh-Hant": "論文集架構、章節格式、撰稿人協調、官方出版頁面" },
    { en: "Quotation-based", "zh-Hant": "另行報價" },
  ],
  [
    { en: "Large Edited Volume", "zh-Hant": "大型編著文集" },
    { en: "Multi-author coordination, chapter standardization, extended layout work, metadata preparation", "zh-Hant": "多作者協調、章節格式統一、延伸排版工作、元數據準備" },
    { en: "Quotation-based", "zh-Hant": "另行報價" },
  ],
];

const optionalServices: [Bi, Bi][] = [
  [{ en: "Additional proofreading beyond package scope", "zh-Hant": "超出方案範圍之額外校對" }, { en: "From USD 8 per 1,000 words", "zh-Hant": "每1,000字起USD 8" }],
  [{ en: "Academic language editing", "zh-Hant": "學術語言潤飾" }, { en: "Quotation-based", "zh-Hant": "另行報價" }],
  [{ en: "Substantive or developmental editing", "zh-Hant": "實質性或發展性編輯" }, { en: "Quotation-based", "zh-Hant": "另行報價" }],
  [{ en: "Translation", "zh-Hant": "翻譯" }, { en: "Quotation-based", "zh-Hant": "另行報價" }],
  [{ en: "Complex tables, figures, formulas, or specialist typesetting", "zh-Hant": "複雜圖表、公式或專業排版" }, { en: "From USD 250", "zh-Hant": "USD 250起" }],
  [{ en: "Image restoration, figure redrawing, or extensive image processing", "zh-Hant": "圖像修復、圖形重繪或大量影像處理" }, { en: "From USD 150", "zh-Hant": "USD 150起" }],
  [{ en: "Customized cover redesign after approval", "zh-Hant": "核准後之客製化封面重新設計" }, { en: "From USD 150", "zh-Hant": "USD 150起" }],
  [{ en: "Name or subject index preparation", "zh-Hant": "人名或主題索引製作" }, { en: "From USD 250", "zh-Hant": "USD 250起" }],
  [{ en: "Additional consolidated author-correction round", "zh-Hant": "額外整合式作者校訂輪次" }, { en: "USD 150 - 300 per round", "zh-Hant": "每輪 USD 150 - 300" }],
  [{ en: "Priority production service", "zh-Hant": "優先製作服務" }, { en: "Additional 25% of the applicable package fee", "zh-Hant": "另加相應方案費用之25%" }],
  [{ en: "Book DOI, where available and appropriate", "zh-Hant": "圖書 DOI（如適用及可提供）" }, { en: "From USD 100", "zh-Hant": "USD 100起" }],
  [{ en: "Specialist legal, copyright, or permissions review", "zh-Hant": "專業法律、版權或授權審查" }, { en: "Quotation-based", "zh-Hant": "另行報價" }],
];

const distributionRows: [Bi, Bi][] = [
  [{ en: "Official book webpage", "zh-Hant": "官方圖書網頁" }, { en: "Included", "zh-Hant": "包含" }],
  [{ en: "Direct-order inquiry setup", "zh-Hant": "直接訂購洽詢建置" }, { en: "Included", "zh-Hant": "包含" }],
  [{ en: "Amazon or print-on-demand setup assistance", "zh-Hant": "Amazon 或隨需印刷建置協助" }, { en: "From USD 200", "zh-Hant": "USD 200起" }],
  [{ en: "Google Play Books setup assistance", "zh-Hant": "Google Play Books 建置協助" }, { en: "From USD 150", "zh-Hant": "USD 150起" }],
  [{ en: "IngramSpark setup assistance", "zh-Hant": "IngramSpark 建置協助" }, { en: "From USD 350", "zh-Hant": "USD 350起" }],
  [{ en: "European book-trade metadata support", "zh-Hant": "歐洲圖書貿易元數據支援" }, { en: "Third-party cost plus service fee", "zh-Hant": "第三方費用另加服務費" }],
  [{ en: "Full distribution setup", "zh-Hant": "完整發行建置" }, { en: "From USD 650", "zh-Hant": "USD 650起" }],
  [{ en: "Annual distribution maintenance", "zh-Hant": "年度發行維護" }, { en: "From USD 150 per title", "zh-Hant": "每書名 USD 150起" }],
];

const paymentRows: [Bi, Bi][] = [
  [
    { en: "Package A — Author-Prepared Publication", "zh-Hant": "方案 A — 作者自備稿件出版" },
    {
      en: "100% payment is required after formal acceptance and before final publication processing begins.",
      "zh-Hant": "須於正式接受後、最終出版處理開始前繳付全額款項。",
    },
  ],
  [
    { en: "Packages B and C", "zh-Hant": "方案 B 及 C" },
    {
      en: "50% deposit is required before production begins. The remaining 50% is payable before final file release and publication.",
      "zh-Hant": "須於製作開始前繳付50%訂金，餘額50%須於最終檔案發布及出版前繳付。",
    },
  ],
  [
    { en: "Institutional and large projects", "zh-Hant": "機構及大型專案" },
    {
      en: "A staged payment schedule may be specified in the project quotation and publishing agreement.",
      "zh-Hant": "分階段付款時程可能於專案報價及出版協議中另行載明。",
    },
  ],
];

const isbnRequirements: Bi[] = [
  { en: "Submitted to Panorama Scholarly Books", "zh-Hant": "已提交予 Panorama Scholarly Books" },
  { en: "Reviewed and formally accepted", "zh-Hant": "已審查並正式接受" },
  { en: "Covered by a signed publishing agreement", "zh-Hant": "已簽署出版協議" },
  { en: "Approved for publication under the Panorama Scholarly Books imprint", "zh-Hant": "已核准以 Panorama Scholarly Books 品牌出版" },
  { en: "Supported by complete authorship, rights, and bibliographic information", "zh-Hant": "備有完整著作權、版權及書目資訊" },
  { en: "Prepared for a genuine and identifiable edition and product format", "zh-Hant": "已準備供真實且可辨識之版次及產品格式使用" },
];

const isbnNotConstitute: Bi[] = [
  { en: "Copyright registration", "zh-Hant": "版權登記" },
  { en: "Government approval of the content", "zh-Hant": "政府對內容之核准" },
  { en: "Academic accreditation or degree recognition", "zh-Hant": "學術認證或學位認可" },
  { en: "Indexing or peer-review certification", "zh-Hant": "索引收錄或同行評審認證" },
  { en: "Commercial distribution", "zh-Hant": "商業發行" },
  { en: "A guarantee of sales or citations", "zh-Hant": "銷售或引用之保證" },
];

const printingNotIncluded: Bi[] = [
  { en: "Finished book size and page count", "zh-Hant": "成書尺寸及頁數" },
  { en: "Black-and-white or colour printing", "zh-Hant": "黑白或彩色印刷" },
  { en: "Paper specification and binding type", "zh-Hant": "紙張規格及裝訂方式" },
  { en: "Cover finish and number of copies", "zh-Hant": "封面工藝及印製冊數" },
  { en: "Proof-copy requirements", "zh-Hant": "打樣需求" },
  { en: "Delivery destination and shipping method", "zh-Hant": "送達地點及運送方式" },
];

const cancellationPoints: Bi[] = [
  {
    en: "Once editorial administration, rights review, metadata preparation, production, design, typesetting, or proofreading has begun, the completed portion of the work is non-refundable.",
    "zh-Hant": "一旦開始編輯行政、版權審查、元數據準備、製作、設計、排版或校對，已完成部分之費用概不退還。",
  },
  {
    en: "Fees are normally non-refundable after an ISBN has been assigned or reserved for the accepted publication.",
    "zh-Hant": "已為獲接受出版物分配或預留 ISBN 後，費用一般概不退還。",
  },
  {
    en: "Fees are non-refundable after final files have been released or publication has been completed.",
    "zh-Hant": "最終檔案發布或出版完成後，費用概不退還。",
  },
  {
    en: "Author-requested cancellation does not create an entitlement to a refund of work already completed.",
    "zh-Hant": "作者要求取消，並不代表可就已完成之工作獲得退款。",
  },
  {
    en: "Where the publisher terminates a project because of plagiarism, rights infringement, undisclosed authorship disputes, unlawful content, false information, ethical violations, or breach of agreement, completed work and incurred costs remain payable.",
    "zh-Hant": "如出版者因抄襲、侵犯版權、未披露之著作權爭議、違法內容、虛假資訊、違反倫理或違反協議而終止專案，已完成之工作及已產生之費用仍須支付。",
  },
];

const declinePoints: Bi[] = [
  { en: "Falls outside the publisher's scope", "zh-Hant": "超出出版者出版範疇" },
  { en: "Does not meet academic or production standards", "zh-Hant": "未達學術或製作標準" },
  { en: "Contains plagiarism or duplicate publication", "zh-Hant": "含有抄襲或重複出版之情形" },
  { en: "Contains unresolved authorship or copyright disputes", "zh-Hant": "存在未解決之著作權歸屬或版權爭議" },
  { en: "Uses third-party material without permission", "zh-Hant": "未經授權使用第三方材料" },
  { en: "Contains unlawful, defamatory, deceptive, or materially misleading content", "zh-Hant": "含有違法、誹謗、欺詐或重大誤導性內容" },
  { en: "Provides false author, affiliation, funding, or publication information", "zh-Hant": "提供虛假之作者、所屬機構、資助或出版資訊" },
  { en: "Cannot be brought to publication standard within the agreed scope", "zh-Hant": "無法在協議範圍內達到出版標準" },
  { en: "Creates an unacceptable legal, ethical, reputational, or operational risk", "zh-Hant": "造成不可接受之法律、倫理、聲譽或營運風險" },
];

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto border border-[#e2e2e2]">
      <table className="w-full border-collapse min-w-[640px]">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="bg-[#111111] text-white text-left px-5 py-4 font-serif text-sm font-normal">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top last-of-type:border-b-0">
      {children}
    </td>
  );
}

const copy = {
  en: {
    eyebrow: "Publishing Services",
    heading: "Book Publishing Services and Fees",
    intro1: "Panorama Scholarly Books provides academic book publishing and production services for scholarly monographs, edited volumes, academic textbooks, research reports, conference proceedings, institutional publications, and interdisciplinary research books.",
    intro2: "All manuscripts and proposals are subject to editorial screening. Payment of a publishing fee does not create an automatic right to publication. A project proceeds only after formal editorial acceptance and execution of a publishing agreement. The following fees are effective from 1 August 2026.",
    packagesHeading: "Publishing Packages",
    packagesIntro: "Each package covers one title, one edition, and one product format. Printing, shipping, statutory deposit copies, and third-party platform charges are not included unless separately agreed in writing.",
    recommended: "Recommended",
    notIncluded: "Not Included",
    inquireAbout: "Inquire about",
    standardScopeLabel: "Standard scope:",
    standardScopeBody: "Package B generally applies to a manuscript of up to 60,000 words or approximately 200 finished pages, in one principal language, with standard academic formatting, references, and a normal number of tables and figures. Longer or more complex manuscripts require Package C or a separate quotation. Publication-ready files submitted under Package A must meet the publisher's technical and ethical standards; files requiring substantial correction or reconstruction may be transferred to Package B or C, or quoted separately.",
    comparisonHeading: "Package Comparison",
    serviceItem: "Service Item",
    additionalFormatsHeading: "Additional Editions and Product Formats",
    additionalFormatsIntro: "Each package covers one title, one edition, and one product format. Paperback, hardback, PDF, EPUB, Kindle-compatible editions, revised editions, translated editions, and other separately distributed versions may require separate ISBNs, separate metadata, and additional production work. An additional ISBN will not be assigned unless the additional edition or format has been formally approved and is intended for genuine publication.",
    additionalService: "Additional Service",
    fee: "Fee",
    institutionalHeading: "Institutional, Series, and Proceedings Publishing",
    institutionalIntro: "Institutional publications, book series, conference proceedings, annual reports, multi-volume works, large edited collections, and sponsored open-access books are quoted separately according to project size, manuscript complexity, number of contributors, languages, production requirements, publication formats, distribution requirements, and expected administrative workload.",
    projectType: "Project Type",
    typicalServices: "Typical Services",
    optionalHeading: "Optional Additional Services",
    optionalIntro: "These services are not included in the standard packages unless expressly stated. All additional services require written approval before work begins.",
    isbnHeading: "ISBN and Publisher-of-Record Policy",
    isbnIntro: "ISBNs are assigned only to publications that have been:",
    isbnBody1: "ISBNs are not sold, transferred, leased, licensed as standalone numbers, or supplied for use by another publisher. The publisher name displayed in the book must correspond with the publisher information recorded for the ISBN.",
    isbnBody2: "Publishing fees are not government ISBN application fees. They are fees for publisher services, editorial assessment, project administration, rights review, bibliographic metadata, ISBN assignment, production processing, official publication records, digital archiving, and post-publication compliance coordination.",
    isbnNotConstituteIntro: "Assignment of an ISBN does not constitute:",
    distributionHeading: "Sales and Distribution Setup",
    distributionIntro: "Standard publishing fees do not include commercial distribution. Optional distribution services may be available for eligible titles, subject to the rules, approval processes, territorial limitations, technical requirements, and fees of the relevant platform.",
    distributionService: "Distribution Service",
    importantNoticeLabel: "Important notice:",
    importantNoticeBody: "Publishing or distribution fees do not guarantee book sales, bookstore placement, library acquisition, platform approval, indexing, ranking, reviews, citations, academic promotion, institutional recognition, or commercial performance.",
    printingHeading: "Printing, Binding, Deposit Copies, and Shipping",
    printingNotIncludedHeading: "Not Included in Publishing Fees",
    printingIntro: "Where printed copies are requested, costs are calculated according to:",
    pricingPrincipleHeading: "Pricing Principle and Statutory Deposit",
    pricingFormula: "Printing cost + binding cost + shipping cost + handling fee",
    depositBody: "Where Hong Kong book-registration requirements apply, the author or commissioning institution must fund and arrange the required statutory deposit copies, binding, packaging, delivery, and handling. Deposit copies are not returnable. No physical publication project is treated as administratively complete until the required deposit or registration arrangements have been confirmed.",
    paymentHeading: "Payment Terms",
    item: "Item",
    policy: "Policy",
    paymentFootnote: "All prices are stated in United States dollars unless otherwise specified. Bank, payment-gateway, currency-conversion, intermediary-bank, tax, printing, shipping, and third-party platform charges are not included unless expressly stated. Additional services are invoiced separately where applicable.",
    cancellationHeading: "Cancellation and Refund Principles",
    cancellationIntro: "Fees reflect editorial, administrative, metadata, production, design, archiving, and publisher work already performed. Fees paid before work begins may be refundable subject to documented administrative costs.",
    cancellationFootnote: "Detailed cancellation and refund provisions are governed by the signed publishing agreement.",
    declineHeading: "Review and Publisher's Right to Decline",
    declineIntro: "All proposals and manuscripts are subject to editorial, ethical, legal, and technical review. Panorama Scholarly Books may decline or discontinue a project that:",
    declineFootnote: "Payment does not override the publisher's editorial independence or publication standards. The publishing fee does not represent or guarantee sales outcomes, bookstore listing, library purchase, indexing, ranking, citations, academic promotion, degree recognition, institutional approval, or commercial revenue.",
    ctaHeading: "Request a Publishing Assessment",
    ctaBody: "Authors, editors, and institutions may contact Panorama Scholarly Books to discuss manuscript suitability, production requirements, publication timeline, and available publishing packages. Submission of an inquiry does not constitute acceptance or create a publishing agreement.",
    ctaContact: "Contact Us",
  },
  "zh-Hant": {
    eyebrow: "出版服務",
    heading: "圖書出版服務與費用",
    intro1: "Panorama Scholarly Books 為學術專著、編著文集、學術教材、研究報告、會議論文集、機構出版物及跨學科研究專書提供學術圖書出版與製作服務。",
    intro2: "所有提案及書稿均須經編輯審查。繳付出版費用並不代表自動獲得出版權利。專案僅於正式編輯接受並簽署出版協議後方可進行。以下費用自2026年8月1日起生效。",
    packagesHeading: "出版方案",
    packagesIntro: "各方案均涵蓋一個書名、一個版次及一種產品格式。除非另有書面協議，否則印刷、運送、法定送存本及第三方平台費用均不包含在內。",
    recommended: "推薦方案",
    notIncluded: "不包含項目",
    inquireAbout: "洽詢",
    standardScopeLabel: "標準範圍：",
    standardScopeBody: "方案 B 一般適用於單一主要語言、字數不超過60,000字或約200頁完稿、採標準學術格式、含參考文獻及一般數量圖表之書稿。篇幅較長或較複雜之書稿須採用方案 C 或另行報價。以方案 A 提交之出版用檔案須符合出版者之技術及倫理標準；需大幅修正或重建之檔案，可能轉為方案 B 或 C 處理，或另行報價。",
    comparisonHeading: "方案比較",
    serviceItem: "服務項目",
    additionalFormatsHeading: "額外版次與產品格式",
    additionalFormatsIntro: "各方案均涵蓋一個書名、一個版次及一種產品格式。平裝本、精裝本、PDF、EPUB、Kindle 相容版、修訂版、翻譯版及其他另行發行之版本，可能需要額外 ISBN、額外元數據及額外製作工作。除非額外版次或格式已正式核准並確為真實出版用途，否則不會分配額外 ISBN。",
    additionalService: "額外服務",
    fee: "費用",
    institutionalHeading: "機構、書系與論文集出版",
    institutionalIntro: "機構出版物、書系、會議論文集、年度報告、多卷本著作、大型編著文集及贊助之開放獲取圖書，將依專案規模、書稿複雜度、撰稿人數、語言、製作需求、出版格式、發行需求及預期行政工作量另行報價。",
    projectType: "專案類型",
    typicalServices: "一般服務內容",
    optionalHeading: "選用附加服務",
    optionalIntro: "除非另有明確說明，否則以下服務不包含於標準方案內。所有附加服務均須於開始工作前取得書面核准。",
    isbnHeading: "ISBN 與出版者登記政策",
    isbnIntro: "ISBN 僅分配予符合以下條件之出版物：",
    isbnBody1: "ISBN 不作出售、轉讓、租借、以單獨編號授權，亦不供其他出版者使用。書中顯示之出版者名稱須與該 ISBN 登記之出版者資訊相符。",
    isbnBody2: "出版費用並非政府 ISBN 申請費，而是出版者服務費，涵蓋編輯評估、專案管理、版權審查、書目元數據、ISBN 分配、製作處理、正式出版紀錄、數位典藏及出版後合規協調。",
    isbnNotConstituteIntro: "分配 ISBN 並不代表：",
    distributionHeading: "銷售與發行建置",
    distributionIntro: "標準出版費用不包含商業發行。符合資格之書目可選用發行服務，惟須遵循相關平台之規則、核准流程、地域限制、技術要求及費用。",
    distributionService: "發行服務",
    importantNoticeLabel: "重要須知：",
    importantNoticeBody: "出版或發行費用並不保證圖書銷售、書店上架、圖書館採購、平台核准、索引收錄、排名、書評、引用次數、學術推廣、機構認可或商業表現。",
    printingHeading: "印刷、裝訂、送存本與運送",
    printingNotIncludedHeading: "出版費用不包含項目",
    printingIntro: "如需印刷樣書，費用將依以下項目計算：",
    pricingPrincipleHeading: "定價原則與法定送存",
    pricingFormula: "印刷成本 + 裝訂成本 + 運送成本 + 處理費",
    depositBody: "凡適用香港圖書登記要求者，所需之法定送存本、裝訂、包裝、送遞及處理，須由作者或委託機構自行出資安排。送存本概不退還。任何實體出版專案，須待完成所需送存或登記安排後，方視為行政上完成。",
    paymentHeading: "付款條款",
    item: "項目",
    policy: "政策",
    paymentFootnote: "除另有說明外，所有價格均以美元列示。銀行、支付閘道、貨幣兌換、中介銀行、稅項、印刷、運送及第三方平台費用，除非另有明確說明，否則不包含在內。適用之附加服務將另行開立發票。",
    cancellationHeading: "取消與退款原則",
    cancellationIntro: "費用反映已進行之編輯、行政、元數據、製作、設計、典藏及出版者工作。於工作開始前繳付之費用，可能依已記錄之行政成本予以退還。",
    cancellationFootnote: "詳細取消與退款條款以簽署之出版協議為準。",
    declineHeading: "審查與出版者拒絕之權利",
    declineIntro: "所有提案及書稿均須經編輯、倫理、法律及技術審查。Panorama Scholarly Books 得拒絕或終止具有以下情形之專案：",
    declineFootnote: "付款並不凌駕出版者之編輯獨立性或出版標準。出版費用並不代表或保證銷售成果、書店上架、圖書館採購、索引收錄、排名、引用次數、學術推廣、學位認可、機構核准或商業收益。",
    ctaHeading: "申請出版評估",
    ctaBody: "作者、編者及機構可聯絡 Panorama Scholarly Books，洽詢書稿適合度、製作需求、出版時程及可選用之出版方案。提交查詢並不構成接受或建立出版協議。",
    ctaContact: "聯絡我們",
  },
} as const;

export default function PublishingServicesPageClient() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const L = (b: Bi) => b[locale as Locale];

  return (
    <>
      <AnnouncementBanner />
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            {t.heading}
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[70ch] leading-relaxed mb-4">
            {t.intro1}
          </p>
          <p className="font-serif text-sm text-[#888888] max-w-[70ch] leading-relaxed">
            {t.intro2}
          </p>
        </Container>
      </section>

      <Container>
        <div className="py-12 lg:py-16">

          {/* Packages */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.packagesHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-8 max-w-[70ch]">
              {t.packagesIntro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2e2e2]">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white p-8 flex flex-col ${
                    pkg.featured ? "ring-1 ring-inset ring-[#111111]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-xs tracking-[0.18em] uppercase text-[#888888]">
                      {L(pkg.label)}
                    </span>
                    {pkg.featured && (
                      <span className="font-serif text-[10px] tracking-[0.12em] uppercase border border-[#111111] bg-[#111111] text-white px-2 py-0.5">
                        {t.recommended}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl text-[#111111] font-medium mb-3 leading-snug">
                    {L(pkg.name)}
                  </h3>

                  <div className="border-t border-b border-[#e2e2e2] py-4 mb-4">
                    <p className="font-serif text-2xl text-[#111111] font-medium">
                      {pkg.price}
                    </p>
                    <p className="text-xs font-normal text-[#888888] mt-1">{L(pkg.unit)}</p>
                  </div>

                  <p className="font-serif text-sm text-[#888888] leading-relaxed mb-6">
                    {L(pkg.desc)}
                  </p>

                  <ul className="flex flex-col gap-2 mb-6">
                    {pkg.includes.map((item) => (
                      <li
                        key={item.en}
                        className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f7f7f7] pb-2 last:border-0"
                      >
                        <span className="text-[#c8c8c8] shrink-0">-</span>
                        {L(item)}
                      </li>
                    ))}
                  </ul>

                  <div className="mb-8 flex-1">
                    <p className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888] mb-2">
                      {t.notIncluded}
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {pkg.notIncluded.map((item) => (
                        <li key={item.en} className="font-serif text-xs text-[#888888] flex gap-2">
                          <span className="shrink-0">-</span>
                          {L(item)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:books@panorama-sg.com?subject=Publishing Inquiry: ${pkg.name.en}`}
                    className="font-serif text-[11px] tracking-[0.1em] uppercase border border-[#111111] px-4 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center"
                  >
                    {t.inquireAbout} {L(pkg.label)}
                  </a>
                </div>
              ))}
            </div>

            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                <strong className="text-[#111111] font-medium">{t.standardScopeLabel}</strong> {t.standardScopeBody}
              </p>
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.comparisonHeading}
            </h2>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.serviceItem}</Th>
                  <Th>Package A / USD 999</Th>
                  <Th>Package B / USD 1,799</Th>
                  <Th>Package C / From USD 2,499</Th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, ...vals]) => (
                  <tr key={label.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top">
                      {L(label)}
                    </td>
                    {vals.map((v, i) => (
                      <Td key={i}>{L(v)}</Td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* Additional editions and product formats */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.additionalFormatsHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              {t.additionalFormatsIntro}
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.additionalService}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {additionalFormatServices.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td>
                      <span className="text-[#111111]">{L(service)}</span>
                    </Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">
                      {L(fee)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* Institutional / Series / Proceedings */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.institutionalHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              {t.institutionalIntro}
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.projectType}</Th>
                  <Th>{t.typicalServices}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {institutionalRows.map(([type, services, fee]) => (
                  <tr key={type.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {L(type)}
                    </td>
                    <Td>{L(services)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">
                      {L(fee)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* Optional additional services */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.optionalHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              {t.optionalIntro}
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.additionalService}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {optionalServices.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td>
                      <span className="text-[#111111]">{L(service)}</span>
                    </Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">
                      {L(fee)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* ISBN and Publisher-of-Record Policy */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.isbnHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-4 max-w-[70ch]">
              {t.isbnIntro}
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {isbnRequirements.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mb-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
                {t.isbnBody1}
              </p>
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                {t.isbnBody2}
              </p>
            </div>
            <p className="font-serif text-sm text-[#888888] leading-relaxed max-w-[70ch] mb-2">
              {t.isbnNotConstituteIntro}
            </p>
            <ul className="flex flex-col gap-1.5">
              {isbnNotConstitute.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#888888] flex gap-3">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* Sales and distribution setup */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.distributionHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              {t.distributionIntro}
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.distributionService}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {distributionRows.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td>
                      <span className="text-[#111111]">{L(service)}</span>
                    </Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top">
                      {L(fee)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                <strong className="text-[#111111] font-medium">{t.importantNoticeLabel}</strong> {t.importantNoticeBody}
              </p>
            </div>
          </section>

          {/* Printing, binding, deposit copies and shipping */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.printingHeading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e2e2]">
              <div className="bg-white p-8">
                <h3 className="font-serif text-base text-[#111111] font-medium mb-3">
                  {t.printingNotIncludedHeading}
                </h3>
                <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                  {t.printingIntro}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {printingNotIncluded.map((item) => (
                    <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3">
                      <span className="text-[#c8c8c8] shrink-0">-</span>
                      {L(item)}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-serif text-base text-[#111111] font-medium mb-3">
                  {t.pricingPrincipleHeading}
                </h3>
                <div className="border border-[#e2e2e2] p-4 mb-4">
                  <p className="font-serif text-sm text-[#111111] text-center">
                    {t.pricingFormula}
                  </p>
                </div>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
                  {t.depositBody}
                </p>
              </div>
            </div>
          </section>

          {/* Payment and refund */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.paymentHeading}
            </h2>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.item}</Th>
                  <Th>{t.policy}</Th>
                </tr>
              </thead>
              <tbody>
                {paymentRows.map(([item, policy]) => (
                  <tr key={item.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {L(item)}
                    </td>
                    <Td>{L(policy)}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-4 max-w-[70ch]">
              {t.paymentFootnote}
            </p>
          </section>

          {/* Cancellation and refund */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-4">
              {t.cancellationHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-5 leading-relaxed max-w-[70ch]">
              {t.cancellationIntro}
            </p>
            <ul className="flex flex-col gap-2 mb-5">
              {cancellationPoints.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
            <p className="font-serif text-xs text-[#888888] leading-relaxed">
              {t.cancellationFootnote}
            </p>
          </section>

          {/* Manuscript review notice */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-4">
              {t.declineHeading}
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-5 leading-relaxed max-w-[70ch]">
              {t.declineIntro}
            </p>
            <ul className="flex flex-col gap-2 mb-5">
              {declinePoints.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                {t.declineFootnote}
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="border border-[#e2e2e2] bg-[#111111] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl text-white font-medium mb-3">
                {t.ctaHeading}
              </h2>
              <p className="font-serif text-sm text-white/70 leading-relaxed max-w-[60ch]">
                {t.ctaBody}
              </p>
            </div>
            <a
              href="mailto:books@panorama-sg.com?subject=Publishing Quote Request"
              className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-white px-8 py-3 text-white hover:bg-white hover:text-[#111111] transition-colors text-center"
            >
              {t.ctaContact}
            </a>
          </div>

        </div>
      </Container>
    </>
  );
}
