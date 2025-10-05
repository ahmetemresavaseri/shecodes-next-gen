import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const upcomingEvents = [
  {
    title: "Women in Tech Hackathon 2025",
    date: "March 15-17, 2025",
    location: "Berlin, Germany",
    participants: "200+ expected",
    description: "48-hour intensive hackathon focused on AI and sustainability solutions",
  },
  {
    title: "Tech Mentorship Workshop",
    date: "April 8, 2025",
    location: "Virtual Event",
    participants: "100+ expected",
    description: "Connect with industry leaders and build your professional network",
  },
];

const pastEvents = [
  {
    title: "Summer Code Challenge 2024",
    date: "July 2024",
    participants: "150 participants",
    achievements: "12 innovative projects, 5 job offers",
  },
  {
    title: "Spring Hackathon 2024",
    date: "March 2024",
    participants: "180 participants",
    achievements: "15 projects, 3 startup founders",
  },
  {
    title: "Women in AI Conference",
    date: "November 2023",
    participants: "250+ attendees",
    achievements: "20+ speakers, networking with top companies",
  },
];

export const EventsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join us at our next events and be part of the change
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card p-8 hover:shadow-glow transition-all hover:-translate-y-1 animate-fade-in pixel-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-foreground">{event.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 mr-3 text-primary" />
                    <span>{event.participants}</span>
                  </div>
                </div>
                <p className="text-foreground mb-6">{event.description}</p>
                <Button className="w-full group">
                  Register Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Past Events
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Celebrating our successful events and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card p-6 border-l-4 border-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.date}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-foreground">{event.participants}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.achievements}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
