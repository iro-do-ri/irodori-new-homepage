"use client";

import styles from "./Main.module.scss";
import Link from "next/link";
import { URL } from "../url/Url";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Three from "../components/Three";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

gsap.registerPlugin(ScrollTrigger);

type Work = {
  id: string;
  title: string;
  category: string;
  image: { url: string; width: number; height: number };
};

export default function Main({ news, works }: { news: any[]; works: Work[] }) {
  // GSAP
  const textRef = useRef(null);
  const textRef_2 = useRef(null);
  const textRef_3 = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef(null);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = textRef_3.current;
      if (!el) return;
  
      // ニュースの初期位置（wrapper 内の Y）を取得
      const startTop = el.offsetTop;
  
      // まず absolute で「今の場所」に固定しておく
      gsap.set(el, {
        top: startTop,
      });
  
      const tl = gsap.timeline({ paused: true })
      .to(textRef.current, {
        clipPath: "inset(100% 0 0)",
        y: -100,
        duration: 0.6,
        ease: "power2.out",
      });
  
      const sl = gsap.timeline({ paused: true })
      .to(textRef_2.current, {
        clipPath: "inset(0 0 100%)",
        y: 100,
        duration: 0.6,
        ease: "power2.out",
      });
  
      // ニュースを「wrapper の上端（画面上）」までスライド
      const ol = gsap.timeline({ paused: true })
      .to(el, {
        top: 0,
        duration: 0.1,
        filter: "blur(100)",
        ease: "power2.out",
      })
      .add(gsap.to(el, {
        filter: "blur(0)",
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }), "+=0.2");
  
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        anticipatePin: 1,
        scrub: true,
        snap: 1,
  
        onUpdate: (self) => {
          const threshold = 50 / 100;
          const hold = 1;
  
          if (self.progress >= threshold) {
            if (tl.reversed() || tl.progress() === 0) tl.play();
            if (sl.reversed() || sl.progress() === 0) sl.play();
          } else {
            if (!tl.reversed() && tl.progress() > 0) tl.reverse();
            if (!sl.reversed() && sl.progress() > 0) sl.reverse();
          }
  
          if (self.progress >= hold) {
            if (ol.reversed() || ol.progress() === 0) ol.play();
          } else {
            if (!ol.reversed() && ol.progress() > 0) ol.reverse();
          }
        },
      });
      gsap.utils.toArray<HTMLElement>(`.${styles.curtain}`).forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top -20%",
          scrub: true,
          onEnter: () => {
            el.classList.add(styles.clipPathAnimation);
          },
        });
      });      

    }, wrapperRef);
  
    return () => ctx.revert();
  }, []);
  // GSAPここまで

  return (
    <main className={`${styles.main}`}>
      <Three />
        <section className={styles.container} ref={wrapperRef}>
            <section className={`relative ${styles.top}`}>
                <h1 ref={textRef} className={`${styles.mainText} absolute`}><span className="block mb-2">船橋で魅力を伝える<br className="sm:hidden block"/>ホームページ・WEBサイト制作会社</span>あなたの理想を<br/>デザインで形にします</h1>
                <div ref={textRef_2} className={`${styles.subText} absolute`}>
                  <p className="mb-4 block">千葉県船橋市を拠点に、<br/>ホームページ制作・チラシ・動画制作を行う<br/>Webデザイン会社のイロドリです。<br className="hidden sm:block"/>ホームページ制作を10万円からご対応します。</p>
                  <Link href={URL.Contact} className={`${styles.contact} sm:px-12 px-3 sm:py-6 py-4 inline-block`} aria-label="無料相談ページへ移動します">無料で相談してみる</Link>
                </div>
            </section>
            <section ref={textRef_3} className={`${styles.news} absolute w-full`}>
              <div className={styles.newsContainer}>
              <h2 className="mb-4 sm:mb-8">船橋でホームページ・WEBサイト制作を行う<br className="hidden sm:block"/>イロドリからのお知らせ</h2>
              <div className="flex flex-col justify-center">
              <h3 className="mb-2">ホームページ制作会社イロドリの更新情報</h3>
              <ul className={`${styles.newsList} mb-6 sm:mb-12`}>
                         {news.map((news)=>(
                          <li key={news.id} className="mb-3 sm:mb-4">
                            <article>
                              <Link href={`news/${news.id}`} className="inline-flex items-start sm:items-center flex-wrap gap-y-1">
                                <span className={`${styles.img} mr-3`}><img src={news.img?.url??"https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/eaa762c22949424c87cd0aadf582116e/no-image.png"} alt={news.title}/></span>
                                <span className="text-xs px-2 py-1 mr-3 border border-white/30 rounded-full shrink-0">{news.category}</span>
                                <div className="flex flex-col min-w-0">
                                  <time className="text-xs opacity-60">{new Date(news.publishedAt).toLocaleDateString("ja-JP")}</time>
                                  <p className="text-sm leading-snug">{news.title}</p>
                                </div>
                              </Link>
                            </article>
                          </li>
                         ))}
                <Link href={URL.Blog} className="text-sm underline underline-offset-4 opacity-70" aria-label="ブログ一覧ページへ移動します">更新情報の一覧へ</Link>
              </ul>
              </div>
              </div>
            </section>
            <section className={`${styles.company} ${styles.curtain} relative`}>
              <div className={styles.contentsContainer} ref={companyRef}>
                <span className={styles.curtainEyebrow}>ABOUT IRODORI</span>
                <h2 className="mb-6 sm:mb-12">船橋のホームページ制作｜<br/>伝わるデザインと使いやすさを両立</h2>
                <h3 className="mb-2 sm:mb-3">お客様のご要望に合わせた船橋のホームページ制作をします。</h3>
                <p className="mb-2 sm:mb-3">イロドリでは、船橋を拠点にお客様の目的に合わせた<br className="hidden sm:block"/>ホームページ・WEBサイトを制作しています。</p>
                <p className="mb-6 sm:mb-12">見た目の美しさだけでなく、<br className="hidden sm:block"/>使いやすさや更新のしやすさにもこだわり、<br className="hidden sm:block"/>CMS導入やSEO対策を通じて、<br className="hidden sm:block"/>成果につながるサイトづくりをサポートします。</p>
                <Link href={URL.About} className={`${styles.button} sm:px-12 px-6 sm:py-6 py-3 inline-block`} aria-label="Aboutページへ移動します">会社概要を詳しく見る</Link>
              </div>
            </section>
            <section className={`${styles.price} ${styles.curtain} relative`}>
              <div className={styles.contentsContainer}>
                <span className={styles.curtainEyebrow}>PRICE &amp; PLAN</span>
                <h2 className="mb-6 sm:mb-12">ホームページ・WEBサイト制作の料金について</h2>
                <h3 className="mb-2 sm:mb-3">スモールビジネス向け｜コストを抑えた高品質ホームページ・WEBサイト制作</h3>
                <p className="mb-4 sm:mb-12">イロドリでは、コストパフォーマンスを重視する<br className="hidden sm:block"/>スモールビジネスオーナー様のニーズに応えるためのプランがございます。</p>
                <h3 className="mb-2 sm:mb-3">10万円からホームページを作成します</h3>
                <p className="mb-2 sm:mb-3">一番お求めやすいプランでは、<br className="hidden sm:block"/>10万円から始められるシンプルで高品質なホームページ制作を致します。</p>
                <p className="mb-6 sm:mb-12">初めてWEBサイトを導入する方や、<br className="hidden sm:block"/>コストを抑えつつ信頼感のあるデザインを求める方におすすめです。</p>
                <Link href={URL.Price} className={`${styles.button} sm:px-12 px-6 sm:py-6 py-3 inline-block`} aria-label="料金ページへ移動します">料金体系を詳しく見る</Link>
              </div>
            </section>
            <section className={`${styles.works} ${styles.curtain} relative`}>
              <div className={`${styles.contentsContainer} sm:max-w-[1200px] sm:w-full`}>
                <span className={styles.curtainEyebrow}>OUR WORKS</span>
                <h2 className="mb-6 sm:mb-12">船橋のホームページ制作 実績紹介</h2>
                <h3 className="mb-2 sm:mb-3">飲食・士業・美容・医療など、多彩な業種のホームページを制作しています。</h3>
                <p className="mb-6 sm:mb-12">船橋を中心にホームページ制作の実績の一部をご紹介いたします。</p>
                <Splide
                  options={{
                    type: works.length > 3 ? "loop" : "slide",
                    perPage: 3,
                    perMove: 1,
                    gap: "1.5rem",
                    breakpoints: { 640: { perPage: 1 } },
                  }}
                  className="mb-12"
                >
                  {works.map((work) => (
                    <SplideSlide key={work.id}>
                      <div className="overflow-hidden">
                        <div className="aspect-video overflow-hidden mb-3">
                          <img src={work.image.url} alt={`${work.title}のホームページ制作実績｜イロドリ`} className="w-full h-full object-cover" />
                        </div>
                        <span className="inline-block text-xs px-2 py-1 mb-2 border border-white/40 rounded-full">
                          {work.category}
                        </span>
                        <p className="text-sm">{work.title}</p>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
                <Link href={URL.Works} className={`${styles.button} sm:px-12 px-3 sm:py-6 py-4 inline-block`} aria-label="実績ページへ移動します">他の実績を詳しく見る</Link>
              </div>
            </section>
        </section>

        {/* ── 選ばれる理由 ── */}
        <section className={styles.features}>
          <div className={styles.featuresInner}>
            <h2 className={styles.secTitle}>
              船橋のホームページ制作なら<br />
              イロドリが選ばれる理由
            </h2>
            <div className={styles.featuresGrid}>
              {[
                {
                  num: "01",
                  title: "SEO設計 × デザイン品質",
                  body: "見た目の美しさだけでなく、キーワード設計・サイト構造・表示速度を考慮したSEO対策済みのホームページを制作します。",
                },
                {
                  num: "02",
                  title: "WordPress・CMSで更新しやすい",
                  body: "専門知識がなくても更新できるCMSを導入。ブログや実績の更新を自社で簡単に継続できる環境を構築します。",
                },
                {
                  num: "03",
                  title: "10万円〜の明瞭価格",
                  body: "船橋の中小企業・個人事業主向けに、10万円から高品質なホームページ制作を明瞭価格でご提供します。",
                },
                {
                  num: "04",
                  title: "公開後も安心サポート",
                  body: "制作後の修正対応・操作説明・SEO分析など、長期的なサポートで安心してお任せいただけます。",
                },
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
        <section className={styles.process}>
          <div className={styles.processInner}>
            <h2 className={styles.secTitle}>ホームページ制作の流れ</h2>
            <p className={styles.secDesc}>
              無料相談から公開後のサポートまで、<br className="hidden sm:block" />
              船橋のホームページ制作会社イロドリが丁寧にサポートします。
            </p>
            <div className={styles.processSteps}>
              {[
                {
                  step: "01",
                  title: "無料相談・ヒアリング",
                  desc: "目的・予算・スケジュールなどを丁寧にヒアリングします。まずはお気軽にご連絡ください。",
                },
                {
                  step: "02",
                  title: "提案・お見積もり",
                  desc: "ヒアリング内容をもとに最適なプランと詳細なお見積もりをご提示します。",
                },
                {
                  step: "03",
                  title: "デザイン・開発",
                  desc: "ブランドイメージに合ったオリジナルデザインを制作。確認・修正を重ねて仕上げます。",
                },
                {
                  step: "04",
                  title: "公開・アフターサポート",
                  desc: "サイト公開後も修正対応・SEO分析・操作説明で長期的にバックアップします。",
                },
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
    </main>
  )
}