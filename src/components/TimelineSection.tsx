import { Calendar, CheckCircle2 } from "lucide-react";

export const TimelineSection = () => {
  const timeline = [
    {
      phase: "Registration",
      title: "Sign Up & Team Formation",
      description: "Register individually or as a team. Network with other participants to form your dream team.",
      status: "open"
    },
    {
      phase: "Kickoff",
      title: "Opening Ceremony & Theme Reveal",
      description: "Join us for the exciting opening ceremony where we'll reveal this year's hackathon theme.",
      status: "upcoming"
    },
    {
      phase: "Hack Time",
      title: "48 Hours of Innovation",
      description: "Code, design, and build your solution. Access mentors, workshops, and resources throughout.",
      status: "upcoming"
    },
    {
      phase: "Presentations",
      title: "Demo Day & Judging",
      description: "Present your projects to our panel of industry experts and compete for amazing prizes.",
      status: "upcoming"
    },
    {
      phase: "Closing",
      title: "Awards & Networking",
      description: "Celebrate achievements, receive awards, and connect with companies looking to hire.",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Your journey from registration to career opportunities
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary" />
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute left-0 w-16 h-16 rounded-full bg-card border-4 border-background shadow-card flex items-center justify-center">
                  {item.status === "open" ? (
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  ) : (
                    <Calendar className="w-8 h-8 text-muted-foreground" />
                  )}
                </div>
                
                <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-colors shadow-card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {item.phase}
                    </span>
                    {item.status === "open" && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        Open Now
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
