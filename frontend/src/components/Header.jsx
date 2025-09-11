import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_flight-buddy-2/artifacts/kcvuk1fn_White%20and%20Blue%20Modern%20Travel%20Agency%20Logo.PNG" 
              alt="JetSet 101" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('#membership')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection('#advisor')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Become Advisor
            </button>
            <button
              onClick={() => scrollToSection('#how-it-works')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('#testimonials')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection('#faq')}
              className="text-gray-700 hover:text-yellow-600 font-medium transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full transition-all duration-200 transform hover:scale-105"
              onClick={() => scrollToSection('#membership')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('#membership')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left"
              >
                Membership
              </button>
              <button
                onClick={() => scrollToSection('#advisor')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left"
              >
                Become Advisor
              </button>
              <button
                onClick={() => scrollToSection('#how-it-works')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('#testimonials')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left"
              >
                Success Stories
              </button>
              <button
                onClick={() => scrollToSection('#faq')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left"
              >
                FAQ
              </button>
              <Button 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-full mt-2 w-fit"
                onClick={() => scrollToSection('#membership')}
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};