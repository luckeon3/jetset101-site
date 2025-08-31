import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { UserPlus, Search, Heart, BookOpen, Building, DollarSign } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  UserPlus,
  Search,
  Heart,
  BookOpen,
  Building,
  DollarSign
};

export const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('membership');

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#003F5F' }}>
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Simple Steps to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Whether you want to save on travel or build a travel business, we make it simple with our proven 3-step process.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="membership" className="text-lg py-3">
                For Travelers
              </TabsTrigger>
              <TabsTrigger value="advisor" className="text-lg py-3">
                For Advisors
              </TabsTrigger>
            </TabsList>

            {/* Membership How It Works */}
            <TabsContent value="membership">
              <div className="grid md:grid-cols-3 gap-8">
                {mockData.howItWorks.membership.map((step, index) => {
                  const IconComponent = iconMap[step.icon];
                  return (
                    <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-8 text-center">
                        {/* Step Number */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#FF6B6B' }}>
                            {step.step}
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#FF6B6B' }}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Content */}
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
                <Button size="lg" className="text-white font-semibold px-8 py-3" style={{ backgroundColor: '#FF6B6B' }}>
                  Start Saving Today
                </Button>
              </div>
            </TabsContent>

            {/* Advisor How It Works */}
            <TabsContent value="advisor">
              <div className="grid md:grid-cols-3 gap-8">
                {mockData.howItWorks.advisor.map((step, index) => {
                  const IconComponent = iconMap[step.icon];
                  return (
                    <Card key={index} className="relative group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                      <CardContent className="p-8 text-center">
                        {/* Step Number */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#00BFA6' }}>
                            {step.step}
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#00BFA6' }}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        
                        {/* Content */}
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
                <Button size="lg" className="text-white font-semibold px-8 py-3" style={{ backgroundColor: '#00BFA6' }}>
                  Start Earning Today
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Success Stories Preview */}
          <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Join 10,000+ Successful Members
                </h3>
                <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Our community has saved over $2M on travel and generated $500K+ in advisor commissions this year alone.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#FF6B6B' }}>75%</div>
                    <div className="text-sm text-gray-600">Max Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#00BFA6' }}>70%</div>
                    <div className="text-sm text-gray-600">Commission Split</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#003F5F' }}>24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxjb21tdW5pdHl8ZW58MHx8fHwxNzU2NjU0NDc5fDA&ixlib=rb-4.1.0&q=85"
                  alt="Community Success"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
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