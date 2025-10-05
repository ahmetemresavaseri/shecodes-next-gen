import { Sparkles } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent">
            What Our Participants Say
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Participant statements coming soon
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-xl md:rounded-2xl p-8 md:p-12 shadow-glow border border-primary/20 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-primary flex items-center justify-center animate-pulse">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
              Your Story Could Be Here
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Be part of our first cohort and share your experience of building, learning, and growing with HerCode. Amazing testimonials coming soon from our community members!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
