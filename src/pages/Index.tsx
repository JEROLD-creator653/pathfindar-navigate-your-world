import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Venues } from "@/components/Venues";
import { Pricing } from "@/components/Pricing";
import { DemoRequest } from "@/components/DemoRequest";
import { EarlyAccess } from "@/components/EarlyAccess";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Venues />
        <Pricing />
        <DemoRequest />
        <EarlyAccess />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
