import type { Metadata } from "next";
import Header from "../../parts/Header";
import Link from "next/link";
import { URL } from "../../url/Url";
import { client } from "../../lib/Micro";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./WorkDetail.module.scss";

type Work = {
  id: string;
  title: string;
  category: string;
  image: { url: string; width: number; height: number };
  description?: string;
  url?: string;
};

export async function generateStaticParams() {
  const data = await client.get({ endpoint: "works", queries: { limit: 100 } });
  return data.contents.map((work: { id: string }) => ({ id: work.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const work: Work = await client.get({ endpoint: "works", contentId: id });
    const title = `${work.title}｜制作実績｜千葉県船橋のホームページ制作 イロドリ`;
    const description =
      work.description ??
      `${work.title}の制作実績。千葉県船橋のホームページ制作会社イロドリが手がけた${work.category}のWebサイト制作事例です。`;
    return {
      title: { absolute: title },
      description,
      keywords: ["船橋", "千葉県", "千葉県船橋", "制作実績", work.category, "ホームページ制作", "イロドリ"],
      alternates: { canonical: `https://iro-do-ri.jp/works/${id}` },
      openGraph: {
        type: "article",
        title,
        description,
        url: `https://iro-do-ri.jp/works/${id}`,
        images: [{ url: work.image.url, width: work.image.width, height: work.image.height }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [work.image.url],
      },
      robots: { index: true, follow: true },
    };
  } catch {
    return {};
  }
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work: Work = await client.get({ endpoint: "works", contentId: id });

  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <img
            src={work.image.url}
            alt={`${work.title}のホームページ制作実績｜イロドリ`}
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.heroCategory}>{work.category}</span>
            <h1 className={styles.heroTitle}>{work.title}</h1>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: work.title }]}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
                { "@type": "ListItem", position: 2, name: "制作実績", item: "https://iro-do-ri.jp/works" },
                { "@type": "ListItem", position: 3, name: work.title, item: `https://iro-do-ri.jp/works/${id}` },
              ],
            }),
          }}
        />

        {/* ── 本文 ── */}
        <div className={styles.body}>
          <div className={styles.bodyInner}>
            {/* 説明文（MicroCMSにdescriptionフィールドを追加すると表示されます） */}
            {work.description && (
              <p className={styles.description}>{work.description}</p>
            )}

            {/* サイトURL（MicroCMSにurlフィールドを追加すると表示されます） */}
            {work.url && (
              <a
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.siteLink}
                aria-label={`${work.title}のWebサイトを見る`}
              >
                公開サイトを見る
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* ── 戻るリンク ── */}
        <div className={styles.backLink}>
          <Link href="/works">← 制作実績一覧に戻る</Link>
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
