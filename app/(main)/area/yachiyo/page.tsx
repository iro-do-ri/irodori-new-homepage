import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Yachiyo.module.scss";

export const metadata: Metadata = {
  title: "八千代のホームページ制作会社｜WordPress・SEO対策【イロドリ】",
  description:
    "八千代市のホームページ制作はイロドリへ。八千代緑が丘・八千代台エリアの個人事業主・中小企業向けにWordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。相談無料・対面打ち合わせOK。",
  keywords: ["八千代", "八千代市 ホームページ制作", "八千代緑が丘 ホームページ", "千葉 ホームページ制作", "WordPress", "SEO対策", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/area/yachiyo" },
  openGraph: {
    title: "八千代のホームページ制作会社｜WordPress・SEO対策【イロドリ】",
    description:
      "八千代市のホームページ制作はイロドリへ。八千代緑が丘・八千代台エリアの個人事業主向けに10万円〜でご提供。相談無料・対面打ち合わせOK。",
    url: "https://iro-do-ri.jp/area/yachiyo",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "八千代のホームページ制作会社｜WordPress・SEO対策【イロドリ】",
    description: "八千代市のホームページ制作はイロドリへ。10万円〜・相談無料・対面打ち合わせOK。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "八千代市からでも依頼できますか？対面打ち合わせは可能ですか？",
    a: "もちろんです。イロドリは船橋市に拠点を置いており、八千代市からは車や電車で30分以内とアクセスしやすい距離です。対面でのお打ち合わせもお気軽にご相談ください。オンラインでのご相談にも対応しています。",
  },
  {
    q: "八千代緑が丘で開業したばかりですが、ホームページを作れますか？",
    a: "ぜひお任せください。八千代緑が丘は人口が増え続けているエリアで、新規開業の方からのご相談も増えています。「何から始めればいいか」という段階からご相談いただいても大丈夫です。",
  },
  {
    q: "パーソナルジム・トリミングサロン・教室など小規模な店舗でも対応できますか？",
    a: "はい、得意としている分野です。予約フォームの設置、Googleマップとの連携、SNSとの連動など、小規模店舗に必要な機能を10万円〜のプランにまとめてご提供しています。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "1ページのシンプルなサイトは10万円〜、5ページ前後のコーポレートサイトは30万円〜、フルカスタムサイトは50万円〜をご用意しています。予算に合わせた提案が可能ですので、まずご相談ください。",
  },
  {
    q: "WordPressで自分でも更新できますか？",
    a: "はい。すべてのプランにWordPress（またはMicro CMS）を導入しており、公開後もご自身でお知らせや写真を更新いただけます。操作方法は丁寧にご説明しますのでご安心ください。",
  },
];

const features = [
  {
    title: "八千代緑が丘・八千代台の新規開業者を応援",
    desc: "イオンモール八千代緑が丘周辺やユアエルム八千代台周辺など、人口増加エリアで新規開業される方のご相談が増えています。「まだ開業したばかりで…」という方もお気軽にどうぞ。",
  },
  {
    title: "船橋拠点・八千代市内にも来られる距離感",
    desc: "船橋から八千代市は車で30分圏内。「大手のWeb制作会社は遠くて話しにくい」という方に、顔の見える対面サービスをご提供します。",
  },
  {
    title: "集客につながるSEO設計が標準装備",
    desc: "「八千代 パーソナルジム」「八千代緑が丘 美容室」など地域キーワードで検索上位を狙うSEO設計を標準で組み込んでいます。作って終わりではなく、集客まで考えたサイトをご提供します。",
  },
  {
    title: "担当者一人が最初から最後まで対応",
    desc: "営業・デザイン・コーディング・SEO対策まで、担当者一人が一貫して担当します。「話した内容が次の担当者に伝わっていない」というストレスが一切ありません。",
  },
];

const plans = [
  {
    type: "LIGHT",
    name: "ライトプラン",
    price: "100,000",
    priceSuffix: "〜（税込）",
    desc: "はじめてホームページを作る方や、シンプルで信頼感のあるサイトをお求めの方に。",
    features: ["1ページ以内", "WordPress導入（自社更新可）", "レスポンシブ対応", "お問い合わせフォーム"],
    featured: false,
  },
  {
    type: "STANDARD",
    name: "スタンダードプラン",
    price: "300,000",
    priceSuffix: "〜（税込）",
    desc: "集客を本格的に始めたいスモールビジネス向けの定番プラン。SEO対策込み。",
    features: ["5ページ以内", "WordPress導入（自社更新可）", "オリジナルデザイン", "SEO対策", "お問い合わせフォーム", "公開後サポート3ヶ月"],
    featured: true,
  },
  {
    type: "FULL CUSTOM",
    name: "フルカスタムプラン",
    price: "500,000",
    priceSuffix: "〜（税込）",
    desc: "ブランドの世界観を最大限に表現したい方向け。SEO対策・保守サポート6ヶ月込み。",
    features: ["10ページ以内", "Micro CMS導入", "オリジナルデザイン", "3ヶ月間SEO対策・分析", "お問い合わせフォーム", "公開後サポート6ヶ月"],
    featured: false,
  },
];

export default function YachiyoPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
      { "@type": "ListItem", position: 2, name: "八千代のホームページ制作", item: "https://iro-do-ri.jp/area/yachiyo" },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "イロドリ",
    url: "https://iro-do-ri.jp",
    telephone: "080-5543-5943",
    address: {
      "@type": "PostalAddress",
      postalCode: "274-0065",
      streetAddress: "高根台",
      addressLocality: "船橋市",
      addressRegion: "千葉県",
      addressCountry: "JP",
    },
    areaServed: [
      { "@type": "City", name: "八千代市" },
      { "@type": "City", name: "船橋市" },
      { "@type": "AdministrativeArea", name: "千葉県" },
    ],
    description: "八千代市のホームページ制作会社。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。",
  };

  return (
    <section className="flex">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>AREA / YACHIYO</span>
          <h1 className={styles.title}>
            八千代のホームページ制作会社｜WordPress・SEO対策【イロドリ】
          </h1>
        </div>

        <Breadcrumb items={[{ label: "八千代のホームページ制作" }]} />

        {/* ── 八千代エリアについて ── */}
        <div className={`${styles.section} ${styles.areaBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>ABOUT YACHIYO</span>
            <h2 className={styles.sectionTitle}>八千代市で開業された方へ</h2>
            <p className={styles.areaText}>
              八千代市は、東葉高速線の開通以来、八千代緑が丘エリアを中心に人口が増え続けている千葉県内でも注目の住宅都市です。
              イオンモール八千代緑が丘周辺には新規開業の店舗が相次ぎ、パーソナルジム・トリミングサロン・教室系など
              個人事業主の方が多く活躍しています。
            </p>
            <p className={styles.areaText}>
              一方、京成本線の八千代台エリアはユアエルムを中心とした老舗の商業エリアで、
              地域に根ざした飲食店・美容室・士業事務所など、長く地元のお客様に愛されているお店が多いエリアです。
              「古いホームページをリニューアルしたい」「スマホ対応させたい」というご相談もよくいただきます。
            </p>
            <p className={styles.areaText}>
              イロドリは船橋市に拠点を置いており、八千代市からは車で30分圏内。
              対面でのお打ち合わせも可能ですので、初めての方もお気軽にご連絡ください。
            </p>
          </div>
        </div>

        {/* ── 選ばれる理由 ── */}
        <div className={`${styles.section} ${styles.featuresBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>WHY IRODORI</span>
            <h2 className={styles.sectionTitle}>八千代エリアでイロドリが選ばれる4つの理由</h2>
            <div className={styles.featureGrid}>
              {features.map((f, i) => (
                <div key={i} className={styles.featureCard} data-number={`0${i + 1}`}>
                  <p className={styles.featureTitle}>{f.title}</p>
                  <p className={styles.featureDesc}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 料金プラン ── */}
        <div className={`${styles.section} ${styles.plansBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>PLANS</span>
            <h2 className={styles.sectionTitle}>料金プラン</h2>
            <p className={styles.sectionDesc}>
              すべてのプランにWordPress・レスポンシブ対応・お問い合わせフォームが含まれます。<br />
              ※表示価格は税抜きの目安です。詳細はお見積りにてご確認ください。
            </p>
            <div className={styles.planGrid}>
              {plans.map((plan) => (
                <div key={plan.type} className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ""}`}>
                  {plan.featured && <span className={styles.planBadge}>おすすめ</span>}
                  <span className={styles.planType}>{plan.type}</span>
                  <p className={styles.planName}>{plan.name}</p>
                  <p className={styles.planPrice}>¥{plan.price}<span className={styles.planPriceSuffix}>{plan.priceSuffix}</span></p>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  <ul className={styles.planFeatures}>
                    {plan.features.map((f) => <li key={f} className={styles.planFeatureItem}>{f}</li>)}
                  </ul>
                  <Link href={`${URL.Contact}?plan=${encodeURIComponent(plan.name)}`} className={`${styles.box_button} inline-block w-full text-center`} aria-label={`${plan.name}で無料相談する`}>
                    <span className={`${styles.background_button} ${styles.contact_button}`}></span>
                    <span className={`${styles.contents_button} px-6 py-3 inline-block w-full`}>このプランで相談する</span>
                  </Link>
                </div>
              ))}
            </div>
            <Link href={URL.Price} className={styles.planMoreLink}>すべての料金プランを見る →</Link>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className={`${styles.section} ${styles.faqBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>FAQ</span>
            <h2 className={styles.sectionTitle}>よくあるご質問</h2>
            <div className={styles.faqList}>
              {faqs.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <div className={styles.faqQ}>
                    <span className={styles.qMark}>Q.</span>
                    <p className={styles.qText}>{faq.q}</p>
                  </div>
                  <div className={styles.faqA}><p>{faq.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <span className={styles.ctaLabel}>CONTACT</span>
          <h2 className={styles.ctaTitle}>
            八千代市からのご相談、お待ちしています。
          </h2>
          <p className={styles.ctaDesc}>
            八千代緑が丘・八千代台どちらのエリアからでも歓迎です。<br />
            見積もり・ご相談は無料。まず話すだけでも大丈夫です。
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
