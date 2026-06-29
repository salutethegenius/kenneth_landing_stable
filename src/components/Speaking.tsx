import Link from "next/link";

const availableFor = [
  "Keynote and panel speaking at Bahamian and Caribbean conferences",
  "Government and institutional advisory conversations on digital sovereignty and AI policy",
  "Press and media interviews on Caribbean tech, AI infrastructure, and data governance",
  "Strategic partnership conversations with organizations aligned with the KGC mission",
];

export function Speaking() {
  return (
    <section className="speaking" id="speaking">
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div className="fu">
          <div className="eyebrow dark">Speaking &amp; Collaboration</div>
          <h2 className="section-h dark">
            Invite Kenneth
            <br />
            <em>to your conversation.</em>
          </h2>
          <p className="section-p dark speaking-lead">
            I speak and consult on digital sovereignty, Caribbean technology
            infrastructure, AI strategy for small nations, and the
            intersection of culture and systems thinking.
          </p>
        </div>
        <div className="speaking-list fu" style={{ transitionDelay: "0.1s" }}>
          <div className="speaking-label">Available for:</div>
          <ul>
            {availableFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="speaking-cta fu" style={{ transitionDelay: "0.15s" }}>
          <Link href="/contact" className="speaking-cta-pill">
            Send an Inquiry →
          </Link>
        </div>
      </div>
    </section>
  );
}
