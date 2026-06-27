import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "For Authors",
  description:
    "Guidelines for authors wishing to publish with Panorama Scholarly Books. Submission requirements, review process, and contact information.",
};

const acceptedTypes = [
  { type: "Scholarly Monographs", desc: "Original research works by one or more authors presenting a sustained argument or investigation." },
  { type: "Edited Volumes", desc: "Collections of original chapters by multiple contributors, organised and introduced by one or more editors." },
  { type: "Academic Textbooks", desc: "Pedagogically structured works designed for use in higher education curricula." },
  { type: "Research Reports", desc: "Structured reports presenting findings from research projects, systematic reviews, or policy investigations." },
  { type: "Conference Proceedings", desc: "Collections of peer-reviewed papers presented at academic conferences." },
  { type: "Doctoral Dissertation-Based Books", desc: "Substantially revised and expanded works based on doctoral theses." },
  { type: "Interdisciplinary Research Books", desc: "Works that cross conventional disciplinary boundaries and engage multiple fields of inquiry." },
];

const requiredDocs = [
  "Book proposal (see below for content requirements)",
  "Author or editor CV",
  "Sample chapters or full manuscript",
  "Table of contents",
  "Abstract and book description (200-400 words)",
  "Statement of target readership",
  "Statement of publication purpose and scholarly contribution",
  "Declaration of originality",
  "Permission documents for third-party materials, where applicable",
];

const proposalContent = [
  "Working title and subtitle",
  "Author / editor details and institutional affiliation",
  "Book type (monograph, edited volume, etc.)",
  "Subject area and disciplinary focus",
  "Description of the book and its central argument",
  "Table of contents with chapter summaries",
  "Target readership and course adoption potential, if relevant",
  "Estimated word count and projected completion date",
  "List of competing or complementary titles",
  "Status of the manuscript (draft, in progress, complete)",
];

const processSteps = [
  { step: "Submission", desc: "Submit your proposal and supporting materials by email to books@panorama-sg.com." },
  { step: "Initial Review", desc: "The editorial team conducts an initial review of the proposal for scope, quality, and suitability. This typically takes 2-4 weeks." },
  { step: "Editorial Evaluation", desc: "Proposals that pass initial review are forwarded for more detailed editorial evaluation, which may include external assessment." },
  { step: "Decision", desc: "Authors receive a decision letter outlining whether the proposal is accepted, invited to revise and resubmit, or declined." },
  { step: "Agreement", desc: "Accepted proposals proceed to a publishing agreement that sets out responsibilities, fees, timeline, and rights." },
  { step: "Production", desc: "The manuscript proceeds through the agreed production process. The timeline depends on the package selected and the state of the manuscript." },
  { step: "Publication", desc: "Upon completion, the book receives its official page on this website, publication metadata, and digital archiving." },
];

export default function ForAuthorsPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            For Authors
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Publish with Panorama Scholarly Books
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            Information for authors and editors seeking to publish with Panorama Scholarly Books.
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12 lg:py-16">
          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:border-r border-[#e2e2e2] lg:pr-10 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
                On This Page
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  ["#what-we-publish", "What We Publish"],
                  ["#who-can-submit", "Who Can Submit"],
                  ["#required-documents", "Required Documents"],
                  ["#proposal-content", "Proposal Content"],
                  ["#review-process", "Review Process"],
                  ["#manuscript-requirements", "Manuscript Requirements"],
                  ["#submit", "Submit an Inquiry"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-[#e2e2e2] mt-8 pt-8">
                <p className="font-serif text-sm text-[#888888] mb-3">
                  Ready to submit?
                </p>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Proposal Inquiry"
                  className="inline-block font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-4 py-3 hover:bg-transparent hover:text-[#111111] transition-colors"
                >
                  Contact the Editorial Team
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-2 lg:pl-10">

            {/* What we publish */}
            <section id="what-we-publish" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                What We Publish
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-8">
                Panorama Scholarly Books publishes original, peer-considered academic works across a broad range of humanistic, social scientific, educational, and interdisciplinary fields. We are committed to high scholarly standards, rigorous argumentation, and accessible academic writing.
              </p>
              <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {acceptedTypes.map((item) => (
                  <div
                    key={item.type}
                    className="border-b border-[#e2e2e2] py-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
                  >
                    <p className="font-serif text-sm text-[#111111] font-medium sm:col-span-1">
                      {item.type}
                    </p>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed sm:col-span-2">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Who can submit */}
            <section id="who-can-submit" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                Who Can Submit
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-4">
                We welcome proposals from:
              </p>
              <ul className="flex flex-col gap-2">
                {[
                  "Academic authors at any career stage, including early-career researchers",
                  "Editors assembling interdisciplinary or field-specific edited volumes",
                  "Researchers working independently or affiliated with academic institutions",
                  "Research groups and policy institutes seeking to disseminate findings",
                  "Conference organisers wishing to publish proceedings",
                  "Doctoral graduates seeking to revise and publish their dissertations",
                ].map((item) => (
                  <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-3 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Required documents */}
            <section id="required-documents" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                Required Documents
              </h2>
              <div className="bg-[#f7f7f7] border border-[#e2e2e2] p-6 mb-6">
                <p className="font-serif text-sm text-[#888888] mb-1">
                  Submissions must include the following:
                </p>
              </div>
              <ul className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {requiredDocs.map((doc, i) => (
                  <li
                    key={i}
                    className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#e2e2e2] py-4"
                  >
                    <span className="text-[#c8c8c8] shrink-0 tabular-nums text-xs pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Proposal content */}
            <section id="proposal-content" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                Book Proposal Content
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
                The book proposal should be a document of 1,000-3,000 words and address the following:
              </p>
              <ul className="flex flex-col gap-2">
                {proposalContent.map((item) => (
                  <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-3 last:border-0">
                    <span className="text-[#c8c8c8] shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Review process */}
            <section id="review-process" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                Review and Publication Process
              </h2>
              <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
                {processSteps.map((item, i) => (
                  <div key={item.step} className="border-b border-[#e2e2e2] py-5 grid grid-cols-1 sm:grid-cols-4 gap-2 items-start">
                    <div className="sm:col-span-1 flex items-start gap-3">
                      <span className="font-serif text-xs text-[#c8c8c8] tabular-nums shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-serif text-sm text-[#111111] font-medium">
                        {item.step}
                      </p>
                    </div>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed sm:col-span-3">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Manuscript requirements */}
            <section id="manuscript-requirements" className="mb-14 scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                Manuscript Requirements
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  ["Language", "Manuscripts may be submitted in English. Bilingual or non-English submissions are considered on a case-by-case basis. Authors are responsible for ensuring language quality."],
                  ["Length", "Typical monographs range from 60,000 to 120,000 words. Edited volumes range from 80,000 to 150,000 words. Research reports from 20,000 to 60,000 words. Please discuss specific length requirements with the editorial team."],
                  ["Format", "Manuscripts should be submitted as Microsoft Word files (.docx) with consistent formatting. Final production files will be requested at a later stage."],
                  ["Style", "Authors should follow a recognised citation style consistently throughout (APA 7, Chicago, or MLA). Footnotes, endnotes, and bibliographies should be complete and accurate."],
                  ["Permissions", "Authors are responsible for obtaining and documenting permission for any third-party material reproduced in the manuscript, including figures, tables, photographs, and extended quotations."],
                ].map(([label, text]) => (
                  <div key={label} className="border border-[#e2e2e2] p-5">
                    <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">{label}</p>
                    <p className="font-serif text-sm text-[#555555] leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-[#e2e2e2] mb-14" />

            {/* Submit */}
            <section id="submit" className="scroll-mt-24">
              <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
                Submit an Inquiry
              </h2>
              <p className="font-serif text-base text-[#555555] leading-relaxed mb-8">
                To submit a book proposal or discuss a publishing project, please email the Books department. Include your proposal and relevant supporting documents as attachments.
              </p>
              <div className="border border-[#e2e2e2] p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-sm text-[#888888] mb-1">Books Editorial Team</p>
                  <a
                    href="mailto:books@panorama-sg.com"
                    className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors"
                  >
                    books@panorama-sg.com
                  </a>
                </div>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Proposal Submission"
                  className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-6 py-3 hover:bg-transparent hover:text-[#111111] transition-colors text-center"
                >
                  Submit Proposal
                </a>
              </div>
              <div className="mt-4 border border-[#e2e2e2] bg-[#f7f7f7] p-5">
                <p className="font-serif text-xs text-[#888888] leading-relaxed">
                  Please allow 2-4 weeks for an initial response to proposals. The editorial team will contact you if additional information is required. For questions about services and fees, please also consult the{" "}
                  <Link href="/publishing-services" className="underline underline-offset-2 hover:text-[#555555] transition-colors">
                    Publishing Services
                  </Link>{" "}
                  page.
                </p>
              </div>
            </section>
          </main>
        </div>
      </Container>
    </>
  );
}
