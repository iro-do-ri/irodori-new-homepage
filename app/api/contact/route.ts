import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.company || !body.email) {
      return NextResponse.json(
        { success: false },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.NET_OWL,
      port: Number(process.env.OWL_PORT),
      secure: false,
      auth: {
        user: process.env.OWL_USER,
        pass: process.env.OWL_PASS,
      },
    });

    // ① 管理者に通知
    await transporter.sendMail({
      from: process.env.OWL_USER,
      to: process.env.OWL_USER,
      subject: "お問い合わせが届きました",
      text: `
        会社名: ${body.company}
        担当者名: ${body.name}
        メール: ${body.email}

        内容:
        ${body.message}
      `,
    });

    // ② ユーザーに自動返信
    const info = await transporter.sendMail({
      from: process.env.OWL_USER,
      to: body.email,
      subject: "お問い合わせありがとうございます",
      text: `
        ${body.name} 様

        この度は、お問い合わせいただき有難う御座います。
        内容を確認させていただき、ご連絡致します。
        
        ───────────────────
        イロドリ
        勝野 紘太
        〒274-0065 千葉県船橋高根台
        TEL: 080-5629-6310
        Email: k-katsuno@iro-do-ri.jp
        ───────────────────
      `,
    });
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
  
}