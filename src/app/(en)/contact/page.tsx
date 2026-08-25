import type { Metadata } from "next";
import ContactPageClient from "@/app/_pages/contact/ContactPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Panorama Scholarly Books for publishing inquiries, order requests, and general questions.",
  alternates: localeAlternates("/contact", "en"),
};

export default function ContactPage() {
  return <ContactPageClient locale="en" />;
}
