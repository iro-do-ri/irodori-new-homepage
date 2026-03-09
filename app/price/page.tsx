import type { Metadata } from "next";
import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import styles from "./Price.module.scss";

export const metadata: Metadata = {
  title: "料金プラン｜船橋のホームページ制作 10万円〜【イロドリ】",
  description:
    "船橋のホームページ制作会社イロドリの料金プラン。ライトプラン10万円〜、スタンダード30万円〜、フルカスタム50万円〜。WordPress・SEO設計込み。見積もり無料でご相談ください。",
  alternates: { canonical: "https://iro-do-ri.jp/price" },
  openGraph: {
    title: "料金プラン｜船橋のホームページ制作 10万円〜【イロドリ】",
    description:
      "船橋のホームページ制作会社イロドリの料金プラン。ライトプラン10万円〜、スタンダード30万円〜、フルカスタム50万円〜。WordPress・SEO設計込み。見積もり無料。",
    url: "https://iro-do-ri.jp/price",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "料金プラン｜船橋のホームページ制作 10万円〜【イロドリ】",
    description:
      "船橋のホームページ制作 ライトプラン10万円〜、スタンダード30万円〜、フルカスタム50万円〜。WordPress・SEO設計込み。見積もり無料。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const plans = [
  {
    type: "LIGHT",
    name: "ライトプラン",
    price: "100,000",
    desc: "はじめてWebサイトを作る方や、シンプルで信頼感のあるサイトをお求めの方におすすめです。",
    features: [
      "1ページ以内",
      "Wordpress CMS導入（自社更新可）",
      "デザインは固定デザイン",
      "レスポンシブ対応",
      "お問い合わせフォーム",
    ],
    featured: false,
  },
  {
    type: "STANDARD",
    name: "スタンダードプラン",
    price: "300,000",
    desc: "CMS導入で自社更新が可能。SEO対策も行いたいスモールビジネス向けの定番プランです。",
    features: [
      "8ページ以内",
      "Wordpress CMS導入（自社更新可）",
      "デザインはオリジナル",
      "レスポンシブ対応",
      "簡易的なSEO対策",
      "お問い合わせフォーム",
      "公開後、保守サポート（3ヶ月）",
    ],
    featured: true,
  },
  {
    type: "FULL CUSTOM",
    name: "フルカスタムプラン",
    price: "500,000",
    desc: "ブランドの世界観を最大限に表現したいお客様向け。Micro CMSなのでセキュリティーも万全でSEO対策も。",
    features: [
      "ページ数無制限",
      "Micro CMS導入（自社更新可）",
      "デザインはオリジナル",
      "レスポンシブ対応",
      "3ヶ月間のSEO対策・分析",
      "お問い合わせフォーム",
      "公開後、保守サポート（6ヶ月）",
    ],
    featured: false,
  },
];

const faqs = [
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "プランや内容によって異なりますが、ライトプランで約3〜4週間、スタンダードプランで約6〜8週間が目安です。お急ぎの場合はご相談ください。",
  },
  {
    q: "料金に含まれるものは何ですか？",
    a: "各プランに記載の内容が含まれます。ドメイン取得・サーバー費用は別途実費となります。詳細はお見積り時にご説明します。",
  },
  {
    q: "制作後のサポートはありますか？",
    a: "各プランに公開後サポート期間を設けています。テキストや画像の修正対応、操作方法のご案内など、安心してご利用いただけます。",
  },
  {
    q: "途中で内容を変更することはできますか？",
    a: "制作開始前であれば内容の変更が可能です。制作開始後の大幅な変更は追加費用が発生する場合がございます。",
  },
];

export default function Price() {
  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>PRICE</span>
          <h1 className={styles.title}>
            ホームページ・WEBサイト制作の<br className="xl:block hidden" />
            料金について
          </h1>
          <p className={styles.description}>
            スモールビジネス向けから法人・中規模企業向けまで、幅広いプランをご用意。<br />
            10万円から、あなたのビジネスに合ったサイトを制作します。
          </p>
        </div>

        {/* ── コンセプト ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>OUR CONCEPT</span>
            <h2 className={styles.sectionTitle}>
              スモールビジネス向け<br />コストを抑えた高品質制作
            </h2>
            <p className={styles.sectionDesc}>
              イロドリでは、コストパフォーマンスを重視するスモールビジネスオーナー様のニーズに
              応えるためのプランをご用意しています。初めてWEBサイトを導入する方や、
              コストを抑えつつ信頼感のあるデザインを求める方に特におすすめです。
            </p>
            <div className={styles.conceptCard}>
              <p className={styles.conceptTitle}>10万円からホームページを作成します</p>
              <p className={styles.conceptDesc}>
                一番お求めやすいライトプランでは、10万円から始められるシンプルで高品質な
                ホームページ制作を致します。見た目の美しさだけでなく、
                使いやすさや更新のしやすさにもこだわり、成果につながるサイトづくりをサポートします。
              </p>
            </div>
          </div>
        </div>

        {/* ── 料金プラン ── */}
        <div className={`${styles.section} ${styles.plansBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>PLANS</span>
            <h2 className={styles.sectionTitle}>料金プラン</h2>
            <p className={styles.sectionDesc}>
              すべてのプランにレスポンシブ対応・お問い合わせフォームが含まれます。<br />
              ※表示価格は税抜きの目安です。詳細はお見積りにてご確認ください。
            </p>
            <div className={styles.planGrid}>
              {plans.map((plan) => (
                <div
                  key={plan.type}
                  className={`${styles.planCard} ${plan.featured ? styles.featured : ""}`}
                >
                  {plan.featured && (
                    <span className={styles.featuredBadge}>おすすめ</span>
                  )}
                  <div className={styles.planHeader}>
                    <span className={styles.planType}>{plan.type}</span>
                    <p className={styles.planName}>{plan.name}</p>
                    <div className={styles.planPriceRow}>
                      <span className={styles.planPrice}>¥{plan.price}</span>
                    </div>
                  </div>
                  <div className={styles.planBody}>
                    <p className={styles.planDesc}>{plan.desc}</p>
                    <hr className={styles.planDivider} />
                    <ul className={styles.featureList}>
                      {plan.features.map((f) => (
                        <li key={f} className={styles.featureItem}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>FAQ</span>
            <h2 className={styles.sectionTitle}>よくあるご質問</h2>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <div className={styles.faqQ}>
                    <span className={styles.qMark}>Q</span>
                    <p className={styles.qText}>{faq.q}</p>
                  </div>
                  <div className={styles.faqA}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <span className={styles.ctaLabel}>CONTACT</span>
          <h2 className={styles.ctaTitle}>
            まずはお気軽に<br />ご相談ください
          </h2>
          <p className={styles.ctaDesc}>
            ご予算・ご要望に合わせて柔軟にご提案いたします。<br />
            見積もり・ご相談は無料です。お気軽にどうぞ。
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
