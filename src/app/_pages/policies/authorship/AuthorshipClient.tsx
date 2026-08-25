"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";
import type { Locale } from "@/lib/locale";

const mailLink = (
  <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "Authorship and Contributorship", "zh-Hant": "著作權歸屬與貢獻", "zh-Hans": "著作权归属与贡献" },
  updated: { en: "2026", "zh-Hant": "2026年", "zh-Hans": "2026年" },
  sections: [
    {
      heading: { en: "1. Criteria for Authorship", "zh-Hant": "一、作者資格標準", "zh-Hans": "一、作者资格标准" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authorship of a work published by Panorama Scholarly Books should be limited to individuals who have made a substantial contribution to the work. Acceptable grounds for authorship include:",
            "zh-Hant": "Panorama Scholarly Books 出版著作之作者身份，應僅限於對該著作有實質貢獻之人士。可接受之作者資格包括：",
            "zh-Hans": "Panorama Scholarly Books 出版著作的作者身份，应仅限于对该著作有实质贡献的人士。可接受的作者资格包括：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Conception or design of the research or the intellectual framework of the book.",
              "zh-Hant": "構思或設計研究內容，或本書之思想框架。",
              "zh-Hans": "构思或设计研究内容，或本书的思想框架。",
            },
            {
              en: "Acquisition, analysis, or interpretation of data or evidence.",
              "zh-Hant": "取得、分析或詮釋資料或證據。",
              "zh-Hans": "取得、分析或诠释数据或证据。",
            },
            {
              en: "Drafting, writing, or substantially revising the manuscript.",
              "zh-Hant": "起草、撰寫或實質性修訂書稿。",
              "zh-Hans": "起草、撰写或实质性修订书稿。",
            },
            {
              en: "Final approval of the version submitted for publication.",
              "zh-Hant": "對提交出版之版本作最終核准。",
              "zh-Hans": "对提交出版的版本作最终核准。",
            },
          ],
        },
        {
          type: "p",
          content: {
            en: "Individuals who contributed in other ways (research assistance, data collection, administrative support, general supervision) should be acknowledged in the Acknowledgements section rather than listed as authors.",
            "zh-Hant": "以其他方式作出貢獻之人士（如研究協助、資料蒐集、行政支援、一般督導），應於致謝部分列明，而非列為作者。",
            "zh-Hans": "以其他方式作出贡献的人士（如研究协助、数据收集、行政支持、一般督导），应在致谢部分列明，而非列为作者。",
          },
        },
      ],
    },
    {
      heading: { en: "2. Editorship of Volumes", "zh-Hant": "二、文集之編輯身份", "zh-Hans": "二、文集的编辑身份" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Editors of multi-author volumes are responsible for the intellectual organisation of the work, including the selection and development of contributions and the drafting of introductory and concluding material. Editors bear responsibility for the integrity of the volume as a whole.",
            "zh-Hant": "多作者文集之編者，負責該著作之整體思想組織工作，包括篩選及發展各篇稿件，以及撰寫導言及結語部分。編者對整部文集之誠信負責。",
            "zh-Hans": "多作者文集的编者，负责该著作的整体思想组织工作，包括筛选及发展各篇稿件，以及撰写导言及结语部分。编者对整部文集的诚信负责。",
          },
        },
        {
          type: "p",
          content: {
            en: "Editors who have also authored individual chapters in a volume should be listed both as editors and as authors of the relevant chapters.",
            "zh-Hant": "如編者亦撰寫文集中之個別章節，應同時列為編者及該章節之作者。",
            "zh-Hans": "如编者亦撰写文集中的个别章节，应同时列为编者及该章节的作者。",
          },
        },
      ],
    },
    {
      heading: { en: "3. Ghost Authorship and Gift Authorship", "zh-Hant": "三、代筆掛名與贈與掛名", "zh-Hans": "三、代笔挂名与赠与挂名" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Ghost authorship - where a person who made substantial contributions to the work is not acknowledged as an author - and gift authorship - where a person is listed as an author without having made a substantive contribution - are both contrary to publishing ethics standards.",
            "zh-Hant": "代筆掛名（即對著作有實質貢獻之人士未被列為作者）與贈與掛名（即未有實質貢獻之人士被列為作者），兩者均違反出版倫理標準。",
            "zh-Hans": "代笔挂名（即对著作有实质贡献的人士未被列为作者）与赠与挂名（即未有实质贡献的人士被列为作者），两者均违反出版伦理标准。",
          },
        },
        {
          type: "p",
          content: {
            en: "Authors submitting work to Panorama Scholarly Books confirm that all listed authors meet the criteria above and that no persons meeting those criteria have been excluded from the authorship list.",
            "zh-Hant": "向 Panorama Scholarly Books 投稿之作者，須確認所有列名作者均符合上述標準，且無任何符合該等標準之人士被排除於作者名單之外。",
            "zh-Hans": "向 Panorama Scholarly Books 投稿的作者，须确认所有列名作者均符合上述标准，且无任何符合该等标准的人士被排除于作者名单之外。",
          },
        },
      ],
    },
    {
      heading: { en: "4. AI Tools and Authorship", "zh-Hant": "四、人工智能工具與作者身份", "zh-Hans": "四、人工智能工具与作者身份" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Artificial intelligence tools, including large language models, cannot be listed as authors of works published by Panorama Scholarly Books. Authorship requires the capacity for accountability, which AI tools do not possess.",
            "zh-Hant": "人工智能工具（包括大型語言模型）不得列為 Panorama Scholarly Books 出版著作之作者。作者身份要求具備當責能力，而人工智能工具並不具備此能力。",
            "zh-Hans": "人工智能工具（包括大型语言模型）不得列为 Panorama Scholarly Books 出版著作的作者。作者身份要求具备问责能力，而人工智能工具并不具备此能力。",
          },
        },
        {
          type: "p",
          content: {
            en: "Where AI tools have been used in the preparation of the manuscript, authors must disclose this in accordance with the publisher's AI Use Policy.",
            "zh-Hant": "如書稿撰寫過程中曾使用人工智能工具，作者須依出版者之人工智能使用政策予以披露。",
            "zh-Hans": "如书稿撰写过程中曾使用人工智能工具，作者须依出版者的人工智能使用政策予以披露。",
          },
        },
      ],
    },
    {
      heading: { en: "5. Changes to Authorship", "zh-Hant": "五、作者身份之變更", "zh-Hans": "五、作者身份的变更" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Changes to the authorship list after submission require written notification to the publisher and agreement from all parties concerned. The publisher reserves the right to pause the editorial process while authorship changes are resolved.",
            "zh-Hant": "投稿後如需變更作者名單，須以書面通知出版者，並取得所有相關方之同意。出版者保留在作者身份變更問題解決前暫停編輯流程之權利。",
            "zh-Hans": "投稿后如需变更作者名单，须以书面通知出版者，并取得所有相关方的同意。出版者保留在作者身份变更问题解决前暂停编辑流程的权利。",
          },
        },
        {
          type: "p",
          content: {
            en: "Requests to add or remove authors after publication will be handled in accordance with established best-practice guidelines and may result in the issuance of a correction notice.",
            "zh-Hant": "出版後要求新增或移除作者，將依既定最佳實務指引處理，並可能導致發出更正聲明。",
            "zh-Hans": "出版后要求新增或移除作者，将依既定最佳实践指引处理，并可能导致发出更正声明。",
          },
        },
      ],
    },
    {
      heading: { en: "6. Authorship Disputes", "zh-Hant": "六、作者身份爭議", "zh-Hans": "六、作者身份争议" },
      blocks: [
        {
          type: "p",
          content: {
            en: "In the event of a dispute over authorship, the publisher will not adjudicate between the parties but may pause the publication process until the dispute is resolved. Authors are encouraged to resolve disputes in consultation with their institution.",
            "zh-Hant": "如發生作者身份爭議，出版者不會就爭議各方作出裁決，惟可能暫停出版流程，直至爭議解決為止。建議作者透過所屬機構協商解決爭議。",
            "zh-Hans": "如发生作者身份争议，出版者不会就争议各方作出裁决，但可能暂停出版流程，直至争议解决为止。建议作者通过所属机构协商解决争议。",
          },
        },
        {
          type: "p",
          content: {
            en: <>For questions about this policy, please contact {mailLink}.</>,
            "zh-Hant": <>如對本政策有任何疑問，請聯絡 {mailLink}。</>,
            "zh-Hans": <>如对本政策有任何疑问，请联系 {mailLink}。</>,
          },
        },
      ],
    },
  ],
};

export default function AuthorshipClient({ locale }: { locale: Locale }) {
  return <PolicyLayout content={content} locale={locale} />;
}
