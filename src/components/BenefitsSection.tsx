import { Code, Trophy, Briefcase, Award, Network, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState("participants");

  const participantBenefits = [
    {
      icon: Code,
      title: "XP_BOOST",
      description: "GAIN HANDS-ON EXPERIENCE WITH REAL-WORLD PROJECTS && BUILD YOUR PORTFOLIO"
    },
    {
      icon: Network,
      title: "CONNECT()",
      description: "NETWORK WITH INDUSTRY LEADERS, MENTORS AND FELLOW TECH WARRIORS"
    },
    {
      icon: Trophy,
      title: "LOOT_PRIZES",
      description: "COMPETE FOR EPIC PRIZES, ACHIEVEMENTS AND CAREER POWER-UPS"
    },
    {
      icon: Lightbulb,
      title: "LEVEL_UP",
      description: "ACCESS WORKSHOPS && MENTORSHIP TO ACCELERATE YOUR SKILL TREE"
    }
  ];

  const companyBenefits = [
    {
      icon: Briefcase,
      title: "RECRUIT_MODE",
      description: "ACCESS POOL OF SKILLED WOMEN DEVELOPERS READY TO JOIN YOUR TEAM"
    },
    {
      icon: Award,
      title: "DIVERSITY++",
      description: "BUILD A MORE DIVERSE TEAM ALIGNED WITH MODERN VALUES"
    },
    {
      icon: Users,
      title: "BRAND_XP",
      description: "SHOWCASE AS CHAMPION OF DIVERSITY && INCLUSION IN TECH"
    },
    {
      icon: Network,
      title: "DIRECT_LINK",
      description: "INTERACT WITH POTENTIAL HIRES IN COLLABORATIVE ENVIRONMENT"
    }
  ];

  return (
    <section className="py-24 px-4 scanlines">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-pixel mb-4 pixel-text">
            BENEFITS.LOG
          </h2>
          <p className="text-xs text-muted-foreground">
            &gt; VALUE_FOR_ALL = TRUE
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 pixel-border bg-card p-2">
            <TabsTrigger 
              value="participants" 
              className="font-pixel text-xs data-[state=active]:bg-primary data-[state=active]:text-background"
            >
              PLAYERS
            </TabsTrigger>
            <TabsTrigger 
              value="companies" 
              className="font-pixel text-xs data-[state=active]:bg-secondary data-[state=active]:text-background"
            >
              SPONSORS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="participants" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {participantBenefits.map((benefit, index) => (
                <Card key={index} className="pixel-border bg-card hover:bg-primary/10 transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 pixel-border bg-primary flex items-center justify-center flex-shrink-0 group-hover:animate-pixel-bounce">
                        <benefit.icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-sm font-pixel mb-2 text-primary">{benefit.title}</h3>
                        <p className="text-xs text-muted-foreground font-mono">{benefit.description}</p>
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
                <Card key={index} className="pixel-border bg-card hover:bg-secondary/10 transition-all group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 pixel-border bg-secondary flex items-center justify-center flex-shrink-0 group-hover:animate-pixel-bounce">
                        <benefit.icon className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-sm font-pixel mb-2 text-secondary">{benefit.title}</h3>
                        <p className="text-xs text-muted-foreground font-mono">{benefit.description}</p>
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
