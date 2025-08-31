import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Plane, TrendingUp, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'https://travel-advisor-hub.preview.emergentagent.com';
const API = `${BACKEND_URL}/api`;
import { toast } from 'sonner';

export const HeroSection = () => {
  const [membershipEmail, setMembershipEmail] = useState('');
  const [advisorEmail, setAdvisorEmail] = useState('');
  const [loading, setLoading] = useState({ membership: false, advisor: false });

  const handleMembershipSignup = async (e) => {
    e.preventDefault();
    if (!membershipEmail) return;
    
    setLoading(prev => ({ ...prev, membership: true }));
    try {
      const response = await axios.post(`${API}/memberships`, {
        email: membershipEmail,
        plan: 'annual' // Default to annual plan
      });
      toast.success(response.data.message);
      setMembershipEmail('');
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setLoading(prev => ({ ...prev, membership: false }));
    }
  };

  const handleAdvisorSignup = async (e) => {
    e.preventDefault();
    if (!advisorEmail) return;
    
    setLoading(prev => ({ ...prev, advisor: true }));
    try {
      const response = await axios.post(`${API}/advisors/apply`, {
        email: advisorEmail
      });
      toast.success(response.data.message);
      setAdvisorEmail('');
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setLoading(prev => ({ ...prev, advisor: false }));
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mockData.hero.backgroundImage}
          alt="JetSet 101 Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                {mockData.hero.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span style={{ fontFamily: 'Lato, sans-serif' }}>
                {mockData.hero.subtitle}
              </span>
            </p>
          </div>

          {/* Dual Path Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Membership Path */}
            <Card className="relative p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FF6B6B' }}>
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Save on Travel
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Access exclusive deals with up to 75% off flights, 40-70% off hotels, and cruises from $100/day
                </p>
                
                <form onSubmit={handleMembershipSignup} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={membershipEmail}
                    onChange={(e) => setMembershipEmail(e.target.value)}
                    className="border-gray-200 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading.membership}
                    className="w-full text-white font-semibold py-3"
                    style={{ backgroundColor: '#FF6B6B' }}
                  >
                    {loading.membership ? 'Joining...' : 'Join Membership'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
                
                <p className="text-sm text-gray-500 mt-4">
                  Starting at $99/month • 7-day money back guarantee
                </p>
              </div>
            </Card>

            {/* Advisor Path */}
            <Card className="relative p-8 bg-white/95 backdrop-blur-sm border-0 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00BFA6' }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Earn as Advisor
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Build your travel business with 70% commission split, complete training, and full support system
                </p>
                
                <form onSubmit={handleAdvisorSignup} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={advisorEmail}
                    onChange={(e) => setAdvisorEmail(e.target.value)}
                    className="border-gray-200 focus:border-[#00BFA6] focus:ring-[#00BFA6]"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading.advisor}
                    className="w-full text-white font-semibold py-3"
                    style={{ backgroundColor: '#00BFA6' }}
                  >
                    {loading.advisor ? 'Applying...' : 'Become Advisor'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
                
                <p className="text-sm text-gray-500 mt-4">
                  Earn $1,000-5,000+ monthly • Full training included
                </p>
              </div>
            </Card>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 text-white/80">
            {mockData.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#00BFA6' }}>
                  {stat.number}
                </div>
                <div className="text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};