import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { catalogue } from "@/data/books";
import { series } from "@/data/series";
import { news, newsKindLabel, formatNewsDate } from "@/data/news";
import BookCard, { BookEntry } from "@/components/BookCard";
import Container from "@/components/Container";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { localeHref, type Locale } from "@/lib/locale";

type L = Record<Locale, string>;

// Fields come from the imprint's published scope (About page).
const fields: L[] = [
  { en: "Humanities", "zh-Hant": "人文學科", "zh-Hans": "人文学科" },
  { en: "Social Sciences", "zh-Hant": "社會科學", "zh-Hans": "社会科学" },
  { en: "Education", "zh-Hant": "教育", "zh-Hans": "教育" },
  { en: "Arts", "zh-Hant": "藝術", "zh-Hans": "艺术" },
  { en: "Public Policy", "zh-Hant": "公共政策", "zh-Hans": "公共政策" },
  { en: "AI and Future Society", "zh-Hant": "人工智能與未來社會", "zh-Hans": "人工智能与未来社会" },
];

const pillars: { title: L; body: L; href: string; link: L }[] = [
  {
    title: { en: "Scholarly Publishing", "zh-Hant": "學術出版", "zh-Hans": "学术出版" },
    body: {
      en: "Monographs, edited volumes, academic textbooks, research reports, conference proceedings and interdisciplinary works.",
      "zh-Hant": "學術專著、編著文集、學術教材、研究報告、會議論文集及跨學科著作。",
      "zh-Hans": "学术专著、编著文集、学术教材、研究报告、会议论文集及跨学科著作。",
    },
    href: "/for-authors#what-we-publish",
    link: { en: "What we publish", "zh-Hant": "出版類型", "zh-Hans": "出版类型" },
  },
  {
    title: { en: "Editorial Standards", "zh-Hant": "編輯標準", "zh-Hans": "编辑标准" },
    body: {
      en: "Proposals are assessed on scholarly merit, originality, clarity of argument and relevance, under published policies on ethics, authorship, plagiarism and AI use.",
      "zh-Hant": "提案依學術價值、原創性、論述清晰度及相關性評估，並遵循已公布的出版倫理、著作權歸屬、抄襲及人工智能使用政策。",
      "zh-Hans": "提案依据学术价值、原创性、论述清晰度及相关性评估，并遵循已公布的出版伦理、著作权归属、抄袭及人工智能使用政策。",
    },
    href: "/policies",
    link: { en: "Publishing policies", "zh-Hant": "出版政策", "zh-Hans": "出版政策" },
  },
  {
    title: { en: "Book Proposals", "zh-Hant": "圖書提案", "zh-Hans": "图书提案" },
    body: {
      en: "Authors, editors and research teams send a proposal with the documents listed in the author guidelines. Please allow 2–4 weeks for an initial response.",
      "zh-Hant": "作者、編者及研究團隊可依作者指南所列文件提交提案。初步回覆約需二至四週。",
      "zh-Hans": "作者、编者及研究团队可依作者指南所列文件提交提案。初步回复约需二至四周。",
    },
    href: "/for-authors#proposal-content",
    link: { en: "Proposal guidelines", "zh-Hant": "提案指南", "zh-Hans": "提案指南" },
  },
  {
    title: { en: "Open Access Options", "zh-Hant": "開放獲取選項", "zh-Hans": "开放获取选项" },
    body: {
      en: "Selected titles may be published open access, by default under CC BY-NC-ND 4.0, with the licence agreed in the publishing agreement.",
      "zh-Hant": "部分著作可採開放獲取方式出版，預設採用 CC BY-NC-ND 4.0 授權，授權條款於出版協議中約定。",
      "zh-Hans": "部分著作可采用开放获取方式出版，默认采用 CC BY-NC-ND 4.0 许可，许可条款在出版协议中约定。",
    },
    href: "/policies/open-access",
    link: { en: "Open access policy", "zh-Hant": "開放獲取政策", "zh-Hans": "开放获取政策" },
  },
];

const copy = {
  en: {
    eyebrow: "Academic Book Publishing · Hong Kong",
    headline: ["Scholarly Books.", "Ideas Beyond Boundaries."],
    lede: "Panorama Scholarly Books is the academic book imprint of Panorama Scholarly Group Limited, publishing monographs, edited volumes, textbooks and research reports across the humanities, social sciences and emerging fields.",
    browse: "Browse Books",
    publish: "Publish With Us",
    fieldsLabel: "Fields of publication",
    pubEyebrow: "Publications",
    pubHeading: "From the catalogue",
    latest: "Latest publication",
    viewBook: "View book details",
    allBooks: "View the full catalogue",
    growing: "Our list is growing. New titles are announced here as they are published.",
    seriesEyebrow: "Book Series",
    seriesHeading: "Series open for proposals",
    seriesBody: "Each series defines a field of scholarship and the book types it accepts. No volumes have yet been published in a series.",
    allSeries: "Explore all series",
    publishEyebrow: "Publishing with Panorama",
    publishHeading: "A considered route from manuscript to book",
    publishBody: "We work with academic authors, editors and institutions under signed publishing agreements, with clear editorial policies and transparent service terms.",
    isbnNote: "ISBNs are assigned only to works formally reviewed, accepted and published by Panorama Scholarly Books under a signed publishing agreement. They are never sold or supplied as standalone numbers.",
    services: "Services and fees",
    guidelines: "Author guidelines",
    newsEyebrow: "News & Announcements",
    newsHeading: "Notices from the imprint",
  },
  "zh-Hant": {
    eyebrow: "學術圖書出版 · 香港",
    headline: ["學術之書，", "思想無界。"],
    lede: "Panorama Scholarly Books 是 Panorama Scholarly Group Limited 旗下的學術圖書出版品牌，出版人文學科、社會科學及新興領域的學術專著、編著文集、學術教材與研究報告。",
    browse: "瀏覽書目",
    publish: "與我們出版",
    fieldsLabel: "出版領域",
    pubEyebrow: "出版品",
    pubHeading: "書目精選",
    latest: "最新出版",
    viewBook: "查看圖書詳情",
    allBooks: "瀏覽完整書目",
    growing: "書目將持續增加，新書出版後即於此公布。",
    seriesEyebrow: "書系",
    seriesHeading: "接受提案的書系",
    seriesBody: "每個書系界定其學術範圍與接受的圖書類型。目前各書系尚未出版任何著作。",
    allSeries: "瀏覽所有書系",
    publishEyebrow: "與 Panorama 出版",
    publishHeading: "從書稿到成書的審慎路徑",
    publishBody: "我們依據已簽署的出版協議，與學術作者、編者及機構合作，並遵循清晰的編輯政策與透明的服務條款。",
    isbnNote: "ISBN 僅分配予經 Panorama Scholarly Books 正式審查、接受並依簽署出版協議出版的著作，不作出售，亦不單獨提供編號。",
    services: "出版服務與費用",
    guidelines: "作者指南",
    newsEyebrow: "最新消息與公告",
    newsHeading: "出版品牌通告",
  },
  "zh-Hans": {
    eyebrow: "学术图书出版 · 香港",
    headline: ["学术之书，", "思想无界。"],
    lede: "Panorama Scholarly Books 是 Panorama Scholarly Group Limited 旗下的学术图书出版品牌，出版人文学科、社会科学及新兴领域的学术专著、编著文集、学术教材与研究报告。",
    browse: "浏览书目",
    publish: "与我们出版",
    fieldsLabel: "出版领域",
    pubEyebrow: "出版物",
    pubHeading: "书目精选",
    latest: "最新出版",
    viewBook: "查看图书详情",
    allBooks: "浏览完整书目",
    growing: "书目将持续增加，新书出版后即在此公布。",
    seriesEyebrow: "书系",
    seriesHeading: "接受提案的书系",
    seriesBody: "每个书系界定其学术范围与接受的图书类型。目前各书系尚未出版任何著作。",
    allSeries: "浏览所有书系",
    publishEyebrow: "与 Panorama 出版",
    publishHeading: "从书稿到成书的审慎路径",
    publishBody: "我们依据已签署的出版协议，与学术作者、编者及机构合作，并遵循清晰的编辑政策与透明的服务条款。",
    isbnNote: "ISBN 仅分配给经 Panorama Scholarly Books 正式审查、接受并依签署出版协议出版的著作，不出售，也不单独提供编号。",
    services: "出版服务与费用",
    guidelines: "作者指南",
    newsEyebrow: "最新消息与公告",
    newsHeading: "出版品牌通告",
  },
} as const;

function SectionHead({ eyebrow, heading, action }: { eyebrow: string; heading: string; action?: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-10 lg:mb-14">
      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="type-h2">{heading}</h2>
      </div>
      {action}
    </div>
  );
}

/** Brand composition for the hero: the three offset leaves of the Panorama
    mark, drawn large, with the imprint's real fields set as a colophon. */
function HeroColophon({ locale, label }: { locale: Locale; label: string }) {
  return (
    <div className="relative h-full min-h-[340px] bg-stone overflow-hidden">
      <svg viewBox="0 0 400 480" className="absolute -right-8 -top-6 w-[58%] sm:w-[70%] lg:w-[86%] max-w-[440px] h-auto" aria-hidden="true">
        <rect x="40" y="20" width="200" height="270" fill="#173D32" />
        <rect x="100" y="80" width="200" height="270" fill="#4F7466" opacity="0.85" />
        <rect x="160" y="140" width="200" height="270" fill="#A6855B" opacity="0.55" />
        <line x1="40" y1="20" x2="40" y2="290" stroke="#A6855B" strokeWidth="2" />
      </svg>
      <div className="absolute left-0 bottom-0 p-6 sm:p-8 lg:p-10 bg-gradient-to-t from-stone via-stone/90 to-transparent pt-16 w-full">
        <p className="eyebrow !text-ink-2 mb-3">{label}</p>
        <ul className="font-serif text-[17px] text-ink leading-[1.9]">
          {fields.map((f) => (
            <li key={f.en}>{f[locale]}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function HomePageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const books = catalogue;
  const featured = books.slice(0, 4);
  const fewBooks = featured.length <= 2;

  return (
    <>
      <AnnouncementBanner locale={locale} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="border-b border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 py-12 sm:py-16 lg:py-20">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p className="eyebrow mb-6">{t.eyebrow}</p>
              <h1 className="type-display">
                <span className="block">{t.headline[0]}</span>
                <span className="block text-forest italic font-normal">{t.headline[1]}</span>
              </h1>
              <span className="rule-gold mt-8 mb-7" aria-hidden="true" />
              <p className="lede max-w-[54ch]">{t.lede}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <Link href={localeHref("/books", locale)} className="btn btn-primary">
                  {t.browse}
                  <ArrowRight size={16} weight="bold" aria-hidden="true" />
                </Link>
                <Link href={localeHref("/for-authors", locale)} className="btn btn-secondary">
                  {t.publish}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <HeroColophon locale={locale} label={t.fieldsLabel} />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Featured publications ────────────────────────────────────── */}
      {books.length > 0 && (
        <section className="py-16 lg:py-24">
          <Container>
            <SectionHead
              eyebrow={t.pubEyebrow}
              heading={fewBooks ? t.latest : t.pubHeading}
              action={
                <Link href={localeHref("/books", locale)} className="link-arrow">
                  {t.allBooks}
                  <ArrowRight size={14} weight="bold" aria-hidden="true" />
                </Link>
              }
            />
            {fewBooks ? (
              <div className="space-y-16">
                {featured.map((book) => (
                  <BookEntry key={book.slug} book={book} locale={locale} moreLabel={t.viewBook} />
                ))}
                <p className="meta border-t border-line pt-6">{t.growing}</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 sm:gap-x-8 gap-y-12">
                {featured.map((book) => (
                  <BookCard key={book.slug} book={book} locale={locale} />
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* ── Book series ──────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 border-t border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">{t.seriesEyebrow}</p>
              <h2 className="type-h2">{t.seriesHeading}</h2>
              <p className="text-ink-2 mt-5 max-w-[42ch]">{t.seriesBody}</p>
              <Link href={localeHref("/book-series", locale)} className="link-arrow mt-6">
                {t.allSeries}
                <ArrowRight size={14} weight="bold" aria-hidden="true" />
              </Link>
            </div>
            <ol className="lg:col-span-8 border-t border-line">
              {series.map((s, i) => (
                <li key={s.id} className="border-b border-line">
                  <Link
                    href={`${localeHref("/book-series", locale)}#${s.id}`}
                    className="group grid grid-cols-[2.5rem_1fr_auto] gap-x-4 items-baseline py-5"
                  >
                    <span className="font-sans text-[13px] tabular-nums text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-serif text-[19px] leading-snug text-ink group-hover:text-forest">{s.title[locale]}</span>
                    <ArrowRight size={14} className="text-ink-3 group-hover:text-forest transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* ── Publishing with Panorama ─────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-stone-soft border-y border-line">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-3">{t.publishEyebrow}</p>
              <h2 className="type-h2">{t.publishHeading}</h2>
              <p className="text-ink-2 mt-5 max-w-[42ch]">{t.publishBody}</p>
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 mt-8">
                <Link href={localeHref("/for-authors", locale)} className="btn btn-primary">{t.guidelines}</Link>
                <Link href={localeHref("/publishing-services", locale)} className="btn btn-quiet">{t.services}</Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {pillars.map((p, i) => (
                  <div key={p.title.en} className="border-t-2 border-forest pt-5">
                    <dt className="flex items-baseline gap-3">
                      <span className="font-sans text-[13px] tabular-nums text-gold-ink">{String(i + 1).padStart(2, "0")}</span>
                      <span className="type-h3">{p.title[locale]}</span>
                    </dt>
                    <dd className="mt-3 text-ink-2 text-[16px] leading-relaxed">
                      {p.body[locale]}
                      <Link href={localeHref(p.href, locale)} className="link-arrow mt-3 !flex w-fit">
                        {p.link[locale]}
                        <ArrowRight size={14} weight="bold" aria-hidden="true" />
                      </Link>
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="meta mt-12 pt-6 border-t border-line max-w-[80ch]">{t.isbnNote}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── News & announcements ─────────────────────────────────────── */}
      <section className="pt-16 lg:pt-24">
        <Container>
          <SectionHead eyebrow={t.newsEyebrow} heading={t.newsHeading} />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
            {news.map((item) => (
              <li key={item.id} className="border-t border-line pt-5">
                <Link href={localeHref(item.href, locale)} className="group block">
                  <p className="meta flex flex-wrap gap-x-2">
                    <span className="font-semibold text-gold-ink">{newsKindLabel(item.kind, locale)}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={item.date}>{formatNewsDate(item.date, locale)}</time>
                  </p>
                  <h3 className="font-serif text-[20px] leading-snug text-ink mt-2 group-hover:text-forest group-hover:underline underline-offset-4 decoration-1 decoration-line-strong">
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
