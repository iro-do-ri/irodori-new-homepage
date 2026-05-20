import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Tsudanuma.module.scss";

export const metadata: Metadata = {
  title: "津田沼のホームページ制作｜個人事業主・中小企業向け10万円〜【イロドリ】",
  description:
    "津田沼・習志野エリアのホームページ制作はイロドリへ。船橋拠点の地元密着Web制作会社。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。相談無料・対面打ち合わせOK。",
  keywords: ["津田沼", "津田沼 ホームページ制作", "習志野 ホームページ制作", "千葉 ホームページ制作", "WordPress", "SEO対策", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/area/tsudanuma" },
  openGraph: {
    title: "津田沼のホームページ制作｜個人事業主・中小企業向け10万円〜【イロドリ】",
    description:
      "津田沼・習志野エリアのホームページ制作はイロドリへ。船橋拠点の地元密着Web制作会社。10万円〜・相談無料・対面打ち合わせOK。",
    url: "https://iro-do-ri.jp/area/tsudanuma",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "津田沼のホームページ制作｜個人事業主・中小企業向け10万円〜【イロドリ】",
    description:
      "津田沼・習志野エリアのホームページ制作はイロドリへ。船橋拠点の地元密着Web制作会社。10万円〜・相談無料。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "津田沼からでもホームページ制作を依頼できますか？",
    a: "もちろんです。イロドリは千葉県船橋市に拠点を置いており、津田沼・習志野エリアからのご依頼も積極的にお受けしています。対面でのお打ち合わせも可能ですので、お気軽にご相談ください。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "1ページのシンプルなサイトは10万円〜、5ページ前後のコーポレートサイトは30万円〜、フルカスタムサイトは50万円〜をご用意しています。ご予算に合わせて柔軟にご提案しますので、まずはご相談ください。",
  },
  {
    q: "どんな業種のホームページ制作に対応していますか？",
    a: "飲食店・美容室・整骨院・税理士・工務店・個人事業主など、幅広い業種に対応しています。津田沼エリアの店舗・事務所・クリニックなど、お気軽にご相談ください。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "プランによって異なりますが、ライトプランで約3〜4週間、スタンダードプランで約6〜8週間が目安です。お急ぎの場合はご相談ください。",
  },
  {
    q: "WordPressで自分でも更新できますか？",
    a: "はい。すべてのプランにWordPress（またはMicro CMS）を導入しており、公開後もご自身でテキストや画像を更新していただけます。操作方法もご説明しますので安心してお任せください。",
  },
];

const features = [
  {
    title: "地元・船橋拠点だから対面対応OK",
    desc: "津田沼から電車で数分の船橋に拠点があるため、対面でのお打ち合わせが可能です。Web制作会社に「話しづらさ」を感じている方にこそ選ばれています。",
  },
  {
    title: "10万円〜の明確な料金設定",
    desc: "「ホームページ制作はいくらかかるかわからない」という不安を解消するため、明確な料金プランをご用意。追加費用が発生する場合も事前にご説明します。",
  },
  {
    title: "SEO設計込みで集客できるサイトに",
    desc: "デザインだけでなく、検索エンジンで上位表示されるためのSEO設計を標準で組み込んでいます。作って終わりではなく、集客につながるサイトをご提供します。",
  },
  {
    title: "担当者一人が最初から最後まで対応",
    desc: "営業・デザイン・コーディング・SEO対策まで、担当者一人が一貫して対応。「言ったことが伝わらない」「担当が変わった」といったストレスがありません。",
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

export default function TsudanumaPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
      { "@type": "ListItem", position: 2, name: "津田沼のホームページ制作", item: "https://iro-do-ri.jp/area/tsudanuma" },
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
      { "@type": "City", name: "習志野市" },
      { "@type": "City", name: "船橋市" },
      { "@type": "AdministrativeArea", name: "千葉県" },
    ],
    description: "津田沼・習志野エリアのホームページ制作会社。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。",
  };

  return (
    <section className="flex">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>AREA / TSUDANUMA</span>
          <h1 className={styles.title}>
            津田沼のホームページ制作<br />
            個人事業主・中小企業向け
          </h1>
          <p className={styles.description}>
            津田沼・習志野エリアのホームページ制作はイロドリへ。<br />
            船橋拠点の地元密着Web制作会社が、<br className="hidden sm:block" />
            WordPressサイト・SEO対策を10万円〜でご提供します。<br />
            相談無料・対面打ち合わせOK。
          </p>
          <Link
            href={URL.Contact}
            className={`${styles.box_button} inline-block`}
            aria-label="無料相談ページへ移動します"
          >
            <span className={`${styles.background_button} ${styles.contact_button}`}></span>
            <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span>
          </Link>
        </div>

        <Breadcrumb items={[{ label: "津田沼のホームページ制作" }]} />

        {/* ── 津田沼エリアについて ── */}
        <div className={`${styles.section} ${styles.areaBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>ABOUT TSUDANUMA</span>
            <h2 className={styles.sectionTitle}>津田沼・習志野エリアの事業者様へ</h2>
            <p className={styles.areaText}>
              津田沼は習志野市と船橋市にまたがる千葉県有数の商業エリアです。
              大型ショッピングセンターが集積し、飲食店・美容室・クリニック・士業事務所など
              多くの事業者が集まるエリアです。
            </p>
            <p className={styles.areaText}>
              「ホームページを作りたいけど、どこに頼めばいいかわからない」
              「大手に頼むと高そうで…」とお悩みの津田沼エリアの事業者様に、
              地元・船橋拠点のイロドリが寄り添います。
              対面でのお打ち合わせも可能ですので、はじめての方でも安心してご依頼いただけます。
            </p>
          </div>
        </div>

        {/* ── 選ばれる理由 ── */}
        <div className={`${styles.section} ${styles.featuresBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>WHY IRODORI</span>
            <h2 className={styles.sectionTitle}>津田沼エリアでイロドリが選ばれる4つの理由</h2>
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
                <div
                  key={plan.type}
                  className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ""}`}
                >
                  {plan.featured && (
                    <span className={styles.planBadge}>おすすめ</span>
                  )}
                  <span className={styles.planType}>{plan.type}</span>
                  <p className={styles.planName}>{plan.name}</p>
                  <p className={styles.planPrice}>
                    ¥{plan.price}
                    <span className={styles.planPriceSuffix}>{plan.priceSuffix}</span>
                  </p>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  <ul className={styles.planFeatures}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.planFeatureItem}>{f}</li>
                    ))}
                  </ul>
                  <Link
                    href={`${URL.Contact}?plan=${encodeURIComponent(plan.name)}`}
                    className={`${styles.box_button} inline-block w-full text-center`}
                    aria-label={`${plan.name}で無料相談する`}
                  >
                    <span className={`${styles.background_button} ${styles.contact_button}`}></span>
                    <span className={`${styles.contents_button} px-6 py-3 inline-block w-full`}>このプランで相談する</span>
                  </Link>
                </div>
              ))}
            </div>
            <Link href={URL.Price} className={styles.planMoreLink}>
              すべての料金プランを見る →
            </Link>
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
            津田沼・習志野エリアからのご相談<br />
            お気軽にどうぞ
          </h2>
          <p className={styles.ctaDesc}>
            ご予算・ご要望に合わせて柔軟にご提案いたします。<br />
            見積もり・ご相談は無料。対面打ち合わせも歓迎です。
          </p>
          <Link
            href={URL.Contact}
            className={`${styles.box_button} inline-block`}
            aria-label="無料相談ページへ移動します"
          >
            <span className={`${styles.background_button} ${styles.contact_button}`}></span>
            <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
