import type { Locale } from "@/lib/locale";

type BiDict = Record<string, { zhHant: string; zhHans: string }>;

// Fixed-vocabulary strings that repeat across many files (book cards, filter
// tabs, book detail metadata table, home page package cards, etc.) — kept in
// one place so each string is only translated once.

const bookType: BiDict = {
  Monograph: { zhHant: "專著", zhHans: "专著" },
  "Edited Volume": { zhHant: "文集", zhHans: "文集" },
  Textbook: { zhHant: "教材", zhHans: "教材" },
  "Research Report": { zhHant: "研究報告", zhHans: "研究报告" },
  "Conference Proceedings": { zhHant: "會議論文集", zhHans: "会议论文集" },
  "Open Access": { zhHant: "開放獲取", zhHans: "开放获取" },
  All: { zhHant: "全部", zhHans: "全部" },
  Forthcoming: { zhHant: "即將出版", zhHans: "即将出版" },
};

const status: BiDict = {
  Published: { zhHant: "已出版", zhHans: "已出版" },
  Forthcoming: { zhHant: "即將出版", zhHans: "即将出版" },
};

const license: BiDict = {
  "All Rights Reserved": { zhHant: "版權所有", zhHans: "版权所有" },
  "CC BY-NC-ND 4.0": { zhHant: "CC BY-NC-ND 4.0", zhHans: "CC BY-NC-ND 4.0" },
  "Restricted — Not for Sale": { zhHant: "限量流通 — 非賣品", zhHans: "限量流通 — 非卖品" },
  "Not for Sale": { zhHant: "非賣品", zhHans: "非卖品" },
};

const metadataField: BiDict = {
  Publisher: { zhHant: "出版者", zhHans: "出版者" },
  "Place of Publication": { zhHant: "出版地", zhHans: "出版地" },
  Year: { zhHant: "出版年份", zhHans: "出版年份" },
  ISBN: { zhHant: "ISBN", zhHans: "ISBN" },
  eISBN: { zhHant: "電子書 ISBN", zhHans: "电子书 ISBN" },
  DOI: { zhHant: "DOI", zhHans: "DOI" },
  Language: { zhHant: "語言", zhHans: "语言" },
  Pages: { zhHant: "頁數", zhHans: "页数" },
  Format: { zhHant: "格式", zhHans: "格式" },
  Type: { zhHant: "類型", zhHans: "类型" },
  Status: { zhHant: "狀態", zhHans: "状态" },
  "Subject Area": { zhHant: "學科領域", zhHans: "学科领域" },
  "Legal Publisher": { zhHant: "法定出版者", zhHans: "法定出版者" },
  "Publishing Imprint": { zhHant: "出版品牌", zhHans: "出版品牌" },
  "Registered Address": { zhHant: "註冊地址", zhHans: "注册地址" },
  Website: { zhHant: "網站", zhHans: "网站" },
  "Publishing Inquiries": { zhHant: "出版洽詢", zhHans: "出版咨询" },
};

const common: BiDict = {
  "Learn more": { zhHant: "了解更多", zhHans: "了解更多" },
  "Back to Books": { zhHant: "返回書目", zhHans: "返回书目" },
  "Submit Inquiry": { zhHant: "提交詢問", zhHans: "提交咨询" },
  "Browse all books": { zhHant: "瀏覽所有書目", zhHans: "浏览所有书目" },
  "Browse Books": { zhHant: "瀏覽書目", zhHans: "浏览书目" },
  "Contact Us": { zhHant: "聯絡我們", zhHans: "联系我们" },
  "View →": { zhHant: "查看 →", zhHans: "查看 →" },
  By: { zhHant: "作者", zhHans: "作者" },
  "Edited by": { zhHant: "編者", zhHans: "编者" },
  "(Ed.)": { zhHant: "（編）", zhHans: "（编）" },
  "(Eds.)": { zhHant: "（編）", zhHans: "（编）" },
  "Request a Copy": { zhHant: "索取樣書", zhHans: "索取样书" },
  "Order Inquiry": { zhHant: "訂購洽詢", zhHans: "订购咨询" },
  "Institutional Purchase Inquiry": { zhHant: "機構採購洽詢", zhHans: "机构采购咨询" },
  "Request Sample Chapter": { zhHant: "索取樣章", zhHans: "索取样章" },
  "Book Description": { zhHant: "內容簡介", zhHans: "内容简介" },
  "Table of Contents": { zhHant: "目錄", zhHans: "目录" },
  "About the Author": { zhHant: "作者簡介", zhHans: "作者简介" },
  "About the Editors": { zhHant: "編者簡介", zhHans: "编者简介" },
  "How to Cite": { zhHant: "引用格式", zhHans: "引用格式" },
  "Copyright and Licensing": { zhHant: "版權與授權", zhHans: "版权与授权" },
};

function lookup(dict: BiDict, key: string, locale: Locale): string {
  if (locale === "zh-Hant") return dict[key]?.zhHant ?? key;
  if (locale === "zh-Hans") return dict[key]?.zhHans ?? key;
  return key;
}

export const bookTypeLabel = (key: string, locale: Locale) => lookup(bookType, key, locale);
export const statusLabel = (key: string, locale: Locale) => lookup(status, key, locale);
export const licenseLabel = (key: string, locale: Locale) => lookup(license, key, locale);
export const metadataFieldLabel = (key: string, locale: Locale) => lookup(metadataField, key, locale);
export const commonLabel = (key: string, locale: Locale) => lookup(common, key, locale);
