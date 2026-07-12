"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { LogoMark } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/authors", label: "Authors" },
  { href: "/book-series", label: "Book Series" },
  { href: "/for-authors", label: "For Authors" },
  { href: "/publishing-services", label: "Publishing Services" },
  { href: "/distribution", label: "Distribution" },
  { href: "/policies", label: "Policies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_#e2e2e2]" : "border-b border-[#e2e2e2]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Panorama Scholarly Books — Home"
          >
            <LogoMark height={38} className="transition-opacity group-hover:opacity-70" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[15px] font-semibold tracking-tight text-[#111111] group-hover:text-[#444444] transition-colors">
                Panorama Scholarly Books
              </span>
              <span className="text-[10px] tracking-[0.15em] uppercase text-[#888888] font-serif mt-0.5">
                Academic Book Publishing
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0" aria-label="Main navigation">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const className = `px-3 py-1 text-[13px] font-serif transition-colors ${
                active
                  ? "text-[#111111] underline underline-offset-4"
                  : "text-[#555555] hover:text-[#111111]"
              }`;
              // /authors is a newly added route; a client-side transition
              // into it can 404 against a stale cached route manifest on
              // this static host, so force a full navigation for it.
              return link.href === "/authors" ? (
                <a key={link.href} href={`${link.href}/`} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Submit Inquiry CTA (desktop) */}
          <Link
            href="/contact"
            className="hidden xl:inline-block text-[12px] tracking-[0.08em] uppercase font-serif border border-[#111111] px-4 py-2 text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
          >
            Submit Inquiry
          </Link>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-[#111111]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-[#e2e2e2] bg-white">
          <nav className="max-w-[1400px] mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const className = `py-2.5 text-base font-serif border-b border-[#f0f0f0] last:border-0 transition-colors ${
                active ? "text-[#111111]" : "text-[#555555] hover:text-[#111111]"
              }`;
              return link.href === "/authors" ? (
                <a key={link.href} href={`${link.href}/`} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-3 text-[12px] tracking-[0.08em] uppercase font-serif border border-[#111111] px-4 py-3 text-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
            >
              Submit Inquiry
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
