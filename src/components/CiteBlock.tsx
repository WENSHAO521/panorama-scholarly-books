"use client";

import { useId, useRef, useState } from "react";
import { Check, Copy } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/locale";

export interface CitationFormat {
  id: string;
  label: string;
  text: string;
  mono?: boolean;
}

const copy = {
  en: { copy: "Copy citation", copied: "Copied to clipboard", failed: "Couldn’t copy — the text is selected, press Ctrl+C / ⌘C", formats: "Citation format" },
  "zh-Hant": { copy: "複製引用", copied: "已複製至剪貼簿", failed: "無法自動複製——文字已選取，請按 Ctrl+C / ⌘C", formats: "引用格式" },
  "zh-Hans": { copy: "复制引用", copied: "已复制到剪贴板", failed: "无法自动复制——文字已选中，请按 Ctrl+C / ⌘C", formats: "引用格式" },
} as const;

export default function CiteBlock({ formats, locale }: { formats: CitationFormat[]; locale: Locale }) {
  const t = copy[locale];
  const [active, setActive] = useState(0);
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const textRef = useRef<HTMLPreElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const current = formats[active];

  const select = (i: number) => {
    setActive(i);
    setStatus("idle");
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(current.text);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2500);
    } catch {
      const range = document.createRange();
      if (textRef.current) {
        range.selectNodeContents(textRef.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setStatus("failed");
    }
  };

  return (
    <div className="border border-line bg-surface rounded-lg overflow-hidden">
      <div role="tablist" aria-label={t.formats} className="flex border-b border-line overflow-x-auto no-scrollbar">
        {formats.map((f, i) => (
          <button
            key={f.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`${baseId}-tab-${f.id}`}
            aria-selected={i === active}
            aria-controls={`${baseId}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => select(i)}
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              const next = (active + (e.key === "ArrowRight" ? 1 : formats.length - 1)) % formats.length;
              select(next);
              tabRefs.current[next]?.focus();
            }}
            className={`relative shrink-0 px-5 min-h-[48px] font-sans text-[15px] transition-colors ${
              i === active
                ? "text-brand font-semibold after:absolute after:inset-x-3 after:bottom-[-1px] after:h-[2px] after:bg-brand"
                : "text-ink-2 hover:text-brand"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div id={`${baseId}-panel`} role="tabpanel" aria-labelledby={`${baseId}-tab-${current.id}`} className="p-5 sm:p-6">
        <pre
          ref={textRef}
          className={`whitespace-pre-wrap break-words text-ink ${
            current.mono ? "font-mono text-[13px] leading-relaxed" : "font-serif text-[16px] leading-relaxed"
          }`}
        >
          {current.text}
        </pre>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <button type="button" onClick={onCopy} className="btn btn-quiet btn-sm">
            {status === "copied" ? <Check size={16} weight="bold" aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {status === "copied" ? t.copied : t.copy}
          </button>
          <p aria-live="polite" className="meta">
            {status === "failed" ? t.failed : <span className="sr-only">{status === "copied" ? t.copied : ""}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
