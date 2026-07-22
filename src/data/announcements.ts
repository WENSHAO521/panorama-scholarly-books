export interface Announcement {
  id: string;
  title: string;
  titleZh?: string;
  effectiveDate: string;
  effectiveDateZh?: string;
  /** Explains why the change is happening — shown to visitors so a fee change is never a silent surprise. */
  reason: string;
  reasonZh?: string;
  /** Grandfathering / transitional terms for anyone mid-quotation when the change lands. */
  transition?: string;
  transitionZh?: string;
  /** Banner stops rendering after this date — no manual removal step needed. */
  expiresAt: string;
}

// Newest first. To announce a future price or policy change, add a new
// entry here — the homepage, Publishing Services, and Contact pages pick up
// whichever entry is current automatically.
export const announcements: Announcement[] = [
  {
    id: "2026-08-fee-update",
    title: "Updated Book Publishing Fees",
    titleZh: "圖書出版費用更新",
    effectiveDate: "1 August 2026",
    effectiveDateZh: "2026年8月1日",
    reason:
      "The revised fees reflect the expanded scope of editorial screening, rights verification, publisher administration, bibliographic metadata management, ISBN assignment, production quality control, official publication records, digital archiving, and post-publication compliance coordination now included in each package.",
    reasonZh:
      "調整後的費用反映各方案現已涵蓋更廣泛的服務範圍，包括編輯審查、版權查核、出版管理、書目元數據管理、ISBN 分配、製作品質控管、正式出版紀錄、數位典藏，以及出版後的合規協調工作。",
    transition:
      "Formal written quotations issued on or before 31 July 2026 remain valid until 31 August 2026, provided the publishing agreement is signed and the required deposit or full payment is received within that period.",
    transitionZh:
      "凡於2026年7月31日或之前發出的正式書面報價，只要在期限內簽署出版協議並繳付所需訂金或全額款項，均可延續有效至2026年8月31日。",
    expiresAt: "2026-09-01T00:00:00Z",
  },
];

export function getActiveAnnouncement(): Announcement | undefined {
  const now = Date.now();
  return announcements.find((a) => now < new Date(a.expiresAt).getTime());
}
