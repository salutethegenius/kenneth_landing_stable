import type { MetadataRoute } from "next";
import {
  listPageSlugs,
  listBookSlugs,
  listBookFrameworkSlugs,
  listBuildingDigitalWealthSlugs,
} from "@/lib/content";
import { siteUrl } from "@/lib/seo";

const essaySlugs: string[] = [
  "judgment",
  "identity",
  "decision-making",
  "happiness",
  "choice",
  "presence",
  "be-yourself",
  "self-care",
  "meditation",
  "freedom",
  "empire-blueprint",
  "systems-over-stress",
  "building-in-silence",
  "bahamian-by-design",
  "fatherhood-legacy",
  "data-sovereignty",
  "ghost-protocols",
  "art-of-war-rooms",
  "hustlers-compass",
];

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
      url: `${siteUrl}/foreword`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/media`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/timeline`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  const pageRoutes: MetadataRoute.Sitemap = listPageSlugs().map((slug) => ({
    url: `${siteUrl}/pages/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const bookRoutes: MetadataRoute.Sitemap = listBookSlugs().map((slug) => ({
    url: `${siteUrl}/books/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const frameworkRoutes: MetadataRoute.Sitemap = listBookFrameworkSlugs().map(
    (slug) => ({
      url: `${siteUrl}/books/frameworks/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  const buildingDigitalWealthRoutes: MetadataRoute.Sitemap =
    listBuildingDigitalWealthSlugs().map((slug) => ({
      url: `${siteUrl}/books/building-digital-wealth/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const essayRoutes: MetadataRoute.Sitemap = essaySlugs.map((slug) => ({
    url: `${siteUrl}/essays/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...pageRoutes,
    ...bookRoutes,
    ...frameworkRoutes,
    ...buildingDigitalWealthRoutes,
    ...essayRoutes,
  ];
}

