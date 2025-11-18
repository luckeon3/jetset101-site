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

  const openCalendly = () => {
    window.open(mockData.calendlyUrl, '_blank');
  };

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
                <Button size="lg" className="text-white font-semibold px-8 py-3" style={{ backgroundColor: '#00BFA6' }} onClick={openCalendly}>
                  Schedule Consultation
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
                          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#003F5F' }}>
                            {step.step}
                          </div>
                        </div>
                        
                        {/* Icon */}
                        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 mt-4 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#003F5F' }}>
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
                <Button size="lg" className="text-white font-semibold px-8 py-3" style={{ backgroundColor: '#003F5F' }} onClick={openCalendly}>
                  Schedule Consultation
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};