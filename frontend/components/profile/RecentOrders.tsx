const RecentOrders = () => (
    <div className="bg-white rounded-sm shadow-sm p-6">
      <h2 className="text-lg font-medium mb-6">Recent Orders</h2>
      <div className="space-y-4">
        <div className="border rounded p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">Order #123456</p>
              <p className="text-sm text-gray-500">Placed on 15 Mar 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium">₹69,999</p>
              <span className="text-green-600 text-sm">Delivered</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div>
              <h3 className="font-medium">iPhone 13 (128GB) - Midnight</h3>
              <p className="text-sm text-gray-500">Color: Midnight</p>
            </div>
          </div>
        </div>
  
        <div className="border rounded p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium">Order #123457</p>
              <p className="text-sm text-gray-500">Placed on 10 Mar 2024</p>
            </div>
            <div className="text-right">
              <p className="font-medium">₹11,999</p>
              <span className="text-blue-600 text-sm">Shipped</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-20 h-20 bg-gray-100"></div>
            <div>
              <h3 className="font-medium">OnePlus Buds Pro 2</h3>
              <p className="text-sm text-gray-500">Color: Black</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
export default RecentOrders;