import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Copyright and Licensing Policy",
  description: "Copyright and licensing policy of Panorama Scholarly Books.",
};

export default function CopyrightPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">Copyright and Licensing</h1>
          <p className="font-serif text-sm text-[#888888]">Last updated: June 2026</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">1. Copyright Ownership</h2>
            <p className="mb-4">Unless otherwise agreed in writing, copyright in works published by Panorama Scholarly Books is retained by the author or authors. The publisher does not claim ownership of copyright in submitted manuscripts or published works.</p>
            <p>By entering into a publishing agreement with Panorama Scholarly Group Limited, authors grant the publisher a licence to produce, distribute, and make available the work in the agreed formats and through the agreed channels for the duration of the agreement.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">2. Rights Retained by Authors</h2>
            <p className="mb-4">Authors publishing with Panorama Scholarly Books retain the following rights as standard:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "The right to use the published work for personal academic purposes, including teaching and research.",
                "The right to post the final accepted manuscript (pre-production version) in an institutional or personal repository, subject to any embargo period specified in the publishing agreement.",
                "The right to reproduce portions of the work in subsequent publications by the same author, with appropriate attribution to the original publication.",
                "The right to distribute copies of the work to colleagues and students for non-commercial academic purposes.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">3. Third-Party Material</h2>
            <p className="mb-4">Authors are responsible for identifying and obtaining permission for any third-party material included in the manuscript, including quotations, figures, tables, maps, images, and data.</p>
            <p className="mb-4">Permission documentation must be provided to the publisher before final production. Material for which permission cannot be obtained must be removed or replaced before publication.</p>
            <p>Authors should be aware that some material may be reproduced under fair dealing or fair use provisions without explicit permission. Authors are nonetheless responsible for ensuring that any such use is appropriate and properly attributed.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">4. Open Access and Creative Commons</h2>
            <p className="mb-4">Titles made available on an open access basis are licensed under a Creative Commons licence as specified in the individual title's metadata and book page. The default open access licence applied by Panorama Scholarly Books is CC BY-NC-ND 4.0 (Attribution, Non-Commercial, No Derivatives), unless otherwise agreed.</p>
            <p>Authors wishing to publish on an open access basis should discuss the relevant licensing terms with the publisher prior to entering into a publishing agreement. Please refer to the Open Access Books policy for further details.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section>
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">5. Permissions and Licensing Inquiries</h2>
            <p className="mb-4">Third parties wishing to reproduce material from a Panorama Scholarly Books publication should contact the publisher in the first instance. Where the author retains copyright, the publisher will direct the request to the relevant author.</p>
            <p>For permissions and licensing inquiries, contact <a href="mailto:books@panorama-sg.com?subject=Rights and Permissions" className="text-[#111111] underline underline-offset-2">books@panorama-sg.com</a> with the subject line "Rights and Permissions."</p>
          </section>

        </div>
      </Container>
    </>
  );
}
