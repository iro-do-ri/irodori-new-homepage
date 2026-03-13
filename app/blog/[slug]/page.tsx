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
  const title = `${post.title}｜千葉県船橋のホームページ制作 イロドリ`;
  const url = `https://iro-do-ri.jp/blog/${slug}`;
  return {
    title: { absolute: title },
    description: post.description,
    keywords: ["船橋", "千葉県", "千葉県船橋", "ホームページ制作", "Webデザイン", "イロドリ"],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.date ?? new Date().toISOString(),
          dateModified: post.date ?? new Date().toISOString(),
          author: { "@type": "Organization", name: "イロドリ", url: "https://iro-do-ri.jp" },
          publisher: {
            "@type": "Organization",
            name: "イロドリ",
            url: "https://iro-do-ri.jp",
            logo: { "@type": "ImageObject", url: "https://iro-do-ri.jp/og-image.png" },
          },
          url: `https://iro-do-ri.jp/blog/${slug}`,
          mainEntityOfPage: { "@type": "WebPage", "@id": `https://iro-do-ri.jp/blog/${slug}` },
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

        {/* ── 他の記事 ── */}
        {relatedPosts.length > 0 && (
          <div className={styles.related}>
            <p className={styles.relatedLabel}>他の記事</p>
            <ul className={styles.relatedList}>
              {relatedPosts.map((related) => (
                <li key={related.slug} className={styles.relatedItem}>
                  <Link href={`/blog/${related.slug}`} className={styles.relatedLink}>
                    <span className={styles.relatedImg}>
                      <img
                        src={related.image ?? "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/eaa762c22949424c87cd0aadf582116e/no-image.png"}
                        alt={related.title}
                      />
                    </span>
                    <span className={styles.relatedCat}>{related.category}</span>
                    <div className={styles.relatedMeta}>
                      <time className={styles.relatedDate}>{new Date(related.date).toLocaleDateString("ja-JP")}</time>
                      <p className={styles.relatedCardTitle}>{related.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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
          <Link href="/contact" className={`${styles.box_button} inline-block`} aria-label="無料相談ページへ移動します"><span className={`${styles.background_button} ${styles.contact_button}`}></span><span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span></Link>
        </div>
      </div>
    </section>
  );
}
