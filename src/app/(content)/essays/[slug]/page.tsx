import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  const baseDescription = `Essay: ${title} from the Almanack of Systems, Code & Legacy by Kenneth C. Moncur.`;
  const maxLength = 150;
  const description =
    baseDescription.length > maxLength
      ? `${baseDescription.slice(0, maxLength).trimEnd()}...`
      : baseDescription;
  const url = `${siteUrl}/essays/${slug}`;

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

export default async function EssayPlaceholderPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return (
    <article className="content-wrap">
      <h1 className="content-prose" style={{ marginBottom: "1rem" }}>
        {title}
      </h1>
      <p className="content-prose" style={{ marginBottom: "1.5rem" }}>
        This essay is not yet published. Check back soon or explore the{" "}
        <Link href="/pages/table_of_contents" className="content-link">
          Table of Contents
        </Link>{" "}
        for available essays and books.
      </p>
    </article>
  );
}
