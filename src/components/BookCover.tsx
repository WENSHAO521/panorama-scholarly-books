import type { Book } from "@/data/books";
import { bookCredit, bookLangTag, isSampleBook } from "@/data/books";
import BookCoverSVG from "@/components/BookCoverSVG";

interface BookCoverProps {
  book: Book;
  /** Cards/lists already show the title next to the cover, so the image is
      decorative there; the book detail page passes a real alt text. */
  alt?: string;
  eager?: boolean;
  className?: string;
}

// Real covers keep their own aspect ratio (no cropping). Titles without a
// supplied cover image get a typographic placeholder in the house style,
// which states nothing beyond the book's own metadata.
export default function BookCover({ book, alt = "", eager = false, className = "" }: BookCoverProps) {
  if (book.coverImage) {
    const [w, h] = book.coverSize ?? [800, 1200];
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={book.coverImage}
        width={w}
        height={h}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`book-frame block w-full h-auto ${className}`}
      />
    );
  }

  if (isSampleBook(book)) {
    return (
      <div className={`book-frame aspect-[2/3] overflow-hidden [&>svg]:w-full [&>svg]:h-full ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined}>
        <BookCoverSVG {...book} />
      </div>
    );
  }

  return (
    <div
      className={`book-frame aspect-[2/3] bg-brand text-on-brand flex flex-col justify-between p-[9%] ${className}`}
      role={alt ? "img" : undefined}
      aria-label={alt || undefined}
    >
      <div lang={bookLangTag(book)}>
        <span className="block w-8 h-[2px] bg-accent mb-[12%]" aria-hidden="true" />
        <p className="font-serif text-xl leading-tight">{book.title}</p>
        {book.subtitle && <p className="font-serif italic text-on-brand-2 text-sm mt-3 leading-snug">{book.subtitle}</p>}
      </div>
      <div>
        <p className="font-sans text-sm" lang={bookLangTag(book)}>{bookCredit(book)}</p>
        <p className="font-sans text-[10px] tracking-[0.18em] uppercase text-on-brand-2 mt-3">Panorama Scholarly Books</p>
      </div>
    </div>
  );
}
