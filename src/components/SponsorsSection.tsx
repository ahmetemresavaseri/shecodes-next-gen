import { Briefcase, Award, Users, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SponsorsSection = () => {
  const sponsors = [
    {
      name: "EY",
      logo: "data:image/png;base64,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560px-EY_Logo_2019.svg.png",
      isComingSoon: false,
    },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
  ];

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent Discovery",
      description: "Access a pool of skilled women developers ready to join your team",
    },
    {
      icon: Award,
      title: "Diversity Goals",
      description: "Build a more diverse team aligned with modern workplace values",
    },
    {
      icon: Users,
      title: "Brand Building",
      description: "Showcase your commitment to diversity and inclusion in tech",
    },
    {
      icon: Network,
      title: "Direct Engagement",
      description: "Interact with potential hires in a collaborative environment",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Backed by Industry Leaders
          </h2>
        </div>

        {/* Scrolling sponsors marquee */}
        <div className="relative overflow-hidden mb-20 py-4">
          <div className="flex animate-scroll-left">
            {/* First set of sponsors */}
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 h-32 mx-6 flex items-center justify-center bg-card rounded-lg shadow-card hover:shadow-pixel transition-all p-6"
              >
                {sponsor.isComingSoon ? (
                  <span className="text-muted-foreground font-medium">Coming Soon</span>
                ) : (
                  <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Become a Partner
          </h2>
          <p className="text-muted-foreground mb-6">Benefits for companies</p>
          <Button size="lg" className="shadow-glow">
            Partner Up with Us
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {companyBenefits.map((benefit, index) => (
            <Card key={index} className="bg-card hover:shadow-glow transition-all group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform pixel-border">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
