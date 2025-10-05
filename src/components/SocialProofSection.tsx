export const SocialProofSection = () => {
  const metrics = [
    { number: "200+", label: "Applicants" },
    { number: "36", label: "Teams" },
    { number: "25", label: "Mentors" },
    { number: "12", label: "Projects Shipped" },
  ];

  const partners = [
    { name: "ETH Entrepreneur Club", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "University of Zurich", logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&h=100&fit=crop" },
    { name: "Swiss Tech Association", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {metric.number}
              </div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6">Supported By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card p-4 w-48 h-24 flex items-center justify-center hover:shadow-glow transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
