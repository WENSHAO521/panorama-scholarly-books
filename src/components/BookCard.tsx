import Link from "next/link";
import type { Book } from "@/data/books";
import BookCoverSVG from "@/components/BookCoverSVG";

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col border border-[#e2e2e2] hover:border-[#111111] transition-colors bg-white"
    >
      {/* Cover */}
      <div className="relative aspect-[2/3] border-b border-[#e2e2e2] overflow-hidden">
        {book.status === "Forthcoming" && (
          <span className="absolute top-3 right-3 z-10 text-[10px] tracking-[0.15em] uppercase font-serif text-[#888888] border border-[#c8c8c8] px-2 py-0.5 bg-white">
            Forthcoming
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
        />
      </div>

      {/* Card footer */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {book.subjectArea.slice(0, 2).map((s) => (
            <span
              key={s}
              className="text-[10px] tracking-[0.1em] uppercase font-serif text-[#888888]"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="text-[12px] font-serif text-[#111111] group-hover:underline underline-offset-2">
          View Details
        </span>
      </div>
    </Link>
  );
}
