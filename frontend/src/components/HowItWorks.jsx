import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { UserPlus, Search, Heart, BookOpen, Building, DollarSign } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  UserPlus: UserPlus,
  Search: Search,
  Heart: Heart,
  BookOpen: BookOpen,
  Building: Building,
  DollarSign: DollarSign
};

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('membership');

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              How <span className="text-yellow-500">JetSet 101</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Choose your path and start your journey to smarter travel and financial freedom.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger 
                value="membership" 
                className="data-[state=active]:bg-[#00BFA6] data-[state=active]:text-white font-semibold py-3"
              >
                Travel Membership
              </TabsTrigger>
              <TabsTrigger 
                value="advisor" 
                className="data-[state=active]:bg-[#003F5F] data-[state=active]:text-white font-semibold py-3"
              >
                Advisor Career
              </TabsTrigger>
            </TabsList>

            {/* Membership Tab */}
            <TabsContent value="membership">
              <div className="grid md:grid-cols-3 gap-8">
                {mockData.howItWorks.membership.map((step, index) => {
                  const Icon = iconMap[step.icon];
                  return (
                    <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#00BFA6' }}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-[#00BFA6] mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-[#00BFA6] hover:bg-[#00BFA6]/90 text-white font-semibold py-3 px-8 rounded-full"
                  onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
                >
                  Start Your Membership Today
                </Button>
              </div>
            </TabsContent>

            {/* Advisor Tab */}
            <TabsContent value="advisor">
              <div className="grid md:grid-cols-3 gap-8">
                {mockData.howItWorks.advisor.map((step, index) => {
                  const Icon = iconMap[step.icon];
                  return (
                    <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-8 text-center">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#003F5F' }}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-[#003F5F] mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              <div className="text-center mt-12">
                <Button
                  size="lg"
                  className="bg-[#003F5F] hover:bg-[#003F5F]/90 text-white font-semibold py-3 px-8 rounded-full"
                  onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
                >
                  Apply for Advisor Program
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Features Comparison */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Compare Your Options
            </h3>
            
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4 text-[#00BFA6]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Travel Membership
                  </h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#00BFA6] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Instant access to exclusive travel deals
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#00BFA6] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Save up to 75% on flights and hotels
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#00BFA6] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Join exclusive travel community
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#00BFA6] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Monthly or annual options available
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4 text-[#003F5F]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Advisor Career
                  </h4>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#003F5F] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Earn 80% commission on all bookings
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#003F5F] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Complete training and certification
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#003F5F] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Marketing tools and support system
                      </span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-[#003F5F] mr-3"></div>
                      <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Build your own travel business
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};