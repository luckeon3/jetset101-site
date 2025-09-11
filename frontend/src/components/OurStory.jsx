import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { mockData } from '../mock';

export const OurStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <img
                src={mockData.founderStory.image}
                alt={mockData.founderStory.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Meet Our <span className="text-yellow-500">Founder</span>
                </h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {mockData.founderStory.name}
                  </h3>
                  <p className="text-lg text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {mockData.founderStory.title}
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {mockData.founderStory.story}
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-bold mb-3" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  "Empower people to see more, experience more, and earn more through travel by making luxury travel accessible and creating meaningful income opportunities for travel enthusiasts."
                </p>
              </div>

              {/* Values */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h5 className="font-semibold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Accessibility
                  </h5>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Breaking down financial barriers to world-class travel experiences.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Empowerment
                  </h5>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Providing tools and training for financial independence through travel.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Community
                  </h5>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Building connections between like-minded travel enthusiasts.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold mb-2" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    Excellence
                  </h5>
                  <p className="text-sm text-gray-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Delivering premium travel experiences and professional support.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-[#003F5F] hover:bg-[#003F5F]/90 text-white font-semibold py-3 px-8"
                onClick={() => document.querySelector('#membership').scrollIntoView({ behavior: 'smooth' })}
              >
                Join Our Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};