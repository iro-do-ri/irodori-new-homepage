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
          markers: true,
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
                  <p className="mb-4 block">千葉県船橋市を拠点に、<br/>ホームページ、チラシ、動画制作を行う<br/>WEBサイトデザイン会社のイロドリです。</p>
                  <Link href={URL.Contact} className={`${styles.contact} sm:px-12 px-3 sm:py-6 py-4 inline-block`} aria-label="無料相談ページへ移動します">無料で相談してみる</Link>
                </div>
            </section>
            <section ref={textRef_3} className={`${styles.news} absolute w-full`}>
              <div className={styles.newsContainer}>
              <h2 className="mb-8">船橋でホームページ・WEBサイト制作を行う<br/>イロドリからのお知らせ</h2>
              <div className="flex flex-col justify-center">
               
              <h3 className="mb-2">ホームページ制作会社イロドリの更新情報</h3>
              <ul className={`${styles.newsList} mb-12`}>
                         {news.map((news)=>(
                          <li key={news.id} className="mb-4">
                            <article>
                              <Link href={`news/${news.id}`} className="inline-flex items-center">
                                <span className={`${styles.img} mr-4`}><img src={news.img?.url??"https://images.microcms-assets.io/assets/1c47cf40b1b24139aa6e76b7efe668bc/eaa762c22949424c87cd0aadf582116e/no-image.png"}/></span>
                                <span className={`${news.category} p-4 mr-4`}>{news.category}</span>
                                <div className="flex flex-col">
                                <time>{new Date(news.publishedAt).toLocaleDateString("ja-JP")}</time>
                                <p>{news.title}</p>
                                </div>
                              </Link>
                            </article>
                          </li>
                         ))}                        
                <Link href={URL.Contact} className="" aria-label="無料相談ページへ移動します">ホームページ・WEBサイト制作の更新情報の一覧へ</Link>
              </ul>
              </div>
              </div>
            </section>
            <section className={`${styles.company} ${styles.curtain} relative`}>
              <div className={styles.contentsContainer} ref={companyRef}>
                <h2 className="mb-12">伝わるデザインと使いやすさを<br/>両立したホームページ・WEBサイト制作</h2>
                <h3 className="mb-3">お客様のご要望に合わせたホームページ・WEBサイト制作をします。</h3>
                <p className="mb-3">イロドリでは、船橋を拠点にお客様の目的に合わせた<br/>ホームページ・WEBサイトサイトを制作しています。</p>
                <p className="mb-12">見た目の美しさだけでなく、<br/>使いやすさや更新のしやすさにもこだわり、<br/>CMS導入やSEO対策を通じて、<br/>成果につながるサイトづくりをサポートします。</p>
                <Link href={URL.About} className={`${styles.button} sm:px-12 px-3 sm:py-6 py-4 inline-block`} aria-label="Aboutページへ移動します">会社概要を詳しく見る</Link>
              </div>
            </section>
            <section className={`${styles.price} ${styles.curtain} relative`}>
              <div className={styles.contentsContainer}>
                <h2 className="mb-12">ホームページ・WEBサイト制作の料金について</h2>
                <h3 className="mb-3">スモールビジネス向け｜コストを抑えた高品質ホームページ・WEBサイト制作</h3>
                <p className="mb-12">イロドリでは、コストパフォーマンスを重視する<br/>スモールビジネスオーナー様のニーズに応えるための<br/>プランがございます。</p>
                <h3 className="mb-3">8万円からホームページを作成します</h3>
                <p className="mb-3">一番お求めやすいプランでは、<br/>8万円から始められるシンプルで高品質な<br/>ホームページ制作を致します。</p>
                <p className="mb-12">初めてWEBサイトサイトを導入する方や、<br/>コストを抑えつつ信頼感のあるデザインを<br/>求める方におすすめです。</p>
                <Link href={URL.About} className={`${styles.button} sm:px-12 px-3 sm:py-6 py-4 inline-block`} aria-label="Aboutページへ移動します">料金体系を詳しく見る</Link>
              </div>
            </section>
            <section className={`${styles.works} ${styles.curtain} relative`}>
              <div className={`${styles.contentsContainer} sm:w-[82.5vw] w-full`}>
                <h2 className="mb-12">ホームページ・WEBサイト制作の実績</h2>
                <h3 className="mb-3">船橋を中心に、多彩な業種のホームページを制作しています。</h3>
                <p className="mb-12">ホームページ・WEBサイト制作の実績の一部をご紹介いたします。</p>
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
                          <img src={work.image.url} alt={work.title} className="w-full h-full object-cover" />
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
    </main>
  )
}