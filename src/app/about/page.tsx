import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Panorama Scholarly Books — mission, scope, and publisher information.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            About
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            About Panorama Scholarly Books
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[60ch]">
            Publisher information, mission, and academic standards.
          </p>
        </Container>
      </section>

      <Container narrow>
        <div className="py-12 lg:py-16">

          {/* Mission */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Mission
            </h2>
            <p className="font-serif text-lg text-[#555555] leading-relaxed mb-5">
              Panorama Scholarly Books is dedicated to publishing academic works that contribute to scholarly communication, interdisciplinary research, and global knowledge exchange.
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              As part of Panorama Scholarly Group Limited, the platform supports academic authors, editors, researchers, and institutions through responsible publishing practices and professional production services. We are committed to maintaining high scholarly standards, supporting intellectual diversity, and making serious academic work accessible to researchers, educators, and practitioners worldwide.
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Scope */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Publishing Scope
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-6">
              We publish scholarly monographs, edited volumes, research reports, academic textbooks, conference proceedings, and interdisciplinary works across the following fields:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e2e2e2]">
              {[
                "Humanities",
                "Social Sciences",
                "Education and Educational Policy",
                "Arts and Cultural Studies",
                "Public Policy and Governance",
                "Interdisciplinary and Emerging Fields",
                "AI, Technology, and Future Society",
                "Global Studies and International Relations",
              ].map((field) => (
                <div key={field} className="bg-white px-5 py-4">
                  <p className="font-serif text-sm text-[#555555]">{field}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Publisher information */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Publisher Information
            </h2>
            <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
              {[
                ["Publisher", "Panorama Scholarly Group Limited"],
                ["Parent Organisation", "Panorama Scholarly Group Limited"],
                ["Type", "Academic Book Publisher"],
                ["Registered Address", "Room 1508, 15/F., Office Tower Two, Grand Plaza, 625 Nathan Road, Kowloon, Hong Kong"],
                ["Contact", "books@panorama-sg.com"],
                ["Website", "books.panorama-sg.com"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-2 border-b border-[#e2e2e2] py-4"
                >
                  <span className="font-serif text-sm text-[#888888]">{label}</span>
                  <span className="font-serif text-sm text-[#555555]">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Academic standards */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Academic Standards
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              Panorama Scholarly Books is committed to responsible publishing practices that uphold the integrity of scholarly work. All submissions are subject to editorial evaluation for scholarly merit, originality, methodological rigour, and clarity of argumentation.
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              Our publishing policies address key dimensions of research and publication ethics, including authorship, plagiarism, conflicts of interest, data integrity, and the use of artificial intelligence in research and writing. Authors are expected to read and adhere to these policies as a condition of publication.
            </p>
            <Link
              href="/policies"
              className="font-serif text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors"
            >
              Read our publishing policies
            </Link>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Relationship with PSG */}
          <section className="mb-14">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Relationship with Panorama Scholarly Group Limited
            </h2>
            <p className="font-serif text-base text-[#555555] leading-relaxed mb-5">
              Panorama Scholarly Books operates as the academic book publishing platform of Panorama Scholarly Group Limited (PSG). PSG is an independent scholarly publishing organisation with activities spanning academic journals, book publishing, conference proceedings, and research communication services.
            </p>
            <p className="font-serif text-base text-[#555555] leading-relaxed">
              Panorama Scholarly Books maintains its own editorial identity, publishing policies, and author relationships, operating within the broader PSG framework for shared services including platform infrastructure, archiving, and administrative support.
            </p>
          </section>

          <div className="w-full h-px bg-[#e2e2e2] mb-14" />

          {/* Contact */}
          <section>
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Contact
            </h2>
            <div className="border border-[#e2e2e2] p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-sm text-[#888888] mb-1">Books Department</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-base text-[#111111] hover:text-[#555555] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <Link
                href="/contact"
                className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-6 py-3 hover:bg-transparent hover:text-[#111111] transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </section>

        </div>
      </Container>
    </>
  );
}
