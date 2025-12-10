import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://samvrtai.com",
    sitemap: "https://samvrtai.com/sitemap.xml",
  };
}
