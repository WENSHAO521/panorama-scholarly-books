import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Publishing Services",
  description:
    "Book publishing service packages and fees from Panorama Scholarly Books. Author-prepared, standard production, and extended production options.",
};

const packages = [
  {
    id: "a",
    label: "Package A",
    name: "Author-Prepared Publication",
    price: "USD 450",
    unit: "per title",
    desc: "For authors who provide a final proofread manuscript, final typeset file, and final book cover.",
    includes: [
      "Editorial and publication eligibility screening",
      "Final file inspection",
      "Copyright page format check",
      "ISBN / publication information, where applicable",
      "Publisher metadata preparation",
      "Official book webpage",
      "Digital archiving",
      "Basic citation information",
    ],
    featured: false,
  },
  {
    id: "b",
    label: "Package B",
    name: "Standard Production",
    price: "USD 980",
    unit: "per title",
    desc: "For standard academic books requiring publisher-assisted proofreading, academic typesetting, and cover design.",
    includes: [
      "Editorial and publication eligibility screening",
      "Basic proofreading",
      "Academic typesetting",
      "Standard book cover design",
      "Copyright page preparation",
      "Publisher metadata preparation",
      "Final PDF preparation",
      "Official book webpage",
      "Digital archiving",
      "One round of author correction after typesetting",
    ],
    featured: true,
  },
  {
    id: "c",
    label: "Package C",
    name: "Extended Production",
    price: "USD 1,480",
    unit: "per title",
    desc: "For longer, bilingual, edited, or more complex academic books requiring extended production work.",
    includes: [
      "All services in the Standard Production Package",
      "Extended proofreading",
      "More detailed layout adjustment",
      "Complex table and figure placement",
      "Customized academic cover design",
      "Up to two rounds of author correction",
      "Enhanced metadata preparation",
      "Book description and promotional text preparation",
    ],
    featured: false,
  },
];

const comparisonRows = [
  ["Editorial screening", "Included", "Included", "Included"],
  [
    "Proofreading",
    "Author provides final proofread file",
    "Basic proofreading included",
    "Extended proofreading included",
  ],
  [
    "Interior typesetting",
    "Author provides final typeset file",
    "Standard academic typesetting",
    "Advanced academic typesetting",
  ],
  [
    "Cover design",
    "Author provides final cover",
    "Standard academic cover design",
    "Customized academic cover design",
  ],
  [
    "Copyright page",
    "Format check included",
    "Preparation included",
    "Preparation included",
  ],
  [
    "ISBN / publication information",
    "Where applicable",
    "Where applicable",
    "Where applicable",
  ],
  [
    "Metadata preparation",
    "Basic metadata",
    "Standard metadata",
    "Enhanced metadata",
  ],
  ["Official book webpage", "Included", "Included", "Included"],
  ["Digital archiving", "Included", "Included", "Included"],
  [
    "Author correction rounds",
    "Not included",
    "One round after typesetting",
    "Up to two rounds after typesetting",
  ],
  [
    "Recommended for",
    "Authors with complete final files",
    "Standard academic books",
    "Longer, bilingual, edited, or complex books",
  ],
];

const institutionalRows = [
  [
    "Institutional Publication",
    "Publication planning, metadata preparation, editorial coordination, official webpage, digital archiving",
    "Quotation-based",
  ],
  [
    "Book Series",
    "Series setup, series identity, manuscript structure, metadata planning, publication workflow",
    "Quotation-based",
  ],
  [
    "Conference Proceedings",
    "Proceedings structure, chapter formatting, contributor coordination, official publication page",
    "From USD 1,500",
  ],
  [
    "Large Edited Volume",
    "Multi-author coordination, chapter standardization, extended layout work, metadata preparation",
    "Quotation-based",
  ],
];

const optionalServices = [
  ["Additional proofreading beyond standard scope", "From USD 5 per 1,000 words"],
  ["Academic language editing", "Quotation-based"],
  ["Substantive editing / developmental editing", "Quotation-based"],
  ["Complex typesetting with many tables, figures, or formulas", "USD 150 - 500"],
  ["Heavy image processing or figure redrawing", "USD 100 - 500"],
  ["Custom cover redesign after approval", "USD 80 - 200"],
  ["eBook / EPUB preparation", "USD 150 - 300"],
  ["Book DOI, where applicable", "USD 50 - 100"],
  ["Name index or subject index preparation", "USD 150 - 500"],
  ["Additional round of author correction", "USD 80 - 150 per round"],
  ["Urgent production service", "Additional 20 - 30%"],
];

const distributionRows = [
  ["Official book webpage", "Included in standard packages"],
  ["Direct order inquiry setup", "Included in standard packages"],
  ["Amazon KDP Print setup assistance", "USD 120 - 180"],
  ["Google Play Books eBook setup assistance", "USD 100 - 150"],
  ["IngramSpark setup assistance", "USD 250 - 400"],
  [
    "German / European book trade metadata support",
    "Actual third-party cost + USD 150 - 250 service fee",
  ],
  ["Full distribution setup package", "USD 500 - 800"],
  ["Annual distribution maintenance", "USD 120 - 200 per title per year"],
];

const paymentRows = [
  [
    "Author-Prepared Publication Package",
    "100% payment before final publication processing begins.",
  ],
  [
    "Publisher Production Packages",
    "50% deposit before production begins; 50% balance before final publication or final file release.",
  ],
  [
    "Institutional or large projects",
    "Payment schedule may be agreed separately in the publishing agreement.",
  ],
  [
    "Refund principle",
    "Refunds are subject to the stage of work already completed. Fees are normally non-refundable after production begins, ISBN/publication information is assigned, or final publication is completed.",
  ],
];

function TableWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto border border-[#e2e2e2]">
      <table className="w-full border-collapse min-w-[640px]">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="bg-[#111111] text-white text-left px-5 py-4 font-serif text-sm font-normal">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top last-of-type:border-b-0">
      {children}
    </td>
  );
}

export default function PublishingServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Publishing Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Book Publishing Services and Fees
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[70ch] leading-relaxed">
            Panorama Scholarly Books provides academic book publishing services for scholarly monographs, edited volumes, research reports, academic textbooks, conference proceedings, and interdisciplinary research books. Our service structure is designed to support formal academic publication, professional book production, metadata preparation, and official publisher records.
          </p>
        </Container>
      </section>

      <Container>
        <div className="py-12 lg:py-16">

          {/* Packages */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Publishing Packages
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-8 max-w-[70ch]">
              Book publishing fees are charged per title. Printing, shipping, bookstore placement, sales guarantee, and third-party platform charges are not included unless separately agreed in writing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#e2e2e2]">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white p-8 flex flex-col ${
                    pkg.featured ? "ring-1 ring-inset ring-[#111111]" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-xs tracking-[0.18em] uppercase text-[#888888]">
                      {pkg.label}
                    </span>
                    {pkg.featured && (
                      <span className="font-serif text-[10px] tracking-[0.12em] uppercase border border-[#111111] bg-[#111111] text-white px-2 py-0.5">
                        Recommended
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl text-[#111111] font-medium mb-3 leading-snug">
                    {pkg.name}
                  </h3>

                  <div className="border-t border-b border-[#e2e2e2] py-4 mb-4">
                    <p className="font-serif text-3xl text-[#111111] font-medium">
                      {pkg.price}
                      <span className="text-sm font-normal text-[#888888] ml-1">
                        {pkg.unit}
                      </span>
                    </p>
                  </div>

                  <p className="font-serif text-sm text-[#888888] leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  <ul className="flex flex-col gap-2 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f7f7f7] pb-2 last:border-0"
                      >
                        <span className="text-[#c8c8c8] shrink-0">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`mailto:books@panorama-sg.com?subject=Publishing Inquiry: ${pkg.name}`}
                    className="font-serif text-[11px] tracking-[0.1em] uppercase border border-[#111111] px-4 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center"
                  >
                    Inquire about {pkg.label}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison table */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Package Comparison
            </h2>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Service Item</Th>
                  <Th>Author-Prepared / USD 450</Th>
                  <Th>Standard Production / USD 980</Th>
                  <Th>Extended Production / USD 1,480</Th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([label, ...vals]) => (
                  <tr key={label} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top">
                      {label}
                    </td>
                    {vals.map((v, i) => (
                      <Td key={i}>{v}</Td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                <strong className="text-[#111111] font-medium">Standard scope:</strong> The Standard Production Package generally applies to manuscripts up to approximately 60,000 words or 200 pages, with one main language, standard academic layout, and a normal number of tables and figures. Longer or more complex manuscripts may require the Extended Production Package or a separate quotation.
              </p>
            </div>
          </section>

          {/* Institutional / Series / Proceedings */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Institutional, Series, and Proceedings Publishing
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              Institutional publications, book series, conference proceedings, annual reports, research collections, and large edited volumes are quoted separately according to project scale and production complexity.
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Project Type</Th>
                  <Th>Typical Services</Th>
                  <Th>Fee</Th>
                </tr>
              </thead>
              <tbody>
                {institutionalRows.map(([type, services, fee]) => (
                  <tr key={type} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {type}
                    </td>
                    <Td>{services}</Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">
                      {fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* Optional additional services */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Optional Additional Services
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              The following services are not included in the standard packages unless expressly stated. Additional charges may apply depending on manuscript length, language, complexity, tables, figures, formulas, image quality, and production requirements.
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Additional Service</Th>
                  <Th>Fee</Th>
                </tr>
              </thead>
              <tbody>
                {optionalServices.map(([service, fee]) => (
                  <tr key={service} className="even:bg-[#fafafa]">
                    <Td>
                      <span className="text-[#111111]">{service}</span>
                    </Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top whitespace-nowrap">
                      {fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* Distribution setup */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Sales and Distribution Setup
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              Book publishing fees do not automatically include sales channel setup. Sales and distribution services may be provided separately where available.
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Distribution Service</Th>
                  <Th>Fee</Th>
                </tr>
              </thead>
              <tbody>
                {distributionRows.map(([service, fee]) => (
                  <tr key={service} className="even:bg-[#fafafa]">
                    <Td>
                      <span className="text-[#111111]">{service}</span>
                    </Td>
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#555555] align-top">
                      {fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>

            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                <strong className="text-[#111111] font-medium">Important notice:</strong> Book publishing fees do not guarantee book sales, bookstore placement, library acquisition, indexing, ranking, citations, institutional recognition, academic promotion, commercial performance, or third-party platform approval.
              </p>
            </div>
          </section>

          {/* Printing and shipping */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Printing and Shipping
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e2e2]">
              <div className="bg-white p-8">
                <h3 className="font-serif text-base text-[#111111] font-medium mb-3">
                  Not Included in Publishing Fees
                </h3>
                <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                  Printing and shipping are not included in the publishing service fees. If printed copies are requested, costs will be calculated separately based on:
                </p>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Book size and format",
                    "Page count",
                    "Color or black-and-white printing",
                    "Binding type",
                    "Number of copies",
                    "Destination country or region",
                    "Shipping method",
                  ].map((item) => (
                    <li key={item} className="font-serif text-sm text-[#555555] flex gap-3">
                      <span className="text-[#c8c8c8] shrink-0">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8">
                <h3 className="font-serif text-base text-[#111111] font-medium mb-3">
                  Pricing Principle
                </h3>
                <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                  Printed copies are charged according to the following principle:
                </p>
                <div className="border border-[#e2e2e2] p-4 mb-4">
                  <p className="font-serif text-sm text-[#111111] text-center">
                    Printing cost + shipping cost + handling fee
                  </p>
                </div>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
                  Authors may request printed proof copies, author copies, or institutional copies. Final costs depend on production specifications and shipping destination.
                </p>
              </div>
            </div>
          </section>

          {/* Payment and refund */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Payment and Refund Policy
            </h2>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Item</Th>
                  <Th>Policy</Th>
                </tr>
              </thead>
              <tbody>
                {paymentRows.map(([item, policy]) => (
                  <tr key={item} className="even:bg-[#fafafa]">
                    <td className="px-5 py-4 border-b border-[#e2e2e2] font-serif text-sm text-[#111111] font-medium align-top whitespace-nowrap">
                      {item}
                    </td>
                    <Td>{policy}</Td>
                  </tr>
                ))}
              </tbody>
            </TableWrapper>
          </section>

          {/* Manuscript review notice */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-4">
              Manuscript Review and Publisher&apos;s Right to Decline
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-5 leading-relaxed max-w-[70ch]">
              All manuscripts are subject to editorial screening. Panorama Scholarly Books reserves the right to decline manuscripts that do not meet academic, ethical, legal, technical, or publication standards.
            </p>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                The publishing fee is a service fee for academic book publishing and production. It does not represent or guarantee sales outcomes, bookstore listing, library purchase, indexing, ranking, citations, academic promotion, degree recognition, institutional approval, or commercial revenue.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="border border-[#e2e2e2] bg-[#111111] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl text-white font-medium mb-3">
                Request a Publishing Quote
              </h2>
              <p className="font-serif text-sm text-white/70 leading-relaxed max-w-[60ch]">
                Authors, editors, and institutions may contact Panorama Scholarly Books to discuss manuscript suitability, production requirements, publication timeline, and available publishing packages.
              </p>
            </div>
            <a
              href="mailto:books@panorama-sg.com?subject=Publishing Quote Request"
              className="shrink-0 font-serif text-[12px] tracking-[0.08em] uppercase border border-white px-8 py-3 text-white hover:bg-white hover:text-[#111111] transition-colors text-center"
            >
              Contact Us
            </a>
          </div>

        </div>
      </Container>
    </>
  );
}
