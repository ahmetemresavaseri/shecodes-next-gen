import { Target, Users, Rocket } from "lucide-react";

export const MissionSection = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Breaking barriers and creating opportunities for women to thrive in technology through hands-on collaboration and mentorship."
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building a supportive network of talented women developers, designers, and innovators who lift each other up."
    },
    {
      icon: Rocket,
      title: "Career Growth",
      description: "Connecting participants with leading tech companies actively seeking diverse talent to strengthen their teams."
    }
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why We Exist
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging the gender gap in technology, one hackathon at a time
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
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
