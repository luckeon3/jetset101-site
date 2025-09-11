import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Import all components
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TwoPathsSection } from "./components/TwoPathsSection";
import { MembershipBenefits } from "./components/MembershipBenefits";
import { AdvisorProgram } from "./components/AdvisorProgram";
import { HowItWorks } from "./components/HowItWorks";
import { OurStory } from "./components/OurStory";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { PaymentSuccess } from "./components/PaymentSuccess";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TwoPathsSection />
      <MembershipBenefits />
      <AdvisorProgram />
      <HowItWorks />
      <Testimonials />
      <OurStory />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        richColors
        expand={true}
        duration={4000}
      />
    </div>
  );
}

export default App;