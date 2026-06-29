const beliefs = [
  {
    num: "01",
    title: "Digital sovereignty is not optional.",
    body: "Small nations that do not own their digital infrastructure are ceding decisions about their future to whoever does. The Bahamas can do better. The Caribbean can do better.",
  },
  {
    num: "02",
    title:
      "The best way to serve your country is to build something it needs and keep it locally owned.",
    body: "Not to export your talent and send money home. To stay, build, and make the infrastructure better for the people who come after you.",
  },
  {
    num: "03",
    title:
      "AI is a tool. Who trains it, who owns it, and where it runs — those are the questions that matter.",
    body: "A model trained on Western data, hosted on Western servers, governed by Western laws is not neutral. It reflects the priorities of whoever built it. Bahamians deserve a model that reflects ours.",
  },
  {
    num: "04",
    title:
      "Legacy is not what you leave behind. It is what you build that others can stand on.",
    body: "I am not building KGC to exit it. I am building it to hand it to the next generation of Bahamian and Caribbean builders — with the rails already in place, the infrastructure already sovereign, the data already ours.",
  },
  {
    num: "05",
    title:
      "The Caribbean does not need to wait for Silicon Valley. We can build our own.",
    body: "Not a Caribbean version of someone else's platform. Something that could only come from here, built by people who understand what here actually means.",
  },
];

export function Beliefs() {
  return (
    <section className="beliefs" id="beliefs">
      <div style={{ maxWidth: 920, margin: "0 auto" }}>
        <div className="fu" style={{ marginBottom: 56 }}>
          <div className="eyebrow">What I Believe</div>
          <h2 className="section-h">
            Five things
            <br />
            <em>I know to be true.</em>
          </h2>
        </div>
        <div className="beliefs-list">
          {beliefs.map((b, i) => (
            <article
              key={b.num}
              className="belief-card fu"
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="belief-num">{b.num}</div>
              <h3 className="belief-title">{b.title}</h3>
              <p className="belief-body">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
