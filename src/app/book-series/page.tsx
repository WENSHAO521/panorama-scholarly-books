import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Book Series",
  description:
    "Academic book series published under the Panorama Scholarly Books imprint.",
};

const series = [
  {
    id: "panorama-studies-education",
    title: "Panorama Studies in Education",
    scope:
      "Publishes original research monographs and edited volumes addressing education policy, pedagogy, curriculum studies, higher education governance, and comparative education across national and international contexts.",
    types: ["Monographs", "Edited Volumes", "Research Reports"],
    status: "Open for Submissions",
  },
  {
    id: "panorama-studies-public-policy",
    title: "Panorama Studies in Public Policy",
    scope:
      "Covers public administration, governance reform, policy analysis, regulatory studies, and the relationship between state institutions and civil society, with a comparative and interdisciplinary orientation.",
    types: ["Monographs", "Edited Volumes"],
    status: "Open for Submissions",
  },
  {
    id: "panorama-studies-arts-humanities",
    title: "Panorama Studies in Arts and Humanities",
    scope:
      "Encompasses original scholarship in literature, philosophy, history, cultural studies, art history, media studies, and performance, with particular interest in interdisciplinary and cross-cultural approaches.",
    types: ["Monographs", "Edited Volumes"],
    status: "Open for Submissions",
  },
  {
    id: "panorama-studies-global-society",
    title: "Panorama Studies in Global Society",
    scope:
      "Addresses questions of globalisation, international relations, transnational civil society, migration, global governance, and the social consequences of geopolitical transformation.",
    types: ["Monographs", "Edited Volumes"],
    status: "Open for Submissions",
  },
  {
    id: "panorama-studies-ai-future-society",
    title: "Panorama Studies in AI and Future Society",
    scope:
      "Examines the social, ethical, political, and philosophical dimensions of artificial intelligence, automation, digital transformation, and emerging technologies, from interdisciplinary perspectives.",
    types: ["Monographs", "Edited Volumes", "Research Reports"],
    status: "Open for Submissions",
  },
  {
    id: "panorama-conference-proceedings",
    title: "Panorama Conference Proceedings Series",
    scope:
      "Publishes peer-reviewed conference proceedings across all fields covered by Panorama Scholarly Books, providing a dedicated venue for conference organisers seeking professional academic publication.",
    types: ["Conference Proceedings"],
    status: "Open for Submissions",
  },
  {
    id: "panorama-research-reports",
    title: "Panorama Research Report Series",
    scope:
      "A dedicated series for research reports, policy briefs, and investigation findings from academic research groups, policy institutes, and interdisciplinary research projects.",
    types: ["Research Reports"],
    status: "Open for Submissions",
  },
];

export default function BookSeriesPage() {
  return (
    <>
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Book Series
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Book Series
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            Panorama Scholarly Books publishes under a number of specialist series, each with its own editorial focus and scope. All series are currently open for submissions.
          </p>
        </Container>
      </section>

      <Container>
        <div className="py-12 lg:py-16">
          <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
            {series.map((s) => (
              <div
                key={s.id}
                className="border-b border-[#e2e2e2] py-10 grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* Series title + status */}
                <div className="lg:col-span-1">
                  <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888] mb-2">
                    {s.status}
                  </p>
                  <h2 className="font-serif text-xl text-[#111111] font-medium leading-snug mb-4">
                    {s.title}
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {s.types.map((t) => (
                      <span
                        key={t}
                        className="font-serif text-[10px] tracking-[0.1em] uppercase border border-[#e2e2e2] text-[#888888] px-2 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Scope + CTA */}
                <div className="lg:col-span-2">
                  <p className="font-serif text-sm text-[#888888] mb-2">
                    Aims and Scope
                  </p>
                  <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
                    {s.scope}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`mailto:books@panorama-sg.com?subject=Book Proposal: ${s.title}`}
                      className="font-serif text-[11px] tracking-[0.12em] uppercase border border-[#111111] px-5 py-2.5 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center sm:text-left"
                    >
                      Submit to This Series
                    </a>
                    <Link
                      href="/for-authors"
                      className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors self-center"
                    >
                      Author guidelines
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-6 md:p-8 mt-12">
            <p className="font-serif text-xs tracking-[0.2em] uppercase text-[#888888] mb-3">
              Note
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
              Books may be submitted as part of a named series or as standalone titles under the Panorama Scholarly Books imprint. Series affiliation is determined during the editorial review process.
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed">
              If you are interested in proposing a new series or in becoming a series editor, please contact{" "}
              <a
                href="mailto:books@panorama-sg.com?subject=New Series Proposal"
                className="text-[#111111] underline underline-offset-2 hover:text-[#555555] transition-colors"
              >
                books@panorama-sg.com
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
