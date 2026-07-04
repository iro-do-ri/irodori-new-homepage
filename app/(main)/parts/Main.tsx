"use client";

import styles from "./Main.module.scss";
import Link from "next/link";
import { URL } from "../url/Url";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const homePlans = [
  {
    type: "LIGHT",
    name: "ライトプラン",
    price: "100,000",
    desc: "はじめてWebサイトを作る方や、シンプルで信頼感のあるサイトをお求めの方におすすめです。",
    features: [
      "1ページ以内",
      "WordPress CMS導入（自社更新可）",
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
      "5ページ以内",
      "WordPress CMS導入（自社更新可）",
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
    desc: "ブランドの世界観を最大限に表現したいお客様向け。Micro CMS導入でセキュリティも万全、SEO対策も対応。",
    features: [
      "10ページ以内",
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

type Work = {
  id: string;
  title: string;
  category: string;
  image: { url: string; width: number; height: number };
  url: string;
};

export default function Main({ works }: { works: Work[] }) {
  return (
    <main className={styles.main}>

      {/* ── キャッチフレーズ ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            <span className="block mb-2">千葉県船橋のホームページ制作会社｜WordPressサイト制作・SEO対策</span>
            あなたの理想を<br />デザインで形にします
          </h1>
          <div className={styles.heroSub}>
            <p className="mb-4 block">
              千葉県船橋を拠点に、個人事業主・中小企業向けの<br />
              ホームページ制作を10万円から対応。<br />
              SEO設計・WordPress構築・公開後サポートまで、<br className="hidden sm:block" />
              相談から公開まで一人の担当者が丁寧に進めます。
            </p>
            <ul className={styles.heroProofs}>
              <li>10万円から制作</li>
              <li>WordPress対応</li>
              <li>公開後サポートあり</li>
            </ul>
            <p className="text-sm mb-3 opacity-70">まだ依頼が決まっていなくてもOK。見積もりだけでも歓迎です。</p>
            <Link href={URL.Contact} className={`${styles.box_button} inline-block`} aria-label="無料相談ページへ移動します">
              <span className={`${styles.background_button} ${styles.contact_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 期間限定キャンペーン ── */}
      <section className={styles.campaign}>
        <div className={styles.campaignInner}>
          <div className={styles.campaignBadgeWrap}>
            <span className={styles.campaignBadge}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
              今だけの特別サービス
            </span>
          </div>
          <p className={styles.campaignTarget}>千葉または船橋で開業したての個人事業主の方へ</p>
          <h2 className={styles.campaignTitle}>
            <em className={styles.campaignPrice}>10万円</em>で<br />
            &ldquo;集客できる&rdquo;ホームページを作ります。
          </h2>
          <p className={styles.campaignDesc}>
            開業直後の集客は時間との勝負。SEO設計済みの本格ホームページを、<br className="hidden sm:block" />
            今だけの特別価格でご提供します。まずはお気軽にご相談ください。
          </p>
          <ul className={styles.campaignPoints}>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>SEO設計・キーワード構成込み</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>WordPress CMSで自社更新できる</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>公開後のサポートあり</li>
          </ul>
          <Link href={URL.Contact} className={`${styles.box_button} inline-block`} aria-label="期間限定プランの無料相談へ">
            <span className={`${styles.background_button} ${styles.campaign_button}`}></span>
            <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span>
          </Link>
        </div>
      </section>

      {/* ── 実績 ── */}
      <section className={`${styles.worksSection} relative`}>
        <div className={`${styles.worksSectionInner} xl:max-w-[1200px] xl:w-full`}>
          <span className={styles.curtainEyebrow}>OUR WORKS</span>
          <h2 className="mb-6 sm:mb-12">千葉県船橋のホームページ制作 実績紹介</h2>
          <h3 className="mb-2 sm:mb-3">飲食・士業・美容・医療など、多彩な業種のホームページを制作しています。</h3>
          <p className="mb-6 sm:mb-12">千葉県船橋を中心にホームページ制作の実績の一部をご紹介いたします。</p>
          <Splide
            options={{
              type: works.length > 3 ? "loop" : "slide",
              perPage: 3,
              perMove: 1,
              gap: "1.5rem",
              breakpoints: { 1280: { perPage: 2 }, 640: { perPage: 1 } },
            }}
            className="mb-12"
          >
            {works.map((work, index) => (
              <SplideSlide key={work.id}>
                <div className={styles.workCard}>
                  <div className={styles.workImageWrap}>
                    <img
                      src={work.image.url}
                      alt={`${work.title}のホームページ制作実績｜イロドリ`}
                      className={styles.workImage}
                    />
                    <span className={styles.workNum}>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className={styles.workMeta}>
                    <span className={styles.workCat}>{work.category}</span>
                    <p className={styles.workTitle}>{work.title}</p>
                  </div>
                  <div className={`flex justify-center ${styles.anker}`}>
                    <Link href={`/works/${work.id}`} className={`${styles.box_button} ${styles.up} inline-block`} aria-label="実績詳細ページへ移動します">
                      <span className={`${styles.background_button} ${styles.other_button}`}></span>
                      <span className={`${styles.contents_button} py-2 inline-block`}>この実績の詳細を見る</span>
                    </Link>
                    <Link href={`${work.url}`} target="_blank" className={`${styles.box_button} ${styles.down} inline-block`} aria-label="制作したホームページを見る">
                      <span className={`${styles.background_button} ${styles.other_button}`}></span>
                      <span className={`${styles.contents_button} py-2 inline-block`}>このホームページを見る</span>
                    </Link>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
          <div className="flex justify-center">
            <Link href={URL.Works} className={`${styles.box_button} inline-block`} aria-label="実績ページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>他の実績を詳しく見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 料金説明 ── */}
      <section className={`${styles.priceSection} relative`}>
        <div className={styles.priceSectionInner}>
          <span className={styles.curtainEyebrow}>PRICE &amp; PLAN</span>
          <h2 className="mb-4 sm:mb-6">ホームページ・WEBサイト制作の料金について</h2>
          <h3 className="mb-2 sm:mb-3">中小企業・個人事業主向け｜コストを抑えた高品質ホームページ制作</h3>
          <p className="mb-8 sm:mb-12">
            イロドリでは、コストパフォーマンスを重視する<br className="hidden sm:block" />
            中小企業・個人事業主の経営者様のニーズに応えるためのプランがございます。
          </p>
          <div className={styles.planGrid}>
            {homePlans.map((plan) => (
              <div
                key={plan.type}
                className={`${styles.planCard} ${plan.featured ? styles.planCardFeatured : ""}`}
              >
                {plan.featured && (
                  <span className={styles.planBadge}>おすすめ</span>
                )}
                <div className={styles.planCardInner}>
                  <div className={styles.planHeader}>
                    <span className={styles.planType}>{plan.type}</span>
                    <p className={styles.planName}>{plan.name}</p>
                    <p className={styles.planPrice}>
                      <span className={styles.planPriceUnit}>¥</span>
                      {plan.price}
                      <span className={styles.planPriceSuffix}>〜（税込）</span>
                    </p>
                  </div>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  <hr className={styles.planDivider} />
                  <ul className={styles.planFeatures}>
                    {plan.features.map((f) => (
                      <li key={f} className={styles.planFeatureItem}>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <Link href={URL.Price} className={`${styles.box_button} inline-block`} aria-label="料金ページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>料金体系を詳しく見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ホームページ無料診断 ── */}
      <section className={styles.diagnosis}>
        <div className={styles.diagnosisInner}>
          <div className={styles.diagnosisBadgeWrap}>
            <span className={styles.diagnosisBadge}>費用0円・営業なし</span>
          </div>
          <p className={styles.diagnosisTarget}>「今のホームページ、なぜ問い合わせが来ないんだろう？」とお悩みの方へ</p>
          <h2 className={styles.diagnosisTitle}>
            ホームページ<em className={styles.diagnosisEm}>無料診断</em>、やっています。
          </h2>
          <p className={styles.diagnosisDesc}>
            現在お使いのホームページを拝見し、デザイン・SEO・問い合わせ導線の<br className="hidden sm:block" />
            改善ポイントをまとめてお伝えします。診断結果だけ受け取っていただいてもOKです。
          </p>
          <ul className={styles.diagnosisPoints}>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>完全無料・しつこい営業なし</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>オンラインで完結</li>
            <li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>URLを送るだけでOK</li>
          </ul>
          <Link href={`${URL.Contact}?plan=${encodeURIComponent("無料診断")}`} className={`${styles.box_button} inline-block`} aria-label="ホームページ無料診断を申し込む">
            <span className={`${styles.background_button} ${styles.campaign_button}`}></span>
            <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料診断を申し込む</span>
          </Link>
        </div>
      </section>

      {/* ── ホームページデザイン制作 ── */}
      <section className={`${styles.webSection} relative`}>
        <div className={styles.webSectionInner}>
          <span className={styles.curtainEyebrow}>WEB DESIGN</span>
          <h2 className="mb-6 sm:mb-12">千葉県船橋のホームページ制作｜<br />伝わるデザインと使いやすさを両立</h2>
          <h3 className="mb-2 sm:mb-3">お客様の目的に合わせたホームページを制作します。</h3>
          <p className="mb-2 sm:mb-3">
            見た目だけでなく、検索されるキーワード、ページ構成、<br className="hidden sm:block" />
            更新のしやすさまで考えて制作します。
          </p>
          <p className="mb-6 sm:mb-12">
            初めてホームページを作る方にも、<br className="hidden sm:block" />
            必要な内容を整理するところからサポートします。
          </p>
          <div className="flex justify-center">
            <Link href={URL.About} className={`${styles.box_button} inline-block`} aria-label="Aboutページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>会社概要を詳しく見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── チラシ制作 ── */}
      <section className={`${styles.flyerSection} relative`}>
        <div className={styles.flyerSectionInner}>
          <span className={styles.curtainEyebrow}>PRINT DESIGN</span>
          <h2 className="mb-6 sm:mb-12">チラシ・フライヤーデザイン制作</h2>
          <h3 className="mb-2 sm:mb-3">集客に直結するチラシデザインを制作</h3>
          <p className="mb-4 sm:mb-12">
            ホームページ制作と合わせてご依頼いただくことで、<br className="hidden sm:block" />
            WEBとチラシの統一感あるブランドイメージを実現。<br className="hidden sm:block" />
            店舗・教室・開業・イベントなど、地域集客に直結するデザインをご提案します。
          </p>
          <h3 className="mb-2 sm:mb-3">片面3万円〜。印刷入稿データまで完全対応</h3>
          <p className="mb-2 sm:mb-3">
            チラシ片面デザイン 30,000円〜、両面デザイン 50,000円〜でご対応。<br className="hidden sm:block" />
            プロのデザイナーが目を引くレイアウトと訴求力あるコピーで制作します。
          </p>
          <p className="mb-6 sm:mb-12">印刷会社への入稿データ（PDF・AI形式）の作成もお任せください。</p>
          <div className="flex justify-center">
            <Link href={URL.Price} className={`${styles.box_button} inline-block`} aria-label="チラシデザイン料金ページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>チラシ料金を詳しく見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 対応エリア ── */}
      <section className={styles.areaSection}>
        <div className={styles.areaSectionInner}>
          <span className={styles.curtainEyebrow}>SERVICE AREA</span>
          <h2 className="mb-3">対応エリア｜千葉県内の近隣エリアも歓迎</h2>
          <p className="mb-10 opacity-60 text-sm leading-relaxed">
            船橋市を拠点に、津田沼・八千代・鎌ヶ谷など近隣エリアからのご依頼も対応しています。<br className="hidden sm:block" />
            対面でのお打ち合わせも可能ですので、お気軽にご相談ください。
          </p>
          <div className={styles.areaGrid}>
            {[
              {
                label: "TSUDANUMA / NARASHINO",
                title: "津田沼・習志野",
                desc: "モリシア津田沼・奏の杜エリアの個人事業主・中小企業のホームページ制作に対応。船橋から最短15分圏内で対面打ち合わせも可能です。",
                href: URL.AreaTsudanuma,
              },
              {
                label: "YACHIYO",
                title: "八千代",
                desc: "八千代緑が丘の新規開業者から八千代台の老舗店舗まで幅広く対応。「まだ何も決まっていない」という段階からご相談いただけます。",
                href: URL.AreaYachiyo,
              },
              {
                label: "KAMAGAYA",
                title: "鎌ヶ谷",
                desc: "新鎌ケ谷駅周辺の個人経営店舗・士業事務所など、地域密着型ビジネスのホームページ制作をサポートします。",
                href: URL.AreaKamagaya,
              },
            ].map((area) => (
              <Link key={area.href} href={area.href} className={styles.areaCard} aria-label={`${area.title}のホームページ制作ページへ`}>
                <span className={styles.areaCardLabel}>{area.label}</span>
                <p className={styles.areaCardTitle}>{area.title}</p>
                <p className={styles.areaCardDesc}>{area.desc}</p>
                <span className={styles.areaCardArrow}>詳しく見る →</span>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href={URL.Area} className={`${styles.box_button} inline-block`} aria-label="対応エリア一覧ページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>対応エリアをすべて見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 業種別お役立ち記事 ── */}
      <section className={styles.columnSection}>
        <div className={styles.columnSectionInner}>
          <span className={styles.curtainEyebrow}>USEFUL ARTICLES</span>
          <h2 className="mb-3">千葉県船橋｜業種別ホームページのお役立ち記事</h2>
          <p className="mb-10 opacity-60 text-sm leading-relaxed">
            船橋・千葉エリアの業種別に、集客につながるホームページの作り方を解説しています。<br className="hidden sm:block" />
            飲食店・整骨院・美容室・士業など、あなたの業種に近い記事からご覧ください。
          </p>
          <div className={styles.areaGrid}>
            {[
              { label: "RESTAURANT", title: "飲食店のホームページ制作", desc: "写真・メニュー・予約導線で集客につなげる飲食店サイトの作り方。", href: "/blog/inshokuten-homepage-seisaku" },
              { label: "CLINIC", title: "整骨院・治療院のホームページ制作", desc: "症状訴求と信頼設計で新規患者を増やす整骨院サイトの基本。", href: "/blog/seikotsuin-homepage-seisaku" },
              { label: "HAIR SALON", title: "美容室・サロンのホームページ制作", desc: "世界観・予約・採用まで、集客できる美容室サイトのポイント。", href: "/blog/beauty-salon-homepage-seisaku" },
              { label: "CLINIC × CHIBA", title: "千葉の整骨院｜新患を増やす方法", desc: "地域SEOとMEO連携で千葉の整骨院の新患を増やす実践法。", href: "/blog/chiba-seikotsuin-homepage-shukyaku" },
              { label: "SALON × TSUDANUMA", title: "津田沼の美容室｜押さえる5つのこと", desc: "ホットペッパー脱却と採用に効く津田沼サロンのHP戦略。", href: "/blog/tsudanuma-biyoshitsu-homepage" },
              { label: "TAX & LEGAL × KAMAGAYA", title: "鎌ヶ谷の士業｜HPの作り方", desc: "信頼・分野特化・地域SEOで相談を増やす士業サイトの作り方。", href: "/blog/kamagaya-shigyo-homepage" },
            ].map((post) => (
              <Link key={post.href} href={post.href} className={styles.areaCard} aria-label={`${post.title}の記事を読む`}>
                <span className={styles.areaCardLabel}>{post.label}</span>
                <p className={styles.areaCardTitle}>{post.title}</p>
                <p className={styles.areaCardDesc}>{post.desc}</p>
                <span className={styles.areaCardArrow}>記事を読む →</span>
              </Link>
            ))}
            <Link href="/blog/chiba-homepage-seisaku-complete-guide" className={styles.areaCard} style={{ gridColumn: "1 / -1" }} aria-label="千葉のホームページ制作完全ガイドを読む">
              <span className={styles.areaCardLabel}>CHIBA COMPLETE GUIDE</span>
              <p className={styles.areaCardTitle}>千葉のホームページ制作完全ガイド【2026年版】</p>
              <p className={styles.areaCardDesc}>費用相場・制作会社の選び方・フリーランスへの依頼まで、千葉でホームページを作る前に知っておきたいことを1ページに総まとめしました。</p>
              <span className={styles.areaCardArrow}>記事を読む →</span>
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/blog" className={`${styles.box_button} inline-block`} aria-label="ブログ一覧ページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>お役立ち記事をすべて見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 選ばれる理由 ── */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <h2 className={styles.secTitle}>
            千葉県船橋のホームページ制作なら<br />
            イロドリが選ばれる理由
          </h2>
          <div className={styles.featuresGrid}>
            {[
              { num: "01", title: "地域名・業種名を意識したSEO設計", body: "船橋・津田沼・八千代など、地域で探される検索キーワードをもとにページ構成を設計します。" },
              { num: "02", title: "自分で更新できるWordPress構築", body: "お知らせ・ブログ・実績を自社で更新できるようにし、公開後の運用まで見据えて制作します。" },
              { num: "03", title: "10万円から始められる明朗な料金", body: "開業直後や小規模事業でも導入しやすい価格から、目的に合わせたプランを選べます。" },
              { num: "04", title: "相談から公開後まで一貫対応", body: "ヒアリング、デザイン、構築、公開後の修正まで、担当者が変わらず丁寧に対応します。" },
            ].map((f) => (
              <div key={f.num} className={styles.featureCard} data-num={f.num}>
                <span className={styles.featureNum}>{f.num}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 制作の流れ ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "千葉県船橋のホームページ制作の流れ",
        description: "イロドリのホームページ制作は無料相談から公開後のサポートまで4ステップでご対応します。",
        step: [
          { "@type": "HowToStep", position: 1, name: "無料相談・ヒアリング", text: "目的・予算・スケジュールなどを丁寧にヒアリングします。まずはお気軽にご連絡ください。" },
          { "@type": "HowToStep", position: 2, name: "提案・お見積もり", text: "ヒアリング内容をもとに最適なプランと詳細なお見積もりをご提示します。" },
          { "@type": "HowToStep", position: 3, name: "デザイン・開発", text: "ブランドイメージに合ったオリジナルデザインを制作。確認・修正を重ねて仕上げます。" },
          { "@type": "HowToStep", position: 4, name: "公開・アフターサポート", text: "サイト公開後も修正対応・SEO分析・操作説明で長期的にバックアップします。" },
        ],
      }) }} />
      <section className={styles.process}>
        <div className={styles.processInner}>
          <h2 className={styles.secTitle}>ホームページ制作の流れ</h2>
          <p className={styles.secDesc}>
            無料相談から公開後のサポートまで、<br className="hidden sm:block" />
            千葉県船橋のホームページ制作会社イロドリが丁寧にサポートします。
          </p>
          <div className={styles.processSteps}>
            {[
              { step: "01", title: "無料相談・ヒアリング", desc: "目的・予算・スケジュールなどを丁寧にヒアリングします。まずはお気軽にご連絡ください。" },
              { step: "02", title: "提案・お見積もり", desc: "ヒアリング内容をもとに最適なプランと詳細なお見積もりをご提示します。" },
              { step: "03", title: "デザイン・開発", desc: "ブランドイメージに合ったオリジナルデザインを制作。確認・修正を重ねて仕上げます。" },
              { step: "04", title: "公開・アフターサポート", desc: "サイト公開後も修正対応・SEO分析・操作説明で長期的にバックアップします。" },
            ].map((item) => (
              <div key={item.step} className={styles.processStep}>
                <span className={styles.processNum}>{item.step}</span>
                <div className={styles.processContent}>
                  <h3 className={styles.processStepTitle}>{item.title}</h3>
                  <p className={styles.processStepDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.seoText}>
        <div className={styles.seoTextInner}>
          <h2 className={styles.seoTextTitle}>千葉県船橋のホームページ制作はイロドリへ</h2>
          <p className={styles.seoTextBody}>
            千葉県船橋を拠点に、中小企業・個人事業主のホームページ制作を10万円から承っています。<br />千葉のホームページ制作・船橋のホームページ制作のご依頼を随時受付中。WordPressによるCMS構築、SEOを意識したキーワード設計、公開後のサポートまで一貫して対応。<br />まずはお気軽にご相談ください。
          </p>
        </div>
      </section>
    </main>
  );
}
