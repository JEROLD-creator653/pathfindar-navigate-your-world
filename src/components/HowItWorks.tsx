import { Smartphone, MapPin, Navigation, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Open the App",
    description: "Launch PathFindAR and allow camera access for AR navigation"
  },
  {
    icon: MapPin,
    title: "Set Your Destination",
    description: "Search for your destination or select from venue directory"
  },
  {
    icon: Navigation,
    title: "Follow AR Arrows",
    description: "Visual overlays guide you turn-by-turn in real-time"
  },
  {
    icon: CheckCircle,
    title: "Arrive Stress-Free",
    description: "Reach your destination without confusion or anxiety"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting started with PathFindAR is simple and intuitive
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                )}
                
                {/* Step content */}
                <div className="text-center">
                  {/* Step number badge */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary mb-4 
                                relative shadow-medium hover:shadow-glow transition-smooth">
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-secondary-foreground 
                                  flex items-center justify-center font-bold text-sm shadow-soft">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
