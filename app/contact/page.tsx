import type { Metadata } from "next";
import Header from "../parts/Header";
import Contact from "../parts/Contact";

export const metadata: Metadata = {
  title: "お問い合わせ｜ホームページ制作【イロドリ・船橋】",
  description:
    "ホームページ制作・Webデザインのご相談はこちら。初回相談無料。船橋・千葉を中心に全国対応可能。まずはお気軽にご連絡ください。",
  alternates: { canonical: "https://iro-do-ri.jp/contact" },
  openGraph: {
    title: "お問い合わせ｜ホームページ制作【イロドリ・船橋】",
    description:
      "ホームページ制作・Webデザインのご相談はこちら。初回相談無料。船橋・千葉を中心に全国対応可能。まずはお気軽にご連絡ください。",
    url: "https://iro-do-ri.jp/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "お問い合わせ｜ホームページ制作【イロドリ・船橋】",
    description:
      "ホームページ制作・Webデザインのご相談はこちら。初回相談無料。船橋・千葉を中心に全国対応可能。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <section className="flex">
      <Header />
      <Contact />
    </section>
  );
}
