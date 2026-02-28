"use client";

import page from "@/app/parts/_Page.module.scss";
import {useState} from "react";

export default function Contact() {
  const [form,setForm] = useState({
    company: "",
    name: "",
    email: "",
    message: ""
  })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  
    const data = await res.json();
  
    if (data.success) {
      setForm({
        company: "",
        name: "",
        email: "",
        message: "",
      });
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  const ChangeEvent = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name,value} = e.target;
    setForm(prev=>({
      ...prev,
      [name]: value
    }));
  }
  return (
        <section className={`${page.contact}`}>
          <form onSubmit={handleSubmit}>
            <h2 className="mb-10">ホームページ及びその他のデザイン制作をご検討中の方へ<br/>お問い合わせは下記フォームをご利用下さい</h2>
            <div className="flex flex-col sm:flex-row mb-2 pb-4 sm:items-center gap-2">
              <p className="sm:flex-[20%] font-medium">会社名</p>
              <span className="p-2 sm:flex-[10%] text-center text-sm self-start sm:self-auto border border-gray-300 rounded">必須</span>
              <input name="company" value={form.company} className="p-4 w-full sm:flex-[70%] sm:max-w-[500px]" type="text" placeholder="株式会社山田商事" onChange={ChangeEvent} required />
            </div>
            <div className="flex flex-col sm:flex-row mb-2 py-4 sm:items-center gap-2">
              <p className="sm:flex-[20%] font-medium">ご担当者名</p>
              <input name="name" value={form.name} className="p-4 w-full sm:flex-[80%] sm:max-w-[500px]" type="text" placeholder="山田太郎" onChange={ChangeEvent} />
            </div>
            <div className="flex flex-col sm:flex-row mb-2 py-4 sm:items-center gap-2">
              <p className="sm:flex-[20%] font-medium">メールアドレス</p>
              <span className="p-2 sm:flex-[10%] text-center text-sm self-start sm:self-auto border border-gray-300 rounded">必須</span>
              <input name="email" value={form.email} className="p-4 w-full sm:flex-[70%] sm:max-w-[500px]" type="email" placeholder="aiueo@co.jp" onChange={ChangeEvent} required/>
            </div>
            <div className="flex flex-col sm:flex-row mb-2 py-4 sm:items-start gap-2">
              <p className="sm:flex-[20%] font-medium sm:pt-4">ご相談内容</p>
              <textarea name="message" value={form.message} className="p-4 w-full sm:flex-[80%] sm:max-w-[500px]" placeholder="何でもご相談下さい" rows={5} onChange={ChangeEvent}/>
            </div>
            <div className="flex justify-center">
              <button type="submit">
                お問い合わせ内容を送信する
              </button>
            </div>
          </form>
          {status === "success" && (
            <p className="text-green-600 mt-4 text-center">
              送信が完了しました。ありがとうございます。
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 mt-4 text-center">
              送信に失敗しました。もう一度お試しください。
            </p>
          )}
        </section>
  )
}