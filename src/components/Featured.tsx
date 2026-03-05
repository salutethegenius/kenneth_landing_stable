import Link from "next/link";

const featured = [
  {
    href: "/books/Bahamian_Wealth_Creation",
    type: "Essay · Part I · Digital Freedom",
    title: "How Wealth Is Created:",
    titleEm: "A Bahamian Perspective",
    desc: "Wealth is not what you hold. It is what you understand. This is a clear look at how Bahamians can participate in the digital economy on our own terms. Not as users of systems built elsewhere. As architects of our own leverage.",
    part: "Building Wealth",
    delay: "0s",
  },
  {
    href: "/essays/data-sovereignty",
    type: "Essay · Part V · Digital Ethics",
    title: "Data Sovereignty",
    titleEm: "Is Not Optional",
    desc: "If your data lives on foreign servers, your future is being negotiated in rooms you will never enter. This is not politics. It is survival strategy for small nations in a digital world.",
    part: "Digital Power & Ethics",
    delay: "0.1s",
  },
  {
    href: "/books/frameworks/sovereign-nation-framework",
    type: "Framework · Part VII · Capstone",
    title: "The Sovereign",
    titleEm: "Nation Framework",
    desc: "The culmination of this Almanack. A complete blueprint for any people willing to take ownership of their digital future. Built with The Bahamas in mind, but applicable to any small nation ready to lead instead of follow.",
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
