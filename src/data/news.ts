import type { Locale } from "@/lib/locale";

type L = Record<Locale, string>;

export interface NewsItem {
  id: string;
  kind: "publication" | "notice" | "call";
  /** ISO date if the exact day is known; otherwise a year ("2026") or omitted for ongoing items. */
  date?: string;
  title: L;
  summary: L;
  href: string;
}

// Newest first. Only real, verifiable announcements belong here.
export const news: NewsItem[] = [
  {
    id: "2026-08-fee-update",
    kind: "notice",
    date: "2026-08-01",
    title: {
      en: "Updated book publishing fees take effect",
      "zh-Hant": "圖書出版費用更新生效",
      "zh-Hans": "图书出版费用更新生效",
    },
    summary: {
      en: "Revised fees reflect the expanded scope of editorial screening, rights verification, metadata management and archiving now included in each package.",
      "zh-Hant": "調整後的費用反映各方案現已涵蓋更廣泛的編輯審查、版權查核、元數據管理及數碼存檔服務。",
      "zh-Hans": "调整后的费用反映各方案现已涵盖更广泛的编辑审查、版权核查、元数据管理及数字化存档服务。",
    },
    href: "/publishing-services",
  },
  {
    id: "2026-chan-buddhism",
    kind: "publication",
    date: "2026",
    title: {
      en: "Published: Essays on Chan Buddhism and the Sinicization of Buddhism",
      "zh-Hant": "新書出版：《禪宗與佛教中國化論集》",
      "zh-Hans": "新书出版：《禅宗与佛教中国化论集》",
    },
    summary: {
      en: "A collection of more than sixteen essays by Shi Yanhan written between 2016 and 2026.",
      "zh-Hant": "釋延晗法師2016年至2026年間所撰十六餘篇論文之結集。",
      "zh-Hans": "释延晗法师2016年至2026年间所撰十六余篇论文的结集。",
    },
    href: "/books/chan-buddhism-sinicization-collected-essays-cn",
  },
  {
    id: "call-for-proposals",
    kind: "call",
    title: {
      en: "Book series: call for proposals",
      "zh-Hant": "各書系現正徵稿",
      "zh-Hans": "各书系现正征稿",
    },
    summary: {
      en: "All Panorama book series are currently accepting proposals. The scope and accepted book types of each series are set out on the series page.",
      "zh-Hant": "Panorama 各書系目前均接受出版計劃書，各書系之學科範圍及收錄圖書類型詳見書系頁面。",
      "zh-Hans": "Panorama 各书系目前均接受出版计划书，各书系的学科范围及收录图书类型详见书系页面。",
    },
    href: "/book-series",
  },
];

const KIND: Record<NewsItem["kind"], L> = {
  publication: { en: "New publication", "zh-Hant": "新書出版", "zh-Hans": "新书出版" },
  notice: { en: "Notice", "zh-Hant": "公告", "zh-Hans": "公告" },
  call: { en: "Call for proposals", "zh-Hant": "徵稿", "zh-Hans": "征稿" },
};

export function newsKindLabel(kind: NewsItem["kind"], locale: Locale) {
  return KIND[kind][locale];
}

const ONGOING: L = { en: "Ongoing", "zh-Hant": "長期有效", "zh-Hans": "长期有效" };

export function formatNewsDate(date: string | undefined, locale: Locale): string {
  if (!date) return ONGOING[locale];
  if (/^\d{4}$/.test(date)) return locale === "en" ? date : `${date}年`;
  const d = new Date(`${date}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === "en" ? "en-GB" : locale, {
    year: "numeric",
    month: locale === "en" ? "long" : "numeric",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}
