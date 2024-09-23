// src/components/PricingCard.jsx
import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const PricingComponent = ({ plan, price, features, popular, tag, isMiddle }) => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`w-full font-Inter ${
        isMiddle ? "max-w-md p-10" : "max-w-sm p-8"
      } rounded-xl ${
        popular ? "bg-[#023363] text-white" : darkMode ? "bg-gray-800 text-white" : "bg-[#f6f6f7] "
      }`}
    >
      <div className="flex justify-between items-center">
        <span
          className={`${
            popular ? "bg-yellow-400 text-[#023363]" : "bg-gray-200 text-black"
          } text-lg px-4 py-1 rounded-lg`}
        >
          {tag}
        </span>
        {popular && (
          <span className="text-lg font-semibold mb-10">Popular</span>
        )}
      </div>
      <div className="mt-4 pb-6">
        <h2 className={`text-[70px] font-bold ${ popular ? "text-white" : darkMode ? "text-white" : "text-black"}`}>
          {price}
          <span className="text-3xl font-semibold"> / mo</span>
        </h2>
        <p className={`mt-2 text-md  ${ popular ? "text-white" : darkMode ? "text-gray-300" : "text-black"}`}>{plan}</p>
      </div>
      <hr />
      <ul className={`mt-5 space-y-3 text-lg  ${ popular ? "text-white" : darkMode  ? "text-gray-300" : "text-black"}`}>
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="bg-gray-200 rounded-full flex items-center justify-center p-2">
              <i className="fa-solid fa-check text-[#023363]"></i>
            </span>
            <h1>{feature}</h1>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-4 px-4 rounded-lg text-xl font-semibold ${
          popular
            ? "bg-yellow-500 text-[#023363] hover:bg-yellow-400"
            : "bg-[#023363] text-white hover:bg-[#054284]"
        } transition duration-300 ease-in-out`}
      >
        Try for Free
      </button>
      <p className={`text-md font-semibold mt-4 text-center ${darkMode ? "text-gray-400" : "text-[#738ea9]"}`}>
        {plan === "Free"
          ? "Free forever and can be upgraded."
          : "Value for money and can be upgraded."}
      </p>
    </div>
  );
};

const PricingCard = () => {
  const pricingPlans = [
    {
      tag: "Free",
      price: "$0",
      plan: "Free forever and can be upgraded.",
      features: [
        "Up to 10 individual users",
        "Basic reporting and analytics",
        "Project Management",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      popular: false,
    },
    {
      tag: "Agency",
      price: "$99",
      plan: "Value for money and can be upgraded.",
      features: [
        "Up to 10 individual users",
        "Basic reporting and analytics",
        "Project Management",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      popular: true, // Popular plan
    },
    {
      tag: "Pro",
      price: "$49",
      plan: "All other plans features and options.",
      features: [
        "Up to 10 individual users",
        "Basic reporting and analytics",
        "Project Management",
        "20GB individual data each user",
        "Basic chat and email support",
      ],
      popular: false,
    },
  ];

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="md:py-20 py-12 w-full">
      <span className={`text-xl text-center w-40 mx-auto ${darkMode ? "bg-gray-900 text-white" : "bg-[#f6f6f7] mb-5"} p-3 rounded-lg block`}>
        Pricing
      </span>
      <h3
        className={`text-3xl text-center sm:text-3xl xl:text-[55px] pb-14 pt-6 font-bold px-4 md:px-0 ${darkMode ? "text-white" : "text-black"}`}
        style={{ lineHeight: "1.2" }}
      >
        We’ve offered the <br className="hidden sm:block" />
        best pricing for you
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 py-1 px-4">
        {pricingPlans.map((plan, index) => (
          <PricingComponent
            key={index}
            {...plan}
            isMiddle={index === 1} // Pass isMiddle prop
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
