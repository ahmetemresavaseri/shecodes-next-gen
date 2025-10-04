import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Corp",
    quote: "This hackathon changed my career trajectory. The mentorship and community I found here were invaluable.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    role: "Product Designer",
    company: "Design Studio",
    quote: "An incredible experience that connected me with amazing women in tech. I learned so much in just 48 hours!",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Data Scientist",
    company: "AI Innovations",
    quote: "The supportive environment and expert mentors helped me build confidence and skills. Highly recommend!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Participants Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from the amazing women who have participated in our events
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-card p-6 hover:shadow-glow transition-shadow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
