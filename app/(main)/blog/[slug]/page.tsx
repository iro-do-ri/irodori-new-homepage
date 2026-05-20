import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, getAllPosts } from "../../lib/posts";
import styles from "./PostDetail.module.scss";
import Breadcrumb from "../../parts/Breadcrumb";

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
    keywords: ["船橋", "千葉", "千葉県船橋", "千葉 ホームページ制作", "ホームページ制作", "Webデザイン", "イロドリ"],
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
    robots: post.noindex ? { index: false, follow: false } : { index: true, follow: true },
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

      <div className={styles.wrapper}>
        <Breadcrumb items={[{ label: "ブログ", href: "/blog" }, { label: post.title }]} narrow />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
            { "@type": "ListItem", position: 2, name: "ブログ", item: "https://iro-do-ri.jp/blog" },
            { "@type": "ListItem", position: 3, name: post.title, item: `https://iro-do-ri.jp/blog/${slug}` },
          ],
        }) }} />
        {post.faq && post.faq.length > 0 && (
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faq.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }) }} />
        )}
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

        {/* ── ナビバー（戻るのみ） ── */}
        <div className={styles.metaNav}>
          <Link href="/blog" className={styles.backLink}>← ブログ一覧に戻る</Link>
        </div>

        {/* ── 記事本文 ── */}
        <article className={styles.article}>
          {(() => {
            const html = post.contentHtml;
            const meta = (
              <div className={styles.articleMeta}>
                {post.category && (
                  <span className={styles.articleCategory}>{post.category}</span>
                )}
                {dateFormatted && (
                  <time className={styles.articleDate} dateTime={post.date ?? ""}>{dateFormatted}</time>
                )}
              </div>
            );
            if (html.startsWith('<div style="display:flex')) {
              const closingIndex = html.indexOf('</div>') + '</div>'.length;
              const eyecatchHtml = html.slice(0, closingIndex);
              const restHtml = html.slice(closingIndex);
              return (
                <>
                  <div dangerouslySetInnerHTML={{ __html: eyecatchHtml }} />
                  {meta}
                  <h1 className={styles.articleTitle}>{post.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: restHtml }} />
                </>
              );
            }
            return (
              <>
                {meta}
                <h1 className={styles.articleTitle}>{post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </>
            );
          })()}
        </article>

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
