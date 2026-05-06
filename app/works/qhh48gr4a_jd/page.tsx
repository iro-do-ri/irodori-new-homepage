import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./MayunoSato.module.scss";

export const metadata: Metadata = {
  title: { absolute: "まゆの里山｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "山梨県甲府市のリトリート施設「まゆの里山」のコーポレートサイト制作実績。宿・癒・紬の3つのコンセプトを軸に、自然と人をつなぐ世界観をアースグリーン基調で表現した事例です。",
  keywords: ["船橋", "千葉", "リトリート", "旅館", "コーポレートサイト", "制作実績", "ホームページ制作", "イロドリ", "まゆの里山"],
  alternates: { canonical: "https://iro-do-ri.jp/works/qhh48gr4a_jd" },
  openGraph: {
    type: "article",
    title: "まゆの里山｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "山梨県甲府市のリトリート施設「まゆの里山」のコーポレートサイト制作実績。自然と人をつなぐ世界観をアースグリーン基調で表現。",
    url: "https://iro-do-ri.jp/works/qhh48gr4a_jd",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/YOUR_ASSET_ID/mayunosato.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "まゆの里山｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "山梨県甲府市のリトリート施設「まゆの里山」のコーポレートサイト制作実績。自然の世界観をアースグリーン基調で表現した事例。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/YOUR_ASSET_ID/mayunosato.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function MayunoSatoPage() {
  return (
    <section className="flex">

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>リトリート・旅館</span>
              <h1 className={styles.heroTitle}>まゆの里山</h1>
              <p className={styles.heroSub}>コーポレートサイト制作</p>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/YOUR_ASSET_ID/mayunosato.png"
                alt="まゆの里山のホームページ制作実績｜イロドリ"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "まゆの里山" }]}
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
                { "@type": "ListItem", position: 3, name: "まゆの里山", item: "https://iro-do-ri.jp/works/qhh48gr4a_jd" },
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
                <dd>リトリート まゆの里山</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>リトリート・旅館</dd>
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
                    href="https://www.mayuno-sato.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    mayuno-sato.com
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
            <h2 className={styles.sectionTitle}>人と自然をつなぐ、<br />繭のような温かな隠れ家</h2>
            <p className={styles.sectionDesc}>
              山梨県甲府市の段々畑の集落に佇むリトリート施設。養蚕の歴史を背景に「人と人、人と自然を繭の糸のようにつなぐ」をコンセプトに、
              宿・癒・紬の3つの体験を通じて訪れる人に非日常の豊かさをお届けするサイトです。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>心身のリフレッシュを<br />求める都市部在住者</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>自然体験・農村体験に<br />関心のある方</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>ウェルネス・癒し志向の<br />旅行者</p>
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
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3>自然の世界観をそのまま伝えるビジュアル設計</h3>
                <p>里山の緑・土・空気感をそのままデジタル上に再現。アースグリーンとクリームの配色で、訪れる前から施設の空気感を体感できるデザインを追求しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                </div>
                <h3>3つのコンセプトを直感的に整理した構成</h3>
                <p>「宿・癒・紬」という独自の3軸を訪問者が迷わず理解できるよう、ナビゲーションと導線を丁寧に設計。それぞれの体験価値を明確に伝える情報構造を実現しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>地域の歴史・文化を活かしたストーリー設計</h3>
                <p>養蚕の歴史や里山の文化的背景をコンテンツに織り交ぜ、単なる宿泊施設ではなく「体験できる場所」としての価値を丁寧に伝えるストーリーラインを構築しました。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>里山の空気を、<br />画面越しに届けるデザイン</h2>
            <p className={styles.sectionDesc}>
              深みのあるアースグリーンを基調に、土や木の温もりを感じるクリーム・ブラウンを合わせました。日本の自然と伝統に根ざした色合いが、施設の静かな豊かさを視覚的に伝えます。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#3D5A47" }} />
                    <span className={styles.colorCode}>#3D5A47</span>
                    <span className={styles.colorName}>Forest Green</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#6B8F71" }} />
                    <span className={styles.colorCode}>#6B8F71</span>
                    <span className={styles.colorName}>Sage Green</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#8B6E52" }} />
                    <span className={styles.colorCode}>#8B6E52</span>
                    <span className={styles.colorName}>Earth Brown</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F5F0E8", border: "1px solid #C4B89A" }} />
                    <span className={styles.colorCode}>#F5F0E8</span>
                    <span className={styles.colorName}>Warm Cream</span>
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
            href="https://www.mayuno-sato.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="まゆの里山の公開Webサイトを見る"
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
