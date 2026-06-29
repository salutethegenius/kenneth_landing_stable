"use client";

export function CtaStrip() {
  return (
    <section className="cta-strip" id="newsletter">
      <div style={{ maxWidth: 640, margin: "0 auto" }} className="fu">
        <div
          className="eyebrow dark"
          style={{ justifyContent: "center", marginBottom: 18 }}
        >
          The Newsletter
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
            maxWidth: 460,
            margin: "0 auto 40px",
          }}
        >
          I write about systems, sovereignty, and what it means to build
          something that lasts — from Freeport, Grand Bahama, for the
          Caribbean and the world. No noise. No frequency promises. Just the
          essays when they are ready.
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

