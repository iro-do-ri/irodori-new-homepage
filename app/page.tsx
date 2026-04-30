import type { Metadata } from "next";
import { Suspense } from "react";
import Main from "./parts/Main";
import Contact from "./parts/Contact";
import {client} from "./lib/Micro";

export const metadata: Metadata = {
  title: {
    absolute: "千葉・船橋のホームページ制作｜SEO設計・WordPress・コーポレートサイト【イロドリ】",
  },
  description:
    "千葉・船橋のホームページ制作会社イロドリ。千葉のホームページ制作を10万円〜でご提供。WordPress・SEO設計・コーポレートサイト制作まで一気通貫で対応。中小企業・個人事業主のホームページ制作はお気軽にご相談ください。",
  keywords: ["千葉", "船橋", "千葉・船橋", "ホームページ制作", "千葉 ホームページ制作", "Webデザイン", "WordPress", "SEO対策", "コーポレートサイト", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp" },
  openGraph: {
    title: "千葉・船橋のホームページ制作｜SEO設計・WordPress・コーポレートサイト【イロドリ】",
    description:
      "千葉・船橋のホームページ制作会社イロドリ。千葉のホームページ制作を10万円〜でご提供。WordPress・SEO設計・コーポレートサイト制作まで一気通貫で対応。中小企業・個人事業主のホームページ制作はお気軽にご相談ください。",
    url: "https://iro-do-ri.jp",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "千葉・船橋のホームページ制作｜SEO設計・WordPress・コーポレートサイト【イロドリ】",
    description:
      "千葉・船橋のホームページ制作会社イロドリ。千葉のホームページ制作を10万円〜でご提供。WordPress・SEO設計・コーポレートサイト制作まで対応。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default async function Page() {
    const worksData = await client.get({ endpoint: "works", queries: { limit: 10 } }).catch(() => ({ contents: [] }));
  return (
  <section className="relative">
      <Main works={worksData.contents} />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
  </section>
  );
}