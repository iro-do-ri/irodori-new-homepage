import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Chintai.module.scss";

export const metadata: Metadata = {
  title: { absolute: "賃貸オフィス東京.com｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "「賃貸オフィス東京.com」のブログサイト制作実績。オフィス移転・賃貸事務所探しをサポートする情報メディアとして、SEOを意識した記事設計と更新しやすいCMS構築で制作した事例です。",
  keywords: ["船橋", "千葉県", "不動産", "ブログサイト", "制作実績", "ホームページ制作", "イロドリ", "賃貸オフィス"],
  alternates: { canonical: "https://iro-do-ri.jp/works/1r782nokn" },
  openGraph: {
    type: "article",
    title: "賃貸オフィス東京.com｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "「賃貸オフィス東京.com」のブログサイト制作実績。SEO設計とWordPress CMS構築で情報メディアを制作した事例。",
    url: "https://iro-do-ri.jp/works/1r782nokn",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/70cc4b1fd67547188b448cb89f6dfe00/chintai.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "賃貸オフィス東京.com｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "「賃貸オフィス東京.com」のブログサイト制作実績。SEO設計とCMS構築による情報メディアの事例。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/70cc4b1fd67547188b448cb89f6dfe00/chintai.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function ChintaiPage() {
  return (
    <section className="flex">

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>不動産</span>
              <h1 className={styles.heroTitle}>賃貸オフィス東京.com</h1>
              <p className={styles.heroSub}>ブログサイト制作</p>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/70cc4b1fd67547188b448cb89f6dfe00/chintai.png"
                alt="賃貸オフィス東京.comのホームページ制作実績｜イロドリ"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "賃貸オフィス東京.com" }]}
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
                { "@type": "ListItem", position: 3, name: "賃貸オフィス東京.com", item: "https://iro-do-ri.jp/works/1r782nokn" },
              ],
            }),
          }}
        />

        {/* ── プロジェクト概要 ── */}
        <div className={styles.overview}>
          <div className={styles.overviewInner}>
            <dl className={styles.metaList}>
              <div className={styles.metaItem}>
                <dt>顧客名</dt>
                <dd>オフィス東京株式会社</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>不動産</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>制作期間</dt>
                <dd>約1ヶ月</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>担当業務</dt>
                <dd>デザイン・コーディング</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>公開URL</dt>
                <dd>
                  <a
                    href="https://www.rentoffice-tokyo.com/office-blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    rentoffice-tokyo.com
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* ── コンセプト ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>CONCEPT</span>
            <h2 className={styles.sectionTitle}>オフィス移転・賃貸事務所探しを<br />サポートする情報メディア</h2>
            <p className={styles.sectionDesc}>
              検索流入の最大化と物件問い合わせの増加を目的に、オフィス移転や事務所探しに役立つ情報を集めたブログメディアを構築しました。
              継続運用を前提としたCMS設計で、担当者が負担なく情報を発信し続けられる仕組みを整えています。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>オフィス移転を検討している<br />企業担当者</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>起業・開業を<br />予定している方</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>東京で事務所を<br />探している企業</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 制作のポイント ── */}
        <div className={styles.pointSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>PRODUCTION POINTS</span>
            <h2 className={styles.sectionTitle}>制作のポイント</h2>

            <div className={styles.pointGrid}>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>SEOを意識した記事設計</h3>
                <p>「オフィス移転」「ビル名」など検索意図に合わせたキーワード構成で集客を強化。ユーザーが求める情報に最短でたどり着ける記事構造を設計しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3>専門性を伝えるコンテンツ構成</h3>
                <p>移転手順・費用感・注意点など実務に役立つ情報を整理。読者が行動できるレベルの実践的なコンテンツで、専門サイトとしての信頼性を確立しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>更新しやすいCMS設計</h3>
                <p>WordPress＋ACFで継続運用を前提とした構築を実施。担当者が直感的に記事を追加・編集できる管理画面で、情報発信の継続をサポートします。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>正確な情報を、誠実に、<br />わかりやすく届けるデザイン</h2>
            <p className={styles.sectionDesc}>
              信頼と安心感を軸にした、視認性の高い配色設計。グレージュをベースに、落ち着きのあるオレンジをアクセントとして採用し、ビジネス向けサイトとしての読みやすさと信頼感を両立しています。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F8F7F5" }} />
                    <span className={styles.colorCode}>#F8F7F5</span>
                    <span className={styles.colorName}>Warm Gray</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#FE9F1B" }} />
                    <span className={styles.colorCode}>#FE9F1B</span>
                    <span className={styles.colorName}>Amber</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F46519" }} />
                    <span className={styles.colorCode}>#F46519</span>
                    <span className={styles.colorName}>Orange</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#FFFFFF", border: "1px solid #E4DDD4" }} />
                    <span className={styles.colorCode}>#FFFFFF</span>
                    <span className={styles.colorName}>White</span>
                  </div>
                </div>
              </div>

              {/* フォント */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Typography</h3>
                <div className={styles.fontRow}>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleJa}>あア亜</p>
                    <span className={styles.fontName}>Noto Sans JP</span>
                    <span className={styles.fontDesc}>日本語 / 読みやすいゴシック体</span>
                  </div>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleEn}>Aa12</p>
                    <span className={styles.fontName}>Roboto</span>
                    <span className={styles.fontDesc}>英字 / 実用的なサンセリフ体</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 公開サイトリンク ── */}
        <div className={styles.siteLinkSection}>
          <a
            href="https://www.rentoffice-tokyo.com/office-blog/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="賃貸オフィス東京.comの公開Webサイトを見る"
          >
            公開サイトを見る
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
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
          <Link href={URL.Contact} className={`${styles.box_button} inline-block`} aria-label="無料相談ページへ移動します">
            <span className={`${styles.background_button} ${styles.contact_button}`}></span>
            <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
