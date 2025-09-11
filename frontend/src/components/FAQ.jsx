import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { mockData } from '../mock';

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Frequently Asked <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Get answers to the most common questions about JetSet 101 membership and advisor opportunities.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="text-center mt-12 bg-gradient-to-r from-[#003F5F] to-[#00BFA6] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Still Have Questions?
            </h3>
            <p className="text-lg mb-6 opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>
              Our team is here to help you make the best decision for your travel and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-[#003F5F] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
              >
                Schedule a Free Call
              </button>
              <button 
                className="bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-colors"
                onClick={() => document.querySelector('#newsletter').scrollIntoView({ behavior: 'smooth' })}
              >
                Get More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};