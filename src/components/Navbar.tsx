import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import tradincapLogo from "@/assets/tradincap-logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img src={tradincapLogo} alt="Tradincap Logo" className="h-12 w-12 object-contain" />
          <span className="text-2xl font-bold text-foreground">Tradincap</span>
        </a>
        <Button variant="hero" size="lg" asChild>
          <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
            Join on Telegram
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
