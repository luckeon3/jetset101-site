import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Calendar, Send } from 'lucide-react';
import { mockData } from '../mock';
import { toast } from 'sonner';

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setLoading(true);
    try {
      // Simulate API call and then redirect to Calendly
      await new Promise(resolve => setTimeout(resolve, 500));
      
      toast.success('Thank you! Redirecting to schedule your consultation...');
      
      // Redirect to Calendly
      setTimeout(() => {
        window.open(mockData.calendlyUrl, '_blank');
      }, 1000);
      
      // Clear form and errors
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#00BFA6] to-[#003F5F] mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A1A1A', fontFamily: 'Poppins, sans-serif' }}>
              Request Your Free <span className="text-[#00BFA6]">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              Have questions about membership benefits or starting your travel advisor career? Let's chat! Schedule a free consultation with our team.
            </p>
          </div>

          {/* Consultation Form Card */}
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form id="consultation-form" onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="form-group space-y-2">
                  <Label htmlFor="consultation-name" className="text-base font-semibold text-gray-700">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="text"
                    id="consultation-name"
                    name="name"
                    className="input-field h-12 text-base"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-group space-y-2">
                  <Label htmlFor="consultation-email" className="text-base font-semibold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    type="email"
                    id="consultation-email"
                    name="email"
                    className="input-field h-12 text-base"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="form-group space-y-2">
                  <Label htmlFor="consultation-message" className="text-base font-semibold text-gray-700">
                    How can we help? <span className="text-gray-400">(Optional)</span>
                  </Label>
                  <Textarea
                    id="consultation-message"
                    name="message"
                    className="input-field min-h-[120px] text-base resize-none"
                    placeholder="Tell us about your travel goals or questions..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-[#00BFA6] to-[#003F5F] hover:from-[#00BFA6]/90 hover:to-[#003F5F]/90 text-white transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? 'Processing...' : 'Request Consultation'}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500 text-center mt-4">
                  We respect your privacy. Your information will only be used to contact you about your consultation.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-[#00BFA6] mb-2">100% Free</div>
              <p className="text-gray-600 text-sm">No obligation consultation</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-[#00BFA6] mb-2">30 Min</div>
              <p className="text-gray-600 text-sm">Quick & informative session</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-[#00BFA6] mb-2">24-48hr</div>
              <p className="text-gray-600 text-sm">Response time guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
