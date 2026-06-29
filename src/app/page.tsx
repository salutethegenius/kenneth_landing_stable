import type { Metadata } from "next";
import { buildPageMetadata, siteKeywords, siteName } from "@/lib/seo";
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
  ...buildPageMetadata({
    title: siteName,
    description:
      "Bahamian founder Kenneth C. Moncur builds the Caribbean's sovereign digital future from Freeport — essays, frameworks, and the work happening now at Kemis Group of Companies.",
    path: "/",
    type: "website",
    keywords: [
      ...siteKeywords,
      "Kenneth Moncur essays",
      "Bahamian entrepreneur",
      "Caribbean infrastructure",
    ],
  }),
  title: { absolute: siteName },
};

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <main id="main-content">
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
