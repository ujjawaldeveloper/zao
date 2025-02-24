const DeliveryAddress = () => {
    return (
      <div className="mt-4 bg-white rounded-sm shadow-sm p-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="font-medium">Deliver to:</h2>
          <button className="text-[#2874f0]">Change</button>
        </div>
        <div>
          <h3 className="font-medium">John Doe</h3>
          <p className="text-gray-600 text-sm mt-1">
            123 Main Street, Landmark Near Park<br />
            New Delhi - 110001<br />
            Phone: 9876543210
          </p>
        </div>
      </div>
    );
  };
  
  export default DeliveryAddress;
  