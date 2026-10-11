import type { Locale } from "@/lib/locale";

// Book series announced by the imprint and open for proposals. No titles
// have been published in a series yet, so pages show scope and proposal
// information only — never placeholder volumes.

export const seriesTypeLabels: Record<string, { zhHant: string; zhHans: string }> = {
  Monographs: { zhHant: "專著", zhHans: "专著" },
  "Edited Volumes": { zhHant: "編著文集", zhHans: "编著文集" },
  "Research Reports": { zhHant: "研究報告", zhHans: "研究报告" },
  "Conference Proceedings": { zhHant: "會議論文集", zhHans: "会议论文集" },
};

export function seriesTypeLabel(key: string, locale: Locale) {
  if (locale === "zh-Hant") return seriesTypeLabels[key]?.zhHant ?? key;
  if (locale === "zh-Hans") return seriesTypeLabels[key]?.zhHans ?? key;
  return key;
}

export const series = [
  {
    id: "panorama-studies-education",
    title: { en: "Panorama Studies in Education", "zh-Hant": "Panorama 教育研究叢書", "zh-Hans": "Panorama 教育研究丛书" },
    scope: {
      en: "Publishes original research monographs and edited volumes addressing education policy, pedagogy, curriculum studies, higher education governance, and comparative education across national and international contexts.",
      "zh-Hant": "出版探討教育政策、教學法、課程研究、高等教育治理及國內外比較教育之原創研究專著與編著文集。",
      "zh-Hans": "出版探讨教育政策、教学法、课程研究、高等教育治理及国内外比较教育的原创研究专著与编著文集。",
    },
    types: ["Monographs", "Edited Volumes", "Research Reports"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
  {
    id: "panorama-studies-public-policy",
    title: { en: "Panorama Studies in Public Policy", "zh-Hant": "Panorama 公共政策研究叢書", "zh-Hans": "Panorama 公共政策研究丛书" },
    scope: {
      en: "Covers public administration, governance reform, policy analysis, regulatory studies, and the relationship between state institutions and civil society, with a comparative and interdisciplinary orientation.",
      "zh-Hant": "涵蓋公共行政、治理改革、政策分析、監管研究，以及國家機構與公民社會的關係，採比較與跨學科取向。",
      "zh-Hans": "涵盖公共行政、治理改革、政策分析、监管研究，以及国家机构与公民社会的关系，采比较与跨学科取向。",
    },
    types: ["Monographs", "Edited Volumes"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
  {
    id: "panorama-studies-arts-humanities",
    title: { en: "Panorama Studies in Arts and Humanities", "zh-Hant": "Panorama 人文藝術研究叢書", "zh-Hans": "Panorama 人文艺术研究丛书" },
    scope: {
      en: "Encompasses original scholarship in literature, philosophy, history, cultural studies, art history, media studies, and performance, with particular interest in interdisciplinary and cross-cultural approaches.",
      "zh-Hant": "涵蓋文學、哲學、歷史、文化研究、藝術史、媒體研究及表演藝術之原創學術著作，特別重視跨學科與跨文化取向。",
      "zh-Hans": "涵盖文学、哲学、历史、文化研究、艺术史、媒体研究及表演艺术的原创学术著作，特别重视跨学科与跨文化取向。",
    },
    types: ["Monographs", "Edited Volumes"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
  {
    id: "panorama-studies-global-society",
    title: { en: "Panorama Studies in Global Society", "zh-Hant": "Panorama 全球社會研究叢書", "zh-Hans": "Panorama 全球社会研究丛书" },
    scope: {
      en: "Addresses questions of globalisation, international relations, transnational civil society, migration, global governance, and the social consequences of geopolitical transformation.",
      "zh-Hant": "探討全球化、國際關係、跨國公民社會、移民、全球治理，以及地緣政治變遷所帶來的社會影響。",
      "zh-Hans": "探讨全球化、国际关系、跨国公民社会、移民、全球治理，以及地缘政治变迁带来的社会影响。",
    },
    types: ["Monographs", "Edited Volumes"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
  {
    id: "panorama-studies-ai-future-society",
    title: { en: "Panorama Studies in AI and Future Society", "zh-Hant": "Panorama 人工智能與未來社會研究叢書", "zh-Hans": "Panorama 人工智能与未来社会研究丛书" },
    scope: {
      en: "Examines the social, ethical, political, and philosophical dimensions of artificial intelligence, automation, digital transformation, and emerging technologies, from interdisciplinary perspectives.",
      "zh-Hant": "從跨學科視角探討人工智能、自動化、數位轉型及新興科技在社會、倫理、政治與哲學層面的意涵。",
      "zh-Hans": "从跨学科视角探讨人工智能、自动化、数字化转型及新兴科技在社会、伦理、政治与哲学层面的意涵。",
    },
    types: ["Monographs", "Edited Volumes", "Research Reports"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
  {
    id: "panorama-conference-proceedings",
    title: { en: "Panorama Conference Proceedings Series", "zh-Hant": "Panorama 會議論文集叢書", "zh-Hans": "Panorama 会议论文集丛书" },
    scope: {
      en: "Publishes peer-reviewed conference proceedings across all fields covered by Panorama Scholarly Books, providing a dedicated venue for conference organisers seeking professional academic publication.",
      "zh-Hant": "出版涵蓋 Panorama Scholarly Books 各學科領域之同行評審會議論文集，為會議主辦單位提供專業學術出版渠道。",
      "zh-Hans": "出版涵盖 Panorama Scholarly Books 各学科领域的同行评审会议论文集，为会议主办单位提供专业学术出版渠道。",
    },
    types: ["Conference Proceedings"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
  {
    id: "panorama-research-reports",
    title: { en: "Panorama Research Report Series", "zh-Hant": "Panorama 研究報告叢書", "zh-Hans": "Panorama 研究报告丛书" },
    scope: {
      en: "A dedicated series for research reports, policy briefs, and investigation findings from academic research groups, policy institutes, and interdisciplinary research projects.",
      "zh-Hant": "專門收錄學術研究團隊、政策研究機構及跨學科研究專案之研究報告、政策簡報與調查成果。",
      "zh-Hans": "专门收录学术研究团队、政策研究机构及跨学科研究项目的研究报告、政策简报与调查成果。",
    },
    types: ["Research Reports"],
    status: { en: "Open for Submissions", "zh-Hant": "接受投稿中", "zh-Hans": "接受投稿中" },
  },
];
