import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { books, getBookBySlug } from "@/data/books";
import Container from "@/components/Container";
import { ArrowLeft, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export async function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return {};
  return {
    title: book.title,
    description: book.abstract.slice(0, 160),
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

  const citationAPA = book.isEdited
    ? `${book.editors.map((e) => e.split(" ").reverse().join(", ")).join(", ")} (Eds.). (${book.publicationYear}). ${book.title}${book.subtitle ? `: ${book.subtitle}` : ""}. Panorama Scholarly Group Ltd.${book.doi ? ` https://doi.org/${book.doi}` : ""}`
    : `${book.authors.map((a) => a.split(" ").reverse().join(", ")).join(", ")}. (${book.publicationYear}). ${book.title}${book.subtitle ? `: ${book.subtitle}` : ""}. Panorama Scholarly Group Ltd.${book.doi ? ` https://doi.org/${book.doi}` : ""}`;

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
            {/* Typographic cover */}
            <div className="border border-[#c8c8c8] bg-white p-8 aspect-[2/3] flex flex-col justify-between mb-8 max-w-[280px]">
              <div>
                <div className="w-8 h-px bg-[#111111] mb-6" />
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                  {book.bookType}
                </p>
                <p className="font-serif text-xl leading-[1.25] text-[#111111] font-medium mb-3">
                  {book.title}
                </p>
                {book.subtitle && (
                  <p className="font-serif text-sm italic text-[#555555] leading-snug">
                    {book.subtitle}
                  </p>
                )}
              </div>
              <div>
                <div className="w-full h-px bg-[#e2e2e2] mb-4" />
                <p className="font-serif text-xs text-[#888888]">{credit}</p>
                <p className="font-serif text-xs text-[#888888] mt-1">
                  Panorama Scholarly Group Ltd, {book.publicationYear}
                </p>
              </div>
            </div>

            {/* Metadata table */}
            <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
              {[
                ["Publisher", book.publisher],
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
                  APA (7th edition)
                </p>
                <p className="font-serif text-sm text-[#555555] leading-relaxed">
                  {citationAPA}
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
}
