import React from "react";

const DeliveryAddressForm: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-6">
      <h2 className="text-xl font-medium mb-6">Delivery Address</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Name" placeholder="Enter your name" />
          <InputField label="Mobile Number" placeholder="10-digit mobile number" type="tel" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Pincode" placeholder="6 digits [0-9] PIN code" />
          <InputField label="Locality" placeholder="Enter your locality" />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Address</label>
          <textarea
            className="w-full border rounded p-2"
            rows={4}
            placeholder="Enter your full address"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField label="City" placeholder="Enter city name" />
          <DropdownField label="State" options={["Delhi", "Maharashtra", "Karnataka"]} />
          <InputField label="Landmark (Optional)" placeholder="Enter landmark" />
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-[#fb641b] text-white px-8 py-3 rounded-sm"
          >
            Save and Deliver Here
          </button>
          <button
            type="button"
            className="border border-[#2874f0] text-[#2874f0] px-8 py-3 rounded-sm"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

const InputField: React.FC<{
  label: string;
  placeholder: string;
  type?: string;
}> = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    <input type={type} className="w-full border rounded p-2" placeholder={placeholder} />
  </div>
);

const DropdownField: React.FC<{
  label: string;
  options: string[];
}> = ({ label, options }) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    <select className="w-full border rounded p-2">
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  </div>
);

export default DeliveryAddressForm;
