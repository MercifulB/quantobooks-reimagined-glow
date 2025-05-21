
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Connect Your Accounts",
      description: "Securely connect your bank accounts, credit cards, and financial platforms. Our bank-level encryption keeps your data safe.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "person connecting financial accounts on laptop"
    },
    {
      title: "AI Analyzes Your Finances",
      description: "Our AI reviews your financial history, identifies patterns, and builds a personalized financial model for your business.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "AI analyzing financial data visualization"
    },
    {
      title: "Get Actionable Insights",
      description: "Receive customized recommendations, alerts, and forecasts to optimize your business finances and growth opportunities.",
      image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "business person reviewing financial insights"
    },
    {
      title: "Continuous Improvement",
      description: "As your business evolves, our AI adapts and improves its recommendations, becoming smarter and more valuable over time.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "business team reviewing financial results"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-quantogrey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quantoblue-dark mb-4">
            How <span className="text-quantoblue">QuantoBooks</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple process that transforms your financial management with artificial intelligence
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Steps navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-6">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex items-start mb-6 p-4 rounded-lg cursor-pointer transition-all ${
                    activeStep === index ? "bg-quantoblue-light" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`
                    h-8 w-8 rounded-full flex items-center justify-center text-white font-medium shrink-0 mr-4
                    ${activeStep === index ? 'bg-quantoblue' : 'bg-quantogrey'}
                  `}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-1 ${activeStep === index ? 'text-quantoblue' : 'text-gray-800'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {activeStep === index && step.description}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <Button className="w-full bg-quantoblue hover:bg-quantoblue-dark text-white">
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>

          {/* Visual representation */}
          <div className="lg:w-2/3">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 h-[400px]">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{steps[activeStep].title}</h3>
                  <p>{steps[activeStep].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
