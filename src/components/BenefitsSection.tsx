import { Code, Trophy, Briefcase, Award, Network, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const BenefitsSection = () => {
  const participantBenefits = [
    {
      icon: Code,
      title: "Hands-On Experience",
      description: "Work on real-world projects and build your portfolio with cutting-edge technologies"
    },
    {
      icon: Network,
      title: "Networking",
      description: "Connect with industry leaders, mentors, and fellow talented women in tech"
    },
    {
      icon: Trophy,
      title: "Win Prizes",
      description: "Compete for amazing prizes, recognition, and career opportunities"
    },
    {
      icon: Lightbulb,
      title: "Learn & Grow",
      description: "Access workshops, mentorship sessions, and resources to accelerate your skills"
    }
  ];

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "Top Talent",
      description: "Access a curated pool of skilled women developers ready to make an impact"
    },
    {
      icon: Award,
      title: "Diversity Goals",
      description: "Build a more diverse and innovative team aligned with modern workplace values"
    },
    {
      icon: Users,
      title: "Brand Visibility",
      description: "Showcase your company as a champion of diversity and inclusion in tech"
    },
    {
      icon: Network,
      title: "Direct Engagement",
      description: "Interact with potential hires in a collaborative, pressure-free environment"
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Benefits For Everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a participant or a company, we create value for all
          </p>
        </div>

        <Tabs defaultValue="participants" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="participants" className="text-lg py-4">
              For Participants
            </TabsTrigger>
            <TabsTrigger value="companies" className="text-lg py-4">
              For Companies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="participants" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {participantBenefits.map((benefit, index) => (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="companies" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {companyBenefits.map((benefit, index) => (
                <Card key={index} className="border-border hover:border-secondary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-secondary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
