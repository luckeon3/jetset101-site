import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Plane, Hotel, Ship, Users, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  Plane,
  Hotel,
  Ship,
  Users
};

export const MembershipBenefits = () => {
  const openStripeCheckout = (plan) => {
    const url = plan === 'sixMonth' 
      ? mockData.stripePaymentUrl.sixMonth 
      : mockData.stripePaymentUrl.annual;
    window.open(url, '_blank');
  };

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#003F5F' }}>
              Membership Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Select the membership option that works best for you
            </p>
          </div>

          {/* Pricing Cards - Show First */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* 6-Month Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-[#003F5F] transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    6-Month Membership
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold" style={{ color: '#003F5F' }}>
                      ${mockData.pricing.sixMonth.price}
                    </span>
                    <span className="text-gray-500 ml-2">/{mockData.pricing.sixMonth.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {mockData.pricing.sixMonth.commitment}
                  </p>
                  <p className="text-xs text-gray-500 italic mb-6">
                    *Not applicable for Black Friday promotion
                  </p>
                  
                  <button 
                    onClick={() => openStripeCheckout('sixMonth')}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 transform hover:scale-105" 
                    style={{ backgroundColor: '#003F5F' }}
                  >
                    Start My Plan
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Annual Plan */}
            <Card className="relative border-2 border-[#00BFA6] shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="px-4 py-2 text-sm font-bold" style={{ backgroundColor: '#00BFA6' }}>
                  BEST VALUE
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Annual Membership
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold" style={{ color: '#00BFA6' }}>
                      ${mockData.pricing.annual.price}
                    </span>
                    <span className="text-gray-500 ml-2">/{mockData.pricing.annual.period}</span>
                  </div>
                  <p className="text-sm font-semibold mb-6" style={{ color: '#00BFA6' }}>
                    {mockData.pricing.annual.commitment}
                  </p>
                  
                  <button 
                    onClick={() => openStripeCheckout('annual')}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 transform hover:scale-105" 
                    style={{ backgroundColor: '#00BFA6' }}
                  >
                    Start My Plan
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Details - Show Below Pricing - ONLY ONCE */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              What's Included
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#003F5F' }}>
                    <Hotel className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    40-70% Off Hotels
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Luxury accommodations at top brands with incredible member discounts
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#003F5F' }}>
                    <Ship className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Cruises from $50/day
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Sail the world's most beautiful destinations at unbeatable prices
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#003F5F' }}>
                    <Plane className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Exclusive Membership Benefits
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Access to industry-only travel rates and premium perks
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#003F5F' }}>
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Exclusive Community
                  </h4>
                  <p className="text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Connect with fellow travelers and get insider tips from our community
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              * Individual use only • Non-transferable • Terms apply
            </p>
            <p className="text-sm text-gray-500">
              Schedule a consultation to learn more about membership benefits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};