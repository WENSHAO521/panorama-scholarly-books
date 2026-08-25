"use client";

import Container from "@/components/Container";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import type { Locale } from "@/lib/locale";

type Bi = { en: string; "zh-Hant": string; "zh-Hans": string };

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
    label: { en: "Package A", "zh-Hant": "方案 A", "zh-Hans": "方案 A" },
    name: { en: "Author-Prepared Publication", "zh-Hant": "作者自備稿件出版", "zh-Hans": "作者自备稿件出版" },
    price: "USD 999",
    unit: { en: "per title, edition, and product format", "zh-Hant": "每一書名、版次及產品格式", "zh-Hans": "每个书名、版次及产品格式" },
    desc: {
      en: "For authors who provide a final, fully proofread manuscript, a final typeset interior file, and a publication-ready cover.",
      "zh-Hant": "適合已備妥最終完整校對稿件、最終排版內文檔案及出版用封面的作者。",
      "zh-Hans": "适合已备妥最终完整校对稿件、最终排版内文文件及出版用封面的作者。",
    },
    includes: [
      { en: "Initial editorial and publication eligibility screening", "zh-Hant": "初步編輯與出版資格審查", "zh-Hans": "初步编辑与出版资格审查" },
      { en: "Publishing agreement preparation", "zh-Hant": "出版協議準備", "zh-Hans": "出版协议准备" },
      { en: "Authorship and rights documentation review", "zh-Hant": "著作權與授權文件審查", "zh-Hans": "著作权与授权文件审查" },
      { en: "Final interior and cover file inspection", "zh-Hant": "最終內文及封面檔案檢查", "zh-Hans": "最终内文及封面文件检查" },
      { en: "Copyright-page format review", "zh-Hant": "版權頁格式審查", "zh-Hans": "版权页格式审查" },
      { en: "One ISBN for one accepted edition and product format", "zh-Hant": "為一個核准版次及格式提供一組 ISBN", "zh-Hans": "为一个核准版次及格式提供一个 ISBN" },
      { en: "ISBN barcode preparation", "zh-Hant": "ISBN 條碼製作", "zh-Hans": "ISBN 条码制作" },
      { en: "Publisher metadata and bibliographic record preparation", "zh-Hant": "出版者元數據與書目紀錄準備", "zh-Hans": "出版者元数据与书目记录准备" },
      { en: "Official book webpage", "zh-Hant": "官方圖書網頁", "zh-Hans": "官方图书网页" },
      { en: "Digital archiving and publication-record management", "zh-Hant": "數位典藏與出版紀錄管理", "zh-Hans": "数字化存档与出版记录管理" },
      { en: "Post-publication registration and compliance coordination", "zh-Hant": "出版後登記與合規協調", "zh-Hans": "出版后登记与合规协调" },
    ],
    notIncluded: [
      { en: "Proofreading, typesetting, or cover design", "zh-Hant": "校對、排版或封面設計", "zh-Hans": "校对、排版或封面设计" },
      { en: "Printing, shipping, or statutory deposit copies", "zh-Hant": "印刷、運送或法定送存本", "zh-Hans": "印刷、运送或法定送存本" },
      { en: "Substantive manuscript revision", "zh-Hant": "實質性書稿修訂", "zh-Hans": "实质性书稿修订" },
    ],
    featured: false,
  },
  {
    id: "b",
    label: { en: "Package B", "zh-Hant": "方案 B", "zh-Hans": "方案 B" },
    name: { en: "Standard Academic Book Production", "zh-Hant": "標準學術圖書製作", "zh-Hans": "标准学术图书制作" },
    price: "USD 1,799",
    unit: { en: "per title, edition, and product format", "zh-Hant": "每一書名、版次及產品格式", "zh-Hans": "每个书名、版次及产品格式" },
    desc: {
      en: "For standard academic books requiring publisher-assisted proofreading, typesetting, cover design, and final production.",
      "zh-Hant": "適合需要出版社協助校對、排版、封面設計及最終製作的標準學術圖書。",
      "zh-Hans": "适合需要出版社协助校对、排版、封面设计及最终制作的标准学术图书。",
    },
    includes: [
      { en: "All editorial, administrative, metadata, ISBN, webpage, and archiving services in Package A", "zh-Hant": "涵蓋方案 A 所有編輯、管理、元數據、ISBN、網頁及典藏服務", "zh-Hans": "涵盖方案 A 所有编辑、管理、元数据、ISBN、网页及存档服务" },
      { en: "Basic proofreading", "zh-Hant": "基礎校對", "zh-Hans": "基础校对" },
      { en: "Standard academic interior typesetting", "zh-Hant": "標準學術內文排版", "zh-Hans": "标准学术内文排版" },
      { en: "Standard academic cover design", "zh-Hant": "標準學術封面設計", "zh-Hans": "标准学术封面设计" },
      { en: "Standard title page and copyright-page preparation", "zh-Hant": "標準書名頁及版權頁準備", "zh-Hans": "标准书名页及版权页准备" },
      { en: "Placement of a normal number of tables and figures", "zh-Hant": "一般數量圖表之編排", "zh-Hans": "一般数量图表的编排" },
      { en: "Print-ready PDF preparation", "zh-Hant": "印刷用 PDF 準備", "zh-Hans": "印刷用 PDF 准备" },
      { en: "Final production quality review", "zh-Hant": "最終製作品質審查", "zh-Hans": "最终制作质量审查" },
      { en: "One consolidated round of author corrections after typesetting", "zh-Hant": "排版後一輪整合式作者校訂", "zh-Hans": "排版后一轮整合式作者校订" },
    ],
    notIncluded: [
      { en: "Manuscripts exceeding 60,000 words / approx. 200 pages", "zh-Hant": "超過60,000字／約200頁之書稿", "zh-Hans": "超过60,000字/约200页的书稿" },
      { en: "Printing, shipping, or statutory deposit copies", "zh-Hant": "印刷、運送或法定送存本", "zh-Hans": "印刷、运送或法定送存本" },
    ],
    featured: true,
  },
  {
    id: "c",
    label: { en: "Package C", "zh-Hant": "方案 C", "zh-Hans": "方案 C" },
    name: { en: "Extended and Complex Book Production", "zh-Hant": "延伸與複雜圖書製作", "zh-Hans": "延伸与复杂图书制作" },
    price: "From USD 2,499",
    unit: { en: "per title, edition, and product format", "zh-Hant": "每一書名、版次及產品格式", "zh-Hans": "每个书名、版次及产品格式" },
    desc: {
      en: "For longer, bilingual, multilingual, edited, illustrated, or technically complex academic books.",
      "zh-Hant": "適合篇幅較長、雙語、多語、編著、附插圖或技術上較複雜的學術圖書。",
      "zh-Hans": "适合篇幅较长、双语、多语、编著、附插图或技术上较复杂的学术图书。",
    },
    includes: [
      { en: "All services in Package B", "zh-Hant": "涵蓋方案 B 所有服務", "zh-Hans": "涵盖方案 B 所有服务" },
      { en: "Extended proofreading and advanced academic typesetting", "zh-Hant": "延伸校對與進階學術排版", "zh-Hans": "延伸校对与进阶学术排版" },
      { en: "Complex table, figure, formula, and illustration placement", "zh-Hant": "複雜圖表、公式及插圖編排", "zh-Hans": "复杂图表、公式及插图编排" },
      { en: "Multi-author chapter standardisation", "zh-Hant": "多作者章節格式統一", "zh-Hans": "多作者章节格式统一" },
      { en: "Customized academic cover design", "zh-Hant": "客製化學術封面設計", "zh-Hans": "定制化学术封面设计" },
      { en: "Up to two consolidated rounds of author or editor corrections", "zh-Hant": "最多兩輪整合式作者或編者校訂", "zh-Hans": "最多两轮整合式作者或编者校订" },
      { en: "Enhanced bibliographic metadata", "zh-Hant": "強化書目元數據", "zh-Hans": "强化书目元数据" },
      { en: "Book description and promotional-text preparation", "zh-Hant": "內容簡介及宣傳文字準備", "zh-Hans": "内容简介及宣传文字准备" },
    ],
    notIncluded: [
      { en: "Printing, shipping, or statutory deposit copies", "zh-Hant": "印刷、運送或法定送存本", "zh-Hans": "印刷、运送或法定送存本" },
    ],
    featured: false,
  },
];

const comparisonRows: [Bi, Bi, Bi, Bi][] = [
  [{ en: "Editorial screening", "zh-Hant": "編輯審查", "zh-Hans": "编辑审查" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Publishing agreement", "zh-Hant": "出版協議", "zh-Hans": "出版协议" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Rights-document review", "zh-Hant": "版權文件審查", "zh-Hans": "版权文件审查" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Proofreading", "zh-Hant": "校對", "zh-Hans": "校对" }, { en: "Author supplies final text", "zh-Hant": "作者提供最終文本", "zh-Hans": "作者提供最终文本" }, { en: "Basic proofreading", "zh-Hant": "基礎校對", "zh-Hans": "基础校对" }, { en: "Extended or project-specific", "zh-Hant": "延伸或依專案而定", "zh-Hans": "延伸或依项目而定" }],
  [{ en: "Interior typesetting", "zh-Hant": "內文排版", "zh-Hans": "内文排版" }, { en: "Author supplies final file", "zh-Hant": "作者提供最終檔案", "zh-Hans": "作者提供最终文件" }, { en: "Standard typesetting", "zh-Hant": "標準排版", "zh-Hans": "标准排版" }, { en: "Advanced typesetting", "zh-Hant": "進階排版", "zh-Hans": "进阶排版" }],
  [{ en: "Cover design", "zh-Hant": "封面設計", "zh-Hans": "封面设计" }, { en: "Author supplies final cover", "zh-Hant": "作者提供最終封面", "zh-Hans": "作者提供最终封面" }, { en: "Standard cover design", "zh-Hant": "標準封面設計", "zh-Hans": "标准封面设计" }, { en: "Customized cover design", "zh-Hant": "客製化封面設計", "zh-Hans": "定制化封面设计" }],
  [{ en: "Copyright page", "zh-Hant": "版權頁", "zh-Hans": "版权页" }, { en: "Format review", "zh-Hant": "格式審查", "zh-Hans": "格式审查" }, { en: "Preparation included", "zh-Hant": "包含準備服務", "zh-Hans": "包含准备服务" }, { en: "Preparation included", "zh-Hant": "包含準備服務", "zh-Hans": "包含准备服务" }],
  [{ en: "ISBN", "zh-Hant": "ISBN", "zh-Hans": "ISBN" }, { en: "One approved format", "zh-Hant": "一個核准格式", "zh-Hans": "一个核准格式" }, { en: "One approved format", "zh-Hant": "一個核准格式", "zh-Hans": "一个核准格式" }, { en: "One approved format", "zh-Hant": "一個核准格式", "zh-Hans": "一个核准格式" }],
  [{ en: "ISBN barcode", "zh-Hant": "ISBN 條碼", "zh-Hans": "ISBN 条码" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Publisher metadata", "zh-Hant": "出版者元數據", "zh-Hans": "出版者元数据" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Enhanced", "zh-Hant": "強化版", "zh-Hans": "强化版" }],
  [{ en: "Official book webpage", "zh-Hant": "官方圖書網頁", "zh-Hans": "官方图书网页" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Digital archiving", "zh-Hant": "數位典藏", "zh-Hans": "数字化存档" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Correction rounds", "zh-Hant": "校訂輪次", "zh-Hans": "校订轮次" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }, { en: "One consolidated round", "zh-Hant": "一輪整合式校訂", "zh-Hans": "一轮整合式校订" }, { en: "Up to two consolidated rounds", "zh-Hant": "最多兩輪整合式校訂", "zh-Hans": "最多两轮整合式校订" }],
  [{ en: "Printing and shipping", "zh-Hant": "印刷與運送", "zh-Hans": "印刷与运送" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }],
  [{ en: "Statutory deposit copies", "zh-Hant": "法定送存本", "zh-Hans": "法定送存本" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }, { en: "Not included", "zh-Hant": "不包含", "zh-Hans": "不包含" }],
];

// Section 十四 — recommended print-bundle combos (also shown on the home page)
const printBundles: { name: string; includes: Bi; price: string }[] = [
  {
    name: "Essential Print Publication",
    includes: { en: "Package A + Standard Physical Publication Pack", "zh-Hant": "方案 A ＋ 標準實體出版及法定送存套餐", "zh-Hans": "方案 A ＋ 标准实体出版及法定送存套餐" },
    price: "USD 1,999",
  },
  {
    name: "Standard Academic Print Publication",
    includes: { en: "Package B + Standard Physical Publication Pack", "zh-Hant": "方案 B ＋ 標準實體出版及法定送存套餐", "zh-Hans": "方案 B ＋ 标准实体出版及法定送存套餐" },
    price: "USD 2,799",
  },
  {
    name: "Extended Academic Print Publication",
    includes: { en: "Package C + Standard Physical Publication Pack", "zh-Hant": "方案 C ＋ 標準實體出版及法定送存套餐", "zh-Hans": "方案 C ＋ 标准实体出版及法定送存套餐" },
    price: "From USD 3,499",
  },
];

// Section 二 — standard production timeline
const timelineRows: [Bi, Bi][] = [
  [{ en: "Package A", "zh-Hant": "方案 A", "zh-Hans": "方案 A" }, { en: "Approx. 15 business days", "zh-Hant": "約15個工作日", "zh-Hans": "约15个工作日" }],
  [{ en: "Package B", "zh-Hant": "方案 B", "zh-Hans": "方案 B" }, { en: "Approx. 6–8 weeks", "zh-Hant": "約6—8週", "zh-Hans": "约6—8周" }],
  [{ en: "Package C", "zh-Hant": "方案 C", "zh-Hans": "方案 C" }, { en: "Approx. 8–16 weeks, project-dependent", "zh-Hant": "約8—16週，按項目確定", "zh-Hans": "约8—16周，按项目确定" }],
];

const timelinePreconditions: Bi[] = [
  { en: "The manuscript has been formally accepted.", "zh-Hant": "稿件已經正式錄用。", "zh-Hans": "稿件已正式录用。" },
  { en: "The publishing agreement has been signed.", "zh-Hant": "出版合同已經簽署。", "zh-Hans": "出版合同已签署。" },
  { en: "The required payment has been received.", "zh-Hant": "所需款項已經到賬。", "zh-Hans": "所需款项已到账。" },
  { en: "Authorship, copyright, and permission materials are complete.", "zh-Hant": "作者身份、版權及授權材料完整。", "zh-Hans": "作者身份、版权及授权材料完整。" },
  { en: "The final manuscript, images, and attachments have been submitted.", "zh-Hant": "最終稿件、圖片及附件已經提交。", "zh-Hans": "最终稿件、图片及附件已提交。" },
  { en: "No outstanding revisions remain pending from the author.", "zh-Hant": "作者不存在尚未確認的修改事項。", "zh-Hans": "作者不存在尚未确认的修改事项。" },
];

// Section 三 — manuscript assessment priority
const assessmentTiers: [Bi, Bi, Bi][] = [
  [{ en: "Standard Assessment", "zh-Hant": "標準評估", "zh-Hans": "标准评估" }, { en: "2–4 weeks", "zh-Hant": "2—4週", "zh-Hans": "2—4周" }, { en: "No extra charge", "zh-Hant": "不另收費", "zh-Hans": "不另收费" }],
  [{ en: "Priority Assessment", "zh-Hant": "優先評估", "zh-Hans": "优先评估" }, { en: "5 business days", "zh-Hant": "5個工作日", "zh-Hans": "5个工作日" }, { en: "USD 199", "zh-Hant": "USD 199", "zh-Hans": "USD 199" }],
  [{ en: "Express Assessment", "zh-Hant": "特快評估", "zh-Hans": "特快评估" }, { en: "2 business days", "zh-Hant": "2個工作日", "zh-Hans": "2个工作日" }, { en: "USD 399", "zh-Hant": "USD 399", "zh-Hans": "USD 399" }],
];

// Section 四 — production rush per package
const rushPackageA: [Bi, Bi, string][] = [
  [{ en: "Standard", "zh-Hant": "標準", "zh-Hans": "标准" }, { en: "Approx. 15 business days", "zh-Hant": "約15個工作日", "zh-Hans": "约15个工作日" }, "USD 999"],
  [{ en: "Priority", "zh-Hant": "優先", "zh-Hans": "优先" }, { en: "Approx. 10 business days", "zh-Hant": "約10個工作日", "zh-Hans": "约10个工作日" }, "USD 1,249"],
  [{ en: "Express", "zh-Hant": "特快", "zh-Hans": "特快" }, { en: "Approx. 5–7 business days", "zh-Hant": "約5—7個工作日", "zh-Hans": "约5—7个工作日" }, "USD 1,499"],
  [{ en: "Critical Fast-Track", "zh-Hant": "緊急", "zh-Hans": "紧急" }, { en: "As fast as approx. 3 business days", "zh-Hant": "最快約3個工作日", "zh-Hans": "最快约3个工作日" }, "USD 1,999"],
];

const rushPackageB: [Bi, Bi, string][] = [
  [{ en: "Standard", "zh-Hant": "標準", "zh-Hans": "标准" }, { en: "Approx. 6–8 weeks", "zh-Hant": "約6—8週", "zh-Hans": "约6—8周" }, "USD 1,799"],
  [{ en: "Priority", "zh-Hant": "優先", "zh-Hans": "优先" }, { en: "Approx. 4–6 weeks", "zh-Hant": "約4—6週", "zh-Hans": "约4—6周" }, "USD 2,249"],
  [{ en: "Express", "zh-Hant": "特快", "zh-Hans": "特快" }, { en: "Approx. 15–20 business days", "zh-Hant": "約15—20個工作日", "zh-Hans": "约15—20个工作日" }, "USD 2,699"],
];

const rushPackageC: [Bi, Bi][] = [
  [{ en: "Standard", "zh-Hant": "標準", "zh-Hans": "标准" }, { en: "From USD 2,499", "zh-Hant": "USD 2,499起", "zh-Hans": "USD 2,499起" }],
  [{ en: "Priority", "zh-Hant": "優先", "zh-Hans": "优先" }, { en: "+25% of the standard project price", "zh-Hant": "標準項目價格加收25%", "zh-Hans": "标准项目价格加收25%" }],
  [{ en: "Express or Critical production", "zh-Hant": "特快或緊急製作", "zh-Hans": "特快或紧急制作" }, { en: "Assessed and quoted individually", "zh-Hant": "單獨評估及報價", "zh-Hans": "单独评估及报价" }],
];

const rushRules: Bi[] = [
  { en: "Rush fees must be paid in full before scheduling.", "zh-Hant": "加急費須在排期前全額支付。", "zh-Hans": "加急费须在排期前全额支付。" },
  { en: "Rush fees are non-refundable once the rush slot has begun.", "zh-Hant": "加急排期開始後，加急費不予退還。", "zh-Hans": "加急排期开始后，加急费不予退还。" },
  { en: "Rush only shortens the publisher's internal processing time.", "zh-Hant": "加急僅縮短出版社內部處理周期。", "zh-Hans": "加急仅缩短出版社内部处理周期。" },
  { en: "Rush does not waive editorial, ethical, rights, or technical review.", "zh-Hant": "加急不免除編輯、倫理、版權和技術審查。", "zh-Hans": "加急不免除编辑、伦理、版权和技术审查。" },
  { en: "New author revisions, delayed confirmations, or replaced files automatically reset the original rush timeline.", "zh-Hant": "作者新增修改、延遲確認或更換文件後，原加急周期自動重新計算。", "zh-Hans": "作者新增修改、延迟确认或更换文件后，原加急周期自动重新计算。" },
  { en: "Rush does not include printing rush, courier rush, or third-party platform processing rush.", "zh-Hant": "加急不包括印刷加急、快遞加急及第三方平台處理加急。", "zh-Hans": "加急不包括印刷加急、快递加急及第三方平台处理加急。" },
  { en: "The publisher may decline a rush request based on project complexity or scheduling capacity.", "zh-Hant": "出版社有權因項目複雜程度或排期容量拒絕加急申請。", "zh-Hans": "出版社有权因项目复杂程度或排期容量拒绝加急申请。" },
];

// Section 五 — Standard Physical Publication Pack
const physicalPackIncludes: Bi[] = [
  { en: "25 paperback print copies in total", "zh-Hant": "共25本平裝紙質圖書", "zh-Hans": "共25本平装纸质图书" },
  { en: "20 of which are author copies", "zh-Hant": "其中20本為作者副本", "zh-Hans": "其中20本为作者副本" },
  { en: "5 of which are for Hong Kong statutory deposit and book registration", "zh-Hant": "其中5本用於香港法定送存及書刊登記", "zh-Hans": "其中5本用于香港法定送存及书刊登记" },
  { en: "Black-and-white interior", "zh-Hant": "黑白內文", "zh-Hans": "黑白内文" },
  { en: "Colour cover", "zh-Hant": "彩色封面", "zh-Hans": "彩色封面" },
  { en: "Standard perfect binding", "zh-Hant": "普通膠裝", "zh-Hans": "普通胶装" },
  { en: "Approx. 80gsm standard interior paper", "zh-Hant": "80克左右標準內文紙", "zh-Hans": "80克左右标准内文纸" },
  { en: "Approx. 250gsm cover stock", "zh-Hant": "250克左右封面紙", "zh-Hans": "250克左右封面纸" },
  { en: "Matte or gloss lamination", "zh-Hant": "啞膜或光膜", "zh-Hans": "哑膜或光膜" },
  { en: "Finished size up to 185mm × 260mm", "zh-Hant": "成品尺寸不超過185 mm × 260 mm", "zh-Hans": "成品尺寸不超过185 mm × 260 mm" },
  { en: "Technical inspection of the final print files", "zh-Hant": "最終印刷文件技術檢查", "zh-Hans": "最终印刷文件技术检查" },
  { en: "Packaging of the 5 deposit copies", "zh-Hant": "5本送存副本的包裝", "zh-Hans": "5本送存副本的包装" },
  { en: "Book registration form preparation and data verification", "zh-Hant": "書刊登記表格準備及資料核對", "zh-Hans": "书刊登记表格准备及资料核对" },
  { en: "Local Hong Kong hand-delivery", "zh-Hant": "香港本地遞送", "zh-Hans": "香港本地递送" },
  { en: "Deposit and delivery record archiving", "zh-Hant": "送存及遞交記錄歸檔", "zh-Hans": "送存及递交记录归档" },
];

const physicalPackNotIncluded: Bi = {
  en: "Shipping of the 20 author copies to the author's address",
  "zh-Hant": "20本作者副本寄往作者地址的運輸費用",
  "zh-Hans": "20本作者副本寄往作者地址的运输费用",
};

const pageSurchargeRows: [Bi, Bi, string][] = [
  [{ en: "Up to 200 pages", "zh-Hant": "200頁以內", "zh-Hans": "200页以内" }, { en: "None", "zh-Hant": "無", "zh-Hans": "无" }, "USD 999"],
  [{ en: "201–300 pages", "zh-Hant": "201—300頁", "zh-Hans": "201—300页" }, { en: "+USD 150", "zh-Hant": "加USD 150", "zh-Hans": "加USD 150" }, "USD 1,149"],
  [{ en: "301–400 pages", "zh-Hant": "301—400頁", "zh-Hans": "301—400页" }, { en: "+USD 300", "zh-Hant": "加USD 300", "zh-Hans": "加USD 300" }, "USD 1,299"],
  [{ en: "401–500 pages", "zh-Hant": "401—500頁", "zh-Hans": "401—500页" }, { en: "+USD 500", "zh-Hant": "加USD 500", "zh-Hans": "加USD 500" }, "USD 1,499"],
  [{ en: "Over 500 pages", "zh-Hant": "超過500頁", "zh-Hans": "超过500页" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }, ""],
];

// Section 六 — standalone printing & deposit-coordination services
const standaloneServices: [Bi, string][] = [
  [{ en: "25 standard paperback copies, up to 200 pages", "zh-Hant": "25本標準平裝印刷，200頁以內", "zh-Hans": "25本标准平装印刷，200页以内" }, "USD 749"],
  [{ en: "Statutory deposit & delivery coordination, ordered with printing", "zh-Hant": "法定送存及遞交協調，與印刷同時訂購", "zh-Hans": "法定送存及递交协调，与印刷同时订购" }, "USD 250"],
  [{ en: "Deposit coordination for 5 author-supplied compliant copies", "zh-Hant": "作者自行印刷並提供5本合格副本後的送存協調", "zh-Hans": "作者自行印刷并提供5本合格副本后的送存协调" }, "USD 299"],
  [{ en: "Printing of 5 deposit copies only, plus delivery coordination", "zh-Hant": "僅印製5本送存副本並辦理遞交", "zh-Hans": "仅印制5本送存副本并办理递交" }, "From USD 449"],
];

// Section 七 — additional author copies
const additionalCopyRows: [string, string][] = [
  ["5", "USD 149"],
  ["10", "USD 249"],
  ["25", "USD 499"],
  ["50", "USD 799"],
  ["100", "USD 1,299"],
  ["200", "USD 2,199"],
];

// Section 八 — print upgrades
const printUpgrades: [Bi, Bi][] = [
  [{ en: "Hardcover upgrade, 25 copies", "zh-Hant": "精裝升級，25本", "zh-Hans": "精装升级，25本" }, { en: "From USD 399", "zh-Hant": "USD 399起", "zh-Hans": "USD 399起" }],
  [{ en: "Cover with flaps, 25 copies", "zh-Hant": "帶勒口封面，25本", "zh-Hans": "带勒口封面，25本" }, { en: "+From USD 120", "zh-Hant": "加USD 120起", "zh-Hans": "加USD 120起" }],
  [{ en: "Hardcover with dust jacket, 25 copies", "zh-Hant": "精裝護封，25本", "zh-Hans": "精装护封，25本" }, { en: "+From USD 180", "zh-Hant": "加USD 180起", "zh-Hans": "加USD 180起" }],
  [{ en: "Colour interior", "zh-Hant": "彩色內文", "zh-Hans": "彩色内文" }, { en: "From USD 0.20 per colour page per copy, USD 300 minimum", "zh-Hant": "每彩色頁、每本USD 0.20起，最低USD 300", "zh-Hans": "每彩色页、每本USD 0.20起，最低USD 300" }],
  [{ en: "Coated or premium image paper", "zh-Hant": "銅版紙或高質量圖片紙", "zh-Hans": "铜版纸或高质量图片纸" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
  [{ en: "Specialty paper", "zh-Hant": "特種紙", "zh-Hans": "特种纸" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
  [{ en: "Foil stamping, embossing, or spot UV", "zh-Hant": "燙金、燙銀、擊凸或局部UV", "zh-Hans": "烫金、烫银、击凸或局部UV" }, { en: "From USD 250", "zh-Hant": "USD 250起", "zh-Hans": "USD 250起" }],
  [{ en: "Non-standard trim size or landscape format", "zh-Hant": "特殊尺寸或橫向開本", "zh-Hans": "特殊尺寸或横向开本" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
  [{ en: "Sewn, stitched, flexibound, or other special binding", "zh-Hant": "線裝、鎖線、軟精裝等特殊裝訂", "zh-Hans": "线装、锁线、软精装等特殊装订" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
  [{ en: "One paperback physical proof", "zh-Hant": "平裝實體校樣一本", "zh-Hans": "平装实体校样一本" }, { en: "USD 99, shipping separate", "zh-Hant": "USD 99，運輸另計", "zh-Hans": "USD 99，运输另计" }],
  [{ en: "One hardcover physical proof", "zh-Hant": "精裝實體校樣一本", "zh-Hans": "精装实体校样一本" }, { en: "USD 149, shipping separate", "zh-Hant": "USD 149，運輸另計", "zh-Hans": "USD 149，运输另计" }],
];

// Section 九 — printing rush
const printingRushRows: [Bi, Bi, Bi][] = [
  [{ en: "Standard Printing", "zh-Hant": "標準印刷", "zh-Hans": "标准印刷" }, { en: "7–12 business days", "zh-Hant": "7—12個工作日", "zh-Hans": "7—12个工作日" }, { en: "No extra charge", "zh-Hant": "無", "zh-Hans": "无" }],
  [{ en: "Priority Printing", "zh-Hant": "優先印刷", "zh-Hans": "优先印刷" }, { en: "4–6 business days", "zh-Hant": "4—6個工作日", "zh-Hans": "4—6个工作日" }, { en: "+25% of printing fee", "zh-Hant": "印刷費加收25%", "zh-Hans": "印刷费加收25%" }],
  [{ en: "Express Printing", "zh-Hant": "特快印刷", "zh-Hans": "特快印刷" }, { en: "2–3 business days", "zh-Hant": "2—3個工作日", "zh-Hans": "2—3个工作日" }, { en: "+50% of printing fee", "zh-Hant": "印刷費加收50%", "zh-Hans": "印刷费加收50%" }],
  [{ en: "Emergency Printing", "zh-Hant": "緊急印刷", "zh-Hans": "紧急印刷" }, { en: "As fast as 1 business day", "zh-Hant": "最快1個工作日", "zh-Hans": "最快1个工作日" }, { en: "From +100% of printing fee", "zh-Hant": "印刷費加收100%起", "zh-Hans": "印刷费加收100%起" }],
];

const printingRushNotes: Bi[] = [
  { en: "Applies only to technically compliant final PDF files.", "zh-Hant": "僅適用於技術合格的最終PDF。", "zh-Hans": "仅适用于技术合格的最终PDF。" },
  { en: "Excludes shipping time.", "zh-Hant": "不包括運輸時間。", "zh-Hans": "不包括运输时间。" },
  { en: "Not all paper stocks, bindings, and finishes can be rushed.", "zh-Hant": "不保證所有紙張、裝訂及工藝均可加急。", "zh-Hans": "不保证所有纸张、装订及工艺均可加急。" },
  { en: "Hardcover, special paper, colour interior, and special finishes usually require separate confirmation.", "zh-Hant": "精裝、特殊紙張、彩色內文及特殊工藝通常需要另行確認。", "zh-Hans": "精装、特殊纸张、彩色内文及特殊工艺通常需要另行确认。" },
  { en: "Printer scheduling, equipment maintenance, and public holidays may affect availability.", "zh-Hant": "印刷廠排期、設備維護和公共假期可能影響可接受性。", "zh-Hans": "印刷厂排期、设备维护和公共假期可能影响可接受性。" },
];

// Section 十 — author copy delivery & logistics
const logisticsExtraRows: [Bi, Bi][] = [
  [{ en: "Each additional delivery address", "zh-Hant": "每增加一個收貨地址", "zh-Hans": "每增加一个收货地址" }, { en: "USD 45 + actual shipping", "zh-Hant": "USD 45＋實際運費", "zh-Hans": "USD 45＋实际运费" }],
  [{ en: "Non-standard customs or commercial-invoice documentation", "zh-Hant": "非標準報關或商業發票文件", "zh-Hans": "非标准报关或商业发票文件" }, { en: "From USD 60", "zh-Hant": "USD 60起", "zh-Hans": "USD 60起" }],
  [{ en: "Incorrect address, refusal, or redelivery", "zh-Hant": "地址錯誤、拒收或重新派送", "zh-Hans": "地址错误、拒收或重新派送" }, { en: "Actual cost + USD 35", "zh-Hant": "實際費用＋USD 35", "zh-Hans": "实际费用＋USD 35" }],
  [{ en: "Storage beyond 14 days", "zh-Hant": "超過14日的倉儲", "zh-Hans": "超过14日的仓储" }, { en: "USD 35 per box per 30 days", "zh-Hant": "USD 35／箱／每30日", "zh-Hans": "USD 35/箱/每30日" }],
  [{ en: "Special, waterproof, or reinforced packaging", "zh-Hant": "特殊包裝、防水或加固包裝", "zh-Hans": "特殊包装、防水或加固包装" }, { en: "From USD 30", "zh-Hant": "USD 30起", "zh-Hans": "USD 30起" }],
  [{ en: "Shipping insurance", "zh-Hant": "運輸保險", "zh-Hans": "运输保险" }, { en: "At actual carrier cost", "zh-Hant": "按承運商實際費用", "zh-Hans": "按承运商实际费用" }],
  [{ en: "Customs duties, import tax, and clearance fees", "zh-Hant": "關稅、進口稅及清關費用", "zh-Hans": "关税、进口税及清关费用" }, { en: "Borne by the recipient", "zh-Hant": "由收件人承擔", "zh-Hans": "由收件人承担" }],
];

// Section 十一 — additional editing & production services (replaces old optionalServices)
const editingServices: [Bi, Bi][] = [
  [{ en: "Basic proofreading beyond package scope", "zh-Hant": "超出套餐範圍的基礎校對", "zh-Hans": "超出套餐范围的基础校对" }, { en: "From USD 12 per 1,000 words, USD 250 minimum", "zh-Hant": "USD 12／每1,000詞起，最低USD 250", "zh-Hans": "USD 12/每1,000词起，最低USD 250" }],
  [{ en: "Academic language editing", "zh-Hant": "學術語言編輯", "zh-Hans": "学术语言编辑" }, { en: "From USD 25 per 1,000 words, USD 500 minimum", "zh-Hant": "USD 25／每1,000詞起，最低USD 500", "zh-Hans": "USD 25/每1,000词起，最低USD 500" }],
  [{ en: "Substantive or developmental editing", "zh-Hant": "實質性或發展性編輯", "zh-Hans": "实质性或发展性编辑" }, { en: "From USD 45 per 1,000 words, USD 900 minimum", "zh-Hant": "USD 45／每1,000詞起，最低USD 900", "zh-Hans": "USD 45/每1,000词起，最低USD 900" }],
  [{ en: "Reference-style unification and verification", "zh-Hant": "參考文獻格式統一及核查", "zh-Hans": "参考文献格式统一及核查" }, { en: "From USD 3 per entry, USD 150 minimum", "zh-Hant": "USD 3／條起，最低USD 150", "zh-Hans": "USD 3/条起，最低USD 150" }],
  [{ en: "Complex tables, formulas, or specialist typesetting", "zh-Hant": "複雜表格、公式或專業排版", "zh-Hans": "复杂表格、公式或专业排版" }, { en: "From USD 300", "zh-Hant": "USD 300起", "zh-Hans": "USD 300起" }],
  [{ en: "Figure redrawing or image restoration", "zh-Hant": "圖表重繪或圖片修復", "zh-Hans": "图表重绘或图片修复" }, { en: "From USD 180", "zh-Hant": "USD 180起", "zh-Hans": "USD 180起" }],
  [{ en: "Name or subject index", "zh-Hant": "主題索引或人名索引", "zh-Hans": "主题索引或人名索引" }, { en: "From USD 350", "zh-Hant": "USD 350起", "zh-Hans": "USD 350起" }],
  [{ en: "Additional consolidated correction round", "zh-Hant": "額外一輪集中修改", "zh-Hans": "额外一轮集中修改" }, { en: "From USD 250 per round", "zh-Hant": "USD 250起／輪", "zh-Hans": "USD 250起/轮" }],
  [{ en: "Retypesetting after style approval", "zh-Hant": "樣式批准後的重新排版", "zh-Hans": "样式批准后的重新排版" }, { en: "USD 125 per hour, 2-hour minimum", "zh-Hant": "USD 125／小時，最低2小時", "zh-Hans": "USD 125/小时，最低2小时" }],
  [{ en: "Cover redesign after approval", "zh-Hant": "封面批准後的重新設計", "zh-Hans": "封面批准后的重新设计" }, { en: "From USD 200", "zh-Hant": "USD 200起", "zh-Hans": "USD 200起" }],
  [{ en: "Book DOI, where applicable", "zh-Hant": "DOI配置，適用時", "zh-Hans": "DOI配置，适用时" }, { en: "From USD 100", "zh-Hant": "USD 100起", "zh-Hans": "USD 100起" }],
  [{ en: "Specialist copyright, permissions, or legal review", "zh-Hant": "專業版權、許可或法律審查", "zh-Hans": "专业版权、许可或法律审查" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
  [{ en: "Translation", "zh-Hant": "翻譯服務", "zh-Hans": "翻译服务" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
];

// Section 十二 — additional editions & digital formats (replaces old additionalFormatServices)
const additionalFormatServices: [Bi, Bi][] = [
  [{ en: "ISBN, metadata, copyright-page, and record setup for another approved format", "zh-Hant": "另一經批准載體的ISBN、元數據、版權頁及出版記錄配置", "zh-Hans": "另一经批准载体的ISBN、元数据、版权页及出版记录配置" }, { en: "USD 999", "zh-Hant": "USD 999", "zh-Hans": "USD 999" }],
  [{ en: "EPUB preparation", "zh-Hant": "EPUB 製作", "zh-Hans": "EPUB 制作" }, { en: "From USD 299", "zh-Hant": "USD 299起", "zh-Hans": "USD 299起" }],
  [{ en: "Reflowable eBook conversion", "zh-Hant": "可重排電子書轉換", "zh-Hans": "可重排电子书转换" }, { en: "From USD 299", "zh-Hant": "USD 299起", "zh-Hans": "USD 299起" }],
  [{ en: "Minor revised-edition processing", "zh-Hant": "小範圍修訂版處理", "zh-Hans": "小范围修订版处理" }, { en: "From USD 499", "zh-Hant": "USD 499起", "zh-Hans": "USD 499起" }],
  [{ en: "Substantive revised edition requiring a new ISBN", "zh-Hant": "需要新ISBN的實質性修訂版", "zh-Hans": "需要新ISBN的实质性修订版" }, { en: "Quoted as a new publication project", "zh-Hant": "按新版本出版項目報價", "zh-Hans": "按新版本出版项目报价" }],
  [{ en: "Translated edition", "zh-Hant": "翻譯版本", "zh-Hans": "翻译版本" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
  [{ en: "Multilingual edition", "zh-Hant": "多語種版本", "zh-Hans": "多语种版本" }, { en: "Quotation-based", "zh-Hant": "單獨報價", "zh-Hans": "单独报价" }],
];

const institutionalRows: [Bi, Bi, Bi][] = [
  [
    { en: "Institutional Publication", "zh-Hant": "機構出版", "zh-Hans": "机构出版" },
    { en: "Publication planning, metadata preparation, editorial coordination, official webpage, digital archiving", "zh-Hant": "出版規劃、元數據準備、編輯協調、官方網頁、數位典藏", "zh-Hans": "出版规划、元数据准备、编辑协调、官方网页、数字化存档" },
    { en: "Quotation-based", "zh-Hant": "另行報價", "zh-Hans": "另行报价" },
  ],
  [
    { en: "Book Series", "zh-Hant": "書系", "zh-Hans": "书系" },
    { en: "Series setup, series identity, manuscript structure, metadata planning, publication workflow", "zh-Hant": "書系建置、書系識別、稿件架構、元數據規劃、出版流程", "zh-Hans": "书系建置、书系识别、稿件架构、元数据规划、出版流程" },
    { en: "Quotation-based", "zh-Hant": "另行報價", "zh-Hans": "另行报价" },
  ],
  [
    { en: "Conference Proceedings", "zh-Hant": "會議論文集", "zh-Hans": "会议论文集" },
    { en: "Proceedings structure, chapter formatting, contributor coordination, official publication page", "zh-Hant": "論文集架構、章節格式、撰稿人協調、官方出版頁面", "zh-Hans": "论文集架构、章节格式、撰稿人协调、官方出版页面" },
    { en: "Quotation-based", "zh-Hant": "另行報價", "zh-Hans": "另行报价" },
  ],
  [
    { en: "Large Edited Volume", "zh-Hant": "大型編著文集", "zh-Hans": "大型编著文集" },
    { en: "Multi-author coordination, chapter standardization, extended layout work, metadata preparation", "zh-Hant": "多作者協調、章節格式統一、延伸排版工作、元數據準備", "zh-Hans": "多作者协调、章节格式统一、延伸排版工作、元数据准备" },
    { en: "Quotation-based", "zh-Hant": "另行報價", "zh-Hans": "另行报价" },
  ],
];

// Section 十三 — distribution & sales setup (updated figures)
const distributionRows: [Bi, Bi][] = [
  [{ en: "Official book webpage", "zh-Hant": "官方圖書網頁", "zh-Hans": "官方图书网页" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Direct-order inquiry setup", "zh-Hant": "直接訂購洽詢建置", "zh-Hans": "直接订购咨询建置" }, { en: "Included", "zh-Hant": "包含", "zh-Hans": "包含" }],
  [{ en: "Amazon or other POD platform setup assistance", "zh-Hant": "Amazon或其他POD平台設置協助", "zh-Hans": "Amazon或其他POD平台设置协助" }, { en: "From USD 250", "zh-Hant": "USD 250起", "zh-Hans": "USD 250起" }],
  [{ en: "Google Play Books setup assistance", "zh-Hant": "Google Play Books設置協助", "zh-Hans": "Google Play Books设置协助" }, { en: "From USD 200", "zh-Hant": "USD 200起", "zh-Hans": "USD 200起" }],
  [{ en: "IngramSpark setup assistance", "zh-Hant": "IngramSpark設置協助", "zh-Hans": "IngramSpark设置协助" }, { en: "From USD 399", "zh-Hant": "USD 399起", "zh-Hans": "USD 399起" }],
  [{ en: "European book-trade metadata support", "zh-Hant": "歐洲書業元數據支持", "zh-Hans": "欧洲书业元数据支持" }, { en: "Third-party cost plus service fee", "zh-Hant": "第三方成本＋服務費", "zh-Hans": "第三方成本＋服务费" }],
  [{ en: "Full distribution setup", "zh-Hant": "綜合發行配置", "zh-Hans": "综合发行配置" }, { en: "From USD 799", "zh-Hant": "USD 799起", "zh-Hans": "USD 799起" }],
  [{ en: "Annual distribution maintenance", "zh-Hant": "年度發行維護", "zh-Hans": "年度发行维护" }, { en: "From USD 199 per title per year", "zh-Hant": "USD 199起／書名／年", "zh-Hans": "USD 199起/书名/年" }],
];

// Section 十五 — payment & quotation rules
const paymentRules: Bi[] = [
  { en: "Package A and physical-printing items are generally payable in full in advance.", "zh-Hant": "方案 A及實體印刷項目原則上須全額預付。", "zh-Hans": "方案 A及实体印刷项目原则上须全额预付。" },
  { en: "Packages B and C are generally 50% deposit to begin, with the remaining 50% due before final file delivery or publication.", "zh-Hant": "方案 B及方案 C原則上為50%啟動款，剩餘50%在最終文件交付或出版前支付。", "zh-Hans": "方案 B及方案 C原则上为50%启动款，剩余50%在最终文件交付或出版前支付。" },
  { en: "All rush fees must be paid in full before rush scheduling begins.", "zh-Hant": "所有加急費須在安排加急排期前全額支付。", "zh-Hans": "所有加急费须在安排加急排期前全额支付。" },
  { en: "Wire transfers should be arranged so the payer bears all outgoing and intermediary-bank charges.", "zh-Hant": "電匯應選擇由付款人承擔全部匯出行及中間行費用。", "zh-Hans": "电汇应选择由付款人承担全部汇出行及中间行费用。" },
  { en: "An international payment and bank-handling surcharge of 12% applies to payments made by credit card, PayPal, Stripe, wire transfer, or other overseas payment channels, covering cross-border processing, correspondent-bank, and currency-conversion costs.", "zh-Hant": "透過信用卡、PayPal、Stripe、電匯或其他海外付款渠道付款時，將加收12%之國際付款及銀行手續處理費，用以支付跨境處理、中間行及匯兌相關成本。", "zh-Hans": "通过信用卡、PayPal、Stripe、电汇或其他海外付款渠道付款时，将加收12%的国际付款及银行手续处理费，用于支付跨境处理、中间行及汇兑相关成本。" },
  { en: "This international payment surcharge is disclosed upfront in the quotation and invoice — it is not a hidden or subsequently added fee.", "zh-Hant": "國際付款附加費將於報價及發票中預先明確列明，並非事後追加或隱藏費用。", "zh-Hans": "国际付款附加费将在报价及发票中预先明确列明，并非事后追加或隐藏费用。" },
  { en: "Quotations are generally valid for 14 days.", "zh-Hant": "報價有效期原則上為14日。", "zh-Hans": "报价有效期原则上为14日。" },
  { en: "Printing and logistics quotations may be adjusted for changes in paper, fuel, exchange rates, carrier, or supplier pricing.", "zh-Hant": "印刷及物流報價可因紙張、燃油、匯率、承運商和供應商價格變化而調整。", "zh-Hans": "印刷及物流报价可因纸张、燃油、汇率、承运商和供应商价格变化而调整。" },
  { en: "Taxes, duties, and third-party service fees are not included unless expressly stated in the quotation. International bank and payment-platform costs are covered by the 12% surcharge above, not charged again separately.", "zh-Hant": "稅費、關稅及第三方服務費，除非報價明確寫明，否則均不包含。國際銀行及支付平台成本已涵蓋於上述12%附加費內，不會再另行收取。", "zh-Hans": "税费、关税及第三方服务费，除非报价明确写明，否则均不包含。国际银行及支付平台成本已涵盖于上述12%附加费内，不会再另行收取。" },
  { en: "Final scope of service is governed by the written quotation, publishing agreement, and any confirmed project specification.", "zh-Hant": "最終服務範圍以書面報價、出版合同及雙方確認的項目說明為準。", "zh-Hans": "最终服务范围以书面报价、出版合同及双方确认的项目说明为准。" },
];

const isbnRequirements: Bi[] = [
  { en: "Submitted to Panorama Scholarly Books", "zh-Hant": "已提交予 Panorama Scholarly Books", "zh-Hans": "已提交至 Panorama Scholarly Books" },
  { en: "Reviewed and formally accepted", "zh-Hant": "已審查並正式接受", "zh-Hans": "已审查并正式接受" },
  { en: "Covered by a signed publishing agreement", "zh-Hant": "已簽署出版協議", "zh-Hans": "已签署出版协议" },
  { en: "Approved for publication under the Panorama Scholarly Books imprint", "zh-Hant": "已核准以 Panorama Scholarly Books 品牌出版", "zh-Hans": "已核准以 Panorama Scholarly Books 品牌出版" },
  { en: "Supported by complete authorship, rights, and bibliographic information", "zh-Hant": "備有完整著作權、版權及書目資訊", "zh-Hans": "备有完整著作权、版权及书目信息" },
  { en: "Prepared for a genuine and identifiable edition and product format", "zh-Hant": "已準備供真實且可辨識之版次及產品格式使用", "zh-Hans": "已准备供真实且可辨识的版次及产品格式使用" },
];

const isbnNotConstitute: Bi[] = [
  { en: "Copyright registration", "zh-Hant": "版權登記", "zh-Hans": "版权登记" },
  { en: "Government approval of the content", "zh-Hant": "政府對內容之核准", "zh-Hans": "政府对内容的核准" },
  { en: "Academic accreditation or degree recognition", "zh-Hant": "學術認證或學位認可", "zh-Hans": "学术认证或学位认可" },
  { en: "Indexing or peer-review certification", "zh-Hant": "索引收錄或同行評審認證", "zh-Hans": "索引收录或同行评审认证" },
  { en: "Commercial distribution", "zh-Hant": "商業發行", "zh-Hans": "商业发行" },
  { en: "A guarantee of sales or citations", "zh-Hant": "銷售或引用之保證", "zh-Hans": "销售或引用的保证" },
];

const cancellationPoints: Bi[] = [
  {
    en: "Once editorial administration, rights review, metadata preparation, production, design, typesetting, or proofreading has begun, the completed portion of the work is non-refundable.",
    "zh-Hant": "一旦開始編輯行政、版權審查、元數據準備、製作、設計、排版或校對，已完成部分之費用概不退還。",
    "zh-Hans": "一旦开始编辑行政、版权审查、元数据准备、制作、设计、排版或校对，已完成部分的费用概不退还。",
  },
  {
    en: "Fees are normally non-refundable after an ISBN has been assigned or reserved for the accepted publication.",
    "zh-Hant": "已為獲接受出版物分配或預留 ISBN 後，費用一般概不退還。",
    "zh-Hans": "已为获接受出版物分配或预留 ISBN 后，费用一般概不退还。",
  },
  {
    en: "Fees are non-refundable after final files have been released or publication has been completed.",
    "zh-Hant": "最終檔案發布或出版完成後，費用概不退還。",
    "zh-Hans": "最终文件发布或出版完成后，费用概不退还。",
  },
  {
    en: "Author-requested cancellation does not create an entitlement to a refund of work already completed.",
    "zh-Hant": "作者要求取消，並不代表可就已完成之工作獲得退款。",
    "zh-Hans": "作者要求取消，并不代表可就已完成的工作获得退款。",
  },
  {
    en: "Where the publisher terminates a project because of plagiarism, rights infringement, undisclosed authorship disputes, unlawful content, false information, ethical violations, or breach of agreement, completed work and incurred costs remain payable.",
    "zh-Hant": "如出版者因抄襲、侵犯版權、未披露之著作權爭議、違法內容、虛假資訊、違反倫理或違反協議而終止專案，已完成之工作及已產生之費用仍須支付。",
    "zh-Hans": "如出版者因抄袭、侵犯版权、未披露的著作权争议、违法内容、虚假信息、违反伦理或违反协议而终止项目，已完成的工作及已产生的费用仍须支付。",
  },
];

const declinePoints: Bi[] = [
  { en: "Falls outside the publisher's scope", "zh-Hant": "超出出版者出版範疇", "zh-Hans": "超出出版者出版范畴" },
  { en: "Does not meet academic or production standards", "zh-Hant": "未達學術或製作標準", "zh-Hans": "未达学术或制作标准" },
  { en: "Contains plagiarism or duplicate publication", "zh-Hant": "含有抄襲或重複出版之情形", "zh-Hans": "含有抄袭或重复出版的情形" },
  { en: "Contains unresolved authorship or copyright disputes", "zh-Hant": "存在未解決之著作權歸屬或版權爭議", "zh-Hans": "存在未解决的著作权归属或版权争议" },
  { en: "Uses third-party material without permission", "zh-Hant": "未經授權使用第三方材料", "zh-Hans": "未经授权使用第三方材料" },
  { en: "Contains unlawful, defamatory, deceptive, or materially misleading content", "zh-Hant": "含有違法、誹謗、欺詐或重大誤導性內容", "zh-Hans": "含有违法、诽谤、欺诈或重大误导性内容" },
  { en: "Provides false author, affiliation, funding, or publication information", "zh-Hant": "提供虛假之作者、所屬機構、資助或出版資訊", "zh-Hans": "提供虚假的作者、所属机构、资助或出版信息" },
  { en: "Cannot be brought to publication standard within the agreed scope", "zh-Hant": "無法在協議範圍內達到出版標準", "zh-Hans": "无法在协议范围内达到出版标准" },
  { en: "Creates an unacceptable legal, ethical, reputational, or operational risk", "zh-Hant": "造成不可接受之法律、倫理、聲譽或營運風險", "zh-Hans": "造成不可接受的法律、伦理、声誉或运营风险" },
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
    intro2: "All projects are subject to editorial, academic-ethics, copyright, technical, and publication-eligibility review. Payment of any fee does not guarantee publication, and does not represent or guarantee sales, indexing, citations, promotion or tenure outcomes, academic recognition, or commercial revenue. The following fees are effective from 1 August 2026.",

    coreHeading: "1. Core Publishing Packages",
    packagesIntro: "Each package covers one title, one edition, and one product format. Printing, shipping, statutory deposit copies, and third-party platform charges are not included unless separately agreed in writing.",
    recommended: "Recommended",
    notIncluded: "Not Included",
    inquireAbout: "Inquire about",
    standardScopeLabel: "Standard scope:",
    standardScopeBody: "Package B generally applies to a manuscript of up to 60,000 words or approximately 200 finished pages, in one principal language, with standard academic formatting, references, and a normal number of tables and figures. Longer or more complex manuscripts require Package C or a separate quotation. Publication-ready files submitted under Package A must meet the publisher's technical and ethical standards; files requiring substantial correction or reconstruction may be transferred to Package B or C, or quoted separately.",
    comparisonHeading: "Package Comparison",
    serviceItem: "Service Item",

    bundleHeading: "Recommended Print Publication Bundles",
    bundleIntro: "For authors who want a printed edition, the following bundles combine a core package with the Standard Physical Publication Pack (Section 2) at a combined price:",
    bundleFootnote: "Bundle prices exclude shipping of the 20 author copies to the author's address, taxes, payment-platform fees, and third-party platform charges.",
    bundleName: "Bundle",
    bundleIncludes: "Includes",

    timelineHeading: "Standard Production Timeline",
    timelineIntro: "The timelines below run from the next business day after all of the following are satisfied:",
    timelinePackage: "Package",
    timelineTarget: "Target Timeline",
    timelineFootnote: "These are target production timelines only. They exclude author revision time, third-party permission wait times, government or public-body processing time, printing time, international shipping time, and delays caused by force majeure.",

    physicalHeading: "2. Physical Publication and Statutory Deposit",
    physicalPackName: "Standard Physical Publication Pack",
    physicalPackPrice: "USD 999",
    physicalPackIntro: "For standard black-and-white academic books up to 200 finished pages, this pack includes:",
    physicalPackNotIncludedLabel: "Not included:",
    pageSurchargeHeading: "Page-Count Surcharge",
    pageRange: "Finished Pages",
    surcharge: "Surcharge",
    packageTotal: "Package Total",

    standaloneHeading: "Standalone Printing and Deposit-Coordination Services",
    standaloneFootnote: "“Statutory deposit & delivery coordination” covers data verification, form preparation, packaging, local Hong Kong hand-delivery, progress tracking, and record archiving. Hong Kong book registration itself carries no government fee — this is a publisher service and coordination fee, never a “registration fee.”",

    additionalCopiesHeading: "Additional Author Copies",
    additionalCopiesIntro: "Prices below apply when ordered with the first print run, up to 200 pages, black-and-white paperback.",
    additionalCopiesFootnote: "Over 200 pages, colour interior, special paper, special binding, or a separate later reprint are quoted separately.",
    copies: "Copies",

    printUpgradesHeading: "Print Upgrades",
    printUpgradesFootnote: "Changes requested after the author approves the final proof may incur replating, re-proofing, or reprinting charges.",

    printingRushHeading: "Printing Rush",
    printingRushIntro: "Printing lead time is counted from the business day after the final print files and proofs are formally approved. Shipping time is calculated separately.",

    logisticsHeading: "Author Copy Delivery and International Logistics",
    logisticsIntro: "Shipping of author copies is not included in any publishing package or the Standard Physical Publication Pack.",
    logisticsFormulaLabel: "Pricing formula:",
    logisticsFormula: "Actual carrier shipping cost + 10% logistics coordination and handling fee",
    logisticsMinimumLabel: "Minimum logistics coordination and handling fee:",
    logisticsMinimum: "USD 35 per shipment",
    logisticsOtherHeading: "Other Logistics Charges",
    logisticsFootnote: "The publisher does not guarantee customs clearance time, carrier delivery time, or destination postal processing time. Expedited publication, expedited printing, and international courier are three independent services.",

    rushHeading: "3. Rush Tiers",
    assessmentRushHeading: "Manuscript Assessment Priority",
    assessmentRushFootnote: "Assessment fees cover priority scheduling only and do not guarantee acceptance. Non-refundable once assessment work has begun.",
    level: "Service Level",
    targetTime: "Target Time",
    price: "Price",

    productionRushHeading: "Production Rush by Package",
    packageALabel: "Package A",
    packageBLabel: "Package B",
    packageCLabel: "Package C",
    rushPackageAFootnote: "Critical Fast-Track applies only to fully proofread, typeset, publication-ready files that already meet technical standards.",
    rushPackageBFootnote: "Package B does not offer a 3-business-day critical production option.",
    rushPackageCFootnote: "Bilingual, multilingual, large edited volumes, complex formulas, colour figures, multi-author unification work, and manuscripts over approximately 300 pages are not guaranteed a fixed rush timeline. Package C only publishes a Priority tier — Express or Critical delivery is not publicly committed and is assessed individually.",
    rushRulesHeading: "Rush Service Rules",
    printingRushFootnote: "Applies only to technically compliant final PDF files and excludes shipping time.",

    additionalHeading: "4. Additional Services",
    editingHeading: "Additional Editing and Production Services",
    editingFootnote: "“One consolidated round” means the author or editor submits all revision comments in a single document at once. Scattered, repeated, or cross-file revisions are billed as additional rounds or by the hour.",
    additionalFormatsHeading: "Additional Editions and Digital Formats",
    additionalFormatsIntro: "Each package covers one title, one edition, and one product format. Paperback, hardback, PDF, EPUB, Kindle-compatible editions, revised editions, translated editions, and other separately distributed versions each require their own ISBN, metadata, and production work — an additional edition or format is never covered by a single flat “ISBN fee.” An additional ISBN will not be assigned unless the additional edition or format has been formally approved and is intended for genuine publication.",
    additionalService: "Additional Service",
    fee: "Fee",
    institutionalHeading: "Institutional, Series, and Proceedings Publishing",
    institutionalIntro: "Institutional publications, book series, conference proceedings, annual reports, multi-volume works, large edited collections, and sponsored open-access books are quoted separately according to project size, manuscript complexity, number of contributors, languages, production requirements, publication formats, distribution requirements, and expected administrative workload.",
    projectType: "Project Type",
    typicalServices: "Typical Services",
    distributionHeading: "Sales and Distribution Setup",
    distributionIntro: "Standard publishing fees do not include commercial distribution. Optional distribution services may be available for eligible titles, subject to the rules, approval processes, territorial limitations, technical requirements, and fees of the relevant platform.",
    distributionService: "Distribution Service",
    importantNoticeLabel: "Important notice:",
    importantNoticeBody: "Publishing or distribution fees do not guarantee book sales, bookstore placement, library acquisition, platform approval, indexing, ranking, reviews, citations, academic promotion, institutional recognition, or commercial performance.",

    isbnHeading: "ISBN and Publisher-of-Record Policy",
    isbnIntro: "ISBNs are assigned only to publications that have been:",
    isbnBody1: "ISBNs are not sold, transferred, leased, licensed as standalone numbers, or supplied for use by another publisher. The publisher name displayed in the book must correspond with the publisher information recorded for the ISBN.",
    isbnBody2: "Publishing fees are not government ISBN application fees. They are fees for publisher services, editorial assessment, project administration, rights review, bibliographic metadata, ISBN assignment, production processing, official publication records, digital archiving, and post-publication compliance coordination.",
    isbnNotConstituteIntro: "Assignment of an ISBN does not constitute:",

    paymentHeading: "5. Payment and Quotation Rules",
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
    intro2: "所有項目均須經過編輯、學術倫理、版權、技術及出版適格性審查。支付任何費用均不代表稿件必然獲得出版，也不構成對銷售、檢索、引用、職稱評審、學術認可或商業收益的保證。以下費用自2026年8月1日起生效。",

    coreHeading: "一、核心出版套餐",
    packagesIntro: "各方案均涵蓋一個書名、一個版次及一種產品格式。除非另有書面協議，否則印刷、運送、法定送存本及第三方平台費用均不包含在內。",
    recommended: "推薦方案",
    notIncluded: "不包含項目",
    inquireAbout: "洽詢",
    standardScopeLabel: "標準範圍：",
    standardScopeBody: "方案 B 一般適用於單一主要語言、字數不超過60,000字或約200頁完稿、採標準學術格式、含參考文獻及一般數量圖表之書稿。篇幅較長或較複雜之書稿須採用方案 C 或另行報價。以方案 A 提交之出版用檔案須符合出版者之技術及倫理標準；需大幅修正或重建之檔案，可能轉為方案 B 或 C 處理，或另行報價。",
    comparisonHeading: "方案比較",
    serviceItem: "服務項目",

    bundleHeading: "推薦對外組合價格",
    bundleIntro: "如作者需要紙質出版，以下組合將核心套餐與「標準實體出版及法定送存套餐」（見第二部分）合併計價：",
    bundleFootnote: "組合價格均不包括20本作者副本寄往作者地址的運輸費、稅費、支付平台費用及第三方平台費用。",
    bundleName: "組合",
    bundleIncludes: "內容",

    timelineHeading: "出版項目標準周期",
    timelineIntro: "下列周期從以下條件全部滿足後的下一個工作日起計算：",
    timelinePackage: "套餐",
    timelineTarget: "標準目標周期",
    timelineFootnote: "上述時間屬於目標製作周期，不包括作者修改時間、第三方授權等待時間、政府或公共機構處理時間、印刷時間、國際物流時間以及不可抗力造成的延誤。",

    physicalHeading: "二、實體出版及法定送存",
    physicalPackName: "標準實體出版及法定送存套餐",
    physicalPackPrice: "USD 999",
    physicalPackIntro: "適用於不超過200個成品頁的普通黑白學術圖書，包括：",
    physicalPackNotIncludedLabel: "不包括：",
    pageSurchargeHeading: "頁數附加費",
    pageRange: "成品頁數",
    surcharge: "附加價格",
    packageTotal: "套餐總價",

    standaloneHeading: "單獨印刷及法定送存服務",
    standaloneFootnote: "「法定送存及遞交協調」涵蓋資料核對、表格準備、包裝、香港本地遞交、進度跟進及記錄歸檔。香港書刊登記本身不收取政府費用——此項為出版社的服務及協調費用，絕非「登記費」。",

    additionalCopiesHeading: "追加作者副本",
    additionalCopiesIntro: "以下價格適用於與首次印刷同時下單、不超過200頁的黑白平裝圖書。",
    additionalCopiesFootnote: "超過200頁、彩色內文、特殊紙張、特殊裝幀或後續單獨重印，重新報價。",
    copies: "數量",

    printUpgradesHeading: "印刷升級項目",
    printUpgradesFootnote: "作者批准最終校樣後提出的修改，可能產生重新製版、重新打樣或重新印刷費用。",

    printingRushHeading: "印刷加急服務",
    printingRushIntro: "印刷周期從最終印刷文件和校樣正式獲批後的下一個工作日起計算，運輸時間另計。",

    logisticsHeading: "作者副本遞送和國際物流",
    logisticsIntro: "作者副本運輸不包含在出版套餐或標準實體出版套餐內。",
    logisticsFormulaLabel: "計價方式：",
    logisticsFormula: "承運商實際運費＋10%物流協調及行政處理費",
    logisticsMinimumLabel: "物流協調及行政處理費最低為：",
    logisticsMinimum: "USD 35／每票貨件",
    logisticsOtherHeading: "其他物流費用",
    logisticsFootnote: "出版社不保證海關放行時間、承運商派送時間或目的地郵政處理時間。特快出版、特快印刷和國際快遞屬於三個獨立服務。",

    rushHeading: "三、加急服務",
    assessmentRushHeading: "稿件優先評估服務",
    assessmentRushFootnote: "評估費僅用於安排優先審查，不保證錄用。評估工作開始後不予退還。",
    level: "服務級別",
    targetTime: "目標時間",
    price: "價格",

    productionRushHeading: "出版制作加急服務",
    packageALabel: "方案 A",
    packageBLabel: "方案 B",
    packageCLabel: "方案 C",
    rushPackageAFootnote: "緊急服務僅適用於作者已經提供完全校對、排版完成且符合出版技術標準的成品文件。",
    rushPackageBFootnote: "方案 B原則上不提供3個工作日緊急製作。",
    rushPackageCFootnote: "雙語、多語種、大型論文集、複雜公式、彩色圖表、多作者統稿及超過約300頁的項目，不承諾固定加急周期。方案 C僅公開優先層級，不公開承諾特快或緊急交付，須單獨評估。",
    rushRulesHeading: "加急服務規則",
    printingRushFootnote: "僅適用於技術合格的最終PDF，不包括運輸時間。",

    additionalHeading: "四、附加服務",
    editingHeading: "額外編輯及製作服務",
    editingFootnote: "「集中修改一輪」是指作者或編輯在一份文件中一次性提交全部修改意見。零散、多次或跨文件修改可以按額外修改輪次或小時費計價。",
    additionalFormatsHeading: "額外版本和數字載體",
    additionalFormatsIntro: "各方案均涵蓋一個書名、一個版次及一種產品格式。平裝本、精裝本、PDF、EPUB、Kindle相容版、修訂版、翻譯版及其他另行發行之版本，均各自需要獨立的ISBN、元數據及製作工作——額外版本及載體不能僅收一個低價「書號費」帶過。除非額外版次或格式已正式核准並確為真實出版用途，否則不會分配額外 ISBN。",
    additionalService: "額外服務",
    fee: "費用",
    institutionalHeading: "機構、書系與論文集出版",
    institutionalIntro: "機構出版物、書系、會議論文集、年度報告、多卷本著作、大型編著文集及贊助之開放獲取圖書，將依專案規模、書稿複雜度、撰稿人數、語言、製作需求、出版格式、發行需求及預期行政工作量另行報價。",
    projectType: "專案類型",
    typicalServices: "一般服務內容",
    distributionHeading: "銷售與發行配置",
    distributionIntro: "標準出版費用不包含商業發行。符合資格之書目可選用發行服務，惟須遵循相關平台之規則、核准流程、地域限制、技術要求及費用。",
    distributionService: "發行服務",
    importantNoticeLabel: "重要須知：",
    importantNoticeBody: "出版或發行費用並不保證圖書銷售、書店上架、圖書館採購、平台核准、索引收錄、排名、書評、引用次數、學術推廣、機構認可或商業表現。",

    isbnHeading: "ISBN 與出版者登記政策",
    isbnIntro: "ISBN 僅分配予符合以下條件之出版物：",
    isbnBody1: "ISBN 不作出售、轉讓、租借、以單獨編號授權，亦不供其他出版者使用。書中顯示之出版者名稱須與該 ISBN 登記之出版者資訊相符。",
    isbnBody2: "出版費用並非政府 ISBN 申請費，而是出版者服務費，涵蓋編輯評估、專案管理、版權審查、書目元數據、ISBN 分配、製作處理、正式出版紀錄、數位典藏及出版後合規協調。",
    isbnNotConstituteIntro: "分配 ISBN 並不代表：",

    paymentHeading: "五、付款及報價規則",
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
  "zh-Hans": {
    eyebrow: "出版服务",
    heading: "图书出版服务与费用",
    intro1: "Panorama Scholarly Books 为学术专著、编著文集、学术教材、研究报告、会议论文集、机构出版物及跨学科研究专书提供学术图书出版与制作服务。",
    intro2: "所有项目均须经过编辑、学术伦理、版权、技术及出版适格性审查。支付任何费用均不代表稿件必然获得出版，也不构成对销售、检索、引用、职称评审、学术认可或商业收益的保证。以下费用自2026年8月1日起生效。",

    coreHeading: "一、核心出版套餐",
    packagesIntro: "各方案均涵盖一个书名、一个版次及一种产品格式。除非另有书面协议，否则印刷、运送、法定送存本及第三方平台费用均不包含在内。",
    recommended: "推荐方案",
    notIncluded: "不包含项目",
    inquireAbout: "咨询",
    standardScopeLabel: "标准范围：",
    standardScopeBody: "方案 B 一般适用于单一主要语言、字数不超过60,000字或约200页完稿、采标准学术格式、含参考文献及一般数量图表的书稿。篇幅较长或较复杂的书稿须采用方案 C 或另行报价。以方案 A 提交的出版用文件须符合出版者的技术及伦理标准；需大幅修正或重建的文件，可能转为方案 B 或 C 处理，或另行报价。",
    comparisonHeading: "方案比较",
    serviceItem: "服务项目",

    bundleHeading: "推荐组合价格",
    bundleIntro: "如作者需要纸质出版，以下组合将核心套餐与“标准实体出版及法定送存套餐”（见第二部分）合并计价：",
    bundleFootnote: "组合价格均不包括20本作者副本寄往作者地址的运输费、税费、支付平台费用及第三方平台费用。",
    bundleName: "组合",
    bundleIncludes: "内容",

    timelineHeading: "出版项目标准周期",
    timelineIntro: "下列周期从以下条件全部满足后的下一个工作日起计算：",
    timelinePackage: "套餐",
    timelineTarget: "标准目标周期",
    timelineFootnote: "上述时间属于目标制作周期，不包括作者修改时间、第三方授权等待时间、政府或公共机构处理时间、印刷时间、国际物流时间以及不可抗力造成的延误。",

    physicalHeading: "二、实体出版及法定送存",
    physicalPackName: "标准实体出版及法定送存套餐",
    physicalPackPrice: "USD 999",
    physicalPackIntro: "适用于不超过200个成品页的普通黑白学术图书，包括：",
    physicalPackNotIncludedLabel: "不包括：",
    pageSurchargeHeading: "页数附加费",
    pageRange: "成品页数",
    surcharge: "附加价格",
    packageTotal: "套餐总价",

    standaloneHeading: "单独印刷及法定送存服务",
    standaloneFootnote: "“法定送存及递交协调”涵盖资料核对、表格准备、包装、香港本地递交、进度跟进及记录归档。香港书刊登记本身不收取政府费用——此项为出版社的服务及协调费用，绝非“登记费”。",

    additionalCopiesHeading: "追加作者副本",
    additionalCopiesIntro: "以下价格适用于与首次印刷同时下单、不超过200页的黑白平装图书。",
    additionalCopiesFootnote: "超过200页、彩色内文、特殊纸张、特殊装帧或后续单独重印，重新报价。",
    copies: "数量",

    printUpgradesHeading: "印刷升级项目",
    printUpgradesFootnote: "作者批准最终校样后提出的修改，可能产生重新制版、重新打样或重新印刷费用。",

    printingRushHeading: "印刷加急服务",
    printingRushIntro: "印刷周期从最终印刷文件和校样正式获批后的下一个工作日起计算，运输时间另计。",

    logisticsHeading: "作者副本递送和国际物流",
    logisticsIntro: "作者副本运输不包含在出版套餐或标准实体出版套餐内。",
    logisticsFormulaLabel: "计价方式：",
    logisticsFormula: "承运商实际运费＋10%物流协调及行政处理费",
    logisticsMinimumLabel: "物流协调及行政处理费最低为：",
    logisticsMinimum: "USD 35/每票货件",
    logisticsOtherHeading: "其他物流费用",
    logisticsFootnote: "出版社不保证海关放行时间、承运商派送时间或目的地邮政处理时间。特快出版、特快印刷和国际快递属于三个独立服务。",

    rushHeading: "三、加急服务",
    assessmentRushHeading: "稿件优先评估服务",
    assessmentRushFootnote: "评估费仅用于安排优先审查，不保证录用。评估工作开始后不予退还。",
    level: "服务级别",
    targetTime: "目标时间",
    price: "价格",

    productionRushHeading: "出版制作加急服务",
    packageALabel: "方案 A",
    packageBLabel: "方案 B",
    packageCLabel: "方案 C",
    rushPackageAFootnote: "紧急服务仅适用于作者已经提供完全校对、排版完成且符合出版技术标准的成品文件。",
    rushPackageBFootnote: "方案 B原则上不提供3个工作日紧急制作。",
    rushPackageCFootnote: "双语、多语种、大型论文集、复杂公式、彩色图表、多作者统稿及超过约300页的项目，不承诺固定加急周期。方案 C仅公开优先层级，不公开承诺特快或紧急交付，须单独评估。",
    rushRulesHeading: "加急服务规则",
    printingRushFootnote: "仅适用于技术合格的最终PDF，不包括运输时间。",

    additionalHeading: "四、附加服务",
    editingHeading: "额外编辑及制作服务",
    editingFootnote: "“集中修改一轮”是指作者或编辑在一份文件中一次性提交全部修改意见。零散、多次或跨文件修改可以按额外修改轮次或小时费计价。",
    additionalFormatsHeading: "额外版本和数字载体",
    additionalFormatsIntro: "各方案均涵盖一个书名、一个版次及一种产品格式。平装本、精装本、PDF、EPUB、Kindle兼容版、修订版、翻译版及其他另行发行的版本，均各自需要独立的ISBN、元数据及制作工作——额外版本及载体不能仅收一个低价“书号费”带过。除非额外版次或格式已正式核准并确为真实出版用途，否则不会分配额外 ISBN。",
    additionalService: "额外服务",
    fee: "费用",
    institutionalHeading: "机构、书系与论文集出版",
    institutionalIntro: "机构出版物、书系、会议论文集、年度报告、多卷本著作、大型编著文集及赞助的开放获取图书，将依项目规模、书稿复杂度、撰稿人数、语言、制作需求、出版格式、发行需求及预期行政工作量另行报价。",
    projectType: "项目类型",
    typicalServices: "一般服务内容",
    distributionHeading: "销售与发行配置",
    distributionIntro: "标准出版费用不包含商业发行。符合资格的书目可选用发行服务，但须遵循相关平台的规则、核准流程、地域限制、技术要求及费用。",
    distributionService: "发行服务",
    importantNoticeLabel: "重要须知：",
    importantNoticeBody: "出版或发行费用并不保证图书销售、书店上架、图书馆采购、平台核准、索引收录、排名、书评、引用次数、学术推广、机构认可或商业表现。",

    isbnHeading: "ISBN 与出版者登记政策",
    isbnIntro: "ISBN 仅分配给符合以下条件的出版物：",
    isbnBody1: "ISBN 不出售、不转让、不租借、不以单独编号授权，也不供其他出版者使用。书中显示的出版者名称须与该 ISBN 登记的出版者信息相符。",
    isbnBody2: "出版费用并非政府 ISBN 申请费，而是出版者服务费，涵盖编辑评估、项目管理、版权审查、书目元数据、ISBN 分配、制作处理、正式出版记录、数字化存档及出版后合规协调。",
    isbnNotConstituteIntro: "分配 ISBN 并不代表：",

    paymentHeading: "五、付款及报价规则",
    cancellationHeading: "取消与退款原则",
    cancellationIntro: "费用反映已进行的编辑、行政、元数据、制作、设计、存档及出版者工作。在工作开始前缴付的费用，可能依已记录的行政成本予以退还。",
    cancellationFootnote: "详细取消与退款条款以签署的出版协议为准。",
    declineHeading: "审查与出版者拒绝的权利",
    declineIntro: "所有提案及书稿均须经编辑、伦理、法律及技术审查。Panorama Scholarly Books 可拒绝或终止具有以下情形的项目：",
    declineFootnote: "付款并不凌驾出版者的编辑独立性或出版标准。出版费用并不代表或保证销售成果、书店上架、图书馆采购、索引收录、排名、引用次数、学术推广、学位认可、机构核准或商业收益。",
    ctaHeading: "申请出版评估",
    ctaBody: "作者、编者及机构可联系 Panorama Scholarly Books，咨询书稿适合度、制作需求、出版时程及可选用的出版方案。提交咨询并不构成接受或建立出版协议。",
    ctaContact: "联系我们",
  },
} as const;

export default function PublishingServicesPageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const L = (b: Bi) => b[locale];

  return (
    <>
      <AnnouncementBanner locale={locale} />
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

          {/* ───────────── 1. Core Packages ───────────── */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              {t.coreHeading}
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

            {/* Package comparison */}
            <h3 className="font-serif text-xl text-[#111111] font-medium mt-12 mb-4">
              {t.comparisonHeading}
            </h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.serviceItem}</Th>
                  {packages.map((pkg) => (
                    <Th key={pkg.id}>{L(pkg.label)} / {pkg.price}</Th>
                  ))}
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

            {/* Recommended print bundles */}
            <h3 className="font-serif text-xl text-[#111111] font-medium mt-12 mb-3">
              {t.bundleHeading}
            </h3>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              {t.bundleIntro}
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.bundleName}</Th>
                  <Th>{t.bundleIncludes}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {printBundles.map((b) => (
                  <tr key={b.name} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top">
                      {b.name}
                    </td>
                    <Td>{L(b.includes)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {b.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3 max-w-[70ch]">
              {t.bundleFootnote}
            </p>

            {/* Standard timeline */}
            <h3 className="font-serif text-xl text-[#111111] font-medium mt-12 mb-3">
              {t.timelineHeading}
            </h3>
            <p className="font-serif text-sm text-[#888888] mb-4 max-w-[70ch]">
              {t.timelineIntro}
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {timelinePreconditions.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.timelinePackage}</Th>
                  <Th>{t.timelineTarget}</Th>
                </tr>
              </thead>
              <tbody>
                {timelineRows.map(([pkg, target]) => (
                  <tr key={pkg.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {L(pkg)}
                    </td>
                    <Td>{L(target)}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3 max-w-[70ch]">
              {t.timelineFootnote}
            </p>
          </section>

          {/* ───────────── 2. Physical Publication & Deposit ───────────── */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.physicalHeading}
            </h2>

            <div className="border border-[#e2e2e2] p-6 md:p-8 mb-3">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg text-[#111111] font-medium">{t.physicalPackName}</h3>
                <span className="font-serif text-xl text-[#111111] font-medium">{t.physicalPackPrice}</span>
              </div>
              <p className="font-serif text-sm text-[#888888] mb-4">{t.physicalPackIntro}</p>
              <ul className="flex flex-col gap-2 mb-4">
                {physicalPackIncludes.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f7f7f7] pb-2 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {L(item)}
                  </li>
                ))}
              </ul>
              <p className="font-serif text-xs text-[#888888]">
                <strong className="text-[#555555] font-medium">{t.physicalPackNotIncludedLabel}</strong> {L(physicalPackNotIncluded)}
              </p>
            </div>

            <h3 className="font-serif text-base text-[#111111] font-medium mt-8 mb-3">{t.pageSurchargeHeading}</h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.pageRange}</Th>
                  <Th>{t.surcharge}</Th>
                  <Th>{t.packageTotal}</Th>
                </tr>
              </thead>
              <tbody>
                {pageSurchargeRows.map(([range, surcharge, total]) => (
                  <tr key={range.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {L(range)}
                    </td>
                    <Td>{L(surcharge)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">
                      {total || L(surcharge)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="font-serif text-base text-[#111111] font-medium mt-10 mb-3">{t.standaloneHeading}</h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.additionalService}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {standaloneServices.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td><span className="text-[#111111]">{L(service)}</span></Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-3 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">{t.standaloneFootnote}</p>
            </div>

            <h3 className="font-serif text-base text-[#111111] font-medium mt-10 mb-3">{t.additionalCopiesHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-4">{t.additionalCopiesIntro}</p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.copies}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {additionalCopyRows.map(([qty, fee]) => (
                  <tr key={qty} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top">{qty}</td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3">{t.additionalCopiesFootnote}</p>

            <h3 className="font-serif text-base text-[#111111] font-medium mt-10 mb-3">{t.printUpgradesHeading}</h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.additionalService}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {printUpgrades.map(([item, fee]) => (
                  <tr key={item.en} className="even:bg-[#fafafa]">
                    <Td><span className="text-[#111111]">{L(item)}</span></Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3">{t.printUpgradesFootnote}</p>

            <h3 className="font-serif text-base text-[#111111] font-medium mt-10 mb-3">{t.logisticsHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-4">{t.logisticsIntro}</p>
            <div className="border border-[#e2e2e2] p-5 mb-4 bg-[#f7f7f7]">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-1">{t.logisticsFormulaLabel}</p>
              <p className="font-serif text-base text-[#111111] mb-3">{t.logisticsFormula}</p>
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-1">{t.logisticsMinimumLabel}</p>
              <p className="font-serif text-base text-[#111111]">{t.logisticsMinimum}</p>
            </div>
            <h4 className="font-serif text-sm text-[#111111] font-medium mb-3">{t.logisticsOtherHeading}</h4>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.additionalService}</Th>
                  <Th>{t.fee}</Th>
                </tr>
              </thead>
              <tbody>
                {logisticsExtraRows.map(([item, fee]) => (
                  <tr key={item.en} className="even:bg-[#fafafa]">
                    <Td><span className="text-[#111111]">{L(item)}</span></Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3 max-w-[70ch]">{t.logisticsFootnote}</p>
          </section>

          {/* ───────────── 3. Rush Tiers ───────────── */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.rushHeading}
            </h2>

            <h3 className="font-serif text-lg text-[#111111] font-medium mb-3">{t.assessmentRushHeading}</h3>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>{t.level}</Th>
                  <Th>{t.targetTime}</Th>
                  <Th>{t.price}</Th>
                </tr>
              </thead>
              <tbody>
                {assessmentTiers.map(([level, time, price]) => (
                  <tr key={level.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">{L(level)}</td>
                    <Td>{L(time)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(price)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3">{t.assessmentRushFootnote}</p>

            <h3 className="font-serif text-lg text-[#111111] font-medium mt-10 mb-3">{t.productionRushHeading}</h3>

            <p className="font-serif text-sm tracking-[0.1em] uppercase text-[#888888] mb-2">{t.packageALabel}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.level}</Th><Th>{t.targetTime}</Th><Th>{t.price}</Th></tr>
              </thead>
              <tbody>
                {rushPackageA.map(([level, time, price]) => (
                  <tr key={level.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">{L(level)}</td>
                    <Td>{L(time)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{price}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-2 mb-8">{t.rushPackageAFootnote}</p>

            <p className="font-serif text-sm tracking-[0.1em] uppercase text-[#888888] mb-2">{t.packageBLabel}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.level}</Th><Th>{t.targetTime}</Th><Th>{t.price}</Th></tr>
              </thead>
              <tbody>
                {rushPackageB.map(([level, time, price]) => (
                  <tr key={level.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">{L(level)}</td>
                    <Td>{L(time)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{price}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-2 mb-8">{t.rushPackageBFootnote}</p>

            <p className="font-serif text-sm tracking-[0.1em] uppercase text-[#888888] mb-2">{t.packageCLabel}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.level}</Th><Th>{t.price}</Th></tr>
              </thead>
              <tbody>
                {rushPackageC.map(([level, price]) => (
                  <tr key={level.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">{L(level)}</td>
                    <Td>{L(price)}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-2">{t.rushPackageCFootnote}</p>

            <h3 className="font-serif text-base text-[#111111] font-medium mt-10 mb-3">{t.rushRulesHeading}</h3>
            <ul className="flex flex-col gap-2 mb-4">
              {rushRules.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>

            <h3 className="font-serif text-lg text-[#111111] font-medium mt-10 mb-3">{t.printingRushHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-4">{t.printingRushIntro}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.level}</Th><Th>{t.targetTime}</Th><Th>{t.fee}</Th></tr>
              </thead>
              <tbody>
                {printingRushRows.map(([level, time, fee]) => (
                  <tr key={level.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">{L(level)}</td>
                    <Td>{L(time)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <ul className="flex flex-col gap-2 mt-4">
              {printingRushNotes.map((item) => (
                <li key={item.en} className="font-serif text-xs text-[#888888] flex gap-3">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* ───────────── 4. Additional Services ───────────── */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.additionalHeading}
            </h2>

            <h3 className="font-serif text-lg text-[#111111] font-medium mb-3">{t.editingHeading}</h3>
            <TableWrapper>
              <thead>
                <tr><Th>{t.additionalService}</Th><Th>{t.fee}</Th></tr>
              </thead>
              <tbody>
                {editingServices.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td><span className="text-[#111111]">{L(service)}</span></Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-3 max-w-[70ch]">{t.editingFootnote}</p>

            <h3 className="font-serif text-lg text-[#111111] font-medium mt-10 mb-3">{t.additionalFormatsHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">{t.additionalFormatsIntro}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.additionalService}</Th><Th>{t.fee}</Th></tr>
              </thead>
              <tbody>
                {additionalFormatServices.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td><span className="text-[#111111]">{L(service)}</span></Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="font-serif text-lg text-[#111111] font-medium mt-10 mb-3">{t.institutionalHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">{t.institutionalIntro}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.projectType}</Th><Th>{t.typicalServices}</Th><Th>{t.fee}</Th></tr>
              </thead>
              <tbody>
                {institutionalRows.map(([type, services, fee]) => (
                  <tr key={type.en} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">{L(type)}</td>
                    <Td>{L(services)}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <h3 className="font-serif text-lg text-[#111111] font-medium mt-10 mb-3">{t.distributionHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">{t.distributionIntro}</p>
            <TableWrapper>
              <thead>
                <tr><Th>{t.distributionService}</Th><Th>{t.fee}</Th></tr>
              </thead>
              <tbody>
                {distributionRows.map(([service, fee]) => (
                  <tr key={service.en} className="even:bg-[#fafafa]">
                    <Td><span className="text-[#111111]">{L(service)}</span></Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top">{L(fee)}</td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                <strong className="text-[#111111] font-medium">{t.importantNoticeLabel}</strong> {t.importantNoticeBody}
              </p>
            </div>

            <h3 className="font-serif text-lg text-[#111111] font-medium mt-10 mb-3">{t.isbnHeading}</h3>
            <p className="font-serif text-sm text-[#888888] mb-4 max-w-[70ch]">{t.isbnIntro}</p>
            <ul className="flex flex-col gap-2 mb-6">
              {isbnRequirements.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mb-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">{t.isbnBody1}</p>
              <p className="font-serif text-sm text-[#555555] leading-relaxed">{t.isbnBody2}</p>
            </div>
            <p className="font-serif text-sm text-[#888888] leading-relaxed max-w-[70ch] mb-2">{t.isbnNotConstituteIntro}</p>
            <ul className="flex flex-col gap-1.5">
              {isbnNotConstitute.map((item) => (
                <li key={item.en} className="font-serif text-sm text-[#888888] flex gap-3">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {L(item)}
                </li>
              ))}
            </ul>
          </section>

          {/* ───────────── 5. Payment & Quotation Rules ───────────── */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.paymentHeading}
            </h2>
            <ul className="flex flex-col gap-2 mb-4">
              {paymentRules.map((item, i) => (
                <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0 tabular-nums text-xs pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  {L(item)}
                </li>
              ))}
            </ul>
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
