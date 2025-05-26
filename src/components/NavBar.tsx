
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="public/quanto-logo.webp" 
              alt="QuantoBooks Logo" 
              className="h-10 w-auto mr-2" 
            />
            <span className="text-2xl font-bold text-quantoblue">Quanto<span className="text-quantogrey-dark">Books</span></span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-quantoblue transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-quantoblue transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-quantoblue transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-quantoblue transition-colors">
            Pricing
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-quantoblue text-quantoblue hover:bg-quantoblue hover:text-white">
            Log In
          </Button>
          <Button className="bg-quantoblue hover:bg-quantoblue-dark text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-quantoblue py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-quantoblue py-2" onClick={() => setIsMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-quantoblue py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-quantoblue py-2" onClick={() => setIsMobileMenuOpen(false)}>
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-quantoblue text-quantoblue hover:bg-quantoblue hover:text-white w-full">
                Log In
              </Button>
              <Button className="bg-quantoblue hover:bg-quantoblue-dark text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
