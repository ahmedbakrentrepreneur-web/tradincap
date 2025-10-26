import { Card, CardContent } from "@/components/ui/card";
import chartIcon from "@/assets/chart-icon.jpg";
import alertsIcon from "@/assets/alerts-icon.jpg";
import supportIcon from "@/assets/support-icon.jpg";
import { TrendingUp, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    image: chartIcon,
    title: "Professional Analysis",
    description: "Expert market analysis with detailed technical indicators and precise entry/exit points",
  },
  {
    icon: Zap,
    image: alertsIcon,
    title: "Real-Time Alerts",
    description: "Instant Telegram notifications for every signal — never miss a profitable opportunity",
  },
  {
    icon: Headphones,
    image: supportIcon,
    title: "24/7 Support",
    description: "Dedicated support team available to help you maximize your trading potential",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground text-glow-red">
            Why Choose Tradincap?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional trading signals delivered with precision and accuracy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-secondary border-border hover:border-crimson transition-all duration-300 hover:glow-red overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-crimson p-3 rounded-lg glow-red">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
