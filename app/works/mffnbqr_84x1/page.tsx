import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Triangle.module.scss";

export const metadata: Metadata = {
  title: { absolute: "Triangle Products｜制作実績｜千葉・船橋のホームページ制作 イロドリ" },
  description:
    "医療ソフトメーカー「株式会社トライアングルプロダクツ」のコーポレートサイト制作実績。高品質な製品を信頼感とともに伝えるブルー基調の設計で制作した事例です。",
  keywords: ["船橋", "千葉", "医療", "コーポレートサイト", "制作実績", "ホームページ制作", "イロドリ", "トライアングルプロダクツ"],
  alternates: { canonical: "https://iro-do-ri.jp/works/mffnbqr_84x1" },
  openGraph: {
    type: "article",
    title: "Triangle Products｜制作実績｜千葉・船橋のホームページ制作 イロドリ",
    description:
      "医療ソフトメーカー「株式会社トライアングルプロダクツ」のコーポレートサイト制作実績。高品質な製品を信頼感とともに伝えるブルー基調の設計。",
    url: "https://iro-do-ri.jp/works/mffnbqr_84x1",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/53e204da68704a45aa1680bd599387e9/triangle.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triangle Products｜制作実績｜千葉・船橋のホームページ制作 イロドリ",
    description:
      "医療ソフトメーカー「株式会社トライアングルプロダクツ」のコーポレートサイト制作実績。信頼感と専門性を伝える設計。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/53e204da68704a45aa1680bd599387e9/triangle.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function TrianglePage() {
  return (
    <section className="flex">

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>医療ソフトメーカー</span>
              <h1 className={styles.heroTitle}>Triangle Products</h1>
              <p className={styles.heroSub}>コーポレートサイト制作</p>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/53e204da68704a45aa1680bd599387e9/triangle.png"
                alt="トライアングルプロダクツのホームページ制作実績｜イロドリ"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "Triangle Products" }]}
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
                { "@type": "ListItem", position: 3, name: "Triangle Products", item: "https://iro-do-ri.jp/works/mffnbqr_84x1" },
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
                <dd>株式会社トライアングルプロダクツ</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>医療ソフトメーカー</dd>
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
                    href="https://www.triangle-products.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    triangle-products.jp
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
            <h2 className={styles.sectionTitle}>高品質な製品を、<br />信頼感とともに伝えるコーポレートサイト</h2>
            <p className={styles.sectionDesc}>
              会社概要・実績・対応分野を整理し、企業としての安心感を強化することを目的としたサイトです。
              製品の強みを明確に伝え、企業信頼度を高めることで、新たなパートナーシップ獲得を後押しします。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>製品導入を検討している<br />医療法人担当者</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>技術提案を求めている<br />法人顧客</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>OEM・パートナーを<br />検討している企業</p>
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
                <h3>製品力を直感的に伝える設計</h3>
                <p>製品写真や導入事例を効果的に配置し、品質と専門性を視覚的に訴求。訪問者が一目で強みを把握できるレイアウトを設計しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h3>技術力を分かりやすく整理</h3>
                <p>強み・特徴・用途を明確に分解し、専門外の方にも理解しやすい構成に。図解やアイコンを活用し、複雑な情報を直感的に届けます。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>信頼性を高める情報設計</h3>
                <p>会社概要・実績・対応分野を整理し、企業としての安心感を強化。BtoBらしい堅実なトーンで、法人顧客への信頼感を積み上げます。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>専門性を、誠実に、<br />わかりやすく伝えるデザイン</h2>
            <p className={styles.sectionDesc}>
              ブルーを基調に、安心感と誠実さを視覚的に表現。医療・製品分野にふさわしいクリーンで透明感のある色合いが、企業としての信頼性を高めます。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#57C9D5" }} />
                    <span className={styles.colorCode}>#57C9D5</span>
                    <span className={styles.colorName}>Cyan Blue</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#5185E0" }} />
                    <span className={styles.colorCode}>#5185E0</span>
                    <span className={styles.colorName}>Royal Blue</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#DB7568" }} />
                    <span className={styles.colorCode}>#DB7568</span>
                    <span className={styles.colorName}>Coral</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F2F7FB", border: "1px solid #B8CEE2" }} />
                    <span className={styles.colorCode}>#F2F7FB</span>
                    <span className={styles.colorName}>Light Blue</span>
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
                    <span className={styles.fontDesc}>日本語 / 可読性の高いゴシック体</span>
                  </div>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleEn}>Aa12</p>
                    <span className={styles.fontName}>Lusitana</span>
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
            href="https://www.triangle-products.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="Triangle Productsの公開Webサイトを見る"
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
