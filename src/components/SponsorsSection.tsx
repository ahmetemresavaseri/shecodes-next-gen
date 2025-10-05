import { Briefcase, Award, Users, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SponsorsSection = () => {
  const sponsors = [
    { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/EY_Logo_2019.svg/2560px-EY_Logo_2019.svg.png", isComingSoon: false },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
  ];

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Talent Discovery",
      description: "Access a pool of skilled women developers ready to join your team"
    },
    {
      icon: Award,
      title: "Diversity Goals",
      description: "Build a more diverse team aligned with modern workplace values"
    },
    {
      icon: Users,
      title: "Brand Building",
      description: "Showcase your commitment to diversity and inclusion in tech"
    },
    {
      icon: Network,
      title: "Direct Engagement",
      description: "Interact with potential hires in a collaborative environment"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Backed by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="w-full h-24 flex items-center justify-center bg-card rounded-lg shadow-card hover:shadow-glow transition-all hover:-translate-y-1 p-4"
            >
              {sponsor.isComingSoon ? (
                <span className="text-muted-foreground font-medium">Coming Soon</span>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Become a Partner
          </h2>
          <p className="text-muted-foreground">
            Benefits for companies joining our community
          </p>
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