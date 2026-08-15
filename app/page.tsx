// import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { CountdownSection } from "@/components/CountdownSection";
import { DetailsSection } from "@/components/DetailsSection";
import { ProgramSection } from "@/components/ProgramSection";
import { DresscodeSection } from "@/components/DresscodeSection";
import { GallerySection } from "@/components/GallerySection";
import { RSVPSection } from "@/components/RSVPSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
     /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#FDF8F2",
        overflowX: "hidden",
      }}
    >
      {/* <NavBar /> */}
      <HeroSection />
      <CountdownSection />
      <DetailsSection />
      <ProgramSection />
      <DresscodeSection />
      <GallerySection />
      <RSVPSection />
      <FooterSection />
    </div>
  );
}