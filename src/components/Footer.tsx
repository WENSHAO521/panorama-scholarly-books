"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { getLocaleFromPathname, localeHref, type Locale } from "@/lib/locale";

type L = Record<Locale, string>;
type FooterLink = { href: string; label: L; external?: boolean; hardNav?: boolean };

const columns: { heading: L; links: FooterLink[] }[] = [
  {
    heading: { en: "Books", "zh-Hant": "書目", "zh-Hans": "书目" },
    links: [
      { href: "/books", label: { en: "Catalogue", "zh-Hant": "全部書目", "zh-Hans": "全部书目" } },
      { href: "/book-series", label: { en: "Book Series", "zh-Hant": "書系", "zh-Hans": "书系" } },
      { href: "/authors", label: { en: "Authors & Editors", "zh-Hant": "作者與編者", "zh-Hans": "作者与编者" }, hardNav: true },
      { href: "/distribution", label: { en: "Distribution", "zh-Hant": "發行資訊", "zh-Hans": "发行信息" } },
    ],
  },
  {
    heading: { en: "Publishing", "zh-Hant": "出版", "zh-Hans": "出版" },
    links: [
      { href: "/for-authors", label: { en: "Publish With Us", "zh-Hant": "與我們出版", "zh-Hans": "与我们出版" } },
      { href: "/publishing-services", label: { en: "Publishing Services & Fees", "zh-Hant": "出版服務與費用", "zh-Hans": "出版服务与费用" } },
      { href: "/contact", label: { en: "Submit an Inquiry", "zh-Hant": "提交詢問", "zh-Hans": "提交咨询" } },
    ],
  },
  {
    heading: { en: "Policies", "zh-Hant": "出版政策", "zh-Hans": "出版政策" },
    links: [
      { href: "/policies/publishing-ethics", label: { en: "Publishing Ethics", "zh-Hant": "出版倫理", "zh-Hans": "出版伦理" } },
      { href: "/policies/copyright", label: { en: "Copyright & Licensing", "zh-Hant": "版權與授權", "zh-Hans": "版权与授权" } },
      { href: "/policies/open-access", label: { en: "Open Access", "zh-Hant": "開放獲取", "zh-Hans": "开放获取" } },
      { href: "/policies/ai-use-policy", label: { en: "AI Use", "zh-Hant": "人工智能使用", "zh-Hans": "人工智能使用" } },
      { href: "/policies/plagiarism", label: { en: "Plagiarism", "zh-Hant": "抄襲", "zh-Hans": "抄袭" } },
      { href: "/policies/authorship", label: { en: "Authorship", "zh-Hant": "著作權歸屬", "zh-Hans": "著作权归属" } },
    ],
  },
  {
    heading: { en: "Institution", "zh-Hant": "機構", "zh-Hans": "机构" },
    links: [
      { href: "/about", label: { en: "About the Imprint", "zh-Hant": "關於本出版品牌", "zh-Hans": "关于本出版品牌" } },
      { href: "/contact", label: { en: "Contact", "zh-Hant": "聯絡我們", "zh-Hans": "联系我们" } },
      { href: "https://panorama-sg.com", label: { en: "Panorama Scholarly Group", "zh-Hant": "Panorama Scholarly Group", "zh-Hans": "Panorama Scholarly Group" }, external: true },
      { href: "https://posi.panorama-sg.com", label: { en: "POSI · Scholarly Index", "zh-Hant": "POSI · 學術索引", "zh-Hans": "POSI · 学术索引" }, external: true },
    ],
  },
];

const copy = {
  en: {
    statement: "The academic book publishing imprint of Panorama Scholarly Group Limited.",
    address: "Room 1508, 15/F, Office Tower Two, Grand Plaza, 625 Nathan Road, Mong Kok, Kowloon, Hong Kong",
    addressLabel: "Registered address",
    email: "Books department",
    rights: "All rights reserved.",
    legal: "Panorama Scholarly Group Limited is the legal entity responsible for publishing agreements, ISBN use, and publication under the Panorama Scholarly Books imprint.",
  },
  "zh-Hant": {
    statement: "Panorama Scholarly Group Limited 旗下的學術圖書出版品牌。",
    address: "香港九龍旺角彌敦道625號雅蘭中心辦公樓二期15樓1508室",
    addressLabel: "註冊地址",
    email: "圖書部門",
    rights: "版權所有。",
    legal: "Panorama Scholarly Group Limited 為負責出版協議、ISBN 使用及以 Panorama Scholarly Books 品牌出版之法定實體。",
  },
  "zh-Hans": {
    statement: "Panorama Scholarly Group Limited 旗下的学术图书出版品牌。",
    address: "香港九龙旺角弥敦道625号雅兰中心办公楼二期15楼1508室",
    addressLabel: "注册地址",
    email: "图书部门",
    rights: "版权所有。",
    legal: "Panorama Scholarly Group Limited 为负责出版协议、ISBN 使用及以 Panorama Scholarly Books 品牌出版的法定实体。",
  },
} as const;

const linkCls = "inline-flex items-center gap-1 py-1 font-sans text-[15px] text-on-footer-2 hover:text-on-footer hover:underline underline-offset-4 decoration-footer-accent";

export default function Footer() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const t = copy[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-on-footer mt-24 lg:mt-32">
      <div className="site-container pt-16 pb-10 lg:pt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <p className="font-serif text-[22px] font-semibold leading-tight">Panorama Scholarly Books</p>
            <span className="rule-accent my-5" aria-hidden="true" />
            <p className="font-serif text-[17px] text-on-footer-2 leading-relaxed max-w-[34ch]">{t.statement}</p>
            <dl className="mt-8 space-y-4 font-sans text-[15px]">
              <div>
                <dt className="text-[12px] tracking-[0.12em] uppercase text-on-footer-2">{t.email}</dt>
                <dd className="mt-1">
                  <a href="mailto:books@panorama-sg.com" className="hover:underline underline-offset-4 decoration-footer-accent">
                    books@panorama-sg.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] tracking-[0.12em] uppercase text-on-footer-2">{t.addressLabel}</dt>
                <dd className="mt-1 text-on-footer-2 leading-relaxed max-w-[36ch]">{t.address}</dd>
              </div>
            </dl>
          </div>

          {columns.map((col) => (
            <nav key={col.heading.en} aria-label={col.heading[locale]} className="lg:col-span-2">
              <p className="font-sans text-[12px] font-semibold tracking-[0.14em] uppercase text-footer-accent mb-4">
                {col.heading[locale]}
              </p>
              <ul className="space-y-1">
                {col.links.map((link) => (
                  <li key={link.href + link.label.en}>
                    {link.external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                        {link.label[locale]}
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </a>
                    ) : link.hardNav ? (
                      <a href={`${localeHref(link.href, locale)}/`} className={linkCls}>
                        {link.label[locale]}
                      </a>
                    ) : (
                      <Link href={localeHref(link.href, locale)} className={linkCls}>
                        {link.label[locale]}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-footer-line flex flex-col md:flex-row md:items-start md:justify-between gap-3 font-sans text-[13px] text-on-footer-2">
          <p>
            &copy; {year} Panorama Scholarly Group Limited. {t.rights}
          </p>
          <p className="max-w-[70ch] md:text-right">{t.legal}</p>
        </div>
      </div>
    </footer>
  );
}
