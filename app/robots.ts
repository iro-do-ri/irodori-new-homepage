import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/wp-admin/", "/wp-content/", "/wp-login.php", "/wp-includes/"],
    },
    sitemap: "https://iro-do-ri.jp/sitemap.xml",
  };
}
