"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";
import type { Locale } from "@/lib/locale";

const mailLink = (
  <a
    href="mailto:books@panorama-sg.com?subject=Rights and Permissions"
    className="text-[#111111] underline underline-offset-2"
  >
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "Copyright and Licensing", "zh-Hant": "版權與授權", "zh-Hans": "版权与授权" },
  updated: { en: "June 2026", "zh-Hant": "2026年6月", "zh-Hans": "2026年6月" },
  sections: [
    {
      heading: { en: "1. Copyright Ownership", "zh-Hant": "一、版權歸屬", "zh-Hans": "一、版权归属" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Unless otherwise agreed in writing, copyright in works published by Panorama Scholarly Books is retained by the author or authors. The publisher does not claim ownership of copyright in submitted manuscripts or published works.",
            "zh-Hant": "除非另有書面協議，Panorama Scholarly Books 出版著作之版權由作者保留。出版者不就投稿書稿或已出版著作主張版權所有權。",
            "zh-Hans": "除非另有书面协议，Panorama Scholarly Books 出版著作的版权由作者保留。出版者不就投稿书稿或已出版著作主张版权所有权。",
          },
        },
        {
          type: "p",
          content: {
            en: "By entering into a publishing agreement with Panorama Scholarly Group Limited, authors grant the publisher a licence to produce, distribute, and make available the work in the agreed formats and through the agreed channels for the duration of the agreement.",
            "zh-Hant": "作者與 Panorama Scholarly Group Limited 簽訂出版協議後，即授予出版者於協議期間內，以協議約定之格式及渠道製作、發行及提供該著作之授權。",
            "zh-Hans": "作者与 Panorama Scholarly Group Limited 签订出版协议后，即授予出版者在协议期间内，以协议约定的格式及渠道制作、发行及提供该著作的授权。",
          },
        },
      ],
    },
    {
      heading: { en: "2. Rights Retained by Authors", "zh-Hant": "二、作者保留之權利", "zh-Hans": "二、作者保留的权利" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors publishing with Panorama Scholarly Books retain the following rights as standard:",
            "zh-Hant": "與 Panorama Scholarly Books 合作出版之作者，標準上保留以下權利：",
            "zh-Hans": "与 Panorama Scholarly Books 合作出版的作者，标准上保留以下权利：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "The right to use the published work for personal academic purposes, including teaching and research.",
              "zh-Hant": "將已出版著作用於個人學術用途（包括教學與研究）之權利。",
              "zh-Hans": "将已出版著作用于个人学术用途（包括教学与研究）的权利。",
            },
            {
              en: "The right to post the final accepted manuscript (pre-production version) in an institutional or personal repository, subject to any embargo period specified in the publishing agreement.",
              "zh-Hant": "將最終接受版本之書稿（製作前版本）張貼於機構或個人典藏庫之權利，惟須遵守出版協議中規定之任何禁用期限。",
              "zh-Hans": "将最终接受版本的书稿（制作前版本）张贴于机构或个人典藏库的权利，但须遵守出版协议中规定的任何禁用期限。",
            },
            {
              en: "The right to reproduce portions of the work in subsequent publications by the same author, with appropriate attribution to the original publication.",
              "zh-Hant": "於同一作者後續出版物中重製著作部分內容之權利，惟須適當註明原出版來源。",
              "zh-Hans": "在同一作者后续出版物中重制著作部分内容的权利，但须适当注明原出版来源。",
            },
            {
              en: "The right to distribute copies of the work to colleagues and students for non-commercial academic purposes.",
              "zh-Hant": "為非商業性學術用途，向同事及學生分發著作複本之權利。",
              "zh-Hans": "为非商业性学术用途，向同事及学生分发著作副本的权利。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "3. Third-Party Material", "zh-Hant": "三、第三方材料", "zh-Hans": "三、第三方材料" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors are responsible for identifying and obtaining permission for any third-party material included in the manuscript, including quotations, figures, tables, maps, images, and data.",
            "zh-Hant": "作者須自行識別並取得書稿中所含任何第三方材料（包括引文、圖表、地圖、圖像及資料）之授權。",
            "zh-Hans": "作者须自行识别并取得书稿中所含任何第三方材料（包括引文、图表、地图、图像及数据）的授权。",
          },
        },
        {
          type: "p",
          content: {
            en: "Permission documentation must be provided to the publisher before final production. Material for which permission cannot be obtained must be removed or replaced before publication.",
            "zh-Hant": "授權文件須於最終製作前提供予出版者。無法取得授權之材料，須於出版前移除或替換。",
            "zh-Hans": "授权文件须在最终制作前提供给出版者。无法取得授权的材料，须在出版前移除或替换。",
          },
        },
        {
          type: "p",
          content: {
            en: "Authors should be aware that some material may be reproduced under fair dealing or fair use provisions without explicit permission. Authors are nonetheless responsible for ensuring that any such use is appropriate and properly attributed.",
            "zh-Hant": "作者應注意，部分材料或可依合理使用／合理處理相關條款重製而毋須明確授權。惟作者仍須確保此類使用恰當且已妥善歸屬。",
            "zh-Hans": "作者应注意，部分材料或可依合理使用/合理处理相关条款重制而无须明确授权。但作者仍须确保此类使用恰当且已妥善注明来源。",
          },
        },
      ],
    },
    {
      heading: { en: "4. Open Access and Creative Commons", "zh-Hant": "四、開放獲取與創用CC授權", "zh-Hans": "四、开放获取与知识共享许可协议" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Titles made available on an open access basis are licensed under a Creative Commons licence as specified in the individual title's metadata and book page. The default open access licence applied by Panorama Scholarly Books is CC BY-NC-ND 4.0 (Attribution, Non-Commercial, No Derivatives), unless otherwise agreed.",
            "zh-Hant": "以開放獲取方式提供之書目，將依個別書目之元數據及圖書頁面所載明之創用CC授權條款發布。除非另有協議，Panorama Scholarly Books 預設採用之開放獲取授權為 CC BY-NC-ND 4.0（姓名標示、非商業性、禁止改作）。",
            "zh-Hans": "以开放获取方式提供的书目，将依个别书目的元数据及图书页面所载明的知识共享许可条款发布。除非另有协议，Panorama Scholarly Books 默认采用的开放获取许可为 CC BY-NC-ND 4.0（署名、非商业性使用、禁止演绎）。",
          },
        },
        {
          type: "p",
          content: {
            en: "Authors wishing to publish on an open access basis should discuss the relevant licensing terms with the publisher prior to entering into a publishing agreement. Please refer to the Open Access Books policy for further details.",
            "zh-Hant": "有意以開放獲取方式出版之作者，應於簽署出版協議前與出版者討論相關授權條款。詳情請參閱《開放獲取圖書》政策。",
            "zh-Hans": "有意以开放获取方式出版的作者，应在签署出版协议前与出版者讨论相关许可条款。详情请参阅《开放获取图书》政策。",
          },
        },
      ],
    },
    {
      heading: { en: "5. Permissions and Licensing Inquiries", "zh-Hant": "五、授權與許可查詢", "zh-Hans": "五、授权与许可查询" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Third parties wishing to reproduce material from a Panorama Scholarly Books publication should contact the publisher in the first instance. Where the author retains copyright, the publisher will direct the request to the relevant author.",
            "zh-Hant": "有意重製 Panorama Scholarly Books 出版物內容之第三方，應首先聯絡出版者。若作者保留版權，出版者將把請求轉交予相關作者。",
            "zh-Hans": "有意重制 Panorama Scholarly Books 出版物内容的第三方，应首先联系出版者。若作者保留版权，出版者将把请求转交给相关作者。",
          },
        },
        {
          type: "p",
          content: {
            en: <>For permissions and licensing inquiries, contact {mailLink} with the subject line &quot;Rights and Permissions.&quot;</>,
            "zh-Hant": <>如有授權與許可查詢，請聯絡 {mailLink}，主旨請註明「Rights and Permissions」。</>,
            "zh-Hans": <>如有授权与许可查询，请联系 {mailLink}，主旨请注明"Rights and Permissions"。</>,
          },
        },
      ],
    },
  ],
};

export default function CopyrightClient({ locale }: { locale: Locale }) {
  return <PolicyLayout content={content} locale={locale} />;
}
