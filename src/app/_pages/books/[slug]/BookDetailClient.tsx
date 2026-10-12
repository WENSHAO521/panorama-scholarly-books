"use client";

import Link from "next/link";
import Container from "@/components/Container";
import BookCover from "@/components/BookCover";
import BookCard from "@/components/BookCard";
import CiteBlock from "@/components/CiteBlock";
import Monogram from "@/components/Monogram";
import SampleBadge from "@/components/SampleBadge";
import { ArrowLeft, DownloadSimple, EnvelopeSimple, Quotes } from "@phosphor-icons/react/dist/ssr";
import type { Book } from "@/data/books";
import { slugifyName, bookLangTag, getRelatedBooks, nameRomanizations } from "@/data/books";
import { pickLocale, pickLocaleList, localeHref, type Locale } from "@/lib/locale";
import { bookTypeLabel, statusLabel, metadataFieldLabel, commonLabel, licenseLabel } from "@/lib/i18nLabels";
import { apaCitation, bibtexCitation } from "@/lib/citation";

const formatLabels: Record<string, { zhHant: string; zhHans: string }> = {
  Hardcover: { zhHant: "精裝本", zhHans: "精装本" },
  Paperback: { zhHant: "平裝本", zhHans: "平装本" },
  "PDF eBook": { zhHant: "PDF 電子書", zhHans: "PDF 电子书" },
  "Open Access": { zhHant: "開放獲取", zhHans: "开放获取" },
  EPUB: { zhHant: "EPUB", zhHans: "EPUB" },
};

const languageLabels: Record<string, { zhHant: string; zhHans: string }> = {
  English: { zhHant: "英文", zhHans: "英文" },
  "Chinese (Simplified)": { zhHant: "簡體中文", zhHans: "简体中文" },
};

function formatLabel(key: string, locale: Locale) {
  if (locale === "zh-Hant") return formatLabels[key]?.zhHant ?? key;
  if (locale === "zh-Hans") return formatLabels[key]?.zhHans ?? key;
  return key;
}

function languageLabel(key: string, locale: Locale) {
  if (locale === "zh-Hant") return languageLabels[key]?.zhHant ?? key;
  if (locale === "zh-Hans") return languageLabels[key]?.zhHans ?? key;
  return key;
}

const copy = {
  en: {
    books: "Books",
    breadcrumb: "Breadcrumb",
    onThisPage: "On this page",
    description: "Description",
    publicationDetails: "Publication Details",
    citeThisBook: "Cite This Book",
    related: "Related Publications",
    accessHeading: "Formats & access",
    restrictedAccess: "Not for sale. This title circulates on a restricted, non-commercial basis; copies may be requested from the Books department.",
    openAccessNote: "Open access under CC BY-NC-ND 4.0.",
    rightsNote: "Available through order and institutional inquiries.",
    downloadPdf: "Download PDF",
    downloadEpub: "Download EPUB",
    readMore: "Read the full description",
    published: "Published",
    and: "and",
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
    viewLicence: "View licence terms",
    allRightsReserved: "All rights reserved.",
    restrictedBody:
      "This title is published by Panorama Scholarly Group Limited for restricted, non-commercial circulation only. It is not for sale and is not made available to the general public. Reproduction, distribution, or transmission in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — requires the prior written permission of the publisher.",
    defaultBody:
      "Published by Panorama Scholarly Group Limited. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — without the prior written permission of the publisher.",
    copyrightPolicy: "Copyright and licensing policy",
  },
  "zh-Hant": {
    books: "書目",
    breadcrumb: "導覽路徑",
    onThisPage: "本頁內容",
    description: "內容簡介",
    publicationDetails: "出版資料",
    citeThisBook: "引用本書",
    related: "相關出版品",
    accessHeading: "版本與取得方式",
    restrictedAccess: "非賣品。本書僅作限量、非商業性流通，可向圖書部門來信索取。",
    openAccessNote: "依 CC BY-NC-ND 4.0 授權開放獲取。",
    rightsNote: "可透過訂購洽詢或機構採購洽詢取得。",
    downloadPdf: "下載 PDF",
    downloadEpub: "下載 EPUB",
    readMore: "閱讀完整簡介",
    published: "出版",
    and: "及",
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
    viewLicence: "查看授權條款",
    allRightsReserved: "版權所有。",
    restrictedBody:
      "本著作由 Panorama Scholarly Group Limited 出版，僅供限量、非商業性流通，非賣品，不對外公開發售。任何形式或方式之重製、散布或傳播——包括電子、機械、影印、錄音或其他方式——均須事先取得出版者書面許可。",
    defaultBody:
      "本著作由 Panorama Scholarly Group Limited 出版。未經出版者事先書面許可，不得以任何形式或方式（包括電子、機械、影印、錄音或其他方式）重製、存入檢索系統或傳播本著作之任何部分。",
    copyrightPolicy: "版權與授權政策",
  },
  "zh-Hans": {
    books: "书目",
    breadcrumb: "导航路径",
    onThisPage: "本页内容",
    description: "内容简介",
    publicationDetails: "出版信息",
    citeThisBook: "引用本书",
    related: "相关出版物",
    accessHeading: "版本与获取方式",
    restrictedAccess: "非卖品。本书仅作限量、非商业性流通，可向图书部门来信索取。",
    openAccessNote: "依据 CC BY-NC-ND 4.0 许可开放获取。",
    rightsNote: "可通过订购咨询或机构采购咨询获取。",
    downloadPdf: "下载 PDF",
    downloadEpub: "下载 EPUB",
    readMore: "阅读完整简介",
    published: "出版",
    and: "及",
    backToBooks: "返回书目",
    forthcoming: "即将出版",
    notForSale: "非卖品，仅限非商业性限量流通。",
    requestCopy: "索取样书",
    orderInquiry: "订购咨询",
    institutionalInquiry: "机构采购咨询",
    requestSample: "索取样章",
    bookDescription: "内容简介",
    tableOfContents: "目录",
    aboutAuthor: "作者简介",
    aboutEditors: "编者简介",
    howToCite: "引用格式",
    psgFormat: "PSG 格式",
    copyrightLicensing: "版权与授权",
    ccTitle: "知识共享 署名-非商业性使用-禁止演绎 4.0 国际许可协议",
    ccSub: "CC BY-NC-ND 4.0 · 开放获取",
    ccBody:
      "本作品依据知识共享\"署名-非商业性使用-禁止演绎\"4.0国际许可协议以开放获取方式出版。您可自由在任何媒介或格式下分享和复制本作品，用于非商业性目的，但须注明作者与出版者，且不得修改或演绎本作品。",
    viewLicence: "查看许可条款",
    allRightsReserved: "版权所有。",
    restrictedBody:
      "本作品由 Panorama Scholarly Group Limited 出版，仅供限量、非商业性流通，非卖品，不对外公开发售。任何形式或方式的复制、散布或传播——包括电子、机械、影印、录音或其他方式——均须事先取得出版者书面许可。",
    defaultBody:
      "本作品由 Panorama Scholarly Group Limited 出版。未经出版者事先书面许可，不得以任何形式或方式（包括电子、机械、影印、录音或其他方式）复制、存入检索系统或传播本作品的任何部分。",
    copyrightPolicy: "版权与授权政策",
  },
} as const;

function firstSentences(text: string, max = 280): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const end = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("。"));
  return end > 80 ? text.slice(0, end + 1) : `${cut.trimEnd()}…`;
}

const sections = ["description", "contents", "contributors", "details", "cite", "related"] as const;
type SectionId = (typeof sections)[number];

export default function BookDetailClient({
  book,
  credit,
  citationPSG,
  locale,
}: {
  book: Book;
  credit: string;
  citationNames: string[];
  citationPSG: string;
  locale: Locale;
}) {
  const t = copy[locale];
  const lang = bookLangTag(book);
  const abstract = pickLocale(book.abstract, book.abstractZh, book.abstractZhHans, locale);
  const toc = pickLocaleList(book.tableOfContents, book.tableOfContentsZh, book.tableOfContentsZhHans, locale);
  const related = getRelatedBooks(book);
  const isRestricted = book.license === "Restricted — Not for Sale";
  const isOpenAccess = book.license === "CC BY-NC-ND 4.0";
  const mail = (subject: string) => `mailto:books@panorama-sg.com?subject=${encodeURIComponent(`${subject}: ${book.title}`)}`;

  const sectionLabel: Record<SectionId, string> = {
    description: t.description,
    contents: t.tableOfContents,
    contributors: book.isEdited ? t.aboutEditors : t.aboutAuthor,
    details: t.publicationDetails,
    cite: t.citeThisBook,
    related: t.related,
  };
  const visibleSections = sections.filter(
    (id) => (id !== "contents" || toc.length > 0) && (id !== "contributors" || book.authorBio.length > 0) && (id !== "related" || related.length > 0)
  );

  const keyFacts: [string, React.ReactNode][] = [
    [t.published, `${book.publicationYear}`],
    [metadataFieldLabel("ISBN", locale), <span key="isbn" className="tabular-nums">{book.isbn}</span>],
    ...(book.eisbn ? [[metadataFieldLabel("eISBN", locale), <span key="eisbn" className="tabular-nums">{book.eisbn}</span>] as [string, React.ReactNode]] : []),
    ...(book.doi
      ? [[metadataFieldLabel("DOI", locale), <a key="doi" href={`https://doi.org/${book.doi}`} className="link break-all">{book.doi}</a>] as [string, React.ReactNode]]
      : []),
    [metadataFieldLabel("Pages", locale), `${book.pages}`],
    [metadataFieldLabel("Language", locale), languageLabel(book.language, locale)],
  ];

  const fullDetails: [string, React.ReactNode][] = [
    [metadataFieldLabel("Publisher", locale), book.publisher],
    [metadataFieldLabel("Place of Publication", locale), book.placeOfPublication],
    [metadataFieldLabel("Year", locale), `${book.publicationYear}`],
    ...keyFacts.slice(1),
    [metadataFieldLabel("Format", locale), book.format.map((f) => formatLabel(f, locale)).join(", ")],
    [metadataFieldLabel("Type", locale), bookTypeLabel(book.bookType, locale)],
    [metadataFieldLabel("Status", locale), statusLabel(book.status, locale)],
    [metadataFieldLabel("Subject Area", locale), book.subjectArea.join(" · ")],
  ];

  const contributorNames = (book.isEdited ? book.editors : book.authors).map((name) => ({
    name,
    latin: locale === "en" ? nameRomanizations[name] : undefined,
  }));

  return (
    <>
      {/* Breadcrumb */}
      <Container>
        <nav aria-label={t.breadcrumb} className="pt-6 lg:pt-8">
          <ol className="flex items-center gap-2 font-sans text-[14px] text-ink-3 min-w-0">
            <li>
              <Link href={localeHref("/books", locale)} className="inline-flex items-center gap-1.5 hover:text-brand hover:underline underline-offset-4">
                <ArrowLeft size={14} aria-hidden="true" />
                {t.books}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="truncate text-ink-2" aria-current="page" lang={lang}>{book.title}</li>
          </ol>
        </nav>
      </Container>

      {/* ── Overview ─────────────────────────────────────────────────── */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 lg:gap-x-12 gap-y-10 pt-8 pb-16 lg:pt-12 lg:pb-24 border-b border-line">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="max-w-[300px] sm:max-w-[340px] mx-auto md:mx-0 md:max-w-none">
              <BookCover book={book} alt={`${locale === "en" ? "Cover of" : ""} ${book.title}`.trim()} eager />
            </div>

            {/* Formats & access — reflects the book's real licence. */}
            <div className="mt-8 border-t border-line pt-5">
              <h2 className="eyebrow !text-ink-2 mb-3">{t.accessHeading}</h2>
              <ul className="flex flex-wrap gap-1.5 mb-3">
                {book.format.map((f) => (
                  <li key={f} className="tag">{formatLabel(f, locale)}</li>
                ))}
              </ul>
              <p className="meta">
                {isRestricted ? t.restrictedAccess : isOpenAccess ? t.openAccessNote : t.rightsNote}
              </p>
              {(book.pdfUrl || book.epubUrl) && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {book.pdfUrl && (
                    <a href={book.pdfUrl} download className="btn btn-secondary btn-sm">
                      <DownloadSimple size={16} aria-hidden="true" /> {t.downloadPdf}
                    </a>
                  )}
                  {book.epubUrl && (
                    <a href={book.epubUrl} download className="btn btn-secondary btn-sm">
                      <DownloadSimple size={16} aria-hidden="true" /> {t.downloadEpub}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <p className="eyebrow">{bookTypeLabel(book.bookType, locale)}</p>
              {book.status === "Forthcoming" && <span className="tag">{t.forthcoming}</span>}
              {isOpenAccess && <span className="tag">{licenseLabel("Open Access", locale)}</span>}
              {isRestricted && <span className="tag">{licenseLabel("Not for Sale", locale)}</span>}
              <SampleBadge book={book} />
            </div>

            <h1 className="type-h1 mt-4" lang={lang}>{book.title}</h1>
            {book.subtitle && (
              <p className="font-serif italic text-[clamp(1.125rem,1rem+0.6vw,1.5rem)] leading-snug text-ink-2 mt-3" lang={lang}>
                {book.subtitle}
              </p>
            )}
            {locale === "en" && book.titleTranslation && (
              <p className="font-serif text-[17px] text-ink-3 mt-3">[{book.titleTranslation}]</p>
            )}

            <p className="font-sans text-[16px] text-ink-2 mt-6">
              <span className="text-ink-3">{book.isEdited ? commonLabel("Edited by", locale) : commonLabel("By", locale)}</span>{" "}
              {contributorNames.map(({ name, latin }, i) => (
                <span key={name}>
                  {i > 0 && (i === contributorNames.length - 1 ? ` ${t.and} ` : ", ")}
                  {book.citationEligible ? (
                    // Plain <a>, not next/link: client-side transitions into a
                    // unicode author slug 404 on static hosting.
                    <a href={`${localeHref(`/authors/${slugifyName(name)}`, locale)}/`} className="link font-semibold">
                      <span lang={lang}>{name}</span>
                      {latin && <span className="font-normal"> ({latin})</span>}
                    </a>
                  ) : (
                    <span className="font-semibold">{name}</span>
                  )}
                </span>
              ))}
              {!book.citationEligible && contributorNames.length === 0 && credit}
            </p>

            <ul className="flex flex-wrap gap-1.5 mt-5" aria-label={metadataFieldLabel("Subject Area", locale)}>
              {book.subjectArea.map((s) => (
                <li key={s} className="tag !bg-transparent">{s}</li>
              ))}
            </ul>

            <p className="lede mt-8 max-w-[60ch]" lang={locale === "en" ? "en" : undefined}>
              {firstSentences(abstract)}
            </p>
            {abstract.length > 280 && (
              <a href="#description" className="link-arrow mt-3">
                {t.readMore} <span aria-hidden="true">↓</span>
              </a>
            )}

            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 mt-10 pt-6 border-t border-line">
              {keyFacts.map(([label, value]) => (
                <div key={label} className="min-w-0">
                  <dt className="meta">{label}</dt>
                  <dd className="font-sans text-[16px] text-ink mt-0.5 break-words">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-10">
              {book.pdfUrl ? (
                <a href={book.pdfUrl} download className="btn btn-primary">
                  <DownloadSimple size={16} aria-hidden="true" /> {t.downloadPdf}
                </a>
              ) : (
                <a href={mail("Request a Copy")} className="btn btn-primary">
                  <EnvelopeSimple size={16} aria-hidden="true" /> {t.requestCopy}
                </a>
              )}
              <a href="#cite" className="btn btn-secondary">
                <Quotes size={16} aria-hidden="true" /> {t.citeThisBook}
              </a>
              {book.hasSampleChapter && (
                <a href={mail("Sample Chapter Request")} className="btn btn-quiet">{t.requestSample}</a>
              )}
              {!isRestricted && (
                <a href={mail("Order Inquiry")} className="btn btn-quiet">{t.orderInquiry}</a>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* ── Sections ─────────────────────────────────────────────────── */}
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 pt-10 lg:pt-16">
          <aside className="lg:col-span-3">
            <nav aria-label={t.onThisPage} className="lg:sticky lg:top-28 mb-10 lg:mb-0">
              <p className="eyebrow !text-ink-3 mb-3">{t.onThisPage}</p>
              <ul className="flex lg:flex-col gap-x-2 gap-y-0.5 overflow-x-auto no-scrollbar -mx-1 px-1 pb-2 lg:pb-0 lg:border-l lg:border-line">
                {visibleSections.map((id) => (
                  <li key={id} className="shrink-0">
                    <a
                      href={`#${id}`}
                      className="block whitespace-nowrap lg:whitespace-normal px-3 py-2 lg:py-1.5 lg:-ml-px lg:border-l-2 border-transparent font-sans text-[15px] text-ink-2 hover:text-brand hover:border-brand rounded-full lg:rounded-none bg-stone-soft lg:bg-transparent"
                    >
                      {sectionLabel[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 space-y-16 lg:space-y-20">
            <section id="description" aria-labelledby="h-description">
              <h2 id="h-description" className="type-h2 mb-6">{t.description}</h2>
              <div className="prose-reading">
                <p>{abstract}</p>
              </div>
            </section>

            {toc.length > 0 && (
              <section id="contents" aria-labelledby="h-contents">
                <h2 id="h-contents" className="type-h2 mb-6">{t.tableOfContents}</h2>
                <ol className="border-t border-line" lang={locale === "en" ? "en" : undefined}>
                  {toc.map((entry, i) => {
                    const isPart = /^(Part\s|第[一二三四五六七八九十]+部分)/.test(entry);
                    return (
                      <li
                        key={i}
                        className={`grid grid-cols-[2.25rem_1fr] gap-3 py-3 border-b border-line-soft ${
                          isPart ? "pt-6 font-semibold text-ink" : "text-ink-2"
                        }`}
                      >
                        <span className="font-sans text-[13px] tabular-nums text-ink-3 pt-1">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-serif text-[16.5px] leading-snug">{entry}</span>
                      </li>
                    );
                  })}
                </ol>
              </section>
            )}

            {book.authorBio.length > 0 && (
              <section id="contributors" aria-labelledby="h-contributors">
                <h2 id="h-contributors" className="type-h2 mb-6">{sectionLabel.contributors}</h2>
                <div className="space-y-8">
                  {book.authorBio.map((bio) => (
                    <div key={bio.name} className="grid grid-cols-[3.5rem_1fr] gap-5">
                      <Monogram name={bio.name} />
                      <div>
                        <p className="type-h3" lang={lang}>
                          {bio.name}
                          {locale === "en" && nameRomanizations[bio.name] && (
                            <span className="font-normal text-ink-3"> ({nameRomanizations[bio.name]})</span>
                          )}
                        </p>
                        <p className="prose-reading mt-2">{pickLocale(bio.bio, bio.bioZh, bio.bioZhHans, locale)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="details" aria-labelledby="h-details">
              <h2 id="h-details" className="type-h2 mb-6">{t.publicationDetails}</h2>
              <dl className="border-t border-line">
                {fullDetails.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-0.5 py-3 border-b border-line-soft">
                    <dt className="meta">{label}</dt>
                    <dd className="font-sans text-[16px] text-ink break-words">{value}</dd>
                  </div>
                ))}
              </dl>

              <h3 className="type-h3 mt-10 mb-4">{t.copyrightLicensing}</h3>
              <div className="border-l-2 border-accent pl-5 prose-reading !text-[16px]">
                {isOpenAccess ? (
                  <>
                    <p className="font-semibold text-ink">{t.ccTitle}</p>
                    <p className="meta">{t.ccSub}</p>
                    <p>{t.ccBody}</p>
                    <p>
                      <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer" className="link">
                        {t.viewLicence}
                      </a>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-ink">
                      © {book.publicationYear} <span lang={lang}>{credit}</span>. {t.allRightsReserved}
                    </p>
                    <p>{isRestricted ? t.restrictedBody : t.defaultBody}</p>
                    <p>
                      <Link href={localeHref("/policies/copyright", locale)} className="link">{t.copyrightPolicy}</Link>
                    </p>
                  </>
                )}
              </div>
            </section>

            <section id="cite" aria-labelledby="h-cite">
              <h2 id="h-cite" className="type-h2 mb-6">{t.citeThisBook}</h2>
              <CiteBlock
                locale={locale}
                formats={[
                  { id: "psg", label: t.psgFormat, text: citationPSG },
                  { id: "apa", label: "APA 7", text: apaCitation(book) },
                  { id: "bibtex", label: "BibTeX", text: bibtexCitation(book), mono: true },
                ]}
              />
            </section>

            {related.length > 0 && (
              <section id="related" aria-labelledby="h-related">
                <h2 id="h-related" className="type-h2 mb-8">{t.related}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
                  {related.map((b) => (
                    <BookCard key={b.slug} book={b} locale={locale} />
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
