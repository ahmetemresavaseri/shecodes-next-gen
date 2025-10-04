import { Quote } from "lucide-react";

export const StorySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Our Story
            </h2>
          </div>
          
          <div className="bg-card rounded-lg shadow-card p-8 md:p-12 mb-8">
            <Quote className="w-12 h-12 text-primary mb-6" />
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
              "At my first hackathon, only a few women were in the room. This initiative was created to change that — making tech spaces where women feel welcome and empowered."
            </blockquote>
            <cite className="text-muted-foreground font-medium">— Founder</cite>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shine-dot">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="text-muted-foreground">
                A tech industry where women are equally represented and empowered to lead innovation.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shine-dot">
                  <span className="text-2xl font-bold text-white">M</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="text-muted-foreground">
                Provide opportunities and mentorship that enable women to thrive in tech careers.
              </p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center shine-dot">
                  <span className="text-2xl font-bold text-white">V</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Values</h3>
              <p className="text-muted-foreground">
                Inclusion, innovation, and building a community that lifts everyone up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
