import Link from "next/link";

export function Philosophy() {
  return (
    <section className="philosophy" id="about">
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        <div className="eyebrow fu">The Pull Quote</div>
        <div className="philosophy-narrative fu" style={{ transitionDelay: "0.1s" }}>
          <blockquote className="phil-quote">
            &quot;In the Bahamas, we say the sea teaches patience, and the{" "}
            <em>sun teaches joy.</em>&quot;
          </blockquote>
          <p className="phil-body">
            I grew up here. I understand both the talent and the gaps. After
            years of building for others — radio, television, media, marketing,
            brands that were never mine — I turned everything toward one
            question:
          </p>
          <p className="phil-question">
            What would it look like if The Bahamas built its own digital stack?
          </p>
          <p className="phil-body">
            Not a Caribbean version of someone else&apos;s platform. Not
            infrastructure that routes our data through foreign servers and
            foreign laws. Something genuinely ours — built here, run here, held
            here, for as long as it takes.
          </p>
          <p className="phil-body">
            I have been building that answer since 2020. The products are real.
            The users are real. The vision is compounding.
          </p>
          <p className="phil-close">
            This site is where I write about what I&apos;m learning along the
            way.
          </p>
          <div className="phil-attr">Kenneth C. Moncur</div>
          <div className="about-links" style={{ marginTop: 36 }}>
            <Link href="#essays" className="about-link">
              Read the essays →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
