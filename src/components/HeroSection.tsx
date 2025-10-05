import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { GlitchText } from "@/components/GlitchText";
import heroImage from "@/assets/hero-pixel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-2">
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
              <span className="text-xs md:text-sm text-primary font-medium">Empowering Women in Tech</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              <GlitchText text="Build the Future" />
              <br />
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent animate-pulse-glow">
                Together
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-lg leading-relaxed">
              Join a community of ambitious women supporting each other to learn, grow, and make an impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
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
          
          <div className="relative group animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            {/* Glowing backdrop */}
            <div className="absolute -inset-4 md:-inset-8 bg-gradient-primary opacity-30 blur-3xl group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
            
            {/* Main image container */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-glow border-2 border-primary/40 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-[1.02] transform-gpu">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
              
              {/* Image */}
              <img
                src={heroImage}
                alt="Women coding together at HerCode hackathon - Building the future of tech together"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Inner glow ring */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl md:rounded-2xl"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-t-2 border-l-2 border-primary/60 rounded-tl-xl md:rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 border-b-2 border-r-2 border-primary/60 rounded-br-xl md:rounded-br-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};