import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent } from './ui/card';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    try {
      const response = await axios.post(`${API}/newsletter/subscribe`, {
        email: email
      });
      toast.success(response.data.message);
      setEmail('');
    } catch (error) {
      const message = error.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#003F5F] to-[#00BFA6]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FF6B6B' }}>
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Weekly Travel Deals & Tips
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Get exclusive travel deals, destination guides, and insider tips delivered straight to your inbox every week.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  'Exclusive flight deals up to 75% off',
                  'Hotel discounts and upgrade opportunities',
                  'Expert travel tips and destination guides'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" style={{ color: '#00BFA6' }} />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Subscription Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-gray-200 focus:border-[#00BFA6] focus:ring-[#00BFA6] h-12"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="text-white font-semibold px-6 h-12 whitespace-nowrap"
                    style={{ backgroundColor: '#00BFA6' }}
                  >
                    {loading ? 'Subscribing...' : 'Subscribe'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-gray-600">
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00BFA6' }} />
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00BFA6' }} />
                  <span>Unsubscribe anytime</span>
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#00BFA6' }} />
                  <span>10,000+ subscribers</span>
                </div>
              </div>

              {/* Social Proof */}
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  Join 10,000+ travelers who save thousands with our weekly deals
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};