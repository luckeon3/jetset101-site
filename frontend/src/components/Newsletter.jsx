import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, ArrowRight } from 'lucide-react';
import { mockHandlers } from '../mock';
import { toast } from 'sonner';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const response = await mockHandlers.subscribeNewsletter(email);
      toast.success(response.message);
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-r from-[#003F5F] to-[#00BFA6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Header */}
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Stay in the <span className="text-yellow-400">Loop</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Get exclusive travel deals, insider tips, and be the first to know about new opportunities with JetSet 101.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 whitespace-nowrap"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Exclusive Deals
              </h4>
              <p className="text-sm opacity-80" style={{ fontFamily: 'Lato, sans-serif' }}>
                Member-only flash sales and limited-time offers
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Travel Tips
              </h4>
              <p className="text-sm opacity-80" style={{ fontFamily: 'Lato, sans-serif' }}>
                Expert advice and insider secrets from our team
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Early Access
              </h4>
              <p className="text-sm opacity-80" style={{ fontFamily: 'Lato, sans-serif' }}>
                Be first to know about new features and programs
              </p>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-8 text-sm opacity-70">
            <p style={{ fontFamily: 'Lato, sans-serif' }}>
              We respect your privacy. Unsubscribe at any time. No spam, just value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};