export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://samvrtai.com/sitemap.xml",
    host: "https://samvrtai.com",
  };
}
