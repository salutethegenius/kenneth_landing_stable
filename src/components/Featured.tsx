import Link from "next/link";

const featured = [
  {
    href: "/books/Bahamian_Wealth_Creation",
    type: "Essay · Part I · Digital Wisdom",
    title: "How Wealth Is Created:",
    titleEm: "A Bahamian Perspective",
    desc: "Wealth creation in the Caribbean looks different from the models exported from the West. Here is what I have learned about building real economic value from a small island nation.",
    part: "Digital Wisdom",
    delay: "0s",
  },
  {
    href: "/essays/data-sovereignty",
    type: "Essay · Part V · Digital Ethics",
    title: "Data Sovereignty",
    titleEm: "Is Not Optional",
    desc: "Every Bahamian institution running on foreign SaaS is making a sovereignty decision, whether they know it or not. This is what that decision costs and what it would take to reverse it.",
    part: "Digital Power & Ethics",
    delay: "0.1s",
  },
  {
    href: "/books/frameworks/sovereign-nation-framework",
    type: "Framework · Part VII · Capstone",
    title: "The Sovereign",
    titleEm: "Nation Framework",
    desc: "A working blueprint for how small English-speaking Caribbean nations can build and own their digital infrastructure — rather than perpetually renting it from abroad.",
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
