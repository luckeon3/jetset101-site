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
    
    // Redirect to Calendly instead of mock signup
    window.open("https://calendly.com/brandon-jetset101/", "_blank");
    setMembershipEmail('');
    toast.success("Redirecting to schedule your consultation!");
  };

  const handleAdvisorSignup = async (e) => {
    e.preventDefault();
    if (!advisorEmail) return;
    
    // Redirect to Calendly instead of mock signup  
    window.open("https://calendly.com/brandon-jetset101/", "_blank");
    setAdvisorEmail('');
    toast.success("Redirecting to schedule your consultation!");
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                Travel Smarter. <span className="text-yellow-400">Earn More.</span><br />
                <span className="text-white">Live Better.</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              <span style={{ fontFamily: 'Lato, sans-serif' }}>
                JetSet 101 gives you insider access to luxury travel perks & the tools to turn travel into a career.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-200 transform hover:scale-105"
                onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
              >
                Unlock Member Perks
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg rounded-full transition-all duration-200 transform hover:scale-105"
                onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
              >
                Become an Advisor
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-white/80">
            <div className="flex items-center">
              <img
                src="https://customer-assets.emergentagent.com/job_travel-advisor-hub/artifacts/8nnhc2f1_iatan-pms541-300.jpg"
                alt="IATA Certified"
                className="h-8 w-auto mr-2"
              />
              <span className="text-sm font-medium">IATA Certified</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">10,000+</div>
              <div className="text-sm">Members</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">No Minimums</div>
            </div>
          </div>

          {/* Quick Signup Forms */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Membership Quick Signup */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <form onSubmit={handleMembershipSignup} className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-2">Quick Access to Member Perks</h3>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={membershipEmail}
                    onChange={(e) => setMembershipEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading.membership}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold whitespace-nowrap"
                  >
                    {loading.membership ? 'Joining...' : 'Get Access'}
                  </Button>
                </div>
              </form>
            </Card>

            {/* Advisor Quick Signup */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6">
              <form onSubmit={handleAdvisorSignup} className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-2">Start Your Advisor Journey</h3>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={advisorEmail}
                    onChange={(e) => setAdvisorEmail(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                    required
                  />
                  <Button
                    type="submit"
                    disabled={loading.advisor}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold whitespace-nowrap"
                  >
                    {loading.advisor ? 'Applying...' : 'Apply Now'}
                  </Button>
                </div>
              </form>
            </Card>
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