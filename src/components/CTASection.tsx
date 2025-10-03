import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Ready to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Shape Your Future?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of talented women in tech for an unforgettable experience. 
            Limited spots available—register now and be part of something amazing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="group text-lg px-8">
              Register as Participant
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Partner With Us
            </Button>
          </div>
          
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              Questions? Reach out at{" "}
              <a href="mailto:hello@womentech-hackathon.com" className="text-primary hover:underline font-medium">
                hello@womentech-hackathon.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
