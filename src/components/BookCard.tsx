import Link from "next/link";
import type { Book } from "@/data/books";

const toneStyles: Record<string, string> = {
  white: "bg-white border-[#c8c8c8]",
  light: "bg-[#f5f5f5] border-[#c8c8c8]",
  medium: "bg-[#ebebeb] border-[#c8c8c8]",
};

export default function BookCard({ book }: { book: Book }) {
  const credit = book.isEdited
    ? book.editors.join(", ") + (book.editors.length === 1 ? " (Ed.)" : " (Eds.)")
    : book.authors.join(", ");

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group flex flex-col border border-[#e2e2e2] hover:border-[#111111] transition-colors bg-white"
    >
      {/* Cover */}
      <div
        className={`border border-x-0 border-t-0 border-b border-[#e2e2e2] ${toneStyles[book.coverTone]} flex flex-col items-center justify-center aspect-[2/3] px-6 py-8 relative`}
      >
        {book.status === "Forthcoming" && (
          <span className="absolute top-3 right-3 text-[10px] tracking-[0.15em] uppercase font-serif text-[#888888] border border-[#c8c8c8] px-2 py-0.5 bg-white">
            Forthcoming
          </span>
        )}
        <div className="w-full h-full flex flex-col justify-between">
          <div>
            <div className="w-8 h-px bg-[#111111] mb-6" />
            <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-4">
              {book.bookType}
            </p>
            <p className="font-serif text-lg leading-[1.3] text-[#111111] font-medium">
              {book.title}
            </p>
            {book.subtitle && (
              <p className="font-serif text-sm text-[#555555] mt-2 leading-snug italic">
                {book.subtitle}
              </p>
            )}
          </div>
          <div>
            <div className="w-full h-px bg-[#e2e2e2] my-4" />
            <p className="font-serif text-xs text-[#888888]">{credit}</p>
            <p className="font-serif text-xs text-[#888888] mt-0.5">
              {book.publicationYear}
            </p>
          </div>
        </div>
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
