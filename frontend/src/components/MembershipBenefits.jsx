import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Plane, Hotel, Ship, Users, CheckCircle } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const iconMap = {
  Plane,
  Hotel,
  Ship,
  Users
};

export const MembershipBenefits = () => {
  const [loading, setLoading] = useState({ monthly: false, annual: false });

  const handlePayment = async (planType) => {
    const email = prompt('Please enter your email address to proceed with payment:');
    if (!email) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(prev => ({ ...prev, [planType]: true }));

    try {
      const response = await axios.post(`${API}/payments/checkout/session`, {
        plan_type: planType,
        user_email: email,
        origin_url: window.location.origin
      });

      if (response.data.success) {
        // Redirect to Stripe Checkout
        window.location.href = response.data.checkout_url;
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Payment error:', error);
      const message = error.response?.data?.detail || 'Failed to process payment. Please try again.';
      toast.error(message);
    } finally {
      setLoading(prev => ({ ...prev, [planType]: false }));
    }
  };

  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#003F5F' }}>
              Membership Benefits
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Travel More, Pay Less
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Our exclusive membership unlocks incredible savings on all your travel needs, making luxury travel accessible to everyone.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {mockData.membershipBenefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon];
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#003F5F' }}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {benefit.description}
                    </p>
                    <Badge variant="secondary" className="text-sm font-semibold" style={{ backgroundColor: '#00BFA6', color: 'white' }}>
                      {benefit.savings}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="relative border-2 border-gray-200 hover:border-[#003F5F] transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Monthly Membership
                  </h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold" style={{ color: '#003F5F' }}>
                      ${mockData.pricing.monthly.price}
                    </span>
                    <span className="text-gray-500 ml-2">/{mockData.pricing.monthly.period}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-6">
                    {mockData.pricing.monthly.commitment}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'Up to 75% off flights',
                      '40-70% off hotels',
                      'Cruises from $50/day',
                      'Weekly deal roundups',
                      'Community access'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00BFA6' }} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handlePayment('monthly')}
                    disabled={loading.monthly}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50" 
                    style={{ backgroundColor: '#003F5F' }}
                  >
                    {loading.monthly ? 'Processing...' : 'Start Monthly Plan'}
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
                  
                  <div className="space-y-3 mb-8">
                    {[
                      'Up to 75% off flights',
                      '40-70% off hotels',
                      'Cruises from $50/day',
                      'Weekly deal roundups',
                      'Community access',
                      'Priority support'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3" style={{ color: '#00BFA6' }} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => handlePayment('annual')}
                    disabled={loading.annual}
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90 disabled:opacity-50" 
                    style={{ backgroundColor: '#00BFA6' }}
                  >
                    {loading.annual ? 'Processing...' : 'Start Annual Plan'}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              * Individual use only • Non-transferable • Terms apply
            </p>
            <p className="text-sm text-gray-500">
              Secure payment processing by Stripe • SSL encrypted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};