import type { Metadata } from "next";
import { EB_Garamond, Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Panorama Scholarly Books",
    template: "%s | Panorama Scholarly Books",
  },
  description:
    "An academic book publishing platform of Panorama Scholarly Group. Publishing scholarly monographs, edited volumes, research reports, and interdisciplinary works.",
  metadataBase: new URL("https://books.panorama-sg.com"),
  openGraph: {
    siteName: "Panorama Scholarly Books",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${notoSerifSC.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
