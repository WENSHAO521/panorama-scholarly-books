import type { Metadata } from "next";
import Container from "@/components/Container";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export const metadata: Metadata = {
  title: "Academic Book Publishing Services and Fees",
  description:
    "Review academic book publishing packages, production services, ISBN assignment policies, printing options, payment terms, and publication requirements.",
};

const packages = [
  {
    id: "a",
    label: "Package A",
    name: "Author-Prepared Publication",
    price: "USD 999",
    unit: "per title, edition, and product format",
    desc: "For authors who provide a final, fully proofread manuscript, a final typeset interior file, and a publication-ready cover.",
    includes: [
      "Initial editorial and publication eligibility screening",
      "Publishing agreement preparation",
      "Authorship and rights documentation review",
      "Final interior and cover file inspection",
      "Copyright-page format review",
      "One ISBN for one accepted edition and product format",
      "ISBN barcode preparation",
      "Publisher metadata and bibliographic record preparation",
      "Official book webpage",
      "Digital archiving and publication-record management",
      "Post-publication registration and compliance coordination",
    ],
    notIncluded: [
      "Proofreading, typesetting, or cover design",
      "Printing, shipping, or statutory deposit copies",
      "Substantive manuscript revision",
    ],
    featured: false,
  },
  {
    id: "b",
    label: "Package B",
    name: "Standard Academic Book Production",
    price: "USD 1,799",
    unit: "per title, edition, and product format",
    desc: "For standard academic books requiring publisher-assisted proofreading, typesetting, cover design, and final production.",
    includes: [
      "All editorial, administrative, metadata, ISBN, webpage, and archiving services in Package A",
      "Basic proofreading",
      "Standard academic interior typesetting",
      "Standard academic cover design",
      "Standard title page and copyright-page preparation",
      "Placement of a normal number of tables and figures",
      "Print-ready PDF preparation",
      "Final production quality review",
      "One consolidated round of author corrections after typesetting",
    ],
    notIncluded: [
      "Manuscripts exceeding 60,000 words / approx. 200 pages",
      "Printing, shipping, or statutory deposit copies",
    ],
    featured: true,
  },
  {
    id: "c",
    label: "Package C",
    name: "Extended and Complex Book Production",
    price: "From USD 2,499",
    unit: "per title, edition, and product format",
    desc: "For longer, bilingual, multilingual, edited, illustrated, or technically complex academic books.",
    includes: [
      "All services in Package B",
      "Extended proofreading and advanced academic typesetting",
      "Complex table, figure, formula, and illustration placement",
      "Multi-author chapter standardisation",
      "Customized academic cover design",
      "Up to two consolidated rounds of author or editor corrections",
      "Enhanced bibliographic metadata",
      "Book description and promotional-text preparation",
    ],
    notIncluded: ["Printing, shipping, or statutory deposit copies"],
    featured: false,
  },
];

const comparisonRows = [
  ["Editorial screening", "Included", "Included", "Included"],
  ["Publishing agreement", "Included", "Included", "Included"],
  ["Rights-document review", "Included", "Included", "Included"],
  [
    "Proofreading",
    "Author supplies final text",
    "Basic proofreading",
    "Extended or project-specific",
  ],
  [
    "Interior typesetting",
    "Author supplies final file",
    "Standard typesetting",
    "Advanced typesetting",
  ],
  [
    "Cover design",
    "Author supplies final cover",
    "Standard cover design",
    "Customized cover design",
  ],
  ["Copyright page", "Format review", "Preparation included", "Preparation included"],
  ["ISBN", "One approved format", "One approved format", "One approved format"],
  ["ISBN barcode", "Included", "Included", "Included"],
  ["Publisher metadata", "Included", "Included", "Enhanced"],
  ["Official book webpage", "Included", "Included", "Included"],
  ["Digital archiving", "Included", "Included", "Included"],
  [
    "Correction rounds",
    "Not included",
    "One consolidated round",
    "Up to two consolidated rounds",
  ],
  ["Printing and shipping", "Not included", "Not included", "Not included"],
  ["Statutory deposit copies", "Not included", "Not included", "Not included"],
];

const additionalFormatServices = [
  ["Additional ISBN, metadata, copyright-page and record setup for another approved product format", "From USD 399"],
  ["EPUB preparation", "From USD 299"],
  ["Reflowable eBook conversion", "From USD 299"],
  ["Revised edition processing", "From USD 499"],
  ["Translated edition processing", "Quotation-based"],
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
    "Quotation-based",
  ],
  [
    "Large Edited Volume",
    "Multi-author coordination, chapter standardization, extended layout work, metadata preparation",
    "Quotation-based",
  ],
];

const optionalServices = [
  ["Additional proofreading beyond package scope", "From USD 8 per 1,000 words"],
  ["Academic language editing", "Quotation-based"],
  ["Substantive or developmental editing", "Quotation-based"],
  ["Translation", "Quotation-based"],
  ["Complex tables, figures, formulas, or specialist typesetting", "From USD 250"],
  ["Image restoration, figure redrawing, or extensive image processing", "From USD 150"],
  ["Customized cover redesign after approval", "From USD 150"],
  ["Name or subject index preparation", "From USD 250"],
  ["Additional consolidated author-correction round", "USD 150 - 300 per round"],
  ["Priority production service", "Additional 25% of the applicable package fee"],
  ["Book DOI, where available and appropriate", "From USD 100"],
  ["Specialist legal, copyright, or permissions review", "Quotation-based"],
];

const distributionRows = [
  ["Official book webpage", "Included"],
  ["Direct-order inquiry setup", "Included"],
  ["Amazon or print-on-demand setup assistance", "From USD 200"],
  ["Google Play Books setup assistance", "From USD 150"],
  ["IngramSpark setup assistance", "From USD 350"],
  ["European book-trade metadata support", "Third-party cost plus service fee"],
  ["Full distribution setup", "From USD 650"],
  ["Annual distribution maintenance", "From USD 150 per title"],
];

const paymentRows = [
  [
    "Package A — Author-Prepared Publication",
    "100% payment is required after formal acceptance and before final publication processing begins.",
  ],
  [
    "Packages B and C",
    "50% deposit is required before production begins. The remaining 50% is payable before final file release and publication.",
  ],
  [
    "Institutional and large projects",
    "A staged payment schedule may be specified in the project quotation and publishing agreement.",
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
      <AnnouncementBanner />
      {/* Page header */}
      <section className="border-b border-[#e2e2e2] pt-16 pb-12">
        <Container>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">
            Publishing Services
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-4">
            Book Publishing Services and Fees
          </h1>
          <p className="font-serif text-base text-[#888888] max-w-[70ch] leading-relaxed mb-4">
            Panorama Scholarly Books provides academic book publishing and production services for scholarly monographs, edited volumes, academic textbooks, research reports, conference proceedings, institutional publications, and interdisciplinary research books.
          </p>
          <p className="font-serif text-sm text-[#888888] max-w-[70ch] leading-relaxed">
            All manuscripts and proposals are subject to editorial screening. Payment of a publishing fee does not create an automatic right to publication. A project proceeds only after formal editorial acceptance and execution of a publishing agreement. The following fees are effective from 1 August 2026.
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
              Each package covers one title, one edition, and one product format. Printing, shipping, statutory deposit copies, and third-party platform charges are not included unless separately agreed in writing.
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
                    <p className="font-serif text-2xl text-[#111111] font-medium">
                      {pkg.price}
                    </p>
                    <p className="text-xs font-normal text-[#888888] mt-1">{pkg.unit}</p>
                  </div>

                  <p className="font-serif text-sm text-[#888888] leading-relaxed mb-6">
                    {pkg.desc}
                  </p>

                  <ul className="flex flex-col gap-2 mb-6">
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

                  <div className="mb-8 flex-1">
                    <p className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888] mb-2">
                      Not Included
                    </p>
                    <ul className="flex flex-col gap-1.5">
                      {pkg.notIncluded.map((item) => (
                        <li key={item} className="font-serif text-xs text-[#888888] flex gap-2">
                          <span className="shrink-0">-</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:books@panorama-sg.com?subject=Publishing Inquiry: ${pkg.name}`}
                    className="font-serif text-[11px] tracking-[0.1em] uppercase border border-[#111111] px-4 py-3 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-center"
                  >
                    Inquire about {pkg.label}
                  </a>
                </div>
              ))}
            </div>

            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mt-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                <strong className="text-[#111111] font-medium">Standard scope:</strong> Package B generally applies to a manuscript of up to 60,000 words or approximately 200 finished pages, in one principal language, with standard academic formatting, references, and a normal number of tables and figures. Longer or more complex manuscripts require Package C or a separate quotation. Publication-ready files submitted under Package A must meet the publisher&apos;s technical and ethical standards; files requiring substantial correction or reconstruction may be transferred to Package B or C, or quoted separately.
              </p>
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
                  <Th>Package A / USD 999</Th>
                  <Th>Package B / USD 1,799</Th>
                  <Th>Package C / From USD 2,499</Th>
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
          </section>

          {/* Additional editions and product formats */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Additional Editions and Product Formats
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              Each package covers one title, one edition, and one product format. Paperback, hardback, PDF, EPUB, Kindle-compatible editions, revised editions, translated editions, and other separately distributed versions may require separate ISBNs, separate metadata, and additional production work. An additional ISBN will not be assigned unless the additional edition or format has been formally approved and is intended for genuine publication.
            </p>
            <TableWrapper>
              <thead>
                <tr>
                  <Th>Additional Service</Th>
                  <Th>Fee</Th>
                </tr>
              </thead>
              <tbody>
                {additionalFormatServices.map(([service, fee]) => (
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

          {/* Institutional / Series / Proceedings */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Institutional, Series, and Proceedings Publishing
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              Institutional publications, book series, conference proceedings, annual reports, multi-volume works, large edited collections, and sponsored open-access books are quoted separately according to project size, manuscript complexity, number of contributors, languages, production requirements, publication formats, distribution requirements, and expected administrative workload.
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
              These services are not included in the standard packages unless expressly stated. All additional services require written approval before work begins.
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

          {/* ISBN and Publisher-of-Record Policy */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              ISBN and Publisher-of-Record Policy
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-4 max-w-[70ch]">
              ISBNs are assigned only to publications that have been:
            </p>
            <ul className="flex flex-col gap-2 mb-6">
              {[
                "Submitted to Panorama Scholarly Books",
                "Reviewed and formally accepted",
                "Covered by a signed publishing agreement",
                "Approved for publication under the Panorama Scholarly Books imprint",
                "Supported by complete authorship, rights, and bibliographic information",
                "Prepared for a genuine and identifiable edition and product format",
              ].map((item) => (
                <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 mb-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed mb-3">
                ISBNs are not sold, transferred, leased, licensed as standalone numbers, or supplied for use by another publisher. The publisher name displayed in the book must correspond with the publisher information recorded for the ISBN.
              </p>
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                Publishing fees are not government ISBN application fees. They are fees for publisher services, editorial assessment, project administration, rights review, bibliographic metadata, ISBN assignment, production processing, official publication records, digital archiving, and post-publication compliance coordination.
              </p>
            </div>
            <p className="font-serif text-sm text-[#888888] leading-relaxed max-w-[70ch] mb-2">
              Assignment of an ISBN does not constitute:
            </p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Copyright registration",
                "Government approval of the content",
                "Academic accreditation or degree recognition",
                "Indexing or peer-review certification",
                "Commercial distribution",
                "A guarantee of sales or citations",
              ].map((item) => (
                <li key={item} className="font-serif text-sm text-[#888888] flex gap-3">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Sales and distribution setup */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-3">
              Sales and Distribution Setup
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-6 max-w-[70ch]">
              Standard publishing fees do not include commercial distribution. Optional distribution services may be available for eligible titles, subject to the rules, approval processes, territorial limitations, technical requirements, and fees of the relevant platform.
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
                <strong className="text-[#111111] font-medium">Important notice:</strong> Publishing or distribution fees do not guarantee book sales, bookstore placement, library acquisition, platform approval, indexing, ranking, reviews, citations, academic promotion, institutional recognition, or commercial performance.
              </p>
            </div>
          </section>

          {/* Printing, binding, deposit copies and shipping */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Printing, Binding, Deposit Copies, and Shipping
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e2e2]">
              <div className="bg-white p-8">
                <h3 className="font-serif text-base text-[#111111] font-medium mb-3">
                  Not Included in Publishing Fees
                </h3>
                <p className="font-serif text-sm text-[#555555] leading-relaxed mb-4">
                  Where printed copies are requested, costs are calculated according to:
                </p>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Finished book size and page count",
                    "Black-and-white or colour printing",
                    "Paper specification and binding type",
                    "Cover finish and number of copies",
                    "Proof-copy requirements",
                    "Delivery destination and shipping method",
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
                  Pricing Principle and Statutory Deposit
                </h3>
                <div className="border border-[#e2e2e2] p-4 mb-4">
                  <p className="font-serif text-sm text-[#111111] text-center">
                    Printing cost + binding cost + shipping cost + handling fee
                  </p>
                </div>
                <p className="font-serif text-sm text-[#888888] leading-relaxed">
                  Where Hong Kong book-registration requirements apply, the author or commissioning institution must fund and arrange the required statutory deposit copies, binding, packaging, delivery, and handling. Deposit copies are not returnable. No physical publication project is treated as administratively complete until the required deposit or registration arrangements have been confirmed.
                </p>
              </div>
            </div>
          </section>

          {/* Payment and refund */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-6">
              Payment Terms
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
            <p className="font-serif text-xs text-[#888888] leading-relaxed mt-4 max-w-[70ch]">
              All prices are stated in United States dollars unless otherwise specified. Bank, payment-gateway, currency-conversion, intermediary-bank, tax, printing, shipping, and third-party platform charges are not included unless expressly stated. Additional services are invoiced separately where applicable.
            </p>
          </section>

          {/* Cancellation and refund */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-4">
              Cancellation and Refund Principles
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-5 leading-relaxed max-w-[70ch]">
              Fees reflect editorial, administrative, metadata, production, design, archiving, and publisher work already performed. Fees paid before work begins may be refundable subject to documented administrative costs.
            </p>
            <ul className="flex flex-col gap-2 mb-5">
              {[
                "Once editorial administration, rights review, metadata preparation, production, design, typesetting, or proofreading has begun, the completed portion of the work is non-refundable.",
                "Fees are normally non-refundable after an ISBN has been assigned or reserved for the accepted publication.",
                "Fees are non-refundable after final files have been released or publication has been completed.",
                "Author-requested cancellation does not create an entitlement to a refund of work already completed.",
                "Where the publisher terminates a project because of plagiarism, rights infringement, undisclosed authorship disputes, unlawful content, false information, ethical violations, or breach of agreement, completed work and incurred costs remain payable.",
              ].map((item) => (
                <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-serif text-xs text-[#888888] leading-relaxed">
              Detailed cancellation and refund provisions are governed by the signed publishing agreement.
            </p>
          </section>

          {/* Manuscript review notice */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl text-[#111111] font-medium mb-4">
              Review and Publisher&apos;s Right to Decline
            </h2>
            <p className="font-serif text-sm text-[#888888] mb-5 leading-relaxed max-w-[70ch]">
              All proposals and manuscripts are subject to editorial, ethical, legal, and technical review. Panorama Scholarly Books may decline or discontinue a project that:
            </p>
            <ul className="flex flex-col gap-2 mb-5">
              {[
                "Falls outside the publisher's scope",
                "Does not meet academic or production standards",
                "Contains plagiarism or duplicate publication",
                "Contains unresolved authorship or copyright disputes",
                "Uses third-party material without permission",
                "Contains unlawful, defamatory, deceptive, or materially misleading content",
                "Provides false author, affiliation, funding, or publication information",
                "Cannot be brought to publication standard within the agreed scope",
                "Creates an unacceptable legal, ethical, reputational, or operational risk",
              ].map((item) => (
                <li key={item} className="font-serif text-sm text-[#555555] flex gap-3 border-b border-[#f0f0f0] pb-2.5 last:border-0">
                  <span className="text-[#c8c8c8] shrink-0">-</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border border-[#e2e2e2] border-l-2 border-l-[#111111] p-5 bg-[#f7f7f7]">
              <p className="font-serif text-sm text-[#555555] leading-relaxed">
                Payment does not override the publisher&apos;s editorial independence or publication standards. The publishing fee does not represent or guarantee sales outcomes, bookstore listing, library purchase, indexing, ranking, citations, academic promotion, degree recognition, institutional approval, or commercial revenue.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="border border-[#e2e2e2] bg-[#111111] p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-2xl text-white font-medium mb-3">
                Request a Publishing Assessment
              </h2>
              <p className="font-serif text-sm text-white/70 leading-relaxed max-w-[60ch]">
                Authors, editors, and institutions may contact Panorama Scholarly Books to discuss manuscript suitability, production requirements, publication timeline, and available publishing packages. Submission of an inquiry does not constitute acceptance or create a publishing agreement.
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
