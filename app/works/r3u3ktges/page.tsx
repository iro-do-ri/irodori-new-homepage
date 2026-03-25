import type { Metadata } from "next";
import Header from "../../parts/Header";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Soluna.module.scss";

export const metadata: Metadata = {
  title: { absolute: "SOLUNA｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "エステサロン「SOLUNA」のコーポレートサイト制作実績。妊活・マタニティ・産後の女性に寄り添う温もりある設計と、柔らかいベージュ系カラーで上質な雰囲気を表現した事例です。",
  keywords: ["船橋", "千葉県", "エステサロン", "制作実績", "ホームページ制作", "イロドリ", "SOLUNA"],
  alternates: { canonical: "https://iro-do-ri.jp/works/r3u3ktges" },
  openGraph: {
    type: "article",
    title: "SOLUNA｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "エステサロン「SOLUNA」のコーポレートサイト制作実績。妊活・マタニティ・産後の女性に寄り添う温もりある設計と、柔らかいベージュ系カラーで上質な雰囲気を表現した事例です。",
    url: "https://iro-do-ri.jp/works/r3u3ktges",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/8d66df2f8b724dfc8db4ba1b74d1841d/soluna.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLUNA｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "エステサロン「SOLUNA」のコーポレートサイト制作実績。妊活・マタニティ・産後の女性に寄り添う温もりある設計と上質なデザインの事例。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/8d66df2f8b724dfc8db4ba1b74d1841d/soluna.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function SolunaPage() {
  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroCategory}>エステサロン</span>
            <h1 className={styles.heroTitle}>SOLUNA</h1>
            <p className={styles.heroSub}>コーポレートサイト制作</p>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/8d66df2f8b724dfc8db4ba1b74d1841d/soluna.png"
              alt="SOLUNAのホームページ制作実績｜イロドリ"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "SOLUNA" }]}
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
                { "@type": "ListItem", position: 3, name: "SOLUNA", item: "https://iro-do-ri.jp/works/r3u3ktges" },
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
                <dd>SOLUNA</dd>
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
                    href="https://soluna-este.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    soluna-este.com
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
            <h2 className={styles.sectionTitle}>女性のライフステージに<br />寄り添うエステサロン</h2>
            <p className={styles.sectionDesc}>
              妊活・マタニティ・産後という女性の大切な節目に合わせ、姉妹店オープンに合わせた新規Webページを立ち上げました。
              訪問者がそれぞれの目的に応じて迷わず情報を探せる、やさしい導線設計を心がけています。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>妊活中の女性</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>マタニティ期の女性</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>出産後の女性</p>
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
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
                <h3>温もりと安心感を伝えるトップ設計</h3>
                <p>ファーストビューで温かさと安心感が伝わるビジュアルを採用。訪問者に「ここなら安心」と感じてもらえるトップページを設計しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>運用負荷を抑えた管理設計</h3>
                <p>WordPressのACFを活用し、更新しやすさを重視したCMS構築を実施。スタッフが直感的にコンテンツを更新できる仕組みを整えました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3>目的別に情報が探しやすい導線設計</h3>
                <p>「妊活・マタニティ・産後」それぞれの目的ごとに、訪問者が迷わず進める導線を意識したサイト構造を設計しました。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>やさしさの中に、<br />静かな上質さを宿すデザイン</h2>
            <p className={styles.sectionDesc}>
              ベースにはグレージュを使用し落ち着いた配色に。アクセントには、くすみ感のあるピンクベージュを取り入れ、女性らしい温もりと上品さを表現しています。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F5EFE8" }} />
                    <span className={styles.colorCode}>#F5EFE8</span>
                    <span className={styles.colorName}>Greige</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#C8BAA8" }} />
                    <span className={styles.colorCode}>#C8BAA8</span>
                    <span className={styles.colorName}>Warm Beige</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#E6D8C8" }} />
                    <span className={styles.colorCode}>#E6D8C8</span>
                    <span className={styles.colorName}>Light Mocha</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#C7A998" }} />
                    <span className={styles.colorCode}>#C7A998</span>
                    <span className={styles.colorName}>Pink Beige</span>
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
                    <span className={styles.fontDesc}>日本語 / 品のある明朝体</span>
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
            href="https://soluna-este.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="SOLUNAの公開Webサイトを見る"
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
