import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const sponsorTiers = {
  platinum: [
    { name: "Google", logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
    { name: "Microsoft", logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" },
  ],
  gold: [
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "Apple", logo: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png" },
  ],
  community: [
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "ETH Entrepreneur Club", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
  ],
};

const sponsorBenefits = [
  "Stage mentions during opening & closing ceremonies",
  "Logo placement on website, banners & swag",
  "Booth/table at the event for recruiting",
  "Social media shout-outs & newsletter features",
  "Access to resume book (opt-in participants)",
  "Judging slots for your team members",
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Support the next generation of women builders and get brand exposure, early talent access, and a front-row seat to innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow">
              <Download className="w-4 h-4 mr-2" />
              Get Sponsor Deck (PDF)
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Platinum */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              💎 Platinum Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {sponsorTiers.platinum.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-card hover:shadow-glow transition-all hover:-translate-y-1 p-8 w-64 h-32 flex items-center justify-center pixel-border"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Gold */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              🥇 Gold Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsorTiers.gold.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-card hover:shadow-glow transition-all hover:-translate-y-1 p-6 w-48 h-24 flex items-center justify-center pixel-border"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-6 text-primary">
              🤝 Community Partners
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {sponsorTiers.community.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg shadow-card hover:shadow-glow transition-all hover:-translate-y-1 p-4 w-40 h-20 flex items-center justify-center pixel-border"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What Sponsors Get */}
        <div className="mt-16 bg-card rounded-lg shadow-card p-8 max-w-3xl mx-auto pixel-border">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            What Sponsors Get
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {sponsorBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};