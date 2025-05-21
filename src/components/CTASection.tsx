
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-quantoblue-dark to-quantoblue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses using QuantoBooks to automate their accounting, uncover insights, and drive growth.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/20">
            <div className="flex flex-col md:flex-row justify-center gap-8">
              <div className="flex-1 bg-white/10 rounded-lg p-6 backdrop-blur-sm text-left">
                <h3 className="text-xl font-semibold mb-4">Standard Plan</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-lg">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Automated bookkeeping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Basic insights & reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Connect up to 5 accounts</span>
                  </li>
                </ul>
                <Button className="w-full bg-white text-quantoblue hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </div>
              
              <div className="flex-1 bg-white rounded-lg p-6 text-quantoblue-dark text-left relative">
                <div className="absolute -top-4 right-4 bg-quantoblue text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-lg text-gray-600">/month</span>
                </div>
                <ul className="space-y-2 mb-6 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Everything in Standard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Advanced AI insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Tax optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-500">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span>Unlimited accounts</span>
                  </li>
                </ul>
                <Button className="w-full bg-quantoblue hover:bg-quantoblue-dark text-white">
                  Start Free Trial
                </Button>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70">
              All plans include a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
