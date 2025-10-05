import { Target, Users, Rocket } from "lucide-react";

export const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Inclusion",
      description: "Opening doors for women to step into tech and feel empowered to stay."
    },
    {
      icon: Users,
      title: "Community", 
      description: "Uniting women driven by curiosity, creativity, and code."
    },
    {
      icon: Rocket,
      title: "Empowerment",
      description: "Empowering women to turn ambition into action and ideas into impact."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're dedicated to creating an inclusive ecosystem where women can thrive in technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg shadow-card p-8 hover:shadow-glow transition-all hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative inline-block mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform shine-dot">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
