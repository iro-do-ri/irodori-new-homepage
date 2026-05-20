import type { Metadata } from "next";
import { Suspense } from "react";
import Main from "./parts/Main";
import Contact from "./parts/Contact";
import {client} from "./lib/Micro";

export const metadata: Metadata = {
  title: {
    absolute: "千葉県船橋のホームページ制作｜SEO設計・WordPress・コーポレートサイト【イロドリ】",
  },
  description:
    "千葉県船橋市でホームページ制作をお探しなら、地元密着のフリーランスデザイナー・イロドリへ。10万円からホームページを制作・相談無料。担当者が一人で最初から最後まで対応するので、話が早くて丁寧です。集客につながるSEO対応サイトをご提供します。",
  keywords: ["千葉", "船橋", "千葉県船橋", "ホームページ制作", "千葉 ホームページ制作", "Webデザイン", "WordPress", "SEO対策", "コーポレートサイト", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp" },
  openGraph: {
    title: "千葉県船橋のホームページ制作｜SEO設計・WordPress・コーポレートサイト【イロドリ】",
    description:
      "千葉県船橋市でホームページ制作をお探しなら、地元密着のフリーランスデザイナー・イロドリへ。10万円からホームページを制作・相談無料。担当者が一人で最初から最後まで対応するので、話が早くて丁寧です。集客につながるSEO対応サイトをご提供します。",
    url: "https://iro-do-ri.jp",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "千葉県船橋のホームページ制作｜SEO設計・WordPress・コーポレートサイト【イロドリ】",
    description:
      "千葉県船橋市でホームページ制作をお探しなら、地元密着のフリーランスデザイナー・イロドリへ。10万円からホームページを制作・相談無料。集客につながるSEO対応サイトをご提供します。",
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