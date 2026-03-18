"use client";

import Link from "next/link";
import { useState } from "react";
import headerStyles from "./Header.module.scss";
import { URL } from "../url/Url";

const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
);
const AboutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
  </svg>
);
const WorksIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
  </svg>
);
const BlogIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const NewsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
    <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>
  </svg>
);
const PriceIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
    <circle cx="7" cy="7" r="1" fill="currentColor"/>
  </svg>
);
const ContactIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const navItems = [
  { href: URL.Home,    en: "HOME",    ja: "ホーム",          icon: <HomeIcon /> },
  { href: URL.About,   en: "ABOUT",   ja: "イロドリについて", icon: <AboutIcon /> },
  { href: URL.Works,   en: "WORKS",   ja: "実績",            icon: <WorksIcon /> },
  { href: URL.Blog,    en: "BLOG",    ja: "ブログ",           icon: <BlogIcon /> },
  { href: URL.News,    en: "NEWS",    ja: "更新情報",         icon: <NewsIcon /> },
  { href: URL.Price,   en: "PRICE",   ja: "料金",            icon: <PriceIcon /> },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── デスクトップ サイドバー ── */}
      <header className={`${headerStyles.header} hidden sm:block`}>
        <div className={headerStyles.sidebar}>
          <div className={headerStyles.sidebarTop}>
            <Link href={URL.Home} className={headerStyles.sidebarBrand}>
              <span className={headerStyles.brandName}>IRODORI</span>
              <span className={headerStyles.brandTagline}>千葉県船橋のホームページ制作</span>
            </Link>
          </div>

          <nav className={headerStyles.sidebarNav}>
            {navItems.map(item => (
              <Link key={item.en} href={item.href} className={headerStyles.sidebarLink}>
                <span className={headerStyles.navIcon}>{item.icon}</span>
                <span className={headerStyles.navText}>
                  <span className={headerStyles.navEn}>{item.en}</span>
                  <span className={headerStyles.navJa}>{item.ja}</span>
                </span>
              </Link>
            ))}
          </nav>

          <div className={headerStyles.sidebarBottom}>
            <Link href={URL.Contact} className={headerStyles.sidebarCta}>
              お問い合わせ
            </Link>
          </div>
        </div>
      </header>

      {/* ── モバイル トップバー ── */}
      <div className={`${headerStyles.mobileBar} flex sm:hidden`}>
        <Link href={URL.Home} className={headerStyles.mobileLogo}>IRODORI</Link>
        <button
          onClick={() => setIsOpen(o => !o)}
          className={headerStyles.hamburger}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <span className={isOpen ? headerStyles.bar1Active : headerStyles.bar1} />
          <span className={isOpen ? headerStyles.bar2Active : headerStyles.bar2} />
          <span className={isOpen ? headerStyles.bar3Active : headerStyles.bar3} />
        </button>
      </div>

      {/* ── モバイル ドロワー ── */}
      {isOpen && (
        <div
          className={`${headerStyles.overlay} sm:hidden`}
          onClick={() => setIsOpen(false)}
        >
          <nav
            className={headerStyles.drawer}
            onClick={e => e.stopPropagation()}
          >
            {[...navItems, { href: URL.Contact, en: "CONTACT", ja: "お問い合わせ", icon: <ContactIcon /> }].map(item => (
              <Link
                key={item.en}
                href={item.href}
                className={headerStyles.drawerLink}
                onClick={() => setIsOpen(false)}
              >
                <span className={headerStyles.navIcon}>{item.icon}</span>
                <span className={headerStyles.drawerLinkText}>
                  <span>{item.en}</span>
                  <span>{item.ja}</span>
                </span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
