"use client";

import { useState } from "react";
import { books } from "@/data/books";
import type { BookType } from "@/data/books";
import BookCard from "@/components/BookCard";
import Container from "@/components/Container";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

type FilterTab = "All" | BookType | "Open Access" | "Forthcoming";

const tabs: FilterTab[] = [
  "All",
  "Monograph",
  "Edited Volume",
  "Textbook",
  "Research Report",
  "Conference Proceedings",
  "Open Access",
  "Forthcoming",
];

export default function BooksPageClient() {
  const [active, setActive] = useState<FilterTab>("All");
  const [query, setQuery] = useState("");

  const filtered = (() => {
    const byTab = (() => {
      if (active === "All") return books;
      if (active === "Forthcoming") return books.filter((b) => b.status === "Forthcoming");
      if (active === "Open Access") return books.filter((b) => b.license === "CC BY-NC-ND 4.0");
      return books.filter((b) => b.bookType === active);
    })();

    const q = query.trim().toLowerCase();
    if (!q) return byTab;
    return byTab.filter((b) =>
      [b.title, b.subtitle ?? "", ...b.authors, ...b.editors, ...b.subjectArea]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  })();

  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Catalogue
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Books
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch] mb-8">
            All published and forthcoming titles from Panorama Scholarly Books.
          </p>
          <div className="relative max-w-[420px]">
            <MagnifyingGlass
              size={16}
              weight="light"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#888888] pointer-events-none"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author, or subject"
              aria-label="Search books"
              className="w-full font-serif text-sm text-[#111111] border border-[#e2e2e2] pl-11 pr-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#aaaaaa]"
            />
          </div>
        </Container>
      </section>

      {/* Filter tabs */}
      <section className="border-b border-[#e2e2e2] bg-[#f7f7f7]">
        <Container>
          <div className="flex flex-wrap gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`font-serif text-sm px-5 py-4 border-r border-[#e2e2e2] transition-colors whitespace-nowrap ${
                  active === tab
                    ? "bg-[#111111] text-white"
                    : "bg-transparent text-[#555555] hover:text-[#111111] hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Books grid */}
      <section className="py-16">
        <Container>
          {filtered.length === 0 ? (
            <div className="py-20 text-center border border-[#e2e2e2]">
              <p className="font-serif text-xl text-[#888888] mb-2">
                {query.trim() ? "No titles match your search." : "No titles in this category yet."}
              </p>
              <p className="font-serif text-sm text-[#888888]">
                {query.trim()
                  ? "Try a different title, author, or subject area."
                  : "New titles are added regularly. Please check back soon."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((book) => (
                <BookCard key={book.slug} book={book} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Forthcoming note */}
      <section className="border-t border-[#e2e2e2] py-10 bg-[#f7f7f7]">
        <Container narrow>
          <p className="font-serif text-sm text-[#888888] text-center leading-relaxed">
            This catalogue represents all currently announced and published titles. Additional titles are in preparation and will appear here upon announcement. For manuscript inquiries, please contact{" "}
            <a
              href="mailto:books@panorama-sg.com"
              className="text-[#555555] underline underline-offset-2 hover:text-[#111111] transition-colors"
            >
              books@panorama-sg.com
            </a>
            .
          </p>
        </Container>
      </section>
    </>
  );
}
