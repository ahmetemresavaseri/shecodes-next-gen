import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import { MissionSection } from "@/components/MissionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <MissionSection />
      <EventsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
