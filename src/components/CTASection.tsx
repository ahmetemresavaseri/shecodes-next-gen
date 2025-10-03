import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

export const CTASection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden scanlines">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div ref={ctaRef} className="container mx-auto max-w-4xl relative z-10">
        <div className="pixel-border bg-card p-8 md:p-12 space-y-8">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-pixel leading-tight pixel-text">
                READY TO
                <br />
                <span className="text-primary glitch">START_GAME</span>
                <span className="animate-blink">?</span>
              </h2>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-mono">
                &gt; JOIN 500+ WOMEN IN TECH
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                &gt; LIMITED_SLOTS = TRUE
              </p>
              <p className="text-xs text-muted-foreground font-mono">
                &gt; REGISTER_NOW()
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                variant="hero" 
                size="lg" 
                className="group pixel-border font-pixel text-xs hover:animate-pixel-bounce"
              >
                <Zap className="mr-2 h-5 w-5" />
                JOIN_AS_PLAYER
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="pixel-border font-pixel text-xs hover:bg-secondary/10"
              >
                <Mail className="mr-2 h-5 w-5" />
                SPONSOR_MODE
              </Button>
            </div>
            
            <div className="pt-8 pixel-border bg-background/50 p-4 inline-block">
              <p className="text-xs text-muted-foreground font-mono">
                SUPPORT@WOMENTECH_HACK.COM
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent opacity-20 animate-float"
             style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary opacity-20 animate-pixel-bounce"
             style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }} />
      </div>
    </section>
  );
};
