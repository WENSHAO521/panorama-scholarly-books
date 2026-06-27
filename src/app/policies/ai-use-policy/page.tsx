import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "AI Use Policy",
  description: "Policy on the use of artificial intelligence tools in manuscripts submitted to Panorama Scholarly Books.",
};

export default function AIUsePolicyPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">AI Use Policy</h1>
          <p className="font-serif text-sm text-[#888888]">Last updated: 2025</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">1. Scope and Purpose</h2>
            <p className="mb-4">This policy applies to all manuscripts, proposals, and supporting documents submitted to Panorama Scholarly Books. It addresses the use of artificial intelligence (AI) tools, including large language models (LLMs) and generative AI applications, in the preparation of academic works.</p>
            <p>The purpose of this policy is to ensure transparency, to uphold academic integrity, and to clarify the responsibilities of authors and editors in relation to AI-assisted writing and research.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">2. AI Tools and Authorship</h2>
            <p className="mb-4">Artificial intelligence tools cannot be listed as authors of works submitted to or published by Panorama Scholarly Books. Authorship requires the capacity for intellectual accountability and responsibility, which AI tools do not possess.</p>
            <p>Authors who use AI tools in the preparation of their manuscripts remain fully responsible for the accuracy, originality, and integrity of the submitted work. The use of an AI tool does not transfer or diminish this responsibility.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">3. Disclosure Requirements</h2>
            <p className="mb-4">Authors must disclose any use of AI tools that has materially contributed to the drafting or substantive revision of the manuscript. Disclosure must be made in the manuscript itself, typically in the Acknowledgements section or a dedicated AI Use Statement.</p>
            <p className="mb-4">The disclosure should specify:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "The name and version of the AI tool or tools used.",
                "The nature of the use (for example, text generation, summarisation, translation, editing, literature search).",
                "The sections of the manuscript affected.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
            <p>Disclosure is not required for the use of AI tools in routine tasks that do not affect the substantive content of the manuscript, such as grammar checking, spell checking, or reference formatting.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">4. Prohibited Uses</h2>
            <p className="mb-4">The following uses of AI tools are not permitted in manuscripts submitted to Panorama Scholarly Books:</p>
            <ul className="flex flex-col gap-3 mb-4">
              {[
                "Using AI to generate the central arguments, findings, or conclusions of the work without substantive intellectual input by the author.",
                "Using AI to produce fabricated citations, references, or data.",
                "Using AI to produce text that misrepresents the author's own views, methods, or expertise.",
                "Using AI to generate content that constitutes plagiarism of existing sources.",
                "Submitting AI-generated text as original writing without disclosure.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm"><span className="text-[#c8c8c8] shrink-0">-</span>{item}</li>
              ))}
            </ul>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">5. Author Responsibility</h2>
            <p className="mb-4">Authors are responsible for verifying all content in the manuscript, including content that was drafted or revised with AI assistance. This includes verifying the accuracy of facts, figures, citations, and arguments presented in the work.</p>
            <p>AI tools are known to produce plausible but inaccurate information, fabricated citations, and text that may unintentionally reproduce content from training data. Authors must take active steps to identify and correct such errors before submission.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section className="mb-10">
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">6. Review and Enforcement</h2>
            <p className="mb-4">The publisher reserves the right to request clarification from authors regarding the use of AI tools in the preparation of a submitted manuscript. Where undisclosed or prohibited AI use is identified, the publisher may decline the submission or, in the case of published works, issue a correction or retraction.</p>
            <p>This policy will be reviewed and updated periodically in response to developments in AI technology and evolving standards in academic publishing.</p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-10" />

          <section>
            <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">7. Questions and Clarification</h2>
            <p>Authors who are uncertain whether a particular use of AI tools requires disclosure are encouraged to contact the Books department before submission at <a href="mailto:books@panorama-sg.com?subject=AI Use Policy Inquiry" className="text-[#111111] underline underline-offset-2">books@panorama-sg.com</a>.</p>
          </section>

        </div>
      </Container>
    </>
  );
}
