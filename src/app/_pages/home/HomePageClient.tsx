import Link from "next/link";
import { catalogue, bookLangTag, nameRomanizations, type Book } from "@/data/books";
import { series, seriesTypeLabel } from "@/data/series";
import { news, newsKindLabel, formatNewsDate } from "@/data/news";
import BookCard from "@/components/BookCard";
import Container from "@/components/Container";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { bookTypeLabel, metadataFieldLabel } from "@/lib/i18nLabels";
import { localeHref, pickLocale, pickLocaleList, type Locale } from "@/lib/locale";

type L = Record<Locale, string>;

// Fields come from the imprint's published scope (About page).
const fields: L[] = [
  { en: "Humanities", "zh-Hant": "人文學科", "zh-Hans": "人文学科" },
  { en: "Social sciences", "zh-Hant": "社會科學", "zh-Hans": "社会科学" },
  { en: "Education", "zh-Hant": "教育", "zh-Hans": "教育" },
  { en: "Arts", "zh-Hant": "藝術", "zh-Hans": "艺术" },
  { en: "Public policy", "zh-Hant": "公共政策", "zh-Hans": "公共政策" },
  { en: "AI and future society", "zh-Hant": "人工智能與未來社會", "zh-Hans": "人工智能与未来社会" },
];

const pillars: { title: L; body: L; href: string; link: L }[] = [
  {
    title: { en: "Scholarly publishing", "zh-Hant": "學術出版", "zh-Hans": "学术出版" },
    body: {
      en: "Monographs, edited volumes, academic textbooks, research reports, conference proceedings and interdisciplinary works.",
      "zh-Hant": "學術專著、編著文集、學術教材、研究報告、會議論文集及跨學科著作。",
      "zh-Hans": "学术专著、编著文集、学术教材、研究报告、会议论文集及跨学科著作。",
    },
    href: "/for-authors#what-we-publish",
    link: { en: "Publishing scope", "zh-Hant": "出版範圍", "zh-Hans": "出版范围" },
  },
  {
    title: { en: "Editorial standards", "zh-Hant": "編輯規範", "zh-Hans": "编辑规范" },
    body: {
      en: "Proposals are assessed on scholarly merit, originality, clarity of argument and relevance, under published policies on ethics, authorship, plagiarism and AI use.",
      "zh-Hant": "書稿依學術價值、原創性、論證嚴謹程度及學科相關性進行評審，並遵循本社公布的出版倫理、署名、抄襲及人工智能使用政策。",
      "zh-Hans": "书稿依据学术价值、原创性、论证严谨程度及学科相关性进行评审，并遵循本社公布的出版伦理、署名、抄袭及人工智能使用政策。",
    },
    href: "/policies",
    link: { en: "Publishing policies", "zh-Hant": "出版政策", "zh-Hans": "出版政策" },
  },
  {
    title: { en: "Book proposals", "zh-Hant": "投稿", "zh-Hans": "投稿" },
    body: {
      en: "Authors, editors and research teams submit a book proposal with the documents specified in the author guidelines. An initial response is normally issued within 2–4 weeks.",
      "zh-Hant": "作者、主編及研究團隊須按投稿指南提交出版計劃書及所需材料。編輯部一般於二至四週內作出初步回覆。",
      "zh-Hans": "作者、主编及研究团队须按投稿指南提交出版计划书及所需材料。编辑部一般于二至四周内作出初步回复。",
    },
    href: "/for-authors#proposal-content",
    link: { en: "Proposal guidelines", "zh-Hant": "出版計劃書要求", "zh-Hans": "出版计划书要求" },
  },
  {
    title: { en: "Open access", "zh-Hant": "開放獲取", "zh-Hans": "开放获取" },
    body: {
      en: "Selected titles may be published open access, by default under a CC BY-NC-ND 4.0 licence; the applicable licence is set out in the publishing agreement.",
      "zh-Hant": "部分著作經協議可採用開放獲取（OA）方式出版，默認採用 CC BY-NC-ND 4.0 許可協議，具體許可條款以出版協議為準。",
      "zh-Hans": "部分著作经协议可采用开放获取（OA）方式出版，默认采用 CC BY-NC-ND 4.0 许可协议，具体许可条款以出版协议为准。",
    },
    href: "/policies/open-access",
    link: { en: "Open access policy", "zh-Hant": "開放獲取政策", "zh-Hans": "开放获取政策" },
  },
];

const languageNames: Record<string, L> = {
  English: { en: "English", "zh-Hant": "英文", "zh-Hans": "英文" },
  "Chinese (Simplified)": { en: "Chinese (Simplified)", "zh-Hant": "簡體中文", "zh-Hans": "简体中文" },
  "Chinese (Traditional)": { en: "Chinese (Traditional)", "zh-Hant": "繁體中文", "zh-Hans": "繁体中文" },
};

const formatNames: Record<string, L> = {
  Paperback: { en: "Paperback", "zh-Hant": "平裝", "zh-Hans": "平装" },
  Hardcover: { en: "Hardcover", "zh-Hant": "精裝", "zh-Hans": "精装" },
  "PDF eBook": { en: "PDF eBook", "zh-Hant": "PDF 電子書", "zh-Hans": "PDF 电子书" },
  EPUB: { en: "EPUB", "zh-Hant": "EPUB", "zh-Hans": "EPUB" },
};

const copy = {
  en: {
    eyebrow: "Academic book publisher, Hong Kong",
    headline: "Scholarly monographs and edited volumes, published in Hong Kong",
    lede: "The academic book imprint of Panorama Scholarly Group Limited, publishing scholarly monographs, edited volumes, academic textbooks and research reports in the humanities, social sciences and emerging interdisciplinary fields.",
    browse: "Browse books",
    publish: "Author guidelines",
    fieldsLabel: "Subject areas",
    latest: "Latest publication",
    pubHeading: "Recent publications",
    allBooks: "Full catalogue",
    viewBook: "View catalogue record",
    contents: "Table of contents (excerpt)",
    colophon: "Colophon",
    author: "Author",
    placeYear: "Place and year of publication",
    pages: (n: number) => `${n} pages`,
    growing: "New titles are listed here upon publication.",
    seriesHeading: "Book series: call for proposals",
    seriesBody: "Each series has a defined disciplinary scope and specifies the book types it accepts. No volumes have yet been published in any series.",
    allSeries: "All series",
    publishHeading: "From manuscript to publication",
    publishBody: "All works are published under a signed publishing agreement with the author, editor or commissioning institution, in accordance with published editorial policies and stated terms of service.",
    isbnNote: "ISBNs are assigned only to works formally reviewed, accepted and published by Panorama Scholarly Books under a signed publishing agreement. ISBNs are not sold or issued as standalone numbers.",
    services: "Publishing services and fees",
    guidelines: "Author guidelines",
    newsHeading: "News and announcements",
  },
  "zh-Hant": {
    eyebrow: "學術圖書出版社 · 香港",
    headline: "學術專著與編著文集出版",
    lede: "Panorama Scholarly Books 為 Panorama Scholarly Group Limited 旗下學術圖書出版品牌，出版人文學科、社會科學及新興交叉學科領域的學術專著、編著文集、學術教材及研究報告。",
    browse: "瀏覽書目",
    publish: "作者投稿指南",
    fieldsLabel: "出版學科領域",
    latest: "最新出版",
    pubHeading: "近期出版",
    allBooks: "完整書目",
    viewBook: "查看書目詳情",
    contents: "目錄摘錄",
    colophon: "版權頁",
    author: "作者",
    placeYear: "出版地與年份",
    pages: (n: number) => `${n} 頁`,
    growing: "新書出版後將於此處公布。",
    seriesHeading: "書系徵稿",
    seriesBody: "各書系均設有明確的學科範圍及收錄圖書類型。目前各書系尚未出版任何著作。",
    allSeries: "所有書系",
    publishHeading: "從書稿到出版",
    publishBody: "所有著作均須與作者、主編或委託機構簽訂出版協議後方可出版，並遵循本社公布的編輯政策及服務條款。",
    isbnNote: "國際標準書號（ISBN）僅分配予經 Panorama Scholarly Books 正式審稿、錄用並依已簽訂之出版協議出版的著作。本社不出售書號，亦不單獨提供書號。",
    services: "出版服務與費用",
    guidelines: "作者投稿指南",
    newsHeading: "新聞與公告",
  },
  "zh-Hans": {
    eyebrow: "学术图书出版社 · 香港",
    headline: "学术专著与编著文集出版",
    lede: "Panorama Scholarly Books 为 Panorama Scholarly Group Limited 旗下学术图书出版品牌，出版人文学科、社会科学及新兴交叉学科领域的学术专著、编著文集、学术教材及研究报告。",
    browse: "浏览书目",
    publish: "作者投稿指南",
    fieldsLabel: "出版学科领域",
    latest: "最新出版",
    pubHeading: "近期出版",
    allBooks: "完整书目",
    viewBook: "查看书目详情",
    contents: "目录摘录",
    colophon: "版权页",
    author: "作者",
    placeYear: "出版地与年份",
    pages: (n: number) => `${n} 页`,
    growing: "新书出版后将在此处公布。",
    seriesHeading: "书系征稿",
    seriesBody: "各书系均设有明确的学科范围及收录图书类型。目前各书系尚未出版任何著作。",
    allSeries: "所有书系",
    publishHeading: "从书稿到出版",
    publishBody: "所有著作均须与作者、主编或委托机构签订出版协议后方可出版，并遵循本社公布的编辑政策及服务条款。",
    isbnNote: "国际标准书号（ISBN）仅分配给经 Panorama Scholarly Books 正式审稿、录用并依已签订的出版协议出版的著作。本社不出售书号，也不单独提供书号。",
    services: "出版服务与费用",
    guidelines: "作者投稿指南",
    newsHeading: "新闻与公告",
  },
} as const;

const PLACES: Record<string, L> = {
  "Hong Kong": { en: "Hong Kong", "zh-Hant": "香港", "zh-Hans": "香港" },
};

/** The one rich moment on the page: the latest cover as a bound book on a shelf. */
function HeroBook({ book, locale, label }: { book: Book; locale: Locale; label: string }) {
  const lang = bookLangTag(book);
  const author = book.authors[0] ?? book.editors[0] ?? "";
  const roman = locale === "en" ? nameRomanizations[author] : undefined;
  const [w, h] = book.coverSize ?? [800, 1200];
  return (
    <figure>
      <div className="book-stage flex items-end justify-center pt-12 pb-[9%] px-8 min-h-[420px] lg:min-h-[520px]">
        <Link
          href={localeHref(`/books/${book.slug}`, locale)}
          className="book-object block w-[200px] sm:w-[240px] lg:w-[264px]"
          aria-label={locale === "en" && book.titleTranslation ? book.titleTranslation : book.title}
        >
          {book.coverImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={book.coverImage} width={w} height={h} alt="" fetchPriority="high" />
          ) : (
            <span className="block aspect-[2/3] bg-brand" />
          )}
        </Link>
      </div>
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mt-4 font-sans text-[14px]">
        <span>
          <span lang={lang} className="text-ink">{book.title}</span>
          <span className="text-ink-3"> · {roman ?? author}</span>
        </span>
        <span className="text-ink-3 tabular-nums">{label}{locale === "en" ? ", " : " · "}{book.publicationYear}</span>
      </figcaption>
    </figure>
  );
}

/** Signature detail: the catalogue record set like a colophon page. */
function Colophon({ book, locale }: { book: Book; locale: Locale }) {
  const t = copy[locale];
  const lang = bookLangTag(book);
  const author = book.authors[0] ?? book.editors[0] ?? "";
  const roman = nameRomanizations[author];
  const rows: [string, React.ReactNode][] = [
    [t.author, <><span lang={lang}>{author}</span>{roman && <span className="text-ink-3"> ({roman})</span>}</>],
    [metadataFieldLabel("Publisher", locale), book.publisher],
    [t.placeYear, `${PLACES[book.placeOfPublication]?.[locale] ?? book.placeOfPublication}, ${book.publicationYear}`],
    ["ISBN", book.isbn],
    ...(book.eisbn ? [[metadataFieldLabel("eISBN", locale), book.eisbn] as [string, React.ReactNode]] : []),
    [metadataFieldLabel("Pages", locale), t.pages(book.pages)],
    [metadataFieldLabel("Format", locale), book.format.map((f) => formatNames[f]?.[locale] ?? f).join(locale === "en" ? ", " : "、")],
    [metadataFieldLabel("Language", locale), languageNames[book.language]?.[locale] ?? book.language],
  ];
  return (
    <dl className="colophon">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function HomePageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const books = catalogue;
  const book = books[0];
  const fewBooks = books.length <= 2;

  return (
    <>
      <AnnouncementBanner locale={locale} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-12 pb-16 lg:pt-20 lg:pb-24">
            <div className="lg:col-span-6 enter">
              <p className="eyebrow mb-6">{t.eyebrow}</p>
              <h1 className="type-display max-w-[17ch]">{t.headline}</h1>
              <p className="lede mt-6 max-w-[36rem]">{t.lede}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <Link href={localeHref("/books", locale)} className="btn btn-primary">{t.browse}</Link>
                <Link href={localeHref("/for-authors", locale)} className="btn btn-secondary">{t.publish}</Link>
              </div>
            </div>
            {book && (
              <div className="lg:col-span-6 enter-2">
                <HeroBook book={book} locale={locale} label={t.latest} />
              </div>
            )}
          </div>

          <div className="border-t border-line py-6 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
            <p className="eyebrow shrink-0 md:w-44">{t.fieldsLabel}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-serif text-[17px] text-ink">
              {fields.map((f) => <li key={f.en}>{f[locale]}</li>)}
            </ul>
          </div>
        </Container>
      </section>

      {/* ── Latest publication ───────────────────────────────────────── */}
      {book && (
        <section className="bg-stone border-y border-line mt-8 py-16 lg:py-24">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 mb-12">
              <h2 className="type-h2">{fewBooks ? t.latest : t.pubHeading}</h2>
              <Link href={localeHref("/books", locale)} className="link-arrow">{t.allBooks}</Link>
            </div>

            {fewBooks ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                <div className="lg:col-span-7">
                  <p className="eyebrow">{bookTypeLabel(book.bookType, locale)}</p>
                  <h3 lang={bookLangTag(book)} className="font-serif text-[clamp(1.625rem,1.4rem+0.8vw,2rem)] leading-[1.3] text-ink mt-2">
                    <Link href={localeHref(`/books/${book.slug}`, locale)} className="hover:text-brand transition-colors">{book.title}</Link>
                  </h3>
                  {book.subtitle && <p lang={bookLangTag(book)} className="font-serif text-[18px] leading-[1.6] text-ink-2 mt-2">{book.subtitle}</p>}
                  {locale === "en" && book.titleTranslation && <p className="meta mt-2">{book.titleTranslation}</p>}

                  <p className="prose-reading mt-8">{pickLocale(book.abstract, book.abstractZh, book.abstractZhHans, locale)}</p>

                  {book.tableOfContents.length > 1 && (
                    <div className="mt-10">
                      <p className="eyebrow mb-3">{t.contents}</p>
                      <ol className="border-t border-line">
                        {pickLocaleList(book.tableOfContents, book.tableOfContentsZh, book.tableOfContentsZhHans, locale)
                          .slice(1, 5)
                          .map((c, i) => (
                            <li key={c} className="grid grid-cols-[2rem_1fr] gap-4 py-3 border-b border-line font-sans text-[15px] leading-normal">
                              <span className="tabular-nums text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                              <span className="text-ink-2">{c}</span>
                            </li>
                          ))}
                      </ol>
                    </div>
                  )}

                  <Link href={localeHref(`/books/${book.slug}`, locale)} className="btn btn-primary mt-10">{t.viewBook}</Link>
                </div>

                <aside className="lg:col-span-4 lg:col-start-9">
                  <p className="eyebrow mb-3">{t.colophon}</p>
                  <Colophon book={book} locale={locale} />
                  <p className="meta mt-6">{t.growing}</p>
                </aside>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-12">
                {books.slice(0, 4).map((b) => <BookCard key={b.slug} book={b} locale={locale} />)}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* ── Book series ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="type-h2">{t.seriesHeading}</h2>
              <p className="text-ink-2 mt-4 max-w-[40ch]">{t.seriesBody}</p>
              <Link href={localeHref("/book-series", locale)} className="link-arrow mt-6">{t.allSeries}</Link>
            </div>
            <ol className="lg:col-span-8 border-t border-line-strong/40">
              {series.map((s, i) => (
                <li key={s.id} className="border-b border-line">
                  <Link
                    href={`${localeHref("/book-series", locale)}#${s.id}`}
                    className="group grid grid-cols-[2rem_1fr] md:grid-cols-[2rem_1fr_auto] gap-x-4 items-baseline py-4 px-2 -mx-2 rounded-md transition-colors hover:bg-stone"
                  >
                    <span className="font-sans text-[14px] tabular-nums text-ink-3">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-[19px] leading-snug text-ink transition-colors group-hover:text-brand">{s.title[locale]}</span>
                    <span className="hidden md:block font-sans text-[14px] text-ink-3">
                      {s.types
                        .map((ty, k) => (k > 0 && locale === "en" ? ty.toLowerCase() : seriesTypeLabel(ty, locale)))
                        .join(locale === "en" ? ", " : "、")}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── Publishing with Panorama ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-stone border-y border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <h2 className="type-h2">{t.publishHeading}</h2>
              <p className="text-ink-2 mt-4 max-w-[40ch]">{t.publishBody}</p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-8">
                <Link href={localeHref("/for-authors", locale)} className="btn btn-primary">{t.guidelines}</Link>
                <Link href={localeHref("/publishing-services", locale)} className="btn btn-quiet !bg-paper">{t.services}</Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {pillars.map((p, i) => (
                  <div key={p.title.en} className="border-t border-line-strong/40 pt-4">
                    <dt className="flex items-baseline gap-3">
                      <span className="font-sans text-[14px] tabular-nums text-ink-3 w-5">{i + 1}</span>
                      <span className="type-h3">{p.title[locale]}</span>
                    </dt>
                    <dd className="pl-8 mt-2">
                      <p className="text-ink-2 text-[16px] leading-relaxed">{p.body[locale]}</p>
                      <Link href={localeHref(p.href, locale)} className="link-arrow mt-3 !text-[14px]">{p.link[locale]}</Link>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="meta mt-12 pt-4 border-t border-line max-w-[72ch]">{t.isbnNote}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── News & announcements ─────────────────────────────────────── */}
      <section className="pt-16 lg:pt-24">
        <Container>
          <h2 className="type-h2 mb-10">{t.newsHeading}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {news.map((item) => (
              <li key={item.id} className="border-t border-line-strong/40 pt-4">
                <Link href={localeHref(item.href, locale)} className="group block">
                  <p className="meta tabular-nums">
                    {newsKindLabel(item.kind, locale)} · <time dateTime={item.date}>{formatNewsDate(item.date, locale)}</time>
                  </p>
                  <h3 className="font-serif text-[20px] leading-snug text-ink mt-2 transition-colors group-hover:text-brand">
                    {item.title[locale]}
                  </h3>
                  <p className="text-ink-2 text-[16px] leading-relaxed mt-2">{item.summary[locale]}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
