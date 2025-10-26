import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Michael Chen",
    role: "Day Trader",
    text: "Best trading signals I've ever used. The accuracy is outstanding and the alerts are always on time.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    role: "Forex Trader",
    text: "Tradincap completely transformed my trading strategy. The support team is incredibly helpful.",
    rating: 5,
  },
  {
    name: "Ahmed Hassan",
    role: "Crypto Investor",
    text: "Professional analysis with clear entry and exit points. Highly recommend to serious traders.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Swing Trader",
    text: "The daily signals are precise and the Telegram alerts keep me updated wherever I am.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Options Trader",
    text: "Worth every penny. The quality of analysis and speed of delivery is unmatched.",
    rating: 5,
  },
  {
    name: "Yuki Tanaka",
    role: "Technical Analyst",
    text: "Exceptional service with consistent results. The team really knows the markets.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Trusted by Traders Worldwide
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of successful traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-secondary border-border hover:border-crimson transition-all duration-300 hover:glow-red animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-crimson text-crimson" />
                  ))}
                </div>
                <p className="text-lg text-foreground mb-4">&ldquo;{review.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
