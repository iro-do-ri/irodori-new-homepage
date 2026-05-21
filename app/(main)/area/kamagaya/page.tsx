import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";
import styles from "./Kamagaya.module.scss";

export const metadata: Metadata = {
  title: "鎌ヶ谷のホームページ制作会社｜WordPress・SEO対策【イロドリ】",
  description:
    "鎌ヶ谷市のホームページ制作はイロドリへ。新鎌ケ谷・鎌ヶ谷大仏エリアの個人事業主・中小企業向けにWordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。相談無料・対面打ち合わせOK。",
  keywords: ["鎌ヶ谷", "鎌ヶ谷市 ホームページ制作", "新鎌ケ谷 ホームページ", "千葉 ホームページ制作", "WordPress", "SEO対策", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/area/kamagaya" },
  openGraph: {
    title: "鎌ヶ谷のホームページ制作会社｜WordPress・SEO対策【イロドリ】",
    description: "鎌ヶ谷市のホームページ制作はイロドリへ。10万円〜・相談無料・対面打ち合わせOK。",
    url: "https://iro-do-ri.jp/area/kamagaya",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "鎌ヶ谷のホームページ制作会社｜WordPress・SEO対策【イロドリ】",
    description: "鎌ヶ谷市のホームページ制作はイロドリへ。10万円〜・相談無料。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    q: "鎌ヶ谷市からでも依頼できますか？",
    a: "もちろんです。イロドリは船橋市に拠点を置いており、鎌ヶ谷市からは車・電車ともにアクセスしやすい距離です。対面でのお打ち合わせも可能ですし、オンラインでのご相談にも対応しています。",
  },
  {
    q: "個人で経営している小さなお店でも依頼できますか？",
    a: "はい、むしろ個人事業主の方からのご依頼が多いです。鎌ヶ谷市のような住宅都市では、地域に根ざした個人経営の店舗がホームページで差をつけるケースが多くあります。予算に合わせたプランをご提案しますのでお気軽にご相談ください。",
  },
  {
    q: "費用はどのくらいかかりますか？",
    a: "1ページのシンプルなサイトは10万円〜、5ページ前後のコーポレートサイトは30万円〜、フルカスタムサイトは50万円〜です。「予算が少ないけど、それなりのものを作りたい」というご相談も歓迎です。",
  },
  {
    q: "古いホームページのリニューアルも対応できますか？",
    a: "はい、対応しています。スマホ対応・デザインの刷新・WordPress化など、既存サイトの内容を活かしながらリニューアルすることが可能です。現状のサイトを見せていただければ、必要な対応をご提案します。",
  },
  {
    q: "公開後のサポートはありますか？",
    a: "はい。各プランに公開後のサポート期間を設けており、テキスト・画像の修正や操作方法のご案内に対応しています。「更新のやり方がわからない」という場合も丁寧にサポートします。",
  },
];

const features = [
  {
    title: "新鎌ケ谷駅周辺の開業者・既存店舗どちらも対応",
    desc: "アクロスモール新鎌ケ谷やイオン鎌ヶ谷SC周辺で新規開業された方、また長年地域で営業されている方のリニューアル相談も多くいただいています。どの段階からでも対応可能です。",
  },
  {
    title: "住宅都市だからこそ地域密着SEOが効く",
    desc: "鎌ヶ谷市のような住宅都市では「鎌ヶ谷 ○○」という地域キーワードで検索するユーザーが多く、地域特化SEOの効果が出やすいエリアです。地名を活かした集客設計をご提案します。",
  },
  {
    title: "船橋拠点・鎌ヶ谷市とは隣接エリア",
    desc: "船橋市と鎌ヶ谷市は隣接しており、対面での打ち合わせも無理なく対応できる距離です。「顔を見て話したい」という方もお気軽にどうぞ。",
  },
  {
    title: "担当者一人が最初から最後まで対応",
    desc: "ヒアリングからデザイン・コーディング・SEO対策・公開後サポートまで、すべて同じ担当者が対応します。制作途中で担当が変わって話が通じなくなる、ということがありません。",
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

export default function KamagayaPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
      { "@type": "ListItem", position: 2, name: "鎌ヶ谷のホームページ制作", item: "https://iro-do-ri.jp/area/kamagaya" },
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
      { "@type": "City", name: "鎌ヶ谷市" },
      { "@type": "City", name: "船橋市" },
      { "@type": "AdministrativeArea", name: "千葉県" },
    ],
    description: "鎌ヶ谷市のホームページ制作会社。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。",
  };

  return (
    <section className="flex">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>AREA / KAMAGAYA</span>
          <h1 className={styles.title}>
            鎌ヶ谷のホームページ制作会社｜WordPress・SEO対策【イロドリ】
          </h1>
        </div>

        <Breadcrumb items={[{ label: "鎌ヶ谷のホームページ制作" }]} />

        {/* ── 鎌ヶ谷エリアについて ── */}
        <div className={`${styles.section} ${styles.areaBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>ABOUT KAMAGAYA</span>
            <h2 className={styles.sectionTitle}>鎌ヶ谷市で事業をされている方へ</h2>
            <div className={styles.areaLayout}>
              <div className={styles.areaBody}>
                <p className={styles.areaText}>
                  鎌ヶ谷市は東武野田線・京成線・北総線・成田スカイアクセス線の4路線が乗り入れる交通利便性の高い住宅都市です。
                  新鎌ケ谷駅前にはアクロスモール新鎌ケ谷やイオン鎌ヶ谷SCが立地し、飲食・美容・日用品など生活に根ざした
                  お店が多く集まっています。
                </p>
                <p className={styles.areaText}>
                  住宅都市である鎌ヶ谷市は、地域のお客様を大切にする個人経営の店舗が多いエリアです。
                  「Googleで名前を検索したときに何も出てこない」「友人に紹介するときにURLを教えられない」
                  といった理由でホームページ制作のご相談をいただくケースが多くあります。
                </p>
                <p className={styles.areaText}>
                  船橋市に拠点を置くイロドリは、鎌ヶ谷市と隣接した距離感です。
                  「Web制作会社は敷居が高い」と感じている方も、まず気軽にお声がけください。
                </p>
              </div>
              <div className={styles.areaImageWrap}>
                <Image
                  src="/kamagaya-station-area-kamagaya-chiba.jpg"
                  alt="鎌ヶ谷駅前エリアの街並み（鎌ヶ谷市）"
                  width={640}
                  height={427}
                  className={styles.areaImage}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ── 選ばれる理由 ── */}
        <div className={`${styles.section} ${styles.featuresBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>WHY IRODORI</span>
            <h2 className={styles.sectionTitle}>鎌ヶ谷エリアでイロドリが選ばれる4つの理由</h2>
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
            まず話すだけでも大丈夫です。<br />
            鎌ヶ谷市からのご相談、お待ちしています。
          </h2>
          <p className={styles.ctaDesc}>
            見積もり・ご相談は無料です。<br />
            「何から始めればいいかわからない」という方も歓迎します。
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
