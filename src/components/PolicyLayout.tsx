"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/context/LanguageContext";

export type Bi = { en: React.ReactNode; "zh-Hant": React.ReactNode };

export type PolicyBlock =
  | { type: "p"; content: Bi }
  | { type: "list"; items: Bi[] };

export interface PolicySection {
  heading: Bi;
  blocks: PolicyBlock[];
}

export interface PolicyContent {
  title: Bi;
  updated: string;
  sections: PolicySection[];
}

const chrome = {
  en: { allPolicies: "All Policies", policy: "Policy", lastUpdated: "Last updated:" },
  "zh-Hant": { allPolicies: "所有政策", policy: "政策", lastUpdated: "最後更新：" },
} as const;

export default function PolicyLayout({ content }: { content: PolicyContent }) {
  const { locale } = useLanguage();
  const c = chrome[locale];

  return (
    <>
      <div className="border-b border-[#e2e2e2] py-4">
        <Container>
          <Link href="/policies" className="font-serif text-sm text-[#888888] hover:text-[#111111] transition-colors flex items-center gap-2">
            <ArrowLeft size={14} weight="light" /> {c.allPolicies}
          </Link>
        </Container>
      </div>
      <section className="border-b border-[#e2e2e2] pt-12 pb-10">
        <Container narrow>
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#888888] font-serif mb-4">{c.policy}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#111111] font-medium leading-[1.1] mb-3">{content.title[locale]}</h1>
          <p className="font-serif text-sm text-[#888888]">{c.lastUpdated} {content.updated}</p>
        </Container>
      </section>
      <Container narrow>
        <div className="py-12 lg:py-16 font-serif text-[#555555] leading-relaxed">
          {content.sections.map((s, i) => (
            <div key={i}>
              <section className="mb-10">
                <h2 className="font-serif text-xl text-[#111111] font-medium mb-4">{s.heading[locale]}</h2>
                {s.blocks.map((b, j) =>
                  b.type === "p" ? (
                    <p key={j} className="mb-4 last:mb-0">
                      {b.content[locale]}
                    </p>
                  ) : (
                    <ul key={j} className="flex flex-col gap-3 mb-4">
                      {b.items.map((item, k) => (
                        <li key={k} className="flex gap-3 text-sm">
                          <span className="text-[#c8c8c8] shrink-0">-</span>
                          {item[locale]}
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </section>
              {i < content.sections.length - 1 && (
                <div className="w-full h-px bg-[#e2e2e2] mb-10" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
