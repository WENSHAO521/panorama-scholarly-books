"use client";

import { useState } from "react";

const inquiryTypes = [
  { label: "Book Publishing Inquiry", subject: "Book Publishing Inquiry" },
  { label: "Order / Copy Request", subject: "Book Order Request" },
  { label: "Institutional Purchase", subject: "Institutional Purchase Inquiry" },
  { label: "Rights and Permissions", subject: "Rights and Permissions Inquiry" },
  { label: "General Inquiry", subject: "General Inquiry" },
];

const ACCESS_KEY = "0eb32213-c404-42e4-adf6-850fedb7679d";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [inquiryType, setInquiryType] = useState("");

  const isPublishingInquiry = inquiryType === "Book Publishing Inquiry";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const json = await res.json();
      setStatus(json.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[#e2e2e2] p-8 md:p-12">
        <p className="font-serif text-2xl text-[#111111] font-medium mb-3">Inquiry Received</p>
        <p className="font-serif text-base text-[#555555] mb-6 leading-relaxed">
          Thank you for contacting Panorama Scholarly Books. We have received your inquiry and will respond within 5–7 business days. Submission of this inquiry does not constitute acceptance, ISBN assignment, or a publishing agreement.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-6 py-2 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Inquiry type quick-links */}
      <section className="mb-12">
        <h2 className="font-serif text-xl text-[#111111] font-medium mb-6">
          Select Your Inquiry Type
        </h2>
        <div className="flex flex-col gap-0 border-t border-[#e2e2e2]">
          {inquiryTypes.map((item) => (
            <div
              key={item.label}
              className="border-b border-[#e2e2e2] py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <p className="font-serif text-base text-[#111111] font-medium">{item.label}</p>
              <a
                href={`mailto:books@panorama-sg.com?subject=${encodeURIComponent(item.subject)}`}
                className="shrink-0 font-serif text-[11px] tracking-[0.12em] uppercase border border-[#e2e2e2] px-4 py-2 text-[#555555] hover:border-[#111111] hover:text-[#111111] transition-colors whitespace-nowrap"
              >
                Send Email
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section>
        <h2 className="font-serif text-xl text-[#111111] font-medium mb-2">Contact Form</h2>
        <p className="font-serif text-sm text-[#888888] mb-6">
          All fields marked with an asterisk are required. Submission of this form does not constitute acceptance, ISBN assignment, or a publishing agreement.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                Institution / Affiliation
              </label>
              <input
                type="text"
                name="institution"
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder="University, institution, or organisation"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                Country or Region
              </label>
              <input
                type="text"
                name="country"
                className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                placeholder="Country or region"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
              Inquiry Type *
            </label>
            <select
              name="subject"
              required
              value={inquiryType}
              onChange={(e) => setInquiryType(e.target.value)}
              className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
            >
              <option value="">Select inquiry type</option>
              {inquiryTypes.map((item) => (
                <option key={item.subject} value={item.subject}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          {isPublishingInquiry && (
            <div className="border border-[#e2e2e2] bg-[#f7f7f7] p-5 md:p-6 flex flex-col gap-5">
              <p className="font-serif text-xs tracking-[0.15em] uppercase text-[#888888]">
                Publishing Assessment Details
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Proposed Book Title
                  </label>
                  <input
                    type="text"
                    name="book_title"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="Working title and subtitle"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Book Type
                  </label>
                  <select
                    name="book_type"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">Select book type</option>
                    <option>Scholarly Monograph</option>
                    <option>Edited Volume</option>
                    <option>Academic Textbook</option>
                    <option>Research Report</option>
                    <option>Conference Proceedings</option>
                    <option>Doctoral Dissertation-Based Book</option>
                    <option>Interdisciplinary Research Book</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Subject Area
                  </label>
                  <input
                    type="text"
                    name="subject_area"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="e.g. Public Policy, Education"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Manuscript Language
                  </label>
                  <input
                    type="text"
                    name="manuscript_language"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="e.g. English, Chinese (Simplified)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Current Word Count
                  </label>
                  <input
                    type="text"
                    name="word_count"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="e.g. 55,000"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Estimated Page Count
                  </label>
                  <input
                    type="text"
                    name="page_count"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="e.g. 200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Tables and Figures
                  </label>
                  <input
                    type="text"
                    name="tables_figures_count"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="e.g. 12"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Current Manuscript Status
                  </label>
                  <select
                    name="manuscript_status"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">Select status</option>
                    <option>Proposal / draft outline only</option>
                    <option>In progress</option>
                    <option>Complete, not yet proofread</option>
                    <option>Complete and fully proofread</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Required Product Format
                  </label>
                  <select
                    name="product_format"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">Select format</option>
                    <option>Paperback</option>
                    <option>Hardback</option>
                    <option>PDF eBook</option>
                    <option>EPUB</option>
                    <option>Multiple formats</option>
                    <option>Not yet decided</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Required Publishing Package
                  </label>
                  <select
                    name="publishing_package"
                    defaultValue=""
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors appearance-none"
                  >
                    <option value="">Select package</option>
                    <option>Package A — Author-Prepared Publication (USD 999)</option>
                    <option>Package B — Standard Academic Book Production (USD 1,799)</option>
                    <option>Package C — Extended and Complex Book Production (From USD 2,499)</option>
                    <option>Not sure — please advise</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Required Publication Date
                  </label>
                  <input
                    type="text"
                    name="required_publication_date"
                    className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                    placeholder="e.g. Q1 2027, or flexible"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                  Previously Published Material
                </label>
                <input
                  type="text"
                  name="previously_published"
                  className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                  placeholder="None, or describe (e.g. based on a doctoral thesis, prior journal articles)"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                  Third-Party Copyright Material
                </label>
                <input
                  type="text"
                  name="third_party_copyright"
                  className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
                  placeholder="None, or describe material and permission status"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Upload Proposal
                  </label>
                  <input
                    type="file"
                    name="proposal_file"
                    accept=".pdf,.doc,.docx"
                    className="font-serif text-xs text-[#555555] border border-[#e2e2e2] px-4 py-3 bg-white file:mr-3 file:border-0 file:bg-[#111111] file:text-white file:px-3 file:py-1.5 file:font-serif file:text-xs file:uppercase file:tracking-[0.08em] file:cursor-pointer"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
                    Upload Sample Chapter or Manuscript
                  </label>
                  <input
                    type="file"
                    name="manuscript_file"
                    accept=".pdf,.doc,.docx"
                    className="font-serif text-xs text-[#555555] border border-[#e2e2e2] px-4 py-3 bg-white file:mr-3 file:border-0 file:bg-[#111111] file:text-white file:px-3 file:py-1.5 file:font-serif file:text-xs file:uppercase file:tracking-[0.08em] file:cursor-pointer"
                  />
                </div>
              </div>
              <p className="font-serif text-xs text-[#888888] leading-relaxed">
                Files up to 10 MB. PDF or Word documents only. For larger files, please email books@panorama-sg.com directly.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
              Message *
            </label>
            <textarea
              name="message"
              required
              rows={6}
              className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8] resize-none"
              placeholder="Please describe your inquiry in detail. For book proposals, please include the working title, subject area, and a brief description of the project."
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-1 shrink-0 border-[#e2e2e2]"
            />
            <label htmlFor="consent" className="font-serif text-xs text-[#888888] leading-relaxed">
              I consent to Panorama Scholarly Books retaining my contact details for the purpose of responding to this inquiry. My information will not be shared with third parties.
            </label>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="declaration"
              name="declaration"
              required
              className="mt-1 shrink-0 border-[#e2e2e2]"
            />
            <label htmlFor="declaration" className="font-serif text-xs text-[#888888] leading-relaxed">
              I confirm that the information supplied is accurate and that submission of this inquiry does not constitute acceptance, ISBN assignment, or a publishing agreement.
            </label>
          </div>

          {status === "error" && (
            <p className="font-serif text-sm text-[#c00000]">
              Something went wrong. Please try again or email us directly at books@panorama-sg.com.
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] bg-[#111111] text-white px-8 py-3 hover:bg-transparent hover:text-[#111111] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Submitting…" : "Submit Inquiry"}
            </button>
          </div>
        </form>

        <p className="font-serif text-xs text-[#888888] mt-6 leading-relaxed">
          Alternatively, email us directly at{" "}
          <a href="mailto:books@panorama-sg.com" className="text-[#555555] underline underline-offset-2">
            books@panorama-sg.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
