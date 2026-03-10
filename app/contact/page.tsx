import type { Metadata } from "next";
import Header from "../parts/Header";
import Contact from "../parts/Contact";
import Breadcrumb from "../parts/Breadcrumb";
import styles from "../parts/_Contact.module.scss";

export const metadata: Metadata = {
  title: "お問い合わせ｜船橋のホームページ制作はイロドリへ",
  description:
    "船橋のホームページ制作会社イロドリへのお問い合わせページ。初回相談・見積もり無料。千葉・船橋を中心に全国のホームページ制作に対応。まずはお気軽にご相談ください。",
  alternates: { canonical: "https://iro-do-ri.jp/contact" },
  openGraph: {
    title: "お問い合わせ｜船橋のホームページ制作はイロドリへ",
    description:
      "船橋のホームページ制作会社イロドリへのお問い合わせページ。初回相談・見積もり無料。千葉・船橋を中心に全国のホームページ制作に対応。",
    url: "https://iro-do-ri.jp/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ｜船橋のホームページ制作はイロドリへ",
    description:
      "船橋のホームページ制作会社イロドリへのお問い合わせ。初回相談・見積もり無料。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
    { "@type": "ListItem", position: 2, name: "お問い合わせ", item: "https://iro-do-ri.jp/contact" },
  ],
};

export default function ContactPage() {
  return (
    <section className="flex">
      <Header />
      <div className={styles.pageWrapper}>
        <Breadcrumb items={[{ label: "お問い合わせ" }]} />
        <Contact />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </section>
  );
}
