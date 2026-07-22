"use client";

import Link from "next/link";
import Container from "@/components/Container";
import BookCoverSVG from "@/components/BookCoverSVG";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import type { Book } from "@/data/books";
import { slugifyName } from "@/data/books";
import { useLanguage } from "@/context/LanguageContext";
import { pickLocale, pickLocaleList } from "@/lib/locale";
import { bookTypeLabel, statusLabel, metadataFieldLabel, commonLabel } from "@/lib/i18nLabels";

const formatZh: Record<string, string> = {
  Hardcover: "精裝本",
  Paperback: "平裝本",
  "PDF eBook": "PDF 電子書",
  "Open Access": "開放獲取",
  EPUB: "EPUB",
};

const languageZh: Record<string, string> = {
  English: "英文",
  "Chinese (Simplified)": "簡體中文",
};

function formatLabel(key: string, locale: string) {
  if (locale === "zh-Hant" && formatZh[key]) return formatZh[key];
  return key;
}

function languageLabel(key: string, locale: string) {
  if (locale === "zh-Hant" && languageZh[key]) return languageZh[key];
  return key;
}

const copy = {
  en: {
    backToBooks: "Back to Books",
    forthcoming: "Forthcoming",
    notForSale: "Not for sale. Restricted, non-commercial circulation only.",
    requestCopy: "Request a Copy",
    orderInquiry: "Order Inquiry",
    institutionalInquiry: "Institutional Purchase Inquiry",
    requestSample: "Request Sample Chapter",
    bookDescription: "Book Description",
    tableOfContents: "Table of Contents",
    aboutAuthor: "About the Author",
    aboutEditors: "About the Editors",
    howToCite: "How to Cite",
    psgFormat: "PSG Format",
    copyrightLicensing: "Copyright and Licensing",
    ccTitle: "Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International",
    ccSub: "CC BY-NC-ND 4.0 · Open Access",
    ccBody:
      "This work is published open access under the Creative Commons CC BY-NC-ND 4.0 licence. You are free to share and redistribute this material in any medium or format for non-commercial purposes, provided you give appropriate credit to the author(s) and publisher, and do not modify or adapt the work.",
    viewLicence: "View licence terms ↗",
    allRightsReserved: "All rights reserved.",
    restrictedBody:
      "This title is published by Panorama Scholarly Group Limited for restricted, non-commercial circulation only. It is not for sale and is not made available to the general public. Reproduction, distribution, or transmission in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — requires the prior written permission of the publisher.",
    defaultBody:
      "Published by Panorama Scholarly Group Limited. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — without the prior written permission of the publisher.",
    copyrightPolicy: "Copyright and licensing policy",
  },
  "zh-Hant": {
    backToBooks: "返回書目",
    forthcoming: "即將出版",
    notForSale: "非賣品，僅限非商業性限量流通。",
    requestCopy: "索取樣書",
    orderInquiry: "訂購洽詢",
    institutionalInquiry: "機構採購洽詢",
    requestSample: "索取樣章",
    bookDescription: "內容簡介",
    tableOfContents: "目錄",
    aboutAuthor: "作者簡介",
    aboutEditors: "編者簡介",
    howToCite: "引用格式",
    psgFormat: "PSG 格式",
    copyrightLicensing: "版權與授權",
    ccTitle: "創用CC 姓名標示－非商業性－禁止改作 4.0 國際授權",
    ccSub: "CC BY-NC-ND 4.0 · 開放獲取",
    ccBody:
      "本著作依創用CC「姓名標示－非商業性－禁止改作」4.0國際授權條款以開放獲取方式出版。您可自由於任何媒介或格式分享及重製本著作，作非商業性用途，惟須註明作者與出版者，並不得修改或改作本著作。",
    viewLicence: "查看授權條款 ↗",
    allRightsReserved: "版權所有。",
    restrictedBody:
      "本著作由 Panorama Scholarly Group Limited 出版，僅供限量、非商業性流通，非賣品，不對外公開發售。任何形式或方式之重製、散布或傳播——包括電子、機械、影印、錄音或其他方式——均須事先取得出版者書面許可。",
    defaultBody:
      "本著作由 Panorama Scholarly Group Limited 出版。未經出版者事先書面許可，不得以任何形式或方式（包括電子、機械、影印、錄音或其他方式）重製、存入檢索系統或傳播本著作之任何部分。",
    copyrightPolicy: "版權與授權政策",
  },
} as const;

export default function BookDetailClient({
  book,
  credit,
  citationNames,
  citationPSG,
}: {
  book: Book;
  credit: string;
  citationNames: string[];
  citationPSG: string;
}) {
  const { locale } = useLanguage();
  const t = copy[locale];

  const title = book.title;
  const subtitle = book.subtitle;
  const abstract = pickLocale(book.abstract, book.abstractZh, locale);
  const toc = pickLocaleList(book.tableOfContents, book.tableOfContentsZh, locale);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[#e2e2e2] py-4">
        <Container>
          <Link
            href="/books"
            className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={14} weight="light" />
            {t.backToBooks}
          </Link>
        </Container>
      </div>

      {/* Main */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12 lg:py-16">
          {/* Left: Book cover + metadata */}
          <div className="lg:col-span-1 lg:border-r border-[#e2e2e2] lg:pr-10 mb-12 lg:mb-0">
            {/* Book cover */}
            <div className="mb-8 max-w-[280px] border border-[#c8c8c8] overflow-hidden">
              <BookCoverSVG
                slug={book.slug}
                title={book.title}
                subtitle={book.subtitle}
                authors={book.authors}
                editors={book.editors}
                isEdited={book.isEdited}
                bookType={book.bookType}
                status={book.status}
                coverImage={book.coverImage}
              />
            </div>

            {/* Metadata table */}
            <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
              {[
                [metadataFieldLabel("Publisher", locale), book.publisher],
                [metadataFieldLabel("Place of Publication", locale), book.placeOfPublication],
                [metadataFieldLabel("Year", locale), String(book.publicationYear)],
                [metadataFieldLabel("ISBN", locale), book.isbn],
                ...(book.eisbn ? [[metadataFieldLabel("eISBN", locale), book.eisbn]] : []),
                ...(book.doi ? [[metadataFieldLabel("DOI", locale), book.doi]] : []),
                [metadataFieldLabel("Language", locale), languageLabel(book.language, locale)],
                [metadataFieldLabel("Pages", locale), String(book.pages)],
                [metadataFieldLabel("Format", locale), book.format.map((f) => formatLabel(f, locale)).join(", ")],
                [metadataFieldLabel("Type", locale), bookTypeLabel(book.bookType, locale)],
                [metadataFieldLabel("Status", locale), statusLabel(book.status, locale)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b border-[#e2e2e2] py-3"
                >
                  <span className="font-serif text-xs text-[#888888]">{label}</span>
                  <span className="font-serif text-xs text-[#555555]">{value}</span>
                </div>
              ))}
              <div className="py-3 border-b border-[#e2e2e2]">
                <span className="font-serif text-xs text-[#888888] block mb-1">
                  {metadataFieldLabel("Subject Area", locale)}
                </span>
                <div className="flex flex-wrap gap-1">
                  {book.subjectArea.map((s) => (
                    <span key={s} className="font-serif text-xs text-[#555555] border border-[#e2e2e2] px-2 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 mt-8">
              <a
                href={`mailto:books@panorama-sg.com?subject=Request a Copy: ${book.title}`}
                className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-4 py-3 hover:bg-transparent hover:text-[#111111] transition-colors"
              >
                <EnvelopeSimple size={14} weight="light" />
                {t.requestCopy}
              </a>
              {book.license !== "Restricted — Not for Sale" && (
                <>
                  <a
                    href={`mailto:books@panorama-sg.com?subject=Order Inquiry: ${book.title}`}
                    className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-4 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    {t.orderInquiry}
                  </a>
                  <a
                    href={`mailto:books@panorama-sg.com?subject=Institutional Purchase: ${book.title}`}
                    className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#e2e2e2] px-4 py-3 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors"
                  >
                    {t.institutionalInquiry}
                  </a>
                </>
              )}
              {book.license === "Restricted — Not for Sale" && (
                <p className="font-serif text-xs text-[#888888] text-center mt-1">
                  {t.notForSale}
                </p>
              )}
              {book.hasSampleChapter && (
                <a
                  href={`mailto:books@panorama-sg.com?subject=Sample Chapter Request: ${book.title}`}
                  className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#e2e2e2] px-4 py-3 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors"
                >
                  {t.requestSample}
                </a>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2 lg:pl-10">
            {/* Title */}
            {book.status === "Forthcoming" && (
              <span className="inline-block font-serif text-[11px] tracking-[0.15em] uppercase border border-[#c8c8c8] text-[#888888] px-3 py-1 mb-6">
                {t.forthcoming}
              </span>
            )}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-[#111111] font-medium leading-[1.15] mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="font-serif text-lg md:text-xl text-[#555555] italic leading-snug mb-6">
                {subtitle}
              </p>
            )}
            <p className="font-serif text-base text-[#888888] mb-2">
              {book.isEdited ? commonLabel("Edited by", locale) : commonLabel("By", locale)}{" "}
              <span className="text-[#555555]">
                {book.citationEligible ? (
                  <>
                    {citationNames.map((name, i) => (
                      <span key={name}>
                        {i > 0 && ", "}
                        {/* Plain <a>, not next/link: client-side transitions
                            into a unicode author slug 404 on static hosting
                            (Cloudflare Pages), even though the exported HTML
                            for that route is correct. A full navigation
                            sidesteps it. */}
                        <a
                          href={`/authors/${slugifyName(name)}/`}
                          className="hover:text-[#111111] underline underline-offset-2 decoration-[#c8c8c8] transition-colors"
                        >
                          {name}
                        </a>
                      </span>
                    ))}
                    {book.isEdited && commonLabel(book.editors.length === 1 ? "(Ed.)" : "(Eds.)", locale)}
                  </>
                ) : (
                  credit
                )}
              </span>
            </p>
            <p className="font-serif text-sm text-[#888888] mb-10">
              {book.publisher}, {book.publicationYear}
            </p>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Abstract */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                {t.bookDescription}
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed">
                {abstract}
              </p>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Table of Contents */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                {t.tableOfContents}
              </h2>
              <ol className="flex flex-col gap-2">
                {toc.map((entry, i) => (
                  <li
                    key={i}
                    className="font-serif text-sm text-[#555555] border-b border-[#f0f0f0] pb-2 last:border-0"
                  >
                    {entry}
                  </li>
                ))}
              </ol>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Author Bio */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-6">
                {book.isEdited ? t.aboutEditors : t.aboutAuthor}
              </h2>
              <div className="flex flex-col gap-6">
                {book.authorBio.map((bio) => (
                  <div key={bio.name}>
                    <p className="font-serif text-base text-[#111111] font-medium mb-2">
                      {bio.name}
                    </p>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed">
                      {pickLocale(bio.bio, bio.bioZh, locale)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Citation */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                {t.howToCite}
              </h2>
              <div className="bg-[#f7f7f7] border border-[#e2e2e2] p-6">
                <p className="font-serif text-xs text-[#888888] mb-2 tracking-wide">
                  {t.psgFormat}
                </p>
                <p className="font-serif text-sm text-[#555555] leading-relaxed">
                  {citationPSG}
                </p>
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Copyright */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                {t.copyrightLicensing}
              </h2>
              {book.license === "CC BY-NC-ND 4.0" ? (
                <div className="border border-[#e2e2e2] p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 border border-[#e2e2e2] px-2 py-1">
                      <p className="font-sans text-[10px] font-bold tracking-widest text-[#555555] uppercase">CC</p>
                    </div>
                    <div>
                      <p className="font-serif text-sm text-[#111111] font-medium mb-1">
                        {t.ccTitle}
                      </p>
                      <p className="font-serif text-xs text-[#888888] tracking-wide">{t.ccSub}</p>
                    </div>
                  </div>
                  <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                    {t.ccBody}
                  </p>
                  <a
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xs text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
                  >
                    {t.viewLicence}
                  </a>
                </div>
              ) : book.license === "Restricted — Not for Sale" ? (
                <div className="border border-[#e2e2e2] p-6">
                  <p className="font-serif text-sm text-[#111111] font-medium mb-3">
                    © {book.publicationYear} {credit}. {t.allRightsReserved}
                  </p>
                  <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                    {t.restrictedBody}
                  </p>
                  <Link
                    href="/policies/copyright"
                    className="font-serif text-xs text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
                  >
                    {t.copyrightPolicy}
                  </Link>
                </div>
              ) : (
                <div className="border border-[#e2e2e2] p-6">
                  <p className="font-serif text-sm text-[#111111] font-medium mb-3">
                    © {book.publicationYear} {credit}. {t.allRightsReserved}
                  </p>
                  <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                    {t.defaultBody}
                  </p>
                  <Link
                    href="/policies/copyright"
                    className="font-serif text-xs text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
                  >
                    {t.copyrightPolicy}
                  </Link>
                </div>
              )}
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
