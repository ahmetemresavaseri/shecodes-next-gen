import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles, Heart } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Ready to
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Join the Movement?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Single Event Participant */}
          <div className="bg-card rounded-2xl shadow-card p-8 hover:shadow-glow transition-all hover:-translate-y-1 pixel-border">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 mx-auto animate-float">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Event Participant</h3>
            <p className="text-muted-foreground text-center mb-6">
              Join individual hackathons and events. Perfect if you want to try us out or participate in specific events that interest you.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Access to public events</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Network with participants</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Win prizes & recognition</span>
              </li>
            </ul>
            <Button size="lg" variant="outline" className="w-full group">
              Join Single Event
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Community Member */}
          <div className="bg-card rounded-2xl shadow-card p-8 hover:shadow-glow transition-all hover:-translate-y-1 pixel-border relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              RECOMMENDED
            </div>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-6 mx-auto animate-float shine-dot">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Community Member</h3>
            <p className="text-muted-foreground text-center mb-6">
              Become part of our empowering community. Stay connected with inspiring women, find co-founders, and access exclusive events.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">All event participant benefits</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Exclusive internal events</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Find co-founders & build together</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Stay connected with inspiring women</span>
              </li>
              <li className="flex items-start">
                <ArrowRight className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Mentorship & career support</span>
              </li>
            </ul>
            <Button size="lg" className="w-full group shadow-glow">
              Become a Member
              <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Questions? Reach out at <span className="text-primary font-medium">hello@womentech.com</span>
          </p>
          <Button variant="outline" size="lg">
            Become a Sponsor
          </Button>
        </div>
      </div>
    </section>
  );
};
