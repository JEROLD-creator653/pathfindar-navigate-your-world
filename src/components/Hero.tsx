import { Button } from "@/components/ui/button";
import { ArrowRight, Navigation, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 gradient-hero animate-gradient opacity-20 dark:opacity-30" 
           style={{ backgroundSize: "200% 200%" }} />
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-scale-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Next-Gen Indoor Navigation</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Navigate Indoor Spaces{" "}
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Stress-Free with AR
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Real-time AR guidance through hospitals, airports, malls, and more. 
            Never get lost in complex buildings again.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("early-access")}
              className="group"
            >
              <Navigation className="w-5 h-5" />
              Get Early Access
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("demo")}
            >
              Request Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-border/50">
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">61%</div>
              <p className="text-sm text-muted-foreground mt-1">Face Navigation Challenges</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">₹13M</div>
              <p className="text-sm text-muted-foreground mt-1">Target Revenue by Year 3</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent">5+</div>
              <p className="text-sm text-muted-foreground mt-1">Venue Types Supported</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
