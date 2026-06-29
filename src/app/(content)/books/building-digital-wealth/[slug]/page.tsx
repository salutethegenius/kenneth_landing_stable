import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getBuildingDigitalWealthBySlug,
  listBuildingDigitalWealthSlugs,
} from "@/lib/content";
import { MarkdownContent } from "@/components/MarkdownContent";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listBuildingDigitalWealthSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getBuildingDigitalWealthBySlug(slug);
  if (!result) {
    return {
      title: "Not Found",
      robots: { index: false, follow: true },
    };
  }
  const title = (result.data.title as string) || slug.replace(/-/g, " ");
  const descriptionFromFrontmatter = result.data
    .description as string | undefined;
  const cleanedSource =
    descriptionFromFrontmatter ??
    result.content
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, "")
      .replace(/[#>*_`]/g, "");
  const baseDescription =
    cleanedSource
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line.length > 40) ??
    `Building digital wealth: ${title} by Kenneth C. Moncur from the Almanack of Systems, Code & Legacy.`;
  const description =
    baseDescription.length > 150
      ? `${baseDescription.slice(0, 150).trimEnd()}...`
      : baseDescription;

  return buildPageMetadata({
    title,
    description,
    path: `/books/building-digital-wealth/${slug}`,
    type: "article",
    keywords: [
      "Kenneth C. Moncur",
      "Building Digital Wealth",
      "digital wealth",
      title,
    ],
  });
}

export default async function BuildingDigitalWealthPage({ params }: Props) {
  const { slug } = await params;
  const result = getBuildingDigitalWealthBySlug(slug);
  if (!result) notFound();
  const title = (result.data.title as string) || slug.replace(/-/g, " ");
  const descriptionFromFrontmatter = result.data
    .description as string | undefined;
  const cleanedSource =
    descriptionFromFrontmatter ??
    result.content
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, "")
      .replace(/[#>*_`]/g, "");
  const baseDescription =
    cleanedSource
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line.length > 40) ??
    `Building digital wealth: ${title} by Kenneth C. Moncur from the Almanack of Systems, Code & Legacy.`;
  const description =
    baseDescription.length > 150
      ? `${baseDescription.slice(0, 150).trimEnd()}...`
      : baseDescription;

  return (
    <article className="content-wrap">
      <JsonLd
        data={[
          articleJsonLd({
            title,
            description,
            path: `/books/building-digital-wealth/${slug}`,
            section: "Building Digital Wealth",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Building Digital Wealth", path: "/pages/table_of_contents" },
            { name: title, path: `/books/building-digital-wealth/${slug}` },
          ]),
        ]}
      />
      <MarkdownContent content={result.content} />
    </article>
  );
}
