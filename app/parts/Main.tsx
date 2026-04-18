"use client";

import styles from "./Main.module.scss";
import Link from "next/link";
import { URL } from "../url/Url";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

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
            <span className="block mb-2">千葉県船橋で魅力を伝える<br className="sm:hidden block" />ホームページ・WEBサイト制作会社</span>
            あなたの理想を<br />デザインで形にします
          </h1>
          <div className={styles.heroSub}>
            <p className="mb-4 block">
              千葉県船橋を拠点に、<br />
              ホームページ制作・チラシ・動画制作を行う<br />
              Webデザイン会社のイロドリです。<br className="hidden sm:block" />
              ホームページ制作を10万円からご対応します。
            </p>
            <Link href={URL.Contact} className={`${styles.box_button} inline-block`} aria-label="無料相談ページへ移動します">
              <span className={`${styles.background_button} ${styles.contact_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>無料で相談してみる</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 料金説明 ── */}
      <section className={`${styles.priceSection} relative`}>
        <div className={styles.priceSectionInner}>
          <span className={styles.curtainEyebrow}>PRICE &amp; PLAN</span>
          <h2 className="mb-4 sm:mb-6">ホームページ・WEBサイト制作の料金について</h2>
          <h3 className="mb-2 sm:mb-3">スモールビジネス向け｜コストを抑えた高品質ホームページ制作</h3>
          <p className="mb-8 sm:mb-12">
            イロドリでは、コストパフォーマンスを重視する<br className="hidden sm:block" />
            スモールビジネスオーナー様のニーズに応えるためのプランがございます。
          </p>
          <div className={styles.planGrid}>
            <div className={styles.planCard}>
              <Image src="/svg/standard-plan.svg" alt="スタンダードプラン｜ホームページ制作10万円〜" width={400} height={500} className={styles.planImg} />
            </div>
            <div className={styles.planCard}>
              <Image src="/svg/right-plan.svg" alt="ライトプラン｜ホームページ制作" width={400} height={500} className={styles.planImg} />
            </div>
            <div className={styles.planCard}>
              <Image src="/svg/fullcustom-plan.svg" alt="フルカスタムプラン｜完全オーダーメイドホームページ制作" width={400} height={500} className={styles.planImg} />
            </div>
          </div>
          <div className="flex justify-center mt-8 sm:mt-12">
            <Link href={URL.Price} className={`${styles.box_button} inline-block`} aria-label="料金ページへ移動します">
              <span className={`${styles.background_button} ${styles.other_button}`}></span>
              <span className={`${styles.contents_button} sm:px-12 px-6 sm:py-6 py-3 inline-block`}>料金体系を詳しく見る</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ホームページデザイン制作 ── */}
      <section className={`${styles.webSection} relative`}>
        <div className={styles.webSectionInner}>
          <span className={styles.curtainEyebrow}>WEB DESIGN</span>
          <h2 className="mb-6 sm:mb-12">千葉県船橋のホームページ制作｜<br />伝わるデザインと使いやすさを両立</h2>
          <h3 className="mb-2 sm:mb-3">お客様のご要望に合わせた千葉県船橋のホームページ制作をします。</h3>
          <p className="mb-2 sm:mb-3">
            イロドリでは、千葉県船橋を拠点にお客様の目的に合わせた<br className="hidden sm:block" />
            ホームページ・WEBサイトを制作しています。
          </p>
          <p className="mb-6 sm:mb-12">
            見た目の美しさだけでなく、<br className="hidden sm:block" />
            使いやすさや更新のしやすさにもこだわり、<br className="hidden sm:block" />
            CMS導入やSEO対策を通じて、<br className="hidden sm:block" />
            成果につながるサイトづくりをサポートします。
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
          <h3 className="mb-2 sm:mb-3">集客に直結するチラシデザインを千葉県船橋で制作</h3>
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

      {/* ── 選ばれる理由 ── */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <h2 className={styles.secTitle}>
            千葉県船橋のホームページ制作なら<br />
            イロドリが選ばれる理由
          </h2>
          <div className={styles.featuresGrid}>
            {[
              { num: "01", title: "SEO設計 × デザイン品質", body: "見た目の美しさだけでなく、キーワード設計・サイト構造・表示速度を考慮したSEO対策済みのホームページを制作します。" },
              { num: "02", title: "WordPress・CMSで更新しやすい", body: "専門知識がなくても更新できるCMSを導入。ブログや実績の更新を自社で簡単に継続できる環境を構築します。" },
              { num: "03", title: "10万円〜の明瞭価格", body: "千葉県船橋の中小企業・個人事業主向けに、10万円から高品質なホームページ制作を明瞭価格でご提供します。" },
              { num: "04", title: "公開後も安心サポート", body: "制作後の修正対応・操作説明・SEO分析など、長期的なサポートで安心してお任せいただけます。" },
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
          <h2 className={styles.seoTextTitle}>千葉県船橋市のホームページ制作はイロドリへ</h2>
          <p className={styles.seoTextBody}>
            船橋を拠点に、中小企業・個人事業主のホームページ制作を10万円〜承っています。WordPressによるCMS構築、SEOを意識したページ設計、公開後のサポートまで一貫して対応。まずはお気軽にご相談ください。
          </p>
        </div>
      </section>
    </main>
  );
}
