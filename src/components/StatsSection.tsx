import tradingDesk from "@/assets/trading-desk.jpg";

const stats = [
  { value: "5,000+", label: "Active Members" },
  { value: "92%", label: "Success Rate" },
  { value: "500+", label: "Daily Signals" },
  { value: "24/7", label: "Market Coverage" },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <img
          src={tradingDesk}
          alt="Professional Trading Environment"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-6xl font-bold text-crimson text-glow-red mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
