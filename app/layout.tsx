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
  title: {
    default: "船橋のホームページ制作会社｜イロドリ",
    template: "%s｜イロドリ",
  },
  description:
    "千葉県船橋市のWebデザイナー「イロドリ」。WordPress・SEO設計・コーポレートサイト制作を10万円〜で対応。中小企業・法人のサイト制作はお気軽にご相談ください。",
  openGraph: {
    siteName: "イロドリ",
    locale: "ja_JP",
    type: "website",
    title: "船橋のホームページ制作会社｜イロドリ",
    description:
      "千葉県船橋市のWebデザイナー「イロドリ」。WordPress・SEO設計・コーポレートサイト制作を10万円〜で対応。中小企業・法人のサイト制作はお気軽にご相談ください。",
    url: "https://iro-do-ri.jp",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "船橋のホームページ制作会社｜イロドリ",
    description:
      "千葉県船橋市のWebデザイナー「イロドリ」。WordPress・SEO設計・コーポレートサイト制作を10万円〜で対応。",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "イロドリ",
  url: "https://iro-do-ri.jp",
  description: "千葉県船橋市を拠点とするWebデザイン・ホームページ制作",
  address: {
    "@type": "PostalAddress",
    addressLocality: "船橋市",
    addressRegion: "千葉県",
    addressCountry: "JP",
  },
  priceRange: "¥¥",
  serviceType: "ホームページ制作・Webデザイン",
  areaServed: ["船橋市", "千葉県", "東京都"],
};

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
      </head>
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
