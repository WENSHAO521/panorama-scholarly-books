import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Publishing Ethics",
  description: "Publishing ethics policy of Panorama Scholarly Books.",
};

export default function PublishingEthicsPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">Publishing Ethics</h1>
          <p className="font-serif text-sm text-[#888888]">Last updated: 2025</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">1. Overview</h2>
            <p className="mb-4">Panorama Scholarly Books is committed to maintaining the highest standards of publishing ethics. All parties involved in the publication process - authors, editors, reviewers, and the publisher - are expected to adhere to recognised standards of academic integrity and ethical conduct.</p>
            <p>These standards are informed by widely accepted principles in academic publishing, including those published by the Committee on Publication Ethics (COPE).</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">2. Responsibilities of Authors</h2>
            <p className="mb-4">Authors submitting work to Panorama Scholarly Books agree to the following:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "The work submitted is original and has not been previously published in substantially the same form.",
                "The work is not under simultaneous consideration by another publisher.",
                "All sources, data, and materials used in the work are properly cited and acknowledged.",
                "Authors have obtained all necessary permissions for the reproduction of third-party material.",
                "The authorship of the work is accurately represented and all contributors are appropriately credited.",
                "Any conflicts of interest or sources of funding relevant to the research are disclosed.",
                "The research complies with applicable ethical standards, including those governing human or animal subjects where relevant.",
                "The work does not contain fabricated, falsified, or misrepresented data or findings.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">3. Responsibilities of Editors</h2>
            <p className="mb-4">Volume editors and series editors are expected to:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "Exercise independent editorial judgment free from commercial or personal considerations.",
                "Ensure that all contributions to edited volumes are evaluated fairly and on the basis of scholarly merit.",
                "Disclose and manage any conflicts of interest with contributors or chapter authors.",
                "Ensure that contributors are informed of and agree to the publisher's policies.",
                "Maintain the confidentiality of the review and editorial process.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">4. Responsibilities of the Publisher</h2>
            <p className="mb-4">Panorama Scholarly Books commits to the following:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "Evaluating all proposals and manuscripts on the basis of scholarly merit, without discrimination on grounds of race, gender, nationality, religion, or institutional affiliation.",
                "Maintaining clear and transparent policies that are publicly accessible.",
                "Handling all editorial and publication decisions in good faith and without undue delay.",
                "Protecting the confidentiality of submitted manuscripts and proposal materials.",
                "Responding promptly and fairly to complaints, corrections, and appeals.",
                "Retracting or correcting published works where evidence of serious error or misconduct is established.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">5. Misconduct and Complaints</h2>
            <p className="mb-4">Any person who suspects a breach of publishing ethics in connection with a Panorama Scholarly Books publication is encouraged to raise the matter directly with the publisher at <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">books@panorama-sg.com</a>.</p>
            <p>Complaints will be handled confidentially and in accordance with the publisher's complaints procedure. Where appropriate, the publisher will consult established best-practice guidelines for handling allegations of research misconduct.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section>
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">6. Corrections and Retractions</h2>
            <p className="mb-4">Where a published work is found to contain significant errors, the publisher will work with the relevant authors or editors to issue a correction notice as promptly as reasonably practicable.</p>
            <p>In cases involving established misconduct, fabrication, falsification, or plagiarism, the publisher reserves the right to retract the published work and to notify relevant parties. Retracted works will be clearly identified as such on the official book page.</p>
          </section>

        </div>
      </Container>
    </>
  );
}
