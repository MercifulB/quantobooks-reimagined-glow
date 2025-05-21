
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white to-blue-50 pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3)_0%,rgba(255,255,255,0)_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.4)_0%,rgba(255,255,255,0)_60%)]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 md:pr-8 mb-12 md:mb-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-quantoblue-dark leading-tight mb-6">
            Accounting Powered by <span className="text-quantopurple">AI Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            QuantoBooks combines artificial intelligence with accounting expertise to automate your finances, uncover insights, and save you time and money.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-quantopurple hover:bg-quantopurple-dark text-white text-lg px-8 py-6 rounded-lg">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-quantoblue text-quantoblue hover:bg-quantoblue hover:text-white text-lg px-8 py-6 rounded-lg">
              Schedule Demo
            </Button>
          </div>
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-gray-400">
                    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-900">Trusted by 2,000+ businesses</p>
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
                <p className="ml-2 text-sm text-gray-700">4.9/5 rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image/Illustration */}
        <div className="md:w-1/2 relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quantopurple-light rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: "0s" }}></div>
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
            
            {/* Dashboard mockup */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 w-full aspect-[4/3] transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Financial Dashboard</h3>
                    <p className="text-sm text-gray-500">May 2025</p>
                  </div>
                  <div className="bg-quantopurple text-white text-xs px-3 py-1 rounded-full">AI-Powered</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Revenue</span>
                      <span className="text-sm font-bold text-green-500">+12.5%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Expenses</span>
                      <span className="text-sm font-bold text-red-500">-3.2%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-quantopurple-light p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-quantopurple flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/><path d="M12 16.5v-11"/><path d="M7 7.8l5 2.7"/><path d="M17 7.8l-5 2.7"/>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-xs text-quantopurple font-semibold">AI INSIGHT</p>
                        <p className="text-sm text-gray-700">Cut software subscriptions to save $1,245/month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
