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
    publisher: "Panorama Scholarly Books",
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
        bio: "Dr. Elena Richter is an independent researcher specialising in education governance and digital policy. She holds a doctorate in Education from the University of Vienna and has contributed to policy consultations with UNESCO and the European Commission. Her previous work has appeared in the Journal of Education Policy and Comparative Education.",
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
    publisher: "Panorama Scholarly Books",
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
        bio: "Prof. James T. Chen is Professor of International Studies at the National University of Singapore. He has published extensively on regional governance and Asian political economy.",
      },
      {
        name: "Mei Lin Tanaka",
        bio: "Dr. Mei Lin Tanaka is Associate Professor of Global Studies at Waseda University, Tokyo. Her research addresses gender, governance, and transnational civil society in the Asia-Pacific.",
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
    publisher: "Panorama Scholarly Books",
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
    publisher: "Panorama Scholarly Books",
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
        bio: "Prof. Klaus Hoffmann is Professor of Public Administration at the Hertie School, Berlin. He is the author of State Restructuring in Comparative Perspective (2017) and has advised public sector reform commissions in Germany, Austria, and the European Union.",
      },
    ],
    hasSampleChapter: false,
    coverTone: "medium",
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
