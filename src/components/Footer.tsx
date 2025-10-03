import { Heart, Github, Twitter, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t-4 border-primary bg-card/50 scanlines">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-base font-pixel text-primary pixel-text">
              WOMENTECH
            </h3>
            <p className="text-xs text-muted-foreground font-mono">
              EMPOWER.WOMEN();
              <br />
              IN_TECH = TRUE;
            </p>
          </div>
          
          <div>
            <h4 className="font-pixel text-xs mb-4 text-primary">LINKS</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-mono">
              <li><a href="#" className="hover:text-primary transition-colors">&gt; ABOUT_US</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">&gt; PAST_EVENTS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">&gt; SPONSORS</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">&gt; FAQ.TXT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-pixel text-xs mb-4 text-primary">JOIN_US</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-mono">
              <li><a href="#" className="hover:text-primary transition-colors">&gt; PARTICIPATE()</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">&gt; MENTOR.EXE</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">&gt; SPONSOR++</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">&gt; VOLUNTEER</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-pixel text-xs mb-4 text-primary">SOCIALS</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 pixel-border bg-background flex items-center justify-center hover:bg-primary hover:text-background transition-all hover:animate-pixel-bounce">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 pixel-border bg-background flex items-center justify-center hover:bg-primary hover:text-background transition-all hover:animate-pixel-bounce">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 pixel-border bg-background flex items-center justify-center hover:bg-primary hover:text-background transition-all hover:animate-pixel-bounce">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t-4 border-primary pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
          <p>&copy; 2025 WOMENTECH_HACKATHON.EXE</p>
          <p className="flex items-center gap-2">
            MADE_WITH <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" /> FOR WOMEN_IN_TECH
          </p>
        </div>
      </div>
    </footer>
  );
};
