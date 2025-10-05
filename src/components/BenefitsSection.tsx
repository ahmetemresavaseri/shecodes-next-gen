import { Code, Trophy, Network, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BenefitsSection = () => {
  const participantBenefits = [
    {
      icon: Code,
      title: "Hands-On Experience",
      description: "Build real-world projects and expand your portfolio with innovative solutions"
    },
    {
      icon: Network,
      title: "Professional Network",
      description: "Connect with industry leaders, mentors and fellow tech professionals"
    },
    {
      icon: Trophy,
      title: "Prizes & Recognition",
      description: "Compete for amazing prizes, gain recognition and boost your career"
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Access workshops and mentorship to accelerate your learning journey"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            Why Join Us
          </h2>
          <p className="text-muted-foreground">
            Value for everyone in our community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {participantBenefits.map((benefit, index) => (
            <Card key={index} className="bg-card hover:shadow-glow transition-all group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform pixel-border">
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
