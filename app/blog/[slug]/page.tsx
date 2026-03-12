import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/app/parts/Header";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "@/app/lib/posts";
import styles from "./PostDetail.module.scss";
import Breadcrumb from "@/app/parts/Breadcrumb";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const title = `${post.title}｜船橋のホームページ制作 イロドリ`;
  const url = `https://iro-do-ri.jp/blog/${slug}`;
  return {
    title: { absolute: title },
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const dateFormatted = post.date
    ? new Date(post.date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "";

  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>BLOG</span>
          {post.category && (
            <span className={styles.category}>{post.category}</span>
          )}
          <h1 className={styles.title}>{post.title}</h1>
          {dateFormatted && <time className={styles.date}>{dateFormatted}</time>}
        </div>

        <Breadcrumb items={[{ label: "ブログ", href: "/blog" }, { label: post.title }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
            { "@type": "ListItem", position: 2, name: "ブログ", item: "https://iro-do-ri.jp/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://iro-do-ri.jp/blog/${slug}` },
          ],
        }) }} />

        {/* ── 戻るリンク ── */}
        <div className={styles.backLink}>
          <Link href="/blog">← ブログ一覧に戻る</Link>
        </div>

        {/* ── 記事本文 ── */}
        <article
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* ── 関連記事 ── */}
        {relatedPosts.length > 0 && (
          <div className={styles.related}>
            <p className={styles.relatedTitle}>関連記事</p>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCategory}>{related.category}</span>
                  <p className={styles.relatedCardTitle}>{related.title}</p>
                </Link>
              ))}
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
          <Link
            href="/contact"
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
