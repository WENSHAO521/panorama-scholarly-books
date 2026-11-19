import type { Metadata } from "next";
import "../globals.css";
import "./redesign.css";
import { fontVariables } from "../fonts";

// A standalone design-preview root. It shares data and fonts with the live
// site but none of its chrome, so the redesign can be reviewed side by side
// without touching any published page.
export const metadata: Metadata = {
  title: "Design preview | Panorama Scholarly Books",
  metadataBase: new URL("https://books.panorama-sg.com"),
  robots: { index: false, follow: false },
};

export default function PreviewRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="rd">{children}</body>
    </html>
  );
}
