const PriceSummary = () => {
    return (
      <div className="bg-white rounded-sm shadow-sm">
        <h2 className="p-4 border-b font-medium">PRICE DETAILS</h2>
        <div className="p-4 space-y-4">
          <div className="flex justify-between">
            <span>Price (3 items)</span>
            <span>₹96,897</span>
          </div>
          <div className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-600">- ₹12,899</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">FREE</span>
          </div>
          <div className="flex justify-between font-medium text-lg pt-4 border-t">
            <span>Total Amount</span>
            <span>₹83,998</span>
          </div>
        </div>
        <div className="p-4 border-t bg-[#fff7e6]">
          <div className="flex items-start gap-2">
            <i className="fa-solid fa-shield-halved text-[#2874f0] mt-1"></i>
            <div>
              <p className="font-medium">Safe and Secure Payments</p>
              <p className="text-sm text-gray-600">
                All payment options are processed through secure payment gateway
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PriceSummary;
  