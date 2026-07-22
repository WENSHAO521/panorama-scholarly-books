"use client";

import Link from "next/link";
import type { Book } from "@/data/books";
import BookCoverSVG from "@/components/BookCoverSVG";
import { useLanguage } from "@/context/LanguageContext";
import { bookTypeLabel, licenseLabel, commonLabel, statusLabel } from "@/lib/i18nLabels";

export default function BookCard({ book }: { book: Book }) {
  const { locale } = useLanguage();

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col border border-[#e2e2e2] hover:border-[#111111] transition-colors bg-white"
    >
      {/* Cover */}
      <div className="relative aspect-[2/3] border-b border-[#e2e2e2] overflow-hidden">
        {book.status === "Forthcoming" && (
          <span className="absolute top-3 right-3 z-10 text-[10px] tracking-[0.15em] uppercase font-serif text-[#888888] border border-[#c8c8c8] px-2 py-0.5 bg-white">
            {statusLabel("Forthcoming", locale)}
          </span>
        )}
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

      {/* Card footer */}
      <div className="px-4 pt-3 pb-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[10px] tracking-[0.12em] uppercase font-serif text-[#555555] border border-[#e2e2e2] px-2 py-0.5">
            {bookTypeLabel(book.bookType, locale)}
          </span>
          {book.license === "CC BY-NC-ND 4.0" && (
            <span className="text-[10px] tracking-[0.12em] uppercase font-serif text-[#888888] border border-[#e2e2e2] px-2 py-0.5">
              {licenseLabel("Open Access", locale)}
            </span>
          )}
          {book.license === "Restricted — Not for Sale" && (
            <span className="text-[10px] tracking-[0.12em] uppercase font-serif text-[#888888] border border-[#e2e2e2] px-2 py-0.5">
              {licenseLabel("Not for Sale", locale)}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-serif text-[#aaaaaa] truncate max-w-[70%]">
            {book.isEdited ? book.editors.join(", ") : book.authors.join(", ")}
          </p>
          <span className="text-[11px] font-serif text-[#111111] group-hover:underline underline-offset-2 shrink-0">
            {commonLabel("View →", locale)}
          </span>
        </div>
      </div>
    </Link>
  );
}
