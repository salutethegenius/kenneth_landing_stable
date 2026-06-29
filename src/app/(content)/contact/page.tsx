import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Invite Kenneth C. Moncur to speak or advise on digital sovereignty, Caribbean tech, and AI infrastructure.",
  path: "/contact",
});

const availableFor = [
  "Keynote and panel speaking at Bahamian and Caribbean conferences",
  "Government and institutional advisory conversations on digital sovereignty and AI policy",
  "Press and media interviews on Caribbean tech, AI infrastructure, and data governance",
  "Strategic partnership conversations with organizations aligned with the KGC mission",
];

export default function ContactPage() {
  return (
    <article className="content-wrap">
      <h1 className="content-prose" style={{ marginBottom: "1rem" }}>
        Send an Inquiry
      </h1>
      <p className="content-prose" style={{ marginBottom: "1.5rem" }}>
        I speak and consult on digital sovereignty, Caribbean technology
        infrastructure, AI strategy for small nations, and the intersection of
        culture and systems thinking.
      </p>
      <p
        className="content-prose"
        style={{
          marginTop: "1.75rem",
          marginBottom: "0.75rem",
          fontWeight: 600,
        }}
      >
        Available for:
      </p>
      <ul className="content-prose" style={{ marginBottom: "2rem" }}>
        {availableFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="content-prose" style={{ marginBottom: "1.5rem" }}>
        Send a short note with the date, audience, and topic. I read every
        inquiry personally and respond within a few days.
      </p>
      <p className="content-prose">
        <a href="mailto:ken@kemisdigital.com" className="content-link">
          ken@kemisdigital.com
        </a>
      </p>
      <p className="content-prose" style={{ marginTop: "2rem" }}>
        <Link href="/#speaking" className="content-link">
          ← Back to Speaking &amp; Collaboration
        </Link>
      </p>
    </article>
  );
}
