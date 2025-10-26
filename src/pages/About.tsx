import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-glow-red">
            About Tradincap
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Your trusted partner in professional trading signals and market analysis
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            At Tradincap, we empower traders worldwide with professional-grade trading signals, 
            real-time market analysis, and expert insights. Our mission is to democratize access 
            to high-quality trading intelligence that was once available only to institutional investors.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that success in trading comes from a combination of knowledge, discipline, 
            and timely information. That's why we've built a community of elite traders who share 
            insights and strategies to help each other succeed.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
            Why Choose Tradincap?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-accent/10 rounded-lg border border-border hover:border-crimson transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-crimson/20 rounded-lg">
                  <TrendingUp className="text-crimson" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">92% Success Rate</h3>
              </div>
              <p className="text-muted-foreground">
                Our signals have consistently delivered a 92% success rate, helping traders 
                maximize their profits and minimize risks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-accent/10 rounded-lg border border-border hover:border-crimson transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-crimson/20 rounded-lg">
                  <Users className="text-crimson" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">5,000+ Active Traders</h3>
              </div>
              <p className="text-muted-foreground">
                Join a thriving community of over 5,000 active traders who trust Tradincap 
                for their daily trading decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-accent/10 rounded-lg border border-border hover:border-crimson transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-crimson/20 rounded-lg">
                  <Award className="text-crimson" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Expert Analysis</h3>
              </div>
              <p className="text-muted-foreground">
                Our team of professional analysts provides in-depth market analysis and 
                actionable insights to guide your trading decisions.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 bg-accent/10 rounded-lg border border-border hover:border-crimson transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-crimson/20 rounded-lg">
                  <Shield className="text-crimson" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Real-Time Alerts</h3>
              </div>
              <p className="text-muted-foreground">
                Never miss an opportunity with our instant Telegram alerts delivered 
                directly to your device 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of successful traders and start receiving professional signals today.
          </p>
          <Button variant="hero" size="lg" asChild className="px-12 py-6 text-xl">
            <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
              Join on Telegram — $100/Year
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
