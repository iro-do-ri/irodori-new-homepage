import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "イロドリ <k-katsuno@iro-do-ri.jp>";
const ADMIN = "k-katsuno@iro-do-ri.jp";

// スパムと判定するキーワード（英語のみ本文・よくあるスパムフレーズ）
const SPAM_PATTERNS = [
  /\bSEO\s+service/i,
  /\bbacklink/i,
  /\bcrypto\b/i,
  /\bcasino\b/i,
  /\bviagra\b/i,
  /https?:\/\/[^\s]{20,}/,   // 長いURLが含まれている
  /(?:https?:\/\/[^\s]+\s*){3,}/, // URLが3つ以上
];

function isSpam(body: Record<string, string>): boolean {
  // ハニーポットフィールドが埋まっていればスパム
  if (body._hp && body._hp.trim() !== "") return true;

  // フォーム表示から3秒未満で送信されていたらスパム
  const elapsed = Date.now() - Number(body._t ?? 0);
  if (!isNaN(elapsed) && elapsed < 3000) return true;

  // 本文・会社名にスパムパターンが含まれていたらスパム
  const textToCheck = [body.message ?? "", body.company ?? "", body.name ?? ""].join(" ");
  if (SPAM_PATTERNS.some((re) => re.test(textToCheck))) return true;

  return false;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.company || !body.email) {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // スパム判定
    if (isSpam(body)) {
      // ボットには成功したように見せる（サイレント拒否）
      return NextResponse.json({ success: true });
    }

    // ① 管理者に通知
    await resend.emails.send({
      from: FROM,
      to: ADMIN,
      replyTo: body.email,
      subject: "【イロドリ】お問い合わせが届きました",
      text: `
会社名: ${body.company}
担当者名: ${body.name || "（未入力）"}
メール: ${body.email}

■ ご相談内容
${body.message || "（未入力）"}
      `.trim(),
    });

    // ② ユーザーに自動返信
    await resend.emails.send({
      from: FROM,
      to: body.email,
      subject: "お問い合わせありがとうございます｜イロドリ",
      text: `
${body.name || ""}様

この度は、お問い合わせいただきありがとうございます。
内容を確認の上、改めてご連絡いたします。

───────────────────
イロドリ
勝野 紘太
〒274-0065 千葉県船橋高根台
TEL: 080-5543-5943
Email: k-katsuno@iro-do-ri.jp
───────────────────
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
