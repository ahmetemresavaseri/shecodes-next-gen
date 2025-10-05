import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";
import heroImage from "@/assets/hero-pixel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20 retro-grid scanline">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 pixel-border">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs text-primary font-pixel uppercase">Empowering Women in Tech</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel leading-tight text-primary">
              <GlitchText text="HerCode" />
              <br />
              <span className="text-secondary animate-pulse-glow">
                Hackathon 2025
              </span>
            </h1>
            
            <p className="text-sm md:text-base text-foreground/90 max-w-lg leading-relaxed font-mono">
              &gt; Join our community of talented women in tech. Connect, learn, and create innovative solutions at our hackathons.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                className="group"
              >
                [Join Now]
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                [For Companies]
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center pixel-border p-4 bg-card">
                <div className="text-2xl font-pixel text-primary">500+</div>
                <div className="text-xs text-muted-foreground font-mono">Participants</div>
              </div>
              <div className="text-center pixel-border p-4 bg-card">
                <div className="text-2xl font-pixel text-secondary">100+</div>
                <div className="text-xs text-muted-foreground font-mono">Companies</div>
              </div>
              <div className="text-center pixel-border p-4 bg-card">
                <div className="text-2xl font-pixel text-accent">48H</div>
                <div className="text-xs text-muted-foreground font-mono">Innovation</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="overflow-hidden pixel-border bg-card">
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
