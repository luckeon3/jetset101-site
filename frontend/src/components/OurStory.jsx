import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Quote } from 'lucide-react';
import { mockData } from '../mock';

export const OurStory = () => {
  const newBrandStory = "JetSet 101 is a modern travel platform built to redefine access to global exploration and professional growth in the travel space. Founded by entrepreneur Brandon Torres, the company emerged from a mission to make travel more attainable while also offering a legitimate pathway for individuals to establish themselves as certified travel advisors. By combining insider industry access with cutting-edge tools, JetSet 101 empowers its community to experience the world through exclusive flight, hotel, cruise, and resort discounts—benefits typically reserved for travel professionals. The platform also provides comprehensive support for those pursuing a career in the travel industry, including IATA registration, professional onboarding, training resources, and a network of like-minded peers. JetSet 101 is designed for both personal enrichment and entrepreneurial opportunity, bridging the gap between dream-worthy travel experiences and real, professional access to the travel industry.";

  return (
    <section id="story" className="py-20" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#003F5F' }}>
              Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Redefining Travel Access
            </h2>
          </div>

          {/* Brand Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#00BFA6] opacity-50" />
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Modern Travel Platform
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {newBrandStory}
                  </p>
                  
                  {/* IATA Accreditation */}
                  <div className="flex items-center mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_travel-advisor-hub/artifacts/8nnhc2f1_iatan-pms541-300.jpg" 
                      alt="IATA Accredited Agency" 
                      className="h-16 w-auto mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">IATA Accredited Agency</h4>
                      <p className="text-sm text-blue-700">
                        JetSet 101 is an IATA accredited travel agency, ensuring professional standards and industry advocacy for all our members and advisors.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHx0cmF2ZWx8ZW58MHx8fHwxNzU2NjU0NDg0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Travel Adventure"
                  className="rounded-2xl shadow-xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm opacity-90">Professional Travel Platform</div>
                  <div className="text-2xl font-bold">JetSet 101</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#FF6B6B' }}>
                  <span className="text-white font-bold text-2xl">🌍</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  To make world-class travel accessible to everyone while providing legitimate pathways for professional growth in the travel industry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00BFA6' }}>
                  <span className="text-white font-bold text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Our Values
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Professional integrity, industry expertise, and unwavering commitment to empowering our community through legitimate travel benefits.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#003F5F' }}>
                  <span className="text-white font-bold text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  A world where professional travel access and entrepreneurial opportunities create meaningful connections between people and places.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Community Impact */}
          <div className="mt-16 bg-gradient-to-r from-[#003F5F] to-[#00BFA6] rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Professional Travel Community
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mockData.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg opacity-90 max-w-3xl mx-auto">
              Every member who accesses professional travel benefits and every advisor who builds their business brings us closer to our vision of industry-leading travel access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};