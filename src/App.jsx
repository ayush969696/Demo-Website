import React, { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import BrandPanel from "./components/BrandPanel";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingCard from "./components/PricingCard";
import Project from "./components/Project";
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
      <Project />
      {/* <PricingCard
        planType="Agency"
        price="99"
        description="Value for money and can be upgraded."
        features={[
          "Up to 10 individual users",
          "Basic reporting and analytics",
          "Project Management",
          "20GB individual data each user",
          "Basic chat and email support",
        ]}
        bgColor="bg-[#023363]"
        textColor="white"
        badgeColor="bg-yellow-400"
        badgeTextColor="text-black"
        buttonColor="bg-yellow-400"
        buttonHoverColor="hover:bg-yellow-300"
        isPopular={true}
      /> */}

    <PricingCard />      
     
    </div>
  );
}

export default App;
