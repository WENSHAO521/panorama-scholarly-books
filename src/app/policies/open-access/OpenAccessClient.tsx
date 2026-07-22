"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";

const mailLink = (
  <a
    href="mailto:books@panorama-sg.com?subject=Open Access Inquiry"
    className="text-[#111111] underline underline-offset-2"
  >
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "Open Access Books", "zh-Hant": "開放獲取圖書" },
  updated: "2025",
  sections: [
    {
      heading: { en: "1. Open Access at Panorama Scholarly Books", "zh-Hant": "一、Panorama Scholarly Books 之開放獲取" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books supports open access as a means of broadening the availability and impact of academic research. Selected titles published by Panorama Scholarly Books may be made available on an open access basis, subject to the conditions set out in this policy and in the individual publishing agreement.",
            "zh-Hant": "Panorama Scholarly Books 支持以開放獲取方式擴大學術研究之可獲取性與影響力。Panorama Scholarly Books 出版之特定書目，可依本政策及個別出版協議所載條件，以開放獲取方式提供。",
          },
        },
        {
          type: "p",
          content: {
            en: "Where a title is published open access, it will be clearly identified as such on the official book page, and the applicable licence will be stated.",
            "zh-Hant": "凡以開放獲取方式出版之書目，將於官方圖書頁面上明確標示，並註明適用之授權條款。",
          },
        },
      ],
    },
    {
      heading: { en: "2. Default Open Access Licence", "zh-Hant": "二、預設開放獲取授權" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Unless otherwise agreed, open access titles published by Panorama Scholarly Books are made available under the Creative Commons Attribution - Non-Commercial - No Derivatives 4.0 International licence (CC BY-NC-ND 4.0).",
            "zh-Hant": "除非另有協議，Panorama Scholarly Books 出版之開放獲取書目，均依創用CC「姓名標示－非商業性－禁止改作」4.0國際授權條款（CC BY-NC-ND 4.0）提供。",
          },
        },
        {
          type: "p",
          content: {
            en: "Under this licence:",
            "zh-Hant": "依本授權條款：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "The work may be freely read, downloaded, and shared by any reader.",
              "zh-Hant": "任何讀者均可自由閱讀、下載及分享本著作。",
            },
            {
              en: "Attribution to the original author(s), editor(s), and publisher must be given.",
              "zh-Hant": "須註明原作者、編者及出版者。",
            },
            {
              en: "The work may not be used for commercial purposes without separate authorisation.",
              "zh-Hant": "未經另行授權，不得將本著作用於商業用途。",
            },
            {
              en: "Derivative works (translations, adaptations, abridgements) may not be distributed without authorisation.",
              "zh-Hant": "未經授權，不得發布衍生著作（如翻譯、改編、節錄本）。",
            },
          ],
        },
        {
          type: "p",
          content: {
            en: "Authors wishing to publish under a different Creative Commons licence (for example, CC BY or CC BY-NC) should discuss this with the publisher prior to entering into a publishing agreement.",
            "zh-Hant": "有意採用其他創用CC授權條款（例如 CC BY 或 CC BY-NC）出版之作者，應於簽署出版協議前與出版者討論。",
          },
        },
      ],
    },
    {
      heading: { en: "3. Conditions for Open Access Publication", "zh-Hant": "三、開放獲取出版之條件" },
      blocks: [
        {
          type: "p",
          content: {
            en: "The following conditions apply to titles published on an open access basis:",
            "zh-Hant": "以開放獲取方式出版之書目，適用以下條件：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "The author or a funding body must cover any applicable open access publication costs.",
              "zh-Hant": "作者或資助機構須負擔適用之開放獲取出版費用。",
            },
            {
              en: "The manuscript must meet all standard editorial and production requirements.",
              "zh-Hant": "書稿須符合所有標準編輯及製作要求。",
            },
            {
              en: "The open access licence terms must be agreed upon in the publishing agreement.",
              "zh-Hant": "開放獲取授權條款須於出版協議中議定。",
            },
            {
              en: "Third-party material included in the work must be cleared for open access reproduction where required.",
              "zh-Hant": "著作中所含第三方材料，如有需要須取得開放獲取重製之授權。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "4. Open Access and Funder Requirements", "zh-Hant": "四、開放獲取與資助機構之要求" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Some research funders require that works resulting from funded research be made publicly available on an open access basis. Authors with such obligations are encouraged to notify the publisher at the proposal stage so that suitable arrangements can be made.",
            "zh-Hant": "部分研究資助機構要求受資助研究之成果須以開放獲取方式公開。有此義務之作者，建議於提案階段即通知出版者，以便作出適當安排。",
          },
        },
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books will make reasonable efforts to accommodate funder open access mandates within the scope of its publishing arrangements.",
            "zh-Hant": "Panorama Scholarly Books 將在其出版安排範圍內，盡合理努力配合資助機構之開放獲取規定。",
          },
        },
      ],
    },
    {
      heading: { en: "5. Inquiries", "zh-Hant": "五、查詢" },
      blocks: [
        {
          type: "p",
          content: {
            en: <>For inquiries about open access publication, please contact {mailLink} with the subject line &quot;Open Access Inquiry.&quot;</>,
            "zh-Hant": <>如對開放獲取出版有任何查詢，請聯絡 {mailLink}，主旨請註明「Open Access Inquiry」。</>,
          },
        },
      ],
    },
  ],
};

export default function OpenAccessClient() {
  return <PolicyLayout content={content} />;
}
