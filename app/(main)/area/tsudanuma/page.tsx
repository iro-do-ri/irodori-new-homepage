import type { Metadata } from "next";
import Image from "next/image";
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
    q: "津田沼・習志野から依頼できますか？対面での打ち合わせは可能ですか？",
    a: "もちろんです。イロドリは津田沼から電車で数分の船橋市に拠点を置いています。対面でのお打ち合わせを希望される方は、ご都合に合わせてお時間を調整しますのでお気軽にご連絡ください。もちろんオンラインでのご相談にも対応しています。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "1ページのシンプルなサイトは10万円〜、5ページ前後のコーポレートサイトは30万円〜、フルカスタムサイトは50万円〜をご用意しています。「予算はあまりないけど、ちゃんとしたものを作りたい」というご相談も歓迎です。まずは気軽にお話しください。",
  },
  {
    q: "スマホ対応していない古いホームページのリニューアルも対応できますか？",
    a: "はい、対応しています。津田沼・習志野エリアでも「10年前に作ったサイトをスマホ対応にしたい」「デザインが古くなってきた」というご相談を多くいただいています。既存サイトの内容を引き継ぎながらリニューアルすることも可能ですので、まずはご相談ください。",
  },
  {
    q: "美容室・整骨院・学習塾のホームページ制作も対応していますか？",
    a: "はい、得意としている業種のひとつです。津田沼・奏の杜エリアでも美容室・整骨院・学習塾・クリニックなど地域密着型の店舗様からのご依頼をいただいています。予約フォームの設置やGoogleマップとの連携など、集客に直結する機能もご提案できます。",
  },
  {
    q: "WordPressで自分でも更新できますか？",
    a: "はい。すべてのプランにWordPress（またはMicro CMS）を導入しており、公開後もご自身でお知らせや写真を更新していただけます。「パソコンが苦手で…」という方にも、実際に操作しながら丁寧にご説明しますので安心してください。",
  },
];

const features = [
  {
    title: "津田沼から数分・船橋拠点だから顔が見える",
    desc: "「Web制作会社って話しかけづらい」という声をよく聞きます。イロドリは津田沼から電車で数分の船橋市が拠点なので、対面でのお打ち合わせが可能です。開業したばかりで何から相談すればいいかわからない方も、まず話しかけてみてください。",
  },
  {
    title: "津田沼で開業した個人事業主をしっかりサポート",
    desc: "奏の杜エリアを中心に、美容室・整骨院・学習塾・士業など個人事業主の方からのご依頼を多くいただいています。「開業したばかりでホームページの予算が取れない」という方向けに、10万円〜の明確な料金プランをご用意しています。",
  },
  {
    title: "SEO設計込み・Googleで見つけてもらえるサイトに",
    desc: "津田沼・習志野で検索されたときに上位に表示されるよう、SEO設計を標準で組み込んでいます。「作ったけど誰にも見てもらえない」とならないよう、公開後の集客まで考えたサイト制作を行います。",
  },
  {
    title: "営業・デザイン・SEOまで担当者一人が対応",
    desc: "大手制作会社のように担当が次々変わることはありません。最初のヒアリングから公開後のサポートまで、同じ担当者が一貫して対応します。「あのとき話したことが伝わっていない」というストレスがありません。",
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
          <ul className={styles.heroList}>
            <li>津田沼・習志野で開業した方のホームページ制作をサポートします。</li>
            <li>美容室・整骨院・学習塾・士業など、地域密着型のお仕事をされている方から多くのご相談をいただいています。</li>
            <li>相談無料・対面打ち合わせOK。</li>
          </ul>
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
            <div className={styles.areaLayout}>
              <div className={styles.areaBody}>
                <span className={styles.sectionLabel}>ABOUT TSUDANUMA</span>
                <h2 className={styles.sectionTitle}>津田沼・習志野エリアで開業された方へ</h2>
                <p className={styles.areaText}>
                  津田沼駅周辺は習志野市と船橋市にまたがる、千葉県内でも有数の商業・住宅エリアです。
                  モリシア津田沼の再開発が進む駅北口エリア、整骨院・学習塾・美容室が集まる奏の杜、
                  飲食店や医療クリニックが立ち並ぶ駅南口など、地域密着型のビジネスが多く根付いています。
                </p>
                <p className={styles.areaText}>
                  最近では「古いホームページをスマホ対応にしたい」「開業したのでゼロからサイトを作りたい」
                  というご相談を津田沼・習志野エリアの方からいただく機会が増えています。
                  特に美容室・整骨院・学習塾・士業など、地域のお客様を大切にされているお仕事の方から
                  多くご連絡をいただいています。
                </p>
                <p className={styles.areaText}>
                  「Web制作会社って敷居が高そう…」と感じている方ほど、まずお気軽にご相談ください。
                  津田沼から電車で数分の船橋市に拠点を置いているので、カフェや事務所での対面打ち合わせも可能です。
                </p>
              </div>
              <div className={styles.areaImageWrap}>
                <Image
                  src="/tsudanuma-station-area-narashino-chiba.jpg"
                  alt="津田沼駅前エリアの街並み（習志野市）"
                  width={640}
                  height={427}
                  className={styles.areaImage}
                  priority={false}
                />
              </div>
            </div>
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
            まず話すだけでも大丈夫です。<br />
            津田沼・習志野エリアからのご相談、お待ちしています。
          </h2>
          <p className={styles.ctaDesc}>
            「何から相談すればいいかわからない」という方も歓迎です。<br />
            見積もり・ご相談は無料。対面打ち合わせも気軽にご利用ください。
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
