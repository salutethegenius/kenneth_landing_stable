import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug, listPageSlugs } from "@/lib/content";
import { MarkdownContent } from "@/components/MarkdownContent";
import { siteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getPageBySlug(slug);
  if (!result) {
    return {
      title: "Not Found — Kenneth C. Moncur",
      robots: {
        index: false,
        follow: true,
      },
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
  const maxLength = 150;
  const description =
    baseDescription.length > maxLength
      ? `${baseDescription.slice(0, maxLength).trimEnd()}...`
      : baseDescription;

  return {
    title: `${title} — Kenneth C. Moncur`,
    description,
    alternates: {
      canonical: `${siteUrl}/pages/${slug}`,
    },
    openGraph: {
      title: `${title} — Kenneth C. Moncur`,
      description,
      url: `${siteUrl}/pages/${slug}`,
    },
    twitter: {
      title: `${title} — Kenneth C. Moncur`,
      description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const result = getPageBySlug(slug);
  if (!result) notFound();
  return (
    <article className="content-wrap">
      <MarkdownContent content={result.content} />
    </article>
  );
}
