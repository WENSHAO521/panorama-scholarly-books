import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { books, getBookBySlug } from "@/data/books";
import Container from "@/components/Container";
import BookCoverSVG from "@/components/BookCoverSVG";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

const languageCodes: Record<string, string> = {
  English: "en",
  "Chinese (Simplified)": "zh",
};

// PSG Format — Panorama Scholarly Group's house citation style
// (Chicago-style author-date structure with APA-style digital elements)
function invertAuthorName(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length < 2) return name;
  const surname = parts.pop();
  return `${surname}, ${parts.join(" ")}`;
}

function formatPSGAuthorList(names: string[]): string {
  if (names.length === 0) return "";
  if (names.length === 1) return invertAuthorName(names[0]);
  const [first, ...rest] = names;
  const inverted = invertAuthorName(first);
  if (rest.length === 1) return `${inverted}, and ${rest[0]}`;
  return `${inverted}, ${rest.slice(0, -1).join(", ")}, and ${rest[rest.length - 1]}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};

  const citationAuthors = book.isEdited ? book.editors : book.authors;
  const pageUrl = `https://books.panorama-sg.com/books/${book.slug}`;

  return {
    title: book.title,
    description: book.abstract.slice(0, 160),
    other: {
      // Highwire Press tags — read by Google Scholar for book indexing
      citation_title: book.title,
      citation_author: citationAuthors,
      citation_publication_date: String(book.publicationYear),
      citation_publisher: "Panorama Scholarly Group Limited",
      citation_language: languageCodes[book.language] ?? "en",
      ...(/^\d/.test(book.isbn) ? { citation_isbn: book.isbn } : {}),
      citation_abstract_html_url: pageUrl,
      ...(book.doi ? { citation_doi: book.doi } : {}),
      ...(book.subjectArea.length ? { citation_keywords: book.subjectArea } : {}),
    },
  };
}

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  const credit = book.isEdited
    ? book.editors.join(", ") + (book.editors.length === 1 ? " (Ed.)" : " (Eds.)")
    : book.authors.join(", ");

  const citationNames = book.isEdited ? book.editors : book.authors;
  const citationAuthorList =
    formatPSGAuthorList(citationNames) +
    (book.isEdited ? (book.editors.length === 1 ? ", ed." : ", eds.") : "");
  const citationPSG = `${citationAuthorList}. ${book.publicationYear}. ${book.title}${book.subtitle ? `: ${book.subtitle}` : ""}. ${book.placeOfPublication}: Panorama Scholarly Group Limited.${book.doi ? ` https://doi.org/${book.doi}` : ""}`;

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
            Back to Books
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
                ["Publisher", book.publisher],
                ["Place of Publication", book.placeOfPublication],
                ["Year", String(book.publicationYear)],
                ["ISBN", book.isbn],
                ...(book.eisbn ? [["eISBN", book.eisbn]] : []),
                ...(book.doi ? [["DOI", book.doi]] : []),
                ["Language", book.language],
                ["Pages", String(book.pages)],
                ["Format", book.format.join(", ")],
                ["Type", book.bookType],
                ["Status", book.status],
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
                <span className="font-serif text-xs text-[#888888] block mb-1">Subject Area</span>
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
                Request a Copy
              </a>
              {book.license !== "Restricted — Not for Sale" && (
                <>
                  <a
                    href={`mailto:books@panorama-sg.com?subject=Order Inquiry: ${book.title}`}
                    className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-4 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    Order Inquiry
                  </a>
                  <a
                    href={`mailto:books@panorama-sg.com?subject=Institutional Purchase: ${book.title}`}
                    className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#e2e2e2] px-4 py-3 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors"
                  >
                    Institutional Purchase Inquiry
                  </a>
                </>
              )}
              {book.license === "Restricted — Not for Sale" && (
                <p className="font-serif text-xs text-[#888888] text-center mt-1">
                  Not for sale. Restricted, non-commercial circulation only.
                </p>
              )}
              {book.hasSampleChapter && (
                <a
                  href={`mailto:books@panorama-sg.com?subject=Sample Chapter Request: ${book.title}`}
                  className="flex items-center justify-center gap-2 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#e2e2e2] px-4 py-3 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors"
                >
                  Request Sample Chapter
                </a>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2 lg:pl-10">
            {/* Title */}
            {book.status === "Forthcoming" && (
              <span className="inline-block font-serif text-[11px] tracking-[0.15em] uppercase border border-[#c8c8c8] text-[#888888] px-3 py-1 mb-6">
                Forthcoming
              </span>
            )}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-[#111111] font-medium leading-[1.15] mb-3">
              {book.title}
            </h1>
            {book.subtitle && (
              <p className="font-serif text-lg md:text-xl text-[#555555] italic leading-snug mb-6">
                {book.subtitle}
              </p>
            )}
            <p className="font-serif text-base text-[#888888] mb-2">
              {book.isEdited ? "Edited by" : "By"}{" "}
              <span className="text-[#555555]">{credit}</span>
            </p>
            <p className="font-serif text-sm text-[#888888] mb-10">
              {book.publisher}, {book.publicationYear}
            </p>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Abstract */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                Book Description
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed">
                {book.abstract}
              </p>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Table of Contents */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                Table of Contents
              </h2>
              <ol className="flex flex-col gap-2">
                {book.tableOfContents.map((entry, i) => (
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
                {book.isEdited ? "About the Editors" : "About the Author"}
              </h2>
              <div className="flex flex-col gap-6">
                {book.authorBio.map((bio) => (
                  <div key={bio.name}>
                    <p className="font-serif text-base text-[#111111] font-medium mb-2">
                      {bio.name}
                    </p>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed">
                      {bio.bio}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-10" />

            {/* Citation */}
            <section className="mb-10">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">
                How to Cite
              </h2>
              <div className="bg-[#f7f7f7] border border-[#e2e2e2] p-6">
                <p className="font-serif text-xs text-[#888888] mb-2 tracking-wide">
                  PSG Format
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
                Copyright and Licensing
              </h2>
              {book.license === "CC BY-NC-ND 4.0" ? (
                <div className="border border-[#e2e2e2] p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 border border-[#e2e2e2] px-2 py-1">
                      <p className="font-sans text-[10px] font-bold tracking-widest text-[#555555] uppercase">CC</p>
                    </div>
                    <div>
                      <p className="font-serif text-sm text-[#111111] font-medium mb-1">
                        Creative Commons Attribution–NonCommercial–NoDerivatives 4.0 International
                      </p>
                      <p className="font-serif text-xs text-[#888888] tracking-wide">CC BY-NC-ND 4.0 · Open Access</p>
                    </div>
                  </div>
                  <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                    This work is published open access under the Creative Commons CC BY-NC-ND 4.0 licence. You are free to share and redistribute this material in any medium or format for non-commercial purposes, provided you give appropriate credit to the author(s) and publisher, and do not modify or adapt the work.
                  </p>
                  <a
                    href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xs text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
                  >
                    View licence terms ↗
                  </a>
                </div>
              ) : book.license === "Restricted — Not for Sale" ? (
                <div className="border border-[#e2e2e2] p-6">
                  <p className="font-serif text-sm text-[#111111] font-medium mb-3">
                    © {book.publicationYear} {credit}. All rights reserved.
                  </p>
                  <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                    This title is published by Panorama Scholarly Group Limited for restricted, non-commercial circulation only. It is not for sale and is not made available to the general public. Reproduction, distribution, or transmission in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — requires the prior written permission of the publisher.
                  </p>
                  <Link
                    href="/policies/copyright"
                    className="font-serif text-xs text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
                  >
                    Copyright and licensing policy
                  </Link>
                </div>
              ) : (
                <div className="border border-[#e2e2e2] p-6">
                  <p className="font-serif text-sm text-[#111111] font-medium mb-3">
                    © {book.publicationYear} {credit}. All rights reserved.
                  </p>
                  <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                    Published by Panorama Scholarly Group Limited. No part of this publication may be reproduced, stored in a retrieval system, or transmitted in any form or by any means — electronic, mechanical, photocopying, recording, or otherwise — without the prior written permission of the publisher.
                  </p>
                  <Link
                    href="/policies/copyright"
                    className="font-serif text-xs text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
                  >
                    Copyright and licensing policy
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
