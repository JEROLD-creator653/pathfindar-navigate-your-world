import { Navigation, MapPin, Layers, Route, Smartphone, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import arArrow from "@/assets/ar-arrow-navigation.png";
import arIndoorNav from "@/assets/ar-indoor-navigation-hero.png";

const features = [
  {
    icon: Navigation,
    title: "Real-time AR Navigation",
    description: "Visual arrows and directions overlaid on your camera view guide you step-by-step to your destination.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: MapPin,
    title: "Indoor Positioning",
    description: "Accurate location tracking using Bluetooth beacons and WiFi triangulation technology.",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    icon: Layers,
    title: "Multi-level Support",
    description: "Seamlessly navigate across floors with elevator and stair guidance in complex buildings.",
    gradient: "from-teal-500 to-emerald-500"
  },
  {
    icon: Route,
    title: "Personalized Routes",
    description: "Customize paths based on accessibility needs, preferences, and real-time conditions.",
    gradient: "from-blue-600 to-indigo-500"
  },
  {
    icon: Smartphone,
    title: "Easy to Use",
    description: "Simple, intuitive interface that works on any smartphone. No special hardware required.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant route calculation and real-time updates as you move through the space.",
    gradient: "from-purple-500 to-pink-500"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"> Effortless Navigation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the future of indoor wayfinding with cutting-edge AR technology
          </p>
        </div>
        
        {/* Visual showcase */}
        <div className="max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-8 items-center animate-fade-in-up">
          <div className="relative rounded-2xl overflow-hidden shadow-strong hover-lift">
            <img 
              src={arIndoorNav} 
              alt="AR indoor navigation visualization showing directional overlays" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <img src={arArrow} alt="Navigation arrow" className="w-6 h-6" />
              <span className="text-sm font-medium text-primary">AR-Powered Guidance</span>
            </div>
            <h3 className="text-3xl font-bold">Navigate with Confidence</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our AR technology overlays intuitive directional arrows and markers directly onto your camera view, 
              making indoor navigation as simple as following the path illuminated before you.
            </p>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-2 hover:border-primary/50 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-4 
                              transform group-hover:scale-110 group-hover:rotate-3 transition-bounce`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
