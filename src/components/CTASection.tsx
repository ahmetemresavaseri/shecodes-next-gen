import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 space-y-8 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Join the Movement?
              </span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be part of a community that's shaping the future of tech. Limited spots available!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="group shadow-glow"
            >
              Join as Participant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Become a Sponsor
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Questions? Reach out at <span className="text-primary font-medium">hello@womentech.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
