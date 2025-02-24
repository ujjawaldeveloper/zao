import React from "react";

const CheckoutSteps: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-sm shadow-sm mb-4">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {["Login", "Delivery", "Payment"].map((step, index) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index < 2 ? "bg-[#2874f0] text-white" : "bg-gray-300 text-gray-600"
              }`}
            >
              {index + 1}
            </div>
            <span className={`text-sm mt-1 ${index < 2 ? "" : "text-gray-600"}`}>
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutSteps;
