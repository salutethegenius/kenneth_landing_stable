// TODO(verify-before-merge): Per author instruction, confirm each Recognition
// item is accurately described before this section ships to main. The Guardian
// coverage framing in particular must match the actual article. If there is
// additional press or recognition not captured here, add it. If any item is
// inaccurate or premature, remove it rather than stretch it.

const recognitionItems = [
  {
    source: "The Guardian",
    desc: "Featured coverage of LawBey, the AI-powered Bahamian legal research platform serving 500+ attorneys and growing.",
  },
  {
    source: "Keys From The Senate",
    desc: "Four-part educational series produced with Senator Keenan Johnson (Parliamentary Secretary, Ministry of Education) breaking down the 2026/2027 National Budget in partnership with LawBey.",
  },
  {
    source: "Bahamas Association of Compliance Officers (BACO)",
    desc: "Official technology partner. BACO Portal built and operated by KGC.",
  },
  {
    source: "USPTO",
    desc: "VerityOS\u2122 trademark published for opposition (Serial No. 99375766). The only Caribbean-origin sovereign AI operating system with US trademark standing.",
  },
];

export function Recognition() {
  return (
    <section className="recognition" id="recognition">
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div className="fu" style={{ marginBottom: 56 }}>
          <div className="eyebrow">Recognition &amp; Presence</div>
          <h2 className="section-h">
            The work has
            <br />
            <em>been noticed.</em>
          </h2>
        </div>
        <div className="recognition-list">
          {recognitionItems.map((item, i) => (
            <div
              key={item.source}
              className="recognition-item fu"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="rec-source">{item.source}</div>
              <p className="rec-desc">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="recognition-close fu">
          More coverage available on request.
        </p>
      </div>
    </section>
  );
}
