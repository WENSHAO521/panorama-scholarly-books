import type { Locale } from "@/context/LanguageContext";

type Dict = Record<string, string>;

// Fixed-vocabulary strings that repeat across many files (book cards, filter
// tabs, book detail metadata table, home page package cards, etc.) — kept in
// one place so each string is only translated once.

const bookTypeZh: Dict = {
  Monograph: "專著",
  "Edited Volume": "文集",
  Textbook: "教材",
  "Research Report": "研究報告",
  "Conference Proceedings": "會議論文集",
  "Open Access": "開放獲取",
  All: "全部",
  Forthcoming: "即將出版",
};

const statusZh: Dict = {
  Published: "已出版",
  Forthcoming: "即將出版",
};

const licenseZh: Dict = {
  "All Rights Reserved": "版權所有",
  "CC BY-NC-ND 4.0": "CC BY-NC-ND 4.0",
  "Restricted — Not for Sale": "限量流通 — 非賣品",
  "Not for Sale": "非賣品",
};

const metadataFieldZh: Dict = {
  Publisher: "出版者",
  "Place of Publication": "出版地",
  Year: "出版年份",
  ISBN: "ISBN",
  eISBN: "電子書 ISBN",
  DOI: "DOI",
  Language: "語言",
  Pages: "頁數",
  Format: "格式",
  Type: "類型",
  Status: "狀態",
  "Subject Area": "學科領域",
  "Legal Publisher": "法定出版者",
  "Publishing Imprint": "出版品牌",
  "Registered Address": "註冊地址",
  Website: "網站",
  "Publishing Inquiries": "出版洽詢",
};

const commonZh: Dict = {
  "Learn more": "了解更多",
  "Back to Books": "返回書目",
  "Submit Inquiry": "提交詢問",
  "Browse all books": "瀏覽所有書目",
  "Browse Books": "瀏覽書目",
  "Contact Us": "聯絡我們",
  "View →": "查看 →",
  By: "作者",
  "Edited by": "編者",
  "(Ed.)": "（編）",
  "(Eds.)": "（編）",
  "Request a Copy": "索取樣書",
  "Order Inquiry": "訂購洽詢",
  "Institutional Purchase Inquiry": "機構採購洽詢",
  "Request Sample Chapter": "索取樣章",
  "Book Description": "內容簡介",
  "Table of Contents": "目錄",
  "About the Author": "作者簡介",
  "About the Editors": "編者簡介",
  "How to Cite": "引用格式",
  "Copyright and Licensing": "版權與授權",
};

function lookup(dict: Dict, key: string, locale: Locale): string {
  if (locale === "zh-Hant" && dict[key]) return dict[key];
  return key;
}

export const bookTypeLabel = (key: string, locale: Locale) => lookup(bookTypeZh, key, locale);
export const statusLabel = (key: string, locale: Locale) => lookup(statusZh, key, locale);
export const licenseLabel = (key: string, locale: Locale) => lookup(licenseZh, key, locale);
export const metadataFieldLabel = (key: string, locale: Locale) => lookup(metadataFieldZh, key, locale);
export const commonLabel = (key: string, locale: Locale) => lookup(commonZh, key, locale);
