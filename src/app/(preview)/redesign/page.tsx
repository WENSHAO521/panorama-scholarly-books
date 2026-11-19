import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/Logo";
import { catalogue, nameRomanizations, bookLangTag } from "@/data/books";
import { series } from "@/data/series";
import { news, newsKindLabel, formatNewsDate } from "@/data/news";

// Redesign preview of the English homepage. Same sections, same order, same
// facts as src/app/_pages/home/HomePageClient.tsx; only the craft changes.

const fields = ["Humanities", "Social Sciences", "Education", "Arts", "Public Policy", "AI and Future Society"];

const nav = [
  { href: "/books/", label: "Books" },
  { href: "/book-series/", label: "Series" },
  { href: "/authors/", label: "Authors" },
  { href: "/for-authors/", label: "Publish with us" },
  { href: "/about/", label: "About" },
];

const pillars = [
  {
    title: "Scholarly publishing",
    body: "Monographs, edited volumes, academic textbooks, research reports, conference proceedings and interdisciplinary works.",
    href: "/for-authors/#what-we-publish",
    link: "What we publish",
  },
  {
    title: "Editorial standards",
    body: "Proposals are assessed on scholarly merit, originality, clarity of argument and relevance, under published policies on ethics, authorship, plagiarism and AI use.",
    href: "/policies/",
    link: "Publishing policies",
  },
  {
    title: "Book proposals",
    body: "Authors, editors and research teams send a proposal with the documents listed in the author guidelines. Please allow 2–4 weeks for an initial response.",
    href: "/for-authors/#proposal-content",
    link: "Proposal guidelines",
  },
  {
    title: "Open access options",
    body: "Selected titles may be published open access, by default under CC BY-NC-ND 4.0, with the licence agreed in the publishing agreement.",
    href: "/policies/open-access/",
    link: "Open access policy",
  },
];

const footer = [
  {
    heading: "Books",
    links: [
      ["/books/", "Catalogue"],
      ["/book-series/", "Book series"],
      ["/authors/", "Authors and editors"],
      ["/distribution/", "Distribution"],
    ],
  },
  {
    heading: "Publishing",
    links: [
      ["/for-authors/", "Publish with us"],
      ["/publishing-services/", "Services and fees"],
      ["/contact/", "Submit an inquiry"],
    ],
  },
  {
    heading: "Policies",
    links: [
      ["/policies/publishing-ethics/", "Publishing ethics"],
      ["/policies/copyright/", "Copyright and licensing"],
      ["/policies/open-access/", "Open access"],
      ["/policies/ai-use-policy/", "AI use"],
      ["/policies/plagiarism/", "Plagiarism"],
      ["/policies/authorship/", "Authorship"],
    ],
  },
  {
    heading: "Institution",
    links: [
      ["/about/", "About the imprint"],
      ["/contact/", "Contact"],
      ["https://panorama-sg.com", "Panorama Scholarly Group"],
      ["https://posi.panorama-sg.com", "POSI scholarly index"],
    ],
  },
];

const typeLabel = (t: string) => t.charAt(0) + t.slice(1).toLowerCase();

export default function RedesignPreview() {
  const book = catalogue[0];
  const lang = bookLangTag(book);
  const author = book.authors[0];
  const contents = book.tableOfContents.slice(1, 5);

  return (
    <>
      {/* Preview note: this page is not linked from the live site. */}
      <div className="bg-[var(--rd-raised)] border-b border-[var(--rd-line)]">
        <div className="rd-wrap flex items-center justify-between gap-4 h-10 text-[13px] text-[var(--rd-ink-3)]">
          <span>Design preview of the homepage</span>
          <Link href="/" className="rd-link !text-[13px]">Current homepage</Link>
        </div>
      </div>

      {/* ── Navigation ─────────────────────────────────────────────────── */}
      <header className="border-b border-[var(--rd-line)]">
        <div className="rd-wrap flex items-center justify-between gap-6 h-16">
          <Link href="/redesign/" className="flex items-center gap-3 shrink-0" aria-label="Panorama Scholarly Books, home">
            <LogoMark height={28} />
            <span className="font-serif text-[17px] font-medium leading-none text-[var(--rd-ink)]">Panorama Scholarly Books</span>
          </Link>
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="rd-navlink">{n.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/books/" className="rd-navlink inline-flex items-center gap-2">
              <MagnifyingGlass size={16} aria-hidden="true" />
              <span className="hidden sm:inline">Search</span>
              <span className="hidden sm:inline" aria-hidden="true"><span className="rd-kbd">/</span></span>
            </Link>
            <Link href="/zh-hant/" className="rd-navlink whitespace-nowrap" lang="zh-Hant">中文</Link>
          </div>
        </div>
      </header>

      <main id="main">
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section>
          <div className="rd-wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-12 pb-16 lg:pt-20 lg:pb-24">
            <div className="lg:col-span-6 rd-enter">
              <p className="rd-label mb-6">Academic book publishing, Hong Kong</p>
              <h1 className="rd-display max-w-[17ch]">Scholarly monographs and edited volumes, published in Hong Kong</h1>
              <p className="rd-lede mt-6">
                The academic book imprint of Panorama Scholarly Group Limited, publishing monographs, edited volumes,
                textbooks and research reports across the humanities, social sciences and emerging fields.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <Link href="/books/" className="rd-btn rd-btn-primary">Browse books</Link>
                <Link href="/for-authors/" className="rd-btn rd-btn-secondary">Publish with us</Link>
              </div>
            </div>

            {/* The moment: the latest title, as a real book on a shelf. */}
            <figure className="lg:col-span-6 rd-enter-2">
              <div className="rd-stage flex items-end justify-center pt-12 pb-[9%] px-8 min-h-[420px] lg:min-h-[520px]">
                <Link href={`/books/${book.slug}/`} className="rd-book block w-[200px] sm:w-[240px] lg:w-[264px]" aria-label={`${book.titleTranslation}, view book`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={book.coverImage} width={book.coverSize?.[0]} height={book.coverSize?.[1]} alt="" fetchPriority="high" />
                </Link>
              </div>
              <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mt-4 text-[14px]">
                <span>
                  <span lang={lang} className="text-[var(--rd-ink)]">{book.title}</span>
                  <span className="text-[var(--rd-ink-3)]"> · {nameRomanizations[author] ?? author}</span>
                </span>
                <span className="text-[var(--rd-ink-3)] rd-num">Latest publication, {book.publicationYear}</span>
              </figcaption>
            </figure>
          </div>

          {/* Fields of publication, set as a quiet colophon line */}
          <div className="rd-wrap">
            <div className="border-t border-[var(--rd-line)] py-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
              <p className="rd-label shrink-0 md:w-[176px]">Fields of publication</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-[17px] text-[var(--rd-ink)]">
                {fields.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Latest publication: the catalogue record ───────────────────── */}
        <section className="bg-[var(--rd-raised)] border-y border-[var(--rd-line)] mt-8">
          <div className="rd-wrap py-16 lg:py-24">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-12">
              <h2 className="rd-h2">Latest publication</h2>
              <Link href="/books/" className="rd-link">Full catalogue</Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              <div className="lg:col-span-7">
                <p className="rd-label">{typeLabel(book.bookType)}</p>
                <h3 lang={lang} className="font-serif text-[32px] leading-[1.3] text-[var(--rd-ink)] mt-2">{book.title}</h3>
                <p lang={lang} className="font-serif text-[18px] leading-[1.6] text-[var(--rd-ink-2)] mt-2">{book.subtitle}</p>
                <p className="text-[15px] text-[var(--rd-ink-3)] mt-2">{book.titleTranslation}</p>

                <p className="rd-body mt-8 max-w-[62ch]">{book.abstract}</p>

                <div className="mt-10">
                  <p className="rd-label mb-3">From the contents</p>
                  <ol className="border-t border-[var(--rd-line)]">
                    {contents.map((c, i) => (
                      <li key={c} className="grid grid-cols-[32px_1fr] gap-4 py-3 border-b border-[var(--rd-line)] text-[15px] leading-[1.5]">
                        <span className="rd-num text-[var(--rd-ink-3)]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[var(--rd-ink-2)]">{c.replace(/'/g, "’")}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <Link href={`/books/${book.slug}/`} className="rd-btn rd-btn-primary mt-10">View book details</Link>
              </div>

              {/* Signature: the colophon */}
              <aside className="lg:col-span-4 lg:col-start-9">
                <p className="rd-label mb-3">Colophon</p>
                <dl className="rd-colophon">
                  <div><dt>Author</dt><dd><span lang={lang}>{author}</span> {nameRomanizations[author] && <span className="text-[var(--rd-ink-3)]">({nameRomanizations[author]})</span>}</dd></div>
                  <div><dt>Publisher</dt><dd>{book.publisher}</dd></div>
                  <div><dt>Place, year</dt><dd>{book.placeOfPublication}, {book.publicationYear}</dd></div>
                  <div><dt>ISBN</dt><dd>{book.isbn}</dd></div>
                  {book.eisbn && <div><dt>eISBN</dt><dd>{book.eisbn}</dd></div>}
                  <div><dt>Extent</dt><dd>{book.pages} pages</dd></div>
                  <div><dt>Formats</dt><dd>{book.format.join(", ")}</dd></div>
                  <div><dt>Language</dt><dd>{book.language}</dd></div>
                </dl>
                <p className="rd-label mt-6">Our list is growing. New titles are announced here as they are published.</p>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Book series ────────────────────────────────────────────────── */}
        <section className="rd-wrap py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="rd-h2">Series open for proposals</h2>
              <p className="rd-body mt-4 max-w-[40ch]">
                Each series defines a field of scholarship and the book types it accepts. No volumes have yet been published in a series.
              </p>
              <Link href="/book-series/" className="rd-link inline-block mt-6">All series</Link>
            </div>
            <ol className="lg:col-span-8 border-t border-[var(--rd-line-strong)]">
              {series.map((s, i) => (
                <li key={s.id} className="border-b border-[var(--rd-line)]">
                  <Link href={`/book-series/#${s.id}`} className="rd-row grid grid-cols-[32px_1fr] md:grid-cols-[32px_1fr_auto] gap-x-4 items-baseline py-4 px-2 -mx-2 rounded-[6px]">
                    <span className="rd-num text-[14px] text-[var(--rd-ink-3)]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="rd-row-title font-serif text-[19px] leading-snug text-[var(--rd-ink)] transition-colors">{s.title.en}</span>
                    <span className="hidden md:block text-[14px] text-[var(--rd-ink-3)]">{typeLabel(s.types.join(", "))}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Publishing with Panorama ───────────────────────────────────── */}
        <section className="bg-[var(--rd-raised)] border-y border-[var(--rd-line)]">
          <div className="rd-wrap py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="rd-h2">A considered route from manuscript to book</h2>
              <p className="rd-body mt-4 max-w-[40ch]">
                We work with academic authors, editors and institutions under signed publishing agreements, with clear editorial policies and transparent service terms.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link href="/for-authors/" className="rd-btn rd-btn-primary">Author guidelines</Link>
                <Link href="/publishing-services/" className="rd-btn rd-btn-secondary !bg-[var(--rd-paper)]">Services and fees</Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {pillars.map((p, i) => (
                  <div key={p.title} className="border-t border-[var(--rd-line-strong)] pt-4">
                    <dt className="flex items-baseline gap-3">
                      <span className="rd-num text-[14px] text-[var(--rd-ink-3)] w-5">{i + 1}</span>
                      <span className="rd-h3">{p.title}</span>
                    </dt>
                    <dd className="pl-8 mt-2">
                      <p className="text-[15px] leading-[1.65] text-[var(--rd-ink-2)]">{p.body}</p>
                      <Link href={p.href} className="rd-link inline-block mt-3 !text-[14px]">{p.link}</Link>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="rd-label mt-12 pt-4 border-t border-[var(--rd-line)] max-w-[72ch]">
                ISBNs are assigned only to works formally reviewed, accepted and published by Panorama Scholarly Books under a signed publishing agreement. They are never sold or supplied as standalone numbers.
              </p>
            </div>
          </div>
        </section>

        {/* ── News ───────────────────────────────────────────────────────── */}
        <section className="rd-wrap py-16 lg:py-24">
          <h2 className="rd-h2 mb-10">News and notices</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {news.map((item) => (
              <li key={item.id} className="border-t border-[var(--rd-line-strong)] pt-4">
                <Link href={item.href.endsWith("/") ? item.href : `${item.href}/`} className="group block">
                  <p className="text-[14px] text-[var(--rd-ink-3)] rd-num">
                    {newsKindLabel(item.kind, "en")} · <time dateTime={item.date}>{formatNewsDate(item.date, "en")}</time>
                  </p>
                  <h3 className="font-serif text-[20px] leading-snug text-[var(--rd-ink)] mt-2 transition-colors group-hover:text-[var(--rd-accent)]">
                    {item.title.en}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[var(--rd-ink-2)] mt-2">{item.summary.en}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="bg-[var(--rd-accent)] text-[var(--rd-on-accent)]">
        <div className="rd-wrap pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="font-serif text-[20px] font-medium">Panorama Scholarly Books</p>
              <p className="font-serif text-[16px] leading-[1.6] text-[#c3d1c8] mt-3 max-w-[32ch]">
                The academic book publishing imprint of Panorama Scholarly Group Limited.
              </p>
              <dl className="mt-8 space-y-4 text-[14px]">
                <div>
                  <dt className="text-[#b8c9bf]">Books department</dt>
                  <dd><a href="mailto:books@panorama-sg.com" className="hover:underline underline-offset-4">books@panorama-sg.com</a></dd>
                </div>
                <div>
                  <dt className="text-[#b8c9bf]">Registered address</dt>
                  <dd className="max-w-[32ch]">Room 1508, 15/F, Office Tower Two, Grand Plaza, 625 Nathan Road, Mong Kok, Kowloon, Hong Kong</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {footer.map((col) => (
                <div key={col.heading}>
                  <p className="text-[14px] text-[#b8c9bf] mb-3">{col.heading}</p>
                  <ul className="space-y-2 text-[15px]">
                    {col.links.map(([href, label]) => (
                      <li key={label}><Link href={href} className="hover:underline underline-offset-4">{label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 pt-6 border-t border-[rgb(251_250_245/0.14)] flex flex-col md:flex-row md:justify-between gap-3 text-[13px] text-[#b8c9bf]">
            <p className="rd-num">© 2026 Panorama Scholarly Group Limited. All rights reserved.</p>
            <p className="max-w-[60ch] md:text-right">
              Panorama Scholarly Group Limited is the legal entity responsible for publishing agreements, ISBN use, and publication under the Panorama Scholarly Books imprint.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
