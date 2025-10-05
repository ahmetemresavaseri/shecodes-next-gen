import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can apply?",
    answer: "Women, non-binary individuals, and anyone who identifies as a woman or woman+ are welcome to apply. We encourage participants of all skill levels, from beginners to experienced developers.",
  },
  {
    question: "Do I need a team?",
    answer: "No! You can apply solo and we'll help you find teammates during the team formation session on Day 1. If you already have a team (2-4 people), you can apply together.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and your curiosity! We'll provide food, drinks, workspace, and everything else you need. Optional: sleeping bag if you plan to stay overnight.",
  },
  {
    question: "Is there an application fee?",
    answer: "No! The hackathon is completely free to attend. We want to remove all barriers for talented women to participate and build.",
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects are judged on: Innovation (30%), Technical Implementation (25%), Impact & Feasibility (25%), Presentation (20%). Bonus points for projects that address real-world problems.",
  },
  {
    question: "Can I work on an existing project?",
    answer: "No, all work must be done during the 48-hour hackathon period. However, you can use open-source libraries, APIs, and frameworks. You can also prepare by researching ideas beforehand.",
  },
  {
    question: "What if I'm a beginner?",
    answer: "Perfect! We'll have beginner-friendly workshops, mentors specifically for beginners, and starter code/templates. This is a supportive environment designed for learning.",
  },
  {
    question: "Are there prizes?",
    answer: "Yes! €10,000 total prize pool split across winning teams, track winners, and special awards. But the real prize is the community, mentorship, and portfolio project you'll build.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about participating
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg shadow-card px-6 border-none pixel-border"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
