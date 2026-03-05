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
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(244,237,216,0.75)",
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              I grew up where the tide does not rush for anyone. You either learn patience or you learn
              pain.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(244,237,216,0.75)",
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              My philosophy was shaped by these islands. Here, every breeze carries conversation. Every
              wave reminds you that movement is survival. Wisdom does not grow in chaos. It grows in good
              soil. My soil is Bahamian, resilient, rhythmic, stubborn in the best way.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(244,237,216,0.75)",
                lineHeight: 1.9,
                marginBottom: 18,
              }}
            >
              From straw markets to regattas, from dockside debates to boardroom strategy, I study
              patterns. Like a conch diver searching blue water, I go deeper than the surface. I question
              assumptions. I challenge inherited thinking. I welcome better ideas when they prove
              themselves.
            </p>
            <p
              style={{
                fontSize: 16,
                fontWeight: 300,
                color: "rgba(244,237,216,0.75)",
                lineHeight: 1.9,
              }}
            >
              This Almanack is that search, written down.
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
                Not despite where I am from. Because of it. The islands trained me early. Community before
                capital. Patience before panic. Build something that lasts, not something that trends.
                Small nations can produce large ideas when they own their tools. That belief is not theory
                to me. It is practice.
              </p>
            </div>
            <div className="phil-principle">
              <div className="pp-num">02 · Curious</div>
              <div className="pp-title">Always Looking Deeper</div>
              <p className="pp-body">
                Curiosity is not a personality trait. It is a discipline. I do not rush to answers. I sit
                with the tension of a problem until it reveals its structure. Most of these essays began as
                a question that would not leave me alone. If something feels incomplete, I pull the thread.
              </p>
            </div>
            <div className="phil-principle">
              <div className="pp-num">03 · Shared</div>
              <div className="pp-title">Knowledge is Infrastructure</div>
              <p className="pp-body">
                Information locked in private vaults does not build nations. Shared knowledge does. If I
                have learned something useful, it belongs in circulation. Every page here is a bridge, so
                the next builder does not have to start from scratch.
              </p>
            </div>
            <div className="phil-principle">
              <div className="pp-num">04 · Joyful</div>
              <div className="pp-title">Joy in the Journey</div>
              <p className="pp-body">
                Serious work does not require a serious face. Happiness is learned. Chosen. Practiced. I
                find it in small wins, sharp conversations, clean code, a good story, a fresh breeze off
                the water. That is the Bahamian way. And it belongs in any philosophy worth keeping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
