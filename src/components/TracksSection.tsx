import { Heart, Leaf, Coins, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const tracks = [
  {
    icon: Heart,
    title: "HealthTech",
    challenge: "Design solutions that improve women's health outcomes and accessibility to care.",
    examples: "Mental health apps, telemedicine platforms, reproductive health tools",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Leaf,
    title: "Climate & Sustainability",
    challenge: "Build technology that tackles climate change and promotes sustainable living.",
    examples: "Carbon tracking, circular economy platforms, green energy solutions",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Coins,
    title: "FinTech",
    challenge: "Create financial tools that empower women entrepreneurs and close the wealth gap.",
    examples: "Investment platforms, budgeting tools, microfinance solutions",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    challenge: "Solve any problem you're passionate about with creative technology solutions.",
    examples: "EdTech, future of work, community building, accessibility tools",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
];

export const TracksSection = () => {
  return (
    <section id="tracks" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Hackathon Tracks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose your challenge and build something meaningful
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {tracks.map((track, index) => (
            <Card
              key={index}
              className="bg-card hover:shadow-glow transition-all hover:-translate-y-1 pixel-border"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg ${track.bgColor} flex items-center justify-center mb-4`}>
                  <track.icon className={`w-6 h-6 ${track.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{track.title}</h3>
                <p className="text-sm text-foreground mb-4 font-medium">{track.challenge}</p>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Examples:</span> {track.examples}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
