import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TimelineSection } from "@/components/TimelineSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { PixelParticles } from "@/components/PixelParticles";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <PixelParticles />
      <HeroSection />
      <MissionSection />
      <BenefitsSection />
      <TimelineSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
