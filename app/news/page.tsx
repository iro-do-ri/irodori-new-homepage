import type { Metadata } from "next";
import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import { client } from "../lib/Micro";
import { getAllPosts } from "../lib/posts";
import styles from "./News.module.scss";
import Breadcrumb from "../parts/Breadcrumb";

export const metadata: Metadata = {
  title: "新着情報｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
  description:
    "千葉県船橋のホームページ制作会社イロドリが運営する新着情報。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
  keywords: ["船橋", "千葉県", "千葉県船橋", "新着情報", "ホームページ制作", "Webデザイン", "SEO対策", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/news" },
  openGraph: {
    title: "新着情報｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
    description:
      "千葉県船橋のホームページ制作会社イロドリが運営する新着情報。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
    url: "https://iro-do-ri.jp/news",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "新着情報｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
    description:
      "千葉県船橋のホームページ制作会社イロドリが運営するブログ。Webデザイン・ホームページ制作・SEO対策の情報を発信。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

type BlogPost = {
  id: string;
  title: string;
  category: string;
  img: { url: string; width: number; height: number };
  publishedAt: string;
};

export default async function BlogPage() {
  // CMS記事
  let cmsPosts: BlogPost[] = [];
  try {
    const data = await client.get({
      endpoint: "news",
      queries: { limit: 20 },
    });
    cmsPosts = data.contents;
  } catch {
    cmsPosts = [];
  }

  // ローカルMarkdown記事
  const localPosts = getAllPosts();

  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>BLOG</span>
          <h1 className={styles.title}>ブログ</h1>
          <p className={styles.description}>
            WEBデザインや制作の現場から、役立つ情報をお届けします。
          </p>
        </div>

        <Breadcrumb items={[{ label: "新着情報" }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
            { "@type": "ListItem", position: 2, name: "新着情報", item: "https://iro-do-ri.jp/news" },
          ],
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "News",
          name: "千葉県船橋のホームページ制作 イロドリ 新着情報",
          description: "千葉県船橋のホームページ制作会社イロドリが運営する新着情報。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
          url: "https://iro-do-ri.jp/news",
          publisher: {
            "@type": "Organization",
            name: "イロドリ",
            url: "https://iro-do-ri.jp",
            logo: { "@type": "ImageObject", url: "https://iro-do-ri.jp/og-image.png" },
          },
          newsPost: localPosts.map((post) => ({
            "@type": "newsPosting",
            headline: post.title,
            url: `https://iro-do-ri.jp/blog/${post.slug}`,
            datePublished: post.date ?? new Date().toISOString(),
          })),
        }) }} />

        {/* ── ローカル記事一覧 ── */}
        {localPosts.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <span className={styles.sectionLabel}>ARTICLES</span>
              <h2 className={styles.sectionTitle}>ホームページ制作コラム</h2>
              <div className={styles.grid}>
                {localPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{post.category}</span>
                        {post.date && (
                          <span className={styles.cardDate}>
                            {new Date(post.date).toLocaleDateString("ja-JP", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                            })}
                          </span>
                        )}
                      </div>
                      <p className={styles.cardTitle}>{post.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CMS記事一覧 ── */}
        <div className={styles.newsSection}>
          <div className={styles.newsSectionInner}>
            <p className={styles.newsLabel}>OTHER POSTS</p>
            <h2 className={styles.newsSectionTitle}>他の記事</h2>
            {cmsPosts.length > 0 ? (
              <ul className={styles.newsList}>
                {cmsPosts.map((post) => (
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
