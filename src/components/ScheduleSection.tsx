import { Clock } from "lucide-react";

const schedule = {
  day1: {
    title: "Day 1 - Friday, Oct 25",
    events: [
      { time: "17:00", title: "Check-in & Registration", highlight: false },
      { time: "18:00", title: "Opening Ceremony", highlight: true },
      { time: "18:30", title: "Team Forming & Networking", highlight: false },
      { time: "19:00", title: "Hacking Begins!", highlight: true },
      { time: "20:00", title: "Mentoring Sessions Available", highlight: false },
      { time: "21:00", title: "Lightning Talks", highlight: false },
    ],
  },
  day2: {
    title: "Day 2 - Saturday, Oct 26",
    events: [
      { time: "09:00", title: "Breakfast & Morning Mentoring", highlight: false },
      { time: "12:00", title: "Lunch Break", highlight: false },
      { time: "15:00", title: "Hacking Continues", highlight: false },
      { time: "17:00", title: "Submissions Deadline", highlight: true },
      { time: "17:30", title: "Project Demos", highlight: true },
      { time: "19:00", title: "Awards Ceremony", highlight: true },
      { time: "20:00", title: "Networking & Closing", highlight: false },
    ],
  },
};

export const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your 48-hour journey from idea to shipped product
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Day 1 */}
          <div className="bg-card rounded-lg shadow-card p-6 pixel-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{schedule.day1.title}</h3>
            <div className="space-y-4">
              {schedule.day1.events.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-3 rounded-lg transition-all ${
                    event.highlight
                      ? "bg-primary/10 border border-primary/20 font-semibold"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-[80px]">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{event.time}</span>
                  </div>
                  <p className={event.highlight ? "text-primary" : "text-foreground"}>
                    {event.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div className="bg-card rounded-lg shadow-card p-6 pixel-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">{schedule.day2.title}</h3>
            <div className="space-y-4">
              {schedule.day2.events.map((event, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-3 rounded-lg transition-all ${
                    event.highlight
                      ? "bg-primary/10 border border-primary/20 font-semibold"
                      : "bg-muted/50"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-[80px]">
                    <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{event.time}</span>
                  </div>
                  <p className={event.highlight ? "text-primary" : "text-foreground"}>
                    {event.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
