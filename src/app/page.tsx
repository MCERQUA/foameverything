import { Vegas2026Banner } from "@/components/sections/Vegas2026Banner";
import { IndustryHub } from "@/components/sections/IndustryHub";
import { HeroBanner } from "@/components/sections/HeroBanner";
import { SwagWars } from "@/components/sections/SwagWars";
import { NASCARSection } from "@/components/sections/NASCARSection";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { LanyardWrapper } from "@/components/ui/LanyardWrapper";

export default function Home() {
  return (
    <>
      {/* Interactive Tradeshow Badge */}
      <LanyardWrapper position={[0, 0, 20]} gravity={[0, -40, 0]} />

      {/* Vegas 2026 Event Banner - TOP PRIORITY */}
      <Vegas2026Banner />

      {/* Industry Hub - SprayFoamTV, Radio, NerfFusion */}
      <IndustryHub />

      {/* Main Hero Banner */}
      <HeroBanner />

      {/* Swag Wars Signup */}
      <SwagWars />

      {/* NASCAR Sponsorship Section */}
      <NASCARSection />

      {/* Featured Products Grid */}
      <ProductGrid />

      {/* Additional sections can be added here:
          - 3D Brand Services
          - UV Decals
          - 3D Interactive
          - etc.
      */}
    </>
  );
}
