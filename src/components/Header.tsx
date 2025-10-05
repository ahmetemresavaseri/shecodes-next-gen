import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Mission", id: "mission" },
    { label: "Events", id: "events" },
    { label: "Benefits", id: "benefits" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Sponsors", id: "sponsors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b-2 border-primary shadow-pixel"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-xl font-pixel text-primary cursor-pointer hover:text-secondary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {"<HerCode />"}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-pixel text-xs uppercase relative group"
              >
                [{item.label}]
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full pixel-border border-t-0 border-l-0 border-r-0" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              variant="hero"
            >
              [Join Now]
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary pixel-border p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 animate-fade-in pixel-border border-t-2 border-primary mt-2 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-pixel text-xs uppercase"
              >
                [{item.label}]
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              variant="hero"
              className="w-full"
            >
              [Join Now]
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};
