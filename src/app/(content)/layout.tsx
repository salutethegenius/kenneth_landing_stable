import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollEffects } from "@/components/ScrollEffects";
import { BackButton } from "@/components/BackButton";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollEffects />
      <Nav />
      <main>
        <BackButton />
        {children}
      </main>
      <Footer />
    </>
  );
}
