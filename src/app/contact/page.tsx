import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Panorama Scholarly Books for publishing inquiries, order requests, and general questions.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
