import type { Metadata } from "next";
import Script from "next/script";
import { EB_Garamond, Noto_Serif_SC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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

const notoSerifTC = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-serif-tc",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Academic Book Publisher | Panorama Scholarly Books",
    template: "%s | Panorama Scholarly Books",
  },
  description:
    "Panorama Scholarly Books publishes scholarly monographs, edited volumes, academic textbooks, research reports, and interdisciplinary books under Panorama Scholarly Group Limited.",
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
      className={`${ebGaramond.variable} ${notoSerifSC.variable} ${notoSerifTC.variable}`}
    >
      <body>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <LanguageProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
