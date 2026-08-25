import type { Metadata } from "next";
import OpenAccessClient from "@/app/_pages/policies/open-access/OpenAccessClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Open Access Books Policy",
  description: "Open access books policy of Panorama Scholarly Books.",
  alternates: localeAlternates("/policies/open-access", "en"),
};

export default function OpenAccessPage() {
  return <OpenAccessClient locale="en" />;
}
