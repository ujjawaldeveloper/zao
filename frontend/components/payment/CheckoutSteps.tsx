const CheckoutSteps = () => {
    return (
      <div className="bg-white p-4 rounded-sm shadow-sm mb-4">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#2874f0] text-white flex items-center justify-center">✓</div>
            <span className="text-sm mt-1">Login</span>
          </div>
          <div className="flex-1 h-1 bg-[#2874f0]"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#2874f0] text-white flex items-center justify-center">✓</div>
            <span className="text-sm mt-1">Delivery</span>
          </div>
          <div className="flex-1 h-1 bg-[#2874f0]"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-[#2874f0] text-white flex items-center justify-center">3</div>
            <span className="text-sm mt-1">Payment</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default CheckoutSteps;
  