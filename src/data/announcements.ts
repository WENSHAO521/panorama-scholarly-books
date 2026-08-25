export interface Announcement {
  id: string;
  title: string;
  titleZh?: string;
  titleZhHans?: string;
  effectiveDate: string;
  effectiveDateZh?: string;
  effectiveDateZhHans?: string;
  /** Explains why the change is happening — shown to visitors so a fee change is never a silent surprise. */
  reason: string;
  reasonZh?: string;
  reasonZhHans?: string;
  /** Grandfathering / transitional terms for anyone mid-quotation when the change lands. */
  transition?: string;
  transitionZh?: string;
  transitionZhHans?: string;
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
    titleZhHans: "图书出版费用更新",
    effectiveDate: "1 August 2026",
    effectiveDateZh: "2026年8月1日",
    effectiveDateZhHans: "2026年8月1日",
    reason:
      "The revised fees reflect the expanded scope of editorial screening, rights verification, publisher administration, bibliographic metadata management, ISBN assignment, production quality control, official publication records, digital archiving, and post-publication compliance coordination now included in each package.",
    reasonZh:
      "調整後的費用反映各方案現已涵蓋更廣泛的服務範圍，包括編輯審查、版權查核、出版管理、書目元數據管理、ISBN 分配、製作品質控管、正式出版紀錄、數位典藏，以及出版後的合規協調工作。",
    reasonZhHans:
      "调整后的费用反映各方案现已涵盖更广泛的服务范围，包括编辑审查、版权核查、出版管理、书目元数据管理、ISBN 分配、制作质量控制、正式出版记录、数字化存档，以及出版后的合规协调工作。",
    transition:
      "Formal written quotations issued on or before 31 July 2026 remain valid until 31 August 2026, provided the publishing agreement is signed and the required deposit or full payment is received within that period.",
    transitionZh:
      "凡於2026年7月31日或之前發出的正式書面報價，只要在期限內簽署出版協議並繳付所需訂金或全額款項，均可延續有效至2026年8月31日。",
    transitionZhHans:
      "凡于2026年7月31日或之前发出的正式书面报价，只要在期限内签署出版协议并缴付所需定金或全额款项，均可延续有效至2026年8月31日。",
    expiresAt: "2026-09-01T00:00:00Z",
  },
];

export function getActiveAnnouncement(): Announcement | undefined {
  const now = Date.now();
  return announcements.find((a) => now < new Date(a.expiresAt).getTime());
}
