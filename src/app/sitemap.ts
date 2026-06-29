import fs from "fs";
import path from "path";
import type { MetadataRoute } from "next";
import {
  listPageSlugs,
  listBookSlugs,
  listBookFrameworkSlugs,
  listBuildingDigitalWealthSlugs,
} from "@/lib/content";
import { siteUrl } from "@/lib/seo";

/**
 * Use the content file's last-modified time when available so search engines
 * get a meaningful lastmod signal instead of a rolling build timestamp.
 */
function mtimeFor(relDir: string, slug: string): Date {
  try {
    const root = path.join(process.cwd(), "content");
    const direct = path.join(root, relDir, `${slug}.md`);
    if (fs.existsSync(direct)) return fs.statSync(direct).mtime;
    const underscored = path.join(root, relDir, slug.replace(/-/g, "_") + ".md");
    if (fs.existsSync(underscored)) return fs.statSync(underscored).mtime;
  } catch {
    /* fall through */
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const pageRoutes: MetadataRoute.Sitemap = listPageSlugs().map((slug) => ({
    url: `${siteUrl}/pages/${slug}`,
    lastModified: mtimeFor("pages", slug),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const bookRoutes: MetadataRoute.Sitemap = listBookSlugs().map((slug) => ({
    url: `${siteUrl}/books/${slug}`,
    lastModified: mtimeFor("books", slug),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const frameworkRoutes: MetadataRoute.Sitemap = listBookFrameworkSlugs().map(
    (slug) => ({
      url: `${siteUrl}/books/frameworks/${slug}`,
      lastModified: mtimeFor("books/frameworks", slug),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const buildingDigitalWealthRoutes: MetadataRoute.Sitemap =
    listBuildingDigitalWealthSlugs().map((slug) => ({
      url: `${siteUrl}/books/building-digital-wealth/${slug}`,
      lastModified: mtimeFor("books/building-digital-wealth", slug),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // NOTE: Essay routes (/essays/*), /foreword, /media, /timeline are
  // placeholder ("not yet published") pages and are noindex'd at the page
  // level. They are intentionally excluded from the sitemap to avoid
  // surfacing thin content to crawlers. Add them back as they are published.
  return [
    ...staticRoutes,
    ...pageRoutes,
    ...bookRoutes,
    ...frameworkRoutes,
    ...buildingDigitalWealthRoutes,
  ];
}
