import type { Metadata } from "next";
import Link from "next/link";
import { URL } from "../../url/Url";
import Breadcrumb from "../../parts/Breadcrumb";

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
    a: "1ページのシンプルなサイトは10万円〜、8ページ前後のコーポレートサイトは30万円〜、フルカスタムサイトは50万円〜をご用意しています。ご予算に合わせて柔軟にご提案しますので、まずはご相談ください。",
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
    desc: "はじめてホームページを作る方や、シンプルで信頼感のあるサイトをお求めの方に。",
    features: ["1ページ以内", "WordPress導入（自社更新可）", "レスポンシブ対応", "お問い合わせフォーム"],
    featured: false,
  },
  {
    type: "STANDARD",
    name: "スタンダードプラン",
    price: "300,000",
    desc: "集客を本格的に始めたいスモールビジネス向けの定番プラン。SEO対策込み。",
    features: ["5ページ以内", "WordPress導入（自社更新可）", "オリジナルデザイン", "SEO対策", "お問い合わせフォーム", "公開後サポート3ヶ月"],
    featured: true,
  },
  {
    type: "FULL CUSTOM",
    name: "フルカスタムプラン",
    price: "500,000",
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
      { "@type": "ListItem", position: 2, name: "対応エリア", item: "https://iro-do-ri.jp/area/" },
      { "@type": "ListItem", position: 3, name: "津田沼のホームページ制作", item: "https://iro-do-ri.jp/area/tsudanuma" },
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
    <section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />

      {/* ── ヒーロー ── */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4">AREA / TSUDANUMA</span>
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 leading-snug mb-6">
            津田沼のホームページ制作<br className="sm:hidden" />｜個人事業主・中小企業向け<br />
            <span className="text-xl sm:text-3xl">10万円〜【イロドリ】</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            津田沼・習志野エリアのホームページ制作はお任せください。<br />
            船橋拠点の地元密着Web制作会社イロドリが、<br className="hidden sm:block" />
            WordPressサイト・SEO対策・コーポレートサイトを10万円〜でご提供します。<br />
            相談無料・対面打ち合わせOK。
          </p>
          <Link
            href={URL.Contact}
            className="inline-block bg-gray-900 text-white text-sm font-semibold px-10 py-4 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="無料相談ページへ移動します"
          >
            無料で相談してみる
          </Link>
        </div>
      </div>

      <Breadcrumb items={[{ label: "対応エリア", href: "/area" }, { label: "津田沼のホームページ制作" }]} />

      {/* ── 津田沼エリアについて ── */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4">ABOUT TSUDANUMA</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            津田沼・習志野エリアの事業者様へ
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            津田沼は習志野市と船橋市にまたがる千葉県有数の商業エリアです。
            イオンモール・ショッピングセンターが集積し、飲食店・美容室・クリニック・士業事務所など
            多くの事業者が集まるエリアです。
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
            「ホームページを作りたいけど、どこに頼めばいいかわからない」
            「大手に頼むと高そうで…」とお悩みの津田沼エリアの事業者様に、
            地元・船橋拠点のイロドリが寄り添います。
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            対面でのお打ち合わせも可能ですので、はじめての方でも安心してご依頼いただけます。
          </p>
        </div>
      </div>

      {/* ── 選ばれる理由 ── */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4">WHY IRODORI</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10">
            津田沼エリアでイロドリが選ばれる4つの理由
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="text-xs font-bold text-gray-400 mb-2">0{i + 1}</p>
                <h3 className="text-base font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 料金プラン ── */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4">PLANS</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">料金プラン</h2>
          <p className="text-sm text-gray-500 mb-10">
            すべてのプランにWordPress・レスポンシブ対応・お問い合わせフォームが含まれます。<br />
            ※表示価格は税抜きの目安です。詳細はお見積りにてご確認ください。
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.type}
                className={`rounded-2xl p-6 border ${plan.featured ? "border-gray-900 shadow-lg" : "border-gray-200 shadow-sm"} relative`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-4 py-1 rounded-full">
                    おすすめ
                  </span>
                )}
                <p className="text-xs font-bold text-gray-400 mb-1">{plan.type}</p>
                <p className="text-base font-bold text-gray-900 mb-2">{plan.name}</p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  ¥{plan.price}<span className="text-sm font-normal text-gray-500">〜（税込）</span>
                </p>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">{plan.desc}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-700">
                      <span className="text-gray-900 font-bold mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`${URL.Contact}?plan=${encodeURIComponent(plan.name)}`}
                  className="block text-center text-xs font-semibold border border-gray-900 text-gray-900 py-2 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                  aria-label={`${plan.name}で無料相談する`}
                >
                  このプランで相談する
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={URL.Price} className="text-sm text-gray-500 underline hover:text-gray-900">
              すべての料金プランを見る →
            </Link>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <div className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4">FAQ</span>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-10">よくあるご質問</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-bold text-sm text-gray-900 mb-3 flex gap-3">
                  <span className="text-gray-400 font-black">Q.</span>
                  {faq.q}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="py-20 px-6 bg-gray-900 text-white text-center">
        <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase block mb-4">CONTACT</span>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          津田沼・習志野エリアからのご相談<br />お気軽にどうぞ
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed mb-8">
          ご予算・ご要望に合わせて柔軟にご提案いたします。<br />
          見積もり・ご相談は無料。対面打ち合わせも歓迎です。
        </p>
        <Link
          href={URL.Contact}
          className="inline-block bg-white text-gray-900 text-sm font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="無料相談ページへ移動します"
        >
          無料で相談してみる
        </Link>
      </div>
    </section>
  );
}
