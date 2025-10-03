import { Target, Users, Rocket } from "lucide-react";
import { useEffect, useRef } from "react";

export const MissionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".mission-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Target,
      title: "MISSION_01",
      description: "BREAK_BARRIERS() && CREATE_OPPORTUNITIES() FOR WOMEN IN TECH THROUGH HANDS-ON COLLABORATION"
    },
    {
      icon: Users,
      title: "MISSION_02", 
      description: "BUILD_COMMUNITY() OF TALENTED DEVELOPERS, DESIGNERS AND INNOVATORS WHO SUPPORT EACH OTHER"
    },
    {
      icon: Rocket,
      title: "MISSION_03",
      description: "CONNECT(PARTICIPANTS, COMPANIES) TO CREATE CAREER OPPORTUNITIES AND GROWTH"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 relative scanlines">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-pixel mb-4 pixel-text glitch">
            WHY_WE_EXIST
          </h2>
          <p className="text-sm text-muted-foreground">
            &gt; MISSION_STATEMENT.TXT
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="mission-card group pixel-border bg-card p-6 hover:bg-primary/10 transition-all cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 pixel-border bg-primary flex items-center justify-center mb-6 group-hover:animate-pixel-bounce">
                <value.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-lg font-pixel mb-4 text-primary">{value.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-mono">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
