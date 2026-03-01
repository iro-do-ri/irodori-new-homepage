import {client} from "../../lib/Micro";
import Header  from "@/app/parts/Header";
import Contact  from "./Contact";
import page from "@/app/parts/_Page.module.scss";


export default async function NewsDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const data = await client.get({
    endpoint: "news",
    contentId: id,
  });

    return (
  <section className={`${page.page} relative`}>
      <Header />
      <div className={`${page.container}`}>
        <div className={`${page.subcontainer}`}>
            <section>
              <div className={`${page.img}`}><img src={data.img?.url??"/"} alt="" /></div>
              <h1>{data.title}</h1>
            </section>
            {data.contents ? (<section className={`${page.document}`} dangerouslySetInnerHTML={{ __html: data.contents}} />
            ) : (<section className="hidden" />)}
      <Contact />
        </div>
      </div>
  </section>
    )
}