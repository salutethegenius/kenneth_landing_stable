import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBookBySlug, listBookSlugs } from "@/lib/content";
import { MarkdownContent } from "@/components/MarkdownContent";
import { siteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listBookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getBookBySlug(slug);
  if (!result) {
    return {
      title: "Not Found — Kenneth C. Moncur",
      robots: {
        index: false,
        follow: true,
      },
    };
  }
  const title = (result.data.title as string) || slug.replace(/_/g, " ");
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
    `Book: ${title} by Kenneth C. Moncur from the Almanack of Systems, Code & Legacy.`;

  const maxLength = 150;
  const description =
    baseDescription.length > maxLength
      ? `${baseDescription.slice(0, maxLength).trimEnd()}...`
      : baseDescription;

  const url = `${siteUrl}/books/${slug}`;

  return {
    title: `${title} — Kenneth C. Moncur`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} — Kenneth C. Moncur`,
      description,
      url,
    },
    twitter: {
      title: `${title} — Kenneth C. Moncur`,
      description,
    },
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const result = getBookBySlug(slug);
  if (!result) notFound();
  return (
    <article className="content-wrap">
      <MarkdownContent content={result.content} />
    </article>
  );
}
