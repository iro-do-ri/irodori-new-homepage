import {client} from "../../lib/Micro";
import Header  from "@/app/parts/Header";
import Contact  from "./Contact";
import page from "@/app/parts/_Page.module.scss";
import Breadcrumb from "@/app/parts/Breadcrumb";


export default async function NewsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });

  return (
    <section className={`${page.page} relative`}>
      <Header />
      <div className={`${page.container}`}>
        <Breadcrumb items={[{ label: "更新情報", href: "/blog" }, { label: data.title }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "ホーム", item: "https://iro-do-ri.jp/" },
            { "@type": "ListItem", position: 2, name: "更新情報", item: "https://iro-do-ri.jp/blog" },
            { "@type": "ListItem", position: 3, name: data.title, item: `https://iro-do-ri.jp/news/${id}` },
          ],
        }) }} />
        <div className={`${page.subcontainer}`}>
          <section>
            <div className={`${page.img}`}><img src={data.img?.url??"/"} alt={data.title} /></div>
            <h1>{data.title}</h1>
          </section>
          {data.contents ? (<section className={`${page.document}`} dangerouslySetInnerHTML={{ __html: data.contents}} />
          ) : (<section className="hidden" />)}
          <Contact />
        </div>
      </div>
    </section>
  );
}
