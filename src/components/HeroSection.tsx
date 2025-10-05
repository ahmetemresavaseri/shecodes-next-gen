import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-pixel.jpg";

export const HeroSection = () => {
  const keyFacts = [
    { icon: Calendar, label: "Oct 25-27, 2025", sublabel: "CET" },
    { icon: MapPin, label: "ETH Zurich", sublabel: "Switzerland" },
    { icon: Users, label: "2-4 per team", sublabel: "Team size" },
    { icon: Award, label: "€10,000", sublabel: "Prize pool" },
    { icon: Clock, label: "Oct 20, 23:59", sublabel: "Deadline" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Build. Belong.
              <br />
              <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Break things (nicely).
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-lg leading-relaxed">
              A 48-hour hackathon empowering women+ to ship real solutions with mentors, prizes, and a community for life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group shadow-glow"
              >
                Apply to Hack
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Become a Sponsor
              </Button>
            </div>

            {/* Urgency Message */}
            <div className="inline-block bg-destructive/20 border border-destructive/30 rounded-lg px-4 py-2">
              <p className="text-white text-sm font-medium">
                🔥 Applications close October 20, 23:59 CET
              </p>
            </div>
            
            {/* Key Facts Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
              {keyFacts.map((fact, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <fact.icon className="w-5 h-5 text-white mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">{fact.label}</div>
                  <div className="text-xs text-white/70">{fact.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="rounded-2xl overflow-hidden shadow-card pixel-border">
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
