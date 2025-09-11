import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { TrendingUp, GraduationCap, Headphones, Globe, ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

const iconMap = {
  TrendingUp: TrendingUp,
  GraduationCap: GraduationCap,
  Headphones: Headphones,
  Globe: Globe
};

export const AdvisorProgram = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="advisor" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Build Your <span className="text-yellow-500">Travel Career</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Turn your passion for travel into a profitable business with our complete advisor training and support system.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {mockData.advisorBenefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#003F5F' }}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {benefit.description}
                    </p>
                    <div className="text-yellow-600 font-semibold text-sm">
                      {benefit.earning}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-8 mb-12 text-black">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Advisors Are Thriving
              </h3>
              <p className="text-lg opacity-80" style={{ fontFamily: 'Lato, sans-serif' }}>
                Real results from our travel advisor community
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">$120K</div>
                <div className="text-sm opacity-80">Average First Year Potential</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">70%</div>
                <div className="text-sm opacity-80">Commission Split (You Keep)</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">6 Months</div>
                <div className="text-sm opacity-80">Average Success Timeline</div>
              </div>
            </div>
          </div>

          {/* Training Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                Complete Training Program
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#003F5F] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Travel Industry Fundamentals
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
                      Master booking systems, supplier relationships, and industry standards
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#003F5F] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Business Development
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
                      Learn client acquisition, marketing strategies, and business operations
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#003F5F] flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      Ongoing Mentorship
                    </h4>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
                      Get continuous support and guidance from successful advisors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                Tools & Support
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-4"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Professional booking platforms
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-4"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Marketing materials and templates
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-4"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Lead generation systems
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-4"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    24/7 technical support
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-4"></div>
                  <span className="text-gray-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Exclusive supplier partnerships
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Ready to Start Your Travel Career?
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              Join hundreds of successful travel advisors earning with JetSet 101's proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-[#003F5F] hover:bg-[#003F5F]/90 text-white font-semibold py-3 px-8"
              >
                Apply to Become an Advisor
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#003F5F] text-[#003F5F] hover:bg-[#003F5F] hover:text-white font-semibold py-3 px-8"
                onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};