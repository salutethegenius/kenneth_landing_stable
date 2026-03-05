import Link from "next/link";

const tocParts = [
  {
    roman: "I",
    name: "Digital Freedom",
    sections: [
      {
        title: "Building Wealth",
        links: [
          { href: "/books/building-digital-wealth/smart-black-book", label: "Smart Black Book of Digital Marketing" },
          { href: "/books/building-digital-wealth/smart-black-book-facebook", label: "Smart Black Book of Facebook Advertising" },
          { href: "/books/building-digital-wealth/digital-hustler-starter-pack", label: "Digital Hustler Starter Kit" },
          { href: "/books/Bahamian_Wealth_Creation", label: "How Wealth Is Created: A Bahamian Perspective" },
          { href: "/books/Moncur_Specific_Knowledge", label: "Find and Build Your Specific Knowledge" },
          { href: "/books/Moncur_Long_Term_Games", label: "Play Long-Term Games with Long-Term People" },
          { href: "/books/Moncur_Accountability_Bahamas", label: "Take on Accountability" },
        ],
      },
      {
        title: "Building Judgment",
        links: [
          { href: "/essays/judgment", label: "How to Think Clearly" },
          { href: "/essays/identity", label: "Shed Your Identity to See Reality" },
          { href: "/essays/decision-making", label: "Learn the Skills of Decision-Making" },
        ],
      },
    ],
  },
  {
    roman: "II",
    name: "Discipline & Happiness",
    sections: [
      {
        title: "Learning Happiness",
        links: [
          { href: "/essays/happiness", label: "Happiness Is Learned" },
          { href: "/essays/choice", label: "Happiness Is a Choice" },
          { href: "/essays/presence", label: "Happiness Requires Presence" },
        ],
      },
      {
        title: "Saving Yourself",
        links: [
          { href: "/essays/be-yourself", label: "Choosing to Be Yourself" },
          { href: "/essays/self-care", label: "Choosing to Care for Yourself" },
          { href: "/essays/meditation", label: "Meditation + Mental Strength" },
          { href: "/essays/freedom", label: "Choosing to Free Yourself" },
        ],
      },
    ],
  },
  {
    roman: "III",
    name: "Systems & Strategy",
    sections: [
      {
        links: [
          { href: "/essays/empire-blueprint", label: "The Empire Blueprint" },
          { href: "/essays/systems-over-stress", label: "Systems Over Stress" },
          { href: "/essays/building-in-silence", label: "Building in Silence" },
          { href: "/pages/web-software", label: "Web & Software" },
        ],
      },
    ],
  },
  {
    roman: "IV",
    name: "Legacy & Identity",
    sections: [
      {
        links: [
          { href: "/essays/bahamian-by-design", label: "Bahamian by Design" },
          { href: "/books/The_Moncur_Method", label: "The Moncur Method" },
          { href: "/essays/fatherhood-legacy", label: "Fatherhood & Legacy" },
        ],
      },
    ],
  },
  {
    roman: "V",
    name: "Digital Power & Ethics",
    sections: [
      {
        links: [
          { href: "/essays/data-sovereignty", label: "Data Sovereignty Is Not Optional" },
          { href: "/essays/ghost-protocols", label: "The Ghost Protocols" },
        ],
      },
    ],
  },
  {
    roman: "VI",
    name: "The Street & The Code",
    sections: [
      {
        links: [
          { href: "/essays/art-of-war-rooms", label: "The Art of War Rooms" },
          { href: "/essays/hustlers-compass", label: "The Hustler's Compass" },
        ],
      },
    ],
  },
  {
    roman: "VII",
    name: "Sovereign Nation Frameworks",
    sections: [
      {
        links: [
          { href: "/books/frameworks/sovereign-nation-framework", label: "The Sovereign Nation Framework" },
          { href: "/books/frameworks/digital-constitution-bahamas", label: "The Digital Constitution of the Young Bahamian Citizen" },
        ],
      },
      {
        title: "Bonus",
        links: [
          { href: "/books/recommended", label: "Recommended Reading" },
          { href: "/media", label: "Media Gallery" },
          { href: "/contact", label: "Contact" },
        ],
      },
    ],
  },
];

export function Toc() {
  return (
    <section className="toc" id="toc">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="toc-inner">
          <div className="toc-left fu">
            <div className="eyebrow">Start Here</div>
            <h2 className="section-h" style={{ marginBottom: 24 }}>
              The Full
              <br />
              <em>Table of Contents</em>
            </h2>
            <p className="section-p" style={{ marginBottom: 36 }}>
              Every essay, book, and framework organized as a deliberate reading path. Move sequentially
              or jump where you feel resistance. Each part builds on the previous one, but every piece
              stands on its own.
            </p>
            <div
              style={{
                padding: "24px 28px",
                background: "rgba(154,120,48,0.06)",
                borderLeft: "2px solid var(--brass)",
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 8.5,
                  color: "var(--brass)",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Start here
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garant',serif",
                  fontSize: 17,
                  fontStyle: "italic",
                  color: "rgba(244,237,216,0.7)",
                  lineHeight: 1.6,
                }}
              >
                &quot;Thank you for visiting. Enjoy the published content. We
                appreciate your support — and please pay it forward.&quot;
              </p>
              <p
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: 9,
                  color: "rgba(244,237,216,0.28)",
                  letterSpacing: "0.08em",
                  marginTop: 10,
                }}
              >
                — Kenneth C. Moncur
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link href="/#about" className="toc-left-link toc-left-link-brass">
                About This Almanac <span>→</span>
              </Link>
              <Link href="/foreword" className="toc-left-link">
                Foreword <span>→</span>
              </Link>
              <Link href="/timeline" className="toc-left-link">
                Timeline <span>→</span>
              </Link>
            </div>
          </div>
          <div className="toc-right fu" style={{ transitionDelay: "0.15s" }}>
            {tocParts.map((part) => (
              <div key={part.roman} className="toc-part">
                <div className="toc-part-header">
                  <span className="toc-roman">{part.roman}</span>
                  <span className="toc-part-name">{part.name}</span>
                </div>
                {part.sections.map((sec, i) => (
                  <div key={i}>
                    {sec.title && (
                      <div className="toc-sub-title">{sec.title}</div>
                    )}
                    <ul className="toc-links">
                      {sec.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
