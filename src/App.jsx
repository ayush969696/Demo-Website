import React, { useEffect, useState } from 'react';
import AboutUs from './components/AboutUs';
import Articles from './components/Articles';
import BrandPanel from './components/BrandPanel';
import CTA from './components/CTA';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingCard from './components/PricingCard';
import Project from './components/Project';
import Services from './components/Services';
import SubscribeSection from './components/SubscribeSection';
import Testimonials from './components/TestimonialCard';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="bg-white dark:bg-[#010d19] text-gray-900 dark:text-white transition-colors duration-300 font-Montserrat">
      <Header />
      <HeroSection />
      <BrandPanel />
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
      <GoToTop />
    </div>
  );
}

export default App;
