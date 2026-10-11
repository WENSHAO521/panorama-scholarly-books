import type { Book } from "@/data/books";
import { isSampleBook } from "@/data/books";

// Shown only when sample fixtures are enabled for testing
// (NEXT_PUBLIC_SHOW_SAMPLE_BOOKS=1), so they can never pass for real titles.
export default function SampleBadge({ book, className = "" }: { book: Book; className?: string }) {
  if (!isSampleBook(book)) return null;
  return (
    <span className={`tag !border-notice !text-notice !bg-surface ${className}`}>
      Sample data — not a real publication
    </span>
  );
}
