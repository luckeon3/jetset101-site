import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { mockData } from '../mock';

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#00BFA6' }}>
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Real Results from Real People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              See how JetSet 101 members are saving thousands on travel and building successful advisor businesses.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {mockData.testimonials.map((testimonial, index) => (
              <Card key={index} className="relative bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  
                  <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: '#1A1A1A' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm" style={{ color: '#00BFA6' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#FF6B6B' }}>4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#00BFA6' }}>98%</div>
                <div className="text-sm text-gray-600">Member Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#003F5F' }}>$2,400</div>
                <div className="text-sm text-gray-600">Avg. Annual Savings</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2" style={{ color: '#FF6B6B' }}>$3,200</div>
                <div className="text-sm text-gray-600">Avg. Advisor Earnings</div>
              </div>
            </div>
          </div>

          {/* Featured Success Story */}
          <div className="mt-16 bg-gradient-to-r from-[#003F5F] to-[#00BFA6] rounded-2xl p-8 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-white/20 text-white">
                  Featured Success Story
                </Badge>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  "From $50K Debt to 6-Figure Travel Business"
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  "JetSet 101 completely transformed my life. I went from struggling with debt to running a six-figure travel advisory business in just 18 months. The training, support, and community made all the difference."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85"
                      alt="Success Story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Jessica Martinez</div>
                    <div className="text-sm opacity-80">Elite Travel Advisor</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHx0cmF2ZWx8ZW58MHx8fHwxNzU2NjU0NDg0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Success Story Background"
                  className="rounded-lg shadow-lg w-full h-64 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};