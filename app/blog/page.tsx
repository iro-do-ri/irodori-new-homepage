import type { Metadata } from "next";
import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import { getAllPosts } from "../lib/posts";
import styles from "./Blog.module.scss";
import Breadcrumb from "../parts/Breadcrumb";

const PER_PAGE = 15;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}): Promise<Metadata> {
  const { page: pageParam } = await searchParams;
  const page = Number(pageParam) || 1;
  const canonical =
    page === 1
      ? "https://iro-do-ri.jp/blog"
      : `https://iro-do-ri.jp/blog?page=${page}`;

  return {
    title:
      page === 1
        ? "ブログ｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】"
        : `ブログ（${page}ページ目）｜千葉県船橋のホームページ制作【イロドリ】`,
    description:
      "千葉県船橋のホームページ制作会社イロドリが運営するブログ。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
    keywords: ["船橋", "千葉県", "千葉県船橋", "ブログ", "ホームページ制作", "Webデザイン", "SEO対策", "イロドリ"],
    alternates: { canonical },
    openGraph: {
      title: "ブログ｜千葉県船橋のホームページ制作・WebデザインTips【イロドリ】",
      description:
        "千葉県船橋のホームページ制作会社イロドリが運営するブログ。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
      url: canonical,
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
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, Number(pageParam) || 1);

  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / PER_PAGE);
  const posts = allPosts.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "千葉県船橋のホームページ制作 イロドリ ブログ",
          description: "千葉県船橋のホームページ制作会社イロドリが運営するブログ。Webデザイン・ホームページ制作・SEO対策など、中小企業の集客に役立つ情報を発信しています。",
          url: "https://iro-do-ri.jp/blog",
          publisher: {
            "@type": "Organization",
            name: "イロドリ",
            url: "https://iro-do-ri.jp",
            logo: { "@type": "ImageObject", url: "https://iro-do-ri.jp/og-image.png" },
          },
          blogPost: allPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: `https://iro-do-ri.jp/blog/${post.slug}`,
            datePublished: post.date ?? new Date().toISOString(),
          })),
        }) }} />

        {/* ── 記事一覧 ── */}
        {posts.length > 0 && (
          <div className={styles.section}>
            <div className={styles.sectionInner}>
              <span className={styles.sectionLabel}>ARTICLES</span>
              <h2 className={styles.sectionTitle}>ホームページ制作コラム</h2>
              <div className={styles.grid}>
                {posts.map((post) => (
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

              {/* ── ページネーション ── */}
              {totalPages > 1 && (
                <nav className={styles.pagination} aria-label="ページナビゲーション">
                  {currentPage > 1 && (
                    <Link
                      href={currentPage === 2 ? "/blog" : `/blog?page=${currentPage - 1}`}
                      className={styles.pageBtn}
                    >
                      ← 前のページ
                    </Link>
                  )}
                  <div className={styles.pageNumbers}>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <Link
                        key={p}
                        href={p === 1 ? "/blog" : `/blog?page=${p}`}
                        className={`${styles.pageNumber} ${p === currentPage ? styles.pageNumberActive : ""}`}
                        aria-current={p === currentPage ? "page" : undefined}
                      >
                        {p}
                      </Link>
                    ))}
                  </div>
                  {currentPage < totalPages && (
                    <Link
                      href={`/blog?page=${currentPage + 1}`}
                      className={styles.pageBtn}
                    >
                      次のページ →
                    </Link>
                  )}
                </nav>
              )}
            </div>
          </div>
        )}

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
