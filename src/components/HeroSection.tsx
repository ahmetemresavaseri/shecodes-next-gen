import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";
import { PixelDecoration } from "@/components/PixelDecoration";
import heroImage from "@/assets/hero-pixel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-16 md:pt-20 before:absolute before:inset-0 before:bg-background/5 before:pointer-events-none">
      {/* Pixel Decorations */}
      <PixelDecoration variant="large" color="primary" animation="float" position={{ top: '10%', left: '5%' }} />
      <PixelDecoration variant="medium" color="accent" animation="pulse" position={{ top: '20%', right: '8%' }} />
      <PixelDecoration variant="small" color="secondary" animation="drift" position={{ top: '35%', left: '12%' }} />
      <PixelDecoration variant="medium" color="primary" animation="pop" position={{ top: '15%', right: '15%' }} />
      <PixelDecoration variant="large" color="accent" animation="drift" position={{ bottom: '60%', left: '8%' }} />
      <PixelDecoration variant="small" color="primary" animation="pulse" position={{ bottom: '65%', right: '10%' }} />
      <PixelDecoration variant="medium" color="secondary" animation="float" position={{ top: '40%', right: '5%' }} />
      <PixelDecoration variant="large" color="primary" animation="pop" position={{ top: '50%', left: '3%' }} />
      <PixelDecoration variant="small" color="accent" animation="drift" position={{ bottom: '55%', left: '18%' }} />
      <PixelDecoration variant="medium" color="primary" animation="pulse" position={{ bottom: '58%', right: '20%' }} />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="w-full h-1 bg-primary/30 animate-scan" />
      </div>
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              <GlitchText text="Build the Future" />
              <br />
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent animate-pulse-glow">
                Together
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed mx-auto">
              Join a community of ambitious women supporting each other to learn, grow, and make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button 
                size="lg" 
                className="group shadow-glow w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('cta');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById('events');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Events
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Thin strip banner image */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden border-y-2 border-primary/30">
        <img
          src={heroImage}
          alt="Diverse young women coding together at HerCode hackathon"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};