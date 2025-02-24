const PaymentOptions = () => {
    return (
      <div className="bg-white rounded-sm shadow-sm">
        <div className="flex">
          <div className="w-64 border-r">
            <div className="p-4 bg-gray-50 border-b font-medium">Payment Options</div>
            <div>
              <button className="w-full p-4 text-left border-b bg-[#f5faff] text-[#2874f0]">
                <i className="fa-solid fa-wallet mr-2"></i>UPI
              </button>
              <button className="w-full p-4 text-left border-b hover:bg-gray-50">
                <i className="fa-solid fa-credit-card mr-2"></i>Credit / Debit Card
              </button>
              <button className="w-full p-4 text-left border-b hover:bg-gray-50">
                <i className="fa-solid fa-building-columns mr-2"></i>Net Banking
              </button>
              <button className="w-full p-4 text-left border-b hover:bg-gray-50">
                <i className="fa-solid fa-money-bill mr-2"></i>EMI
              </button>
              <button className="w-full p-4 text-left border-b hover:bg-gray-50">
                <i className="fa-solid fa-money-bill-wave mr-2"></i>Cash on Delivery
              </button>
            </div>
          </div>
          <div className="flex-1 p-6">
            <h2 className="text-lg font-medium mb-4">UPI</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-3 p-3 border rounded cursor-pointer">
                  <input type="radio" name="upi" defaultChecked />
                  <span>Pay using UPI ID</span>
                </label>
              </div>
              <div className="ml-6">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g. 9876543210@upi)"
                  className="w-full max-w-sm border rounded p-2"
                />
                <button className="mt-4 bg-[#fb641b] text-white px-8 py-3 rounded-sm">PAY ₹83,998</button>
              </div>
              <div className="border-t pt-4 mt-6">
                <p className="font-medium mb-3">Or pay using QR code</p>
                <div className="w-48 h-48 bg-gray-100 flex items-center justify-center border">
                  <span className="text-gray-400">QR Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PaymentOptions;
  