import Link from "next/link";

type TocLink = { href?: string; label: string; upcoming?: boolean };

type TocPart = {
  roman: string;
  name: string;
  sections: { title?: string; links: TocLink[] }[];
};

const tocParts: TocPart[] = [
  {
    roman: "I",
    name: "Digital Wisdom",
    sections: [
      {
        links: [
          { href: "/books/building-digital-wealth/smart-black-book", label: "Smart Black Book of Digital Marketing" },
          { href: "/books/building-digital-wealth/smart-black-book-facebook", label: "Smart Black Book of Facebook Advertising" },
          { label: "Things About Digital Life", upcoming: true },
          { href: "/books/Bahamian_Wealth_Creation", label: "How Wealth Is Created: A Bahamian Perspective" },
          { href: "/books/Moncur_Long_Term_Games", label: "Play Long-Term Games With Long-Term People" },
          { href: "/books/Moncur_Accountability_Bahamas", label: "Ideas on Accountability" },
        ],
      },
    ],
  },
  {
    roman: "II",
    name: "Discipline & Happiness",
    sections: [
      {
        links: [
          { label: "Happiness & Content", upcoming: true },
          { href: "/essays/happiness", label: "Happiness is a Skill" },
          { href: "/essays/presence", label: "Happiness Requires Pressure" },
          { href: "/essays/be-yourself", label: "Choosing to Be Yourself" },
          { href: "/essays/meditation", label: "Meditating is Mental Strength" },
          { label: "Choosing to Keep Growing", upcoming: true },
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
          { href: "/books/frameworks/sovereign-nation-framework", label: "The Sovereign Nation Framework" },
          { label: "Execute First, Refine", upcoming: true },
          { label: "Domain First Strategy", upcoming: true },
          { label: "This is Bahamas", upcoming: true },
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
          { label: "The Kemis Mission", upcoming: true },
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
          { label: "The Silent Privilege", upcoming: true },
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
          { href: "/essays/art-of-war-rooms", label: "The Art of War Stories" },
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
          { label: "The Sovereign Nation Frameworks", upcoming: true },
          { href: "/books/frameworks/digital-constitution-bahamas", label: "The Digital Foundation of the Young Bahamian Citizen" },
          { label: "KGC Five Pivots", upcoming: true },
        ],
      },
    ],
  },
];

const endMatter: TocLink[] = [
  { label: "Recommended Reading", upcoming: true },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
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
            <p className="section-p" style={{ marginBottom: 32 }}>
              Everything I have written, organized by theme. Seven parts
              moving from the personal to the sovereign. Move sequentially or
              jump where you feel resistance — each piece stands on its own.
            </p>
            <div className="toc-newsletter">
              <div className="toc-newsletter-label">
                New essays. In your inbox.
              </div>
              <div className="cta-input-row">
                <input
                  className="cta-input"
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email for newsletter"
                />
                <button type="button" className="cta-btn cta-btn-brass">
                  Subscribe
                </button>
              </div>
              <p className="cta-sub-note">
                No spam. Unsubscribe any time. Pay it forward.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                marginTop: 32,
              }}
            >
              <Link
                href="/#about"
                className="toc-left-link toc-left-link-brass"
              >
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
                      {sec.links.map((link, j) => (
                        <li
                          key={
                            link.href ?? `upcoming-${part.roman}-${j}-${link.label}`
                          }
                        >
                          {link.upcoming || !link.href ? (
                            <em className="toc-upcoming">{link.label}</em>
                          ) : (
                            <Link href={link.href}>{link.label}</Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <div className="toc-part toc-end-matter">
              <div className="toc-part-header">
                <span className="toc-roman">·</span>
                <span className="toc-part-name">End Matter</span>
              </div>
              <ul className="toc-links">
                {endMatter.map((link, j) => (
                  <li
                    key={link.href ?? `end-${j}-${link.label}`}
                  >
                    {link.upcoming || !link.href ? (
                      <em className="toc-upcoming">{link.label}</em>
                    ) : (
                      <Link href={link.href}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
