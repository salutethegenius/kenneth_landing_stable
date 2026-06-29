"use client";

import Link from "next/link";
import { SealedKLogoNav } from "./SealedKLogo";
import { useState, useEffect } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`nav${menuOpen ? " nav-open" : ""}`} id="mainNav">
      <Link href="/" className="nav-logo" onClick={closeMenu}>
        <SealedKLogoNav className="nav-seal" />
        <div className="nav-name">
          Kenneth C. Moncur
          <span>Founder · Kemis Group of Companies</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li>
          <Link href="#mission">Mission</Link>
        </li>
        <li>
          <Link href="#building">Building</Link>
        </li>
        <li>
          <Link href="#parts">Parts</Link>
        </li>
        <li>
          <Link href="#beliefs">Beliefs</Link>
        </li>
        <li>
          <Link href="#recognition">Recognition</Link>
        </li>
        <li>
          <Link href="#toc">Contents</Link>
        </li>
      </ul>
      <Link href="#newsletter" className="nav-cta nav-cta-desktop">
        Subscribe
      </Link>
      <button
        type="button"
        className="nav-toggle"
        onClick={() => setMenuOpen((o) => !o)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span className="nav-toggle-icon">
          <span />
          <span />
          <span />
        </span>
      </button>
      <div className="nav-drawer" aria-hidden={!menuOpen}>
        <Link href="#mission" onClick={closeMenu}>
          Mission
        </Link>
        <Link href="#building" onClick={closeMenu}>
          Building
        </Link>
        <Link href="#parts" onClick={closeMenu}>
          Parts
        </Link>
        <Link href="#beliefs" onClick={closeMenu}>
          Beliefs
        </Link>
        <Link href="#recognition" onClick={closeMenu}>
          Recognition
        </Link>
        <Link href="#toc" onClick={closeMenu}>
          Contents
        </Link>
        <Link href="#newsletter" className="nav-drawer-cta" onClick={closeMenu}>
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
