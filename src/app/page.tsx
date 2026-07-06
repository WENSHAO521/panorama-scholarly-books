import Link from "next/link";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import HeroBookList from "@/components/HeroBookList";
import Container from "@/components/Container";

const publishingAreas = [
  { label: "Humanities", sub: "Philosophy, History, Literature, Cultural Studies" },
  { label: "Social Sciences", sub: "Sociology, Anthropology, Political Science" },
  { label: "Education", sub: "Policy, Pedagogy, Higher Education, Curriculum" },
  { label: "Arts", sub: "Art History, Media Studies, Performance, Design" },
  { label: "Public Policy", sub: "Governance, Public Administration, Law" },
  { label: "AI and Future Society", sub: "Technology Ethics, Digital Futures, Science Studies" },
];

export default function HomePage() {
  const featuredBooks = books.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-5 border-b border-[#e2e2e2]">
        {/* Left */}
        <div className="lg:col-span-3 flex flex-col justify-center px-6 md:px-12 xl:px-20 pt-16 pb-16 lg:pt-0 lg:pb-0">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-8">
            Academic Book Publishing
          </p>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-[72px] leading-[1.06] text-[#111111] mb-6 font-medium">
            Panorama<br />Scholarly<br />Books
          </h1>
          <div className="w-10 h-px bg-[#111111] mb-8" />
          <p className="font-serif text-lg md:text-xl text-[#555555] leading-relaxed max-w-[52ch] mb-3">
            An Academic Book Publishing Platform of Panorama Scholarly Group Limited.
          </p>
          <p className="font-serif text-base text-[#888888] leading-relaxed max-w-[52ch] mb-12">
            We publish scholarly monographs, edited volumes, research reports, academic textbooks, and interdisciplinary works across the humanities, social sciences, education, arts, public policy, and emerging fields.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
            <Link
              href="/books"
              className="font-serif text-base text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              Browse Books
            </Link>
            <Link
              href="/for-authors"
              className="font-serif text-base text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              Publish with Us
            </Link>
          </div>
        </div>

        {/* Right: editorial catalog list */}
        <div className="hidden lg:flex lg:col-span-2 border-l border-[#e2e2e2] bg-white flex-col">
          <div className="px-8 pt-[72px] pb-8 flex flex-col flex-1">
            <HeroBookList books={books} />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-b border-[#e2e2e2] py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-6">
                About Panorama Scholarly Books
              </h2>
              <div className="w-8 h-px bg-[#111111] mb-6" />
            </div>
            <div>
              <p className="font-serif text-base text-[#555555] leading-relaxed">
                Panorama Scholarly Books is dedicated to publishing academic works that contribute to scholarly communication, interdisciplinary research, and global knowledge exchange. As part of Panorama Scholarly Group Limited, the platform supports academic authors, editors, researchers, and institutions through responsible publishing practices and professional production services.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Publishing Areas */}
      <section className="border-b border-[#e2e2e2] py-20">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Publishing Areas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-12">
            Fields We Publish
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e2e2]">
            {publishingAreas.map((area) => (
              <div key={area.label} className="bg-white p-8">
                <p className="font-serif text-xl text-[#111111] font-medium mb-3">
                  {area.label}
                </p>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
                  {area.sub}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Books */}
      <section className="border-b border-[#e2e2e2] py-20">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
                Recent Titles
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15]">
                Featured Books
              </h2>
            </div>
            <Link
              href="/books"
              className="hidden sm:inline font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors whitespace-nowrap"
            >
              Browse all books
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.slug} book={book} />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link
              href="/books"
              className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              Browse all books
            </Link>
          </div>
        </Container>
      </section>

      {/* Publishing Services */}
      <section className="border-b border-[#e2e2e2] py-20 bg-[#f7f7f7]">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Publishing Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-12">
            Book Publishing Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e2e2]">
            {/* Package 1 */}
            <div className="bg-white p-10">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-6">
                Package A
              </p>
              <p className="font-serif text-2xl text-[#111111] font-medium mb-2">
                Author-Prepared Publication
              </p>
              <p className="font-serif text-3xl text-[#111111] font-medium mb-6">
                USD 450 <span className="text-base font-normal text-[#888888]">/ title</span>
              </p>
              <div className="w-full h-px bg-[#e2e2e2] mb-6" />
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Author-supplied proofreading and typesetting",
                  "Author-supplied cover design",
                  "Publication review and approval",
                  "Copyright page and imprint information",
                  "ISBN and publication metadata",
                  "Official book page on this website",
                  "Digital archiving and record-keeping",
                ].map((item) => (
                  <li key={item} className="font-serif text-sm text-[#555555] flex gap-3">
                    <span className="text-[#888888] shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/publishing-services"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                Learn more
              </Link>
            </div>

            {/* Package 2 */}
            <div className="bg-white p-10">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-6">
                Package B
              </p>
              <p className="font-serif text-2xl text-[#111111] font-medium mb-2">
                Publisher Production
              </p>
              <p className="font-serif text-3xl text-[#111111] font-medium mb-6">
                USD 980 <span className="text-base font-normal text-[#888888]">/ title</span>
              </p>
              <div className="w-full h-px bg-[#e2e2e2] mb-6" />
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Professional proofreading by the publisher",
                  "Typesetting and interior design",
                  "Cover design by the publisher",
                  "Copyright page and imprint information",
                  "ISBN and publication metadata",
                  "Official book page on this website",
                  "Final file production (PDF, print-ready)",
                  "Digital archiving and record-keeping",
                ].map((item) => (
                  <li key={item} className="font-serif text-sm text-[#555555] flex gap-3">
                    <span className="text-[#888888] shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/publishing-services"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="mt-6 border border-[#e2e2e2] bg-white p-6">
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              The above fees apply to standard academic books. Additional fees may apply for manuscripts with extensive tables, figures, formulas, illustrations, multilingual content, special layout requirements, or substantial language editing needs. Optional distribution setup (Amazon, IngramSpark, Google Play Books) is available on a quotation basis.
            </p>
          </div>
        </Container>
      </section>

      {/* For Authors */}
      <section className="border-b border-[#e2e2e2] py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
                For Authors
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-6">
                Publish with Panorama Scholarly Books
              </h2>
              <div className="w-8 h-px bg-[#111111] mb-6" />
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-8">
                We welcome proposals from academic authors, editors, and research teams working across a broad range of disciplines. Submissions are evaluated on scholarly merit, originality, clarity of argument, and relevance to academic discourse.
              </p>
              <Link
                href="/for-authors"
                className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-6 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                Author Guidelines
              </Link>
            </div>
            <div>
              <p className="font-serif text-sm text-[#888888] mb-4 tracking-wide">
                We accept the following book types:
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Scholarly Monographs",
                  "Edited Volumes",
                  "Academic Textbooks",
                  "Research Reports",
                  "Conference Proceedings",
                  "Doctoral Dissertation-Based Books",
                  "Interdisciplinary Research Books",
                ].map((type) => (
                  <li key={type} className="font-serif text-base text-[#555555] flex gap-4 border-b border-[#f0f0f0] pb-3 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0 font-medium">-</span>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Distribution Notice */}
      <section className="border-b border-[#e2e2e2] py-16 bg-[#f7f7f7]">
        <Container narrow>
          <div className="border border-[#e2e2e2] bg-white p-8 md:p-12">
            <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
              Sales and Distribution
            </p>
            <p className="font-serif text-lg text-[#111111] mb-4 leading-relaxed">
              Distribution channels are currently being developed.
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              Panorama Scholarly Group Limited is gradually developing its book sales and distribution channels. At present, each published title receives an official book webpage, publication metadata, ISBN and publication information where applicable, and digital archiving.
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              Book publishing fees do not guarantee book sales, bookstore placement, library acquisition, indexing, ranking, or commercial performance.
            </p>
            <div className="mt-6">
              <Link
                href="/distribution"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                Distribution information
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <Container narrow>
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium mb-6">
              Submit a Book Proposal
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-10 max-w-[52ch] mx-auto">
              To discuss a book project, submit a proposal, or inquire about publishing services, please contact the Books department directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-8 py-3 hover:bg-transparent hover:text-[#111111] transition-colors"
              >
                Contact the Books Department
              </Link>
              <Link
                href="/for-authors"
                className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-8 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                Author Guidelines
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
