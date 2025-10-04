import { Code, Trophy, Briefcase, Award, Network, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("participants");

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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-card">
            <TabsTrigger value="participants">
              For Participants
            </TabsTrigger>
            <TabsTrigger value="companies">
              For Companies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="participants" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {participantBenefits.map((benefit, index) => (
                <Card key={index} className="bg-card hover:shadow-glow transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
          </TabsContent>

          <TabsContent value="companies" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {companyBenefits.map((benefit, index) => (
                <Card key={index} className="bg-card hover:shadow-glow transition-all group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
