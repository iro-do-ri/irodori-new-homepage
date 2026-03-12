import type { Metadata } from "next";
import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import { client } from "../lib/Micro";
import { getAllPosts } from "../lib/posts";
import styles from "./Blog.module.scss";
import Breadcrumb from "../parts/Breadcrumb";

export const metadata: Metadata = {
  title: "ブログ｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
  description:
    "千葉県船橋のホームページ制作会社イロドリが運営するブログ。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
  keywords: ["船橋", "千葉県", "千葉県船橋市", "ブログ", "ホームページ制作", "Webデザイン", "SEO対策", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/blog" },
  openGraph: {
    title: "ブログ｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
    description:
      "千葉県船橋のホームページ制作会社イロドリが運営するブログ。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
    url: "https://iro-do-ri.jp/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ブログ｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
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

        <Breadcrumb items={[{ label: "ブログ" }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
            { "@type": "ListItem", position: 2, name: "ブログ", item: "https://iro-do-ri.jp/blog" },
          ],
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
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>OTHER POSTS</span>
            <h2 className={styles.sectionTitle}>他の記事</h2>
            <div className={styles.grid}>
              {cmsPosts.length > 0 ? (
                cmsPosts.map((post) => (
                  <div key={post.id} className={styles.card}>
                    <Link href={`/news/${post.id}`} >
                    <div className={styles.cardImage}>
                      <img
                        src={post.img?.url ?? "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/eaa762c22949424c87cd0aadf582116e/no-image.png"}
                        alt={post.title}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.cardMeta}>
                        <span className={styles.cardCategory}>{post.category}</span>
                        <span className={styles.cardDate}>
                          {new Date(post.publishedAt).toLocaleDateString("ja-JP", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className={styles.cardTitle}>{post.title}</p>
                    </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className={styles.empty}>現在、更新情報を準備中です。</p>
              )}
            </div>
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
          <Link
            href={URL.Contact}
            className={`${styles.ctaButton} sm:px-12 px-8 sm:py-6 py-4`}
            aria-label="お問い合わせページへ移動します"
          >
            無料で相談してみる
          </Link>
        </div>

      </div>
    </section>
  );
}
