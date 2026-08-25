"use client";

import Container from "@/components/Container";
import ContactForm from "./ContactForm";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import type { Locale } from "@/lib/locale";

const copy = {
  en: {
    eyebrow: "Contact",
    heading: "Contact Us",
    subheading: "For publishing inquiries, copy requests, institutional purchases, and general questions.",
    email: "Email",
    allInquiries: "All inquiries",
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
    responseTime: "Response Time",
    responseTimeText:
      "We aim to respond to all inquiries within 5-7 business days. For proposal submissions, please allow 2-4 weeks for an initial response.",
  },
  "zh-Hant": {
    eyebrow: "聯絡我們",
    heading: "聯絡我們",
    subheading: "如需洽詢出版、索取樣書、機構採購或其他一般問題，歡迎與我們聯絡。",
    email: "電郵",
    allInquiries: "所有查詢",
    location: "地址",
    address: <>Panorama Scholarly Group Limited
      <br />
      香港旺角彌敦道625號雅蘭中心辦公樓二期15樓1508室
    </>,
    responseTime: "回覆時間",
    responseTimeText: "我們致力於在5-7個工作天內回覆所有查詢。如為提案投稿，請預留2-4週作初步回覆。",
  },
  "zh-Hans": {
    eyebrow: "联系我们",
    heading: "联系我们",
    subheading: "如需咨询出版、索取样书、机构采购或其他一般问题，欢迎与我们联系。",
    email: "电邮",
    allInquiries: "所有咨询",
    location: "地址",
    address: <>Panorama Scholarly Group Limited
      <br />
      香港旺角弥敦道625号雅兰中心办公楼二期15楼1508室
    </>,
    responseTime: "回复时间",
    responseTimeText: "我们致力于在5-7个工作日内回复所有咨询。如为提案投稿，请预留2-4周用于初步回复。",
  },
} as const;

export default function ContactPageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      <AnnouncementBanner locale={locale} />
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

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12 lg:py-16">

          {/* Left: contact info */}
          <aside className="lg:col-span-1 lg:border-r border-[#e2e2e2] lg:pr-10 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <div className="mb-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                  {t.email}
                </p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors block"
                >
                  books@panorama-sg.com
                </a>
                <p className="font-serif text-xs text-[#888888] mt-1">
                  {t.allInquiries}
                </p>
              </div>

              <div className="mb-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                  {t.location}
                </p>
                <p className="font-serif text-sm text-[#555555] leading-relaxed">
                  {t.address}
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                  {t.responseTime}
                </p>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
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
