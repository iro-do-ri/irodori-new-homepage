import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = "イロドリ <k-katsuno@iro-do-ri.jp>";
const ADMIN = "k-katsuno@iro-do-ri.jp";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.company || !body.email) {
      return NextResponse.json({ success: false }, { status: 400 });
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
TEL: 080-5629-6310
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
