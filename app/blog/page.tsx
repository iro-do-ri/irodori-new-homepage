import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import { client } from "../lib/Micro";
import styles from "./Blog.module.scss";

type BlogPost = {
  id: string;
  title: string;
  category: string;
  img: { url: string; width: number; height: number };
  publishedAt: string;
};

export default async function BlogPage() {
  const data = await client.get({
    endpoint: "news",
    queries: { limit: 20 },
  });
  const posts: BlogPost[] = data.contents;

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

        {/* ── 一覧 ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>ALL POSTS</span>
            <h2 className={styles.sectionTitle}>すべての記事</h2>
            <div className={styles.grid}>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.id} className={styles.card}>
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
                  </div>
                ))
              ) : (
                <p className={styles.empty}>現在、ブログ記事を準備中です。</p>
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
