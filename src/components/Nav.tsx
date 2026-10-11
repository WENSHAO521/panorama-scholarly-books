"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { List, MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import { LogoMark } from "@/components/Logo";
import LanguageMenu from "@/components/LanguageMenu";
import SearchDialog from "@/components/SearchDialog";
import { getLocaleFromPathname, localeHref, stripLocalePrefix } from "@/lib/locale";
import { primaryNav, secondaryNav, isActive, type NavItem } from "@/lib/nav";

const copy = {
  en: { tagline: "Academic Book Publishing", search: "Search", menu: "Menu", close: "Close menu", skip: "Skip to content", more: "More" },
  "zh-Hant": { tagline: "學術圖書出版", search: "搜尋", menu: "選單", close: "關閉選單", skip: "跳至主要內容", more: "更多" },
  "zh-Hans": { tagline: "学术图书出版", search: "搜索", menu: "菜单", close: "关闭菜单", skip: "跳至主要内容", more: "更多" },
} as const;

// /authors is a route added after the first deploy; a client-side transition
// into it can 404 against a stale cached route manifest on this static host,
// so it uses a full navigation.
function NavLink({ item, href, className, children, current }: {
  item: NavItem;
  href: string;
  className: string;
  children: ReactNode;
  current: boolean;
}) {
  const props = { className, "aria-current": current ? ("page" as const) : undefined };
  return item.hardNav ? (
    <a href={`${href}/`} {...props}>{children}</a>
  ) : (
    <Link href={href} {...props}>{children}</Link>
  );
}

export default function Nav() {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPathname(pathname);
  const path = stripLocalePrefix(pathname).replace(/\/$/, "") || "/";
  const t = copy[locale];
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 4);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close overlays on navigation (adjusting state during render, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setSearchOpen(false);
  }

  // "/" opens search from anywhere except while typing in a field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      const typing = el.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName);
      if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main" className="skip-link">{t.skip}</a>
      <header
        className={`sticky top-0 z-40 bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/85 border-b transition-colors duration-200 ${
          scrolled || menuOpen ? "border-line" : "border-transparent"
        }`}
      >
        <div className="site-container">
          <div className="flex items-center justify-between gap-6 h-16 lg:h-[76px]">
            <Link
              href={localeHref("/", locale)}
              className="flex items-center gap-3 shrink-0 group rounded-sm"
              aria-label="Panorama Scholarly Books — Home"
            >
              <LogoMark height={34} />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-[17px] lg:text-[18px] font-semibold tracking-[-0.005em] text-forest">
                  Panorama Scholarly Books
                </span>
                <span className="hidden sm:block font-sans text-[11px] tracking-[0.14em] uppercase text-ink-3 mt-1.5">
                  {t.tagline}
                </span>
              </span>
            </Link>

            <nav className="hidden xl:block" aria-label="Main">
              <ul className="flex items-center gap-1 xl:gap-2">
                {primaryNav.map((item) => {
                  const active = isActive(item, path);
                  return (
                    <li key={item.href}>
                      <NavLink
                        item={item}
                        href={localeHref(item.href, locale)}
                        current={active}
                        className={`relative inline-flex items-center h-10 px-3 font-sans text-[15px] whitespace-nowrap transition-colors rounded-sm after:absolute after:left-3 after:right-3 after:-bottom-[1px] after:h-[2px] after:transition-colors ${
                          active
                            ? "text-forest font-semibold after:bg-gold"
                            : "text-ink-2 font-medium hover:text-forest after:bg-transparent hover:after:bg-line-strong"
                        }`}
                      >
                        {item.label[locale]}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center gap-2 h-9 px-2.5 rounded-sm font-sans text-[14px] font-medium text-ink-2 hover:text-forest hover:bg-stone-soft transition-colors"
                aria-haspopup="dialog"
                aria-keyshortcuts="/"
              >
                <MagnifyingGlass size={18} aria-hidden="true" />
                <span className="hidden xl:inline">{t.search}</span>
                <span className="sr-only xl:hidden">{t.search}</span>
                <kbd className="hidden xl:inline-flex items-center justify-center w-5 h-5 text-[11px] font-sans border border-line rounded-sm text-ink-3">/</kbd>
              </button>
              <div className="hidden sm:block">
                <LanguageMenu />
              </div>
              <button
                type="button"
                className="xl:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-sm text-ink hover:bg-stone-soft"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? t.close : t.menu}
              >
                {menuOpen ? <X size={22} aria-hidden="true" /> : <List size={22} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / tablet menu: full-height sheet under the bar. The inline
            nav needs ≥1280px so longer languages (e.g. German) never overflow. */}
        <div
          id="mobile-menu"
          hidden={!menuOpen}
          className="xl:hidden fixed inset-x-0 top-16 lg:top-[76px] bottom-0 bg-paper border-t border-line overflow-y-auto"
        >
          <nav className="site-container py-6" aria-label="Main">
            <ul>
              {primaryNav.map((item) => {
                const active = isActive(item, path);
                return (
                  <li key={item.href} className="border-b border-line">
                    <NavLink
                      item={item}
                      href={localeHref(item.href, locale)}
                      current={active}
                      className={`flex items-center justify-between min-h-[56px] font-serif text-[22px] ${
                        active ? "text-forest" : "text-ink"
                      }`}
                    >
                      {item.label[locale]}
                      {active && <span className="rule-gold !w-6" aria-hidden="true" />}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <p className="eyebrow mt-8 mb-2">{t.more}</p>
            <ul className="grid grid-cols-2 gap-x-6">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    href={localeHref(item.href, locale)}
                    current={isActive(item, path)}
                    className="flex items-center min-h-[44px] font-sans text-[16px] text-ink-2 hover:text-forest aria-[current=page]:text-forest aria-[current=page]:font-semibold"
                  >
                    {item.label[locale]}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <LanguageMenu inline />
            </div>
          </nav>
        </div>
      </header>
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} locale={locale} />
    </>
  );
}
