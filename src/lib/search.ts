import type { Book } from "@/data/books";

// Client-side catalogue search. The catalogue is a static, build-time list,
// so a plain in-memory match is instant and needs no index or server.

function haystack(book: Book): { primary: string; secondary: string } {
  const primary = [book.title, book.subtitle ?? "", ...book.authors, ...book.editors]
    .join(" ")
    .toLowerCase();
  const secondary = [
    ...book.subjectArea,
    book.isbn,
    book.eisbn ?? "",
    book.doi ?? "",
    book.bookType,
    book.abstract,
    book.abstractZh ?? "",
    book.abstractZhHans ?? "",
  ]
    .join(" ")
    .toLowerCase();
  return { primary, secondary };
}

/** Returns matching books, title/author matches ranked first. */
export function searchBooks(books: Book[], query: string): Book[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (terms.length === 0) return books;
  const normalise = (t: string) => t.replace(/-/g, "");
  return books
    .map((book) => {
      const { primary, secondary } = haystack(book);
      const secondaryCompact = secondary.replace(/-/g, "");
      let score = 0;
      for (const term of terms) {
        if (primary.includes(term)) score += 2;
        else if (secondary.includes(term) || secondaryCompact.includes(normalise(term))) score += 1;
        else return { book, score: 0 };
      }
      return { book, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.book);
}
