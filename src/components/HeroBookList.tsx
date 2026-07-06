"use client";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { Book } from "@/data/books";
import BookCoverSVG from "@/components/BookCoverSVG";

export default function HeroBookList({ books }: { books: Book[] }) {
  const reduce = useReducedMotion();
  const display = books.slice(0, 5);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-baseline justify-between mb-4">
        <p className="font-serif text-[8px] tracking-[0.28em] uppercase text-[#aaaaaa]">
          Recent Publications
        </p>
        <p className="font-serif text-[9px] text-[#cccccc]">
          {books.length} titles
        </p>
      </div>

      <div className="divide-y divide-[#eeeeee] flex-1">
        {display.map((book, i) => {
          const credit = book.isEdited
            ? `Ed. ${book.editors.join(" & ")}`
            : book.authors.join(", ");
          return (
            <motion.div
              key={book.slug}
              initial={reduce ? false : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.1 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/books/${book.slug}`}
                className="flex gap-4 py-4 -mx-2 px-2 group hover:bg-[#fafafa] transition-colors duration-150"
              >
                <div className="shrink-0 w-[72px] border border-[#e8e8e8] overflow-hidden group-hover:border-[#cccccc] transition-colors duration-200">
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
                <div className="flex flex-col justify-center min-w-0 gap-1">
                  <p className="font-serif text-[11.5px] text-[#111111] leading-[1.32] line-clamp-2 group-hover:text-[#333333] transition-colors">
                    {book.title}
                  </p>
                  <p className="font-serif text-[10px] text-[#888888] truncate">
                    {credit}
                  </p>
                  <p className="font-serif text-[8.5px] text-[#c0c0c0] tracking-[0.08em] uppercase">
                    {book.bookType}
                    {book.status === "Forthcoming" ? " · Forthcoming" : ` · ${book.publicationYear}`}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="pt-4 border-t border-[#eeeeee]">
        <Link
          href="/books"
          className="font-serif text-[10px] text-[#999999] hover:text-[#111111] transition-colors group inline-flex items-center gap-1"
        >
          Browse all {books.length} titles
          <span className="transition-transform group-hover:translate-x-0.5 inline-block">→</span>
        </Link>
      </div>
    </div>
  );
}
