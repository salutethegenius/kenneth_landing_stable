import Link from "next/link";
import { SealedKGhost } from "./SealedKLogo";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-texture" />
      <div className="hero-rule-top" />
      <div className="hero-ghost">
        <SealedKGhost />
      </div>
      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <div className="hero-eyebrow">
          Freeport, Grand Bahama · The Bahamas
        </div>
        <h1 className="hero-headline">
          <strong>Kenneth C. Moncur</strong>
        </h1>
        <div className="hero-subhead">
          Founder, Kemis Group of Companies
        </div>
        <div className="hero-tagline">Builder · Writer · Bahamian</div>
        <div className="hero-sub-line" />
        <p className="hero-desc">
          My mission is to build the{" "}
          <em>Caribbean's sovereign digital future</em> from The Bahamas.
        </p>
        <div className="hero-cta-row">
          <Link href="#essays" className="hero-cta-pill brass">
            Read My Work
          </Link>
          <Link href="#building" className="hero-cta-pill">
            See What I'm Building →
          </Link>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Read</span>
      </div>
    </section>
  );
}
