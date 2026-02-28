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
  { href: URL.Contact, en: "CONTACT", ja: "お問い合わせ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ── デスクトップ サイドバー ── */}
      <header className={`${headerStyles.header} h-screen max-w-[195px] min-w-[195px] sm:flex hidden fixed flex-col`}>
        <div className="h-screen px-8 fixed grid grid-rows-9 min-w-[195px]">
          <div className="row-span-5 row-start-2 inline-flex flex-col">
            {navItems.map(item => (
              <p key={item.en} className="inline-block">
                <Link href={item.href} className="inline-flex flex-col mb-6">
                  <span className="mb-2">{item.en}</span>
                  <span>{item.ja}</span>
                </Link>
              </p>
            ))}
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
            {navItems.map(item => (
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