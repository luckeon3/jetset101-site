import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#1A1A1A] to-[#003F5F] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_travel-advisor-hub/artifacts/phv4p36p_White%20and%20Blue%20Modern%20Travel%20Agency%20Logo.PNG" 
                alt="JetSet 101 Logo" 
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">JetSet 101</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              IATA-accredited travel platform redefining access to professional travel benefits and advisor opportunities.
            </p>
            
            {/* IATA Badge */}
            <div className="flex items-center bg-white/10 rounded-lg px-4 py-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_travel-advisor-hub/artifacts/8nnhc2f1_iatan-pms541-300.jpg" 
                alt="IATA Accredited" 
                className="h-8 w-auto mr-3"
              />
              <div>
                <div className="text-sm font-semibold">IATA Accredited</div>
                <div className="text-xs text-gray-300">Professional Travel Agency</div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-colors duration-200 flex items-center justify-center">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-colors duration-200 flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-colors duration-200 flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00BFA6] transition-colors duration-200 flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Membership Benefits', href: '#membership' },
                { label: 'Become Advisor', href: '#advisor' },
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'Our Story', href: '#story' },
                { label: 'FAQ', href: '#faq' }
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-[#00BFA6] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Support
            </h3>
            <ul className="space-y-3">
              {[
                'Help Center',
                'Contact Support',
                'Travel Resources',
                'Advisor Training',
                'IATA Advocacy'
              ].map((item) => (
                <li key={item}>
                  <button className="text-gray-300 hover:text-[#00BFA6] transition-colors duration-200">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Get in Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" style={{ color: '#00BFA6' }} />
                <span className="text-gray-300">support@jetset101.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#00BFA6' }} />
                <span className="text-gray-300">1-800-JETSET1</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" style={{ color: '#00BFA6' }} />
                <span className="text-gray-300">
                  123 Travel Plaza<br />
                  Adventure City, AC 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Quick CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Access Professional Travel Benefits?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our IATA-accredited platform for exclusive industry access and advisor opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('#membership')}
              className="text-white font-semibold px-8 py-3"
              style={{ backgroundColor: '#FF6B6B' }}
            >
              Access Benefits
            </Button>
            <Button
              onClick={() => scrollToSection('#advisor')}
              variant="outline"
              className="border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white px-8 py-3"
            >
              Become Advisor
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 JetSet 101. All rights reserved. IATA Accredited Travel Agency.
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              Cookie Policy
            </button>
            <button className="text-gray-400 hover:text-white transition-colors duration-200">
              IATA Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};