"use client";

import Link from "next/link";
import { useState } from "react";
import headerStyles from "./_Header.module.scss";
import { URL } from "../url/Url";

const navItems = [
  { href: URL.Home,    en: "HOME",    ja: "ホーム" },
  { href: URL.About,   en: "ABOUT",   ja: "イロドリについて" },
  { href: URL.Works,   en: "WORKS",   ja: "実績" },
  { href: URL.Blog,    en: "BLOG",    ja: "ブログ" },
  { href: URL.Price,   en: "PRICE",   ja: "料金" },
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
              <span className={headerStyles.brandTagline}>船橋のWebデザイン</span>
            </Link>
          </div>

          <nav className={headerStyles.sidebarNav}>
            {navItems.map(item => (
              <Link key={item.en} href={item.href} className={headerStyles.sidebarLink}>
                <span className={headerStyles.navEn}>{item.en}</span>
                <span className={headerStyles.navJa}>{item.ja}</span>
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
        <Link href={URL.Home} className={headerStyles.mobileLogo}>イロドリ</Link>
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
            {[...navItems, { href: URL.Contact, en: "CONTACT", ja: "お問い合わせ" }].map(item => (
              <Link
                key={item.en}
                href={item.href}
                className={headerStyles.drawerLink}
                onClick={() => setIsOpen(false)}
              >
                <span>{item.en}</span>
                <span>{item.ja}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
