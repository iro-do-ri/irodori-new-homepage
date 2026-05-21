'use client'

import { useState } from 'react';
import style from '../Module/style.module.scss'

export default function Main() {
  const [count,setCount] = useState({
    company: "",
    service_years: "",
    price : "",
    page: "",
    support: "",
    contact: ""
});
const [number,setNumber] = useState(1);

const [back,setBack] = useState(1);

  const first = [{company :"個人事業主",image :"image/first/kojin.png"},
                {company :"株式会社",image :"image/first/kabushiki.png"},
                {company :"その他",image:"image/first/other.png"}];

  const first_box = first.map((item)=>{
    return (
      <button key={item.company} onClick={()=>{
        if(item.company==="個人事業主"){
          setCount({...count,company: item.company});
          setNumber(2);
        }
        if(item.company==="株式会社"||item.company==="その他"){
          setCount({...count,company: item.company});
          setNumber(4);
        }
      }}>
        <img src={item.image} alt="" />
      </button>
    )
  })

  const second = [{nensu :"1年未満",image :"image/second/10nen-miman.png"},
                  {nensu :"1年以上",image :"image/second/10nen-ijyo.png"}];

  const second_box = second.map((itemSecond)=>{
    return (
      <button key={itemSecond.nensu} onClick={()=>{
        if(itemSecond.nensu==="1年未満"){
          setCount({...count,service_years: itemSecond.nensu});
          setNumber(3);
        }
        if(itemSecond.nensu==="1年以上"){
          setCount({...count,service_years: itemSecond.nensu});
          setNumber(4);
        }
      }}>
        <img src={itemSecond.image} alt="" />
      </button>
    )
  })

  const third = [{cost:"10万円です",image:"image/third/10man.png"}];
  const third_box = third.map((itemThird)=>{
    return (
      <div key={itemThird.cost} className="flex flex-col items-center">
        <img src={itemThird.image} alt="" />
      </div>
    )
  })

  const forth =[{page:"1ページ",image:"image/forth/1page.png"},{page:"5ページ",image:"image/forth/5page.png"},{page:"10ページ",image:"image/forth/10page.png"}];
  const forth_box = forth.map((itemForth)=>{
    return (
      <button key={itemForth.page} onClick={()=>{
        if(itemForth.page==="1ページ"||itemForth.page==="5ページ"||itemForth.page==="10ページ"){
          setCount({...count,page: itemForth.page});
          setNumber(5);
        }
      }}>
        <img src={itemForth.image} alt="" />
      </button>
    )
  })

  const fifth = [{support:"更新を希望",image:"image/fifth/update.webp"},{support:"更新を希望しない",image:"image/fifth/noupdate.webp"}]

  const fifth_box = fifth.map((itemFifth)=>{
    return (
    <button key={itemFifth.support} onClick={()=>{
      if(itemFifth.support==="更新を希望"||itemFifth.support==="更新を希望しない"){
        setCount({...count,support : itemFifth.support});
        setNumber(6);
      }
    }
    }>
    <img src={itemFifth.image} alt="" />
    </button>
    )
  })

  const sixth = [{contact:"お問い合わせフォームを希望",image:"image/sixth/contact.webp"},{contact:"お問い合わせフォームを希望しない",image:"image/sixth/nocontact.webp"}]

  const six_box = sixth.map((itemSixth)=>{
    return (
      <button key={itemSixth.contact} onClick={()=>{
        if(itemSixth.contact==="お問い合わせフォームを希望"||itemSixth.contact==="お問い合わせフォームを希望しない"){
          setCount({...count,contact: itemSixth.contact});
          setNumber(7);
        }
      }}>
        <img src={itemSixth.image} alt="" />
      </button>
    )
  })


const priceTable: Record<string, number> = {"1ページ":50000,"5ページ":250000,"10ページ":450000}

const supportPrice = count.support === "更新を希望" ? 30000 : 0;

const contactPrice = count.contact === "お問い合わせフォームを希望" ? 20000 : 0;

const total = (priceTable[count.page] ?? 0) + supportPrice + contactPrice;

const image: Record<number, string> = {
  50000: "image/seventh/5man.png",
  70000: "image/seventh/7man.png",
  80000: "image/seventh/8man.png",
  100000: "image/seventh/10man.png",
  250000: "image/seventh/25man.png",
  270000: "image/seventh/27man.png",
  280000: "image/seventh/28man.png",
  300000: "image/seventh/30man.png",
  450000: "image/seventh/45man.png",
  470000: "image/seventh/47man.png",
  480000: "image/seventh/48man.png",
  500000: "image/seventh/50man.png",
};

const imageTotal = image[total];

const seventh_box = ()=>{
  return (
    <img src={imageTotal} alt="" />
  )
}

  const backButton = () => {
    return (
    <button onClick={()=>{
      setBack(2);
      setNumber(1);
      setCount({
        company: "",
        service_years: "",
        price : "",
        page: "",
        support: "",
        contact: ""
      });
    }}>
    <img className={`${count.company==="個人事業主"||count.company==="株式会社"||count.company==="その他" ? "" : "pointer-events-none"}`} src={`${count.company==="個人事業主"||count.company==="株式会社"||count.company==="その他" ? "image/other/goback.png" : "image/other/select.png"}`} alt="" />
    </button>
    )
  }

  return (
    <section className={`${style.section} h-full px-12`}>
    <h1 className="text-center block pt-12">簡単見積もり作成シミュレーション</h1>
    <div className='flex flex-col justify-center h-[calc(100%-96px)]'>
      <p className="text-center pb-4">
        {`${number === 1 ? "会社の形態を教えて下さい" : number === 2 ? "起業して何年になりますか" : number === 3 ? "ホームページ作成費用は" : number === 4 ? "ページ数は何ページをお考えでしょうか" : number === 5 ? "自社でサイトを更新・編集したいですか？" 
        : number === 6 ? "お問い合わせフォームは必要ですか" : number === 7 ? "ホームページ作成費用は" : ""}`}
      </p>
      <div className={`${style.box} relative pb-4`}>
        <div className={`${count.company === "個人事業主"||count.company === "株式会社"||count.company === "その他"  ? style.action : ""} flex justify-center gap-5 relative w-full`}>
        {first_box}
        </div>
        <div className={`${count.company === "個人事業主" ? style.up : ""} ${count.service_years === "1年未満"||count.service_years==="1年以上" ? style.action : ""} justify-center gap-5 opacity-0 pointer-events-none absolute w-full`}>
        {second_box}
        </div>
        <div className={`${count.service_years === "1年未満" ? style.up : ""} justify-center gap-5 opacity-0 pointer-events-none absolute w-full`}>
        {third_box}
        </div>
        <div className={`${count.company === "株式会社"||count.company=== "その他"||count.service_years==="1年以上" ? style.up : ""} ${count.page === "1ページ"||count.page === "5ページ"||count.page === "10ページ" ? style.action : ""} justify-center gap-5 opacity-0 pointer-events-none absolute w-full`}>
        {forth_box}
        </div>
        <div className={`${count.page === "1ページ"||count.page === "5ページ"||count.page === "10ページ" ? style.up: ""} ${count.support === "更新を希望"||count.support === "更新を希望しない" ? style.action : ""} justify-center gap-5 opacity-0 pointer-events-none absolute w-full`}>
        {fifth_box}
        </div>
        <div className={`${count.support === "更新を希望" || count.support === "更新を希望しない" ? style.up : ""} ${count.contact === "お問い合わせフォームを希望"||count.contact === "お問い合わせフォームを希望しない" ? style.action : ""} justify-center gap-5 opacity-0 pointer-events-none absolute w-full`}>
        {six_box}
        </div>
        <div className={`${count.contact === "お問い合わせフォームを希望"||count.contact === "お問い合わせフォームを希望しない" ? style.up : ""} justify-center gap-5 opacity-0 pointer-events-none absolute w-full flex-col items-center`}>
        {seventh_box()}
        <p className='text-xs'>※サーバー代とドメイン代は別途費用発生</p>
        </div>
      </div>
      <div className='flex justify-center items-center gap-6'>
        <a href="https://iro-do-ri.jp/"><img src="image/other/homepage-back.png" alt="ホームページに戻る" /></a>
        {backButton()}
      </div>
    </div>
    </section>
  )
}
