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
  tableOfContents: string[];
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
    authorBio: [
      {
        name: "方晓磊",
        bio: "Fang Xiaolei, PhD, is Associate Professor in the School of Public Administration at Dongling International Academic University. His research focuses on digital economy policy, platform governance, and comparative public administration. He has published in several international journals in public policy and Asian studies.",
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
    authorBio: [
      {
        name: "陈明慧",
        bio: "Chen Minghui, PhD, is Professor in the Faculty of Education at Beian International University. Her research addresses comparative higher education policy and educational governance.",
      },
      {
        name: "李建平",
        bio: "Li Jianping, PhD, is Associate Researcher at the East Alliance Academic Research Institute. He specialises in higher education internationalisation and international student policy.",
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
    authorBio: [
      {
        name: "赵思远",
        bio: "Zhao Siyuan, PhD, is Researcher at the Centre for Technology Law and Policy at Xian School of Politics and Law. His research focuses on AI law, data governance, and science and technology regulatory policy.",
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
    authorBio: [
      {
        name: "林佳颖",
        bio: "Lin Jiaying, PhD, is Associate Professor at the Nanyang Institute of Media and Political Studies. Her research centres on digital communication, media politics, and public opinion.",
      },
      {
        name: "吴浩然",
        bio: "Wu Haoran, PhD, is Researcher at the Centre for Communication and Democracy Research, Hengchuan Institute for Social Sciences. He specialises in networked public sphere and digital democracy.",
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
    authorBio: [
      {
        name: "PSG Research Centre",
        bio: "The PSG Research Centre is an interdisciplinary research unit under Panorama Scholarly Group, conducting research at the intersection of education, technology, and public policy.",
      },
    ],
    hasSampleChapter: false,
    coverTone: "white",
    license: "CC BY-NC-ND 4.0",
  },
  {
    slug: "chan-buddhism-sinicization-collected-essays-cn",
    title: "禅宗与佛教中国化论集",
    subtitle: "少林字辈、寺院传承与佛典翻译研究（2016—2026）",
    authors: ["释延晗"],
    editors: [],
    isEdited: false,
    publisher: "Panorama Scholarly Group Limited",
    placeOfPublication: "Hong Kong",
    publicationYear: 2026,
    isbn: "978-988-72442-0-2",
    eisbn: "978-988-72442-1-9",
    language: "Chinese (Simplified)",
    pages: 160,
    format: ["Paperback", "PDF eBook"],
    subjectArea: ["Chan Buddhism", "Buddhist Studies", "Sinicization of Buddhism"],
    bookType: "Monograph",
    status: "Forthcoming",
    abstract:
      "《禅宗与佛教中国化论集》是释延晗法师关于禅宗与佛教中国化研究文章的结集，收录了2016年至2026年间与禅宗及佛教中国化相关的文章共计十六余篇。书中论述涉及禅宗与佛教中国化的诸多方面，包括少林七十字辈与佛教的中国化、苏州重元寺与佛教中国化、佛教经典翻译与佛教中国化等内容的探讨，对当代禅宗与佛教中国化研究而言有一定的价值。",
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
    authorBio: [
      {
        name: "释延晗",
        bio: "释延晗，河南洛阳人，河南科技大学与戒幢佛学研究所研究生；祝发于嵩山少林寺；学戒于太姥山平兴寺；具戒于南海禅寺天中堂；现为江苏佛学院寒山学院讲师；主要研究方向为东亚禅宗文献与思想。",
      },
    ],
    hasSampleChapter: true,
    coverTone: "light",
    coverImage: "/covers/CBSB.png",
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
      const bio = book.authorBio.find((b) => b.name === name)?.bio;
      const existing = bySlug.get(slug);
      if (existing) {
        existing.books.push(book);
        if (!existing.bio && bio) existing.bio = bio;
      } else {
        bySlug.set(slug, { name, slug, bio, books: [book] });
      }
    }
  }
  return Array.from(bySlug.values()).sort((a, b) => a.name.localeCompare(b.name));
}

export function getAuthorBySlug(slug: string): AuthorSummary | undefined {
  return getAllAuthors().find((a) => a.slug === slug);
}
