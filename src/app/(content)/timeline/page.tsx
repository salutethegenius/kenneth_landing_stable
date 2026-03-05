import type { Metadata } from "next";
import Link from "next/link";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Timeline — Kenneth C. Moncur",
  description:
    "Follow the timeline of how the Almanack, essays, and frameworks by Kenneth C. Moncur came together.",
  alternates: {
    canonical: `${siteUrl}/timeline`,
  },
};

export default function TimelinePage() {
  return (
    <article className="content-wrap">
      <h1 className="content-prose" style={{ marginBottom: "1rem" }}>
        Timeline
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
