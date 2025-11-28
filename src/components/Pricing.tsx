import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Perfect for trying out PathFindAR",
    features: [
      "Basic AR navigation",
      "Up to 5 saved locations",
      "Standard support",
      "Limited to 3 venues",
      "Ad-supported"
    ],
    limitations: ["Ads included", "Basic features only"],
    highlighted: false,
    cta: "Get Started"
  },
  {
    name: "Premium",
    price: "₹299",
    period: "/month",
    description: "For frequent users who want the full experience",
    features: [
      "Unlimited AR navigation",
      "Unlimited saved locations",
      "Priority support",
      "Access to all venues",
      "Offline maps",
      "Personalized routes",
      "Ad-free experience"
    ],
    limitations: [],
    highlighted: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations implementing at scale",
    features: [
      "Custom venue integration",
      "White-label solution",
      "API access",
      "Analytics dashboard",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom branding"
    ],
    limitations: [],
    highlighted: false,
    cta: "Contact Sales"
  }
];

export const Pricing = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that's right for you. Upgrade or downgrade anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden animate-fade-in-up transition-smooth ${
                plan.highlighted 
                  ? "border-2 border-primary shadow-glow scale-105" 
                  : "border-2 hover:border-primary/50 hover-lift"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 gradient-primary text-primary-foreground 
                              px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <Button 
                  variant={plan.highlighted ? "hero" : "outline"}
                  size="lg"
                  className="w-full mb-6"
                  onClick={() => scrollToSection(plan.name === "Enterprise" ? "demo" : "early-access")}
                >
                  {plan.cta}
                </Button>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
