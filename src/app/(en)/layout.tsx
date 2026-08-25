import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import SiteChrome from "@/components/SiteChrome";
import AnalyticsScripts from "@/components/AnalyticsScripts";
import { localeAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "Academic Book Publisher | Panorama Scholarly Books",
    template: "%s | Panorama Scholarly Books",
  },
  description:
    "Panorama Scholarly Books publishes scholarly monographs, edited volumes, academic textbooks, research reports, and interdisciplinary books under Panorama Scholarly Group Limited.",
  metadataBase: new URL("https://books.panorama-sg.com"),
  alternates: localeAlternates("", "en"),
  openGraph: {
    siteName: "Panorama Scholarly Books",
    type: "website",
  },
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <AnalyticsScripts />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
