import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, listPageSlugs } from "@/lib/content";
import { MarkdownContent } from "@/components/MarkdownContent";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd, breadcrumbJsonLd, buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getPageBySlug(slug);
  if (!result) {
    return {
      title: "Not Found",
      robots: { index: false, follow: true },
    };
  }
  const title = (result.data.title as string) || slug.replace(/-/g, " ");
  const descriptionFromFrontmatter = result.data
    .description as string | undefined;
  const baseDescription =
    descriptionFromFrontmatter ??
    result.content
      .replace(/[#>*_`]/g, "")
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line.length > 40) ??
    `${title} from the Almanack of Systems, Code & Legacy by Kenneth C. Moncur.`;
  const description =
    baseDescription.length > 150
      ? `${baseDescription.slice(0, 150).trimEnd()}...`
      : baseDescription;

  return buildPageMetadata({
    title,
    description,
    path: `/pages/${slug}`,
    type: "article",
    keywords: ["Kenneth C. Moncur", "Almanack", title],
  });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const result = getPageBySlug(slug);
  if (!result) notFound();
  const title = (result.data.title as string) || slug.replace(/-/g, " ");
  const descriptionFromFrontmatter = result.data
    .description as string | undefined;
  const baseDescription =
    descriptionFromFrontmatter ??
    result.content
      .replace(/[#>*_`]/g, "")
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line.length > 40) ??
    `${title} from the Almanack of Systems, Code & Legacy by Kenneth C. Moncur.`;
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
            path: `/pages/${slug}`,
            section: "Pages",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: title, path: `/pages/${slug}` },
          ]),
        ]}
      />
      <MarkdownContent content={result.content} />
    </article>
  );
}
