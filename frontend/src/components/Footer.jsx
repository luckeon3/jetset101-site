import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <img 
                  src="https://customer-assets.emergentagent.com/job_flight-buddy-2/artifacts/kcvuk1fn_White%20and%20Blue%20Modern%20Travel%20Agency%20Logo.PNG" 
                  alt="JetSet 101" 
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                Empowering travelers with exclusive access to luxury travel perks and career opportunities in the travel industry.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('#membership')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Membership Benefits
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#advisor')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Advisor Program
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#how-it-works')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#testimonials')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('#faq')}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-left"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Support
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                      Brandon@jetset101.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                      323.301.3533
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <p className="text-gray-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                      4810 Serrania Ave<br />
                      Woodland Hills, CA 91364
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0" style={{ fontFamily: 'Lato, sans-serif' }}>
                © 2025 JetSet 101. All rights reserved.
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-sm text-gray-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                  IATA Accredited • Secure Payments • 24/7 Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};