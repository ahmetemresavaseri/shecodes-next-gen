import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MissionSection />
      <EventsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
