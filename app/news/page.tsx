import type { Metadata } from "next";
import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import { client } from "../lib/Micro";
import styles from "./News.module.scss";
import Breadcrumb from "../parts/Breadcrumb";

export const metadata: Metadata = {
  title: "更新情報｜千葉県船橋のホームページ制作会社イロドリ",
  description:
    "千葉県船橋のホームページ制作会社イロドリからの最新情報・お知らせをご覧いただけます。",
  keywords: ["船橋", "千葉県", "千葉県船橋", "更新情報", "お知らせ", "ホームページ制作", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/news" },
  openGraph: {
    title: "更新情報｜千葉県船橋のホームページ制作会社イロドリ",
    description:
      "千葉県船橋のホームページ制作会社イロドリからの最新情報・お知らせをご覧いただけます。",
    url: "https://iro-do-ri.jp/news",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "更新情報｜千葉県船橋のホームページ制作会社イロドリ",
    description:
      "千葉県船橋のホームページ制作会社イロドリからの最新情報・お知らせをご覧いただけます。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

type NewsPost = {
  id: string;
  title: string;
  category: string;
  img: { url: string; width: number; height: number };
  publishedAt: string;
};

export default async function NewsPage() {
  let posts: NewsPost[] = [];
  try {
    const data = await client.get({
      endpoint: "news",
      queries: { limit: 100 },
    });
    posts = data.contents;
  } catch {
    posts = [];
  }

  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>NEWS</span>
          <h1 className={styles.title}>更新情報</h1>
          <p className={styles.description}>
            イロドリからの最新情報・お知らせをお届けします。
          </p>
        </div>

        <Breadcrumb items={[{ label: "更新情報" }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
            { "@type": "ListItem", position: 2, name: "更新情報", item: "https://iro-do-ri.jp/news" },
          ],
        }) }} />

        {/* ── 更新情報一覧 ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>UPDATES</span>
            <h2 className={styles.sectionTitle}>最新の更新情報</h2>
            {posts.length > 0 ? (
              <ul className={styles.newsList}>
                {posts.map((post) => (
                  <li key={post.id} className={styles.newsItem}>
                    <Link href={`/news/${post.id}`} className={styles.newsLink}>
                      <span className={styles.newsImg}>
                        <img
                          src={post.img?.url ?? "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/eaa762c22949424c87cd0aadf582116e/no-image.png"}
                          alt={post.title}
                        />
                      </span>
                      <span className={styles.newsCat}>{post.category}</span>
                      <div className={styles.newsMeta}>
                        <time className={styles.newsDate}>
                          {new Date(post.publishedAt).toLocaleDateString("ja-JP")}
                        </time>
                        <p className={styles.newsTitle}>{post.title}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.empty}>現在、更新情報を準備中です。</p>
            )}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <span className={styles.ctaLabel}>CONTACT</span>
          <h2 className={styles.ctaTitle}>
            ホームページ制作の<br />ご相談はお気軽に
          </h2>
          <p className={styles.ctaDesc}>
            まずはお気軽にご相談ください。<br />
            要件整理から提案・見積まで、無料でご対応しています。
          </p>
          <Link href={URL.Contact} className={`${styles.box_button} inline-block`} aria-label="無料相談ページへ移動します"><span className={`${styles.background_button} ${styles.contact_button}`}></span><span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span></Link>
        </div>

      </div>
    </section>
  );
}
