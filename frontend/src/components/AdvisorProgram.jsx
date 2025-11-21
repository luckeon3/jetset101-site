import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { TrendingUp, GraduationCap, Headphones, Globe, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  TrendingUp,
  GraduationCap,
  Headphones,
  Globe
};

export const AdvisorProgram = () => {
  const openCalendly = () => {
    window.open(mockData.calendlyUrl, '_blank');
  };

  return (
    <section id="advisor" className="py-20" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#00BFA6' }}>
              Travel Advisor Program
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Build Your Travel Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Turn your passion for travel into a profitable business with our industry-leading 80% commission split and comprehensive support system.
            </p>
          </div>

          {/* Commission Highlight */}
          <div className="bg-gradient-to-r from-[#00BFA6] to-[#003F5F] rounded-2xl p-8 mb-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              80% Commission Split
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Keep 80% of all commissions you generate - the highest in the industry
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">$1,000 - $5,000+</div>
                <div className="text-sm opacity-80">Monthly Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">IATA Accredited</div>
                <div className="text-sm opacity-80">Professional Status</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Full Support</div>
                <div className="text-sm opacity-80">Community & Tools</div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mockData.advisorBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#00BFA6' }}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {benefit.description}
                    </p>
                    <Badge variant="secondary" className="text-sm font-semibold" style={{ backgroundColor: '#003F5F', color: 'white' }}>
                      {benefit.earning}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Ready to Start Your Travel Business?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our community of successful travel advisors earning $1,000-5,000+ monthly with IATA accreditation and Marriott Preferred Agency access.
            </p>
            <Button
              size="lg"
              className="text-white font-semibold px-8 py-3"
              style={{ backgroundColor: '#00BFA6' }}
              onClick={openCalendly}
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              No experience required • IATA accreditation included • Start earning immediately
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};