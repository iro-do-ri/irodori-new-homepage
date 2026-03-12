import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "船橋で魅力を伝えるWEBデザイン・ホームページ制作会社 | イロドリ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d1b2a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* アクセントライン */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "6px",
            height: "100%",
            background: "#3364AE",
          }}
        />

        {/* ラベル */}
        <div
          style={{
            color: "#3364AE",
            fontSize: 14,
            letterSpacing: "0.4em",
            marginBottom: 28,
            display: "flex",
          }}
        >
          WEB DESIGN
        </div>

        {/* メインタイトル */}
        <div
          style={{
            color: "#fffcff",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: 32,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>船橋で魅力を伝える</span>
          <span>ホームページ・WEBサイト制作会社</span>
        </div>

        {/* サブテキスト */}
        <div
          style={{
            color: "rgba(255,252,255,0.6)",
            fontSize: 22,
            display: "flex",
          }}
        >
          船橋のWebデザイナー イロドリ
        </div>

        {/* ブランド名（右下） */}
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              color: "#fffcff",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "0.2em",
              display: "flex",
            }}
          >
            IRODORI
          </div>
          <div
            style={{
              color: "rgba(255,252,255,0.4)",
              fontSize: 13,
              marginTop: 4,
              display: "flex",
            }}
          >
            千葉県船橋
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
