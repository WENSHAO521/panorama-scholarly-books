"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { localeHref, type Locale } from "@/lib/locale";

const acceptedTypes = [
  {
    type: { en: "Scholarly monographs", "zh-Hant": "學術專著", "zh-Hans": "学术专著" },
    desc: {
      en: "Original research works by one or more authors presenting a sustained argument or systematic investigation of a defined subject.",
      "zh-Hant": "由一位或多位作者撰寫、就特定課題進行系統論證或專題研究的原創學術著作。",
      "zh-Hans": "由一位或多位作者撰写、就特定课题进行系统论证或专题研究的原创学术著作。",
    },
  },
  {
    type: { en: "Edited volumes", "zh-Hant": "編著文集", "zh-Hans": "编著文集" },
    desc: {
      en: "Collections of original chapters by multiple contributors, organised and introduced by one or more editors.",
      "zh-Hant": "由多位撰稿人分別撰寫原創章節，並由一位或多位主編統籌編纂、撰寫導論的學術文集。",
      "zh-Hans": "由多位撰稿人分别撰写原创章节，并由一位或多位主编统筹编纂、撰写导论的学术文集。",
    },
  },
  {
    type: { en: "Academic textbooks", "zh-Hant": "學術教材", "zh-Hans": "学术教材" },
    desc: {
      en: "Pedagogically structured works designed for use in higher education curricula.",
      "zh-Hant": "按教學體系編寫、供高等教育課程使用的教學用書。",
      "zh-Hans": "按教学体系编写、供高等教育课程使用的教学用书。",
    },
  },
  {
    type: { en: "Research reports", "zh-Hant": "研究報告", "zh-Hans": "研究报告" },
    desc: {
      en: "Structured reports presenting findings from research projects, systematic reviews, or policy investigations.",
      "zh-Hant": "呈現研究項目、系統綜述或政策研究成果的規範性報告。",
      "zh-Hans": "呈现研究项目、系统综述或政策研究成果的规范性报告。",
    },
  },
  {
    type: { en: "Conference proceedings", "zh-Hant": "會議論文集", "zh-Hans": "会议论文集" },
    desc: {
      en: "Collections of peer-reviewed papers presented at academic conferences.",
      "zh-Hant": "收錄學術會議宣讀並經同行評審之論文的彙編。",
      "zh-Hans": "收录学术会议宣读并经同行评审之论文的汇编。",
    },
  },
  {
    type: { en: "Doctoral dissertation-based books", "zh-Hant": "博士學位論文修訂出版", "zh-Hans": "博士学位论文修订出版" },
    desc: {
      en: "Substantially revised and expanded works based on doctoral theses.",
      "zh-Hant": "以博士學位論文為基礎，經實質性修訂與擴充而成的學術著作。",
      "zh-Hans": "以博士学位论文为基础，经实质性修订与扩充而成的学术著作。",
    },
  },
  {
    type: { en: "Interdisciplinary research books", "zh-Hant": "跨學科研究專書", "zh-Hans": "跨学科研究专书" },
    desc: {
      en: "Works that cross conventional disciplinary boundaries and engage multiple fields of inquiry.",
      "zh-Hant": "跨越傳統學科界線、涉及多重研究領域的著作。",
      "zh-Hans": "跨越传统学科界限、涉及多重研究领域的著作。",
    },
  },
];

const whoCanSubmit = [
  {
    en: "Academic authors at any career stage, including early-career researchers",
    "zh-Hant": "各學術職涯階段的作者，包括青年學者",
    "zh-Hans": "各学术职业阶段的作者，包括青年学者",
  },
  {
    en: "Editors assembling interdisciplinary or field-specific edited volumes",
    "zh-Hant": "主編跨學科或專門領域編著文集的學者",
    "zh-Hans": "主编跨学科或专门领域编著文集的学者",
  },
  {
    en: "Researchers working independently or affiliated with academic institutions",
    "zh-Hant": "獨立研究者或隸屬學術機構的研究人員",
    "zh-Hans": "独立研究者或隶属学术机构的研究人员",
  },
  {
    en: "Research groups and policy institutes seeking to disseminate findings",
    "zh-Hant": "擬出版研究成果的研究團隊及政策研究機構",
    "zh-Hans": "拟出版研究成果的研究团队及政策研究机构",
  },
  {
    en: "Conference organisers wishing to publish proceedings",
    "zh-Hant": "擬出版會議論文集的學術會議主辦單位",
    "zh-Hans": "拟出版会议论文集的学术会议主办单位",
  },
  {
    en: "Doctoral graduates seeking to revise and publish their dissertations",
    "zh-Hant": "擬修訂出版其博士學位論文的博士",
    "zh-Hans": "拟修订出版其博士学位论文的博士",
  },
];

const requiredDocs = [
  { en: "Book proposal (see below for content requirements)", "zh-Hant": "出版計劃書（內容要求詳見下文）", "zh-Hans": "出版计划书（内容要求详见下文）" },
  { en: "Author or editor CV", "zh-Hant": "作者或主編學術履歷", "zh-Hans": "作者或主编学术简历" },
  { en: "Sample chapters or full manuscript", "zh-Hant": "樣章或完整書稿", "zh-Hans": "样章或完整书稿" },
  { en: "Table of contents", "zh-Hant": "目錄", "zh-Hans": "目录" },
  { en: "Abstract and book description (200–400 words)", "zh-Hant": "摘要及內容簡介（200–400字）", "zh-Hans": "摘要及内容简介（200–400字）" },
  { en: "Statement of target readership", "zh-Hant": "目標讀者說明", "zh-Hans": "目标读者说明" },
  { en: "Statement of publication purpose and scholarly contribution", "zh-Hant": "出版目的與學術貢獻說明", "zh-Hans": "出版目的与学术贡献说明" },
  { en: "Declaration of originality", "zh-Hant": "原創性聲明", "zh-Hans": "原创性声明" },
  { en: "Permission documents for third-party materials, where applicable", "zh-Hant": "第三方材料使用授權文件（如適用）", "zh-Hans": "第三方材料使用授权文件（如适用）" },
];

const proposalContent = [
  { en: "Working title and subtitle", "zh-Hant": "暫定書名及副書名", "zh-Hans": "暂定书名及副书名" },
  { en: "Author / editor details and institutional affiliation", "zh-Hant": "作者／主編簡介及所屬機構", "zh-Hans": "作者/主编简介及所属机构" },
  { en: "Book type (monograph, edited volume, etc.)", "zh-Hant": "圖書類型（學術專著、編著文集等）", "zh-Hans": "图书类型（学术专著、编著文集等）" },
  { en: "Subject area and disciplinary focus", "zh-Hant": "學科領域及研究重點", "zh-Hans": "学科领域及研究重点" },
  { en: "Description of the book and its central argument", "zh-Hant": "內容簡介及核心論點", "zh-Hans": "内容简介及核心论点" },
  { en: "Table of contents with chapter summaries", "zh-Hant": "含各章摘要之目錄", "zh-Hans": "含各章摘要的目录" },
  { en: "Target readership and course adoption potential, if relevant", "zh-Hant": "目標讀者及作為課程教材的適用性（如適用）", "zh-Hans": "目标读者及作为课程教材的适用性（如适用）" },
  { en: "Estimated word count and projected completion date", "zh-Hant": "預計字數及預計交稿日期", "zh-Hans": "预计字数及预计交稿日期" },
  { en: "List of competing or complementary titles", "zh-Hant": "同類及相關著作列表", "zh-Hans": "同类及相关著作列表" },
  { en: "Status of the manuscript (draft, in progress, complete)", "zh-Hant": "書稿進度（初稿、撰寫中、已完稿）", "zh-Hans": "书稿进度（初稿、撰写中、已完稿）" },
];

const processSteps = [
  {
    step: { en: "Proposal submission", "zh-Hant": "投稿", "zh-Hans": "投稿" },
    desc: {
      en: "Submit the book proposal, author or editor CV, table of contents, sample chapters or complete manuscript, book description, target-readership statement, originality declaration, and relevant permissions information.",
      "zh-Hant": "提交出版計劃書、作者或主編學術履歷、目錄、樣章或完整書稿、內容簡介、目標讀者說明、原創性聲明及相關授權資訊。",
      "zh-Hans": "提交出版计划书、作者或主编学术简历、目录、样章或完整书稿、内容简介、目标读者说明、原创性声明及相关授权信息。",
    },
  },
  {
    step: { en: "Initial editorial screening", "zh-Hant": "編輯初審", "zh-Hans": "编辑初审" },
    desc: {
      en: "The editorial team assesses the project's subject scope, scholarly contribution, originality, ethical suitability, legal suitability, and basic production feasibility. This normally takes two to four weeks.",
      "zh-Hant": "編輯部就書稿的學科範疇、學術貢獻、原創性、倫理及法律合規性以及基本出版可行性進行初審，一般需時二至四週。",
      "zh-Hans": "编辑部就书稿的学科范畴、学术贡献、原创性、伦理及法律合规性以及基本出版可行性进行初审，一般需时二至四周。",
    },
  },
  {
    step: { en: "Editorial evaluation", "zh-Hant": "編輯複審", "zh-Hans": "编辑复审" },
    desc: {
      en: "Proposals that pass initial screening proceed to detailed editorial evaluation. External expert review may be commissioned where appropriate.",
      "zh-Hant": "通過初審的書稿將進入編輯複審；如有需要，將另行委託校外專家評審。",
      "zh-Hans": "通过初审的书稿将进入编辑复审；如有需要，将另行委托外部专家评审。",
    },
  },
  {
    step: { en: "Publication decision", "zh-Hant": "審稿結論", "zh-Hans": "审稿结论" },
    desc: {
      en: "The author or editor receives one of the following decisions: accept; accept subject to revision; revise and resubmit; or decline. A fee quotation does not constitute acceptance for publication.",
      "zh-Hant": "作者或主編將獲告知以下其中一項審稿結論：錄用、修改後錄用、修改後重新送審或不予錄用。費用報價不構成錄用決定。",
      "zh-Hans": "作者或主编将获告知以下其中一项审稿结论：录用、修改后录用、修改后重新送审或不予录用。费用报价不构成录用决定。",
    },
  },
  {
    step: { en: "Publishing agreement and payment", "zh-Hant": "簽訂出版協議及付款", "zh-Hans": "签订出版协议及付款" },
    desc: {
      en: "Accepted projects proceed to a written publishing agreement specifying publication format, services, responsibilities, fees, payment schedule, rights and licences, production scope, correction rounds, estimated schedule, and printing and distribution arrangements.",
      "zh-Hant": "獲錄用的書稿須簽訂書面出版協議，列明出版形式、服務內容、雙方權責、費用、付款安排、著作權與授權、製作範圍、校對次數、預計出版時間，以及印刷與發行安排。",
      "zh-Hans": "获录用的书稿须签订书面出版协议，列明出版形式、服务内容、双方权责、费用、付款安排、著作权与授权、制作范围、校对次数、预计出版时间，以及印刷与发行安排。",
    },
  },
  {
    step: { en: "Rights and metadata verification", "zh-Hant": "版權及書目元數據核實", "zh-Hans": "版权及书目元数据核实" },
    desc: {
      en: "The publisher verifies the final title and subtitle, author and editor names, contributor information, affiliations, copyright ownership, third-party permissions, edition and product format, publication language, book description, subject classification, and publisher information.",
      "zh-Hant": "出版者核實最終書名及副書名、作者與主編姓名、撰稿人資料、所屬機構、著作權歸屬、第三方授權、版次及出版形式、出版語種、內容簡介、學科分類及出版者資料。",
      "zh-Hans": "出版者核实最终书名及副书名、作者与主编姓名、撰稿人信息、所属机构、著作权归属、第三方授权、版次及出版形式、出版语种、内容简介、学科分类及出版者信息。",
    },
  },
  {
    step: { en: "Production", "zh-Hant": "編輯製作", "zh-Hans": "编辑制作" },
    desc: {
      en: "The project proceeds through the agreed proofreading, editing, typesetting, cover design, file preparation, and correction process.",
      "zh-Hant": "書稿按協議完成編輯加工、校對、排版、封面設計、印前文件製作及改校。",
      "zh-Hans": "书稿按协议完成编辑加工、校对、排版、封面设计、印前文件制作及改校。",
    },
  },
  {
    step: { en: "ISBN assignment and final approval", "zh-Hant": "分配書號及終審", "zh-Hans": "分配书号及终审" },
    desc: {
      en: "Following approval of the publication format and bibliographic metadata, the publisher assigns the appropriate ISBN and completes the copyright-page and barcode information. ISBN assignment does not mean that unfinished or non-compliant files have received final publication approval.",
      "zh-Hant": "出版形式及書目元數據經核准後，出版者分配相應的國際標準書號（ISBN），並完成版權頁及條碼資料。分配 ISBN 並不表示未完成或不符合規範的文件已通過終審。",
      "zh-Hans": "出版形式及书目元数据经核准后，出版者分配相应的国际标准书号（ISBN），并完成版权页及条码信息。分配 ISBN 并不表示未完成或不符合规范的文件已通过终审。",
    },
  },
  {
    step: { en: "Publication", "zh-Hant": "出版", "zh-Hans": "出版" },
    desc: {
      en: "After final approval and payment of all outstanding fees, the book receives final publisher approval, an official publication date, final bibliographic metadata, an official book webpage, a publisher publication record, and digital archiving.",
      "zh-Hant": "通過終審並結清全部應付費用後，該書由出版者核准出版，確定正式出版日期及最終書目元數據，並設立官方圖書頁面、登錄出版紀錄及進行數碼存檔。",
      "zh-Hans": "通过终审并结清全部应付费用后，该书由出版者核准出版，确定正式出版日期及最终书目元数据，并设立官方图书页面、登录出版记录及进行数字化存档。",
    },
  },
  {
    step: { en: "Registration, deposit, and archiving", "zh-Hant": "登記、送存及存檔", "zh-Hans": "登记、送存及存档" },
    desc: {
      en: "Where applicable, the publisher coordinates post-publication registration, statutory deposit arrangements, publisher records, and long-term digital archiving. The author or commissioning institution remains responsible for all separately invoiced printing, binding, deposit-copy, delivery, and third-party costs.",
      "zh-Hant": "如適用，出版者將辦理出版後登記、法定送存、出版紀錄及長期數碼存檔。另行開具發票之印刷、裝訂、送存樣書、運送及第三方費用，仍由作者或委託機構承擔。",
      "zh-Hans": "如适用，出版者将办理出版后登记、法定送存、出版记录及长期数字化存档。另行开具发票的印刷、装订、送存样书、运送及第三方费用，仍由作者或委托机构承担。",
    },
  },
];

const manuscriptRequirements = [
  {
    label: { en: "Language", "zh-Hant": "語言", "zh-Hans": "语言" },
    text: {
      en: "Manuscripts may be submitted in English. Bilingual or non-English submissions are considered on a case-by-case basis. Authors are responsible for ensuring language quality.",
      "zh-Hant": "書稿可以英文撰寫。雙語或其他語種書稿將按個別情況審議。作者須自行負責書稿的語言質量。",
      "zh-Hans": "书稿可以英文撰写。双语或其他语种书稿将按个别情况审议。作者须自行负责书稿的语言质量。",
    },
  },
  {
    label: { en: "Length", "zh-Hant": "篇幅", "zh-Hans": "篇幅" },
    text: {
      en: "Typical monographs range from 60,000 to 120,000 words. Edited volumes range from 80,000 to 150,000 words. Research reports from 20,000 to 60,000 words. Please discuss specific length requirements with the editorial team.",
      "zh-Hant": "學術專著一般為60,000至120,000字；編著文集為80,000至150,000字；研究報告為20,000至60,000字。具體篇幅請與編輯部商定。",
      "zh-Hans": "学术专著一般为60,000至120,000字；编著文集为80,000至150,000字；研究报告为20,000至60,000字。具体篇幅请与编辑部商定。",
    },
  },
  {
    label: { en: "Format", "zh-Hant": "格式", "zh-Hans": "格式" },
    text: {
      en: "Manuscripts should be submitted as Microsoft Word files (.docx) with consistent formatting. Final production files will be requested at a later stage.",
      "zh-Hant": "書稿須以格式統一的 Microsoft Word 文件（.docx）提交；印前定稿文件將於後續階段另行提交。",
      "zh-Hans": "书稿须以格式统一的 Microsoft Word 文件（.docx）提交；印前定稿文件将于后续阶段另行提交。",
    },
  },
  {
    label: { en: "Style", "zh-Hant": "引文規範", "zh-Hans": "引文规范" },
    text: {
      en: "Authors should follow a recognised citation style consistently throughout (APA 7, Chicago, or MLA). Footnotes, endnotes, and bibliographies should be complete and accurate.",
      "zh-Hant": "作者須全書統一採用一種通行的引文格式（APA 第7版、芝加哥格式或 MLA）。腳註、尾註及參考文獻須完整、準確。",
      "zh-Hans": "作者须全书统一采用一种通行的引文格式（APA 第7版、芝加哥格式或 MLA）。脚注、尾注及参考文献须完整、准确。",
    },
  },
  {
    label: { en: "Permissions", "zh-Hant": "版權授權", "zh-Hans": "版权授权" },
    text: {
      en: "Authors are responsible for obtaining and documenting permission for any third-party material reproduced in the manuscript, including figures, tables, photographs, and extended quotations.",
      "zh-Hant": "書稿中複製使用的第三方材料（包括圖表、照片及長篇引文），作者須自行取得使用授權並保存授權證明。",
      "zh-Hans": "书稿中复制使用的第三方材料（包括图表、照片及长篇引文），作者须自行取得使用授权并保存授权证明。",
    },
  },
];

const onThisPage = [
  { href: "#what-we-publish", label: { en: "Publishing scope", "zh-Hant": "出版範圍", "zh-Hans": "出版范围" } },
  { href: "#who-can-submit", label: { en: "Who can submit", "zh-Hant": "投稿資格", "zh-Hans": "投稿资格" } },
  { href: "#required-documents", label: { en: "Required documents", "zh-Hant": "投稿材料", "zh-Hans": "投稿材料" } },
  { href: "#proposal-content", label: { en: "Proposal content", "zh-Hant": "出版計劃書內容", "zh-Hans": "出版计划书内容" } },
  { href: "#review-process", label: { en: "Review process", "zh-Hant": "審稿流程", "zh-Hans": "审稿流程" } },
  { href: "#manuscript-requirements", label: { en: "Manuscript requirements", "zh-Hant": "書稿要求", "zh-Hans": "书稿要求" } },
  { href: "#submit", label: { en: "Submission", "zh-Hant": "投稿方式", "zh-Hans": "投稿方式" } },
];

const copy = {
  en: {
    eyebrow: "For authors",
    heading: "Guidelines for authors and editors",
    subheading: "Submission requirements, the editorial review process and manuscript standards for authors and editors proposing a book to Panorama Scholarly Books.",
    onThisPage: "On this page",
    readyToSubmit: "Proposals are received by the books editorial office.",
    contactEditorialTeam: "Contact the editorial office",
    whatWePublish: "Publishing scope",
    whatWePublishIntro: "Panorama Scholarly Books publishes original, editorially reviewed academic works in the humanities, social sciences, education and interdisciplinary fields. Works are expected to meet high scholarly standards, with rigorous argument and clear academic prose.",
    whoCanSubmit: "Who can submit",
    whoCanSubmitIntro: "Proposals are accepted from:",
    requiredDocuments: "Required documents",
    submissionsMustInclude: "A complete submission comprises the following:",
    bookProposalContent: "Book proposal content",
    proposalContentIntro: "The book proposal should be 1,000–3,000 words in length and address the following:",
    reviewProcess: "Review and publication process",
    manuscriptRequirementsHeading: "Manuscript requirements",
    submitInquiry: "Submission",
    submitIntro: "Book proposals and enquiries about prospective projects should be sent by email to the books editorial office, with the proposal and supporting documents attached.",
    booksEditorialTeam: "Books editorial office",
    submitProposal: "Submit proposal",
    allowResponse: "An initial response is normally issued within 2–4 weeks of receipt. The editorial office will request any additional information required. For services and fees, please consult the",
    publishingServicesPage: "Publishing services",
    pageSuffix: "page.",
  },
  "zh-Hant": {
    eyebrow: "作者專區",
    heading: "作者及主編投稿指南",
    subheading: "向 Panorama Scholarly Books 投稿的作者及主編須知，包括投稿要求、審稿流程及書稿規範。",
    onThisPage: "本頁目錄",
    readyToSubmit: "投稿由圖書編輯部統一受理。",
    contactEditorialTeam: "聯絡編輯部",
    whatWePublish: "出版範圍",
    whatWePublishIntro: "Panorama Scholarly Books 出版經編輯審稿的原創學術著作，涵蓋人文學科、社會科學、教育及跨學科領域。所出版著作須符合嚴謹的學術標準，論證充分，表述清晰。",
    whoCanSubmit: "投稿資格",
    whoCanSubmitIntro: "以下作者及機構均可投稿：",
    requiredDocuments: "投稿材料",
    submissionsMustInclude: "完整的投稿材料包括：",
    bookProposalContent: "出版計劃書內容",
    proposalContentIntro: "出版計劃書篇幅為1,000至3,000字，須涵蓋以下內容：",
    reviewProcess: "審稿及出版流程",
    manuscriptRequirementsHeading: "書稿要求",
    submitInquiry: "投稿方式",
    submitIntro: "出版計劃書及出版項目諮詢請以電郵寄送圖書編輯部，並附上出版計劃書及相關證明文件。",
    booksEditorialTeam: "圖書編輯部",
    submitProposal: "提交出版計劃書",
    allowResponse: "編輯部一般於收稿後二至四週內作出初步回覆；如需補充材料，將另行通知。有關出版服務及費用，請參閱",
    publishingServicesPage: "出版服務",
    pageSuffix: "頁面。",
  },
  "zh-Hans": {
    eyebrow: "作者专区",
    heading: "作者及主编投稿指南",
    subheading: "向 Panorama Scholarly Books 投稿的作者及主编须知，包括投稿要求、审稿流程及书稿规范。",
    onThisPage: "本页目录",
    readyToSubmit: "投稿由图书编辑部统一受理。",
    contactEditorialTeam: "联系编辑部",
    whatWePublish: "出版范围",
    whatWePublishIntro: "Panorama Scholarly Books 出版经编辑审稿的原创学术著作，涵盖人文学科、社会科学、教育及跨学科领域。所出版著作须符合严谨的学术标准，论证充分，表述清晰。",
    whoCanSubmit: "投稿资格",
    whoCanSubmitIntro: "以下作者及机构均可投稿：",
    requiredDocuments: "投稿材料",
    submissionsMustInclude: "完整的投稿材料包括：",
    bookProposalContent: "出版计划书内容",
    proposalContentIntro: "出版计划书篇幅为1,000至3,000字，须涵盖以下内容：",
    reviewProcess: "审稿及出版流程",
    manuscriptRequirementsHeading: "书稿要求",
    submitInquiry: "投稿方式",
    submitIntro: "出版计划书及出版项目咨询请通过电子邮件发送至图书编辑部，并附上出版计划书及相关证明文件。",
    booksEditorialTeam: "图书编辑部",
    submitProposal: "提交出版计划书",
    allowResponse: "编辑部一般于收稿后二至四周内作出初步回复；如需补充材料，将另行通知。有关出版服务及费用，请参阅",
    publishingServicesPage: "出版服务",
    pageSuffix: "页面。",
  },
} as const;

export default function ForAuthorsPageClient({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <>
      {/* Page header */}
      <section className="border-b border-line pt-16 pb-12">
        <Container>
          <p className="eyebrow mb-4">
            {t.eyebrow}
          </p>
          <h1 className="type-h1 mb-4">
            {t.heading}
          </h1>
          <p className="lede max-w-[62ch]">
            {t.subheading}
          </p>
        </Container>
      </section>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 py-12 lg:py-16">
          {/* Sidebar */}
          <aside className="lg:col-span-1 lg:border-r border-line lg:pr-10 mb-12 lg:mb-0">
            <div className="sticky top-24">
              <p className="eyebrow mb-4">
                {t.onThisPage}
              </p>
              <ul className="flex flex-col gap-2">
                {onThisPage.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="font-serif text-sm text-ink-2 hover:text-brand transition-colors"
                    >
                      {item.label[locale]}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line mt-8 pt-8">
                <p className="font-serif text-sm text-ink-3 mb-3">
                  {t.readyToSubmit}
                </p>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Proposal Inquiry"
                  className="btn btn-primary"
                >
                  {t.contactEditorialTeam}
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-2 lg:pl-10">

            {/* What we publish */}
            <section id="what-we-publish" className="mb-14 scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.whatWePublish}
              </h2>
              <p className="font-serif text-base text-ink-2 leading-relaxed mb-8">
                {t.whatWePublishIntro}
              </p>
              <div className="flex flex-col gap-0 border-t border-line">
                {acceptedTypes.map((item) => (
                  <div
                    key={item.type.en}
                    className="border-b border-line py-5 grid grid-cols-1 sm:grid-cols-3 gap-2"
                  >
                    <p className="font-serif text-sm text-ink font-medium sm:col-span-1">
                      {item.type[locale]}
                    </p>
                    <p className="font-serif text-sm text-ink-2 leading-relaxed sm:col-span-2">
                      {item.desc[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-line mb-14" />

            {/* Who can submit */}
            <section id="who-can-submit" className="mb-14 scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.whoCanSubmit}
              </h2>
              <p className="font-serif text-base text-ink-2 leading-relaxed mb-4">
                {t.whoCanSubmitIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {whoCanSubmit.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-ink-2 flex gap-3 border-b border-line-soft pb-3 last:border-0">
                    <span className="mt-[0.8em] h-px w-3 bg-accent shrink-0" aria-hidden="true" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-line mb-14" />

            {/* Required documents */}
            <section id="required-documents" className="mb-14 scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.requiredDocuments}
              </h2>
              <div className="bg-stone-soft border border-line p-6 mb-6 rounded-lg">
                <p className="font-serif text-sm text-ink-3 mb-1">
                  {t.submissionsMustInclude}
                </p>
              </div>
              <ul className="flex flex-col gap-0 border-t border-line">
                {requiredDocs.map((doc, i) => (
                  <li
                    key={i}
                    className="font-serif text-sm text-ink-2 flex gap-3 border-b border-line py-4"
                  >
                    <span className="text-line-strong shrink-0 tabular-nums text-xs pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {doc[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-line mb-14" />

            {/* Proposal content */}
            <section id="proposal-content" className="mb-14 scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.bookProposalContent}
              </h2>
              <p className="font-serif text-base text-ink-2 leading-relaxed mb-6">
                {t.proposalContentIntro}
              </p>
              <ul className="flex flex-col gap-2">
                {proposalContent.map((item) => (
                  <li key={item.en} className="font-serif text-sm text-ink-2 flex gap-3 border-b border-line-soft pb-3 last:border-0">
                    <span className="mt-[0.8em] h-px w-3 bg-accent shrink-0" aria-hidden="true" />
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-line mb-14" />

            {/* Review process */}
            <section id="review-process" className="mb-14 scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.reviewProcess}
              </h2>
              <div className="flex flex-col gap-0 border-t border-line">
                {processSteps.map((item, i) => (
                  <div key={item.step.en} className="border-b border-line py-5 grid grid-cols-1 sm:grid-cols-4 gap-2 items-start">
                    <div className="sm:col-span-1 flex items-start gap-3">
                      <span className="font-serif text-xs text-line-strong tabular-nums shrink-0 pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-serif text-sm text-ink font-medium">
                        {item.step[locale]}
                      </p>
                    </div>
                    <p className="font-serif text-sm text-ink-2 leading-relaxed sm:col-span-3">
                      {item.desc[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-line mb-14" />

            {/* Manuscript requirements */}
            <section id="manuscript-requirements" className="mb-14 scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.manuscriptRequirementsHeading}
              </h2>
              <div className="flex flex-col gap-4">
                {manuscriptRequirements.map((item) => (
                  <div key={item.label.en} className="border border-line p-5 rounded-lg">
                    <p className="eyebrow mb-2">{item.label[locale]}</p>
                    <p className="font-serif text-sm text-ink-2 leading-relaxed">{item.text[locale]}</p>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-line mb-14" />

            {/* Submit */}
            <section id="submit" className="scroll-mt-24">
              <h2 className="type-h2 mb-6">
                {t.submitInquiry}
              </h2>
              <p className="font-serif text-base text-ink-2 leading-relaxed mb-8">
                {t.submitIntro}
              </p>
              <div className="border border-line p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg">
                <div>
                  <p className="font-serif text-sm text-ink-3 mb-1">{t.booksEditorialTeam}</p>
                  <a
                    href="mailto:books@panorama-sg.com"
                    className="font-serif text-base text-ink hover:text-brand transition-colors"
                  >
                    books@panorama-sg.com
                  </a>
                </div>
                <a
                  href="mailto:books@panorama-sg.com?subject=Book Proposal Submission"
                  className="btn btn-primary shrink-0 text-center"
                >
                  {t.submitProposal}
                </a>
              </div>
              <div className="mt-4 border border-line bg-stone-soft p-5 rounded-lg">
                <p className="font-serif text-xs text-ink-3 leading-relaxed">
                  {t.allowResponse}{" "}
                  <Link href={localeHref("/publishing-services", locale)} className="link">
                    {t.publishingServicesPage}
                  </Link>{" "}
                  {t.pageSuffix}
                </p>
              </div>
            </section>
          </main>
        </div>
      </Container>
    </>
  );
}
