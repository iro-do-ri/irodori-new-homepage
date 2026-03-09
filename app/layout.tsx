import type { Metadata } from "next";
import { Montserrat, Murecho } from "next/font/google";
import "./globals.css";
import Footer from "./parts/Footer";
import Script from "next/script";

const MontserratSans = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
});

const MurechoSans = Murecho({
  variable: "--font-Murecho",
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iro-do-ri.jp"),
  verification: {
    google: "ytk3I8cyRv8Tf4kUl-4DCqdxqTj2cIY6zPaIlAuh260",
  },
  title: {
    default: "船橋 ホームページ制作｜格安10万円〜のWebデザイン会社【イロドリ】",
    template: "%s｜船橋のホームページ制作 イロドリ",
  },
  description:
    "千葉県船橋市のホームページ制作会社イロドリ。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。中小企業・個人事業主のホームページ制作はお気軽にご相談ください。",
  openGraph: {
    siteName: "イロドリ｜船橋のホームページ制作会社",
    locale: "ja_JP",
    type: "website",
    title: "船橋 ホームページ制作｜格安10万円〜のWebデザイン会社【イロドリ】",
    description:
      "千葉県船橋市のホームページ制作会社イロドリ。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。中小企業・個人事業主のホームページ制作はお気軽にご相談ください。",
    url: "https://iro-do-ri.jp",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "船橋 ホームページ制作｜格安10万円〜のWebデザイン会社【イロドリ】",
    description:
      "千葉県船橋市のホームページ制作会社イロドリ。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://iro-do-ri.jp",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://iro-do-ri.jp/#organization",
    name: "イロドリ",
    url: "https://iro-do-ri.jp",
    description: "千葉県船橋市を拠点とするホームページ制作・Webデザイン会社。WordPress・SEO設計・コーポレートサイト制作を10万円〜でご提供。",
    address: {
      "@type": "PostalAddress",
      addressLocality: "船橋市",
      addressRegion: "千葉県",
      addressCountry: "JP",
    },
    priceRange: "¥¥",
    knowsAbout: ["ホームページ制作", "Webデザイン", "WordPress", "SEO対策", "コーポレートサイト制作"],
    areaServed: [
      { "@type": "City", name: "船橋市" },
      { "@type": "AdministrativeArea", name: "千葉県" },
      { "@type": "AdministrativeArea", name: "東京都" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ホームページ制作プラン",
      itemListElement: [
        {
          "@type": "Offer",
          name: "ライトプラン",
          description: "1ページのシンプルなホームページ制作。WordPress CMS導入・レスポンシブ対応込み。",
          price: "100000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          name: "スタンダードプラン",
          description: "8ページのWordPressホームページ制作。SEO対策・保守サポート3ヶ月込み。",
          price: "300000",
          priceCurrency: "JPY",
        },
        {
          "@type": "Offer",
          name: "フルカスタムプラン",
          description: "ページ数無制限のフルカスタムホームページ制作。Micro CMS・3ヶ月SEO対策・保守サポート6ヶ月込み。",
          price: "500000",
          priceCurrency: "JPY",
        },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://iro-do-ri.jp/#website",
    url: "https://iro-do-ri.jp",
    name: "イロドリ｜船橋のホームページ制作会社",
    publisher: {
      "@id": "https://iro-do-ri.jp/#organization",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${MontserratSans.variable} ${MurechoSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Script
        id="gtm"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T9ZN2XDC');
          `,
        }}
      />
      <body>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-T9ZN2XDC"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
        {children}
        <Footer />
      </body>
    </html>
  );
}
