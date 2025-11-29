// Mock data for JetSet 101 website

export const mockData = {
  hero: {
    title: "Professional Travel Access",
    subtitle: "Join JetSet 101's IATA-accredited travel platform for exclusive industry discounts and professional advisor opportunities with 80% commission",
    backgroundImage: "https://images.unsplash.com/photo-1741795834736-27b331f7f4cb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxyZW1vdGUlMjB3b3JrJTIwdHJhdmVsfGVufDB8fHx8MTc1NjY1NDQzM3ww&ixlib=rb-4.1.0&q=85"
  },

  membershipBenefits: [
    {
      icon: "Plane",
      title: "Up to 75% Off Flights",
      description: "Access exclusive flight deals and save thousands on your next adventure",
      savings: "Save up to $2,000 per trip"
    },
    {
      icon: "Hotel",
      title: "40-70% Off Hotels",
      description: "Luxury accommodations at top brands with incredible member discounts",
      savings: "Save $200-500 per night"
    },
    {
      icon: "Ship",
      title: "Cruises from $50/day",
      description: "Sail the world's most beautiful destinations at unbeatable prices",
      savings: "Save $150-300 per day"
    },
    {
      icon: "Users",
      title: "Exclusive Community",
      description: "Connect with fellow travelers and get insider tips from our community",
      savings: "Priceless networking"
    }
  ],

  advisorBenefits: [
    {
      icon: "TrendingUp",
      title: "80/20 Commission Split",
      description: "Keep 80% of all commissions you generate - industry-leading rates",
      earning: "Earn $1,000-5,000+ monthly"
    },
    {
      icon: "GraduationCap",
      title: "IATA Accredited Agency",
      description: "Work under our IATA accreditation with professional industry status",
      earning: "Professional certification"
    },
    {
      icon: "Headphones",
      title: "Marriott Preferred Agency",
      description: "Access to exclusive Marriott Preferred Agency benefits and enhanced commissions",
      earning: "VIP hotel access"
    },
    {
      icon: "Globe",
      title: "Community Support",
      description: "Dedicated community and peer support network for ongoing success",
      earning: "Always connected"
    }
  ],

  howItWorks: {
    membership: [
      {
        step: 1,
        title: "Join the Community",
        description: "Sign up for 6-month ($749) or annual ($1500) membership - Black Friday pricing!",
        icon: "UserPlus"
      },
      {
        step: 2,
        title: "Access Exclusive Deals",
        description: "Browse and book flights, hotels, and cruises at member prices",
        icon: "Search"
      },
      {
        step: 3,
        title: "Save & Travel More",
        description: "Enjoy incredible savings and connect with fellow travelers",
        icon: "Heart"
      }
    ],
    advisor: [
      {
        step: 1,
        title: "Schedule Consultation",
        description: "Book your free consultation to learn about advisor opportunities",
        icon: "BookOpen"
      },
      {
        step: 2,
        title: "Build Your Business",
        description: "Use our tools, resources, and support to find and serve clients",
        icon: "Building"
      },
      {
        step: 3,
        title: "Earn 80% Commission",
        description: "Keep 80% of all commissions with reliable payment systems",
        icon: "DollarSign"
      }
    ]
  },

  pricing: {
    sixMonth: {
      originalPrice: 949,
      monthlyPrice: 125,
      billingFrequency: "Billed bi-annually",
      totalPrice: 750,
      period: "6 months",
      commitment: "Perfect starter option",
      savings: "Best way to get started"
    },
    annual: {
      originalPrice: 1599,
      monthlyPrice: 83,
      billingFrequency: "Billed annually",
      totalPrice: 996,
      period: "year",
      commitment: "Best Value",
      savings: "Lock in professional pricing"
    }
  },
  
  stripePaymentUrl: {
    sixMonth: "https://buy.stripe.com/5kQaEYdZy8r6gNxc8GdfG07",
    annual: "https://buy.stripe.com/bJebJ27BaePubtd0pYdfG00"
  },

  founderStory: {
    name: "Brandon Torres",
    title: "Founder & CEO",
    story: "JetSet 101 is a modern travel platform built to redefine access to global exploration and professional growth in the travel space. Founded by entrepreneur Brandon Torres, the company emerged from a mission to make travel more attainable while also offering a legitimate pathway for individuals to establish themselves as certified travel advisors. By combining insider industry access with cutting-edge tools, JetSet 101 empowers its community to experience the world through exclusive flight, hotel, cruise, and resort discounts—benefits typically reserved for travel professionals. The platform also provides comprehensive support for those pursuing a career in the travel industry, including IATA registration, professional onboarding, training resources, and a network of like-minded peers. JetSet 101 is designed for both personal enrichment and entrepreneurial opportunity, bridging the gap between dream-worthy travel experiences and real, professional access to the travel industry.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85"
  },

  faqs: [
    {
      question: "What is JetSet 101?",
      answer: "JetSet 101 is an exclusive travel membership community that provides members with instant access to exclusive travel discounts on flights, hotels, and cruises, plus opportunities to earn as a travel advisor."
    },
    {
      question: "How much can I save on travel?",
      answer: "Members save up to 75% on flights, 40-70% on hotels at top brands, and enjoy cruises starting at $50 per day, subject to availability."
    },
    {
      question: "What are the membership options?",
      answer: "6-Month Membership: $749 for 6 months (regularly $949). Annual Membership: $1500/year (regularly $1599, Best Value - Includes Free Disney Cruise!)."
    },
    {
      question: "Is JetSet 101 a multi-level marketing (MLM) company?",
      answer: "No, JetSet 101 is NOT an MLM. We are a legitimate travel membership and advisory platform. There is absolutely no requirement to recruit or bring other members on board. You don't profit from colleagues' income or build downlines. Our travel advisors earn 80% commission solely from their own bookings and client relationships. Your success is based entirely on your own efforts and the value you provide to your clients, not on recruiting others."
    },
    {
      question: "How does the travel advisor program work?",
      answer: "Our travel advisors earn an 80/20 commission split (80% to you) with IATA accreditation, Marriott Preferred Agency access, and ongoing community support."
    },
    {
      question: "Is there a refund policy?",
      answer: "Monthly memberships are non-refundable. Annual memberships can be refunded within 3 days if no discounts have been used."
    },
    {
      question: "Can I share my membership benefits?",
      answer: "No, JetSet 101 memberships are for individual use only. Sharing credentials may result in membership termination."
    }
  ],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Travel Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85",
      testimonial: "JetSet 101 transformed my passion for travel into a thriving business. The 80% commission split and incredible support system helped me earn over $4,000 in my first month!"
    },
    {
      name: "Michael Chen",
      role: "JetSet Member",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85",
      testimonial: "I saved $1,800 on our family vacation to Europe! The exclusive deals and community support made planning our dream trip so much easier."
    },
    {
      name: "Lisa Rodriguez",
      role: "Travel Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWx8ZW58MHx8fHwxNzU2NjU0NDc2fDA&ixlib=rb-4.1.0&q=85",
      testimonial: "The IATA accreditation and Marriott Preferred Agency program gave me everything I needed to succeed. Now I help others travel better while building my own profitable business."
    }
  ],

  stats: [
    { number: "5,000+", label: "Active Members" },
    { number: "75%", label: "Max Flight Savings" },
    { number: "80%", label: "Advisor Commission" },
    { number: "$1.5M+", label: "Member Savings" }
  ],

  contact: {
    email: "info@jetset101.com",
    phone: "323.301.3533",
    address: "4810 Serrania Ave\nWoodland Hills, CA 91364"
  },

  calendlyUrl: "https://calendly.com/brandon-jetset101/"
};

// Mock form submission handlers - Updated to use Calendly
export const mockHandlers = {
  joinMembership: (formData) => {
    console.log('Mock: Redirecting to Calendly for consultation:', formData);
    window.open(mockData.calendlyUrl, '_blank');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, message: 'Redirecting to schedule your consultation!' });
      }, 1000);
    });
  },

  becomeAdvisor: (formData) => {
    console.log('Mock: Redirecting to Calendly for advisor consultation:', formData);
    window.open(mockData.calendlyUrl, '_blank');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, message: 'Redirecting to schedule your advisor consultation!' });
      }, 1000);
    });
  },

  subscribeNewsletter: (email) => {
    console.log('Mock: Newsletter subscription for:', email);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, message: 'Subscribed to newsletter!' });
      }, 1000);
    });
  },

  contactForm: (formData) => {
    console.log('Mock: Redirecting to Calendly for consultation:', formData);
    window.open(mockData.calendlyUrl, '_blank');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, message: 'Redirecting to schedule your consultation!' });
      }, 1000);
    });
  },

  scheduleConsultation: () => {
    console.log('Mock: Opening Calendly consultation');
    window.open(mockData.calendlyUrl, '_blank');
  }
};