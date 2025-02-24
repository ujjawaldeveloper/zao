import React from "react";

const OrderSummary: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm">
      <h2 className="p-4 border-b text-gray-500 font-medium">ORDER SUMMARY</h2>
      <div className="p-4 space-y-4">
        <SummaryRow label="Price (3 items)" value="₹96,897" />
        <SummaryRow label="Discount" value="- ₹12,899" className="text-green-600" />
        <SummaryRow label="Delivery Charges" value="FREE" className="text-green-600" />
        <SummaryRow
          label="Total Amount"
          value="₹83,998"
          className="font-medium text-lg pt-4 border-t"
        />
      </div>
      <div className="p-4 border-t">
        <button className="w-full bg-[#fb641b] text-white py-4 rounded-sm font-medium">
          CONTINUE TO PAYMENT
        </button>
      </div>
    </div>
  );
};

const SummaryRow: React.FC<{
  label: string;
  value: string;
  className?: string;
}> = ({ label, value, className }) => (
  <div className={`flex justify-between ${className}`}>
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default OrderSummary;
