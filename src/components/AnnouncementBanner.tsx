"use client";

import { getActiveAnnouncement } from "@/data/announcements";
import { useLanguage } from "@/context/LanguageContext";
import { pickLocale } from "@/lib/locale";

const copy = {
  en: { notice: "Notice", effective: "Effective", questions: "For questions concerning an existing quotation or project, please contact" },
  "zh-Hant": { notice: "通知", effective: "生效日期", questions: "如對現有報價或項目有任何疑問，請聯絡" },
} as const;

export default function AnnouncementBanner() {
  const { locale } = useLanguage();
  const t = copy[locale];
  const announcement = getActiveAnnouncement();
  if (!announcement) return null;

  const title = pickLocale(announcement.title, announcement.titleZh, locale);
  const effectiveDate = pickLocale(announcement.effectiveDate, announcement.effectiveDateZh, locale);
  const reason = pickLocale(announcement.reason, announcement.reasonZh, locale);
  const transition = announcement.transition
    ? pickLocale(announcement.transition, announcement.transitionZh, locale)
    : undefined;

  return (
    <div className="bg-[#111111] border-b border-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-4">
        <p className="font-serif text-xs md:text-sm text-white/90 leading-relaxed">
          <span className="uppercase tracking-[0.1em] text-white mr-2">
            {t.notice} — {title}
          </span>
          {t.effective} {effectiveDate}. {reason}
          {transition && <> {transition}</>} {t.questions}{" "}
          <a href="mailto:books@panorama-sg.com" className="underline underline-offset-2 hover:text-white">
            books@panorama-sg.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
