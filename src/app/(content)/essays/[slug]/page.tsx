import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ");
  return { title: `${title} — Kenneth C. Moncur` };
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
