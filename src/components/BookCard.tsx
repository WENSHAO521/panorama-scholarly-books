import Link from "next/link";
import type { Book } from "@/data/books";
import { bookCredit, bookLangTag } from "@/data/books";
import BookCover from "@/components/BookCover";
import SampleBadge from "@/components/SampleBadge";
import { localeHref, pickLocale, type Locale } from "@/lib/locale";
import { bookTypeLabel, licenseLabel, statusLabel } from "@/lib/i18nLabels";

function Flags({ book, locale }: { book: Book; locale: Locale }) {
  return (
    <>
      {book.status === "Forthcoming" && <span className="tag">{statusLabel("Forthcoming", locale)}</span>}
      {book.license === "CC BY-NC-ND 4.0" && <span className="tag">{licenseLabel("Open Access", locale)}</span>}
      <SampleBadge book={book} />
    </>
  );
}

/** Grid card: cover on a shared baseline, then the bibliographic essentials. */
export default function BookCard({ book, locale }: { book: Book; locale: Locale }) {
  const lang = bookLangTag(book);
  return (
    <Link href={localeHref(`/books/${book.slug}`, locale)} className="group flex flex-col rounded-sm">
      <div className="aspect-[4/5] flex items-end justify-center bg-stone-soft px-[14%] pt-[12%] pb-[9%] transition-colors group-hover:bg-stone">
        <div className="w-full transition-transform duration-200 ease-[var(--ease-quiet)] group-hover:-translate-y-1">
          <BookCover book={book} />
        </div>
      </div>
      <div className="pt-4">
        <p className="meta">
          {bookTypeLabel(book.bookType, locale)} · {book.publicationYear}
        </p>
        <h3 className="font-serif text-[19px] leading-snug text-ink mt-1.5 group-hover:text-forest group-hover:underline underline-offset-4 decoration-1 decoration-line-strong" lang={lang}>
          {book.title}
        </h3>
        <p className="font-sans text-[15px] text-ink-2 mt-1.5" lang={lang}>{bookCredit(book)}</p>
        <div className="flex flex-wrap gap-1.5 mt-3 empty:hidden">
          <Flags book={book} locale={locale} />
        </div>
      </div>
    </Link>
  );
}

/** Wide entry used when only a handful of titles are listed: gives each book
    the room of a catalogue record instead of a sparse grid. */
export function BookEntry({
  book,
  locale,
  headingLevel = 3,
  moreLabel,
}: {
  book: Book;
  locale: Locale;
  headingLevel?: 2 | 3;
  moreLabel: string;
}) {
  const lang = bookLangTag(book);
  const abstract = pickLocale(book.abstract, book.abstractZh, book.abstractZhHans, locale);
  const H = headingLevel === 2 ? "h2" : "h3";
  const href = localeHref(`/books/${book.slug}`, locale);
  return (
    <article className="grid grid-cols-[minmax(0,7.5rem)_1fr] sm:grid-cols-[minmax(0,12rem)_1fr] lg:grid-cols-12 gap-x-6 sm:gap-x-10 lg:gap-x-8 gap-y-5 items-start">
      <Link href={href} className="lg:col-span-3 lg:row-span-2 block rounded-sm" tabIndex={-1} aria-hidden="true">
        <BookCover book={book} />
      </Link>
      <div className="lg:col-span-8 lg:col-start-5 min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <p className="eyebrow">{bookTypeLabel(book.bookType, locale)}</p>
          <Flags book={book} locale={locale} />
        </div>
        <H className="font-serif text-[clamp(1.375rem,1.1rem+1.2vw,2rem)] leading-tight text-ink mt-3" lang={lang}>
          <Link href={href} className="hover:text-forest hover:underline underline-offset-4 decoration-1 decoration-line-strong">
            {book.title}
          </Link>
        </H>
        {book.subtitle && (
          <p className="font-serif italic text-[17px] sm:text-lg text-ink-2 mt-2 leading-snug" lang={lang}>
            {book.subtitle}
          </p>
        )}
        <p className="font-sans text-[15px] text-ink-2 mt-3">
          <span lang={lang}>{bookCredit(book)}</span>
          <span className="text-ink-3"> · {book.publicationYear}</span>
        </p>
      </div>
      <div className="col-span-2 lg:col-span-8 lg:col-start-5 min-w-0">
        <p className="prose-reading line-clamp-4">{abstract}</p>
        <Link href={href} className="link-arrow mt-5">
          {moreLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
