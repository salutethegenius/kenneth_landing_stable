import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  const description = `Essay: ${title} from the Almanack of Systems, Code & Legacy by Kenneth C. Moncur.`;
  return buildPageMetadata({
    title: title.replace(/\b\w/g, (c) => c.toUpperCase()),
    description,
    path: `/essays/${slug}`,
    noindex: true,
  });
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
