import type { Metadata } from "next";
import Header from "../parts/Header";

export const metadata: Metadata = {
  title: "会社概要｜船橋のホームページ制作会社イロドリ",
  description:
    "千葉県船橋市のホームページ制作会社イロドリの会社概要ページ。船橋市を拠点に、ホームページ・WEBサイト制作・チラシデザイン・動画制作を行っています。お気軽にご相談ください。",
  alternates: { canonical: "https://iro-do-ri.jp/company" },
  openGraph: {
    title: "会社概要｜船橋のホームページ制作会社イロドリ",
    description:
      "千葉県船橋市のホームページ制作会社イロドリの会社概要ページ。船橋市を拠点に、ホームページ・WEBサイト制作・チラシデザイン・動画制作を行っています。",
    url: "https://iro-do-ri.jp/company",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "会社概要｜船橋のホームページ制作会社イロドリ",
    description:
      "千葉県船橋市のホームページ制作会社イロドリの会社概要。ホームページ・WEBサイト制作・チラシ・動画制作を提供。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
    { "@type": "ListItem", position: 2, name: "会社情報", item: "https://iro-do-ri.jp/company" },
  ],
};

export default function Home() {
  return (
    <section className="flex">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </section>
  );
}