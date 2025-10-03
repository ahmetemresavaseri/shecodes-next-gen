import { Calendar, CheckCircle2, Square } from "lucide-react";

export const TimelineSection = () => {
  const timeline = [
    {
      phase: "INIT",
      title: "REGISTER && TEAM_UP",
      description: "SIGN_UP() INDIVIDUALLY OR AS TEAM. NETWORK TO FORM YOUR SQUAD",
      status: "open"
    },
    {
      phase: "START",
      title: "OPENING_CEREMONY.EXE",
      description: "JOIN US FOR KICKOFF WHERE WE REVEAL THIS YEAR'S THEME",
      status: "upcoming"
    },
    {
      phase: "LOOP",
      title: "48H_INNOVATION_CYCLE",
      description: "CODE, DESIGN && BUILD YOUR SOLUTION. ACCESS MENTORS 24/7",
      status: "upcoming"
    },
    {
      phase: "DEMO",
      title: "PRESENTATION_MODE",
      description: "PRESENT YOUR PROJECT TO JUDGES && COMPETE FOR PRIZES",
      status: "upcoming"
    },
    {
      phase: "END",
      title: "AWARDS && NETWORK",
      description: "CELEBRATE ACHIEVEMENTS && CONNECT WITH RECRUITING COMPANIES",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 px-4 relative scanlines">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel mb-4 pixel-text glitch">
            GAME_FLOW
          </h2>
          <p className="text-xs text-muted-foreground">
            &gt; HOW_TO_PLAY.TXT
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="relative pl-20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-0 w-16 h-16 pixel-border bg-card flex items-center justify-center hover:animate-pixel-bounce">
                {item.status === "open" ? (
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                ) : (
                  <Square className="w-6 h-6 text-muted-foreground" />
                )}
              </div>
              
              <div className="pixel-border bg-card p-6 hover:bg-primary/5 transition-all group cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-pixel text-primary">
                    [{item.phase}]
                  </span>
                  {item.status === "open" && (
                    <span className="px-2 py-1 text-xs font-pixel bg-primary text-background animate-blink">
                      ACTIVE
                    </span>
                  )}
                </div>
                <h3 className="text-base font-pixel mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-muted-foreground font-mono">{item.description}</p>
              </div>
              
              {index < timeline.length - 1 && (
                <div className="absolute left-7 top-20 w-0.5 h-8 bg-primary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
