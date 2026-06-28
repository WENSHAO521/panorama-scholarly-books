import type { Book } from "@/data/books";

type Props = Pick<
  Book,
  "slug" | "title" | "subtitle" | "authors" | "editors" | "isEdited" | "bookType" | "status"
>;

const F = `var(--font-eb-garamond), Georgia, "Times New Roman", serif`;
const CJK = `"PingFang SC", "Hiragino Sans GB", "Noto Serif SC", "Microsoft YaHei", sans-serif`;

function wrapText(text: string, maxChars: number, maxLines: number): string[] {
  if (/[一-鿿]/.test(text)) {
    if (text.length <= maxChars) return [text];
    const lines: string[] = [];
    let i = 0;
    while (i < text.length && lines.length < maxLines) {
      const end = Math.min(i + maxChars, text.length);
      lines.push(text.slice(i, end));
      i = end;
    }
    return lines;
  }
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      if (lines.length >= maxLines) return lines;
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current && lines.length < maxLines) lines.push(current);
  return lines;
}

// ─── Cover 1: Education Policy in the Digital Age ────────────────────────────
// Pixel grid fading into a dark title band
function CoverEducationPolicy({ credit }: { credit: string }) {
  const cols = 11, rows = 8, cW = 24, cH = 24, gX = 7, gY = 7;
  const totalW = cols * cW + (cols - 1) * gX;
  const sX = (400 - totalW) / 2;
  const cells: React.ReactElement[] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const v = (r * 11 + c * 17 + r * c + c * 3) % 23;
      const fill =
        v < 5 ? "#111111" :
        v < 9 ? "#444444" :
        v < 13 ? "#888888" :
        v < 17 ? "#c8c8c8" : null;
      if (fill) {
        cells.push(
          <rect
            key={`${r}-${c}`}
            x={sX + c * (cW + gX)}
            y={32 + r * (cH + gY)}
            width={cW}
            height={cH}
            fill={fill}
          />
        );
      }
    }
  }

  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#f5f5f5" />
      {cells}
      <rect y="296" width="400" height="304" fill="#111111" />
      <text x="28" y="326" fontFamily={F} fontSize="9" fill="#666666" letterSpacing="3">MONOGRAPH</text>
      <rect x="28" y="334" width="48" height="1" fill="#333333" />
      <text x="28" y="374" fontFamily={F} fontSize="26" fontWeight="600" fill="#ffffff">Education Policy</text>
      <text x="28" y="406" fontFamily={F} fontSize="26" fontWeight="600" fill="#ffffff">in the Digital Age</text>
      <text x="28" y="438" fontFamily={F} fontSize="10.5" fill="#777777" fontStyle="italic">Governance, Access, and Equity</text>
      <text x="28" y="453" fontFamily={F} fontSize="10.5" fill="#777777" fontStyle="italic">in Networked Learning Environments</text>
      <rect x="28" y="474" width="344" height="1" fill="#2a2a2a" />
      <text x="28" y="498" fontFamily={F} fontSize="12" fill="#cccccc">{credit}</text>
      <text x="28" y="578" fontFamily={F} fontSize="7" fill="#555555" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 2: Global Society and Governance ───────────────────────────────────
// Dark background, concentric arc lines clipped to canvas
function CoverGlobalGovernance({ credit }: { credit: string }) {
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="clip-arcs">
          <rect width="400" height="600" />
        </clipPath>
      </defs>
      <rect width="400" height="600" fill="#0d0d0d" />
      <g clipPath="url(#clip-arcs)">
        <circle cx="0" cy="720" r="380" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.07" />
        <circle cx="0" cy="720" r="520" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.10" />
        <circle cx="0" cy="720" r="665" fill="none" stroke="#ffffff" strokeWidth="2.5" opacity="0.14" />
        <circle cx="0" cy="720" r="810" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.08" />
      </g>
      <rect x="28" y="40" width="64" height="1" fill="#ffffff" opacity="0.5" />
      <text x="28" y="60" fontFamily={F} fontSize="9" fill="#666666" letterSpacing="3">EDITED VOLUME</text>
      <text x="28" y="110" fontFamily={F} fontSize="34" fontWeight="600" fill="#ffffff">Global Society</text>
      <text x="28" y="150" fontFamily={F} fontSize="34" fontWeight="600" fill="#ffffff">and Governance</text>
      <text x="28" y="180" fontFamily={F} fontSize="13" fill="#555555">Perspectives from the Asia-Pacific</text>
      <rect x="28" y="198" width="344" height="1" fill="#222222" />
      <text x="28" y="540" fontFamily={F} fontSize="11" fill="#666666">Edited by {credit}</text>
      <rect x="28" y="556" width="344" height="1" fill="#1e1e1e" />
      <text x="28" y="578" fontFamily={F} fontSize="7" fill="#444444" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 3: Artificial Intelligence in Higher Education ─────────────────────
// White background, horizontal bars (data-visualization waveform)
function CoverAIHigherEd({ credit }: { credit: string }) {
  const barData: [number, string][] = [
    [42, "#e0e0e0"], [78, "#d4d4d4"], [118, "#c0c0c0"], [162, "#aaaaaa"], [205, "#909090"],
    [242, "#757575"], [278, "#5e5e5e"], [308, "#484848"], [332, "#363636"], [352, "#262626"],
    [366, "#181818"], [374, "#0e0e0e"], [378, "#111111"], [374, "#141414"], [365, "#1e1e1e"],
    [350, "#2a2a2a"], [328, "#383838"], [300, "#484848"], [270, "#5a5a5a"], [238, "#6e6e6e"],
    [205, "#828282"], [170, "#969696"], [138, "#ababab"], [108, "#bcbcbc"], [82, "#cccccc"],
    [62, "#d6d6d6"], [46, "#e0e0e0"], [34, "#e8e8e8"], [24, "#eeeeee"], [16, "#f4f4f4"],
  ];
  const barH = 6, barGap = 3, startY = 190;

  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#ffffff" />
      <rect x="28" y="28" width="344" height="1.5" fill="#111111" />
      <text x="28" y="48" fontFamily={F} fontSize="8.5" fill="#888888" letterSpacing="2.5">RESEARCH REPORT · OPEN ACCESS</text>
      <text x="28" y="96" fontFamily={F} fontSize="25" fontWeight="700" fill="#111111">Artificial Intelligence</text>
      <text x="28" y="128" fontFamily={F} fontSize="25" fontWeight="700" fill="#111111">in Higher Education</text>
      <text x="28" y="158" fontFamily={F} fontSize="10.5" fill="#888888" fontStyle="italic">Challenges, Opportunities, and Institutional Responses</text>
      <rect x="28" y="174" width="344" height="1" fill="#e2e2e2" />

      {barData.map(([w, fill], i) => (
        <rect
          key={i}
          x={(400 - w) / 2}
          y={startY + i * (barH + barGap)}
          width={w}
          height={barH}
          fill={fill}
        />
      ))}

      <rect x="28" y="460" width="344" height="1" fill="#e2e2e2" />
      <text x="28" y="490" fontFamily={F} fontSize="12" fill="#555555">{credit}</text>
      <rect x="28" y="510" width="82" height="20" fill="none" stroke="#cccccc" strokeWidth="1" />
      <text x="69" y="524" fontFamily={F} fontSize="8" fill="#888888" letterSpacing="1.5" textAnchor="middle">OPEN ACCESS</text>
      <text x="28" y="578" fontFamily={F} fontSize="7" fill="#888888" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 4: Public Administration Reform (Forthcoming) ──────────────────────
// Off-white, vertical bar chart, diagonal watermark
function CoverPublicAdmin({ credit }: { credit: string }) {
  const bars = [
    { h: 190, fill: "#555555" }, { h: 135, fill: "#787878" }, { h: 255, fill: "#333333" },
    { h: 165, fill: "#676767" }, { h: 300, fill: "#111111" }, { h: 220, fill: "#444444" },
    { h: 280, fill: "#222222" }, { h: 188, fill: "#555555" }, { h: 245, fill: "#333333" },
    { h: 130, fill: "#848484" }, { h: 205, fill: "#444444" },
  ];
  const barW = 26, gap = 6;
  const totalW = bars.length * barW + (bars.length - 1) * gap;
  const sX = (400 - totalW) / 2;
  const bottomY = 530;

  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#f0f0f0" />
      <text
        x="200" y="340"
        fontFamily={F} fontSize="52" fill="#e4e4e4"
        textAnchor="middle"
        transform="rotate(-38 200 340)"
        letterSpacing="1"
      >
        FORTHCOMING
      </text>
      <rect x="28" y="28" width="48" height="2" fill="#111111" />
      <text x="28" y="52" fontFamily={F} fontSize="9" fill="#888888" letterSpacing="3">MONOGRAPH</text>
      <text x="28" y="96" fontFamily={F} fontSize="23" fontWeight="700" fill="#111111">Public Administration</text>
      <text x="28" y="124" fontFamily={F} fontSize="23" fontWeight="700" fill="#111111">Reform in Post-</text>
      <text x="28" y="152" fontFamily={F} fontSize="23" fontWeight="700" fill="#111111">Industrial Societies</text>
      <text x="28" y="178" fontFamily={F} fontSize="10" fill="#888888" fontStyle="italic">Institutional Change, Legitimacy, and Democratic Accountability</text>

      {bars.map((bar, i) => (
        <rect
          key={i}
          x={sX + i * (barW + gap)}
          y={bottomY - bar.h}
          width={barW}
          height={bar.h}
          fill={bar.fill}
        />
      ))}

      <text x="28" y="558" fontFamily={F} fontSize="12" fill="#555555">{credit}</text>
      <text x="28" y="578" fontFamily={F} fontSize="7" fill="#888888" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Procedural cover (all other books) ──────────────────────────────────────
function CoverGenerated({
  slug,
  title,
  credit,
  bookType,
  status,
}: {
  slug: string;
  title: string;
  credit: string;
  bookType: string;
  status: string;
}) {
  const isCJK = /[一-鿿]/.test(title);
  const isForthcoming = status === "Forthcoming";

  const seed = (slug.split("").reduce((a, c, i) => (a * 31 + c.charCodeAt(0) + i) >>> 0, 0)) >>> 0;

  const palettes = [
    { bg: "#f5f5f5", dark: false, band: "#111111", bt: "#ffffff", dim: "#888888" },
    { bg: "#0d0d0d", dark: true,  band: "#1a1a1a", bt: "#f0f0f0", dim: "#555555" },
    { bg: "#f0f0f0", dark: false, band: "#222222", bt: "#eeeeee", dim: "#777777" },
    { bg: "#1a1a1a", dark: true,  band: "#0d0d0d", bt: "#e8e8e8", dim: "#666666" },
    { bg: "#ffffff", dark: false, band: "#333333", bt: "#ffffff", dim: "#999999" },
    { bg: "#111111", dark: true,  band: "#1e1e1e", bt: "#f5f5f5", dim: "#555555" },
  ];
  const p = palettes[seed % palettes.length];
  const pat = Math.floor(seed / 6) % 4;

  const lo = (a: number) => p.dark ? `rgba(255,255,255,${a})` : `rgba(0,0,0,${a})`;

  let patternEl: React.ReactNode = null;

  if (pat === 0) {
    // Horizontal bar mountain
    patternEl = Array.from({ length: 22 }, (_, i) => {
      const t = i / 21;
      const w = Math.round(28 + Math.sin(t * Math.PI) * (180 + (seed % 6) * 18));
      return <rect key={i} x={(400 - w) / 2} y={185 + i * 9} width={w} height={6} fill={lo(i % 4 === seed % 4 ? 0.17 : 0.09)} />;
    });
  } else if (pat === 1) {
    // Dot grid
    const dots: React.ReactElement[] = [];
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 11; c++) {
        const v = ((r * 13 + c * 7 + seed) >>> 0) % 19;
        if (v < 10) {
          dots.push(
            <circle key={`${r}-${c}`} cx={26 + c * 33} cy={185 + r * 30}
              r={v < 3 ? 4.5 : v < 7 ? 3 : 1.8} fill={lo(v < 3 ? 0.18 : 0.09)} />
          );
        }
      }
    }
    patternEl = dots;
  } else if (pat === 2) {
    // Vertical bars bottom-anchored
    const numB = 14, bW = 18, gap = 8;
    const totalW = numB * bW + (numB - 1) * gap;
    const sx = (400 - totalW) / 2;
    patternEl = Array.from({ length: numB }, (_, i) => {
      const h = 40 + ((((i * 7 + seed) >>> 0) % 17) / 16) * 220;
      return <rect key={i} x={sx + i * (bW + gap)} y={350 - h} width={bW} height={h} fill={lo(i % 3 === 0 ? 0.17 : 0.09)} />;
    });
  } else {
    // Arcs from corner
    const clipId = `cg-${seed}`;
    patternEl = (
      <>
        <defs><clipPath id={clipId}><rect width="400" height="600" /></clipPath></defs>
        <g clipPath={`url(#${clipId})`}>
          {[260, 400, 545, 690].map((r, i) => (
            <circle key={i} cx={18} cy={580} r={r} fill="none"
              stroke={p.dark ? `rgba(255,255,255,${0.06 + i * 0.025})` : `rgba(0,0,0,${0.05 + i * 0.025})`}
              strokeWidth={1.5 + i * 0.5}
            />
          ))}
        </g>
      </>
    );
  }

  const titleFont = isCJK ? CJK : F;
  const maxC = isCJK ? 13 : 20;
  const titleLines = wrapText(title, maxC, isCJK ? 3 : 4);
  const fs = isCJK ? 25 : (title.length > 45 ? 18 : title.length > 30 ? 21 : 24);
  const lh = isCJK ? 37 : 30;
  const bandY = 352;
  const typeY = bandY + 25;
  const titleY = typeY + 26;

  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill={p.bg} />
      {patternEl}
      {isForthcoming && (
        <text x="200" y="230" fontFamily={F} fontSize="36"
          fill={p.dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.05)"}
          textAnchor="middle" transform="rotate(-35 200 230)" letterSpacing="1"
        >FORTHCOMING</text>
      )}
      <rect y={bandY} width="400" height={600 - bandY} fill={p.band} />
      <text x="28" y={typeY} fontFamily={F} fontSize="8" fill={p.dim} letterSpacing="2.5">
        {bookType.toUpperCase()}
      </text>
      <rect x="28" y={typeY + 5} width="28" height="1" fill={p.dim} />
      {titleLines.map((line, idx) => (
        <text key={idx} x="28" y={titleY + idx * lh}
          fontFamily={titleFont} fontSize={fs} fontWeight="600" fill={p.bt}
        >{line}</text>
      ))}
      <text x="28" y="553" fontFamily={titleFont} fontSize="10.5" fill={p.dim}>{credit}</text>
      <text x="28" y="578" fontFamily={F} fontSize="7" fill={p.dim} letterSpacing="2" opacity="0.6">
        PANORAMA SCHOLARLY GROUP LTD
      </text>
    </svg>
  );
}

// ─── Default export ───────────────────────────────────────────────────────────
export default function BookCoverSVG(book: Props) {
  const credit = book.isEdited
    ? book.editors.join(", ") + (book.editors.length === 1 ? " (Ed.)" : " (Eds.)")
    : book.authors.join(", ");

  switch (book.slug) {
    case "education-policy-digital-age":
      return <CoverEducationPolicy credit={credit} />;
    case "global-society-governance-asia-pacific":
      return <CoverGlobalGovernance credit={credit} />;
    case "artificial-intelligence-higher-education":
      return <CoverAIHigherEd credit={credit} />;
    case "public-administration-reform-post-industrial":
      return <CoverPublicAdmin credit={credit} />;
    default:
      return (
        <CoverGenerated
          slug={book.slug}
          title={book.title}
          credit={credit}
          bookType={book.bookType}
          status={book.status}
        />
      );
  }
}
