import type { Metadata } from "next";
import CopyrightClient from "@/app/_pages/policies/copyright/CopyrightClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Copyright and Licensing Policy",
  description: "Copyright and licensing policy of Panorama Scholarly Books.",
  alternates: localeAlternates("/policies/copyright", "en"),
};

export default function CopyrightPage() {
  return <CopyrightClient locale="en" />;
}
