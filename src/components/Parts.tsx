import Link from "next/link";

const partCards = [
  {
    href: "/books/building-digital-wealth/smart-black-book",
    roman: "I",
    part: "Part One",
    title: "Digital Freedom",
    desc: "Building wealth, specific knowledge, and the mindset for the digital economy — from a Bahamian perspective.",
    count: "7 works",
    delay: "0s",
  },
  {
    href: "/essays/happiness",
    roman: "II",
    part: "Part Two",
    title: "Discipline & Happiness",
    desc: "Happiness is learned, chosen, and requires presence. The inner work that makes the outer work possible.",
    count: "6 works",
    delay: "0.05s",
  },
  {
    href: "/essays/systems-over-stress",
    roman: "III",
    part: "Part Three",
    title: "Systems & Strategy",
    desc: "The Empire Blueprint. Systems Over Stress. Building in Silence. The frameworks for doing the work.",
    count: "4 works",
    delay: "0.1s",
  },
  {
    href: "/essays/bahamian-by-design",
    roman: "IV",
    part: "Part Four",
    title: "Legacy & Identity",
    desc: "Bahamian by Design. The Moncur Method. Fatherhood and what we leave behind when we leave.",
    count: "3 works",
    delay: "0.15s",
  },
  {
    href: "/essays/data-sovereignty",
    roman: "V",
    part: "Part Five",
    title: "Digital Power & Ethics",
    desc: "Data sovereignty is not optional. The Ghost Protocols. What we owe each other in the digital age.",
    count: "2 works",
    delay: "0.05s",
  },
  {
    href: "/essays/art-of-war-rooms",
    roman: "VI",
    part: "Part Six",
    title: "The Street & The Code",
    desc: "The Art of War Rooms. The Hustler's Compass. Street wisdom and digital strategy are the same discipline.",
    count: "2 works",
    delay: "0.1s",
  },
];

export function Parts() {
  return (
    <section className="parts" id="parts">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="parts-intro">
          <div className="fu">
            <div className="eyebrow dark">The Almanack</div>
            <h2 className="section-h dark">
              Seven Parts.
              <br />
              <em>One body of work.</em>
            </h2>
          </div>
          <div className="fu" style={{ transitionDelay: "0.1s" }}>
            <p className="section-p dark">
              Twenty-plus essays, books, and frameworks — organized into seven
              parts that move from the personal to the sovereign. Start anywhere.
              Follow what calls you.
            </p>
          </div>
        </div>
        <div className="parts-grid">
          {partCards.map((card) => (
            <Link
              key={card.roman}
              href={card.href}
              className="part-card fu"
              style={{ transitionDelay: card.delay }}
            >
              <div className="pc-roman">{card.roman}</div>
              <div className="pc-part">{card.part}</div>
              <div className="pc-title">{card.title}</div>
              <p className="pc-desc">{card.desc}</p>
              <div className="pc-count">{card.count}</div>
            </Link>
          ))}
          <Link
            href="/books/frameworks/sovereign-nation-framework"
            className="part-card part-card-wide fu"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="pc-roman">VII</div>
            <div>
              <div className="pc-part">Part Seven — The Capstone</div>
              <div className="pc-title">Sovereign Nation Frameworks</div>
              <p className="pc-desc" style={{ maxWidth: 540 }}>
                The Sovereign Nation Framework. The Digital Constitution of the
                Young Bahamian Citizen. Everything before this part builds to
                here: a blueprint for a people who decide to own their own
                future.
              </p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                flexShrink: 0,
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 9,
                  color: "var(--brass)",
                  letterSpacing: "0.14em",
                  padding: "10px 18px",
                  border: "1px solid rgba(154,120,48,0.3)",
                }}
              >
                Read Now →
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
