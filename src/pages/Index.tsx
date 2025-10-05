import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { MissionSection } from "@/components/MissionSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { TracksSection } from "@/components/TracksSection";
import { MentorsSection } from "@/components/MentorsSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SocialProofSection />
      <MissionSection />
      <ScheduleSection />
      <TracksSection />
      <MentorsSection />
      <BenefitsSection />
      <EventsSection />
      <TestimonialsSection />
      <SponsorsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
