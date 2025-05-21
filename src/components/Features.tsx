
import { useEffect, useState } from "react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="h-12 w-12 rounded-lg bg-quantopurple-light flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quantopurple">
          <circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
        </svg>
      ),
      title: "Automated Bookkeeping",
      description: "Our AI scans and categorizes all your transactions automatically, eliminating manual data entry and human error."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quantopurple">
          <path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path>
        </svg>
      ),
      title: "Predictive Analytics",
      description: "Get forward-looking financial insights and cash flow forecasts based on your business's unique patterns and market trends."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quantopurple">
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
        </svg>
      ),
      title: "Smart Tax Optimization",
      description: "Continuously identify tax-saving opportunities throughout the year, not just at tax season."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quantopurple">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M8 11h8"></path><path d="M12 15V7"></path>
        </svg>
      ),
      title: "Fraud Detection",
      description: "Advanced algorithms detect unusual patterns and potential fraud, keeping your finances secure."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quantopurple">
          <rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h4"></path>
        </svg>
      ),
      title: "Compliance Monitoring",
      description: "Stay compliant with changing regulations with real-time updates and automatic adjustment of your financial records."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-quantopurple">
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
        </svg>
      ),
      title: "Financial Insights",
      description: "Transform raw data into actionable business intelligence with custom reports and dashboards."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quantoblue-dark mb-4">
            Powered by <span className="text-quantopurple">Intelligent</span> Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            QuantoBooks combines cutting-edge AI with accounting expertise to deliver a financial management solution unlike any other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={100 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
