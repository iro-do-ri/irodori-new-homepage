import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

        {/* ── ナビバー（戻る＋日付） ── */}
        <div className={styles.metaNav}>
          <Link href="/blog" className={styles.backLink}>← ブログ一覧に戻る</Link>
          {dateFormatted && (
            <span className={styles.metaDate}>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <time dateTime={post.date ?? ""}>{dateFormatted}</time>
            </span>
          )}
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
                    <div className={styles.relatedTop}>
                      <span className={styles.relatedCat}>{related.category}</span>
                      <time className={styles.relatedDate}>{new Date(related.date).toLocaleDateString("ja-JP")}</time>
                    </div>
                    <p className={styles.relatedCardTitle}>{related.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* ── プロフィール ── */}
        <div className={styles.profileWrap}>
          <div className={styles.profile}>
            <div className={styles.profileImgWrap}>
              <Image
                src="/profile.png"
                alt="勝野 紘太"
                fill
                className={styles.profileImg}
              />
            </div>
            <div className={styles.profileBody}>
              <p className={styles.profileName}>
                勝野 紘太 <span className={styles.profileNameEn}>/ Kota Katsuno</span>
              </p>
              <span className={styles.profileBadge}>Webデザイナー・イロドリ代表</span>
              <p className={styles.profileBio}>
                船橋商工会議所で5年間、中小企業支援に従事。<br />
                現在は船橋・千葉を中心に、ホームページ制作とSEO対策を行うフリーランスWebデザイナーです。<br />
                丁寧なヒアリングを大切にし、集客につながるサイト制作を提供しています。
              </p>
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
          <Link href="/contact" className={`${styles.box_button} inline-block`} aria-label="無料相談ページへ移動します"><span className={`${styles.background_button} ${styles.contact_button}`}></span><span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span></Link>
        </div>
      </div>
    </section>
  );
}
