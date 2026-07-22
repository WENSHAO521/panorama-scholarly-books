"use client";

import PolicyLayout, { type PolicyContent } from "@/components/PolicyLayout";

const mailLink = (
  <a
    href="mailto:books@panorama-sg.com?subject=AI Use Policy Inquiry"
    className="text-[#111111] underline underline-offset-2"
  >
    books@panorama-sg.com
  </a>
);

const content: PolicyContent = {
  title: { en: "AI Use Policy", "zh-Hant": "人工智能使用政策" },
  updated: "2025",
  sections: [
    {
      heading: { en: "1. Scope and Purpose", "zh-Hant": "一、範圍與目的" },
      blocks: [
        {
          type: "p",
          content: {
            en: "This policy applies to all manuscripts, proposals, and supporting documents submitted to Panorama Scholarly Books. It addresses the use of artificial intelligence (AI) tools, including large language models (LLMs) and generative AI applications, in the preparation of academic works.",
            "zh-Hant": "本政策適用於所有提交予 Panorama Scholarly Books 之書稿、提案及輔助文件，規範學術著作撰寫過程中使用人工智能（AI）工具（包括大型語言模型及生成式人工智能應用）之情形。",
          },
        },
        {
          type: "p",
          content: {
            en: "The purpose of this policy is to ensure transparency, to uphold academic integrity, and to clarify the responsibilities of authors and editors in relation to AI-assisted writing and research.",
            "zh-Hant": "本政策旨在確保透明度、維護學術誠信，並釐清作者及編者於人工智能輔助寫作與研究方面之責任。",
          },
        },
      ],
    },
    {
      heading: { en: "2. AI Tools and Authorship", "zh-Hant": "二、人工智能工具與作者身份" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Artificial intelligence tools cannot be listed as authors of works submitted to or published by Panorama Scholarly Books. Authorship requires the capacity for intellectual accountability and responsibility, which AI tools do not possess.",
            "zh-Hant": "人工智能工具不得列為投稿或出版予 Panorama Scholarly Books 著作之作者。作者身份要求具備知識當責與責任能力，而人工智能工具並不具備此能力。",
          },
        },
        {
          type: "p",
          content: {
            en: "Authors who use AI tools in the preparation of their manuscripts remain fully responsible for the accuracy, originality, and integrity of the submitted work. The use of an AI tool does not transfer or diminish this responsibility.",
            "zh-Hant": "於書稿撰寫過程中使用人工智能工具之作者，仍須就投稿著作之準確性、原創性及誠信負全部責任。使用人工智能工具並不會轉移或減輕此責任。",
          },
        },
      ],
    },
    {
      heading: { en: "3. Disclosure Requirements", "zh-Hant": "三、披露要求" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors must disclose any use of AI tools that has materially contributed to the drafting or substantive revision of the manuscript. Disclosure must be made in the manuscript itself, typically in the Acknowledgements section or a dedicated AI Use Statement.",
            "zh-Hant": "作者須披露對書稿起草或實質修訂有重大貢獻之任何人工智能工具使用情形。披露須於書稿本身中作出，一般於致謝部分或專設之人工智能使用聲明中說明。",
          },
        },
        {
          type: "p",
          content: {
            en: "The disclosure should specify:",
            "zh-Hant": "披露內容應包括：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "The name and version of the AI tool or tools used.",
              "zh-Hant": "所使用人工智能工具之名稱及版本。",
            },
            {
              en: "The nature of the use (for example, text generation, summarisation, translation, editing, literature search).",
              "zh-Hant": "使用之性質（例如文字生成、摘要、翻譯、編輯、文獻檢索）。",
            },
            {
              en: "The sections of the manuscript affected.",
              "zh-Hant": "受影響之書稿部分。",
            },
          ],
        },
        {
          type: "p",
          content: {
            en: "Disclosure is not required for the use of AI tools in routine tasks that do not affect the substantive content of the manuscript, such as grammar checking, spell checking, or reference formatting.",
            "zh-Hant": "如人工智能工具僅用於不影響書稿實質內容之常規工作（如文法檢查、拼字檢查或參考文獻格式編排），則毋須披露。",
          },
        },
      ],
    },
    {
      heading: { en: "4. Prohibited Uses", "zh-Hant": "四、禁止之使用方式" },
      blocks: [
        {
          type: "p",
          content: {
            en: "The following uses of AI tools are not permitted in manuscripts submitted to Panorama Scholarly Books:",
            "zh-Hant": "投稿予 Panorama Scholarly Books 之書稿，不得有以下人工智能工具使用方式：",
          },
        },
        {
          type: "list",
          items: [
            {
              en: "Using AI to generate the central arguments, findings, or conclusions of the work without substantive intellectual input by the author.",
              "zh-Hant": "在作者未有實質智識投入之情況下，使用人工智能生成著作之核心論點、研究結果或結論。",
            },
            {
              en: "Using AI to produce fabricated citations, references, or data.",
              "zh-Hant": "使用人工智能生成捏造之引註、參考文獻或資料。",
            },
            {
              en: "Using AI to produce text that misrepresents the author's own views, methods, or expertise.",
              "zh-Hant": "使用人工智能生成失實呈現作者本人觀點、方法或專業知識之文字。",
            },
            {
              en: "Using AI to generate content that constitutes plagiarism of existing sources.",
              "zh-Hant": "使用人工智能生成構成抄襲現有來源之內容。",
            },
            {
              en: "Submitting AI-generated text as original writing without disclosure.",
              "zh-Hant": "未經披露而將人工智能生成之文字當作原創寫作提交。",
            },
          ],
        },
      ],
    },
    {
      heading: { en: "5. Author Responsibility", "zh-Hant": "五、作者之責任" },
      blocks: [
        {
          type: "p",
          content: {
            en: "Authors are responsible for verifying all content in the manuscript, including content that was drafted or revised with AI assistance. This includes verifying the accuracy of facts, figures, citations, and arguments presented in the work.",
            "zh-Hant": "作者須負責核實書稿中所有內容，包括以人工智能輔助起草或修訂之內容，並須核實著作中所呈現之事實、數據、引註及論點之準確性。",
          },
        },
        {
          type: "p",
          content: {
            en: "AI tools are known to produce plausible but inaccurate information, fabricated citations, and text that may unintentionally reproduce content from training data. Authors must take active steps to identify and correct such errors before submission.",
            "zh-Hant": "人工智能工具已知可能產生看似合理但不準確之資訊、捏造之引註，以及可能無意間重製訓練資料內容之文字。作者須於投稿前積極識別並更正此類錯誤。",
          },
        },
      ],
    },
    {
      heading: { en: "6. Review and Enforcement", "zh-Hant": "六、審查與執行" },
      blocks: [
        {
          type: "p",
          content: {
            en: "The publisher reserves the right to request clarification from authors regarding the use of AI tools in the preparation of a submitted manuscript. Where undisclosed or prohibited AI use is identified, the publisher may decline the submission or, in the case of published works, issue a correction or retraction.",
            "zh-Hant": "出版者保留就投稿書稿撰寫過程中使用人工智能工具一事，要求作者澄清之權利。如發現未披露或被禁止之人工智能使用情形，出版者可能拒絕投稿，或就已出版著作發出更正或撤回聲明。",
          },
        },
        {
          type: "p",
          content: {
            en: "This policy will be reviewed and updated periodically in response to developments in AI technology and evolving standards in academic publishing.",
            "zh-Hant": "本政策將因應人工智能技術發展及學術出版標準之演變，定期檢討並更新。",
          },
        },
      ],
    },
    {
      heading: { en: "7. Questions and Clarification", "zh-Hant": "七、疑問與釋疑" },
      blocks: [
        {
          type: "p",
          content: {
            en: <>Authors who are uncertain whether a particular use of AI tools requires disclosure are encouraged to contact the Books department before submission at {mailLink}.</>,
            "zh-Hant": <>如作者不確定特定人工智能工具使用情形是否須予披露，建議於投稿前聯絡圖書部門，電郵 {mailLink}。</>,
          },
        },
      ],
    },
  ],
};

export default function AIUsePolicyClient() {
  return <PolicyLayout content={content} />;
}
