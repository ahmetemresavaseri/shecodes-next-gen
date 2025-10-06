import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";
import heroImage from "@/assets/hero-pixel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-16 md:pt-20 before:absolute before:inset-0 before:bg-background/5 before:pointer-events-none">
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
      
      {/* Thin strip banner image with animated code overlay */}
      <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden border-y-2 border-primary/30 relative">
        <img
          src={heroImage}
          alt="Two diverse young women collaborating on code together at HerCode hackathon"
          className="w-full h-full object-cover object-center"
        />
        
        {/* Animated code overlay on the screen area */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 sm:w-48 md:w-64 h-24 sm:h-32 md:h-48 opacity-70">
          <div className="text-[6px] sm:text-[8px] md:text-xs font-mono text-primary-glow leading-tight overflow-hidden h-full">
            <div className="animate-code-scroll space-y-0.5 sm:space-y-1">
              <div className="text-blue-400">const buildFuture = () =&gt; &#123;</div>
              <div className="pl-2 text-purple-400">return innovate();</div>
              <div className="text-blue-400">&#125;;</div>
              <div className="text-green-400">// Empowering women</div>
              <div className="text-pink-400">interface Coder &#123;</div>
              <div className="pl-2 text-yellow-400">skills: string[];</div>
              <div className="pl-2 text-cyan-400">passion: boolean;</div>
              <div className="text-pink-400">&#125;</div>
              <div className="text-orange-400">export class Innovation</div>
              <div className="text-blue-400">const buildFuture = () =&gt; &#123;</div>
              <div className="pl-2 text-purple-400">return innovate();</div>
              <div className="text-blue-400">&#125;;</div>
              <div className="text-green-400">// Together we code</div>
              <div className="text-pink-400">interface Coder &#123;</div>
              <div className="pl-2 text-yellow-400">skills: string[];</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};