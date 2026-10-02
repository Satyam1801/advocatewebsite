import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export const dynamic = "force-dynamic";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/admin"] },
    ],
    sitemap: SITE_CONFIG.url + "/sitemap.xml",
  };
}