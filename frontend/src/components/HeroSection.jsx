import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Plane, TrendingUp, ArrowRight } from 'lucide-react';
import { mockData, mockHandlers } from '../mock';
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
      await mockHandlers.joinMembership({ email: membershipEmail });
      toast.success('Redirecting to schedule your consultation!');
      setMembershipEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(prev => ({ ...prev, membership: false }));
    }
  };

  const handleAdvisorSignup = async (e) => {
    e.preventDefault();
    if (!advisorEmail) return;
    
    setLoading(prev => ({ ...prev, advisor: true }));
    try {
      await mockHandlers.becomeAdvisor({ email: advisorEmail });
      toast.success('Redirecting to schedule your advisor consultation!');
      setAdvisorEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(prev => ({ ...prev, advisor: false }));
    }
  };

  const openCalendly = () => {
    window.open(mockData.calendlyUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://customer-assets.emergentagent.com/job_travel-web-handoff/artifacts/z3txrwmh_D2.avif"
          alt="JetSet 101 Hero - Disney Cruise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                Travel More<span className="text-yellow-400">...</span><span className="text-yellow-400">Save More</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span style={{ fontFamily: 'Lato, sans-serif' }}>
                Jetset 101 gives you insider access to travel perks and tools to turn travel in a lifestyle
              </span>
            </p>
            
            {/* CTA Button - Single Button Only */}
            <div className="flex justify-center mb-12">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-200 transform hover:scale-105"
                onClick={() => document.querySelector('#membership').scrollIntoView({behavior: 'smooth'})}
              >
                Black Friday Promo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_travel-advisor-hub/artifacts/8nnhc2f1_iatan-pms541-300.jpg" 
                alt="IATA Certified" 
                className="h-8 w-auto mr-2"
              />
              <span className="text-sm font-medium">IATA Certified</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};