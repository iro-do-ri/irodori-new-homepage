import Link from "next/link";
import footer from "./Footer.module.scss";
import { URL } from "../url/Url";

const navLinks = [
  { en: "HOME", ja: "ホーム", href: URL.Home },
  { en: "ABOUT", ja: "イロドリについて", href: URL.About },
  { en: "WORKS", ja: "実績", href: URL.Works },
  { en: "BLOG", ja: "ブログ", href: URL.Blog },
  { en: "PRICE", ja: "料金", href: URL.Price },
  { en: "CONTACT", ja: "お問い合わせ", href: URL.Contact },
];

export default function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.inner}>
        <div className={footer.top}>
          <div className={footer.brand}>
            <p className={footer.name}>IRODORI</p>
            <p className={footer.tagline}>船橋で魅力を伝えるWEBデザイン・ホームページ制作会社</p>
          </div>
          <nav className={footer.nav}>
            {navLinks.map((link) => (
              <Link key={link.en} href={link.href}>
                <span>{link.en}</span>
                <span>{link.ja}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className={footer.bottom}>
          <p className={footer.copy}>© {new Date().getFullYear()} イロドリ All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
