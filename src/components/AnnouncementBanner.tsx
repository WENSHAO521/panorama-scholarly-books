"use client";

import { getActiveAnnouncement } from "@/data/announcements";

export default function AnnouncementBanner() {
  const announcement = getActiveAnnouncement();
  if (!announcement) return null;

  return (
    <div className="bg-[#111111] border-b border-[#111111]">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-4">
        <p className="font-serif text-xs md:text-sm text-white/90 leading-relaxed">
          <span className="uppercase tracking-[0.1em] text-white mr-2">
            Notice — {announcement.title}
          </span>
          Effective {announcement.effectiveDate}. {announcement.reason}
          {announcement.transition && <> {announcement.transition}</>} For questions concerning an existing quotation or project, please contact{" "}
          <a href="mailto:books@panorama-sg.com" className="underline underline-offset-2 hover:text-white">
            books@panorama-sg.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
