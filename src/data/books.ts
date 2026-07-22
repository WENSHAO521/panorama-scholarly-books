export type BookType =
  | "Monograph"
  | "Edited Volume"
  | "Textbook"
  | "Research Report"
  | "Conference Proceedings"
  | "Open Access";

export type BookStatus = "Published" | "Forthcoming";

export interface AuthorBio {
  name: string;
  bio: string;
  bioZh?: string;
}

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  authors: string[];
  editors: string[];
  isEdited: boolean;
  publisher: string;
  placeOfPublication: string;
  publicationYear: number;
  isbn: string;
  eisbn?: string;
  doi?: string;
  language: string;
  pages: number;
  format: string[];
  subjectArea: string[];
  bookType: BookType;
  status: BookStatus;
  abstract: string;
  abstractZh?: string;
  tableOfContents: string[];
  tableOfContentsZh?: string[];
  authorBio: AuthorBio[];
  hasSampleChapter: boolean;
  coverTone: "white" | "light" | "medium";
  coverImage?: string;
  // Only real, published titles should expose Highwire citation_* tags to
  // Google Scholar. Placeholder/demo titles must not, so we don't surface
  // fabricated authors, institutions, or DOIs to a scholarly crawler.
  citationEligible?: boolean;
  license: "All Rights Reserved" | "CC BY-NC-ND 4.0" | "Restricted — Not for Sale";
}

export const books: Book[] = [
  {
    slug: "education-policy-digital-age",
    title: "Education Policy in the Digital Age",
    subtitle:
      "Governance, Access, and Equity in Networked Learning Environments",
    authors: ["Elena Richter"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2024,
    isbn: "978-3-987650-01-3",
    eisbn: "978-3-987650-01-0",
    doi: "10.47892/psb.2024.001",
    language: "English",
    pages: 312,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Education", "Digital Policy", "Educational Technology"],
    bookType: "Monograph",
    status: "Published",
    abstract:
      "This monograph examines the intersection of education policy and digital transformation across national and regional governance systems. Drawing on comparative analysis from fifteen countries, Elena Richter argues that structural inequities in digital access are both reflected in and reproduced by existing policy frameworks, and that meaningful reform requires rethinking the foundational premises of educational governance in the networked era. The book offers a rigorous theoretical framework alongside empirical case studies from Europe, East Asia, and the Global South.",
    abstractZh:
      "本專著探討教育政策與數位轉型在國家及區域治理體系中的交會。艾琳娜．里希特透過對十五個國家的比較分析指出，數位近用上的結構性不平等既反映於既有政策框架之中，也被其不斷再生產；而真正有意義的改革，必須重新思考網絡時代教育治理的根本前提。本書提供嚴謹的理論框架，並輔以來自歐洲、東亞與全球南方的實證案例研究。",
    tableOfContents: [
      "Preface",
      "1. Introduction: Policy at the Threshold",
      "2. Mapping Digital Governance in Education",
      "3. Access, Equity, and the Infrastructure Problem",
      "4. Curriculum, Standardisation, and the Digital Divide",
      "5. Teacher Agency in Digitally Governed Schools",
      "6. Comparative Case Studies: Fifteen National Frameworks",
      "7. Toward a Critical Policy Agenda",
      "Bibliography",
      "Index",
    ],
    tableOfContentsZh: [
      "序言",
      "第一章　導論：政策的門檻時刻",
      "第二章　教育中的數位治理圖景",
      "第三章　近用、公平與基礎設施問題",
      "第四章　課程、標準化與數位落差",
      "第五章　數位治理學校中的教師能動性",
      "第六章　比較案例研究：十五國框架",
      "第七章　邁向批判性政策議程",
      "參考書目",
      "索引",
    ],
    authorBio: [
      {
        name: "Elena Richter",
        bio: "Dr. Elena Richter is an independent researcher specialising in education governance and digital policy. She holds a doctorate in Education from Westlake International University and has contributed to policy consultations with the International Education Research Consortium and the European Education Policy Forum. Her previous work has appeared in Comparative Education Policy Review and the International Journal of Educational Governance.",
        bioZh:
          "艾琳娜．里希特博士為獨立研究者，專長於教育治理與數位政策研究。她於西湖國際大學取得教育學博士學位，並曾參與國際教育研究聯盟與歐洲教育政策論壇的政策諮詢工作。其著作曾刊載於《比較教育政策評論》與《國際教育治理期刊》。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "white",
    license: "All Rights Reserved",
  },
  {
    slug: "global-society-governance-asia-pacific",
    title: "Global Society and Governance",
    subtitle: "Perspectives from the Asia-Pacific",
    authors: [],
    editors: ["James T. Chen", "Mei Lin Tanaka"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2024,
    isbn: "978-3-987650-02-0",
    eisbn: "978-3-987650-02-7",
    doi: "10.47892/psb.2024.002",
    language: "English",
    pages: 428,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: [
      "Global Studies",
      "Political Science",
      "International Relations",
    ],
    bookType: "Edited Volume",
    status: "Published",
    abstract:
      "This edited volume brings together eighteen scholars from across the Asia-Pacific region to examine evolving questions of governance, sovereignty, and social change in a period of profound geopolitical reconfiguration. The contributors interrogate the limits of existing global governance frameworks, explore emerging regional architectures, and assess the implications of shifting power dynamics for civil society, international law, and human rights. The volume makes a distinctive contribution by foregrounding Asia-Pacific voices and frameworks often marginalised in Euro-Atlantic scholarship.",
    abstractZh:
      "本文集匯集了來自亞太地區十八位學者的研究成果，探討在地緣政治深刻重組時期，治理、主權與社會變遷所面臨的演變議題。各篇論文檢視現行全球治理框架的侷限、探索新興的區域架構，並評估權力格局變化對公民社會、國際法與人權的影響。本書的獨特貢獻在於凸顯常被歐美學界邊緣化的亞太觀點與分析框架。",
    tableOfContents: [
      "Introduction: Rethinking Global Society from the Asia-Pacific",
      "Part I: Governance Architectures in Transition",
      "1. Multilateralism under Pressure: The View from Southeast Asia",
      "2. China, ASEAN, and the New Regional Order",
      "3. Pacific Island States and the Climate Governance Deficit",
      "Part II: Society, Identity, and Rights",
      "4. Civil Society Resilience in Contested Democracies",
      "5. Gender, Citizenship, and Social Policy Reform",
      "6. Minority Rights and Constitutional Frameworks",
      "Part III: Economy, Technology, and Development",
      "7. Platform Economies and Labour in the Global South",
      "8. Digital Infrastructure and Developmental States",
      "Conclusion: Toward an Asia-Pacific Research Agenda",
      "Notes on Contributors",
      "Index",
    ],
    tableOfContentsZh: [
      "導論：從亞太地區重新思考全球社會",
      "第一部分：轉型中的治理架構",
      "第一章　壓力下的多邊主義：東南亞的視角",
      "第二章　中國、東盟與新區域秩序",
      "第三章　太平洋島國與氣候治理缺口",
      "第二部分：社會、身份認同與權利",
      "第四章　爭議民主中的公民社會韌性",
      "第五章　性別、公民身份與社會政策改革",
      "第六章　少數群體權利與憲政框架",
      "第三部分：經濟、科技與發展",
      "第七章　全球南方的平台經濟與勞動",
      "第八章　數位基礎設施與發展型國家",
      "結論：邁向亞太研究議程",
      "作者簡介",
      "索引",
    ],
    authorBio: [
      {
        name: "James T. Chen",
        bio: "Prof. James T. Chen is Professor of International Studies at Meridian University. He has published extensively on regional governance and Asian political economy.",
        bioZh: "陳姓教授（James T. Chen）為子午大學國際研究教授，於區域治理與亞洲政治經濟領域發表大量著作。",
      },
      {
        name: "Mei Lin Tanaka",
        bio: "Dr. Mei Lin Tanaka is Associate Professor of Global Studies at Nishimura University, Tokyo. Her research addresses gender, governance, and transnational civil society in the Asia-Pacific.",
        bioZh: "田中美玲博士為東京西村大學全球研究副教授，研究專長為性別、治理與亞太地區的跨國公民社會。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "light",
    license: "All Rights Reserved",
  },
  {
    slug: "artificial-intelligence-higher-education",
    title: "Artificial Intelligence in Higher Education",
    subtitle: "Challenges, Opportunities, and Institutional Responses",
    authors: ["PSG Research Unit"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2025,
    isbn: "978-3-987650-03-7",
    eisbn: "978-3-987650-03-4",
    language: "English",
    pages: 184,
    format: ["PDF eBook", "Open Access"],
    subjectArea: [
      "Artificial Intelligence",
      "Higher Education",
      "Educational Technology",
    ],
    bookType: "Research Report",
    status: "Published",
    abstract:
      "This research report synthesises findings from a two-year investigation into the institutional adoption of artificial intelligence technologies across forty higher education institutions in twelve countries. The report examines pedagogical implications, academic integrity frameworks, staff preparedness, and the governance challenges posed by large language models and generative AI tools. It concludes with a set of evidence-based recommendations for institutional policymakers, academic staff, and national education authorities.",
    abstractZh:
      "本研究報告彙整了一項為期兩年、涵蓋十二個國家四十所高等教育機構之人工智能技術採用情況的調查成果。報告檢視其教學意涵、學術誠信框架、教職員的準備程度，以及大型語言模型與生成式人工智能工具所帶來的治理挑戰，並於結尾提出一系列以實證為基礎的建議，供機構決策者、教職人員與各國教育主管機關參考。",
    tableOfContents: [
      "Executive Summary",
      "1. Background and Research Design",
      "2. AI Adoption Patterns Across Institutional Types",
      "3. Pedagogical Implications and Curriculum Integration",
      "4. Academic Integrity in the Age of Generative AI",
      "5. Staff Perspectives and Institutional Support",
      "6. Governance Frameworks and Policy Responses",
      "7. Conclusions and Recommendations",
      "Appendix A: Participating Institutions",
      "Appendix B: Research Methodology",
      "References",
    ],
    tableOfContentsZh: [
      "執行摘要",
      "第一章　背景與研究設計",
      "第二章　不同機構類型的人工智能採用模式",
      "第三章　教學意涵與課程整合",
      "第四章　生成式人工智能時代的學術誠信",
      "第五章　教職員觀點與機構支援",
      "第六章　治理框架與政策回應",
      "第七章　結論與建議",
      "附錄甲：參與機構",
      "附錄乙：研究方法",
      "參考文獻",
    ],
    authorBio: [
      {
        name: "PSG Research Unit",
        bio: "The PSG Research Unit conducts interdisciplinary research on education, technology, and public policy under the auspices of Panorama Scholarly Group.",
        bioZh: "PSG 研究組隸屬於 Panorama Scholarly Group，從事教育、科技與公共政策相關的跨學科研究。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "white",
    license: "CC BY-NC-ND 4.0",
  },
  {
    slug: "public-administration-reform-post-industrial",
    title: "Public Administration Reform in Post-Industrial Societies",
    subtitle: "Institutional Change, Legitimacy, and Democratic Accountability",
    authors: ["Klaus Hoffmann"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2025,
    isbn: "978-3-987650-04-4",
    language: "English",
    pages: 356,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: [
      "Public Administration",
      "Public Policy",
      "Political Science",
    ],
    bookType: "Monograph",
    status: "Forthcoming",
    abstract:
      "Drawing on three decades of administrative reform across Western Europe and North America, Klaus Hoffmann offers a systematic comparative analysis of how post-industrial states have attempted to restructure public administration in response to fiscal pressure, technological change, and declining public trust. The monograph situates administrative reform within broader narratives of state transformation and challenges both managerialist and neo-institutionalist accounts with an original framework centred on democratic legitimacy.",
    abstractZh:
      "克勞斯．霍夫曼綜覽西歐與北美三十年來的行政改革歷程，對後工業國家如何因應財政壓力、科技變遷與公眾信任下滑而嘗試重構公共行政，提出系統性的比較分析。本書將行政改革置於國家轉型的宏觀敘事之中，並以聚焦民主正當性的原創框架，同時挑戰管理主義與新制度主義兩種既有論述。",
    tableOfContents: [
      "Preface",
      "1. The Reformation Imperative: Why States Reform Administration",
      "2. Theoretical Frameworks: From NPM to Post-NPM",
      "3. Fiscal Pressure and Structural Adjustment",
      "4. Digitalisation and the Reconfiguration of Public Services",
      "5. Democratic Legitimacy and Administrative Change",
      "6. Case Studies: Germany, France, the United Kingdom, Canada",
      "7. Cross-National Comparisons and Generalisable Findings",
      "8. Conclusions: A Framework for Reform Assessment",
      "Bibliography",
      "Index",
    ],
    tableOfContentsZh: [
      "序言",
      "第一章　改革的必要性：國家為何進行行政改革",
      "第二章　理論框架：從新公共管理到後新公共管理",
      "第三章　財政壓力與結構調整",
      "第四章　數位化與公共服務的重構",
      "第五章　民主正當性與行政變革",
      "第六章　案例研究：德國、法國、英國、加拿大",
      "第七章　跨國比較與可推廣的發現",
      "第八章　結論：改革評估框架",
      "參考書目",
      "索引",
    ],
    authorBio: [
      {
        name: "Klaus Hoffmann",
        bio: "Prof. Klaus Hoffmann is Professor of Public Administration at the Leinburg School of Governance. He is the author of The Administrative State in Transition: A Comparative Analysis (2017) and has advised public sector reform commissions in several European governments.",
        bioZh:
          "克勞斯．霍夫曼教授為萊恩堡治理學院公共行政學教授，著有《轉型中的行政國家：一項比較分析》（2017年），並曾為多個歐洲國家政府的公部門改革委員會提供諮詢。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
    license: "All Rights Reserved",
  },
  {
    slug: "media-democracy-digital-public-sphere",
    title: "Media, Democracy and the Digital Public Sphere",
    subtitle: "Political Communication in the Age of Social Media",
    authors: [],
    editors: ["Yuki Tanigawa", "Priya Nair"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2024,
    isbn: "978-3-987650-05-1",
    eisbn: "978-3-987650-05-8",
    doi: "10.47892/psb.2024.005",
    language: "English",
    pages: 382,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Media Studies", "Political Communication", "Digital Society"],
    bookType: "Edited Volume",
    status: "Published",
    abstract:
      "This edited volume brings together leading scholars to examine how digital media are reshaping democratic practice, public discourse, and political participation across diverse national contexts. The contributors investigate platform governance, misinformation ecosystems, digital activism, and the reconfiguration of the public sphere under conditions of algorithmic mediation. Drawing on empirical research from Europe, Asia, and the Americas, the volume offers a comparative and theoretically grounded account of media's evolving role in contemporary democratic life.",
    abstractZh:
      "本文集匯聚多位頂尖學者，探討數位媒體如何在不同國家脈絡中重塑民主實踐、公共論述與政治參與。各篇論文探討平台治理、假訊息生態系統、數位行動主義，以及公共領域在演算法中介條件下的重構。本書結合來自歐洲、亞洲與美洲的實證研究，對媒體在當代民主生活中不斷演變的角色，提出兼具比較視野與理論基礎的論述。",
    tableOfContents: [
      "Introduction: Democracy in the Age of Digital Media",
      "Part I: Platforms, Power, and Public Discourse",
      "1. Algorithmic Publics and the Fragmentation of Shared Reality",
      "2. Platform Governance and Democratic Accountability",
      "3. Misinformation, Trust, and the Epistemics of Digital News",
      "Part II: Political Communication and Participation",
      "4. Digital Activism and Networked Social Movements",
      "5. Electoral Communication in the Age of Social Media",
      "6. Populism, Affect, and the Emotional Logics of Online Politics",
      "Part III: Comparative Perspectives",
      "7. The Digital Public Sphere in East Asia",
      "8. Platform Capitalism and Democratic Erosion in the Global South",
      "Conclusion: Rethinking Media Theory for the Digital Age",
      "Notes on Contributors",
      "Index",
    ],
    tableOfContentsZh: [
      "導論：數位媒體時代的民主",
      "第一部分：平台、權力與公共論述",
      "第一章　演算法公眾與共同現實的碎片化",
      "第二章　平台治理與民主課責",
      "第三章　假訊息、信任與數位新聞的知識論",
      "第二部分：政治傳播與參與",
      "第四章　數位行動主義與網絡化社會運動",
      "第五章　社群媒體時代的選舉傳播",
      "第六章　民粹主義、情感與網絡政治的情緒邏輯",
      "第三部分：比較視角",
      "第七章　東亞的數位公共領域",
      "第八章　全球南方的平台資本主義與民主侵蝕",
      "結論：為數位時代重新思考媒體理論",
      "作者簡介",
      "索引",
    ],
    authorBio: [
      {
        name: "Yuki Tanigawa",
        bio: "Dr. Yuki Tanigawa is Associate Professor of Media Studies at Ashford Pacific University. Her research examines platform politics, digital media, and democratic governance in East Asian contexts.",
        bioZh: "谷川由紀博士為阿什福德太平洋大學媒體研究副教授，研究聚焦於東亞脈絡下的平台政治、數位媒體與民主治理。",
      },
      {
        name: "Priya Nair",
        bio: "Dr. Priya Nair is Senior Lecturer in Political Communication at the Kelbourne Institute for Global Studies. She specialises in misinformation, digital activism, and media policy.",
        bioZh: "普里雅．奈爾博士為凱爾伯恩全球研究學院政治傳播高級講師，專長為假訊息、數位行動主義與媒體政策。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "white",
    license: "All Rights Reserved",
  },
  {
    slug: "urban-governance-smart-cities",
    title: "Urban Governance in Transition",
    subtitle: "Smart Cities, Public Administration, and Democratic Accountability",
    authors: ["Marco Ferretti"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2026,
    isbn: "978-3-987650-06-8",
    language: "English",
    pages: 298,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Urban Studies", "Public Administration", "Smart Cities"],
    bookType: "Monograph",
    status: "Forthcoming",
    abstract:
      "Drawing on fieldwork conducted across twelve metropolitan regions in Europe and East Asia, Marco Ferretti examines how the adoption of smart city technologies is reshaping the governance structures and democratic accountability of urban administrations. The monograph argues that smart urbanism is not merely a technological project but a political one, and that its implications for civic participation, data sovereignty, and administrative legitimacy demand sustained scholarly and policy attention.",
    abstractZh:
      "馬可．費雷蒂根據在歐洲與東亞十二個都會區進行的實地調查，探討智慧城市技術的採用如何重塑城市行政的治理結構與民主課責。本書主張智慧城市主義並非單純的技術專案，而是一項政治工程，其對公民參與、資料主權與行政正當性所帶來的影響，值得學界與政策界持續關注。",
    tableOfContents: [
      "Preface",
      "1. Introduction: The Governance Turn in Smart Urbanism",
      "2. Smart City Technologies and Administrative Transformation",
      "3. Data, Surveillance, and the New Urban Bureaucracy",
      "4. Democratic Accountability in Digitally Governed Cities",
      "5. Civic Participation in the Platform City",
      "6. Comparative Analysis: Twelve Metropolitan Cases",
      "7. Conclusions: Toward a Critical Governance Framework",
      "Bibliography",
      "Index",
    ],
    tableOfContentsZh: [
      "序言",
      "第一章　導論：智慧城市主義中的治理轉向",
      "第二章　智慧城市技術與行政轉型",
      "第三章　資料、監控與新型城市官僚體制",
      "第四章　數位治理城市中的民主課責",
      "第五章　平台城市中的公民參與",
      "第六章　比較分析：十二個都會案例",
      "第七章　結論：邁向批判性治理框架",
      "參考書目",
      "索引",
    ],
    authorBio: [
      {
        name: "Marco Ferretti",
        bio: "Dr. Marco Ferretti is Assistant Professor of Urban Politics at the Rhenish Academy of Social Sciences. His research focuses on digital governance, urban policy, and public sector innovation.",
        bioZh: "馬可．費雷蒂博士為萊茵社會科學院城市政治學助理教授，研究聚焦於數位治理、城市政策與公部門創新。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
    license: "All Rights Reserved",
  },
  {
    slug: "digital-economy-social-governance-cn",
    title: "数字经济与社会治理",
    subtitle: "平台、数据与制度变革",
    authors: ["方晓磊"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2024,
    isbn: "978-3-987650-07-5",
    eisbn: "978-3-987650-07-2",
    doi: "10.47892/psb.2024.007",
    language: "Chinese (Simplified)",
    pages: 334,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Digital Economy", "Social Governance", "Platform Studies"],
    bookType: "Monograph",
    status: "Published",
    abstract:
      "This monograph offers a systematic examination of the profound transformation of social governance models against the backdrop of the digital economy's rise. Organised around three thematic lines — platform power, data governance, and institutional innovation — the author provides an in-depth analysis of digital economy governance practices in China and the Asia-Pacific region. Drawing on comparative policy research, the book explores the pathways and mechanisms through which state governance capacity is being reconstructed in the digital age. It is recommended for scholars and graduate students in public administration, political science, and digital society studies.",
    abstractZh:
      "本書系統探討在數位經濟崛起背景下，社會治理模式所經歷的深刻轉型。全書圍繞平台權力、資料治理與制度創新三條主軸，深入分析中國及亞太地區的數位經濟治理實踐。作者結合比較政策研究，探討國家治理能力在數位時代重構的路徑與機制，適合公共行政、政治學及數位社會研究領域之學者與研究生參考。",
    tableOfContents: [
      "Preface",
      "Chapter 1  The Rise of the Digital Economy and the Challenges of Governance",
      "Chapter 2  Platform Economy and Market Regulation",
      "Chapter 3  Data Ownership, Data Security, and Digital Sovereignty",
      "Chapter 4  Labour Relations in the Digital Economy Era",
      "Chapter 5  E-Government and the Digital Transformation of Public Services",
      "Chapter 6  Digital Governance Institutions in Comparative Perspective",
      "Chapter 7  Conclusion: State Governance Capacity in the Digital Age",
      "Bibliography",
      "Index",
    ],
    tableOfContentsZh: [
      "序言",
      "第一章　數位經濟的崛起與治理挑戰",
      "第二章　平台經濟與市場規範",
      "第三章　資料所有權、資料安全與數位主權",
      "第四章　數位經濟時代的勞動關係",
      "第五章　電子政務與公共服務的數位轉型",
      "第六章　比較視野下的數位治理制度",
      "第七章　結論：數位時代的國家治理能力",
      "參考書目",
      "索引",
    ],
    authorBio: [
      {
        name: "方晓磊",
        bio: "Fang Xiaolei, PhD, is Associate Professor in the School of Public Administration at Dongling International Academic University. His research focuses on digital economy policy, platform governance, and comparative public administration. He has published in several international journals in public policy and Asian studies.",
        bioZh:
          "方曉磊博士為東嶺國際學術大學公共行政學院副教授，研究專長為數位經濟政策、平台治理與比較公共行政，其研究成果曾發表於多份公共政策與亞洲研究國際期刊。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "light",
    license: "All Rights Reserved",
  },
  {
    slug: "higher-education-internationalisation-cn",
    title: "高等教育国际化研究",
    subtitle: "理论、政策与实践",
    authors: [],
    editors: ["陈明慧", "李建平"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2025,
    isbn: "978-3-987650-08-2",
    eisbn: "978-3-987650-08-9",
    language: "Chinese (Simplified)",
    pages: 410,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Higher Education", "Internationalisation", "Comparative Education"],
    bookType: "Edited Volume",
    status: "Published",
    abstract:
      "This edited volume brings together more than twenty scholars from the Asia-Pacific, Europe, and North America to provide a systematic survey of theoretical frameworks, policy developments, and practical approaches to higher education internationalisation. Contributors address core themes including international student mobility, curriculum internationalisation, academic collaboration, and quality assurance, drawing on case studies from diverse national and regional contexts to illuminate the multiple dimensions of internationalisation and its far-reaching implications for institutional governance.",
    abstractZh:
      "本文集匯集了來自亞太、歐洲與北美二十餘位學者的研究成果，系統性地梳理高等教育國際化的理論框架、政策發展與實務作法。各篇論文探討國際學生流動、課程國際化、學術合作與品質保證等核心議題，並透過不同國家與區域的案例研究，闡明國際化的多重面向及其對機構治理的深遠影響。",
    tableOfContents: [
      "Editors' Preface",
      "Part I  Theoretical Perspectives",
      "Chapter 1  Higher Education Internationalisation: Conceptual Evolution and Theoretical Frameworks",
      "Chapter 2  Transnational Education and the Marketisation of Higher Education",
      "Part II  Policy Analysis",
      "Chapter 3  Comparative Higher Education Internationalisation Policy in the Asia-Pacific",
      "Chapter 4  The European Higher Education Area and the Bologna Process",
      "Chapter 5  The Evolution of Internationalisation Strategies in Chinese Universities",
      "Part III  Case Studies",
      "Chapter 6  International Student Integration and Campus Multiculturalism",
      "Chapter 7  Curriculum Internationalisation and Language of Instruction Policy",
      "Chapter 8  Mechanisms and Challenges of International Academic Collaboration",
      "Afterword",
      "Notes on Contributors",
      "Index",
    ],
    tableOfContentsZh: [
      "編者序",
      "第一部分　理論視角",
      "第一章　高等教育國際化：概念演變與理論框架",
      "第二章　跨國教育與高等教育的市場化",
      "第二部分　政策分析",
      "第三章　亞太地區高等教育國際化政策比較",
      "第四章　歐洲高等教育區與波隆那進程",
      "第五章　中國高校國際化策略的演變",
      "第三部分　案例研究",
      "第六章　國際學生融入與校園多元文化",
      "第七章　課程國際化與授課語言政策",
      "第八章　國際學術合作的機制與挑戰",
      "後記",
      "作者簡介",
      "索引",
    ],
    authorBio: [
      {
        name: "陈明慧",
        bio: "Chen Minghui, PhD, is Professor in the Faculty of Education at Beian International University. Her research addresses comparative higher education policy and educational governance.",
        bioZh: "陳明慧博士為北岸國際大學教育學院教授，研究專長為比較高等教育政策與教育治理。",
      },
      {
        name: "李建平",
        bio: "Li Jianping, PhD, is Associate Researcher at the East Alliance Academic Research Institute. He specialises in higher education internationalisation and international student policy.",
        bioZh: "李建平博士為東盟學術研究院副研究員，專長為高等教育國際化與國際學生政策。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "white",
    license: "All Rights Reserved",
  },
  {
    slug: "ai-governance-ethics-law-cn",
    title: "人工智能治理",
    subtitle: "伦理、法律与制度框架",
    authors: ["赵思远"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2026,
    isbn: "978-3-987650-09-9",
    language: "Chinese (Simplified)",
    pages: 288,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Artificial Intelligence", "Law and Governance", "Science and Technology Policy"],
    bookType: "Monograph",
    status: "Forthcoming",
    abstract:
      "This monograph offers a systematic analysis of artificial intelligence governance from the interrelated dimensions of ethics, law, and institutional design. The author surveys AI regulatory frameworks and legislative developments across major jurisdictions, and provides an in-depth examination of core issues including algorithmic accountability, automated decision-making, data privacy, and AI safety. The book is an important reference for public policymakers, legal scholars, and researchers working in science and technology governance.",
    abstractZh:
      "本書從倫理、法律與制度設計三個相互關聯的面向，系統分析人工智能治理議題。作者綜覽各主要法域的人工智能監管框架與立法發展，並深入探討演算法課責、自動化決策、資料隱私與人工智能安全等核心問題。本書為公共政策制定者、法學學者及科技治理研究人員提供重要參考。",
    tableOfContents: [
      "Preface",
      "Chapter 1  AI Governance: Framing the Problem",
      "Chapter 2  Comparative AI Regulatory Frameworks across Major Jurisdictions",
      "Chapter 3  Algorithmic Accountability and Transparency Mechanisms",
      "Chapter 4  Automated Decision-Making and Administrative Legal Liability",
      "Chapter 5  Data Governance and Personal Information Protection",
      "Chapter 6  Content Safety Regulation of Generative AI",
      "Chapter 7  Pathways toward International AI Governance Coordination",
      "Chapter 8  Conclusions and Policy Recommendations",
      "Bibliography",
      "Index",
    ],
    tableOfContentsZh: [
      "序言",
      "第一章　人工智能治理：問題的界定",
      "第二章　主要法域人工智能監管框架比較",
      "第三章　演算法課責與透明機制",
      "第四章　自動化決策與行政法律責任",
      "第五章　資料治理與個人資訊保護",
      "第六章　生成式人工智能的內容安全規範",
      "第七章　邁向國際人工智能治理協調的路徑",
      "第八章　結論與政策建議",
      "參考書目",
      "索引",
    ],
    authorBio: [
      {
        name: "赵思远",
        bio: "Zhao Siyuan, PhD, is Researcher at the Centre for Technology Law and Policy at Xian School of Politics and Law. His research focuses on AI law, data governance, and science and technology regulatory policy.",
        bioZh: "趙思遠博士為西安政法學院科技法律與政策研究中心研究員，研究專長為人工智能法、資料治理與科技監管政策。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
    license: "All Rights Reserved",
  },
  {
    slug: "communication-democracy-digital-cn",
    title: "传播、民主与数字公共领域",
    subtitle: "理论前沿与批判视角",
    authors: [],
    editors: ["林佳颖", "吴浩然"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2026,
    isbn: "978-3-987650-10-5",
    language: "Chinese (Simplified)",
    pages: 356,
    format: ["Hardcover", "PDF eBook"],
    subjectArea: ["Communication Studies", "Democratic Theory", "Digital Media"],
    bookType: "Edited Volume",
    status: "Forthcoming",
    abstract:
      "This edited volume examines the theoretical evolution and contemporary challenges of the digital public sphere from the intersecting perspectives of communication studies and political science. Contributions address core themes including platform mediatisation, opinion formation, digital populism, and networked civic participation, offering a critical theoretical assessment of the deep impact of digital communication on democratic politics. The volume is intended for researchers and advanced students in communication studies, political science, and sociology.",
    abstractZh:
      "本文集從傳播學與政治學交叉視角，探討數位公共領域的理論演變與當代挑戰。各篇論文涵蓋平台媒介化、輿論形成、數位民粹主義與網絡公民參與等核心議題，對數位傳播如何深刻影響民主政治提出批判性的理論評估。本書適合傳播學、政治學與社會學領域之研究人員及高年級學生參考。",
    tableOfContents: [
      "Editors' Introduction",
      "Part I  Theoretical Frameworks",
      "Chapter 1  The Digital Reconstruction of Habermasian Public Sphere Theory",
      "Chapter 2  The Contemporary Turn in Critical Communication Studies",
      "Part II  Platforms, Algorithms, and Public Discourse",
      "Chapter 3  Platform Mediatisation and the Reconfiguration of Discursive Power",
      "Chapter 4  Algorithmic Recommendation and Opinion Polarisation",
      "Chapter 5  The Communicative Logic of Digital Populism",
      "Part III  Participation, Mobilisation, and Democratic Practice",
      "Chapter 6  The Limits and Potential of Networked Civic Participation",
      "Chapter 7  Digital Journalism and the Crisis of Public Trust",
      "Chapter 8  Cross-Platform Information Environments and Epistemic Communities",
      "Afterword",
      "Notes on Contributors",
      "Index",
    ],
    tableOfContentsZh: [
      "編者導言",
      "第一部分　理論框架",
      "第一章　哈伯瑪斯公共領域理論的數位重構",
      "第二章　批判傳播研究的當代轉向",
      "第二部分　平台、演算法與公共論述",
      "第三章　平台媒介化與論述權力的重構",
      "第四章　演算法推薦與輿論極化",
      "第五章　數位民粹主義的傳播邏輯",
      "第三部分　參與、動員與民主實踐",
      "第六章　網絡公民參與的侷限與潛能",
      "第七章　數位新聞業與公眾信任危機",
      "第八章　跨平台資訊環境與知識社群",
      "後記",
      "作者簡介",
      "索引",
    ],
    authorBio: [
      {
        name: "林佳颖",
        bio: "Lin Jiaying, PhD, is Associate Professor at the Nanyang Institute of Media and Political Studies. Her research centres on digital communication, media politics, and public opinion.",
        bioZh: "林佳穎博士為南洋媒體與政治研究學院副教授，研究聚焦於數位傳播、媒體政治與公眾輿論。",
      },
      {
        name: "吴浩然",
        bio: "Wu Haoran, PhD, is Researcher at the Centre for Communication and Democracy Research, Hengchuan Institute for Social Sciences. He specialises in networked public sphere and digital democracy.",
        bioZh: "吳浩然博士為恆川社會科學院傳播與民主研究中心研究員，專長為網絡公共領域與數位民主。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "light",
    license: "All Rights Reserved",
  },
  {
    slug: "comparative-education-policy-cn",
    title: "比较教育政策",
    subtitle: "亚太地区基础教育改革的多维分析",
    authors: ["PSG Research Centre"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2026,
    isbn: "978-3-987650-11-2",
    language: "Chinese (Simplified)",
    pages: 176,
    format: ["PDF eBook", "Open Access"],
    subjectArea: ["Comparative Education", "Primary and Secondary Education Policy", "Asia-Pacific Studies"],
    bookType: "Research Report",
    status: "Forthcoming",
    abstract:
      "This research report presents the findings of a comparative study by the PSG Research Centre examining primary and secondary education policy across eight countries and regions in the Asia-Pacific. The report focuses on core policy domains including curriculum reform, teacher professional development, educational equity, and the integration of digital technologies into classrooms. It maps common trends and divergent pathways in policy development across the region and concludes with forward-looking policy recommendations.",
    abstractZh:
      "本研究報告呈現 PSG 研究中心一項比較研究的成果，檢視亞太地區八個國家與地區的中小學教育政策。報告聚焦於課程改革、教師專業發展、教育公平及課堂數位科技整合等核心政策領域，梳理該地區政策發展的共同趨勢與分歧路徑，並於結尾提出前瞻性的政策建議。",
    tableOfContents: [
      "Executive Summary",
      "Chapter 1  Background and Methodology",
      "Chapter 2  Regional Comparison of Curriculum Reform",
      "Chapter 3  Teacher Professional Development Policy",
      "Chapter 4  Educational Equity: Equal Opportunity and Resource Allocation",
      "Chapter 5  Technology Integration and Digital Education Policy",
      "Chapter 6  Conclusions and Policy Recommendations",
      "Appendix: Participating Countries and Regions",
      "Bibliography",
    ],
    tableOfContentsZh: [
      "執行摘要",
      "第一章　背景與研究方法",
      "第二章　課程改革的區域比較",
      "第三章　教師專業發展政策",
      "第四章　教育公平：機會平等與資源分配",
      "第五章　科技整合與數位教育政策",
      "第六章　結論與政策建議",
      "附錄：參與國家與地區",
      "參考書目",
    ],
    authorBio: [
      {
        name: "PSG Research Centre",
        bio: "The PSG Research Centre is an interdisciplinary research unit under Panorama Scholarly Group, conducting research at the intersection of education, technology, and public policy.",
        bioZh: "PSG 研究中心為 Panorama Scholarly Group 旗下的跨學科研究單位，從事教育、科技與公共政策交叉領域的研究。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "white",
    license: "CC BY-NC-ND 4.0",
  },
  {
    slug: "chan-buddhism-sinicization-collected-essays-cn",
    title: "禅宗与佛教中国化论集",
    subtitle: "少林七十字辈、寺院传承与佛典翻译研究（2016—2026）",
    authors: ["释延晗"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2026,
    isbn: "978-988-72442-0-2",
    eisbn: "978-988-72442-1-9",
    language: "Chinese (Simplified)",
    pages: 172,
    format: ["Paperback", "PDF eBook"],
    subjectArea: ["Chan Buddhism", "Buddhist Studies", "Sinicization of Buddhism"],
    bookType: "Monograph",
    status: "Published",
    abstract:
      "《禅宗与佛教中国化论集》是释延晗法师关于禅宗与佛教中国化研究文章的结集，收录了2016年至2026年间与禅宗及佛教中国化相关的文章共计十六余篇。书中论述涉及禅宗与佛教中国化的诸多方面，包括少林七十字辈与佛教的中国化、苏州重元寺与佛教中国化、佛教经典翻译与佛教中国化等内容的探讨，对当代禅宗与佛教中国化研究而言有一定的价值。",
    abstractZh:
      "《禪宗與佛教中國化論集》是釋延晗法師關於禪宗與佛教中國化研究文章的結集，收錄了2016年至2026年間與禪宗及佛教中國化相關的文章共計十六餘篇。書中論述涉及禪宗與佛教中國化的諸多方面，包括少林七十字輩與佛教的中國化、蘇州重元寺與佛教中國化、佛教經典翻譯與佛教中國化等內容的探討，對當代禪宗與佛教中國化研究而言有一定的價值。",
    tableOfContents: [
      "序（黄兴旺 / 如闻）",
      "从“裕公碑”考察福裕行迹",
      "元代政教关系视域下“佛道之争”的起因",
      "雪庭福裕与佛道之争",
      "雪庭福裕的家国情怀",
      "雪庭福裕时代的佛教政策与禅宗状况",
      "浅析雪庭福裕“菩提心”到“忠义心”",
      "雪庭福裕的感恩观",
      "“少林七十字辈”与佛教的中国化",
      "法显西行对佛教的影响及其现代意义",
      "法眼宗“圆融”及其现代价值",
      "元代佛教政策视角中《敕修百丈清规》研究",
      "元代高峰原妙禅学思想的守正创新",
      "从“禅净”融合看中峰明本的守正创新",
      "佛教典籍翻译与佛教中国化",
      "苏州重元寺与佛教的中国化",
      "《景德传灯录》中石头希迁禅学的守正创新",
      "苏州圣堂寺与佛教的中国化",
      "禅宗“圆融”及其现代价值",
      "后记",
    ],
    tableOfContentsZh: [
      "序（黃興旺 / 如聞）",
      "從「裕公碑」考察福裕行跡",
      "元代政教關係視域下「佛道之爭」的起因",
      "雪庭福裕與佛道之爭",
      "雪庭福裕的家國情懷",
      "雪庭福裕時代的佛教政策與禪宗狀況",
      "淺析雪庭福裕「菩提心」到「忠義心」",
      "雪庭福裕的感恩觀",
      "「少林七十字輩」與佛教的中國化",
      "法顯西行對佛教的影響及其現代意義",
      "法眼宗「圓融」及其現代價值",
      "元代佛教政策視角中《敕修百丈清規》研究",
      "元代高峰原妙禪學思想的守正創新",
      "從「禪淨」融合看中峰明本的守正創新",
      "佛教典籍翻譯與佛教中國化",
      "蘇州重元寺與佛教的中國化",
      "《景德傳燈錄》中石頭希遷禪學的守正創新",
      "蘇州聖堂寺與佛教的中國化",
      "禪宗「圓融」及其現代價值",
      "後記",
    ],
    authorBio: [
      {
        name: "释延晗",
        bio: "释延晗，河南洛阳人，河南科技大学与戒幢佛学研究所研究生；祝发于嵩山少林寺；学戒于太姥山平兴寺；具戒于南海禅寺天中堂；现为江苏佛学院寒山学院讲师；主要研究方向为东亚禅宗文献与思想。",
        bioZh:
          "釋延晗，河南洛陽人，河南科技大學與戒幢佛學研究所研究生；祝髮於嵩山少林寺；學戒於太姥山平興寺；具戒於南海禪寺天中堂；現為江蘇佛學院寒山學院講師；主要研究方向為東亞禪宗文獻與思想。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "light",
    coverImage: "/covers/CBSB.jpg",
    citationEligible: true,
    license: "Restricted — Not for Sale",
  },
];

export function getBookBySlug(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export function getBooksByType(type: BookType | "All" | "Forthcoming"): Book[] {
  if (type === "All") return books;
  if (type === "Forthcoming") return books.filter((b) => b.status === "Forthcoming");
  return books.filter((b) => b.bookType === type);
}

export interface AuthorSummary {
  name: string;
  slug: string;
  bio?: string;
  bioZh?: string;
  books: Book[];
}

// Slugs are kept ASCII-only, even for CJK names — this Next.js version has
// a static-export bug where a raw non-ASCII generateStaticParams() value
// doesn't reliably match back up with the params the page component
// receives at render time, silently producing a notFound() page instead of
// the real one. Encoding non-ASCII characters as \uXXXX code points sidesteps
// it entirely while staying stable and human-traceable.
export function slugifyName(name: string): string {
  const cleaned = name
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, ""); // strip combining accents from Latin names

  return Array.from(cleaned)
    .map((ch) =>
      /[a-z0-9]/.test(ch) ? ch : /[\s._]/.test(ch) ? "-" : `-u${ch.codePointAt(0)!.toString(16)}-`
    )
    .join("")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Author pages are only built from verified, real titles — the same
// citationEligible guard used for Highwire citation_* tags and JSON-LD.
// Publishing a profile page for a sample/placeholder book's fabricated
// author would expose the same credibility risk to search engines.
export function getAllAuthors(): AuthorSummary[] {
  const bySlug = new Map<string, AuthorSummary>();
  for (const book of books) {
    if (!book.citationEligible) continue;
    const names = book.isEdited ? book.editors : book.authors;
    for (const name of names) {
      const slug = slugifyName(name);
      const authorBio = book.authorBio.find((b) => b.name === name);
      const bio = authorBio?.bio;
      const bioZh = authorBio?.bioZh;
      const existing = bySlug.get(slug);
      if (existing) {
        existing.books.push(book);
        if (!existing.bio && bio) existing.bio = bio;
        if (!existing.bioZh && bioZh) existing.bioZh = bioZh;
      } else {
        bySlug.set(slug, { name, slug, bio, bioZh, books: [book] });
      }
    }
  }
  return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getAuthorBySlug(slug: string): AuthorSummary | undefined {
  return getAllAuthors().find((a) => a.slug === slug);
}
