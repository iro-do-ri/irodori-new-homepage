import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
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
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        category: data.category ?? "",
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

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    category: data.category ?? "",
    contentHtml,
  };
}
