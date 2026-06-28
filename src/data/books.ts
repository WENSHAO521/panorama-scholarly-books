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
}

export interface Book {
  slug: string;
  title: string;
  subtitle?: string;
  authors: string[];
  editors: string[];
  isEdited: boolean;
  publisher: string;
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
  tableOfContents: string[];
  authorBio: AuthorBio[];
  hasSampleChapter: boolean;
  coverTone: "white" | "light" | "medium";
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
    publisher: "Panorama Scholarly Group Ltd",
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
    authorBio: [
      {
        name: "Elena Richter",
        bio: "Dr. Elena Richter is an independent researcher specialising in education governance and digital policy. She holds a doctorate in Education from Westlake International University and has contributed to policy consultations with the International Education Research Consortium and the European Education Policy Forum. Her previous work has appeared in Comparative Education Policy Review and the International Journal of Educational Governance.",
      },
    ],
    hasSampleChapter: true,
    coverTone: "white",
  },
  {
    slug: "global-society-governance-asia-pacific",
    title: "Global Society and Governance",
    subtitle: "Perspectives from the Asia-Pacific",
    authors: [],
    editors: ["James T. Chen", "Mei Lin Tanaka"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Ltd",
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
    authorBio: [
      {
        name: "James T. Chen",
        bio: "Prof. James T. Chen is Professor of International Studies at Meridian University. He has published extensively on regional governance and Asian political economy.",
      },
      {
        name: "Mei Lin Tanaka",
        bio: "Dr. Mei Lin Tanaka is Associate Professor of Global Studies at Nishimura University, Tokyo. Her research addresses gender, governance, and transnational civil society in the Asia-Pacific.",
      },
    ],
    hasSampleChapter: false,
    coverTone: "light",
  },
  {
    slug: "artificial-intelligence-higher-education",
    title: "Artificial Intelligence in Higher Education",
    subtitle: "Challenges, Opportunities, and Institutional Responses",
    authors: ["PSG Research Unit"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Ltd",
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
    authorBio: [
      {
        name: "PSG Research Unit",
        bio: "The PSG Research Unit conducts interdisciplinary research on education, technology, and public policy under the auspices of Panorama Scholarly Group.",
      },
    ],
    hasSampleChapter: true,
    coverTone: "white",
  },
  {
    slug: "public-administration-reform-post-industrial",
    title: "Public Administration Reform in Post-Industrial Societies",
    subtitle: "Institutional Change, Legitimacy, and Democratic Accountability",
    authors: ["Klaus Hoffmann"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Ltd",
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
    authorBio: [
      {
        name: "Klaus Hoffmann",
        bio: "Prof. Klaus Hoffmann is Professor of Public Administration at the Leinburg School of Governance. He is the author of The Administrative State in Transition: A Comparative Analysis (2017) and has advised public sector reform commissions in several European governments.",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
  },
  {
    slug: "media-democracy-digital-public-sphere",
    title: "Media, Democracy and the Digital Public Sphere",
    subtitle: "Political Communication in the Age of Social Media",
    authors: [],
    editors: ["Yuki Tanigawa", "Priya Nair"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Ltd",
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
    authorBio: [
      {
        name: "Yuki Tanigawa",
        bio: "Dr. Yuki Tanigawa is Associate Professor of Media Studies at Ashford Pacific University. Her research examines platform politics, digital media, and democratic governance in East Asian contexts.",
      },
      {
        name: "Priya Nair",
        bio: "Dr. Priya Nair is Senior Lecturer in Political Communication at the Kelbourne Institute for Global Studies. She specialises in misinformation, digital activism, and media policy.",
      },
    ],
    hasSampleChapter: true,
    coverTone: "white",
  },
  {
    slug: "urban-governance-smart-cities",
    title: "Urban Governance in Transition",
    subtitle: "Smart Cities, Public Administration, and Democratic Accountability",
    authors: ["Marco Ferretti"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Ltd",
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
    authorBio: [
      {
        name: "Marco Ferretti",
        bio: "Dr. Marco Ferretti is Assistant Professor of Urban Politics at the Rhenish Academy of Social Sciences. His research focuses on digital governance, urban policy, and public sector innovation.",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
  },
  {
    slug: "digital-economy-social-governance-cn",
    title: "数字经济与社会治理",
    subtitle: "平台、数据与制度变革",
    authors: ["方晓磊"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Ltd",
    publicationYear: 2024,
    isbn: "978-3-987650-07-5",
    eisbn: "978-3-987650-07-2",
    doi: "10.47892/psb.2024.007",
    language: "Chinese (Simplified)",
    pages: 334,
    format: ["精装", "PDF 电子书"],
    subjectArea: ["数字经济", "社会治理", "平台研究"],
    bookType: "Monograph",
    status: "Published",
    abstract:
      "本书系统考察数字经济崛起背景下社会治理模式的深刻变革。作者围绕平台权力、数据治理与制度创新三条主线，对中国及亚太地区的数字经济治理实践进行了深入分析，并结合比较政策研究，探讨了数字时代国家治理能力重构的路径与机制。本书适合公共管理、政治学及数字社会研究领域的学者与研究生参考阅读。",
    tableOfContents: [
      "前言",
      "第一章　数字经济的兴起与治理挑战",
      "第二章　平台经济与市场监管",
      "第三章　数据权属、数据安全与数字主权",
      "第四章　数字经济时代的劳动关系重构",
      "第五章　电子政务与政府数字化转型",
      "第六章　比较视野下的数字治理制度",
      "第七章　结论：数字时代的国家治理能力",
      "参考文献",
      "索引",
    ],
    authorBio: [
      {
        name: "方晓磊",
        bio: "方晓磊，博士，现任东岭国际学术大学公共管理学院副教授，研究方向为数字经济政策、平台治理与比较公共行政。曾在多份国际公共政策与亚洲研究学术期刊发表研究成果。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "light",
  },
  {
    slug: "higher-education-internationalisation-cn",
    title: "高等教育国际化研究",
    subtitle: "理论、政策与实践",
    authors: [],
    editors: ["陈明慧", "李建平"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Ltd",
    publicationYear: 2025,
    isbn: "978-3-987650-08-2",
    eisbn: "978-3-987650-08-9",
    language: "Chinese (Simplified)",
    pages: 410,
    format: ["精装", "PDF 电子书"],
    subjectArea: ["高等教育", "教育国际化", "比较教育"],
    bookType: "Edited Volume",
    status: "Published",
    abstract:
      "本论文集汇聚来自亚太、欧洲及北美地区的二十余位学者，系统梳理高等教育国际化的理论框架、政策演变与实践路径。各章作者围绕留学生流动、课程国际化、学术合作与质量保障等核心议题展开深入探讨，并结合各国及地区的典型案例，呈现高等教育国际化的多元面向及其对院校治理的深远影响。",
    tableOfContents: [
      "编者序",
      "第一编　理论视角",
      "第一章　高等教育国际化：概念演变与理论框架",
      "第二章　跨国教育与高等教育市场化",
      "第二编　政策分析",
      "第三章　亚太地区高等教育国际化政策比较",
      "第四章　欧洲高等教育区与博洛尼亚进程",
      "第五章　中国高校国际化战略的演变",
      "第三编　实践案例",
      "第六章　留学生融合与校园多元文化建设",
      "第七章　课程国际化与教学语言政策",
      "第八章　国际学术合作的机制与挑战",
      "结语",
      "作者简介",
      "索引",
    ],
    authorBio: [
      {
        name: "陈明慧",
        bio: "陈明慧，博士，现任北岸国际大学教育学院教授，研究方向为比较高等教育政策与教育治理。",
      },
      {
        name: "李建平",
        bio: "李建平，博士，现任东联学术研究院副研究员，长期从事高等教育国际化与留学生政策研究。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "white",
  },
  {
    slug: "ai-governance-ethics-law-cn",
    title: "人工智能治理",
    subtitle: "伦理、法律与制度框架",
    authors: ["赵思远"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Ltd",
    publicationYear: 2026,
    isbn: "978-3-987650-09-9",
    language: "Chinese (Simplified)",
    pages: 288,
    format: ["精装", "PDF 电子书"],
    subjectArea: ["人工智能", "法律与治理", "科技政策"],
    bookType: "Monograph",
    status: "Forthcoming",
    abstract:
      "本书从伦理、法律与制度三个维度，对人工智能技术的治理问题进行系统性分析。作者梳理了主要国家和地区的AI监管框架与立法动向，并就算法问责、自动决策、数据隐私及AI安全等核心议题展开深入探讨。本书对公共政策制定者、法律研究者及科技治理领域的学者具有重要参考价值。",
    tableOfContents: [
      "前言",
      "第一章　人工智能治理：问题的提出",
      "第二章　主要国家与地区AI监管框架比较",
      "第三章　算法问责与透明度机制",
      "第四章　自动决策与行政法律责任",
      "第五章　数据治理与个人信息保护",
      "第六章　生成式人工智能的内容安全监管",
      "第七章　国际AI治理协调的路径探索",
      "第八章　结论与政策建议",
      "参考文献",
      "索引",
    ],
    authorBio: [
      {
        name: "赵思远",
        bio: "赵思远，博士，现任西岸政法学院科技法律与政策研究中心研究员，研究方向为人工智能法律、数据治理与科技监管政策。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
  },
  {
    slug: "communication-democracy-digital-cn",
    title: "传播、民主与数字公共领域",
    subtitle: "理论前沿与批判视角",
    authors: [],
    editors: ["林佳颖", "吴浩然"],
    isEdited: true,
    publisher: "Panorama Scholarly Group Ltd",
    publicationYear: 2026,
    isbn: "978-3-987650-10-5",
    language: "Chinese (Simplified)",
    pages: 356,
    format: ["精装", "PDF 电子书"],
    subjectArea: ["传播学", "民主理论", "数字媒体"],
    bookType: "Edited Volume",
    status: "Forthcoming",
    abstract:
      "本论文集从传播学与政治学的交叉视角，系统梳理数字公共领域的理论演变与当代挑战。收录论文涵盖平台媒介化、舆论生成机制、数字民粹主义及网络公民参与等核心议题，从批判的理论视角审视数字传播对民主政治的深层影响。本书适合传播学、政治学及社会学领域的研究者与高年级学生使用。",
    tableOfContents: [
      "编者导言",
      "第一编　理论框架",
      "第一章　哈贝马斯公共领域理论的数字重构",
      "第二章　批判传播学的当代转向",
      "第二编　平台、算法与公共话语",
      "第三章　平台媒介化与话语权重构",
      "第四章　算法推荐与舆论极化",
      "第五章　数字民粹主义的传播逻辑",
      "第三编　参与、动员与民主实践",
      "第六章　网络公民参与的边界与潜能",
      "第七章　数字新闻与公众信任危机",
      "第八章　跨平台信息环境与认知共同体",
      "结语",
      "作者简介",
      "索引",
    ],
    authorBio: [
      {
        name: "林佳颖",
        bio: "林佳颖，博士，现任南洋传媒与政治研究所副教授，研究方向为数字传播、媒体政治与公共舆论。",
      },
      {
        name: "吴浩然",
        bio: "吴浩然，博士，现任恒川社会科学研究院传播与民主研究中心研究员，专注于网络公共领域与数字民主议题。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "light",
  },
  {
    slug: "comparative-education-policy-cn",
    title: "比较教育政策",
    subtitle: "亚太地区基础教育改革的多维分析",
    authors: ["PSG 研究中心"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Ltd",
    publicationYear: 2026,
    isbn: "978-3-987650-11-2",
    language: "Chinese (Simplified)",
    pages: 176,
    format: ["PDF 电子书", "开放获取"],
    subjectArea: ["比较教育", "基础教育政策", "亚太研究"],
    bookType: "Research Report",
    status: "Forthcoming",
    abstract:
      "本研究报告汇报了PSG研究中心对亚太地区八个国家和地区基础教育政策的比较研究成果。报告聚焦课程改革、教师专业发展、教育公平及数字技术融入课堂等核心政策领域，梳理各地政策演变的共同趋势与差异路径，并提出面向未来的政策建议。",
    tableOfContents: [
      "执行摘要",
      "第一章　研究背景与方法论",
      "第二章　课程改革的区域比较",
      "第三章　教师专业发展政策",
      "第四章　教育公平：机会均等与资源分配",
      "第五章　技术融入与数字教育政策",
      "第六章　总结与政策建议",
      "附录：参与研究的国家与地区",
      "参考文献",
    ],
    authorBio: [
      {
        name: "PSG 研究中心",
        bio: "PSG研究中心是Panorama Scholarly Group旗下从事教育、科技与公共政策跨学科研究的学术机构。",
      },
    ],
    hasSampleChapter: false,
    coverTone: "white",
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
