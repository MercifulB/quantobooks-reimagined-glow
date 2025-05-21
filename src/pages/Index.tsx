
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "QuantoBooks - AI-Powered Accounting Solutions";
  }, []);
  
  return (
    <div className="min-h-screen w-full">
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
