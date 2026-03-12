import { MetadataRoute } from "next";
import { getAllPostSlugs } from "./lib/posts";
import { client } from "./lib/Micro";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = getAllPostSlugs();
  const blogPosts = slugs.map((slug) => ({
    url: `https://iro-do-ri.jp/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  let newsPosts: MetadataRoute.Sitemap = [];
  try {
    const data = await client.get({
      endpoint: "news",
      queries: { limit: 100 },
    });
    newsPosts = data.contents.map((item: { id: string; updatedAt?: string; publishedAt?: string }) => ({
      url: `https://iro-do-ri.jp/news/${item.id}`,
      lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    newsPosts = [];
  }

  return [
    {
      url: "https://iro-do-ri.jp",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://iro-do-ri.jp/price",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://iro-do-ri.jp/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://iro-do-ri.jp/works",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://iro-do-ri.jp/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://iro-do-ri.jp/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    ...blogPosts,
    ...newsPosts,
  ];
}
