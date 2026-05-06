import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Athena.module.scss";

export const metadata: Metadata = {
  title: { absolute: "エステ アテーナ｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "千葉県船橋市のエステサロン「アテーナ-オアシス」のコーポレートサイト制作実績。フェイシャル・ボディケアなど多彩なメニューを上品なパープル×ゴールドで表現した事例です。",
  keywords: ["船橋", "千葉", "エステサロン", "フェイシャル", "コーポレートサイト", "制作実績", "ホームページ制作", "イロドリ", "アテーナ"],
  alternates: { canonical: "https://iro-do-ri.jp/works/9xblc4dqj" },
  openGraph: {
    type: "article",
    title: "エステ アテーナ｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "千葉県船橋市のエステサロン「アテーナ-オアシス」のコーポレートサイト制作実績。多彩なメニューを上品なパープル×ゴールドで表現。",
    url: "https://iro-do-ri.jp/works/9xblc4dqj",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/YOUR_ASSET_ID/athena.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "エステ アテーナ｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "千葉県船橋市のエステサロン「アテーナ-オアシス」のコーポレートサイト制作実績。上品なパープル×ゴールドで高品質を表現。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/YOUR_ASSET_ID/athena.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function AthenaPage() {
  return (
    <section className="flex">

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>エステサロン</span>
              <h1 className={styles.heroTitle}>Athena</h1>
              <p className={styles.heroSub}>コーポレートサイト制作</p>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/YOUR_ASSET_ID/athena.png"
                alt="エステアテーナのホームページ制作実績｜イロドリ"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "エステ アテーナ" }]}
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
                { "@type": "ListItem", position: 3, name: "エステ アテーナ", item: "https://iro-do-ri.jp/works/9xblc4dqj" },
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
                <dd>エステ アテーナ-オアシス</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>エステサロン</dd>
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
                    href="https://athena-esthe.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    athena-esthe.jp
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
            <h2 className={styles.sectionTitle}>高品質なエステを、<br />あなたの肌へ届けるサロン</h2>
            <p className={styles.sectionDesc}>
              フェイシャル・ボディケア・痩身など幅広いメニューを揃える船橋のエステサロン。
              多様なニーズに応える豊富なメニューを分かりやすく整理し、初めての方でも安心して予約できる導線を設計しました。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>肌トラブル・エイジングケアに<br />悩む女性</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>本格フェイシャルエステを<br />求める方</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>痩身・ボディケアを<br />希望する方</p>
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
                <h3>多彩なメニューを整理しやすい導線設計</h3>
                <p>フェイシャル・ボディ・痩身など8つのカテゴリーを、目的別に迷わず探せる構造に整理。初めての方でもスムーズに自分に合ったメニューへたどり着ける設計を実現しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
                <h3>高級感・上品さを伝えるビジュアルデザイン</h3>
                <p>深みのあるパープルとゴールドを組み合わせ、特別感と上質さを演出。「また来たい」と思わせるサロンの雰囲気をWeb上で忠実に再現しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>船橋エリアでの集客を意識したSEO設計</h3>
                <p>「船橋 エステ」「船橋 フェイシャル」などの地域キーワードを意識したページ構成とメタデータ設計を実施。地元からの新規集客につながる検索対策を施しました。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>上質な美しさを、<br />気品あるデザインで表現</h2>
            <p className={styles.sectionDesc}>
              深みのあるパープルを基調に、ゴールドのアクセントで高級感を演出。アイボリーの背景が全体をやさしく包み、サロンの特別な空間をそのままWebデザインに落とし込みました。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#5B3F6A" }} />
                    <span className={styles.colorCode}>#5B3F6A</span>
                    <span className={styles.colorName}>Deep Purple</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#C9A84C" }} />
                    <span className={styles.colorCode}>#C9A84C</span>
                    <span className={styles.colorName}>Gold</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#E8D5C4" }} />
                    <span className={styles.colorCode}>#E8D5C4</span>
                    <span className={styles.colorName}>Blush Beige</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#FAF6F2", border: "1px solid #E8D5C4" }} />
                    <span className={styles.colorCode}>#FAF6F2</span>
                    <span className={styles.colorName}>Ivory</span>
                  </div>
                </div>
              </div>

              {/* フォント */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Typography</h3>
                <div className={styles.fontRow}>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleJa}>あア亜</p>
                    <span className={styles.fontName}>Zen Old Mincho</span>
                    <span className={styles.fontDesc}>日本語 / 品格ある明朝体</span>
                  </div>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleEn}>Aa12</p>
                    <span className={styles.fontName}>Cormorant Garamond</span>
                    <span className={styles.fontDesc}>英字 / 繊細なセリフ体</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 公開サイトリンク ── */}
        <div className={styles.siteLinkSection}>
          <a
            href="https://athena-esthe.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="エステアテーナの公開Webサイトを見る"
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
