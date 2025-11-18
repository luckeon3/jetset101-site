import React from 'react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { mockData } from '../mock';

export const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openCalendly = () => {
    window.open(mockData.calendlyUrl, '_blank');
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
                className="h-10 w-auto object-contain"
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
              <a
                href="https://instagram.com/jetset.101"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] transition-all duration-200 flex items-center justify-center"
                aria-label="Visit JetSet 101 on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@jetset.101"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-black transition-colors duration-200 flex items-center justify-center"
                aria-label="Visit JetSet 101 on TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Travel Perks', href: '#membership' },
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
                  <button 
                    onClick={openCalendly}
                    className="text-gray-300 hover:text-[#00BFA6] transition-colors duration-200"
                  >
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
                <a href={`mailto:${mockData.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {mockData.contact.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" style={{ color: '#00BFA6' }} />
                <a href={`tel:${mockData.contact.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {mockData.contact.phone}
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1" style={{ color: '#00BFA6' }} />
                <span className="text-gray-300">
                  {mockData.contact.address}
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
              onClick={openCalendly}
              className="text-white font-semibold px-8 py-3"
              style={{ backgroundColor: '#00BFA6' }}
            >
              Access Benefits
            </Button>
            <Button
              onClick={openCalendly}
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