import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import tradincapLogo from "@/assets/tradincap-logo.jpg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 md:gap-3">
            <img 
              src={tradincapLogo} 
              alt="Tradincap Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain" 
            />
            <span className="text-xl md:text-2xl font-bold text-foreground">
              Tradincap
            </span>
          </a>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" asChild>
              <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
                Join on Telegram
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <Button 
              variant="hero" 
              size="lg" 
              asChild 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
                Join on Telegram
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
