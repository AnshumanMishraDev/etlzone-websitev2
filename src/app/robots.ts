/* robots.txt - search engine crawling rules */
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://etlzone.com/sitemap.xml",
  };
}
