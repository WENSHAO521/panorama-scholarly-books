import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "./ContactForm";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Panorama Scholarly Books for publishing inquiries, order requests, and general questions.",
};

export default function ContactPage() {
  return (
    <>
      <AnnouncementBanner />
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Contact
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Contact Us
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            For publishing inquiries, copy requests, institutional purchases, and general questions.
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
                  Email
                </p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors block"
                >
                  books@panorama-sg.com
                </a>
                <p className="font-serif text-xs text-[#888888] mt-1">
                  All inquiries
                </p>
              </div>

              <div className="mb-10">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                  Location
                </p>
                <p className="font-serif text-sm text-[#555555] leading-relaxed">
                  Panorama Scholarly Group Limited<br />
                  Room 1508, 15/F., Office Tower Two,<br />
                  Grand Plaza, 625 Nathan Road,<br />
                  Kowloon, Hong Kong
                </p>
              </div>

              <div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                  Response Time
                </p>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
                  We aim to respond to all inquiries within 5-7 business days. For proposal submissions, please allow 2-4 weeks for an initial response.
                </p>
              </div>
            </div>
          </aside>

          {/* Right: inquiry types + form */}
          <main className="lg:col-span-2 lg:pl-10">
            <ContactForm />
          </main>
        </div>
      </Container>
    </>
  );
}
