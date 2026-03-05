"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const nav = document.getElementById("mainNav");
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle("scrolled", window.scrollY > 48);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fu").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return null;
}
