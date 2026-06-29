import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookFrameworkBySlug, listBookFrameworkSlugs } from "@/lib/content";
import { MarkdownContent } from "@/components/MarkdownContent";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listBookFrameworkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getBookFrameworkBySlug(slug);
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
    `Framework: ${title} by Kenneth C. Moncur from the Almanack of Systems, Code & Legacy.`;
  const description =
    baseDescription.length > 150
      ? `${baseDescription.slice(0, 150).trimEnd()}...`
      : baseDescription;

  return buildPageMetadata({
    title,
    description,
    path: `/books/frameworks/${slug}`,
    type: "article",
    keywords: [
      "Kenneth C. Moncur",
      "Sovereign Nation Framework",
      "Caribbean digital sovereignty",
      title,
    ],
  });
}

export default async function BookFrameworkPage({ params }: Props) {
  const { slug } = await params;
  const result = getBookFrameworkBySlug(slug);
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
    `Framework: ${title} by Kenneth C. Moncur from the Almanack of Systems, Code & Legacy.`;
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
            path: `/books/frameworks/${slug}`,
            section: "Frameworks",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Frameworks", path: "/pages/table_of_contents" },
            { name: title, path: `/books/frameworks/${slug}` },
          ]),
        ]}
      />
      <MarkdownContent content={result.content} />
    </article>
  );
}
