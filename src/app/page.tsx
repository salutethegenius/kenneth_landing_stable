import type { Metadata } from "next";
import { siteDescription, siteName, siteUrl } from "@/lib/seo";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Building } from "@/components/Building";
import { Philosophy } from "@/components/Philosophy";
import { Parts } from "@/components/Parts";
import { Featured } from "@/components/Featured";
import { Beliefs } from "@/components/Beliefs";
import { Recognition } from "@/components/Recognition";
import { Speaking } from "@/components/Speaking";
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
        <Mission />
        <Building />
        <Philosophy />
        <Parts />
        <Featured />
        <Beliefs />
        <Recognition />
        <Speaking />
        <CtaStrip />
        <Toc />
        <Footer />
      </main>
    </>
  );
}
