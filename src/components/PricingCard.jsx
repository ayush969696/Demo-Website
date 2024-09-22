import React from "react";

const PricingComponent = ({ plan, price, features, popular, tag }) => {
  return (
    <div
      className={`w-full font-Inter max-w-sm p-8 rounded-xl shadow-md border  border-gray-200 ${
        popular ? "bg-[#023363] text-white" : "bg-[#f6f6f7]"
      }`}
    >
      <div className="flex justify-between items-center ">
        <span
          className={`${
            popular ? "bg-yellow-400 text-[#023363]" : "bg-gray-200"
          } text-lg px-4 py-1 rounded-lg `}
        >
          {tag}
        </span>
        {popular && (
          <span className="text-lg font-semibold mb-10">Popular</span>
        )}
      </div>
      <div className="mt-4 pb-6">
        <h2 className="text-[70px] font-bold ">
          {price}
          <span className="text-3xl font-semibold"> / mo</span>
        </h2>
        <p className="mt-2 text-md">{plan}</p>
      </div>
      <hr />
      <ul className="mt-5 space-y-3 text-lg">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <span className="bg-gray-200 rounded-full flex items-center justify-center p-2">
              <i class="fa-solid fa-check text-[#023363]"></i>
            </span>
            <h1>{feature}</h1>
          </li>
        ))}
      </ul>
      <button
        className={`w-full mt-6 py-4 px-4 rounded-lg text-xl font-semibold ${
          popular
            ? "bg-yellow-500 text-[#023363] hover:bg-yellow-400"
            : "bg-[#023363] text-white hover:bg-[#022040]"
        }`}
      >
        Try for Free
      </button>
      <p className="text-md font-semibold mt-4 text-center text-[#738ea9]">
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

  return (
    <div className="py-12  w-full">
      <span className="text-xl text-center w-40 mx-auto bg-[#f6f6f7] mb-5 p-3 rounded-lg block text-[#101011]">
        Pricing
      </span>
      <h3
        className="text-3xl text-center sm:text-3xl xl:text-[55px] pb-20  font-bold px-4 md:px-0"
        style={{ lineHeight: "1.2" }}
      >
        We’ve offred the <br className="hidden sm:block" />
        best pricing for you
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-8 py-1 px-4">
        {pricingPlans.map((plan, index) => (
          <PricingComponent key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
