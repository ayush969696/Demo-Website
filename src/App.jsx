import React, { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import BrandPanel from "./components/BrandPanel";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingCard from "./components/PricingCard";
import Services from "./components/Services";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-[#010d19] text-gray-900 md:px-8 px-2 dark:text-white transition-colors duration-300 font-Montserrat">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection darkMode={darkMode} />
      <BrandPanel darkMode={darkMode} />
      <AboutUs darkMode={darkMode} />
      <Services />
      <PricingCard
        planType="Pro"
        price="49"
        description="All other plans features and options."
        features={[
          "Up to 10 individual users",
          "Basic reporting and analytics",
          "Project Management",
          "20GB individual data each user",
          "Basic chat and email support",
        ]}
        bgColor="bg-gray-200"
      />
    </div>
  );
}

export default App;
