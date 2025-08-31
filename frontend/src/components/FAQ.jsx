import React from 'react';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { mockData } from '../mock';

export const FAQ = () => {
  return (
    <section id="faq" className="py-20" style={{ backgroundColor: '#F9F9F9' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4" style={{ backgroundColor: '#003F5F' }}>
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Got Questions? We've Got Answers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Everything you need to know about JetSet 101 membership benefits and travel advisor opportunities.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="w-full">
              {mockData.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                  <AccordionTrigger className="text-left py-6 hover:no-underline group">
                    <span className="text-lg font-semibold group-hover:text-[#00BFA6] transition-colors duration-200" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              Our support team is here to help you get started with JetSet 101.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:opacity-90" style={{ backgroundColor: '#00BFA6' }}>
                Contact Support
              </button>
              <button className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-200 hover:bg-[#FF6B6B] hover:text-white hover:border-[#FF6B6B]" style={{ borderColor: '#FF6B6B', color: '#FF6B6B' }}>
                Schedule Call
              </button>
            </div>
          </div>

          {/* Policy Reminders */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold mb-2" style={{ color: '#003F5F' }}>
                Refund Policy
              </h4>
              <p className="text-sm text-gray-700">
                Monthly memberships are non-refundable. Annual memberships can be refunded within 7 days if no discounts have been used.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h4 className="font-semibold mb-2" style={{ color: '#00BFA6' }}>
                Individual Use Only
              </h4>
              <p className="text-sm text-gray-700">
                JetSet 101 memberships are for individual use only. Sharing credentials may result in membership termination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};