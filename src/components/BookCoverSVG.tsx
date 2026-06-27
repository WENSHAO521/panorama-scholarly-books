import type { Book } from "@/data/books";

type Props = Pick<
  Book,
  "slug" | "title" | "subtitle" | "authors" | "editors" | "isEdited" | "bookType" | "status"
>;

const F = `var(--font-eb-garamond), Georgia, "Times New Roman", serif`;

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
      return null;
  }
}
