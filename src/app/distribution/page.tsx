import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Distribution",
  description:
    "Information about book sales and distribution channels for Panorama Scholarly Books titles.",
};

export default function DistributionPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Distribution
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Sales and Distribution
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            Information on the current status of book sales and distribution for Panorama Scholarly Books titles.
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">

          {/* Current status */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Current Distribution Status
            </h2>
            <div className="border border-[#e2e2e2] p-6 md:p-8 mb-6">
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
                Panorama Scholarly Group is gradually developing its book sales and distribution channels. At present, each published title may receive the following:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "An official book page on the Panorama Scholarly Books website",
                  "Publication metadata (title, author, ISBN, subject classification)",
                  "ISBN and publisher information where applicable",
                  "Digital archiving and record-keeping",
                ].map((item) => (
                  <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              Distribution to commercial retailers, library networks, and open access platforms is available as an optional service for eligible titles. Please contact the Books department to discuss distribution options for your title.
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Direct order */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Direct Order and Purchase Inquiries
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
              For individual copy requests, institutional purchase inquiries, or questions about obtaining specific titles, please contact the Books department directly.
            </p>
            <div className="border border-[#e2e2e2] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-sm text-[#888888] mb-1">Books Department</p>
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
                Order Inquiry
              </a>
            </div>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* POD */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Print-on-Demand
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              Print-on-demand (POD) fulfillment is available for selected titles where arrangements have been established with a POD service provider. Where POD is available for a title, this will be noted on the individual book page.
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              Authors and publishers interested in enabling POD for their titles should contact the Books department to discuss eligibility and setup requirements.
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* eBook */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              eBook Distribution
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              eBook distribution through platforms such as Google Play Books and other channels is under development for eligible titles. Where eBook access is available, it will be listed on the individual book page.
            </p>
            <p className="font-serif text-sm text-[#888888] leading-relaxed">
              Authors who have produced a digital edition (PDF, EPUB) may inquire about eBook distribution as an optional service.
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Institutional */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Institutional Purchase Inquiries
            </h2>
            <p className="font-serif text-base text-[#555500] leading-relaxed mb-6">
              Libraries, universities, research institutes, and other institutions wishing to acquire Panorama Scholarly Books titles should contact the Books department. We can accommodate institutional purchase requests and provide invoices as required.
            </p>
            <a
              href="mailto:books@panorama-sg.com?subject=Institutional Purchase Inquiry"
              className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              Submit an institutional purchase inquiry
            </a>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Future channels */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Future Distribution Channels
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
              Panorama Scholarly Group is working toward broader distribution arrangements that may include the following channels:
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Amazon (print and Kindle)",
                "Google Play Books",
                "IngramSpark",
                "VLB (Verzeichnis lieferbarer Bucher)",
                "JSTOR Books",
                "Library network catalogues",
                "Open access repositories",
              ].map((item) => (
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
              Important Notice
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
              Book publishing fees do not guarantee book sales, bookstore placement, library acquisition, indexing, rankings, or commercial performance.
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              Panorama Scholarly Books provides publishing and production services. Distribution outcomes depend on external platforms, purchasing decisions by libraries and institutions, and other factors outside the publisher's direct control.
            </p>
          </div>

        </div>
      </Container>
    </>
  );
}
