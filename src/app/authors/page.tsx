import type { Metadata } from "next";
import Link from "next/link";
import { getAllAuthors } from "@/data/books";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Authors",
  description:
    "Authors and editors published by Panorama Scholarly Books.",
};

export default function AuthorsPage() {
  const authors = getAllAuthors();

  return (
    <>
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Authors
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Authors &amp; Editors
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            Scholars published under the Panorama Scholarly Books imprint.
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">
          {authors.length === 0 ? (
            <p className="font-serif text-base text-[#888888]">
              Author profiles will appear here as titles are published.
            </p>
          ) : (
            <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
              {authors.map((author) => (
                <Link
                  key={author.slug}
                  href={`/authors/${author.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-[#e2e2e2] py-6 hover:bg-[#f7f7f7] transition-colors"
                >
                  <div>
                    <p className="font-serif text-lg text-[#111111] font-medium group-hover:text-[#555555] transition-colors">
                      {author.name}
                    </p>
                    <p className="font-serif text-xs text-[#888888] mt-1">
                      {author.books.length} {author.books.length === 1 ? "title" : "titles"}
                    </p>
                  </div>
                  <span className="font-serif text-[11px] text-[#111111] shrink-0">View →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
