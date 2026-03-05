import type { Metadata } from "next";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { Parts } from "@/components/Parts";
import { Featured } from "@/components/Featured";
import { Toc } from "@/components/Toc";
import { CtaStrip } from "@/components/CtaStrip";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Parts />
        <Featured />
        <Toc />
        <CtaStrip />
        <Footer />
      </main>
    </>
  );
}
