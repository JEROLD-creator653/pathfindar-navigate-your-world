import { Building2, Plane, ShoppingBag, GraduationCap, Building } from "lucide-react";

const venues = [
  {
    icon: Building2,
    name: "Hospitals",
    description: "Navigate complex medical facilities with ease",
    color: "text-blue-500"
  },
  {
    icon: Plane,
    name: "Airports",
    description: "Never miss a gate or connection again",
    color: "text-cyan-500"
  },
  {
    icon: ShoppingBag,
    name: "Shopping Malls",
    description: "Find stores and amenities quickly",
    color: "text-teal-500"
  },
  {
    icon: GraduationCap,
    name: "Universities",
    description: "Navigate campus buildings and lecture halls",
    color: "text-indigo-500"
  },
  {
    icon: Building,
    name: "Corporate Campuses",
    description: "Guide employees and visitors efficiently",
    color: "text-purple-500"
  }
];

export const Venues = () => {
  return (
    <section id="venues" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Works Everywhere You Need It
          </h2>
          <p className="text-lg text-muted-foreground">
            PathFindAR supports a wide range of indoor venues and facilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {venues.map((venue, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl border-2 border-border hover:border-primary/50 
                       text-center transition-smooth hover-lift hover:shadow-medium bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-muted flex items-center justify-center
                           group-hover:scale-110 transition-bounce ${venue.color}`}>
                <venue.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">{venue.name}</h3>
              <p className="text-sm text-muted-foreground">{venue.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
