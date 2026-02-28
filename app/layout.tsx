import type { Metadata } from "next";
import { Montserrat, Murecho } from "next/font/google";
import "./globals.css";
import Footer from "./parts/Footer";

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
  title: "船橋で魅力を伝えるWEBデザイン・ホームページ制作会社 | イロドリ",
  description: "千葉県船橋市を拠点に、ホームページ・チラシ・動画制作を行うWEBデザイン会社イロドリです。あなたの理想を形にします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${MontserratSans.variable} ${MurechoSans.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
