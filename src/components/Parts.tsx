import Link from "next/link";

const partCards = [
  {
    href: "/books/building-digital-wealth/smart-black-book",
    roman: "I",
    part: "Part One",
    title: "Digital Wisdom",
    desc: "How to think clearly in an age of information overload. Tools, mental models, and frameworks for navigating the digital world without losing yourself in it.",
    count: "6 works",
    delay: "0s",
  },
  {
    href: "/essays/happiness",
    roman: "II",
    part: "Part Two",
    title: "Discipline & Happiness",
    desc: "The inner architecture of a builder. How I think about patience, consistency, mental health, and what it actually takes to keep going when nothing is working yet.",
    count: "6 works",
    delay: "0.05s",
  },
  {
    href: "/essays/systems-over-stress",
    roman: "III",
    part: "Part Three",
    title: "Systems & Strategy",
    desc: "How to see the pattern underneath the complexity. Business models, infrastructure thinking, long-term strategy, and the frameworks I use to make decisions across KGC.",
    count: "4 works",
    delay: "0.1s",
  },
  {
    href: "/essays/bahamian-by-design",
    roman: "IV",
    part: "Part Four",
    title: "Legacy & Identity",
    desc: "What it means to build something that outlasts you. How I think about Bahamian identity, Caribbean excellence, generational stewardship, and what I want to leave behind.",
    count: "3 works",
    delay: "0.15s",
  },
  {
    href: "/essays/data-sovereignty",
    roman: "V",
    part: "Part Five",
    title: "Digital Power & Ethics",
    desc: "Who owns the data. Who trains the models. Who controls the rails. The political economy of AI and digital infrastructure from a small-nation perspective.",
    count: "2 works",
    delay: "0.05s",
  },
  {
    href: "/essays/art-of-war-rooms",
    roman: "VI",
    part: "Part Six",
    title: "His Values & The Code",
    desc: "The personal operating system. How I live, what I believe, how I treat people, and the principles that govern every decision I make inside and outside KGC.",
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
            <div className="eyebrow dark">What I Write About</div>
            <h2 className="section-h dark">
              Seven Parts.
              <br />
              <em>One body of work.</em>
            </h2>
          </div>
          <div className="fu" style={{ transitionDelay: "0.1s" }}>
            <p className="section-p dark">
              Everything I write fits inside one of seven themes. Together they
              form a guide to building in the digital age from a Bahamian
              perspective.
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
                The blueprint for digital sovereignty in small nations. How
                countries like The Bahamas can build and govern their own
                digital infrastructure rather than renting it from abroad.
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
                  fontFamily: "var(--font-dmmono),monospace",
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
