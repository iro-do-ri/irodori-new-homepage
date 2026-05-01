import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Mite.module.scss";

export const metadata: Metadata = {
  title: { absolute: "ヒーリングサロン mite｜制作実績｜千葉県船橋のホームページ制作 イロドリ" },
  description:
    "ヒーリングサロン「mite」のホームページ制作実績。癒しの世界観を伝えるビジュアルと、メニューを目的別に整理した来店しやすい導線設計で制作した事例です。",
  keywords: ["船橋", "千葉", "エステサロン", "制作実績", "ホームページ制作", "イロドリ", "ヒーリングサロン"],
  alternates: { canonical: "https://iro-do-ri.jp/works/rfstpp_3i6k" },
  openGraph: {
    type: "article",
    title: "ヒーリングサロン mite｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "ヒーリングサロン「mite」のホームページ制作実績。癒しの世界観を伝えるビジュアルと来店しやすい導線設計で制作した事例です。",
    url: "https://iro-do-ri.jp/works/rfstpp_3i6k",
    images: [
      {
        url: "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/13dc81e0e52a4127807edf2b27dac6b4/healingsalon.png",
        width: 384,
        height: 288,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ヒーリングサロン mite｜制作実績｜千葉県船橋のホームページ制作 イロドリ",
    description:
      "ヒーリングサロン「mite」のホームページ制作実績。癒しの世界観と来店しやすい設計の事例。",
    images: [
      "https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/13dc81e0e52a4127807edf2b27dac6b4/healingsalon.png",
    ],
  },
  robots: { index: true, follow: true },
};

export default function MitePage() {
  return (
    <section className="flex">

      <div className={styles.wrapper}>
        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <span className={styles.heroCategory}>エステサロン</span>
              <h1 className={styles.heroTitle}>ヒーリングサロン mite</h1>
              <p className={styles.heroSub}>ホームページ制作</p>
            </div>
            <div className={styles.heroImageWrap}>
              <img
                src="https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/13dc81e0e52a4127807edf2b27dac6b4/healingsalon.png"
                alt="ヒーリングサロン miteのホームページ制作実績｜イロドリ"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>

        {/* ── パンくず ── */}
        <Breadcrumb
          items={[{ label: "制作実績", href: "/works" }, { label: "ヒーリングサロン mite" }]}
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
                { "@type": "ListItem", position: 3, name: "ヒーリングサロン mite", item: "https://iro-do-ri.jp/works/rfstpp_3i6k" },
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
                <dd>ヒーリングサロン mite</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>業種</dt>
                <dd>エステサロン</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>制作期間</dt>
                <dd>約1.5ヶ月</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>担当業務</dt>
                <dd>デザイン・コーディング</dd>
              </div>
              <div className={styles.metaItem}>
                <dt>公開URL</dt>
                <dd>
                  <a
                    href="https://healingsalon-mite.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.metaLink}
                  >
                    healingsalon-mite.jp
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
            <h2 className={styles.sectionTitle}>心と体の境界がとける、<br />やさしい癒しのひとときへ</h2>
            <p className={styles.sectionDesc}>
              メニューを明確に整理し来店しやすい設計を軸に、ヒーリングサロンとしての世界観を発信する新規ホームページを制作しました。
              訪問者がサイトを通じてくつろぎを感じながら、自然に予約・来店へと進めるよう設計しています。
            </p>

            {/* ターゲット */}
            <div className={styles.targetGrid}>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>01</span>
                <p className={styles.targetLabel}>日々の疲れを癒したい<br />働く女性</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>02</span>
                <p className={styles.targetLabel}>体のメンテナンスを<br />求める方</p>
              </div>
              <div className={styles.targetCard}>
                <span className={styles.targetNumber}>03</span>
                <p className={styles.targetLabel}>初めてエステに<br />行きたい方</p>
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
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="2" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="13" y2="16" />
                  </svg>
                </div>
                <h3>メニューを明確に整理し来店を後押し</h3>
                <p>多彩なコースをターゲット別・目的別に分かりやすく整理。初めての方でも迷わず選べるメニュー設計で、予約へのハードルを下げました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3>癒しの世界観を伝えるビジュアル設計</h3>
                <p>穏やかなトーンと自然素材を連想させる配色でサロンの雰囲気を再現。訪問者が画面越しにくつろぎを感じられるデザインを目指しました。</p>
              </div>
              <div className={styles.pointCard}>
                <div className={styles.pointIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .82h3a2 2 0 012 1.72c.12.96.36 1.9.72 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.25-1.25a2 2 0 012.11-.45c.91.35 1.85.6 2.81.72A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <h3>予約・問い合わせへの最短導線</h3>
                <p>各コンテンツから予約フォームへ自然につながる導線を設計し、「気になる→予約」の流れをスムーズに実現。来店のきっかけを最大化しました。</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── デザインポリシー ── */}
        <div className={styles.designSection}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>DESIGN POLICY</span>
            <h2 className={styles.sectionTitle}>静かな自然の温もりを纏う、<br />上質なリラクゼーションデザイン</h2>
            <p className={styles.sectionDesc}>
              ナチュラルなグリーン系のトーンをベースに、訪問者がサイトを見るだけでほっとできる配色を選定。柔らかなフォントとあわせて、サロンの静かな上質さを視覚的に伝えています。
            </p>

            <div className={styles.designGrid}>
              {/* カラー */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Color Palette</h3>
                <div className={styles.colorRow}>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#F2F5F0" }} />
                    <span className={styles.colorCode}>#F2F5F0</span>
                    <span className={styles.colorName}>Natural White</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#8EAF89" }} />
                    <span className={styles.colorCode}>#8EAF89</span>
                    <span className={styles.colorName}>Sage Green</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#C4D4BE" }} />
                    <span className={styles.colorCode}>#C4D4BE</span>
                    <span className={styles.colorName}>Soft Sage</span>
                  </div>
                  <div className={styles.colorItem}>
                    <div className={styles.colorSwatch} style={{ background: "#D4C8B8" }} />
                    <span className={styles.colorCode}>#D4C8B8</span>
                    <span className={styles.colorName}>Warm Beige</span>
                  </div>
                </div>
              </div>

              {/* フォント */}
              <div className={styles.designBlock}>
                <h3 className={styles.designBlockTitle}>Typography</h3>
                <div className={styles.fontRow}>
                  <div className={styles.fontItem}>
                    <p className={styles.fontSampleJa}>あア亜</p>
                    <span className={styles.fontName}>Noto Serif JP</span>
                    <span className={styles.fontDesc}>日本語 / 温もりある明朝体</span>
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
            href="https://healingsalon-mite.jp/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.siteLink}
            aria-label="ヒーリングサロン miteの公開Webサイトを見る"
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
