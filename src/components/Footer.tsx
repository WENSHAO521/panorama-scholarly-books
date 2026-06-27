import Link from "next/link";

const quickLinks = [
  { href: "/books", label: "Books", external: false },
  { href: "/book-series", label: "Book Series", external: false },
  { href: "/for-authors", label: "For Authors", external: false },
  { href: "/publishing-services", label: "Publishing Services", external: false },
  { href: "/distribution", label: "Distribution", external: false },
  { href: "/about", label: "About", external: false },
  { href: "/contact", label: "Contact", external: false },
  { href: "https://posi.panorama-sg.com", label: "POSI · Scholarly Index", external: true },
];

const policyLinks = [
  { href: "/policies/publishing-ethics", label: "Publishing Ethics" },
  { href: "/policies/copyright", label: "Copyright and Licensing" },
  { href: "/policies/open-access", label: "Open Access Books" },
  { href: "/policies/ai-use-policy", label: "AI Use Policy" },
  { href: "/policies/plagiarism", label: "Plagiarism Policy" },
  { href: "/policies/authorship", label: "Authorship Policy" },
  { href: "/policies", label: "All Policies" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e2e2e2] bg-white mt-24">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="https://panorama-sg.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-5 group w-fit"
              aria-label="Panorama Scholarly Group"
            >
              <svg width="32" height="36" viewBox="95 90 195 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <g transform="translate(100, 100)">
                  <rect x="0" y="0" width="30" height="200" fill="#000000"/>
                  <path d="M30 0 H120 C150 0, 150 70, 120 70 H30 Z" fill="#E30613"/>
                  <path d="M0 100 H120 V130 H30 V150 H120 V200 H0 V170 H90 V150 H0 Z" fill="#000000"/>
                  <path d="M150 200 H50 V170 H150 V50 H180 V200 Z" fill="#000000"/>
                  <rect x="160" y="10" width="30" height="30" fill="#E30613"/>
                </g>
              </svg>
              <span className="font-serif text-[11px] tracking-[0.14em] uppercase text-[#888888] group-hover:text-[#555555] transition-colors">
                Panorama Scholarly Group
              </span>
            </a>
            <p className="font-serif text-xl font-semibold text-[#111111] mb-1">
              Panorama Scholarly Books
            </p>
            <p className="font-serif text-sm text-[#888888] mb-6 leading-relaxed">
              Academic Book Publishing Platform
            </p>
            <p className="font-serif text-sm text-[#555555] leading-relaxed mb-1">
              Room 1508, 15/F., Office Tower Two,<br />
              Grand Plaza, 625 Nathan Road,<br />
              Kowloon, Hong Kong
            </p>
            <a
              href="mailto:books@panorama-sg.com"
              className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
            >
              books@panorama-sg.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) =>
                link.external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
              Policies
            </p>
            <ul className="flex flex-col gap-2">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#888888] font-serif mb-4">
              Contact
            </p>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-serif text-xs text-[#888888] mb-0.5">General Inquiries</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <div>
                <p className="font-serif text-xs text-[#888888] mb-0.5">Publishing Inquiries</p>
                <a
                  href="mailto:books@panorama-sg.com"
                  className="font-serif text-sm text-[#555555] hover:text-[#111111] transition-colors"
                >
                  books@panorama-sg.com
                </a>
              </div>
              <div className="mt-2">
                <Link
                  href="/contact"
                  className="font-serif text-[12px] tracking-[0.08em] uppercase border border-[#111111] px-4 py-2 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors inline-block"
                >
                  Submit Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e2e2e2] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-serif text-xs text-[#888888]">
            &copy; {year} Panorama Scholarly Group Ltd. All rights reserved.
          </p>
          <p className="font-serif text-xs text-[#888888]">
            Panorama Scholarly Books is an imprint of Panorama Scholarly Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
