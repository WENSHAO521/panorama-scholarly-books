"use client";

import Link from "next/link";
import { books, getBookBySlug } from "@/data/books";
import BookCard from "@/components/BookCard";
import HeroBookList from "@/components/HeroBookList";
import Container from "@/components/Container";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { useLanguage } from "@/context/LanguageContext";

const publishingAreas = [
  {
    label: { en: "Humanities", "zh-Hant": "人文學科" },
    sub: {
      en: "Philosophy, History, Literature, Cultural Studies",
      "zh-Hant": "哲學、歷史、文學、文化研究",
    },
  },
  {
    label: { en: "Social Sciences", "zh-Hant": "社會科學" },
    sub: {
      en: "Sociology, Anthropology, Political Science",
      "zh-Hant": "社會學、人類學、政治學",
    },
  },
  {
    label: { en: "Education", "zh-Hant": "教育" },
    sub: {
      en: "Policy, Pedagogy, Higher Education, Curriculum",
      "zh-Hant": "政策、教學法、高等教育、課程",
    },
  },
  {
    label: { en: "Arts", "zh-Hant": "藝術" },
    sub: {
      en: "Art History, Media Studies, Performance, Design",
      "zh-Hant": "藝術史、媒體研究、表演藝術、設計",
    },
  },
  {
    label: { en: "Public Policy", "zh-Hant": "公共政策" },
    sub: {
      en: "Governance, Public Administration, Law",
      "zh-Hant": "治理、公共行政、法律",
    },
  },
  {
    label: { en: "AI and Future Society", "zh-Hant": "人工智能與未來社會" },
    sub: {
      en: "Technology Ethics, Digital Futures, Science Studies",
      "zh-Hant": "科技倫理、數位未來、科學研究",
    },
  },
];

const featuredSlugs = [
  "education-policy-digital-age",
  "global-society-governance-asia-pacific",
  "chan-buddhism-sinicization-collected-essays-cn",
];

const bookTypesAccepted = [
  { en: "Scholarly Monographs", "zh-Hant": "學術專著" },
  { en: "Edited Volumes", "zh-Hant": "編著文集" },
  { en: "Academic Textbooks", "zh-Hant": "學術教材" },
  { en: "Research Reports", "zh-Hant": "研究報告" },
  { en: "Conference Proceedings", "zh-Hant": "會議論文集" },
  { en: "Doctoral Dissertation-Based Books", "zh-Hant": "博士論文改編專書" },
  { en: "Interdisciplinary Research Books", "zh-Hant": "跨學科研究專書" },
];

const packageAFeatures = [
  { en: "Editorial and publication eligibility screening", "zh-Hant": "編輯與出版資格審查" },
  { en: "Publishing agreement and rights review", "zh-Hant": "出版協議與版權審查" },
  { en: "One ISBN for one approved edition and format", "zh-Hant": "為一個核准版次及格式提供一組 ISBN" },
  { en: "Publisher metadata and official book webpage", "zh-Hant": "出版者元數據與官方圖書網頁" },
  { en: "Digital archiving and publication records", "zh-Hant": "數位典藏與出版紀錄" },
];

const packageBFeatures = [
  { en: "All services in Package A", "zh-Hant": "涵蓋方案 A 所有服務" },
  { en: "Basic proofreading and standard typesetting", "zh-Hant": "基礎校對與標準排版" },
  { en: "Standard academic cover design", "zh-Hant": "標準學術封面設計" },
  { en: "Print-ready PDF production", "zh-Hant": "印刷用 PDF 製作" },
  { en: "One consolidated round of author corrections", "zh-Hant": "一輪整合式作者校訂" },
];

const packageCFeatures = [
  { en: "All services in Package B", "zh-Hant": "涵蓋方案 B 所有服務" },
  { en: "Edited volumes and multi-author works", "zh-Hant": "編著文集與多作者著作" },
  { en: "Extended proofreading and advanced typesetting", "zh-Hant": "延伸校對與進階排版" },
  { en: "Customized cover and interior design", "zh-Hant": "客製化封面與內文設計" },
  { en: "Up to two consolidated correction rounds", "zh-Hant": "最多兩輪整合式校訂" },
];

const copy = {
  en: {
    eyebrow: "Academic Book Publishing",
    lede: "The academic book publishing imprint of Panorama Scholarly Group Limited.",
    lede2: "We publish scholarly monographs, edited volumes, research reports, academic textbooks, and interdisciplinary works across the humanities, social sciences, education, arts, public policy, and emerging fields.",
    browseBooks: "Browse Books",
    publishWithUs: "Publish with Us",
    aboutHeading: "About Panorama Scholarly Books",
    aboutBody: "Panorama Scholarly Books is dedicated to publishing academic works that contribute to scholarly communication, interdisciplinary research, and global knowledge exchange. As the academic book publishing imprint of Panorama Scholarly Group Limited, the imprint supports academic authors, editors, researchers, and institutions through responsible publishing practices and professional production services.",
    publishingAreasEyebrow: "Publishing Areas",
    publishingAreasHeading: "Fields We Publish",
    recentTitles: "Recent Titles",
    featuredBooks: "Featured Books",
    browseAllBooks: "Browse all books",
    publishingServicesEyebrow: "Publishing Services",
    publishingServicesHeading: "Book Publishing Packages",
    publishingServicesNote: "Fees are per title, edition, and product format. Effective 1 August 2026.",
    packageA: "Package A",
    packageATitle: "Author-Prepared Publication",
    packageAPrice: "USD 999",
    packageB: "Package B",
    packageBTitle: "Standard Academic Book Production",
    packageBPrice: "USD 1,799",
    packageC: "Package C",
    packageCTitle: "Extended and Complex Book Production",
    packageCPrice: "From USD 2,499",
    perTitle: "/ title, edition & format",
    packageADesc: "For authors who provide a fully proofread manuscript, final typeset interior file, and publication-ready cover.",
    packageBDesc: "For standard academic books requiring publisher-assisted proofreading, typesetting, and cover design.",
    packageCDesc: "For longer, bilingual, multilingual, edited, illustrated, or technically complex academic books.",
    learnMore: "Learn more",
    noticeHeading: "Important Publishing Notice",
    noticeP1: "ISBNs are assigned only to publications formally reviewed, accepted, and published by Panorama Scholarly Books under a signed publishing agreement. ISBNs are not sold, transferred, leased, or supplied as standalone numbers. Publishing fees are service charges covering editorial assessment, publisher administration, rights review, metadata management, ISBN assignment, production processing, official records, digital archiving, and compliance coordination.",
    noticeP2: "Printing, binding, shipping, statutory deposit copies, and third-party platform charges are not included unless expressly stated in a written quotation. Publication fees do not guarantee sales, indexing, citations, or academic promotion.",
    forAuthorsEyebrow: "For Authors",
    forAuthorsHeading: "Publish with Panorama Scholarly Books",
    forAuthorsBody: "We welcome proposals from academic authors, editors, and research teams working across a broad range of disciplines. Submissions are evaluated on scholarly merit, originality, clarity of argument, and relevance to academic discourse.",
    authorGuidelines: "Author Guidelines",
    acceptTypesIntro: "We accept the following book types:",
    distributionEyebrow: "Sales and Distribution",
    distributionHeading: "Distribution channels are currently being developed.",
    distributionBody: "Panorama Scholarly Group Limited is gradually developing its book sales and distribution channels. At present, each published title receives an official book webpage, publisher and bibliographic metadata, an ISBN for its approved edition and product format, and digital archiving.",
    distributionNote: "Book publishing fees do not guarantee book sales, bookstore placement, library acquisition, indexing, ranking, or commercial performance.",
    distributionInfo: "Distribution information",
    ctaHeading: "Submit a Book Proposal",
    ctaBody: "To discuss a book project, submit a proposal, or inquire about publishing services, please contact the Books department directly.",
    ctaContact: "Contact the Books Department",
  },
  "zh-Hant": {
    eyebrow: "學術圖書出版",
    lede: "Panorama Scholarly Books 是 Panorama Scholarly Group Limited 旗下的學術圖書出版品牌。",
    lede2: "我們出版跨越人文學科、社會科學、教育、藝術、公共政策及新興領域的學術專著、編著文集、研究報告、學術教材與跨學科著作。",
    browseBooks: "瀏覽書目",
    publishWithUs: "與我們出版",
    aboutHeading: "關於 Panorama Scholarly Books",
    aboutBody: "Panorama Scholarly Books 致力於出版有助於學術交流、跨學科研究與全球知識共享的學術著作。作為 Panorama Scholarly Group Limited 旗下的學術圖書出版品牌，本平台透過負責任的出版實踐與專業的製作服務，支持學術作者、編者、研究人員與機構。",
    publishingAreasEyebrow: "出版領域",
    publishingAreasHeading: "我們出版的領域",
    recentTitles: "近期出版",
    featuredBooks: "精選圖書",
    browseAllBooks: "瀏覽所有書目",
    publishingServicesEyebrow: "出版服務",
    publishingServicesHeading: "圖書出版方案",
    publishingServicesNote: "費用按每一書名、版次及產品格式計算，自2026年8月1日起生效。",
    packageA: "方案 A",
    packageATitle: "作者自備稿件出版",
    packageAPrice: "USD 999",
    packageB: "方案 B",
    packageBTitle: "標準學術圖書製作",
    packageBPrice: "USD 1,799",
    packageC: "方案 C",
    packageCTitle: "延伸與複雜圖書製作",
    packageCPrice: "USD 2,499 起",
    perTitle: "/ 每一書名、版次及格式",
    packageADesc: "適合已備妥完整校對稿件、最終排版內文檔案及出版用封面的作者。",
    packageBDesc: "適合需要出版社協助校對、排版及封面設計的標準學術圖書。",
    packageCDesc: "適合篇幅較長、雙語、多語、編著、附插圖或技術上較複雜的學術圖書。",
    learnMore: "了解更多",
    noticeHeading: "重要出版須知",
    noticeP1: "ISBN 僅分配予經 Panorama Scholarly Books 正式審查、接受並依簽署出版協議出版的著作。ISBN 不作出售、轉讓、租借，亦不會單獨提供編號。出版費用為服務費，涵蓋編輯評估、出版管理、版權審查、元數據管理、ISBN 分配、製作處理、正式紀錄、數位典藏及合規協調工作。",
    noticeP2: "除非書面報價中另有明確說明，否則印刷、裝訂、運送、法定送存本及第三方平台費用均不包含在內。出版費用並不保證銷售、索引收錄、引用次數或學術推廣成效。",
    forAuthorsEyebrow: "作者專區",
    forAuthorsHeading: "與 Panorama Scholarly Books 一同出版",
    forAuthorsBody: "我們歡迎來自各學科領域的學術作者、編者及研究團隊提交提案。投稿將依學術價值、原創性、論述清晰度及與學術論述的相關性進行評估。",
    authorGuidelines: "作者指南",
    acceptTypesIntro: "我們接受以下圖書類型：",
    distributionEyebrow: "銷售與發行",
    distributionHeading: "發行渠道現正逐步建置中。",
    distributionBody: "Panorama Scholarly Group Limited 正逐步發展其圖書銷售與發行渠道。目前每本已出版著作均設有官方圖書網頁、出版者及書目元數據、對應核准版次及產品格式的 ISBN，以及數位典藏。",
    distributionNote: "圖書出版費用並不保證圖書銷售、書店上架、圖書館採購、索引收錄、排名或商業表現。",
    distributionInfo: "發行資訊",
    ctaHeading: "提交圖書提案",
    ctaBody: "如需討論圖書專案、提交提案，或洽詢出版服務，請直接聯絡圖書部門。",
    ctaContact: "聯絡圖書部門",
  },
} as const;

export default function HomePageClient() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const featuredBooks = featuredSlugs
    .map((slug) => getBookBySlug(slug))
    .filter((b): b is NonNullable<typeof b> => Boolean(b));

  return (
    <>
      <AnnouncementBanner />
      {/* Hero */}
      <section className="min-h-[100dvh] grid grid-cols-1 lg:grid-cols-5 border-b border-[#e2e2e2]">
        {/* Left */}
        <div className="lg:col-span-3 flex flex-col justify-center px-6 md:px-12 xl:px-20 pt-16 pb-16 lg:pt-0 lg:pb-0">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-8">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-5xl md:text-6xl xl:text-[72px] leading-[1.06] text-[#111111] mb-6 font-medium">
            Panorama<br />Scholarly<br />Books
          </h1>
          <div className="w-10 h-px bg-[#111111] mb-8" />
          <p className="font-serif text-lg md:text-xl text-[#555555] leading-relaxed max-w-[52ch] mb-3">
            {t.lede}
          </p>
          <p className="font-serif text-base text-[#888888] leading-relaxed max-w-[52ch] mb-12">
            {t.lede2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
            <Link
              href="/books"
              className="font-serif text-base text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              {t.browseBooks}
            </Link>
            <Link
              href="/for-authors"
              className="font-serif text-base text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              {t.publishWithUs}
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
                {t.aboutHeading}
              </h2>
              <div className="w-8 h-px bg-[#111111] mb-6" />
            </div>
            <div>
              <p className="font-serif text-base text-[#555555] leading-relaxed">
                {t.aboutBody}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Publishing Areas */}
      <section className="border-b border-[#e2e2e2] py-20">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.publishingAreasEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-12">
            {t.publishingAreasHeading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e2e2]">
            {publishingAreas.map((area) => (
              <div key={area.label.en} className="bg-white p-8">
                <p className="font-serif text-xl text-[#111111] font-medium mb-3">
                  {area.label[locale]}
                </p>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
                  {area.sub[locale]}
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
                {t.recentTitles}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15]">
                {t.featuredBooks}
              </h2>
            </div>
            <Link
              href="/books"
              className="hidden sm:inline font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors whitespace-nowrap"
            >
              {t.browseAllBooks}
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
              {t.browseAllBooks}
            </Link>
          </div>
        </Container>
      </section>

      {/* Publishing Services */}
      <section className="border-b border-[#e2e2e2] py-20 bg-[#f7f7f7]">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.publishingServicesEyebrow}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-2">
            {t.publishingServicesHeading}
          </h2>
          <p className="font-serif text-sm text-[#888888] mb-12">
            {t.publishingServicesNote}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2e2e2]">
            {/* Package A */}
            <div className="bg-white p-10 flex flex-col">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-6">
                {t.packageA}
              </p>
              <p className="font-serif text-2xl text-[#111111] font-medium leading-snug min-h-[68px] mb-4">
                {t.packageATitle}
              </p>
              <div className="mb-6">
                <p className="font-serif text-3xl text-[#111111] font-medium">
                  {t.packageAPrice}
                </p>
                <p className="font-serif text-xs text-[#888888] mt-1">
                  {t.perTitle}
                </p>
              </div>
              <div className="w-full h-px bg-[#e2e2e2] mb-6" />
              <p className="font-serif text-sm text-[#555555] leading-relaxed mb-6">
                {t.packageADesc}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {packageAFeatures.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3">
                    <span className="text-[#888888] shrink-0">-</span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
              <Link
                href="/publishing-services"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                {t.learnMore}
              </Link>
            </div>

            {/* Package B */}
            <div className="bg-white p-10 flex flex-col">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-6">
                {t.packageB}
              </p>
              <p className="font-serif text-2xl text-[#111111] font-medium leading-snug min-h-[68px] mb-4">
                {t.packageBTitle}
              </p>
              <div className="mb-6">
                <p className="font-serif text-3xl text-[#111111] font-medium">
                  {t.packageBPrice}
                </p>
                <p className="font-serif text-xs text-[#888888] mt-1">
                  {t.perTitle}
                </p>
              </div>
              <div className="w-full h-px bg-[#e2e2e2] mb-6" />
              <p className="font-serif text-sm text-[#555555] leading-relaxed mb-6">
                {t.packageBDesc}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {packageBFeatures.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3">
                    <span className="text-[#888888] shrink-0">-</span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
              <Link
                href="/publishing-services"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                {t.learnMore}
              </Link>
            </div>

            {/* Package C */}
            <div className="bg-white p-10 flex flex-col">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-6">
                {t.packageC}
              </p>
              <p className="font-serif text-2xl text-[#111111] font-medium leading-snug min-h-[68px] mb-4">
                {t.packageCTitle}
              </p>
              <div className="mb-6">
                <p className="font-serif text-3xl text-[#111111] font-medium">
                  {t.packageCPrice}
                </p>
                <p className="font-serif text-xs text-[#888888] mt-1">
                  {t.perTitle}
                </p>
              </div>
              <div className="w-full h-px bg-[#e2e2e2] mb-6" />
              <p className="font-serif text-sm text-[#555555] leading-relaxed mb-6">
                {t.packageCDesc}
              </p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {packageCFeatures.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-[#555555] flex gap-3">
                    <span className="text-[#888888] shrink-0">-</span>
                    {item[locale]}
                  </li>
                ))}
              </ul>
              <Link
                href="/publishing-services"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                {t.learnMore}
              </Link>
            </div>
          </div>

          <div className="mt-6 border border-[#e2e2e2] bg-white p-6">
            <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-3">
              {t.noticeHeading}
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
              {t.noticeP1}
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              {t.noticeP2}
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
                {t.forAuthorsEyebrow}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111111] font-medium leading-[1.15] mb-6">
                {t.forAuthorsHeading}
              </h2>
              <div className="w-8 h-px bg-[#111111] mb-6" />
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-8">
                {t.forAuthorsBody}
              </p>
              <Link
                href="/for-authors"
                className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-6 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                {t.authorGuidelines}
              </Link>
            </div>
            <div>
              <p className="font-serif text-sm text-[#888888] mb-4 tracking-wide">
                {t.acceptTypesIntro}
              </p>
              <ul className="flex flex-col gap-3">
                {bookTypesAccepted.map((type) => (
                  <li key={type.en} className="font-serif text-base text-[#555555] flex gap-4 border-b border-[#f0f0f0] pb-3 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0 font-medium">-</span>
                    {type[locale]}
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
              {t.distributionEyebrow}
            </p>
            <p className="font-serif text-lg text-[#111111] mb-4 leading-relaxed">
              {t.distributionHeading}
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              {t.distributionBody}
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              {t.distributionNote}
            </p>
            <div className="mt-6">
              <Link
                href="/distribution"
                className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
              >
                {t.distributionInfo}
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
              {t.ctaHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-10 max-w-[52ch] mx-auto">
              {t.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-8 py-3 hover:bg-transparent hover:text-[#111111] transition-colors"
              >
                {t.ctaContact}
              </Link>
              <Link
                href="/for-authors"
                className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-8 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
              >
                {t.authorGuidelines}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
