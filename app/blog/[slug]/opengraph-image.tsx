import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/app/lib/posts";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = { params: Promise<{ slug: string }> };

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title ?? "ブログ記事";
  const category = post?.category ?? "ホームページ制作";

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

        <div
          style={{
            color: "#3364AE",
            fontSize: 13,
            letterSpacing: "0.3em",
            marginBottom: 24,
            display: "flex",
          }}
        >
          {category.toUpperCase()}
        </div>

        <div
          style={{
            color: "#fffcff",
            fontSize: title.length > 20 ? 44 : 52,
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: 40,
            display: "flex",
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        <div
          style={{
            color: "rgba(255,252,255,0.6)",
            fontSize: 20,
            display: "flex",
          }}
        >
          船橋のWebデザイナー イロドリ
        </div>

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
              fontSize: 28,
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
              fontSize: 12,
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
