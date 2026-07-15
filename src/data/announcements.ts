export interface Announcement {
  id: string;
  title: string;
  effectiveDate: string;
  /** Explains why the change is happening — shown to visitors so a fee change is never a silent surprise. */
  reason: string;
  /** Grandfathering / transitional terms for anyone mid-quotation when the change lands. */
  transition?: string;
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
    effectiveDate: "1 August 2026",
    reason:
      "The revised fees reflect the expanded scope of editorial screening, rights verification, publisher administration, bibliographic metadata management, ISBN assignment, production quality control, official publication records, digital archiving, and post-publication compliance coordination now included in each package.",
    transition:
      "Formal written quotations issued on or before 31 July 2026 remain valid until 31 August 2026, provided the publishing agreement is signed and the required deposit or full payment is received within that period.",
    expiresAt: "2026-09-01T00:00:00Z",
  },
];

export function getActiveAnnouncement(): Announcement | undefined {
  const now = Date.now();
  return announcements.find((a) => now < new Date(a.expiresAt).getTime());
}
