import type { Metadata } from "next";
import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import styles from "./About.module.scss";

export const metadata: Metadata = {
  title: "イロドリについて｜船橋のWebデザイナー勝野紘太",
  description:
    "船橋市在住のWebデザイナー勝野紘太のプロフィール。制作会社・事業会社での実務経験10年以上。WordPress・SEO・UI設計を一気通貫で対応します。",
  alternates: { canonical: "https://iro-do-ri.jp/about" },
  openGraph: {
    title: "イロドリについて｜船橋のWebデザイナー勝野紘太",
    description:
      "船橋市在住のWebデザイナー勝野紘太のプロフィール。制作会社・事業会社での実務経験10年以上。WordPress・SEO・UI設計を一気通貫で対応します。",
    url: "https://iro-do-ri.jp/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "イロドリについて｜船橋のWebデザイナー勝野紘太",
    description:
      "船橋市在住のWebデザイナー勝野紘太のプロフィール。WordPress・SEO・UI設計を一気通貫で対応します。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function About() {
  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>ABOUT</span>
          <h1 className={styles.title}>
            伝わるデザインと<br />
            使いやすさを両立した<br />
            ホームページ制作会社
          </h1>
          <p className={styles.description}>
            千葉県船橋市を拠点に、ホームページ・チラシ・動画制作を行う<br />
            WEBデザイン会社のイロドリです。<br />
            お客様の想いを、デザインで形にします。
          </p>
        </div>

        {/* ── 私たちの想い ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>OUR VALUES</span>
            <h2 className={styles.sectionTitle}>
              お客様のビジネスに<br />貢献するデザインを
            </h2>
            <p className={styles.sectionDesc}>
              イロドリでは、見た目の美しさだけでなく、使いやすさや更新のしやすさにこだわり、
              CMS導入やSEO対策を通じて、成果につながるサイトづくりをサポートします。
            </p>
            <div className={styles.valueGrid}>
              <div className={styles.valueCard} data-number="01">
                <p className={styles.valueTitle}>デザイン品質</p>
                <p className={styles.valueDesc}>
                  視覚的な美しさと機能性を兼ね備えたデザインで、訪問者に強い印象を与えます。
                  ブランドの世界観を丁寧に表現し、他社との差別化を図ります。
                </p>
              </div>
              <div className={styles.valueCard} data-number="02">
                <p className={styles.valueTitle}>使いやすさ・更新性</p>
                <p className={styles.valueDesc}>
                  CMSを活用した更新しやすい仕組みを構築。
                  専門知識がなくても、日々の情報発信を継続できる環境を提供します。
                </p>
              </div>
              <div className={styles.valueCard} data-number="03">
                <p className={styles.valueTitle}>成果へのコミット</p>
                <p className={styles.valueDesc}>
                  SEO対策や導線設計を取り入れ、アクセス増加・問い合わせ獲得など、
                  ビジネスの成果につながるサイトを制作します。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── サービス ── */}
        <div className={`${styles.section} ${styles.servicesBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>SERVICES</span>
            <h2 className={styles.sectionTitle}>提供サービス</h2>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNumber}>01</span>
                </div>
                <div className={styles.serviceBody}>
                  <span className={styles.serviceTag}>WEB DESIGN</span>
                  <p className={styles.serviceTitle}>ホームページ・WEBサイト制作</p>
                  <p className={styles.serviceDesc}>
                    8万円からのプランをご用意。SEO対策・CMS導入・レスポンシブ対応まで含めた、
                    高品質なWebサイトを制作します。
                  </p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNumber}>02</span>
                </div>
                <div className={styles.serviceBody}>
                  <span className={styles.serviceTag}>PRINT DESIGN</span>
                  <p className={styles.serviceTitle}>チラシ・印刷物デザイン</p>
                  <p className={styles.serviceDesc}>
                    店舗のチラシ、会社案内、名刺など各種印刷物のデザインを承ります。
                    Webと統一したブランドイメージで制作します。
                  </p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceHeader}>
                  <span className={styles.serviceNumber}>03</span>
                </div>
                <div className={styles.serviceBody}>
                  <span className={styles.serviceTag}>VIDEO PRODUCTION</span>
                  <p className={styles.serviceTitle}>動画制作</p>
                  <p className={styles.serviceDesc}>
                    会社紹介・商品PR・SNS向けショート動画など、目的に合わせた動画コンテンツを
                    企画から制作までサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── 会社概要 ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>COMPANY PROFILE</span>
            <h2 className={styles.sectionTitle}>会社概要</h2>
            <div className={styles.profileCard}>
              <table>
                <tbody>
                  <tr>
                    <th>会社名</th>
                    <td>イロドリ</td>
                  </tr>
                  <tr>
                    <th>所在地</th>
                    <td>千葉県船橋市</td>
                  </tr>
                  <tr>
                    <th>事業内容</th>
                    <td>
                      ホームページ・WEBサイト制作<br />
                      チラシ・印刷物デザイン<br />
                      動画制作
                    </td>
                  </tr>
                  <tr>
                    <th>対応エリア</th>
                    <td>千葉県・東京都近郊（全国リモート対応可）</td>
                  </tr>
                  <tr>
                    <th>制作実績</th>
                    <td>飲食店、士業、美容・医療、EC、スクールなど多業種</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
