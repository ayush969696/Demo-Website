// src/App.jsx
import React from 'react';
import AboutUs from './components/AboutUs';
import Articles from './components/Articles';
import BrandPanel from './components/BrandPanel';
import CTA from './components/CTA';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';
import Project from './components/Project';
import Services from './components/Services';
import SubscribeSection from './components/SubscribeSection';
import Testimonials from './components/TestimonialCard';

function App() {
  return (
    <div className="bg-white dark:bg-[#010d19] text-gray-900  dark:text-white transition-colors duration-300 font-Montserrat">
      <Header />
      <HeroSection />
      {/* <BrandPanel /> */}
      <AboutUs />
      <Services />
      <Project />
      <PricingCard />
      <Testimonials />
      <SubscribeSection />
      <Articles />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
