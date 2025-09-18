import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Plane, Building2, Ship, Users, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Plane: Plane,
  Hotel: Building2,
  Ship: Ship,
  Users: Users
};

export const MembershipBenefits = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="membership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Unlock <span className="text-yellow-500">Member-Only</span> Travel Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Get instant access to exclusive industry rates and luxury perks that save you thousands on every trip.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mockData.membershipBenefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#00BFA6' }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {benefit.description}
                    </p>
                    <div className="text-yellow-600 font-semibold text-sm">
                      {benefit.savings}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-[#003F5F] to-[#00BFA6] rounded-2xl p-8 mb-12 text-white">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {mockData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Monthly Plan */}
            <Card className="bg-white border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  {mockData.pricing.monthly.period}
                </h3>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#00BFA6] mb-2">
                    ${mockData.pricing.monthly.registrationFee}
                    <span className="text-lg text-gray-500"> registration</span>
                  </div>
                  <div className="text-2xl font-bold text-[#00BFA6] mb-2">
                    + ${mockData.pricing.monthly.monthlyFee}
                    <span className="text-lg text-gray-500">/month</span>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    Total Year 1: ${mockData.pricing.monthly.totalYear1}
                  </div>
                </div>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {mockData.pricing.monthly.commitment}
                </p>
                <Button 
                  className="w-full bg-[#00BFA6] hover:bg-[#00BFA6]/90 text-white font-semibold py-3 mb-4"
                  onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
                >
                  Choose Monthly Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-sm text-gray-500">{mockData.pricing.monthly.savings}</p>
                <p className="text-xs text-gray-400 mt-2">*${mockData.pricing.monthly.reconnectionFee} reconnection fee if cancelled</p>
              </CardContent>
            </Card>

            {/* All-In-One Plan */}
            <Card className="bg-gradient-to-b from-yellow-50 to-yellow-100 border-2 border-yellow-300 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm">
                  BEST VALUE
                </span>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  {mockData.pricing.allinone.period}
                </h3>
                <div className="text-4xl font-bold text-[#003F5F] mb-2">
                  ${mockData.pricing.allinone.price}
                  <span className="text-lg text-gray-500"> one-time</span>
                </div>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {mockData.pricing.allinone.commitment}
                </p>
                <Button 
                  className="w-full bg-[#003F5F] hover:bg-[#003F5F]/90 text-white font-semibold py-3 mb-4"
                  onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
                >
                  Choose All-In-One Plan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-sm text-gray-500">{mockData.pricing.allinone.savings}</p>
                <p className="text-xs text-gray-400 mt-2">*No reconnection fees ever</p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              All memberships include instant access to exclusive rates, 24/7 support, and our growing travel community.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#00BFA6] text-[#00BFA6] hover:bg-[#00BFA6] hover:text-white font-semibold py-3 px-6"
              onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
            >
              Learn How It Works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};