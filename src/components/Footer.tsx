import { Button } from "@/components/ui/button";
import { Instagram, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* CTA Button */}
          <Button variant="hero" size="lg" asChild>
            <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Send size={20} />
              Join on Telegram
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://t.me/tradincap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-crimson transition-colors"
              aria-label="Telegram"
            >
              <Send size={28} />
            </a>
            <a
              href="https://instagram.com/tradincap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-crimson transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
          </div>

          {/* Legal Notice */}
          <div className="text-center max-w-3xl border-t border-border pt-8">
            <h3 className="text-lg font-bold text-foreground mb-3">Risk Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trading signals and market analysis provided by Tradincap are for informational and educational purposes only. 
              They do not constitute financial advice or investment recommendations. Trading in financial markets carries 
              significant risk and may not be suitable for all investors. Past performance is not indicative of future results. 
              Please trade responsibly and never invest more than you can afford to lose.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025 Tradincap. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
