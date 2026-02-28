import Header from "../parts/Header";
import Link from "next/link";
import { URL } from "../url/Url";
import { client } from "../lib/Micro";
import styles from "./Works.module.scss";

type Work = {
  id: string;
  title: string;
  category: string;
  image: { url: string; width: number; height: number };
};

export default async function WorksPage() {
  const data = await client.get({
    endpoint: "works",
    queries: { limit: 20 },
  });
  const works: Work[] = data.contents;

  return (
    <section className="flex">
      <Header />

      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>WORKS</span>
          <h1 className={styles.title}>制作実績</h1>
          <p className={styles.description}>
            船橋を中心に、多彩な業種のホームページ・WEBサイトを制作しています。
          </p>
        </div>

        {/* ── 一覧 ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>ALL WORKS</span>
            <h2 className={styles.sectionTitle}>すべての実績</h2>
            <div className={styles.grid}>
              {works.length > 0 ? (
                works.map((work) => (
                  <div key={work.id} className={styles.card}>
                    <div className={styles.cardImage}>
                      <img
                        src={work.image.url}
                        alt={work.title}
                      />
                    </div>
                    <div className={styles.cardBody}>
                      <span className={styles.cardCategory}>{work.category}</span>
                      <p className={styles.cardTitle}>{work.title}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className={styles.empty}>現在、実績を準備中です。</p>
              )}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className={styles.cta}>
          <span className={styles.ctaLabel}>CONTACT</span>
          <h2 className={styles.ctaTitle}>
            ホームページ制作の<br />ご相談はお気軽に
          </h2>
          <p className={styles.ctaDesc}>
            まずはお気軽にご相談ください。<br />
            要件整理から提案・見積まで、無料でご対応しています。
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
