import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Tradincap?",
      answer: "Tradincap is a professional trading signals service that provides real-time market analysis, trading alerts, and expert insights to help traders make informed decisions. We deliver signals directly to your Telegram for instant access."
    },
    {
      question: "How much does it cost?",
      answer: "Our annual subscription is $100, giving you unlimited access to all trading signals, market analysis, and our exclusive Telegram community for an entire year. That's less than $0.30 per day!"
    },
    {
      question: "What is your success rate?",
      answer: "We maintain a 92% success rate across all our trading signals. This means that 92 out of 100 signals reach their profit targets. However, past performance does not guarantee future results, and all trading involves risk."
    },
    {
      question: "Which markets do you cover?",
      answer: "We provide signals for Forex (major and minor pairs), Cryptocurrencies (BTC, ETH, and major altcoins), Stocks, Commodities (Gold, Oil), and Indices. Our diverse coverage ensures you never miss profitable opportunities."
    },
    {
      question: "How do I receive signals?",
      answer: "All signals are delivered instantly via Telegram. Once you subscribe, you'll receive an invitation to our exclusive members-only channel where signals are posted in real-time with clear entry points, stop loss, and take profit levels."
    },
    {
      question: "What information is included in each signal?",
      answer: "Each signal includes: Asset/Pair, Trade Direction (Buy/Sell), Entry Price, Stop Loss Level, Multiple Take Profit Targets, Risk/Reward Ratio, Market Analysis, and Trade Duration Estimate."
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Since we offer an annual subscription, there are no automatic renewals or recurring charges. After your year is complete, you can choose to renew or not. We do not offer refunds after the first 7 days."
    },
    {
      question: "Do you offer a trial period?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with our service within the first 7 days, contact us for a full refund. This allows you to test our signals risk-free."
    },
    {
      question: "What trading experience do I need?",
      answer: "Our signals are designed for traders of all levels. Beginners can follow signals exactly as provided, while experienced traders can use them as part of their broader strategy. We also provide educational content to help you understand the analysis behind each signal."
    },
    {
      question: "How many signals do you send per day?",
      answer: "We typically send 3-7 high-quality signals per day, depending on market conditions. We focus on quality over quantity, only sharing opportunities that meet our strict criteria."
    },
    {
      question: "What are the risks of trading?",
      answer: "Trading involves significant risk and may not be suitable for all investors. You could lose some or all of your invested capital. Never invest more than you can afford to lose. Our signals are for educational purposes and do not constitute financial advice."
    },
    {
      question: "How do I get support?",
      answer: "Our support team is available via Telegram. Premium members have direct access to our support channel where questions are typically answered within a few hours during business days."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground text-glow-red">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Everything you need to know about Tradincap
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden bg-accent/10 hover:border-crimson/50 transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-accent/20 transition-colors"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`text-crimson flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed animate-slide-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-accent/20">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Still Have Questions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our Telegram community and get all your questions answered by our support team.
          </p>
          <Button variant="hero" size="lg" asChild className="px-12 py-6 text-xl">
            <a href="https://t.me/tradincap" target="_blank" rel="noopener noreferrer">
              Join Now — $100/Year
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
