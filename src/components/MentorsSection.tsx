import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const mentors = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Lead",
    company: "Google",
    expertise: ["AI/ML", "Product"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
  },
  {
    name: "Maria Rodriguez",
    role: "VP of Engineering",
    company: "Meta",
    expertise: ["Leadership", "Product"],
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop",
  },
  {
    name: "Emily Watson",
    role: "Design Director",
    company: "Apple",
    expertise: ["Design", "UX"],
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&h=300&fit=crop",
  },
  {
    name: "Lisa Zhang",
    role: "CTO",
    company: "FinTech Startup",
    expertise: ["Pitching", "Product"],
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop",
  },
  {
    name: "Anna Schmidt",
    role: "Data Science Lead",
    company: "Amazon",
    expertise: ["AI/ML", "Data"],
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=300&fit=crop",
  },
  {
    name: "Sophie Martin",
    role: "Product Manager",
    company: "Microsoft",
    expertise: ["Product", "Strategy"],
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=300&h=300&fit=crop",
  },
];

const expertiseOptions = ["All", "AI/ML", "Product", "Design", "Pitching", "Leadership", "UX", "Data", "Strategy"];

export const MentorsSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState("All");

  const filteredMentors =
    selectedExpertise === "All"
      ? mentors
      : mentors.filter((mentor) => mentor.expertise.includes(selectedExpertise));

  return (
    <section id="mentors" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Mentors & Judges
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Learn from industry leaders who've been where you want to go
          </p>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {expertiseOptions.map((expertise) => (
              <Badge
                key={expertise}
                variant={selectedExpertise === expertise ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedExpertise(expertise)}
              >
                {expertise}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMentors.map((mentor, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-card p-6 hover:shadow-glow transition-all hover:-translate-y-1 pixel-border text-center"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-bold text-foreground mb-1">{mentor.name}</h3>
              <p className="text-sm text-primary font-semibold mb-1">{mentor.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{mentor.company}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {mentor.expertise.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
