import type { Metadata } from "next";
import Header from "../../parts/Header";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./HummingBird.module.scss";

export const metadata: Metadata = {
  title: { absolute: "ハミングバード｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "動画制作会社「有限会社ハミングバード」のコーポレートサイト制作実績。地域密着・人と人をつなぐ映像をテーマに、映像が主役のシンプルなビジュアル重視設計で制作した事例です。",
  keywords: ["船橋", "千葉県", "動画制作", "制作実績", "ホームページ制作", "イロドリ", "ハミングバード"],
  alternates: { canonical: "https://iro-do-ri.jp/works/1yezeipyv" },
  openGraph: {
    type: "article",
    title: "ハミングバード｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "動画制作会社「有限会社ハミングバード」のコーポレートサイト制作実績。映像が主役のシンプルなビジュアル重視設計で制作した事例です。",
    url: "https://iro-do-ri.jp/works/1yezeipyv",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/e9cf7601dc204497acf7033ba83b648f/hummig-bird.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ハミングバード｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "動画制作会社「有限会社ハミングバード」のコーポレートサイト制作実績。映像が主役のシンプル設計。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/e9cf7601dc204497acf7033ba83b648f/hummig-bird.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function HummingBirdPage() {
  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroCategory}>動画制作会社</span>
            <h1 className={styles.heroTitle}>HummingBird</h1>
            <p className={styles.heroSub}>コーポレートサイト制作</p>
          </div>
          <div className={styles.heroImageWrap}>
            <img
              src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/e9cf7601dc204497acf7033ba83b648f/hummig-bird.png"
              alt="ハミングバードのホームページ制作実績｜イロドリ"
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "ハミングバード" }]}
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
                { "@type": "ListItem", position: 3, name: "ハミングバード", item: "https://iro-do-ri.jp/works/1yezeipyv" },
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
                <dd>有限会社ハミングバード</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>動画制作会社</dd>
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
                    href="https://hummingbird555.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    hummingbird555.jp
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
            <h2 className={styles.sectionTitle}>「地域密着」「人と人をつなぐ映像」<br />「丁寧な制作姿勢」</h2>
            <p className={styles.sectionDesc}>
              これまで制作した代表的な映像作品を掲載し、ハミングバードの良さを知ってもらうことを目的としたサイトです。
              制作実績を通じて信頼を獲得し、より多くの方にハミングバードを知ってもらえる導線を設計しました。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>企業ブランディングを<br />強化したい中小企業</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>採用動画を<br />制作したい企業</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>映像で商品・サービスを<br />伝えたい事業者</p>
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
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                  </svg>
                </div>
                <h3>印象を決定づける3本動画構成</h3>
                <p>ファーストビューで顧客がアピールしたい3本の動画を表示。訪問者が最初に目にする映像で、ハミングバードの魅力を直感的に伝えます。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3>ハミングバードのアニメーション演出</h3>
                <p>Blenderで制作したオリジナルアニメーションを採用。動きのある演出で訪問者の印象に残り、動画制作会社としての技術力を視覚的にアピールします。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>動画制作の実績を際立てる設計</h3>
                <p>映像が主役になるシンプルな構成で、実績が自然と目に入るビジュアル重視のレイアウトを設計。過去の制作実績を通じて信頼を積み重ねます。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>自然体のあたたかさで、<br />信頼を積み重ねるデザイン</h2>
            <p className={styles.sectionDesc}>
              グリーンやブラウンを基調としたアースカラーを採用。自然を思わせる落ち着いた色合いが、誠実さと安心感をやさしく伝えます。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#EFE8D8" }} />
                    <span className={styles.colorCode}>#EFE8D8</span>
                    <span className={styles.colorName}>Light Cream</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#2B7030" }} />
                    <span className={styles.colorCode}>#2B7030</span>
                    <span className={styles.colorName}>Forest Green</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#705728" }} />
                    <span className={styles.colorCode}>#705728</span>
                    <span className={styles.colorName}>Warm Brown</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#DD5162" }} />
                    <span className={styles.colorCode}>#DD5162</span>
                    <span className={styles.colorName}>Accent</span>
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
                    <span className={styles.fontDesc}>日本語 / 落ち着きある明朝体</span>
                  </div>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleEn}>Aa12</p>
                    <span className={styles.fontName}>EB Garamond</span>
                    <span className={styles.fontDesc}>英字 / 品格あるセリフ体</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 公開サイトリンク ── */}
        <div className={styles.siteLinkSection}>
          <a
            href="https://hummingbird555.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="ハミングバードの公開Webサイトを見る"
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
