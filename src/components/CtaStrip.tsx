"use client";

export function CtaStrip() {
  return (
    <section className="cta-strip" id="newsletter">
      <div style={{ maxWidth: 640, margin: "0 auto" }} className="fu">
        <div
          className="eyebrow dark"
          style={{ justifyContent: "center", marginBottom: 18 }}
        >
          Stay in the work
        </div>
        <h2
          className="section-h dark"
          style={{ marginBottom: 14 }}
        >
          New essays.
          <br />
          <em>In your inbox.</em>
        </h2>
        <p
          className="section-p dark"
          style={{
            textAlign: "center",
            maxWidth: 420,
            margin: "0 auto 40px",
          }}
        >
          When a new essay, framework, or book chapter drops, you will receive it first. No noise. Just
          signal.
        </p>
        <div className="cta-input-row">
          <input
            className="cta-input"
            type="email"
            placeholder="your@email.com"
            aria-label="Email for newsletter"
          />
          <button type="button" className="cta-btn">
            Subscribe
          </button>
        </div>
        <p className="cta-sub-note">
          No spam. Unsubscribe any time. Pay it forward.
        </p>
      </div>
    </section>
  );
}
