import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Panorama Scholarly Books for publishing inquiries, order requests, and general questions.",
};

const inquiryTypes = [
  {
    label: "Book Publishing Inquiry",
    desc: "Submitting a book proposal or discussing a publishing project.",
    subject: "Book Publishing Inquiry",
  },
  {
    label: "Order / Copy Request",
    desc: "Requesting a copy of a published title or placing an order.",
    subject: "Book Order Request",
  },
  {
    label: "Institutional Purchase",
    desc: "Institutional acquisition of one or more titles for a library or organisation.",
    subject: "Institutional Purchase Inquiry",
  },
  {
    label: "Rights and Permissions",
    desc: "Licensing, rights, or permissions related to published content.",
    subject: "Rights and Permissions Inquiry",
  },
  {
    label: "General Inquiry",
    desc: "Any other question about Panorama Scholarly Books.",
    subject: "General Inquiry",
  },
];

export default function ContactPage() {
  return (
    <>
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
                  Panorama Scholarly Group<br />
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

            {/* Inquiry types */}
            <section className="mb-12">
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-6">
                Select Your Inquiry Type
              </h2>
              <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {inquiryTypes.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-[#e2e2e2] py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <p className="font-serif text-base text-[#111111] font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="font-serif text-sm text-[#888888]">
                        {item.desc}
                      </p>
                    </div>
                    <a
                      href={`mailto:books@panorama-sg.com?subject=${encodeURIComponent(item.subject)}`}
                      className="shrink-0 font-serif text-[11px] tracking-[0.12em] uppercase border border-[#e2e2e2] px-4 py-2 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors whitespace-nowrap"
                    >
                      Send Email
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact form */}
            <section>
              <h2 className="font-serif text-xl text-[#111111] font-medium mb-2">
                Contact Form
              </h2>
              <p className="font-serif text-sm text-[#888888] mb-6">
                You may also use the form below. All fields marked with an asterisk are required.
              </p>

              <form
                action={`mailto:books@panorama-sg.com`}
                method="GET"
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Affiliation
                  </label>
                  <input
                    type="text"
                    name="affiliation"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="University, institution, or organisation"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Inquiry Type *
                  </label>
                  <select
                    name="subject"
                    required
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">Select inquiry type</option>
                    {inquiryTypes.map((item) => (
                      <option key={item.subject} value={item.subject}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Message *
                  </label>
                  <textarea
                    name="body"
                    required
                    rows={6}
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8] resize-none"
                    placeholder="Please describe your inquiry in detail. For book proposals, please include the working title, subject area, and a brief description of the project."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="mt-1 shrink-0 border-[#e2e2e2]"
                  />
                  <label
                    htmlFor="consent"
                    className="font-serif text-xs text-[#888888] leading-relaxed"
                  >
                    I consent to Panorama Scholarly Books retaining my contact details for the purpose of responding to this inquiry. My information will not be shared with third parties.
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-8 py-3 hover:bg-transparent hover:text-[#111111] transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>

              <p className="font-serif text-xs text-[#888888] mt-6 leading-relaxed">
                This form opens your email client with the details pre-filled. Alternatively, email us directly at{" "}
                <a
                  href="mailto:books@panorama-sg.com"
                  className="text-[#555555] underline underline-offset-2"
                >
                  books@panorama-sg.com
                </a>
                .
              </p>
            </section>

          </main>
        </div>
      </Container>
    </>
  );
}
