import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl bg-white shadow-xl border-0">
        <CardContent className="p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Header */}
          <h1 className="text-4xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome to <span className="text-yellow-500">JetSet 101!</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
            Your membership has been activated successfully. Get ready to unlock exclusive travel deals and start your journey!
          </p>

          {/* Next Steps */}
          <div className="bg-gradient-to-r from-[#003F5F] to-[#00BFA6] rounded-2xl p-8 mb-8 text-white">
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              What's Next?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center mr-4 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Check Your Email
                  </h4>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Access credentials and member portal link sent to your inbox
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center mr-4 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Join Community
                  </h4>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Connect with fellow travelers and get insider tips
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center mr-4 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Browse Deals
                  </h4>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Start exploring exclusive member-only travel offers
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-yellow-500 text-black font-bold flex items-center justify-center mr-4 mt-1">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Start Saving
                  </h4>
                  <p className="text-sm opacity-90" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Book your first discounted trip and experience the savings
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Button
              className="bg-[#00BFA6] hover:bg-[#00BFA6]/90 text-white font-semibold py-3"
            >
              <Download className="mr-2 w-4 h-4" />
              Download Member Guide
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#003F5F] text-[#003F5F] hover:bg-[#003F5F] hover:text-white font-semibold py-3"
            >
              Join Community Chat
            </Button>
          </div>

          {/* Support Info */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="font-semibold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Need Help Getting Started?
            </h4>
            <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
              Our support team is available 24/7 to help you make the most of your membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://calendly.com/brandon-jetset101/", "_blank")}
              >
                Schedule Onboarding Call
              </Button>
              <Button variant="outline" size="sm">
                Contact Support
              </Button>
            </div>
          </div>

          {/* Home Button */}
          <Link to="/">
            <Button
              size="lg"
              className="bg-[#003F5F] hover:bg-[#003F5F]/90 text-white font-semibold py-3 px-8"
            >
              Return to Home
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};