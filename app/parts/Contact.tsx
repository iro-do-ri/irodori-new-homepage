"use client";

import styles from "./Contact.module.scss";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setForm({ company: "", name: "", email: "", message: "" });
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.en}>Contact</span>
          <h1>お問い合わせ</h1>
          <p className={styles.subtitle}>Webデザインのご相談・お見積りはこちらからどうぞ</p>
        </div>

        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.labelGroup}>
                <label htmlFor="company" className={styles.label}>会社名</label>
                <span className={styles.badge}>必須</span>
              </div>
              <input
                id="company"
                className={styles.input}
                name="company"
                value={form.company}
                type="text"
                placeholder="株式会社山田商事"
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.labelGroup}>
                <label htmlFor="name" className={styles.label}>ご担当者名</label>
              </div>
              <input
                id="name"
                className={styles.input}
                name="name"
                value={form.name}
                type="text"
                placeholder="山田太郎"
                onChange={handleChange}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.labelGroup}>
                <label htmlFor="email" className={styles.label}>メールアドレス</label>
                <span className={styles.badge}>必須</span>
              </div>
              <input
                id="email"
                className={styles.input}
                name="email"
                value={form.email}
                type="email"
                placeholder="aiueo@co.jp"
                onChange={handleChange}
                required
              />
            </div>

            <div className={`${styles.row} ${styles.rowTop}`}>
              <div className={styles.labelGroup}>
                <label htmlFor="message" className={styles.label}>ご相談内容</label>
              </div>
              <textarea
                id="message"
                className={styles.textarea}
                name="message"
                value={form.message}
                placeholder="何でもご相談ください"
                rows={6}
                onChange={handleChange}
              />
            </div>

            <div className={styles.submit}>
              <button
                className={styles.button}
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "送信中..." : "お問い合わせを送信する"}
              </button>
            </div>
          </form>

          {status === "success" && (
            <p className={styles.success}>
              送信が完了しました。ありがとうございます。
            </p>
          )}

          {status === "error" && (
            <p className={styles.error}>
              送信に失敗しました。もう一度お試しください。
            </p>
          )}
        </div>

        <p className={styles.desc}>
          ホームページ制作・リニューアル・SEO対策・チラシデザインなど、お気軽にご相談ください。
          初回のご相談・お見積りは完全無料です。千葉県船橋市を拠点に、全国のお客様に対応しております。
          フォームよりご連絡いただければ、通常2営業日以内にご返信いたします。
        </p>
      </div>
    </section>
  );
}