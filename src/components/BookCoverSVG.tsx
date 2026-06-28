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

// ─── Cover 5: Media, Democracy and the Digital Public Sphere ─────────────────
function CoverMediaDemocracy({ credit }: { credit: string }) {
  const waves = [
    { y: 242, amp: 10, op: 0.10 }, { y: 264, amp: 16, op: 0.14 },
    { y: 286, amp: 22, op: 0.18 }, { y: 308, amp: 26, op: 0.22 },
    { y: 330, amp: 28, op: 0.24 }, { y: 352, amp: 22, op: 0.20 },
    { y: 374, amp: 16, op: 0.15 }, { y: 396, amp: 10, op: 0.10 },
    { y: 418, amp: 5,  op: 0.07 },
  ];
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#ffffff" />
      <rect x="28" y="36" width="344" height="0.8" fill="#e0e0e0" />
      <text x="28" y="54" fontFamily={F} fontSize="7.5" fill="#aaaaaa" letterSpacing="3">EDITED VOLUME</text>
      <text x="28" y="98"  fontFamily={F} fontSize="30" fontWeight="600" fill="#111111">Media,</text>
      <text x="28" y="134" fontFamily={F} fontSize="30" fontWeight="600" fill="#111111">Democracy</text>
      <text x="28" y="170" fontFamily={F} fontSize="30" fontWeight="600" fill="#111111">and the Digital</text>
      <text x="28" y="206" fontFamily={F} fontSize="30" fontWeight="600" fill="#111111">Public Sphere</text>
      {waves.map(({ y, amp, op }, i) => (
        <path key={i} d={`M 0,${y} C 133,${y - amp} 267,${y + amp} 400,${y}`}
          fill="none" stroke="#111111" strokeWidth={i === 4 ? 1.2 : 0.7} opacity={op} />
      ))}
      <rect x="28" y="444" width="344" height="0.8" fill="#e8e8e8" />
      <text x="28" y="465" fontFamily={F} fontSize="11" fill="#555555">Edited by {credit}</text>
      <rect x="28" y="556" width="344" height="0.8" fill="#eeeeee" />
      <text x="28" y="575" fontFamily={F} fontSize="7" fill="#c0c0c0" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 6: Urban Governance in Transition ─────────────────────────────────
function CoverUrbanGovernance({ credit }: { credit: string }) {
  const blocks = [
    { x: 28, y: 218, w: 90,  h: 50, f: true  }, { x: 126, y: 218, w: 56,  h: 50, f: false },
    { x: 190, y: 218, w: 84, h: 50, f: true  }, { x: 282, y: 218, w: 90,  h: 50, f: false },
    { x: 28, y: 276, w: 56,  h: 42, f: false }, { x: 92,  y: 276, w: 90,  h: 42, f: true  },
    { x: 190, y: 276, w: 40, h: 42, f: false }, { x: 238, y: 276, w: 76,  h: 42, f: true  },
    { x: 322, y: 276, w: 50, h: 42, f: false },
    { x: 28, y: 326, w: 136, h: 58, f: true  }, { x: 172, y: 326, w: 76,  h: 58, f: false },
    { x: 256, y: 326, w: 116, h: 58, f: true  },
    { x: 28, y: 392, w: 50,  h: 38, f: false }, { x: 86,  y: 392, w: 96,  h: 38, f: true  },
    { x: 190, y: 392, w: 58, h: 38, f: false }, { x: 256, y: 392, w: 116, h: 38, f: true  },
  ];
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#f8f8f8" />
      <text x="200" y="330" fontFamily={F} fontSize="40" fill="#ebebeb"
        textAnchor="middle" transform="rotate(-36 200 330)" letterSpacing="1">FORTHCOMING</text>
      <rect x="28" y="36" width="44" height="1.5" fill="#111111" />
      <text x="28" y="56" fontFamily={F} fontSize="8" fill="#999999" letterSpacing="3">MONOGRAPH</text>
      <text x="28" y="100" fontFamily={F} fontSize="26" fontWeight="700" fill="#111111">Urban Governance</text>
      <text x="28" y="132" fontFamily={F} fontSize="26" fontWeight="700" fill="#111111">in Transition</text>
      <text x="28" y="160" fontFamily={F} fontSize="9.5" fill="#aaaaaa" fontStyle="italic">Smart Cities, Public Administration,</text>
      <text x="28" y="175" fontFamily={F} fontSize="9.5" fill="#aaaaaa" fontStyle="italic">and Democratic Accountability</text>
      {blocks.map(({ x, y, w, h, f }, i) => (
        <rect key={i} x={x} y={y} width={w} height={h}
          fill={f ? "#e0e0e0" : "#f8f8f8"} stroke="#cccccc" strokeWidth="0.8" />
      ))}
      <text x="28" y="554" fontFamily={F} fontSize="11" fill="#666666">{credit}</text>
      <text x="28" y="578" fontFamily={F} fontSize="7" fill="#aaaaaa" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 7: 数字经济与社会治理 ─────────────────────────────────────────────
function CoverDigitalEconomyCN({ credit }: { credit: string }) {
  const rows = [244, 180, 310, 130, 280, 200, 320, 160, 240, 100];
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#181818" />
      {rows.map((w, i) => (
        <rect key={i} x="28" y={252 + i * 18} width={w} height="5"
          fill="white" opacity={i === 2 || i === 6 ? 0.14 : 0.07} />
      ))}
      <text x="28" y="52"  fontFamily={CJK} fontSize="8"  fill="#444444" letterSpacing="2">专著</text>
      <text x="28" y="106" fontFamily={CJK} fontSize="36" fontWeight="700" fill="#ffffff">数字经济</text>
      <text x="28" y="152" fontFamily={CJK} fontSize="36" fontWeight="700" fill="#ffffff">与社会治理</text>
      <text x="28" y="188" fontFamily={CJK} fontSize="11" fill="#404040">平台、数据与制度变革</text>
      <rect x="28" y="206" width="52" height="0.8" fill="#2e2e2e" />
      <text x="28" y="546" fontFamily={CJK} fontSize="11" fill="#555555">{credit}</text>
      <rect x="28" y="560" width="344" height="0.6" fill="#222222" />
      <text x="28" y="580" fontFamily={F} fontSize="7" fill="#383838" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 8: 高等教育国际化研究 ─────────────────────────────────────────────
function CoverHigherEdInternationalCN({ credit }: { credit: string }) {
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <clipPath id="clip-hed">
          <rect x="0" y="195" width="400" height="265" />
        </clipPath>
      </defs>
      <rect width="400" height="600" fill="#ffffff" />
      <rect x="28" y="36" width="344" height="0.8" fill="#e0e0e0" />
      <text x="28" y="54"  fontFamily={CJK} fontSize="8"  fill="#aaaaaa" letterSpacing="2">文集</text>
      <text x="28" y="102" fontFamily={CJK} fontSize="34" fontWeight="700" fill="#111111">高等教育</text>
      <text x="28" y="148" fontFamily={CJK} fontSize="34" fontWeight="700" fill="#111111">国际化研究</text>
      <text x="28" y="184" fontFamily={CJK} fontSize="11" fill="#999999">理论、政策与实践</text>
      <g clipPath="url(#clip-hed)">
        {[110, 170, 240, 320, 410].map((r, i) => (
          <circle key={i} cx="200" cy="460" r={r} fill="none"
            stroke="#111111" strokeWidth={i === 2 ? 1.0 : 0.7} opacity={0.06 + i * 0.018} />
        ))}
        <ellipse cx="200" cy="358" rx="178" ry="19" fill="none" stroke="#111111" strokeWidth="0.7" opacity="0.06" />
        <ellipse cx="200" cy="318" rx="138" ry="15" fill="none" stroke="#111111" strokeWidth="0.7" opacity="0.05" />
        <ellipse cx="200" cy="398" rx="198" ry="21" fill="none" stroke="#111111" strokeWidth="0.7" opacity="0.06" />
      </g>
      <rect x="28" y="474" width="344" height="0.8" fill="#e8e8e8" />
      <text x="28" y="495" fontFamily={CJK} fontSize="11" fill="#555555">主编：{credit}</text>
      <rect x="28" y="556" width="344" height="0.8" fill="#eeeeee" />
      <text x="28" y="575" fontFamily={F} fontSize="7" fill="#c0c0c0" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 9: 人工智能治理 ────────────────────────────────────────────────────
function CoverAIGovernanceCN({ credit }: { credit: string }) {
  const rules = [200, 260, 176, 290, 148, 240, 210, 280, 168, 222];
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#0d0d0d" />
      {rules.map((w, i) => (
        <rect key={i} x="28" y={252 + i * 19} width={w} height="0.8"
          fill="white" opacity={i % 3 === 0 ? 0.13 : 0.06} />
      ))}
      <text x="28" y="52"  fontFamily={CJK} fontSize="8"  fill="#333333" letterSpacing="2">专著 · 即将出版</text>
      <text x="28" y="114" fontFamily={CJK} fontSize="46" fontWeight="700" fill="#ffffff">人工智能</text>
      <text x="28" y="164" fontFamily={CJK} fontSize="46" fontWeight="700" fill="#ffffff">治理</text>
      <text x="28" y="202" fontFamily={CJK} fontSize="11" fill="#3a3a3a">伦理、法律与制度框架</text>
      <rect x="28" y="220" width="40" height="0.8" fill="#252525" />
      <text x="28" y="546" fontFamily={CJK} fontSize="11" fill="#555555">{credit}</text>
      <rect x="28" y="560" width="344" height="0.6" fill="#1a1a1a" />
      <text x="28" y="580" fontFamily={F} fontSize="7" fill="#333333" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 10: 传播、民主与数字公共领域 ──────────────────────────────────────
function CoverCommunicationDemocracyCN({ credit }: { credit: string }) {
  const paths = [
    { y: 270, amp: 22, dir: 1 }, { y: 294, amp: 16, dir: -1 },
    { y: 318, amp: 26, dir: 1 }, { y: 342, amp: 18, dir: -1 },
    { y: 366, amp: 22, dir: 1 }, { y: 390, amp: 14, dir: -1 },
    { y: 414, amp: 18, dir: 1 },
  ];
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#f3f3f3" />
      <rect width="5" height="600" fill="#111111" />
      <text x="22" y="52"  fontFamily={CJK} fontSize="8"  fill="#aaaaaa" letterSpacing="2">文集 · 即将出版</text>
      <text x="22" y="100" fontFamily={CJK} fontSize="28" fontWeight="700" fill="#111111">传播、民主</text>
      <text x="22" y="140" fontFamily={CJK} fontSize="28" fontWeight="700" fill="#111111">与数字公共领域</text>
      <text x="22" y="178" fontFamily={CJK} fontSize="11" fill="#aaaaaa">理论前沿与批判视角</text>
      {paths.map(({ y, amp, dir }, i) => (
        <path key={i} d={`M 22,${y} C 148,${y - amp * dir} 276,${y + amp * dir} 372,${y}`}
          fill="none" stroke="#111111" strokeWidth={i === 2 ? 1.0 : 0.7}
          opacity={0.09 + i * 0.025} />
      ))}
      <rect x="22" y="450" width="354" height="0.8" fill="#cccccc" />
      <text x="22" y="471" fontFamily={CJK} fontSize="11" fill="#555555">主编：{credit}</text>
      <rect x="22" y="556" width="354" height="0.8" fill="#dcdcdc" />
      <text x="22" y="575" fontFamily={F} fontSize="7" fill="#b8b8b8" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
    </svg>
  );
}

// ─── Cover 11: 比较教育政策 ───────────────────────────────────────────────────
function CoverComparativeEdCN({ credit }: { credit: string }) {
  const barsA = [116, 82, 148, 74, 108, 58];
  const barsB = [88, 128, 66, 138, 92, 118];
  const barH = 13, barGap = 9, y0 = 268;
  return (
    <svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="400" height="600" fill="#ffffff" />
      <rect x="28" y="36" width="344" height="0.8" fill="#e0e0e0" />
      <text x="28" y="54"  fontFamily={CJK} fontSize="8"  fill="#aaaaaa" letterSpacing="2">研究报告 · 即将出版</text>
      <text x="28" y="112" fontFamily={CJK} fontSize="40" fontWeight="700" fill="#111111">比较教育</text>
      <text x="28" y="160" fontFamily={CJK} fontSize="40" fontWeight="700" fill="#111111">政策</text>
      <text x="28" y="202" fontFamily={CJK} fontSize="10.5" fill="#999999">亚太地区基础教育改革的多维分析</text>
      <rect x="28" y="220" width="344" height="0.8" fill="#e8e8e8" />
      {barsA.map((w, i) => (
        <rect key={`A${i}`} x="28" y={y0 + i * (barH + barGap)} width={w} height={barH}
          fill="#333333" opacity={0.65 + i * 0.04} />
      ))}
      {barsB.map((w, i) => (
        <rect key={`B${i}`} x="200" y={y0 + i * (barH + barGap)} width={w} height={barH}
          fill="#888888" opacity={0.5} />
      ))}
      <rect x="28" y="456" width="344" height="0.8" fill="#e8e8e8" />
      <text x="28" y="476" fontFamily={CJK} fontSize="11" fill="#555555">{credit}</text>
      <rect x="28" y="556" width="344" height="0.8" fill="#eeeeee" />
      <text x="28" y="575" fontFamily={F} fontSize="7" fill="#c0c0c0" letterSpacing="2">PANORAMA SCHOLARLY GROUP LTD</text>
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
    case "media-democracy-digital-public-sphere":
      return <CoverMediaDemocracy credit={credit} />;
    case "urban-governance-smart-cities":
      return <CoverUrbanGovernance credit={credit} />;
    case "digital-economy-social-governance-cn":
      return <CoverDigitalEconomyCN credit={credit} />;
    case "higher-education-internationalisation-cn":
      return <CoverHigherEdInternationalCN credit={credit} />;
    case "ai-governance-ethics-law-cn":
      return <CoverAIGovernanceCN credit={credit} />;
    case "communication-democracy-digital-cn":
      return <CoverCommunicationDemocracyCN credit={credit} />;
    case "comparative-education-policy-cn":
      return <CoverComparativeEdCN credit={credit} />;
    default:
      return <CoverEducationPolicy credit={credit} />;
  }
}
