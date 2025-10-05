export const SponsorsSection = () => {
  const sponsors = [
    { name: "EY", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/EY_Logo_2019.svg/2560px-EY_Logo_2019.svg.png", isComingSoon: false },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
    { name: "Coming Soon", logo: "", isComingSoon: true },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Backed by Industry Leaders
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="w-full h-24 flex items-center justify-center bg-card rounded-lg shadow-card hover:shadow-glow transition-all hover:-translate-y-1 p-4"
            >
              {sponsor.isComingSoon ? (
                <span className="text-muted-foreground font-medium">Coming Soon</span>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};