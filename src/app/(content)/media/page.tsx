import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Media Gallery — Kenneth C. Moncur",
  description:
    "Explore media, talks, and appearances from Kenneth C. Moncur and the Almanack.",
  alternates: {
    canonical: `${siteUrl}/media`,
  },
};

export default function MediaPage() {
  return (
    <article className="content-wrap">
      <h1 className="content-prose" style={{ marginBottom: "1rem" }}>
        Media Gallery
      </h1>
      <p className="content-prose" style={{ marginBottom: "1.5rem" }}>
        This page is not yet published. Check back soon or explore the{" "}
        <Link href="/pages/table_of_contents" className="content-link">
          Table of Contents
        </Link>{" "}
        for available content.
      </p>
    </article>
  );
}
