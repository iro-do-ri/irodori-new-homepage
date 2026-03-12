import type { Metadata } from "next";
import Header from "./parts/Header";
import Main from "./parts/Main";
import Contact from "./parts/Contact";
import {client} from "./lib/Micro";

export const metadata: Metadata = {
  title: {
    absolute: "千葉県船橋 ホームページ制作｜格安10万円〜のWebデザイン会社【イロドリ】",
  },
  description:
    "千葉県船橋市のホームページ制作会社イロドリ。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。中小企業・個人事業主のホームページ制作はお気軽にご相談ください。",
  keywords: ["船橋", "千葉県", "千葉県船橋市", "ホームページ制作", "Webデザイン", "WordPress", "SEO対策", "コーポレートサイト", "イロドリ", "格安"],
  alternates: { canonical: "https://iro-do-ri.jp" },
  openGraph: {
    title: "千葉県船橋 ホームページ制作｜格安10万円〜のWebデザイン会社【イロドリ】",
    description:
      "千葉県船橋市のホームページ制作会社イロドリ。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。中小企業・個人事業主のホームページ制作はお気軽にご相談ください。",
    url: "https://iro-do-ri.jp",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "千葉県船橋 ホームページ制作｜格安10万円〜のWebデザイン会社【イロドリ】",
    description:
      "千葉県船橋市のホームページ制作会社イロドリ。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default async function Page() {
    const [newsData, worksData] = await Promise.all([
        client.get({ endpoint: "news", queries: { limit: 5 } }),
        client.get({ endpoint: "works", queries: { limit: 10 } }).catch(() => ({ contents: [] })),
    ]);
  return (
  <section className="relative">
      <Header />
      <Main news={newsData.contents} works={worksData.contents} />
      <Contact />
  </section>
  );
}