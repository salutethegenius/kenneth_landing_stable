import Link from "next/link";

export function Philosophy() {
  return (
    <section className="philosophy" id="about">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="eyebrow fu">My Philosophy</div>
        <div className="philosophy-inner">
          <div className="philosophy-left fu">
            <blockquote className="phil-quote">
              &quot;In the Bahamas, we say the sea teaches patience, and the{" "}
              <em>sun teaches joy.</em>&quot;
            </blockquote>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "rgba(244,237,216,0.5)",
                lineHeight: 1.9,
                marginBottom: 22,
              }}
            >
              My philosophy is shaped by the islands — where every breeze brings
              a new idea, and every wave reminds us to keep moving forward.
              Wisdom grows best in good soil. For me, that soil is Bahamian:
              vibrant, resilient, and full of stories.
            </p>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: "rgba(244,237,216,0.5)",
                lineHeight: 1.9,
              }}
            >
              From the straw markets to the regattas, I find inspiration in our
              people, our history, and our way of life. Like a conch diver
              searching the blue, I&apos;m always looking deeper — asking
              questions, challenging old ideas, welcoming new perspectives.
            </p>
            <div className="phil-attr">Kenneth C. Moncur</div>
            <div className="about-links" style={{ marginTop: 36 }}>
              <Link href="/#about" className="about-link">
                Full Philosophy →
              </Link>
              <a
                href="https://kemisgroup.com"
                className="about-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                KGC →
              </a>
            </div>
          </div>
          <div className="philosophy-right fu" style={{ transitionDelay: "0.15s" }}>
            <div className="phil-principle">
              <div className="pp-num">01 · Rooted</div>
              <div className="pp-title">Bahamian by Design</div>
              <p className="pp-body">
                Not despite where I&apos;m from — because of it. The islands
                taught me systems thinking, long-term patience, and community
                before capital. Small nations produce large ideas when they own
                their tools.
              </p>
            </div>
            <div className="phil-principle">
              <div className="pp-num">02 · Curious</div>
              <div className="pp-title">Always Looking Deeper</div>
              <p className="pp-body">
                Curiosity is a methodology, not a mood. I ask questions before
                building answers. I sit with problems. Every essay in this
                Almanack started as a question I couldn&apos;t shake loose.
              </p>
            </div>
            <div className="phil-principle">
              <div className="pp-num">03 · Shared</div>
              <div className="pp-title">Knowledge is Infrastructure</div>
              <p className="pp-body">
                Too many people hold onto what they know like it&apos;s gold. But
                shared knowledge is how nations grow. Every page here is a
                bridge — built so the next person doesn&apos;t have to figure it
                out alone.
              </p>
            </div>
            <div className="phil-principle">
              <div className="pp-num">04 · Joyful</div>
              <div className="pp-title">Joy in the Journey</div>
              <p className="pp-body">
                Happiness is learned, chosen, and present. I try to find it in
                small things: a good story, a fresh breeze, a laugh with friends.
                That&apos;s the Bahamian way — and it belongs in any serious
                philosophy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
