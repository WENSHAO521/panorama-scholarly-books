"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";

const mailLink = (
  <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "Publishing Ethics", "zh-Hant": "出版倫理" },
  updated: "2025",
  sections: [
    {
      heading: { en: "1. Overview", "zh-Hant": "一、概述" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books is committed to maintaining the highest standards of publishing ethics. All parties involved in the publication process - authors, editors, reviewers, and the publisher - are expected to adhere to recognised standards of academic integrity and ethical conduct.",
            "zh-Hant": "Panorama Scholarly Books 致力於維持最高標準的出版倫理。所有參與出版過程之各方——作者、編者、審稿人及出版者——均須遵守公認的學術誠信與倫理行為標準。",
          },
        },
        {
          type: "p",
          content: {
            en: "These standards are informed by widely accepted principles in academic publishing, including those published by the Committee on Publication Ethics (COPE).",
            "zh-Hant": "此等標準參考學術出版界廣為接受之原則，包括出版倫理委員會（COPE）所發布之相關準則。",
          },
        },
      ],
    },
    {
      heading: { en: "2. Responsibilities of Authors", "zh-Hant": "二、作者之責任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors submitting work to Panorama Scholarly Books agree to the following:",
            "zh-Hant": "向 Panorama Scholarly Books 投稿之作者，須同意以下事項：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "The work submitted is original and has not been previously published in substantially the same form.",
              "zh-Hant": "投稿著作為原創作品，且未曾以實質相同形式發表過。",
            },
            {
              en: "The work is not under simultaneous consideration by another publisher.",
              "zh-Hant": "該著作未同時提交予其他出版者審議。",
            },
            {
              en: "All sources, data, and materials used in the work are properly cited and acknowledged.",
              "zh-Hant": "著作中所使用之所有來源、資料及材料均已妥善引用及致謝。",
            },
            {
              en: "Authors have obtained all necessary permissions for the reproduction of third-party material.",
              "zh-Hant": "作者已取得重製第三方材料所需之一切授權。",
            },
            {
              en: "The authorship of the work is accurately represented and all contributors are appropriately credited.",
              "zh-Hant": "著作之作者身份如實呈現，所有貢獻者均獲適當致謝。",
            },
            {
              en: "Any conflicts of interest or sources of funding relevant to the research are disclosed.",
              "zh-Hant": "與研究相關之任何利益衝突或資金來源均已披露。",
            },
            {
              en: "The research complies with applicable ethical standards, including those governing human or animal subjects where relevant.",
              "zh-Hant": "該研究符合適用之倫理標準，包括涉及人類或動物受試者之相關規範（如適用）。",
            },
            {
              en: "The work does not contain fabricated, falsified, or misrepresented data or findings.",
              "zh-Hant": "著作不含捏造、竄改或失實陳述之資料或研究結果。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "3. Responsibilities of Editors", "zh-Hant": "三、編者之責任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Volume editors and series editors are expected to:",
            "zh-Hant": "文集編者及書系編輯應：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Exercise independent editorial judgment free from commercial or personal considerations.",
              "zh-Hant": "行使獨立編輯判斷，不受商業或個人因素影響。",
            },
            {
              en: "Ensure that all contributions to edited volumes are evaluated fairly and on the basis of scholarly merit.",
              "zh-Hant": "確保文集中所有稿件均依學術價值公平評估。",
            },
            {
              en: "Disclose and manage any conflicts of interest with contributors or chapter authors.",
              "zh-Hant": "披露並妥善處理與撰稿人或章節作者之任何利益衝突。",
            },
            {
              en: "Ensure that contributors are informed of and agree to the publisher's policies.",
              "zh-Hant": "確保撰稿人已知悉並同意出版者之各項政策。",
            },
            {
              en: "Maintain the confidentiality of the review and editorial process.",
              "zh-Hant": "維持審查及編輯過程之機密性。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "4. Responsibilities of the Publisher", "zh-Hant": "四、出版者之責任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books commits to the following:",
            "zh-Hant": "Panorama Scholarly Books 承諾：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Evaluating all proposals and manuscripts on the basis of scholarly merit, without discrimination on grounds of race, gender, nationality, religion, or institutional affiliation.",
              "zh-Hant": "依學術價值評估所有提案及書稿，不因種族、性別、國籍、宗教或所屬機構而有所歧視。",
            },
            {
              en: "Maintaining clear and transparent policies that are publicly accessible.",
              "zh-Hant": "維持清晰透明且公開可查閱之政策。",
            },
            {
              en: "Handling all editorial and publication decisions in good faith and without undue delay.",
              "zh-Hant": "本誠信原則處理所有編輯及出版決定，不作不當拖延。",
            },
            {
              en: "Protecting the confidentiality of submitted manuscripts and proposal materials.",
              "zh-Hant": "保護所提交書稿及提案材料之機密性。",
            },
            {
              en: "Responding promptly and fairly to complaints, corrections, and appeals.",
              "zh-Hant": "及時公正地回應投訴、更正要求及申訴。",
            },
            {
              en: "Retracting or correcting published works where evidence of serious error or misconduct is established.",
              "zh-Hant": "如證實已出版著作存在重大錯誤或不當行為，將予以撤回或更正。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "5. Misconduct and Complaints", "zh-Hant": "五、不當行為與投訴" },
      blocks: [
        {
          type: "p",
          content: {
            en: <>Any person who suspects a breach of publishing ethics in connection with a Panorama Scholarly Books publication is encouraged to raise the matter directly with the publisher at {mailLink}.</>,
            "zh-Hant": <>任何人如懷疑 Panorama Scholarly Books 之出版物有違反出版倫理之情事，歡迎直接向出版者反映，電郵至 {mailLink}。</>,
          },
        },
        {
          type: "p",
          content: {
            en: "Complaints will be handled confidentially and in accordance with the publisher's complaints procedure. Where appropriate, the publisher will consult established best-practice guidelines for handling allegations of research misconduct.",
            "zh-Hant": "投訴將依出版者投訴處理程序以保密方式處理。如有需要，出版者將參考處理研究不當行為指控之既定最佳實務指引。",
          },
        },
      ],
    },
    {
      heading: { en: "6. Corrections and Retractions", "zh-Hant": "六、更正與撤回" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Where a published work is found to contain significant errors, the publisher will work with the relevant authors or editors to issue a correction notice as promptly as reasonably practicable.",
            "zh-Hant": "如發現已出版著作存在重大錯誤，出版者將與相關作者或編者合作，在合理可行的情況下盡速發出更正聲明。",
          },
        },
        {
          type: "p",
          content: {
            en: "In cases involving established misconduct, fabrication, falsification, or plagiarism, the publisher reserves the right to retract the published work and to notify relevant parties. Retracted works will be clearly identified as such on the official book page.",
            "zh-Hant": "如涉及已證實之不當行為、捏造、竄改或抄襲，出版者保留撤回已出版著作並通知相關方之權利。已撤回之著作將於官方圖書頁面上明確標示。",
          },
        },
      ],
    },
  ],
};

export default function PublishingEthicsClient() {
  return <PolicyLayout content={content} />;
}
