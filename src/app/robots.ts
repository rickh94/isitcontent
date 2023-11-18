import { type MetadataRoute } from "next";
import { env } from "~/env.mjs";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/behind-the-curtain",
    },
    sitemap: `${env.SITE_URL}/sitemap.xml`,
  };
}
