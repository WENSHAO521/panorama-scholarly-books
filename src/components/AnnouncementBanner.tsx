"use client";

import { getActiveAnnouncement } from "@/data/announcements";
import { pickLocale, type Locale } from "@/lib/locale";

const copy = {
  en: { notice: "Notice", effective: "Effective", questions: "For questions concerning an existing quotation or project, please contact" },
  "zh-Hant": { notice: "通知", effective: "生效日期", questions: "如對現有報價或項目有任何疑問，請聯絡" },
  "zh-Hans": { notice: "通知", effective: "生效日期", questions: "如对现有报价或项目有任何疑问，请联系" },
} as const;

export default function AnnouncementBanner({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const announcement = getActiveAnnouncement();
  if (!announcement) return null;

  const title = pickLocale(announcement.title, announcement.titleZh, announcement.titleZhHans, locale);
  const effectiveDate = pickLocale(announcement.effectiveDate, announcement.effectiveDateZh, announcement.effectiveDateZhHans, locale);
  const reason = pickLocale(announcement.reason, announcement.reasonZh, announcement.reasonZhHans, locale);
  const transition = announcement.transition
    ? pickLocale(announcement.transition, announcement.transitionZh, announcement.transitionZhHans, locale)
    : undefined;

  return (
    <div className="bg-stone-soft border-b border-line" role="region" aria-label={t.notice}>
      <div className="site-container py-4">
        <p className="font-sans text-[14px] text-ink-2 leading-relaxed">
          <strong className="font-semibold text-ink mr-2">
            {t.notice} — {title}
          </strong>
          {t.effective} {effectiveDate}. {reason}
          {transition && <> {transition}</>} {t.questions}{" "}
          <a href="mailto:books@panorama-sg.com" className="link">
            books@panorama-sg.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
