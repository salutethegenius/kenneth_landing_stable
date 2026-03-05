import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="fb-mark">Kenneth C. Moncur</div>
          <div className="fb-sub">Almanack · Systems · Code · Legacy</div>
          <p className="fb-p">
            Author, digital freedom advocate, and Bahamian thinker. Building
            sovereign infrastructure for a digital future — starting with the
            written word.
          </p>
          <div className="fb-legal">
            © 2025 Kenneth C. Moncur. All rights reserved.
            <br />
            Nassau, The Bahamas
            <br />
            kennethmoncur.com
          </div>
        </div>
        <div>
          <div className="footer-col-title">The Almanack</div>
          <ul className="footer-links">
            <li>
              <Link href="/pages/table_of_contents">Table of Contents</Link>
            </li>
            <li>
              <Link href="/#about">About This Almanac</Link>
            </li>
            <li>
              <Link href="/foreword">Foreword</Link>
            </li>
            <li>
              <Link href="/timeline">Timeline</Link>
            </li>
            <li>
              <Link href="/media">Media Gallery</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Essays & Books</div>
          <ul className="footer-links">
            <li>
              <Link href="/essays/judgment">How to Think Clearly</Link>
            </li>
            <li>
              <Link href="/essays/data-sovereignty">Data Sovereignty</Link>
            </li>
            <li>
              <Link href="/essays/empire-blueprint">The Empire Blueprint</Link>
            </li>
            <li>
              <Link href="/books/The_Moncur_Method">The Moncur Method</Link>
            </li>
            <li>
              <Link href="/books/frameworks/sovereign-nation-framework">
                Sovereign Nation Framework
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">The Ecosystem</div>
          <ul className="footer-links">
            <li>
              <a
                href="https://thekemisgroup.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kemis Group of Companies
              </a>
            </li>
            <li>
              <a
                href="https://lawbey.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LawBey
              </a>
            </li>
            <li>
              <a
                href="https://bahamasopendata.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                BahamasOpenData
              </a>
            </li>
            <li>
              <a
                href="https://kemisdigital.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                KemisDigital
              </a>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2025 Kenneth C. Moncur · Nassau, The Bahamas ·{" "}
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
