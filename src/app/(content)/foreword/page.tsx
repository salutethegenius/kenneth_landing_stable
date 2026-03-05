import Link from "next/link";

export const metadata = {
  title: "Foreword — Kenneth C. Moncur",
  description: "Foreword to the Almanack.",
};

export default function ForewordPage() {
  return (
    <article className="content-wrap">
      <h1 className="content-prose" style={{ marginBottom: "1rem" }}>
        Foreword
      </h1>
      <p className="content-prose" style={{ marginBottom: "1.5rem" }}>
        This piece is not yet published. Check back soon or explore the{" "}
        <Link href="/pages/table_of_contents" className="content-link">
          Table of Contents
        </Link>{" "}
        for available essays and books.
      </p>
    </article>
  );
}
