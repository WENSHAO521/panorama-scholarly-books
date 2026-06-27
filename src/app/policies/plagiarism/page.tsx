import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Plagiarism and Similarity Check Policy",
  description: "Plagiarism and text similarity policy of Panorama Scholarly Books.",
};

export default function PlagiarismPage() {
  return (
    <>
      <div className="border-b border-[#e2e2e2] py-4">
        <Container>
          <Link href="/policies" className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors flex items-center gap-2">
            <ArrowLeft size={14} weight="light" /> All Policies
          </Link>
        </Container>
      </div>
      <section className="border-b border-[#e2e2e2] pt-12 pb-10">
        <Container narrow>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">Policy</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">Plagiarism and Similarity Check</h1>
          <p className="font-serif text-sm text-[#888888]">Last updated: 2025</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">1. Definition of Plagiarism</h2>
            <p className="mb-4">Plagiarism is the use of another person's work, ideas, or expressions without appropriate attribution, in a manner that presents them as the author's own. Plagiarism in any form is unacceptable in works submitted to or published by Panorama Scholarly Books.</p>
            <p>Plagiarism includes, but is not limited to:</p>
            <ul className="flex flex-col gap-3 mt-4">
              {[
                "Direct reproduction of text from another source without quotation marks and citation.",
                "Paraphrasing the ideas or arguments of another author without attribution.",
                "Reproducing data, figures, tables, or images from another source without permission and acknowledgement.",
                "Translating text from another language and presenting it as original writing without attribution.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">2. Self-Plagiarism and Duplicate Publication</h2>
            <p className="mb-4">Self-plagiarism refers to the reuse of an author's own previously published text or data without appropriate disclosure. While an author's own prior work is not subject to the same ethical concern as the misrepresentation of others' work, undisclosed reuse is considered a breach of publication standards.</p>
            <p className="mb-4">Authors must disclose any substantial overlap between a submitted manuscript and their own previously published work. Where chapters or sections have been previously published, this must be clearly acknowledged in the manuscript.</p>
            <p>Duplicate publication - submitting the same work simultaneously to more than one publisher, or publishing substantially the same content as a new work without disclosure - is not permitted.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">3. Similarity Checking</h2>
            <p className="mb-4">Panorama Scholarly Books may conduct similarity checks on submitted manuscripts using available text-matching tools as part of the editorial process. The presence of a similarity score above a given threshold does not by itself constitute a finding of plagiarism; the publisher will review the nature and context of any matched content before reaching a conclusion.</p>
            <p>Authors are encouraged to conduct their own checks prior to submission to identify and properly attribute any passages that may have been drawn from prior sources.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">4. AI-Generated Text and Similarity</h2>
            <p className="mb-4">Authors are reminded that text generated using AI tools may replicate content from sources not visible to the author. Authors who have used AI tools in drafting their manuscript should review the output carefully for unattributed similarity to existing sources.</p>
            <p>The publisher's AI Use Policy applies to all manuscripts submitted to Panorama Scholarly Books. Undisclosed use of AI to generate substantial portions of a manuscript is considered contrary to publication ethics.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section>
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">5. Handling of Plagiarism Concerns</h2>
            <p className="mb-4">Where plagiarism is suspected in a submitted or published work, the publisher will follow established best-practice procedures:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "For submitted manuscripts: the submission may be rejected and the author notified of the concern.",
                "For published works: the publisher will contact the author(s) to seek an explanation, and may issue a correction or retraction depending on the outcome.",
                "In all cases: findings and outcomes will be documented and, where appropriate, the author's institution may be notified.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
            <p>To report a concern about plagiarism in a Panorama Scholarly Books publication, contact <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">books@panorama-sg.com</a>.</p>
          </section>

        </div>
      </Container>
    </>
  );
}
