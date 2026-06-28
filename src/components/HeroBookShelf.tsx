"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import type { Book } from "@/data/books";
import BookCoverSVG from "@/components/BookCoverSVG";

export default function HeroBookShelf({ books }: { books: Book[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [interactable, setInteractable] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setInteractable(true);
      return;
    }
    // last book entrance: delay 0.15 + 2×0.18 = 0.51s, duration 0.8s → ~1.35s total
    const t = setTimeout(() => setInteractable(true), 1400);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <div className="flex items-end justify-center gap-5">
      {books.map((book, i) => {
        const isLifted = interactable && hovered === i;
        const isDimmed = interactable && hovered !== null && hovered !== i;

        return (
          <motion.div
            key={book.slug}
            className={`shrink-0 ${i === 1 ? "w-[148px]" : "w-[112px]"}`}
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{
              opacity: isDimmed ? 0.42 : 1,
              y: isLifted ? -18 : isDimmed ? 6 : 0,
              scale: isLifted ? 1.04 : isDimmed ? 0.97 : 1,
            }}
            transition={
              interactable
                ? { type: "spring", stiffness: 300, damping: 26 }
                : {
                    opacity: {
                      duration: 0.8,
                      delay: 0.15 + i * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    y: {
                      duration: 0.8,
                      delay: 0.15 + i * 0.18,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    scale: { duration: 0.4 },
                  }
            }
            onHoverStart={() => interactable && setHovered(i)}
            onHoverEnd={() => interactable && setHovered(null)}
          >
            <Link href={`/books/${book.slug}`} className="block">
              <div
                className={`border overflow-hidden transition-colors duration-200 ${
                  isLifted ? "border-[#888888]" : "border-[#c8c8c8]"
                }`}
              >
                <BookCoverSVG
                  slug={book.slug}
                  title={book.title}
                  subtitle={book.subtitle}
                  authors={book.authors}
                  editors={book.editors}
                  isEdited={book.isEdited}
                  bookType={book.bookType}
                  status={book.status}
                />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
