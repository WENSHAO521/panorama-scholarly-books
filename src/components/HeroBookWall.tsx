"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { Book } from "@/data/books";
import BookCoverSVG from "@/components/BookCoverSVG";

export default function HeroBookWall({ books }: { books: Book[] }) {
  const reduce = useReducedMotion();
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (reduce) { setEntered(true); return; }
    // last book delay: row=3 col=2 → 0.05 + 3*0.09 + 2*0.03 = 0.38s + 0.5s duration ≈ 0.88s
    const t = setTimeout(() => setEntered(true), 1000);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="grid grid-cols-3 gap-[7px]">
      {books.map((book, i) => {
        const row = Math.floor(i / 3);
        const col = i % 3;
        const delay = 0.05 + row * 0.09 + col * 0.03;

        return (
          <motion.div
            key={book.slug}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              entered || reduce
                ? { type: "spring", stiffness: 300, damping: 26 }
                : { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }
            }
            whileHover={
              !entered || reduce
                ? {}
                : {
                    y: -5,
                    scale: 1.04,
                    zIndex: 10,
                    transition: { type: "spring", stiffness: 320, damping: 24 },
                  }
            }
            style={{ position: "relative" }}
          >
            <Link href={`/books/${book.slug}`} className="block">
              <div className="border border-[#d4d4d4] overflow-hidden hover:border-[#888888] transition-colors duration-200">
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
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
