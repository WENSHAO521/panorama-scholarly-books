"use client";

import Container from "@/components/Container";
import { useLanguage } from "@/context/LanguageContext";

const copy = {
  en: {
    eyebrow: "Distribution",
    heading: "Sales and Distribution",
    subheading: "Information on the current status of book sales and distribution for Panorama Scholarly Books titles.",
    currentStatusHeading: "Current Distribution Status",
    currentStatusIntro: "Panorama Scholarly Group Limited is gradually developing its book sales and distribution channels. Each eligible Panorama Scholarly Books title receives the following:",
    currentStatusItems: [
      "An official book page on the Panorama Scholarly Books website",
      "Publisher and bibliographic metadata (title, author, subject classification)",
      "ISBN information for the approved edition and product format",
      "Digital archiving and publisher publication records",
    ],
    currentStatusNote: "Distribution to commercial retailers, library networks, and open access platforms is available as an optional service for eligible titles. Please contact the Books department to discuss distribution options for your title.",
    directOrderHeading: "Direct Order and Purchase Inquiries",
    directOrderBody: "For individual copy requests, institutional purchase inquiries, or questions about obtaining specific titles, please contact the Books department directly.",
    booksDepartment: "Books Department",
    orderInquiry: "Order Inquiry",
    podHeading: "Print-on-Demand",
    podBody1: "Print-on-demand (POD) fulfillment is available for selected titles where arrangements have been established with a POD service provider. Where POD is available for a title, this will be noted on the individual book page.",
    podBody2: "Authors and publishers interested in enabling POD for their titles should contact the Books department to discuss eligibility and setup requirements.",
    ebookHeading: "eBook Distribution",
    ebookBody1: "eBook distribution through platforms such as Google Play Books and other channels is under development for eligible titles. Where eBook access is available, it will be listed on the individual book page.",
    ebookBody2: "Authors who have produced a digital edition (PDF, EPUB) may inquire about eBook distribution as an optional service.",
    institutionalHeading: "Institutional Purchase Inquiries",
    institutionalBody: "Libraries, universities, research institutes, and other institutions wishing to acquire Panorama Scholarly Books titles should contact the Books department. We can accommodate institutional purchase requests and provide invoices as required.",
    institutionalSubmit: "Submit an institutional purchase inquiry",
    futureHeading: "Future Distribution Channels",
    futureIntro: "Panorama Scholarly Group is working toward broader distribution arrangements that may include the following channels:",
    futureItems: [
      "Amazon (print and Kindle)",
      "Google Play Books",
      "IngramSpark",
      "VLB (Verzeichnis lieferbarer Bucher)",
      "JSTOR Books",
      "Library network catalogues",
      "Open access repositories",
    ],
    noticeHeading: "Important Notice",
    noticeP1: "Commercial retailer distribution, print-on-demand, eBook-platform distribution, library supply, and third-party metadata services are optional and are not included in standard publishing packages unless expressly stated in writing. Availability of a distribution service depends on the title, publication format, territorial rights, technical files, platform requirements, and third-party approval.",
    noticeP2: "Panorama Scholarly Books does not guarantee bookstore placement, platform acceptance, library acquisition, sales volume, ranking, indexing, reviews, citations, or commercial performance.",
  },
  "zh-Hant": {
    eyebrow: "發行",
    heading: "銷售與發行",
    subheading: "有關 Panorama Scholarly Books 書目銷售與發行現況的資訊。",
    currentStatusHeading: "目前發行狀況",
    currentStatusIntro: "Panorama Scholarly Group Limited 正逐步發展其圖書銷售與發行渠道。每本符合資格的 Panorama Scholarly Books 書目均享有以下服務：",
    currentStatusItems: [
      "Panorama Scholarly Books 網站上的官方圖書頁面",
      "出版者及書目元數據（書名、作者、學科分類）",
      "對應核准版次及產品格式的 ISBN 資訊",
      "數位典藏與出版紀錄",
    ],
    currentStatusNote: "對符合資格的書目，發行至商業零售通路、圖書館網絡及開放獲取平台屬選用服務。請聯絡圖書部門洽詢您書目的發行選項。",
    directOrderHeading: "直接訂購與採購洽詢",
    directOrderBody: "如需索取個別樣書、機構採購洽詢，或詢問取得特定書目之方式，請直接聯絡圖書部門。",
    booksDepartment: "圖書部門",
    orderInquiry: "訂購洽詢",
    podHeading: "隨需印刷",
    podBody1: "已與隨需印刷（POD）服務供應商建立合作安排的特定書目，可提供隨需印刷服務。若某書目提供隨需印刷，將於該書目的個別頁面標明。",
    podBody2: "有意為其書目啟用隨需印刷的作者及出版方，請聯絡圖書部門洽詢資格及設置需求。",
    ebookHeading: "電子書發行",
    ebookBody1: "透過 Google Play Books 等平台的電子書發行渠道正為符合資格的書目籌備中。若某書目已提供電子書取得渠道，將列於該書目的個別頁面。",
    ebookBody2: "已製作數位版本（PDF、EPUB）的作者，可洽詢將其書目納入電子書發行的選用服務。",
    institutionalHeading: "機構採購洽詢",
    institutionalBody: "圖書館、大學、研究機構及其他有意採購 Panorama Scholarly Books 書目的機構，請聯絡圖書部門。我們可配合機構採購需求並依要求提供發票。",
    institutionalSubmit: "提交機構採購洽詢",
    futureHeading: "未來發行渠道",
    futureIntro: "Panorama Scholarly Group 正致力擴展發行安排，可能涵蓋以下渠道：",
    futureItems: [
      "Amazon（紙本及 Kindle）",
      "Google Play Books",
      "IngramSpark",
      "VLB（德國在版圖書目錄）",
      "JSTOR Books",
      "圖書館網絡目錄",
      "開放獲取典藏平台",
    ],
    noticeHeading: "重要須知",
    noticeP1: "商業零售發行、隨需印刷、電子書平台發行、圖書館供應及第三方元數據服務均屬選用服務，除非書面另有明確說明，否則不包含於標準出版方案內。發行服務的可提供性取決於書目本身、出版格式、地域版權、技術檔案、平台要求及第三方核准。",
    noticeP2: "Panorama Scholarly Books 並不保證書店上架、平台接受、圖書館採購、銷售量、排名、索引收錄、書評、引用次數或商業表現。",
  },
} as const;

export default function DistributionPageClient() {
  const { locale } = useLanguage();
  const t = copy[locale];

  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            {t.eyebrow}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            {t.heading}
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            {t.subheading}
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">

          {/* Current status */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.currentStatusHeading}
            </h2>
            <div className="border border-[#e2e2e2] p-6 md:p-8 mb-6">
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
                {t.currentStatusIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {t.currentStatusItems.map((item) => (
                  <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              {t.currentStatusNote}
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Direct order */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.directOrderHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
              {t.directOrderBody}
            </p>
            <div className="border border-[#e2e2e2] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-sm text-[#888888] mb-1">{t.booksDepartment}</p>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Order Inquiry"
                  className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <a
                href="mailto:books@panorama-sg.com?subject=Book Order Inquiry"
                className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-6 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center"
              >
                {t.orderInquiry}
              </a>
            </div>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* POD */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.podHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              {t.podBody1}
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              {t.podBody2}
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* eBook */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.ebookHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              {t.ebookBody1}
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              {t.ebookBody2}
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Institutional */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.institutionalHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
              {t.institutionalBody}
            </p>
            <a
              href="mailto:books@panorama-sg.com?subject=Institutional Purchase Inquiry"
              className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              {t.institutionalSubmit}
            </a>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Future channels */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              {t.futureHeading}
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              {t.futureIntro}
            </p>
            <ul className="flex flex-col gap-2">
              {t.futureItems.map((item) => (
                <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Disclaimer */}
          <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-6 md:p-8">
            <p className="font-serif text-xs tracking-[0.2em] uppercase text-[#888888] mb-4">
              {t.noticeHeading}
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
              {t.noticeP1}
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              {t.noticeP2}
            </p>
          </div>

        </div>
      </Container>
    </>
  );
}
