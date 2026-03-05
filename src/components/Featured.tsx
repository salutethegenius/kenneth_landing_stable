import Link from "next/link";

const featured = [
  {
    href: "/books/Bahamian_Wealth_Creation",
    type: "Essay · Part I · Digital Freedom",
    title: "How Wealth Is Created:",
    titleEm: "A Bahamian Perspective",
    desc: "Wealth is not what you own — it's what you understand. A clear-eyed look at how Bahamians can participate in the digital economy on their own terms, not as consumers of systems built for someone else.",
    part: "Building Wealth",
    delay: "0s",
  },
  {
    href: "/essays/data-sovereignty",
    type: "Essay · Part V · Digital Ethics",
    title: "Data Sovereignty",
    titleEm: "Is Not Optional",
    desc: "When your data lives on foreign servers, your future is being decided in someone else's boardroom. The case for digital sovereignty — not as a political argument, but as a practical survival strategy for small nations.",
    part: "Digital Power & Ethics",
    delay: "0.1s",
  },
  {
    href: "/books/frameworks/sovereign-nation-framework",
    type: "Framework · Part VII · Capstone",
    title: "The Sovereign",
    titleEm: "Nation Framework",
    desc: "The capstone of the Almanack. A complete blueprint for a people who decide to own their digital future. Applicable to The Bahamas and any small nation willing to lead the AI revolution on their own terms.",
    part: "Sovereign Nation Frameworks",
    delay: "0.2s",
  },
];

export function Featured() {
  return (
    <section className="featured" id="essays">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="fu"
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: 56,
          }}
        >
          <div>
            <div className="eyebrow">Featured Works</div>
            <h2 className="section-h">
              Where to
              <br />
              <em>begin reading</em>
            </h2>
          </div>
          <Link
            href="/pages/table_of_contents"
            className="feat-cta-link"
            style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: 10,
              color: "var(--brass-l)",
              textDecoration: "none",
              letterSpacing: "0.14em",
              padding: "10px 18px",
              border: "1px solid var(--border-b)",
              transition: "background 0.2s",
            }}
          >
            Full Table of Contents →
          </Link>
        </div>
        <div className="featured-grid">
          {featured.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="feat-card fu"
              style={{ transitionDelay: card.delay }}
            >
              <div className="fc-type">{card.type}</div>
              <div className="fc-title">
                {card.title}
                <br />
                <em>{card.titleEm}</em>
              </div>
              <p className="fc-desc">{card.desc}</p>
              <div className="fc-part">{card.part}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
