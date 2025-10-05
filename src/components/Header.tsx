import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

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
    { label: "Our Events", id: "events" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Become a Partner", id: "sponsors" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          <div 
            className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-lg sm:text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary animate-pulse" />
            <span>HerCode</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary animate-pulse" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base text-foreground/80 hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="shadow-glow text-xs sm:text-sm lg:text-base px-3 sm:px-4"
              size="sm"
            >
              <span className="hidden sm:inline">Become a Member</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-2 text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("cta")}
              className="w-full shadow-glow"
              size="sm"
            >
              Become a Member
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};