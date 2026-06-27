import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Publishing Policies",
  description:
    "Publishing policies of Panorama Scholarly Books, covering ethics, authorship, copyright, open access, plagiarism, and more.",
};

const policies = [
  {
    href: "/policies/publishing-ethics",
    title: "Publishing Ethics",
    desc: "Standards of conduct for authors, editors, reviewers, and the publisher. Responsibilities and obligations of all parties in the publication process.",
    updated: "2025",
  },
  {
    href: "/policies/authorship",
    title: "Authorship and Contributorship",
    desc: "Criteria for authorship and editorship of published works. Acknowledgement of contributions and management of authorship disputes.",
    updated: "2025",
  },
  {
    href: "/policies/plagiarism",
    title: "Plagiarism and Similarity Check",
    desc: "Policy on text similarity, self-plagiarism, and duplicate publication. Processes for identification and handling of plagiarism concerns.",
    updated: "2025",
  },
  {
    href: "/policies/copyright",
    title: "Copyright and Licensing",
    desc: "Ownership of copyright in published works, licensing arrangements, and rights retained by authors.",
    updated: "2025",
  },
  {
    href: "/policies/open-access",
    title: "Open Access Books",
    desc: "Policy on open access publication, Creative Commons licensing, and conditions under which titles may be made freely available.",
    updated: "2025",
  },
  {
    href: "/policies/ai-use-policy",
    title: "AI Use Policy",
    desc: "Policy on the use of artificial intelligence tools in the preparation of manuscripts submitted to Panorama Scholarly Books.",
    updated: "2025",
  },
];

export default function PoliciesPage() {
  return (
    <>
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Policies
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Publishing Policies
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            Panorama Scholarly Books is committed to responsible and transparent publishing. All policies apply to authors, editors, reviewers, and the publisher.
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">
          <p className="font-serif text-base text-[#555555] leading-relaxed mb-12">
            The following policies govern the submission, evaluation, production, and publication of works under the Panorama Scholarly Books imprint. Authors are required to familiarise themselves with these policies before submitting a proposal or manuscript.
          </p>

          <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
            {policies.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                className="group border-b border-[#e2e2e2] py-8 grid grid-cols-1 sm:grid-cols-4 gap-4 hover:bg-[#f7f7f7] transition-colors px-0 -mx-0"
              >
                <div className="sm:col-span-3">
                  <p className="font-serif text-xl text-[#111111] font-medium mb-2 group-hover:underline underline-offset-4">
                    {policy.title}
                  </p>
                  <p className="font-serif text-sm text-[#888888] leading-relaxed">
                    {policy.desc}
                  </p>
                </div>
                <div className="sm:col-span-1 flex sm:flex-col sm:items-end justify-between sm:justify-start gap-2">
                  <span className="font-serif text-xs text-[#888888]">
                    Updated {policy.updated}
                  </span>
                  <span className="font-serif text-xs text-[#111111] group-hover:underline underline-offset-2">
                    Read policy
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-6 mt-12">
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              For policy-related questions, complaints, or appeals, please contact the Books department at{" "}
              <a
                href="mailto:books@panorama-sg.com?subject=Policy Inquiry"
                className="text-[#111111] underline underline-offset-2 hover:text-[#555555] transition-colors"
              >
                books@panorama-sg.com
              </a>
              . Panorama Scholarly Books aims to respond to policy-related correspondence within 10 business days.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
