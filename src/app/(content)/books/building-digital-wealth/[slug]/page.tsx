import { notFound } from "next/navigation";
import {
  getBuildingDigitalWealthBySlug,
  listBuildingDigitalWealthSlugs,
} from "@/lib/content";
import { MarkdownContent } from "@/components/MarkdownContent";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return listBuildingDigitalWealthSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const result = getBuildingDigitalWealthBySlug(slug);
  if (!result) return { title: "Not Found" };
  const title = (result.data.title as string) || slug.replace(/-/g, " ");
  return { title: `${title} — Kenneth C. Moncur` };
}

export default async function BuildingDigitalWealthPage({ params }: Props) {
  const { slug } = await params;
  const result = getBuildingDigitalWealthBySlug(slug);
  if (!result) notFound();
  return (
    <article className="content-wrap">
      <MarkdownContent content={result.content} />
    </article>
  );
}
