import Header from "./parts/Header";
import Main from "./parts/Main";
import Contact from "./parts/Contact";
import {client} from "./lib/Micro";

export default async function Page() {
    const [newsData, worksData] = await Promise.all([
        client.get({ endpoint: "news", queries: { limit: 5 } }),
        client.get({ endpoint: "works", queries: { limit: 10 } }).catch(() => ({ contents: [] })),
    ]);
  return (
  <section className="relative">
      <Header />
      <Main news={newsData.contents} works={worksData.contents} />
      <Contact />
  </section>
  );
}