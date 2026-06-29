import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="fb-mark">Kenneth C. Moncur</div>
          <div className="fb-sub">Founder, Kemis Group of Companies</div>
          <p className="fb-p">
            Freeport, Grand Bahama · The Bahamas. My mission is to build the
            Caribbean&apos;s sovereign digital future from The Bahamas.
          </p>
          <div className="fb-legal">
            © 2026 Kenneth C. Moncur. All rights reserved.
            <br />
            Freeport, Grand Bahama, The Bahamas
            <br />
            kennethmoncur.com
          </div>
        </div>
        <div>
          <div className="footer-col-title">Navigate</div>
          <ul className="footer-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#essays">Essays</Link>
            </li>
            <li>
              <Link href="/#building">What I&apos;m Building</Link>
            </li>
            <li>
              <Link href="/#beliefs">What I Believe</Link>
            </li>
            <li>
              <Link href="/#speaking">Speaking</Link>
            </li>
            <li>
              <Link href="/#newsletter">Newsletter</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Part of the KGC family</div>
          <ul className="footer-links">
            <li>
              <a
                href="https://thekemisgroup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                thekemisgroup.com
              </a>
            </li>
            <li>
              <a
                href="https://lawbey.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                lawbey.com
              </a>
            </li>
            <li>
              <a
                href="https://kemisdigital.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kemisdigital.com
              </a>
            </li>
            <li>
              <a
                href="https://bahamasopendata.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                bahamasopendata.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Kenneth C. Moncur · Freeport, Grand Bahama, The Bahamas ·{" "}
          <em>kennethmoncur.com</em>
        </p>
        <p
          style={{
            fontFamily: "'Cormorant Garant',serif",
            fontSize: 14,
            fontStyle: "italic",
            color: "var(--brass-l)",
            opacity: 0.6,
          }}
        >
          Pay it forward.
        </p>
      </div>
    </footer>
  );
}
