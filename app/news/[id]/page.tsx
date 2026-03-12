import { client } from "../../lib/Micro";
import Header from "@/app/parts/Header";
import { URL } from "../../url/Url";
import Link from "next/link";
import styles from "./NewsDetail.module.scss";
import Breadcrumb from "@/app/parts/Breadcrumb";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const data = await client.get({ endpoint: "news", contentId: id });
    const title = `${data.title}｜千葉県船橋のホームページ制作 イロドリ`;
    const url = `https://iro-do-ri.jp/news/${id}`;
    const description = data.description
      || (data.contents
        ? data.contents.replace(/<[^>]*>/g, "").substring(0, 120) + "…"
        : `${data.title}｜千葉県船橋のホームページ制作会社イロドリからのお知らせです。`);
    return {
      title: { absolute: title },
      description,
      keywords: ["船橋", "千葉県", "千葉県船橋", "ホームページ制作", "Webデザイン", "イロドリ"],
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: "article",
        images: data.img?.url
          ? [{ url: data.img.url }]
          : [{ url: "/og-image.png", width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: data.img?.url ? [data.img.url] : ["/og-image.png"],
      },
      robots: { index: true, follow: true },
    };
  } catch {
    return {};
  }
}

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });

  const dateFormatted = data.publishedAt
    ? new Date(data.publishedAt).toLocaleDateString("ja-JP", {
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
          <span className={styles.heroLabel}>NEWS</span>
          {data.category && (
            <span className={styles.heroCategory}>{data.category}</span>
          )}
          <h1 className={styles.heroTitle}>{data.title || "お知らせ"}</h1>
          {dateFormatted && (
            <time className={styles.heroDate}>{dateFormatted}</time>
          )}
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb items={[{ label: "更新情報", href: "/blog" }, { label: data.title }]} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
                { "@type": "ListItem", position: 2, name: "更新情報", item: "https://iro-do-ri.jp/blog" },
                { "@type": "ListItem", position: 3, name: data.title, item: `https://iro-do-ri.jp/news/${id}` },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: data.title,
              datePublished: data.publishedAt,
              dateModified: data.updatedAt ?? data.publishedAt,
              author: { "@type": "Organization", name: "イロドリ", url: "https://iro-do-ri.jp" },
              publisher: {
                "@type": "Organization",
                name: "イロドリ",
                url: "https://iro-do-ri.jp",
                logo: { "@type": "ImageObject", url: "https://iro-do-ri.jp/og-image.png" },
              },
              image: data.img?.url ?? "https://iro-do-ri.jp/og-image.png",
              url: `https://iro-do-ri.jp/news/${id}`,
              mainEntityOfPage: { "@type": "WebPage", "@id": `https://iro-do-ri.jp/news/${id}` },
            }),
          }}
        />

        {/* ── 戻るリンク ── */}
        <div className={styles.backLink}>
          <Link href="/blog">← 更新情報一覧に戻る</Link>
        </div>

        {/* ── アイキャッチ画像 ── */}
        {data.img?.url && (
          <div className={styles.eyecatch}>
            <img src={data.img.url} alt={data.title} />
          </div>
        )}

        {/* ── 記事本文 ── */}
        {data.contents && (
          <div
            className={styles.article}
            dangerouslySetInnerHTML={{ __html: data.contents }}
          />
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
