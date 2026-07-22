import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Panorama Scholarly Books — mission, scope, and publisher information.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
