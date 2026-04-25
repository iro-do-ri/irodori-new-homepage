import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../url/Url";
import styles from "./Privacy.module.scss";
import Breadcrumb from "../parts/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜千葉・船橋のホームページ制作会社イロドリ",
  description:
    "イロドリのプライバシーポリシーページです。個人情報の取り扱い・Cookieの利用・Googleアドセンスおよびアクセス解析ツールの使用について説明しています。",
  alternates: { canonical: "https://iro-do-ri.jp/privacy" },
  openGraph: {
    title: "プライバシーポリシー｜千葉・船橋のホームページ制作会社イロドリ",
    description:
      "イロドリの個人情報の取り扱い・Cookie・Googleアドセンス・アクセス解析についての方針です。",
    url: "https://iro-do-ri.jp/privacy",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "プライバシーポリシー｜イロドリ",
    description: "イロドリの個人情報の取り扱いについてのポリシーです。",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
    { "@type": "ListItem", position: 2, name: "プライバシーポリシー", item: "https://iro-do-ri.jp/privacy" },
  ],
};

export default function PrivacyPage() {
  return (
    <section className="flex">
      <div className={styles.wrapper}>

        {/* ── ヒーロー ── */}
        <div className={styles.hero}>
          <span className={styles.label}>PRIVACY POLICY</span>
          <h1 className={styles.title}>プライバシーポリシー</h1>
          <p className={styles.description}>
            イロドリ（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
            適切な取り扱いに努めています。本ポリシーでは、当サイトにおける個人情報の
            収集・利用・管理の方針をご説明します。
          </p>
        </div>

        <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />

        {/* ── ポリシー本文 ── */}
        <div className={styles.section}>
          <div className={styles.sectionInner}>
            <span className={styles.sectionLabel}>PRIVACY POLICY</span>
            <h2 className={styles.sectionTitle}>個人情報の取り扱いについて</h2>

            <div className={styles.policyBlock}>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>事業者情報</p>
                <div className={styles.itemText}>
                  <p>屋号：イロドリ</p>
                  <p>代表者：勝野 紘太</p>
                  <p>所在地：千葉県船橋市</p>
                  <p>電話番号：080-5543-5943</p>
                  <p>お問い合わせ：<Link href={URL.Contact}>お問い合わせフォーム</Link></p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>個人情報の収集について</p>
                <div className={styles.itemText}>
                  <p>当サイトでは、お問い合わせの際に以下の個人情報をご提供いただく場合があります。</p>
                  <ul>
                    <li>お名前</li>
                    <li>会社名・屋号（任意）</li>
                    <li>メールアドレス</li>
                    <li>電話番号（任意）</li>
                    <li>お問い合わせ内容</li>
                  </ul>
                  <p>なお、当サイトへのアクセス情報（IPアドレス・ブラウザ情報・閲覧ページ等）は、アクセス解析ツールにより自動的に収集される場合があります。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>個人情報の利用目的</p>
                <div className={styles.itemText}>
                  <p>収集した個人情報は、以下の目的のみに利用します。</p>
                  <ul>
                    <li>お問い合わせへの回答・ご連絡</li>
                    <li>お見積もり・ご提案の送付</li>
                    <li>サービスの提供・契約履行</li>
                    <li>当サービスの改善・新サービスの検討</li>
                  </ul>
                  <p>ご提供いただいた個人情報は、上記目的の範囲内でのみ利用し、目的外の利用はいたしません。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>個人情報の第三者提供</p>
                <div className={styles.itemText}>
                  <p>当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示することはありません。</p>
                  <ul>
                    <li>お客様ご本人の同意がある場合</li>
                    <li>法令に基づき開示が必要な場合</li>
                    <li>人の生命・身体・財産の保護のために必要で、本人の同意を得ることが困難な場合</li>
                  </ul>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>Cookieの使用について</p>
                <div className={styles.itemText}>
                  <p>当サイトでは、ユーザー体験の向上・アクセス状況の分析・広告配信の最適化を目的として、Cookie（クッキー）を使用しています。</p>
                  <p>Cookieとは、ウェブサイトがお客様のブラウザに送信する小さなデータです。お客様はブラウザの設定からCookieを無効にすることができますが、一部の機能が正常に動作しなくなる場合があります。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>Google アドセンスについて</p>
                <div className={styles.itemText}>
                  <p>当サイトでは、Google AdSense（グーグルアドセンス）を利用しており、Googleおよびそのパートナー企業が広告を配信する場合があります。</p>
                  <p>Google AdSenseは、ユーザーが過去に訪問したサイトに基づいて広告を表示する「インタレストベース広告」を使用します。この際、Googleは「DoubleClick Cookie」等を使用してお客様のブラウザに広告を配信します。</p>
                  <p>
                    インタレストベース広告の無効化や詳細については、
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Googleの広告設定ページ</a>
                    をご覧ください。また、
                    <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">Googleのポリシーと規約</a>
                    もご参照ください。
                  </p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>アクセス解析ツールについて</p>
                <div className={styles.itemText}>
                  <p>当サイトでは、Googleが提供するアクセス解析ツール「Google アナリティクス」（Google Tag Manager経由）を使用しています。</p>
                  <p>Google アナリティクスはCookieを使用してデータを収集しますが、このデータは個人を特定するものではありません。収集・処理されるデータについては、<a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer">Googleのプライバシーポリシー</a>をご確認ください。</p>
                  <p>Google アナリティクスのデータ収集を無効にする場合は、<a href="https://tools.google.com/dlpage/gaoptout?hl=ja" target="_blank" rel="noopener noreferrer">Google アナリティクス オプトアウトアドオン</a>をご利用ください。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>個人情報の管理・安全対策</p>
                <div className={styles.itemText}>
                  <p>当社は、収集した個人情報の漏えい・紛失・改ざん等を防止するため、適切なセキュリティ対策を実施しています。個人情報へのアクセスは必要な担当者に限定し、適切に管理します。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>個人情報の開示・訂正・削除について</p>
                <div className={styles.itemText}>
                  <p>お客様ご自身の個人情報について、開示・訂正・削除等をご希望の場合は、<Link href={URL.Contact}>お問い合わせフォーム</Link>よりご連絡ください。ご本人確認の上、合理的な期間内に対応いたします。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>免責事項</p>
                <div className={styles.itemText}>
                  <p>当サイトに掲載する情報については、正確性・完全性を保つよう努めていますが、その内容を保証するものではありません。当サイトのご利用によって生じたいかなる損害についても、当社は責任を負いかねます。</p>
                  <p>また、当サイトからリンクされた外部サイトの内容については、当社は一切の責任を負いません。</p>
                </div>
              </div>

              <div className={styles.policyItem}>
                <p className={styles.itemTitle}>プライバシーポリシーの改訂</p>
                <div className={styles.itemText}>
                  <p>当社は、法令の変更やサービス内容の変更等に応じて、本ポリシーを予告なく改訂する場合があります。改訂後のポリシーは、当ページに掲載した時点から効力を生じるものとします。</p>
                </div>
              </div>

            </div>

            <p className={styles.revised}>制定日：2024年4月1日　最終更新：2025年4月25日</p>
          </div>
        </div>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </section>
  );
}
