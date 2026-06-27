import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Open Access Books Policy",
  description: "Open access books policy of Panorama Scholarly Books.",
};

export default function OpenAccessPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">Open Access Books</h1>
          <p className="font-serif text-sm text-[#888888]">Last updated: 2025</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">1. Open Access at Panorama Scholarly Books</h2>
            <p className="mb-4">Panorama Scholarly Books supports open access as a means of broadening the availability and impact of academic research. Selected titles published by Panorama Scholarly Books may be made available on an open access basis, subject to the conditions set out in this policy and in the individual publishing agreement.</p>
            <p>Where a title is published open access, it will be clearly identified as such on the official book page, and the applicable licence will be stated.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">2. Default Open Access Licence</h2>
            <p className="mb-4">Unless otherwise agreed, open access titles published by Panorama Scholarly Books are made available under the Creative Commons Attribution - Non-Commercial - No Derivatives 4.0 International licence (CC BY-NC-ND 4.0).</p>
            <p className="mb-4">Under this licence:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "The work may be freely read, downloaded, and shared by any reader.",
                "Attribution to the original author(s), editor(s), and publisher must be given.",
                "The work may not be used for commercial purposes without separate authorisation.",
                "Derivative works (translations, adaptations, abridgements) may not be distributed without authorisation.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
            <p>Authors wishing to publish under a different Creative Commons licence (for example, CC BY or CC BY-NC) should discuss this with the publisher prior to entering into a publishing agreement.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">3. Conditions for Open Access Publication</h2>
            <p className="mb-4">The following conditions apply to titles published on an open access basis:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "The author or a funding body must cover any applicable open access publication costs.",
                "The manuscript must meet all standard editorial and production requirements.",
                "The open access licence terms must be agreed upon in the publishing agreement.",
                "Third-party material included in the work must be cleared for open access reproduction where required.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">4. Open Access and Funder Requirements</h2>
            <p className="mb-4">Some research funders require that works resulting from funded research be made publicly available on an open access basis. Authors with such obligations are encouraged to notify the publisher at the proposal stage so that suitable arrangements can be made.</p>
            <p>Panorama Scholarly Books will make reasonable efforts to accommodate funder open access mandates within the scope of its publishing arrangements.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section>
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">5. Inquiries</h2>
            <p>For inquiries about open access publication, please contact <a href="mailto:books@panorama-sg.com?subject=Open Access Inquiry" className="text-[#111111] underline underline-offset-2">books@panorama-sg.com</a> with the subject line "Open Access Inquiry."</p>
          </section>

        </div>
      </Container>
    </>
  );
}
