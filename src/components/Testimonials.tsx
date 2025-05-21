
import { useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "QuantoBooks has transformed our financial operations. What used to take our team days now happens automatically, and the AI insights have helped us save over $50,000 in unnecessary expenses.",
      author: "Sarah Johnson",
      title: "CFO",
      company: "TechGrowth Inc",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "As a small business owner, I never had time for proper bookkeeping. QuantoBooks changed everything—it's like having a full-time financial advisor that works 24/7.",
      author: "Michael Chen",
      title: "Founder",
      company: "Urban Designs",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The tax optimization features alone paid for a full year of service. Our accounting is now more accurate, more insightful, and completely hands-off.",
      author: "Emily Rodriguez",
      title: "Operations Director",
      company: "Frontier Logistics",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-quantoblue-dark mb-4">
            What Our <span className="text-quantopurple">Clients</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Businesses of all sizes are transforming their financial management with QuantoBooks
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            {/* Quote icon */}
            <div className="absolute top-0 left-0 -mt-6 -ml-6">
              <div className="bg-quantopurple text-white w-12 h-12 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.9999 9.5C11.9999 11.5 10.5 12.9999 8.5 12.9999C8.5 15 10.9999 16.5 12.9999 15C13.5 14.5 16.5 11 12.9999 7C9.5 11 6.5 14.5 7 15C7.83341 16.4444 10.5 15 10.5 12.9999C8.5 12.9999 7 11.5 7 9.5C7 7.5 8.5 6 10.5 6C12.5 6 11.9999 7.5 11.9999 9.5ZM17 12.9999C15 12.9999 13.5 11.5 13.5 9.5C13.5 7.5 15 6 17 6C19 6 18.4999 7.5 18.4999 9.5C18.4999 11.5 17 12.9999 15 12.9999C15 15 17.4999 16.5 19.4999 15C20 14.5 23 11 19.4999 7C16 11 13 14.5 13.5 15C14.3334 16.4444 17 15 17 12.9999Z"></path>
                </svg>
              </div>
            </div>

            {/* Testimonial content */}
            <div className="relative">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].title}, {testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute bottom-5 right-8 flex space-x-3">
              <button 
                onClick={prevTestimonial}
                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-quantopurple" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <div className="h-8 w-32 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
