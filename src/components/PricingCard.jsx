import React from "react";

const PricingCard = ({
  planType,
  price,
  description,
  features,
  bgColor = "bg-gray-100",
  textColor = "text-gray-900",
  badgeColor = "bg-gray-200",
  badgeTextColor = "text-gray-600",
  buttonColor = "bg-blue-600",
  buttonHoverColor = "hover:bg-blue-700",
  isPopular = false,
}) => {
  return (
    <div className="lg:px-24 flex flex-col items-center py-10">
      <span className="text-xl text-center w-40 bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
        Pricing
      </span>
      <h3
        className="text-3xl text-center sm:text-3xl xl:text-[55px] pb-20  font-bold m-0] px-4 md:px-0"
        style={{ lineHeight: "1.2" }}
      >
        We’ve offred the <br className="hidden sm:block" />
        best pricing for you
      </h3>

      <div
        className={`max-w-sm max-h-[500px] ${bgColor} border border-gray-200 rounded-lg shadow-lg p-8 text-${textColor} ${
          isPopular ? "scale-105" : ""
        }`}
      >
        {isPopular && (
          <span className="absolute top-10 right-0 -mt-4 px-4 py-1 text-white font-bold rounded-full shadow-lg">
            Popular
          </span>
        )}
        <div className="relative">
          <span
            className={`${badgeColor} ${badgeTextColor} text-sm px-3 py-1 rounded-full mb-4 inline-block`}
          >
            {planType}
          </span>
          <h2 className="text-4xl font-bold mb-4">
            ${price}
            <span className="text-xl font-medium">/mo</span>
          </h2>
          <p className="mb-4">{description}</p>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414-1.414l-6.336 6.336-2.121-2.121a1 1 0 00-1.414 1.414l2.829 2.829a1 1 0 001.414 0l7.071-7.071z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={`w-full ${buttonColor} text-white py-2 px-4 rounded ${buttonHoverColor}`}
        >
          Try for Free
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
