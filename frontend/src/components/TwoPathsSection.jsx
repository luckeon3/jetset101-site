import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CheckCircle, Star, Briefcase, Plane, ArrowRight } from 'lucide-react';

export const TwoPathsSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Two Paths. <span className="text-yellow-500">Unlimited Possibilities.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Whether you're looking to travel smarter or build a career in travel, JetSet 101 opens doors to exclusive opportunities.
            </p>
          </div>

          {/* Two Paths Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Travel for Less Path */}
            <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFA6' }}>
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Travel for Less
                  </h3>
                  <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Access industry-only rates and luxury perks typically reserved for travel professionals.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">IATA TA Rates</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">FAM Hotel Rates</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">AD90 Flight Rates</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">IATA Cruise Rates</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="bg-gradient-to-r from-[#003F5F] to-[#00BFA6] rounded-lg p-6 text-white mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">$8,500</div>
                      <div className="text-sm opacity-90">Avg. Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">48hrs</div>
                      <div className="text-sm opacity-90">Quick Access</div>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#00BFA6] hover:bg-[#00BFA6]/90 text-white font-semibold py-3"
                  onClick={() => scrollToSection('#membership')}
                >
                  Learn More About Perks
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Launch Your Career Path */}
            <Card className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 right-4">
                <Badge className="bg-yellow-500 text-black font-bold px-3 py-1">
                  Most Popular
                </Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#003F5F' }}>
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Launch Your Career
                  </h3>
                  <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Build a profitable travel advisory business with our complete training and support system.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">IATA Accredited Agency</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">80/20 Split</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">Marriott Stars Program</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    <span className="text-sm font-medium">Community Support</span>
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 text-black mb-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">$120K</div>
                      <div className="text-sm opacity-80">First Year Potential</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">6 Months</div>
                      <div className="text-sm opacity-80">Avg. Success Time</div>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-[#003F5F] hover:bg-[#003F5F]/90 text-white font-semibold py-3"
                  onClick={() => scrollToSection('#advisor')}
                >
                  Start Advisor Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              Not sure which path is right for you? No problem – you can always add advisor training later.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#003F5F] text-[#003F5F] hover:bg-[#003F5F] hover:text-white font-semibold py-3 px-6 rounded-md"
              onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
            >
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};