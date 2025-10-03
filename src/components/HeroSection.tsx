import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-pixel.jpg";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [glitchText, setGlitchText] = useState("BUILD");
  const texts = ["BUILD", "CODE", "HACK", "CREATE"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchText(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden scanlines">
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 pixel-border bg-card">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs text-primary">WOMEN_IN_TECH.EXE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-pixel leading-tight pixel-text">
              <span className="glitch text-primary">{glitchText}</span>
              <br />
              THE FUTURE
              <br />
              <span className="text-accent animate-blink">TOGETHER_</span>
            </h1>
            
            <p className="text-sm md:text-base text-muted-foreground max-w-lg leading-relaxed">
              &gt; INITIALIZE HACKATHON
              <br />
              &gt; LOADING WOMEN IN TECH...
              <br />
              &gt; CONNECTING TO COMPANIES...
              <br />
              &gt; READY TO HACK!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group pixel-border hover:animate-pixel-bounce"
              >
                <Zap className="mr-2 h-5 w-5" />
                START_GAME
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="pixel-border">
                FOR_COMPANIES
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="pixel-border bg-card p-3">
                <div className="text-2xl font-pixel text-primary">500+</div>
                <div className="text-xs text-muted-foreground">PLAYERS</div>
              </div>
              <div className="pixel-border bg-card p-3">
                <div className="text-2xl font-pixel text-secondary">100+</div>
                <div className="text-xs text-muted-foreground">SPONSORS</div>
              </div>
              <div className="pixel-border bg-card p-3">
                <div className="text-2xl font-pixel text-accent">48H</div>
                <div className="text-xs text-muted-foreground">UPTIME</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="pixel-border overflow-hidden bg-card">
              <img
                src={heroImage}
                alt="Women coding together"
                className="w-full object-cover"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary animate-pixel-bounce opacity-50" 
                 style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};
