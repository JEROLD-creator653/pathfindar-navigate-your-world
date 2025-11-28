import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Rocket, ArrowRight } from "lucide-react";

export const EarlyAccess = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    userType: "individual"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with actual backend API endpoint
      const response = await fetch("http://localhost:5000/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "You're on the list! 🎉",
          description: `Position #${data.data?.position || "reserved"}. We'll notify you when we launch.`,
        });
        setFormData({ email: "", name: "", userType: "individual" });
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="early-access" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-hero opacity-10 animate-gradient" 
           style={{ backgroundSize: "200% 200%" }} />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="border-2 border-primary/50 shadow-glow animate-fade-in-up">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-primary mb-6 animate-pulse-glow">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Get Early Access
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be among the first to experience stress-free indoor navigation. 
                Sign up now and get exclusive launch benefits.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <div>
                <Label htmlFor="ea-name">Name</Label>
                <Input
                  id="ea-name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="ea-email">Email *</Label>
                <Input
                  id="ea-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  placeholder="your@email.com"
                  className="h-12"
                />
              </div>

              <div>
                <Label className="mb-3 block">I am a...</Label>
                <RadioGroup 
                  value={formData.userType} 
                  onValueChange={(value) => setFormData(prev => ({ ...prev, userType: value }))}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="font-normal cursor-pointer">
                      Individual user
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business" className="font-normal cursor-pointer">
                      Business / Organization
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full group"
                disabled={loading}
              >
                {loading ? "Joining..." : "Join the Waitlist"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                By signing up, you agree to receive updates about PathFindAR. 
                Unsubscribe anytime.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
