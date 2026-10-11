import type { Locale } from "@/lib/locale";

type L = Record<Locale, string>;

export interface NavItem {
  href: string;
  label: L;
  /** Other routes that should mark this item as the current section. */
  match?: string[];
  /** Routes added after the first deploy must use a full navigation (see Nav). */
  hardNav?: boolean;
}

// Primary information architecture: five sections, everything else is
// reachable from within them and from the footer.
export const primaryNav: NavItem[] = [
  { href: "/books", label: { en: "Books", "zh-Hant": "書目", "zh-Hans": "书目" } },
  { href: "/book-series", label: { en: "Series", "zh-Hant": "書系", "zh-Hans": "书系" } },
  { href: "/authors", label: { en: "Authors", "zh-Hant": "作者", "zh-Hans": "作者" }, hardNav: true },
  {
    href: "/for-authors",
    label: { en: "Publish With Us", "zh-Hant": "與我們出版", "zh-Hans": "与我们出版" },
    match: ["/publishing-services", "/distribution"],
  },
  {
    href: "/about",
    label: { en: "About", "zh-Hant": "關於我們", "zh-Hans": "关于我们" },
    match: ["/policies", "/contact"],
  },
];

export const secondaryNav: NavItem[] = [
  { href: "/publishing-services", label: { en: "Publishing Services", "zh-Hant": "出版服務", "zh-Hans": "出版服务" } },
  { href: "/distribution", label: { en: "Distribution", "zh-Hant": "發行資訊", "zh-Hans": "发行信息" } },
  { href: "/policies", label: { en: "Policies", "zh-Hant": "出版政策", "zh-Hans": "出版政策" } },
  { href: "/contact", label: { en: "Contact", "zh-Hant": "聯絡我們", "zh-Hans": "联系我们" } },
];

export function isActive(item: NavItem, path: string): boolean {
  const routes = [item.href, ...(item.match ?? [])];
  return routes.some((r) => path === r || path.startsWith(`${r}/`));
}
