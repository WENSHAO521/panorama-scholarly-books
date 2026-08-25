"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";
import type { Locale } from "@/lib/locale";

const mailLink = (
  <a href="mailto:books@panorama-sg.com" className="text-[#111111] underline underline-offset-2">
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "Plagiarism and Similarity Check", "zh-Hant": "抄襲與相似度檢查", "zh-Hans": "抄袭与相似度检查" },
  updated: { en: "2026", "zh-Hant": "2026年", "zh-Hans": "2026年" },
  sections: [
    {
      heading: { en: "1. Definition of Plagiarism", "zh-Hant": "一、抄襲之定義", "zh-Hans": "一、抄袭的定义" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Plagiarism is the use of another person's work, ideas, or expressions without appropriate attribution, in a manner that presents them as the author's own. Plagiarism in any form is unacceptable in works submitted to or published by Panorama Scholarly Books.",
            "zh-Hant": "抄襲係指未經適當歸屬，將他人之著作、想法或表達方式當作自己的原創內容使用。任何形式之抄襲，均不見容於投稿或出版予 Panorama Scholarly Books 之著作。",
            "zh-Hans": "抄袭是指未经适当归属，将他人的著作、想法或表达方式当作自己的原创内容使用。任何形式的抄袭，均不见容于投稿或出版至 Panorama Scholarly Books 的著作。",
          },
        },
        {
          type: "p",
          content: {
            en: "Plagiarism includes, but is not limited to:",
            "zh-Hant": "抄襲包括但不限於：",
            "zh-Hans": "抄袭包括但不限于：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Direct reproduction of text from another source without quotation marks and citation.",
              "zh-Hant": "未加引號及引註而直接抄錄其他來源之文字。",
              "zh-Hans": "未加引号及引注而直接抄录其他来源的文本。",
            },
            {
              en: "Paraphrasing the ideas or arguments of another author without attribution.",
              "zh-Hant": "未經歸屬而改寫他人之想法或論點。",
              "zh-Hans": "未经归属而改写他人的想法或论点。",
            },
            {
              en: "Reproducing data, figures, tables, or images from another source without permission and acknowledgement.",
              "zh-Hant": "未經授權及致謝而重製其他來源之資料、圖表或圖像。",
              "zh-Hans": "未经授权及致谢而重制其他来源的数据、图表或图像。",
            },
            {
              en: "Translating text from another language and presenting it as original writing without attribution.",
              "zh-Hant": "將其他語言之文字翻譯後，未經歸屬而當作原創寫作呈現。",
              "zh-Hans": "将其他语言的文本翻译后，未经归属而当作原创写作呈现。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "2. Self-Plagiarism and Duplicate Publication", "zh-Hant": "二、自我抄襲與重複出版", "zh-Hans": "二、自我抄袭与重复出版" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Self-plagiarism refers to the reuse of an author's own previously published text or data without appropriate disclosure. While an author's own prior work is not subject to the same ethical concern as the misrepresentation of others' work, undisclosed reuse is considered a breach of publication standards.",
            "zh-Hant": "自我抄襲係指未經適當披露而重複使用作者本人先前已發表之文字或資料。雖然作者引用自己先前著作之倫理疑慮不同於冒用他人著作，惟未披露之重複使用仍視為違反出版標準。",
            "zh-Hans": "自我抄袭是指未经适当披露而重复使用作者本人先前已发表的文本或数据。虽然作者引用自己先前著作的伦理疑虑不同于冒用他人著作，但未披露的重复使用仍视为违反出版标准。",
          },
        },
        {
          type: "p",
          content: {
            en: "Authors must disclose any substantial overlap between a submitted manuscript and their own previously published work. Where chapters or sections have been previously published, this must be clearly acknowledged in the manuscript.",
            "zh-Hant": "作者須披露投稿書稿與其先前已發表著作之間任何實質重疊之處。如有章節或段落先前已發表，須於書稿中明確註明。",
            "zh-Hans": "作者须披露投稿书稿与其先前已发表著作之间任何实质重叠之处。如有章节或段落先前已发表，须在书稿中明确注明。",
          },
        },
        {
          type: "p",
          content: {
            en: "Duplicate publication - submitting the same work simultaneously to more than one publisher, or publishing substantially the same content as a new work without disclosure - is not permitted.",
            "zh-Hant": "不允許重複出版——即同時向一家以上出版者投稿同一著作，或未經披露而將實質相同之內容當作新著作出版。",
            "zh-Hans": "不允许重复出版——即同时向一家以上出版者投稿同一著作，或未经披露而将实质相同的内容当作新著作出版。",
          },
        },
      ],
    },
    {
      heading: { en: "3. Similarity Checking", "zh-Hant": "三、相似度檢查", "zh-Hans": "三、相似度检查" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Panorama Scholarly Books may conduct similarity checks on submitted manuscripts using available text-matching tools as part of the editorial process. The presence of a similarity score above a given threshold does not by itself constitute a finding of plagiarism; the publisher will review the nature and context of any matched content before reaching a conclusion.",
            "zh-Hant": "Panorama Scholarly Books 可能於編輯流程中，使用現有文字比對工具對投稿書稿進行相似度檢查。相似度分數超過特定門檻，本身並不構成抄襲之認定；出版者將於作出結論前，審視相符內容之性質與脈絡。",
            "zh-Hans": "Panorama Scholarly Books 可能在编辑流程中，使用现有文本比对工具对投稿书稿进行相似度检查。相似度分数超过特定阈值，本身并不构成抄袭的认定；出版者将在作出结论前，审视相符内容的性质与背景。",
          },
        },
        {
          type: "p",
          content: {
            en: "Authors are encouraged to conduct their own checks prior to submission to identify and properly attribute any passages that may have been drawn from prior sources.",
            "zh-Hant": "建議作者於投稿前自行檢查，以識別並妥善歸屬任何可能取材自先前來源之段落。",
            "zh-Hans": "建议作者在投稿前自行检查，以识别并妥善归属任何可能取材自先前来源的段落。",
          },
        },
      ],
    },
    {
      heading: { en: "4. AI-Generated Text and Similarity", "zh-Hant": "四、人工智能生成文字與相似度", "zh-Hans": "四、人工智能生成文本与相似度" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors are reminded that text generated using AI tools may replicate content from sources not visible to the author. Authors who have used AI tools in drafting their manuscript should review the output carefully for unattributed similarity to existing sources.",
            "zh-Hant": "提醒作者，使用人工智能工具生成之文字，可能複製作者未曾見過之來源內容。使用人工智能工具起草書稿之作者，應仔細審視生成內容，確認是否存在未經歸屬而與現有來源相似之情形。",
            "zh-Hans": "提醒作者，使用人工智能工具生成的文本，可能复制作者未曾见过的来源内容。使用人工智能工具起草书稿的作者，应仔细审视生成内容，确认是否存在未经归属而与现有来源相似的情形。",
          },
        },
        {
          type: "p",
          content: {
            en: "The publisher's AI Use Policy applies to all manuscripts submitted to Panorama Scholarly Books. Undisclosed use of AI to generate substantial portions of a manuscript is considered contrary to publication ethics.",
            "zh-Hant": "出版者之人工智能使用政策適用於所有投稿予 Panorama Scholarly Books 之書稿。未經披露而使用人工智能生成書稿之實質部分，視為違反出版倫理。",
            "zh-Hans": "出版者的人工智能使用政策适用于所有投稿至 Panorama Scholarly Books 的书稿。未经披露而使用人工智能生成书稿的实质部分，视为违反出版伦理。",
          },
        },
      ],
    },
    {
      heading: { en: "5. Handling of Plagiarism Concerns", "zh-Hant": "五、抄襲疑慮之處理", "zh-Hans": "五、抄袭疑虑的处理" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Where plagiarism is suspected in a submitted or published work, the publisher will follow established best-practice procedures:",
            "zh-Hant": "如懷疑投稿或已出版著作存在抄襲情事，出版者將依既定最佳實務程序處理：",
            "zh-Hans": "如怀疑投稿或已出版著作存在抄袭情事，出版者将依既定最佳实践程序处理：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "For submitted manuscripts: the submission may be rejected and the author notified of the concern.",
              "zh-Hant": "就投稿書稿而言：該投稿可能被拒絕，並將相關疑慮通知作者。",
              "zh-Hans": "就投稿书稿而言：该投稿可能被拒绝，并将相关疑虑通知作者。",
            },
            {
              en: "For published works: the publisher will contact the author(s) to seek an explanation, and may issue a correction or retraction depending on the outcome.",
              "zh-Hant": "就已出版著作而言：出版者將聯絡作者尋求解釋，並可能依結果發出更正或撤回聲明。",
              "zh-Hans": "就已出版著作而言：出版者将联系作者寻求解释，并可能依结果发出更正或撤回声明。",
            },
            {
              en: "In all cases: findings and outcomes will be documented and, where appropriate, the author's institution may be notified.",
              "zh-Hant": "在所有情況下：調查結果及處理結果均會記錄在案，如有需要，可能通知作者所屬機構。",
              "zh-Hans": "在所有情况下：调查结果及处理结果均会记录在案，如有需要，可能通知作者所属机构。",
            },
          ],
        },
        {
          type: "p",
          content: {
            en: <>To report a concern about plagiarism in a Panorama Scholarly Books publication, contact {mailLink}.</>,
            "zh-Hant": <>如欲反映有關 Panorama Scholarly Books 出版物之抄襲疑慮，請聯絡 {mailLink}。</>,
            "zh-Hans": <>如欲反映有关 Panorama Scholarly Books 出版物的抄袭疑虑，请联系 {mailLink}。</>,
          },
        },
      ],
    },
  ],
};

export default function PlagiarismClient({ locale }: { locale: Locale }) {
  return <PolicyLayout content={content} locale={locale} />;
}
