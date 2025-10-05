import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";
import { TypewriterText } from "@/components/TypewriterText";
import heroImage from "@/assets/hercode-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20 retro-grid scanline">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary pixel-border">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs text-primary font-pixel uppercase">Empowering Women in Tech</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel leading-tight text-white">
              <GlitchText text="HerCode" className="text-5xl md:text-6xl lg:text-7xl" />
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                <TypewriterText
                  texts={[
                    "Build Together",
                    "Code Together",
                    "Innovate Together",
                    "Lead Together",
                  ]}
                />
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-foreground/80 max-w-lg leading-relaxed font-mono">
              &gt; Join our community of talented women in tech_
              <br />
              &gt; Connect. Learn. Build._
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
              >
                Join the Hackathon
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                For Companies
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4 font-pixel">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground uppercase">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-xs text-muted-foreground uppercase">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">48H</div>
                <div className="text-xs text-muted-foreground uppercase">Innovation</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="overflow-hidden pixel-border shadow-card">
              <img
                src={heroImage}
                alt="Women coding together at hackathon"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
