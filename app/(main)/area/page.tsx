import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../url/Url";
import Breadcrumb from "../parts/Breadcrumb";
import styles from "./Area.module.scss";

export const metadata: Metadata = {
  title: "対応エリア｜千葉・船橋近郊のホームページ制作【イロドリ】",
  description:
    "イロドリは船橋市を拠点に、津田沼・八千代・鎌ヶ谷など千葉県内の近隣エリアからのホームページ制作依頼に対応しています。対面打ち合わせOK・相談無料。",
  keywords: ["千葉 ホームページ制作", "船橋 ホームページ制作", "津田沼", "八千代", "鎌ヶ谷", "対応エリア", "イロドリ"],
  alternates: { canonical: "https://iro-do-ri.jp/area" },
  openGraph: {
    title: "対応エリア｜千葉・船橋近郊のホームページ制作【イロドリ】",
    description: "船橋市を拠点に津田沼・八千代・鎌ヶ谷など近隣エリアに対応。相談無料・対面打ち合わせOK。",
    url: "https://iro-do-ri.jp/area",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "対応エリア｜千葉・船橋近郊のホームページ制作【イロドリ】",
    description: "船橋市拠点。津田沼・八千代・鎌ヶ谷など千葉県内の近隣エリアからの相談も歓迎。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const areas = [
  {
    eyebrow: "TSUDANUMA / NARASHINO",
    title: "津田沼・習志野",
    subtitle: "船橋から最短15分",
    desc: "JR総武線・東葉高速線が乗り入れる津田沼エリア。モリシア津田沼周辺の飲食・美容・士業から、奏の杜エリアの新規開業者まで幅広く対応しています。「Googleで検索されても出てこない」という方の最初の相談にも丁寧に対応します。",
    tags: ["個人事業主", "新規開業", "リニューアル", "WordPress"],
    href: URL.AreaTsudanuma,
  },
  {
    eyebrow: "YACHIYO",
    title: "八千代",
    subtitle: "車で約30分",
    desc: "東葉高速線で人口増加が続く八千代緑が丘エリアと、京成本線沿いの八千代台エリア。パーソナルジム・トリミングサロン・教室系など個人事業主の方からのご依頼が増えています。地域キーワードに強いSEO設計で差別化をサポートします。",
    tags: ["パーソナルジム", "美容室", "教室系", "地域SEO"],
    href: URL.AreaYachiyo,
  },
  {
    eyebrow: "KAMAGAYA",
    title: "鎌ヶ谷",
    subtitle: "隣接エリア",
    desc: "東武野田線・京成線・北総線・成田スカイアクセス線の4路線が乗り入れる住宅都市。新鎌ケ谷駅周辺の個人経営店舗・士業事務所を中心に、「ホームページが古くなった」「スマホ対応させたい」というリニューアル相談も歓迎です。",
    tags: ["住宅都市", "個人経営", "リニューアル", "士業"],
    href: URL.AreaKamagaya,
  },
];

const accessInfo = [
  { area: "津田沼・習志野", time: "15分", unit: "〜（電車・車）", note: "JR総武線で船橋から2駅。対面打ち合わせのご依頼が多いエリアです。" },
  { area: "八千代", time: "30分", unit: "〜（車）", note: "東葉高速線または車でアクセス可能。オンライン相談も対応しています。" },
  { area: "鎌ヶ谷", time: "20分", unit: "〜（車）", note: "船橋市と隣接。「近いから安心」と対面相談を選ばれる方が多いです。" },
];

export default function AreaPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
      { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://iro-do-ri.jp/area" },
    ],
  };

  return (
    <section className="flex">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>SERVICE AREA</span>
          <h1 className={styles.title}>
            対応エリア
          </h1>
          <p className={styles.heroDesc}>
            船橋市を拠点に、津田沼・八千代・鎌ヶ谷など千葉県内の近隣エリアからの
            ホームページ制作依頼に対応しています。対面でのお打ち合わせも可能ですので、
            まずはお気軽にご相談ください。
          </p>
        </div>

        <Breadcrumb items={[{ label: "対応エリア" }]} />

        {/* ── エリア一覧 ── */}
        <div className={`${styles.section} ${styles.areasBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>AREAS WE SERVE</span>
            <h2 className={styles.sectionTitle}>制作対応エリア</h2>
            <p className={styles.sectionDesc}>
              船橋市からアクセスしやすい近隣エリアを中心に対応しています。
              記載のないエリアもお気軽にご相談ください。
            </p>
            <div className={styles.areasGrid}>
              {areas.map((area) => (
                <Link key={area.href} href={area.href} className={styles.areaCard} aria-label={`${area.title}のホームページ制作ページへ`}>
                  <div className={styles.areaCardBody}>
                    <span className={styles.areaCardEyebrow}>{area.eyebrow}</span>
                    <p className={styles.areaCardTitle}>{area.title}</p>
                    <p className={styles.areaCardSubtitle}>{area.subtitle}</p>
                    <p className={styles.areaCardDesc}>{area.desc}</p>
                    <div className={styles.areaCardTags}>
                      {area.tags.map((tag) => (
                        <span key={tag} className={styles.areaCardTag}>{tag}</span>
                      ))}
                    </div>
                    <span className={styles.areaCardArrow}>詳しく見る →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── アクセス ── */}
        <div className={`${styles.section} ${styles.accessBg}`}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>ACCESS</span>
            <h2 className={styles.sectionTitle}>船橋拠点だから近い</h2>
            <p className={styles.sectionDesc}>
              「Web制作会社は都内の会社ばかり」と思っていませんか。
              イロドリは千葉県船橋市が拠点。近隣エリアなら対面打ち合わせもお気軽にどうぞ。
            </p>
            <div className={styles.accessGrid}>
              {accessInfo.map((info) => (
                <div key={info.area} className={styles.accessCard}>
                  <p className={styles.accessCardArea}>{info.area}</p>
                  <p className={styles.accessCardTime}>
                    {info.time}<span>{info.unit}</span>
                  </p>
                  <p className={styles.accessCardNote}>{info.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <span className={styles.ctaLabel}>CONTACT</span>
          <h2 className={styles.ctaTitle}>
            エリアに関わらず、<br />
            まずはお気軽にご相談ください。
          </h2>
          <p className={styles.ctaDesc}>
            記載のないエリアからのご依頼もご相談を受け付けています。<br />
            見積もり・相談は無料です。
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
