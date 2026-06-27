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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, access_key: ACCESS_KEY }),
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
          Thank you for contacting Panorama Scholarly Books. We have received your inquiry and will respond within 5–7 business days.
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
          All fields marked with an asterisk are required.
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

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
              Affiliation
            </label>
            <input
              type="text"
              name="affiliation"
              className="font-serif text-sm text-[#111111] border border-[#e2e2e2] px-4 py-3 bg-white focus:outline-none focus:border-[#111111] transition-colors placeholder:text-[#c8c8c8]"
              placeholder="University, institution, or organisation"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-serif text-xs tracking-[0.12em] uppercase text-[#888888]">
              Inquiry Type *
            </label>
            <select
              name="subject"
              required
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
