import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./ThreeWave.module.scss";

export const metadata: Metadata = {
  title: { absolute: "Three Wave｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "賃貸オフィス仲介「Three Wave」のコーポレートサイト・ブログ制作実績。都内オフィス移転を検討する企業担当者に向け、信頼感と見やすさを重視したネイビー基調の設計で制作した事例です。",
  keywords: ["船橋", "千葉", "賃貸オフィス", "不動産", "コーポレートサイト", "制作実績", "ホームページ制作", "イロドリ", "ThreeWave"],
  alternates: { canonical: "https://iro-do-ri.jp/works/j6js1gf4xt8" },
  openGraph: {
    type: "article",
    title: "Three Wave｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "賃貸オフィス仲介「Three Wave」のコーポレートサイト・ブログ制作実績。企業担当者への信頼感と見やすさを重視したネイビー基調の設計。",
    url: "https://iro-do-ri.jp/works/j6js1gf4xt8",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/85cdba8f6b32467cb985bb8bbf0585ef/kashijimusho.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Three Wave｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "賃貸オフィス仲介「Three Wave」のコーポレートサイト・ブログ制作実績。信頼感と専門性を伝える設計。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/85cdba8f6b32467cb985bb8bbf0585ef/kashijimusho.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function ThreeWavePage() {
  return (
    <section className="flex">

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>賃貸オフィス・不動産</span>
              <h1 className={styles.heroTitle}>Three Wave</h1>
              <p className={styles.heroSub}>コーポレートサイト・ブログ制作</p>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/85cdba8f6b32467cb985bb8bbf0585ef/kashijimusho.png"
                alt="ThreeWaveのホームページ制作実績｜イロドリ"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "Three Wave" }]}
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
                { "@type": "ListItem", position: 3, name: "Three Wave", item: "https://iro-do-ri.jp/works/j6js1gf4xt8" },
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
                <dd>株式会社スリーウェーブ</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>賃貸オフィス・不動産</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>制作期間</dt>
                <dd>約2ヶ月</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>担当業務</dt>
                <dd>企画・デザイン・コーディング</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>公開URL</dt>
                <dd>
                  <a
                    href="https://www.threewave.co.jp/office-blog/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    threewave.co.jp
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
            <h2 className={styles.sectionTitle}>オフィス探しの悩みを、<br />わかりやすく解決する情報サイト</h2>
            <p className={styles.sectionDesc}>
              賃貸オフィスの移転・縮小・拡張を検討している企業担当者に向け、物件情報を見やすく整理したブログ型サイトです。
              専門知識がなくても安心して比較・検討できるよう、信頼感と分かりやすさを重視した設計を心がけました。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>オフィス移転を<br />検討している企業担当者</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>初めてオフィスを借りる<br />スタートアップ・起業家</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>都内で賃貸物件を<br />探している法人担当者</p>
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
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>物件情報を直感的に届けるレイアウト</h3>
                <p>エリア・沿線・特徴など複数の切り口から物件を探せる導線を設計。ブログ一覧からスムーズに詳細へ移動できる直感的な構造を実現しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3>不動産会社としての信頼感を醸成するデザイン</h3>
                <p>ネイビーを基調に、誠実さと専門性を視覚的に表現。清潔感のある配色で、初めて訪れる企業担当者にも安心感を与えるトーンを設計しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>SEOを意識したコンテンツ設計</h3>
                <p>「エリア名 × 賃貸オフィス」などの検索需要を意識した記事構成とURL設計を実施。地域に根ざした集客を見据えたコンテンツ戦略を策定しました。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>信頼と誠実さを、<br />シンプルに伝えるデザイン</h2>
            <p className={styles.sectionDesc}>
              ネイビーを軸に、清潔感と専門性を兼ね備えた配色を採用。企業担当者が「任せられる」と感じるプロフェッショナルなトーンで、不動産会社としての信頼感を高めます。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#1B3A6B" }} />
                    <span className={styles.colorCode}>#1B3A6B</span>
                    <span className={styles.colorName}>Deep Navy</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#2563EB" }} />
                    <span className={styles.colorCode}>#2563EB</span>
                    <span className={styles.colorName}>Royal Blue</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }} />
                    <span className={styles.colorCode}>#EFF6FF</span>
                    <span className={styles.colorName}>Ice Blue</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F97316" }} />
                    <span className={styles.colorCode}>#F97316</span>
                    <span className={styles.colorName}>Orange</span>
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
                    <span className={styles.fontDesc}>日本語 / 視認性の高いゴシック体</span>
                  </div>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleEn}>Aa12</p>
                    <span className={styles.fontName}>Inter</span>
                    <span className={styles.fontDesc}>英字 / クリーンなサンセリフ体</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 公開サイトリンク ── */}
        <div className={styles.siteLinkSection}>
          <a
            href="https://www.threewave.co.jp/office-blog/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="Three Waveの公開Webサイトを見る"
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
