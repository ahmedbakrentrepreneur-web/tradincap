import { Button } from "@/components/ui/button";
import heroWolf from "@/assets/hero-wolf.jpg";
import { useEffect, useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create floating particles
    const container = containerRef.current;
    if (!container) return;

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 8}s`;
      particle.style.setProperty("--drift", `${(Math.random() - 0.5) * 100}`);
      container.appendChild(particle);
    }

    return () => {
      const particles = container.querySelectorAll(".particle");
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0" 
      ref={containerRef}
    >
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
        <img
          src={heroWolf}
          alt="Tradincap - Professional Trading Signals"
          className="w-full h-full object-cover animate-fade-in"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center animate-slide-up">
        {/* Main Heading - Responsive */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-foreground text-glow-red leading-tight">
          Master the Markets with Tradincap
        </h1>
        
        {/* Quote - Responsive */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-muted-foreground italic max-w-3xl mx-auto px-4">
          "Success is not an accident — it's a decision you make every day."
        </p>

        {/* Description - Responsive */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-foreground max-w-2xl mx-auto px-4">
          Join elite traders receiving daily signals, instant alerts, and professional market analysis
        </p>

        {/* CTA Button - Responsive */}
        <Button 
          variant="hero" 
          size="lg" 
          asChild 
          className="mb-4 px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl w-full sm:w-auto"
        >
          <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
            Start Trading Now — Join on Telegram
          </a>
        </Button>

        {/* Price Info - Responsive */}
        <p className="text-xs sm:text-sm text-muted-foreground px-4">
          Annual Subscription: $100 | Limited Spots Available
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
