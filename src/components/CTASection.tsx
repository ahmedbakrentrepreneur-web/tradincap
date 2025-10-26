import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-glow-red">
          Ready to Transform Your Trading?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join Tradincap today and start receiving professional trading signals that drive real results
        </p>
        <Button variant="hero" size="lg" asChild className="mb-6 px-16 py-8 text-2xl">
          <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
            Join Now on Telegram
          </a>
        </Button>
        <p className="text-muted-foreground">
          Limited spots available | Annual subscription: $100
        </p>
      </div>
    </section>
  );
};

export default CTASection;
