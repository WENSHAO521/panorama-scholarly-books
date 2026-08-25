import type { Metadata } from "next";
import AboutPageClient from "@/app/_pages/about/AboutPageClient";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Panorama Scholarly Books — mission, scope, and publisher information.",
  alternates: localeAlternates("/about", "en"),
};

export default function AboutPage() {
  return <AboutPageClient locale="en" />;
}
