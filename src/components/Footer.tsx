"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const quickLinks = [
  { href: "/books", label: { en: "Books", "zh-Hant": "書目" }, external: false },
  { href: "/book-series", label: { en: "Book Series", "zh-Hant": "書系" }, external: false },
  { href: "/for-authors", label: { en: "For Authors", "zh-Hant": "作者專區" }, external: false },
  {
    href: "/publishing-services",
    label: { en: "Publishing Services", "zh-Hant": "出版服務" },
    external: false,
  },
  { href: "/distribution", label: { en: "Distribution", "zh-Hant": "發行資訊" }, external: false },
  { href: "/about", label: { en: "About", "zh-Hant": "關於我們" }, external: false },
  { href: "/contact", label: { en: "Contact", "zh-Hant": "聯絡我們" }, external: false },
  {
    href: "https://posi.panorama-sg.com",
    label: { en: "POSI · Scholarly Index", "zh-Hant": "POSI · 學術索引" },
    external: true,
  },
];

const policyLinks = [
  { href: "/policies/publishing-ethics", label: { en: "Publishing Ethics", "zh-Hant": "出版倫理" } },
  {
    href: "/policies/copyright",
    label: { en: "Copyright and Licensing", "zh-Hant": "版權與授權" },
  },
  { href: "/policies/open-access", label: { en: "Open Access Books", "zh-Hant": "開放獲取圖書" } },
  { href: "/policies/ai-use-policy", label: { en: "AI Use Policy", "zh-Hant": "人工智能使用政策" } },
  { href: "/policies/plagiarism", label: { en: "Plagiarism Policy", "zh-Hant": "抄襲政策" } },
  { href: "/policies/authorship", label: { en: "Authorship Policy", "zh-Hant": "著作權歸屬政策" } },
  { href: "/policies", label: { en: "All Policies", "zh-Hant": "所有政策" } },
];

const copy = {
  en: {
    imprint: "Academic Book Publishing Imprint",
    address: (
      <>
        Room 1508, 15/F., Office Tower Two,
        <br />
        Grand Plaza, 625 Nathan Road,
        <br />
        Mong Kok, Kowloon, Hong Kong
      </>
    ),
    quickLinksHeading: "Quick Links",
    policiesHeading: "Policies",
    contactHeading: "Contact",
    generalInquiries: "General Inquiries",
    publishingInquiries: "Publishing Inquiries",
    submitInquiry: "Submit Inquiry",
    rights: "All rights reserved.",
    tagline: "Panorama Scholarly Books is the academic book publishing imprint of Panorama Scholarly Group Limited.",
  },
  "zh-Hant": {
    imprint: "學術圖書出版品牌",
    address: <>香港旺角彌敦道625號雅蘭中心辦公樓二期15樓1508室</>,
    quickLinksHeading: "快速連結",
    policiesHeading: "政策",
    contactHeading: "聯絡方式",
    generalInquiries: "一般查詢",
    publishingInquiries: "出版洽詢",
    submitInquiry: "提交詢問",
    rights: "版權所有。",
    tagline: "Panorama Scholarly Books 是 Panorama Scholarly Group Limited 旗下的學術圖書出版品牌。",
  },
} as const;

export default function Footer() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e2e2] bg-white mt-24">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="https://panorama-sg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-5 group w-fit"
              aria-label="Panorama Scholarly Group"
            >
              <svg width="32" height="36" viewBox="95 90 195 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g transform="translate(100, 100)">
                  <rect x="0" y="0" width="30" height="200" fill="#000000"/>
                  <path d="M30 0 H120 C150 0, 150 70, 120 70 H30 Z" fill="#E30613"/>
                  <path d="M0 100 H120 V130 H30 V150 H120 V200 H0 V170 H90 V150 H0 Z" fill="#000000"/>
                  <path d="M150 200 H50 V170 H150 V50 H180 V200 Z" fill="#000000"/>
                  <rect x="160" y="10" width="30" height="30" fill="#E30613"/>
                </g>
              </svg>
              <span className="font-serif text-[11px] tracking-[0.14em] uppercase text-[#888888] group-hover:text-[#555555] transition-colors">
                Panorama Scholarly Group
              </span>
            </a>
            <p className="font-serif text-xl font-semibold text-[#111111] mb-1">
              Panorama Scholarly Books
            </p>
            <p className="font-serif text-sm text-[#888888] mb-6 leading-relaxed">
              {t.imprint}
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-1">
              {t.address}
            </p>
            <a
              href="mailto:books@panorama-sg.com"
              className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
            >
              books@panorama-sg.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
              {t.quickLinksHeading}
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      {link.label[locale]} ↗
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      {link.label[locale]}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
              {t.policiesHeading}
            </p>
            <ul className="flex flex-col gap-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                  >
                    {link.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
              {t.contactHeading}
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-serif text-xs text-[#888888] mb-0.5">{t.generalInquiries}</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <div>
                <p className="font-serif text-xs text-[#888888] mb-0.5">{t.publishingInquiries}</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <div className="mt-2">
                <Link
                  href="/contact"
                  className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-4 py-2 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors inline-block"
                >
                  {t.submitInquiry}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e2e2e2] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-serif text-xs text-[#888888]">
            &copy; {year} Panorama Scholarly Group Limited. {t.rights}
          </p>
          <p className="font-serif text-xs text-[#888888]">
            {t.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
