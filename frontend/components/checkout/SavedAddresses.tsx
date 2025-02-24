import React from "react";

const SavedAddresses: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-6 mt-4">
      <h3 className="font-medium mb-4">Saved Addresses</h3>
      <div className="space-y-4">
        <div className="border rounded p-4">
          <div className="flex items-start gap-4">
            <input type="radio" name="address" className="mt-1" />
            <div>
              <div className="flex items-center gap-4 mb-2">
                <h4 className="font-medium">John Doe</h4>
                <span className="bg-gray-100 text-xs px-2 py-1 rounded">HOME</span>
              </div>
              <p className="text-gray-600">123 Main Street, Landmark Near Park</p>
              <p className="text-gray-600">New Delhi - 110001</p>
              <p className="text-gray-600">Phone: 9876543210</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedAddresses;
