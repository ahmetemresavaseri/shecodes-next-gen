import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { EventsSection } from "@/components/EventsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { MatrixRain } from "@/components/MatrixRain";
import { FloatingCode } from "@/components/FloatingCode";
import { PixelGrid } from "@/components/PixelGrid";
import { PixelTrail } from "@/components/PixelTrail";
import { BinaryRain } from "@/components/BinaryRain";
import { RetroGrid } from "@/components/RetroGrid";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <RetroGrid />
      <MatrixRain />
      <BinaryRain />
      <PixelGrid />
      <ParticleBackground />
      <FloatingCode />
      <PixelTrail />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <section id="mission"><MissionSection /></section>
        <section id="events"><EventsSection /></section>
        <section id="benefits"><BenefitsSection /></section>
        <section id="testimonials"><TestimonialsSection /></section>
        <section id="sponsors"><SponsorsSection /></section>
        <section id="cta"><CTASection /></section>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
