import {
  Source_Serif_4,
  Source_Sans_3,
  Noto_Serif_SC,
  Noto_Serif_TC,
  Noto_Sans_SC,
  Noto_Sans_TC,
} from "next/font/google";

// Source Serif 4 + Source Sans 3 are a matched superfamily (SIL OFL), with
// full Latin Extended coverage so German (ä ö ü ß) and other European
// languages render in the same face. Source Serif's optical-size axis keeps
// small metadata crisp and large display headings refined.
const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-source-serif",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

// CJK faces carry no Latin glyphs priority: they sit after the Latin face in
// each stack so the browser falls through to them per character.
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

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-tc",
  display: "swap",
});

export const fontVariables = `${sourceSerif.variable} ${sourceSans.variable} ${notoSerifSC.variable} ${notoSerifTC.variable} ${notoSansSC.variable} ${notoSansTC.variable}`;
