import React, { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Membership', href: '#membership' },
    { label: 'Become Advisor', href: '#advisor' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Our Story', href: '#story' },
    { label: 'FAQ', href: '#faq' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="https://customer-assets.emergentagent.com/job_travel-advisor-hub/artifacts/phv4p36p_White%20and%20Blue%20Modern%20Travel%20Agency%20Logo.PNG" 
              alt="JetSet 101 Logo" 
              className="h-12 w-auto"
            />
            <span className="font-bold text-xl" style={{ color: '#1A1A1A' }}>JetSet 101</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-[#003F5F] transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection('#advisor')}
              className="border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white transition-all duration-200"
            >
              Become Advisor
            </Button>
            <Button
              onClick={() => scrollToSection('#membership')}
              style={{ backgroundColor: '#FF6B6B' }}
              className="hover:opacity-90 transition-opacity duration-200"
            >
              Join Membership
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-lg font-medium text-gray-700 hover:text-[#003F5F] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection('#advisor')}
                    className="border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white"
                  >
                    Become Advisor
                  </Button>
                  <Button
                    onClick={() => scrollToSection('#membership')}
                    style={{ backgroundColor: '#FF6B6B' }}
                    className="hover:opacity-90"
                  >
                    Join Membership
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};