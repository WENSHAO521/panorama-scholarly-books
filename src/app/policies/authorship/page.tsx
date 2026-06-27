import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Authorship and Contributorship Policy",
  description: "Authorship and contributorship policy of Panorama Scholarly Books.",
};

export default function AuthorshipPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">Authorship and Contributorship</h1>
          <p className="font-serif text-sm text-[#888888]">Last updated: 2025</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">1. Criteria for Authorship</h2>
            <p className="mb-4">Authorship of a work published by Panorama Scholarly Books should be limited to individuals who have made a substantial contribution to the work. Acceptable grounds for authorship include:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "Conception or design of the research or the intellectual framework of the book.",
                "Acquisition, analysis, or interpretation of data or evidence.",
                "Drafting, writing, or substantially revising the manuscript.",
                "Final approval of the version submitted for publication.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
            <p>Individuals who contributed in other ways (research assistance, data collection, administrative support, general supervision) should be acknowledged in the Acknowledgements section rather than listed as authors.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">2. Editorship of Volumes</h2>
            <p className="mb-4">Editors of multi-author volumes are responsible for the intellectual organisation of the work, including the selection and development of contributions and the drafting of introductory and concluding material. Editors bear responsibility for the integrity of the volume as a whole.</p>
            <p>Editors who have also authored individual chapters in a volume should be listed both as editors and as authors of the relevant chapters.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">3. Ghost Authorship and Gift Authorship</h2>
            <p className="mb-4">Ghost authorship - where a person who made substantial contributions to the work is not acknowledged as an author - and gift authorship - where a person is listed as an author without having made a substantive contribution - are both contrary to publishing ethics standards.</p>
            <p>Authors submitting work to Panorama Scholarly Books confirm that all listed authors meet the criteria above and that no persons meeting those criteria have been excluded from the authorship list.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">4. AI Tools and Authorship</h2>
            <p className="mb-4">Artificial intelligence tools, including large language models, cannot be listed as authors of works published by Panorama Scholarly Books. Authorship requires the capacity for accountability, which AI tools do not possess.</p>
            <p>Where AI tools have been used in the preparation of the manuscript, authors must disclose this in accordance with the publisher's AI Use Policy.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">5. Changes to Authorship</h2>
            <p className="mb-4">Changes to the authorship list after submission require written notification to the publisher and agreement from all parties concerned. The publisher reserves the right to pause the editorial process while authorship changes are resolved.</p>
            <p>Requests to add or remove authors after publication will be handled in accordance with established best-practice guidelines and may result in the issuance of a correction notice.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section>
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">6. Authorship Disputes</h2>
            <p className="mb-4">In the event of a dispute over authorship, the publisher will not adjudicate between the parties but may pause the publication process until the dispute is resolved. Authors are encouraged to resolve disputes in consultation with their institution.</p>
            <p>For questions about this policy, please contact <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">books@panorama-sg.com</a>.</p>
          </section>

        </div>
      </Container>
    </>
  );
}
