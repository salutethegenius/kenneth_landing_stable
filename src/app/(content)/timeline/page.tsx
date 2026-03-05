import Link from "next/link";

export const metadata = {
  title: "Timeline — Kenneth C. Moncur",
  description: "Timeline of the Almanack.",
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
