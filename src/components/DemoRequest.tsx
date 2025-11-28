import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Video } from "lucide-react";

export const DemoRequest = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    phone: "",
    venueType: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with actual backend API endpoint
      const response = await fetch("http://localhost:5000/api/request-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Demo request received!",
          description: "Our team will contact you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", role: "", phone: "", venueType: "", message: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="demo" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <Card className="border-2 animate-fade-in-up shadow-strong">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl">Request a Demo</CardTitle>
            <CardDescription>
              See PathFindAR in action. Schedule a personalized demo with our team.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="demo-name">Name *</Label>
                  <Input
                    id="demo-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="demo-email">Email *</Label>
                  <Input
                    id="demo-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="demo-company">Company *</Label>
                  <Input
                    id="demo-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <Label htmlFor="demo-role">Role</Label>
                  <Input
                    id="demo-role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Your role"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="demo-phone">Phone</Label>
                  <Input
                    id="demo-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 12345 67890"
                  />
                </div>

                <div>
                  <Label htmlFor="demo-venue">Venue Type</Label>
                  <Select 
                    value={formData.venueType} 
                    onValueChange={(value) => setFormData(prev => ({ ...prev, venueType: value }))}
                  >
                    <SelectTrigger id="demo-venue">
                      <SelectValue placeholder="Select venue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospital">Hospital</SelectItem>
                      <SelectItem value="airport">Airport</SelectItem>
                      <SelectItem value="mall">Shopping Mall</SelectItem>
                      <SelectItem value="university">University</SelectItem>
                      <SelectItem value="corporate">Corporate Campus</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="demo-message">Additional Information</Label>
                <Textarea
                  id="demo-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your needs..."
                  rows={3}
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Request Demo"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
