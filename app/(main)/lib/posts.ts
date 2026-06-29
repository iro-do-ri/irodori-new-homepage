import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const postsDirectory = path.join(process.cwd(), "content/posts");

const slugImageMap: Record<string, string> = {
  "ai-agent-toha": "/ai-mythos-toha-robot-woman-laptop.jpg",
  "ai-claude-toha": "/ai-claude-toha-illustration.jpg",
  "ai-fukugyou-osusume": "/ai-mythos-toha-robot-woman-laptop.jpg",
  "ai-mythos-toha": "/ai-mythos-toha-robot-woman-laptop.jpg",
  "beauty-salon-homepage-seisaku": "/beauty-salon-homepage-seisaku-illustration.jpg",
  "chiba-homepage-seisaku-complete-guide": "/chiba-homepage-seisaku-illustration.jpg",
  "chiba-seikotsuin-homepage-shukyaku": "/seikotsuin-homepage-seisaku-illustration.jpg",
  "chiba-web-seisaku-kaisha-erabikata": "/chiba-homepage-seisaku-illustration.jpg",
  "chiba-web-seisaku-kaisha-hiyo": "/chiba-homepage-seisaku-illustration.jpg",
  "chiba-web-seisaku-kaisha-local-merit": "/chiba-homepage-seisaku-illustration.jpg",
  "chirashi-apuri": "/chirashi-sakusei-apuri-smartphone-design.jpg",
  "chirashi-design": "/chirashi.webp",
  "chirashi-sakusei": "/chirashi.webp",
  "chusho-kigyo-homepage-hitsuyosei-seo": "/chiba-homepage-seisaku-illustration.jpg",
  "claude-code-security-risk": "/claude-code-security-risk-illustration.jpg",
  "corporate-site-seisaku-hiyo": "/chiba-homepage-seisaku-illustration.jpg",
  "freelance-webdesigner-merit": "/chiba-homepage-seisaku-illustration.jpg",
  "funabashi-homepage-seisaku-ryokin": "/chiba-homepage-seisaku-illustration.jpg",
  "funabashi-homepage-seisaku-ryokin-checklist": "/chiba-homepage-seisaku-illustration.jpg",
  "funabashi-homepage-seisaku-ryokin-yasui-riyuu": "/chiba-homepage-seisaku-illustration.jpg",
  "gazou-seiseiAI-muryo": "/gazou-seisei-ai-muryo-laptop-illustration.jpg",
  "hiklink-kakutoku-dofollow": "/hiklink-dofollow-backlink-seo.jpg",
  "homepage-irai-guide": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-muryou-risuku": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-muryou-server": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-renewal-complete-guide": "/homepage-renewal-before-after-illustration.jpg",
  "homepage-renewal-guide": "/homepage-renewal-before-after-illustration.jpg",
  "homepage-renewal-hiyo-erabikata": "/homepage-renewal-before-after-illustration.jpg",
  "homepage-renewal-timing": "/homepage-renewal-before-after-illustration.jpg",
  "homepage-sakusei-flow": "/web-seisaku-nagare-flow-steps.jpg",
  "homepage-seisaku-10man-chui": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-seisaku-hojokin": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-shukyaku-method": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-toiawase-fuyasu-7points": "/hiklink-dofollow-backlink-seo.jpg",
  "homepage-tsukurikata-jibunde": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-tsukurikata-shoshinsha": "/chiba-homepage-seisaku-illustration.jpg",
  "homepage-yattewa-ikenai": "/chiba-homepage-seisaku-illustration.jpg",
  "inshokuten-homepage-seisaku": "/inshokuten-homepage-seisaku-illustration.jpg",
  "kamagaya-shigyo-homepage": "/kamagaya-station-area-kamagaya-chiba.jpg",
  "portfolio-web-seisaku": "/chiba-homepage-seisaku-illustration.jpg",
  "seikotsuin-homepage-seisaku": "/seikotsuin-homepage-seisaku-illustration.jpg",
  "shoukibo-jigyosha-seo-basics": "/hiklink-dofollow-backlink-seo.jpg",
  "tsudanuma-biyoshitsu-homepage": "/beauty-salon-homepage-seisaku-illustration.jpg",
  "web-seisaku-fukugyou": "/chiba-homepage-seisaku-illustration.jpg",
  "web-seisaku-kaisha-oote": "/chiba-homepage-seisaku-illustration.jpg",
  "web-seisaku-kaisha-oote-hiyo": "/chiba-homepage-seisaku-illustration.jpg",
  "web-seisaku-kyujin": "/chiba-homepage-seisaku-illustration.jpg",
  "web-seisaku-muryou-tool-template": "/chiba-homepage-seisaku-illustration.jpg",
  "web-seisaku-nagare": "/web-seisaku-nagare-flow-steps.jpg",
  "web-seisaku-owacon": "/chiba-homepage-seisaku-illustration.jpg",
  "website-tsukurikata-sumaho": "/chiba-homepage-seisaku-illustration.jpg",
  "website-tsukurikata-sumaho-muryo": "/chiba-homepage-seisaku-illustration.jpg",
  "wordpress-seisaku-chiba": "/wordpress-vs-microcms-comparison.jpg",
  "wordpress-vs-microcms": "/wordpress-vs-microcms-comparison.jpg",
};

function extractFirstImage(content: string): string | undefined {
  return content.match(/<img\s+[^>]*src=["']([^"']+)["']/i)?.[1];
}

function getFallbackImage(slug: string, category: string): string {
  if (slug.includes("ai") || category === "AI") return "/ai-mythos-toha-robot-woman-laptop.jpg";
  if (slug.includes("chirashi") || category === "チラシ制作") return "/chirashi.webp";
  if (slug.includes("renewal")) return "/homepage-renewal-before-after-illustration.jpg";
  if (slug.includes("seo") || category === "SEO対策") return "/hiklink-dofollow-backlink-seo.jpg";
  return "/chiba-homepage-seisaku-illustration.jpg";
}

function resolvePostImage({
  slug,
  category,
  content,
  image,
}: {
  slug: string;
  category: string;
  content: string;
  image?: string;
}): string {
  return image ?? extractFirstImage(content) ?? slugImageMap[slug] ?? getFallbackImage(slug, category);
}

function getPostImageAlt(title: string): string {
  return `${title}の内容を表したイラスト`;
}

export type FaqItem = { q: string; a: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  imageAlt?: string;
  faq?: FaqItem[];
  noindex?: boolean;
  canonical?: string;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const altPath = path.join(postsDirectory, `${slug}.mdx`);
      const filePath = fs.existsSync(fullPath) ? fullPath : altPath;
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      const title = data.title ?? slug;
      const category = data.category ?? "";
      return {
        slug,
        title,
        description: data.description ?? "",
        date: data.date ?? "",
        category,
        image: resolvePostImage({ slug, category, content, image: data.image ?? undefined }),
        imageAlt: data.imageAlt ?? getPostImageAlt(title),
        faq: data.faq ?? undefined,
        noindex: data.noindex ?? undefined,
        canonical: data.canonical ?? undefined,
      } satisfies PostMeta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const altPath = path.join(postsDirectory, `${slug}.mdx`);
  const filePath = fs.existsSync(fullPath)
    ? fullPath
    : fs.existsSync(altPath)
    ? altPath
    : null;

  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const title = data.title ?? slug;
  const category = data.category ?? "";

  const processed = await remark().use(remarkGfm).use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw).use(rehypeStringify).process(content);

  // <p>タグ内の「。」の後に改行を追加（段落末尾の。は除外）
  const contentHtml = processed.toString().replace(
    /<p>([\s\S]*?)<\/p>/g,
    (_, inner) => `<p>${inner.replace(/。(?!\s*<\/p>)(?!\s*$)/g, "。<br>")}</p>`
  );

  return {
    slug,
    title,
    description: data.description ?? "",
    date: data.date ?? "",
    category,
    image: resolvePostImage({ slug, category, content, image: data.image ?? undefined }),
    imageAlt: data.imageAlt ?? getPostImageAlt(title),
    faq: data.faq ?? undefined,
    noindex: data.noindex ?? undefined,
    canonical: data.canonical ?? undefined,
    contentHtml,
  };
}
