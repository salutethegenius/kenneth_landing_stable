export function Building() {
  return (
    <section className="building" id="building">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="fu">
          <div className="eyebrow dark">What I&apos;m Building</div>
          <h2 className="section-h dark">
            The work is real
            <br />
            <em>and it is happening now.</em>
          </h2>
          <p className="section-p dark building-intro">
            Kemis Group of Companies is a Bahamian-Wyoming digital
            infrastructure holding company. Sixteen verticals. One flagship
            infrastructure layer. Built from Grand Bahama for the
            English-speaking Caribbean.
          </p>
        </div>
        <div className="building-grid fu" style={{ transitionDelay: "0.1s" }}>
          <div className="building-card">
            <div className="bc-label">Flagship Infrastructure</div>
            <div className="bc-title">VerityOS&trade; + Hummingbird</div>
            <p className="bc-body">
              Sovereign AI infrastructure. The OS and hardware that will power
              Bahamian institutions without sending their data abroad.
              Currently in pilot. General availability 2027.
            </p>
          </div>
          <div className="building-card">
            <div className="bc-label">First Four Verticals</div>
            <div className="bc-title">
              LawBey &middot; KemisPay &middot; PileIt &middot; GrandBridge
            </div>
            <p className="bc-body">
              The first four commercial verticals. Legal AI, payments
              orchestration, creator monetization, and Caribbean e-commerce.
              Soft-launching August 2026.
            </p>
          </div>
        </div>
        <p
          className="section-p dark building-close fu"
          style={{ transitionDelay: "0.15s" }}
        >
          The long-term goal is simple and serious: to be the AWS of the
          Caribbean — built on Bahamian soil, governed by Bahamian principles,
          held permanently.
        </p>
        <div
          className="building-cta fu"
          style={{ transitionDelay: "0.2s" }}
        >
          <a
            href="https://thekemisgroup.com"
            className="building-cta-pill"
            target="_blank"
            rel="noopener noreferrer"
          >
            See the Full Portfolio at thekemisgroup.com →
          </a>
        </div>
      </div>
    </section>
  );
}
