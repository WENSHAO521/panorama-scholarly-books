"use client";

import Container from "@/components/Container";
import ContactForm from "./ContactForm";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import type { Locale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "Contact",
    heading: "Contact us",
    subheading: "Publishing enquiries, requests for copies, institutional purchases and general correspondence.",
    email: "Email",
    allInquiries: "General enquiries",
    location: "Location",
    address: (
      <>
        Panorama Scholarly Group Limited
        <br />
        Room 1508, 15/F., Office Tower Two,
        <br />
        Grand Plaza, 625 Nathan Road,
        <br />
        Mong Kok, Kowloon, Hong Kong
      </>
    ),
    responseTime: "Response time",
    responseTimeText:
      "Enquiries are normally answered within 5–7 business days. For book proposals, an initial response is normally issued within 2–4 weeks.",
  },
  "zh-Hant": {
    eyebrow: "聯絡我們",
    heading: "聯絡我們",
    subheading: "出版諮詢、索取樣書、機構採購及其他一般事務，請按以下方式聯絡。",
    email: "電郵",
    allInquiries: "一般諮詢",
    location: "地址",
    address: <>Panorama Scholarly Group Limited
      <br />
      香港旺角彌敦道625號雅蘭中心辦公樓二期15樓1508室
    </>,
    responseTime: "回覆時間",
    responseTimeText: "一般諮詢將於5至7個工作日內回覆；出版計劃書一般於二至四週內作出初步回覆。",
  },
  "zh-Hans": {
    eyebrow: "联系我们",
    heading: "联系我们",
    subheading: "出版咨询、索取样书、机构采购及其他一般事务，请按以下方式联系。",
    email: "电邮",
    allInquiries: "一般咨询",
    location: "地址",
    address: <>Panorama Scholarly Group Limited
      <br />
      香港旺角弥敦道625号雅兰中心办公楼二期15楼1508室
    </>,
    responseTime: "回复时间",
    responseTimeText: "一般咨询将于5至7个工作日内回复；出版计划书一般于二至四周内作出初步回复。",
  },
} as const;

export default function ContactPageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <AnnouncementBanner locale={locale} />
      <section className="border-b border-line pt-16 pb-12">
        <Container>
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h1 className="type-h1 mb-4">
            {t.heading}
          </h1>
          <p className="lede max-w-[62ch]">
            {t.subheading}
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12 lg:py-16">

          {/* Left: contact info */}
          <aside className="lg:col-span-1 lg:border-r border-line lg:pr-10 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <div className="mb-10">
                <p className="eyebrow mb-4">
                  {t.email}
                </p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-base text-ink hover:text-brand transition-colors block"
                >
                  books@panorama-sg.com
                </a>
                <p className="font-serif text-xs text-ink-3 mt-1">
                  {t.allInquiries}
                </p>
              </div>

              <div className="mb-10">
                <p className="eyebrow mb-4">
                  {t.location}
                </p>
                <p className="font-serif text-sm text-ink-2 leading-relaxed">
                  {t.address}
                </p>
              </div>

              <div>
                <p className="eyebrow mb-4">
                  {t.responseTime}
                </p>
                <p className="font-serif text-sm text-ink-3 leading-relaxed">
                  {t.responseTimeText}
                </p>
              </div>
            </div>
          </aside>

          {/* Right: inquiry types + form */}
          <main className="lg:col-span-2 lg:pl-10">
            <ContactForm locale={locale} />
          </main>
        </div>
      </Container>
    </>
  );
}
