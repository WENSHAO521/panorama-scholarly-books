"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";
import type { Locale } from "@/lib/locale";

const mailLink = (
  <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "Publishing Ethics", "zh-Hant": "出版倫理", "zh-Hans": "出版伦理" },
  updated: { en: "2026", "zh-Hant": "2026年", "zh-Hans": "2026年" },
  sections: [
    {
      heading: { en: "1. Overview", "zh-Hant": "一、概述", "zh-Hans": "一、概述" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books is committed to maintaining the highest standards of publishing ethics. All parties involved in the publication process - authors, editors, reviewers, and the publisher - are expected to adhere to recognised standards of academic integrity and ethical conduct.",
            "zh-Hant": "Panorama Scholarly Books 致力於維持最高標準的出版倫理。所有參與出版過程之各方——作者、編者、審稿人及出版者——均須遵守公認的學術誠信與倫理行為標準。",
            "zh-Hans": "Panorama Scholarly Books 致力于维持最高标准的出版伦理。所有参与出版过程的各方——作者、编者、审稿人及出版者——均须遵守公认的学术诚信与伦理行为标准。",
          },
        },
        {
          type: "p",
          content: {
            en: "These standards are informed by widely accepted principles in academic publishing, including those published by the Committee on Publication Ethics (COPE).",
            "zh-Hant": "此等標準參考學術出版界廣為接受之原則，包括出版倫理委員會（COPE）所發布之相關準則。",
            "zh-Hans": "此等标准参考学术出版界广为接受的原则，包括出版伦理委员会（COPE）所发布的相关准则。",
          },
        },
      ],
    },
    {
      heading: { en: "2. Responsibilities of Authors", "zh-Hant": "二、作者之責任", "zh-Hans": "二、作者的责任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors submitting work to Panorama Scholarly Books agree to the following:",
            "zh-Hant": "向 Panorama Scholarly Books 投稿之作者，須同意以下事項：",
            "zh-Hans": "向 Panorama Scholarly Books 投稿的作者，须同意以下事项：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "The work submitted is original and has not been previously published in substantially the same form.",
              "zh-Hant": "投稿著作為原創作品，且未曾以實質相同形式發表過。",
              "zh-Hans": "投稿著作为原创作品，且未曾以实质相同形式发表过。",
            },
            {
              en: "The work is not under simultaneous consideration by another publisher.",
              "zh-Hant": "該著作未同時提交予其他出版者審議。",
              "zh-Hans": "该著作未同时提交给其他出版者审议。",
            },
            {
              en: "All sources, data, and materials used in the work are properly cited and acknowledged.",
              "zh-Hant": "著作中所使用之所有來源、資料及材料均已妥善引用及致謝。",
              "zh-Hans": "著作中所使用的所有来源、数据及材料均已妥善引用及致谢。",
            },
            {
              en: "Authors have obtained all necessary permissions for the reproduction of third-party material.",
              "zh-Hant": "作者已取得重製第三方材料所需之一切授權。",
              "zh-Hans": "作者已取得重制第三方材料所需的一切授权。",
            },
            {
              en: "The authorship of the work is accurately represented and all contributors are appropriately credited.",
              "zh-Hant": "著作之作者身份如實呈現，所有貢獻者均獲適當致謝。",
              "zh-Hans": "著作的作者身份如实呈现，所有贡献者均获适当致谢。",
            },
            {
              en: "Any conflicts of interest or sources of funding relevant to the research are disclosed.",
              "zh-Hant": "與研究相關之任何利益衝突或資金來源均已披露。",
              "zh-Hans": "与研究相关的任何利益冲突或资金来源均已披露。",
            },
            {
              en: "The research complies with applicable ethical standards, including those governing human or animal subjects where relevant.",
              "zh-Hant": "該研究符合適用之倫理標準，包括涉及人類或動物受試者之相關規範（如適用）。",
              "zh-Hans": "该研究符合适用的伦理标准，包括涉及人类或动物受试者的相关规范（如适用）。",
            },
            {
              en: "The work does not contain fabricated, falsified, or misrepresented data or findings.",
              "zh-Hant": "著作不含捏造、竄改或失實陳述之資料或研究結果。",
              "zh-Hans": "著作不含捏造、篡改或失实陈述的数据或研究结果。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "3. Responsibilities of Editors", "zh-Hant": "三、編者之責任", "zh-Hans": "三、编者的责任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Volume editors and series editors are expected to:",
            "zh-Hant": "文集編者及書系編輯應：",
            "zh-Hans": "文集编者及书系编辑应：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Exercise independent editorial judgment free from commercial or personal considerations.",
              "zh-Hant": "行使獨立編輯判斷，不受商業或個人因素影響。",
              "zh-Hans": "行使独立编辑判断，不受商业或个人因素影响。",
            },
            {
              en: "Ensure that all contributions to edited volumes are evaluated fairly and on the basis of scholarly merit.",
              "zh-Hant": "確保文集中所有稿件均依學術價值公平評估。",
              "zh-Hans": "确保文集中所有稿件均依学术价值公平评估。",
            },
            {
              en: "Disclose and manage any conflicts of interest with contributors or chapter authors.",
              "zh-Hant": "披露並妥善處理與撰稿人或章節作者之任何利益衝突。",
              "zh-Hans": "披露并妥善处理与撰稿人或章节作者的任何利益冲突。",
            },
            {
              en: "Ensure that contributors are informed of and agree to the publisher's policies.",
              "zh-Hant": "確保撰稿人已知悉並同意出版者之各項政策。",
              "zh-Hans": "确保撰稿人已知悉并同意出版者的各项政策。",
            },
            {
              en: "Maintain the confidentiality of the review and editorial process.",
              "zh-Hant": "維持審查及編輯過程之機密性。",
              "zh-Hans": "维持审查及编辑过程的机密性。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "4. Responsibilities of the Publisher", "zh-Hant": "四、出版者之責任", "zh-Hans": "四、出版者的责任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books commits to the following:",
            "zh-Hant": "Panorama Scholarly Books 承諾：",
            "zh-Hans": "Panorama Scholarly Books 承诺：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Evaluating all proposals and manuscripts on the basis of scholarly merit, without discrimination on grounds of race, gender, nationality, religion, or institutional affiliation.",
              "zh-Hant": "依學術價值評估所有提案及書稿，不因種族、性別、國籍、宗教或所屬機構而有所歧視。",
              "zh-Hans": "依学术价值评估所有提案及书稿，不因种族、性别、国籍、宗教或所属机构而有所歧视。",
            },
            {
              en: "Maintaining clear and transparent policies that are publicly accessible.",
              "zh-Hant": "維持清晰透明且公開可查閱之政策。",
              "zh-Hans": "维持清晰透明且公开可查阅的政策。",
            },
            {
              en: "Handling all editorial and publication decisions in good faith and without undue delay.",
              "zh-Hant": "本誠信原則處理所有編輯及出版決定，不作不當拖延。",
              "zh-Hans": "本着诚信原则处理所有编辑及出版决定，不作不当拖延。",
            },
            {
              en: "Protecting the confidentiality of submitted manuscripts and proposal materials.",
              "zh-Hant": "保護所提交書稿及提案材料之機密性。",
              "zh-Hans": "保护所提交书稿及提案材料的机密性。",
            },
            {
              en: "Responding promptly and fairly to complaints, corrections, and appeals.",
              "zh-Hant": "及時公正地回應投訴、更正要求及申訴。",
              "zh-Hans": "及时公正地回应投诉、更正要求及申诉。",
            },
            {
              en: "Retracting or correcting published works where evidence of serious error or misconduct is established.",
              "zh-Hant": "如證實已出版著作存在重大錯誤或不當行為，將予以撤回或更正。",
              "zh-Hans": "如证实已出版著作存在重大错误或不当行为，将予以撤回或更正。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "5. Misconduct and Complaints", "zh-Hant": "五、不當行為與投訴", "zh-Hans": "五、不当行为与投诉" },
      blocks: [
        {
          type: "p",
          content: {
            en: <>Any person who suspects a breach of publishing ethics in connection with a Panorama Scholarly Books publication is encouraged to raise the matter directly with the publisher at {mailLink}.</>,
            "zh-Hant": <>任何人如懷疑 Panorama Scholarly Books 之出版物有違反出版倫理之情事，歡迎直接向出版者反映，電郵至 {mailLink}。</>,
            "zh-Hans": <>任何人如怀疑 Panorama Scholarly Books 的出版物有违反出版伦理的情事，欢迎直接向出版者反映，电邮至 {mailLink}。</>,
          },
        },
        {
          type: "p",
          content: {
            en: "Complaints will be handled confidentially and in accordance with the publisher's complaints procedure. Where appropriate, the publisher will consult established best-practice guidelines for handling allegations of research misconduct.",
            "zh-Hant": "投訴將依出版者投訴處理程序以保密方式處理。如有需要，出版者將參考處理研究不當行為指控之既定最佳實務指引。",
            "zh-Hans": "投诉将依出版者投诉处理程序以保密方式处理。如有需要，出版者将参考处理研究不当行为指控的既定最佳实践指引。",
          },
        },
      ],
    },
    {
      heading: { en: "6. Corrections and Retractions", "zh-Hant": "六、更正與撤回", "zh-Hans": "六、更正与撤回" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Where a published work is found to contain significant errors, the publisher will work with the relevant authors or editors to issue a correction notice as promptly as reasonably practicable.",
            "zh-Hant": "如發現已出版著作存在重大錯誤，出版者將與相關作者或編者合作，在合理可行的情況下盡速發出更正聲明。",
            "zh-Hans": "如发现已出版著作存在重大错误，出版者将与相关作者或编者合作，在合理可行的情况下尽速发出更正声明。",
          },
        },
        {
          type: "p",
          content: {
            en: "In cases involving established misconduct, fabrication, falsification, or plagiarism, the publisher reserves the right to retract the published work and to notify relevant parties. Retracted works will be clearly identified as such on the official book page.",
            "zh-Hant": "如涉及已證實之不當行為、捏造、竄改或抄襲，出版者保留撤回已出版著作並通知相關方之權利。已撤回之著作將於官方圖書頁面上明確標示。",
            "zh-Hans": "如涉及已证实的不当行为、捏造、篡改或抄袭，出版者保留撤回已出版著作并通知相关方的权利。已撤回的著作将在官方图书页面上明确标示。",
          },
        },
      ],
    },
  ],
};

export default function PublishingEthicsClient({ locale }: { locale: Locale }) {
  return <PolicyLayout content={content} locale={locale} />;
}
