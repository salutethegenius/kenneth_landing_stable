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
          Almanack of Kenneth C. Moncur · Freeport, Grand Bahama, The Bahamas
        </div>
        <h1 className="hero-headline">
          <em>Systems.</em>
          <br />
          <strong>Code. Legacy.</strong>
        </h1>
        <div className="hero-sub-line" />
        <p className="hero-desc">
          A personal guide to{" "}
          <em>freedom, discipline, and sovereign thinking</em> in the digital
          age — rooted in Bahamian culture, written for anyone building
          something real.
        </p>
        <div className="hero-parts-row">
          <Link href="#parts" className="hero-part-pill brass">
            I — Digital Freedom
          </Link>
          <Link href="#parts" className="hero-part-pill">
            II — Discipline
          </Link>
          <Link href="#parts" className="hero-part-pill">
            III — Systems
          </Link>
          <Link href="#parts" className="hero-part-pill">
            IV — Legacy
          </Link>
          <Link href="#parts" className="hero-part-pill">
            V — Ethics
          </Link>
          <Link href="#parts" className="hero-part-pill">
            VI — The Street
          </Link>
          <Link href="#parts" className="hero-part-pill">
            VII — Frameworks
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
