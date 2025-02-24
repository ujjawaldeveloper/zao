interface OrderItemProps {
    datePlaced: string;
    total: string;
    recipient: string;
    orderId: string;
    productName: string;
    productColor: string;
    productStatus: string;
    additionalStatus?: string;
    progress?: number;
  }
  
  const OrderItem: React.FC<OrderItemProps> = ({
    datePlaced,
    total,
    recipient,
    orderId,
    productName,
    productColor,
    productStatus,
    additionalStatus,
    progress,
  }) => (
    <div className="bg-white rounded-sm shadow-sm">
      <div className="p-4 border-b">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="space-y-1">
            <p className="text-gray-500">ORDER PLACED</p>
            <p>{datePlaced}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">TOTAL</p>
            <p>{total}</p>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">SHIP TO</p>
            <button className="text-[#2874f0]">{recipient}</button>
          </div>
          <div className="space-y-1">
            <p className="text-gray-500">ORDER #{orderId}</p>
            <button className="text-[#2874f0]">View order details</button>
          </div>
        </div>
      </div>
  
      <div className="p-4">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-40 h-40 bg-gray-100 flex-shrink-0"></div>
          <div className="flex-1">
            <h3 className="font-medium mb-2">{productName}</h3>
            <p className="text-sm text-gray-500 mb-4">Color: {productColor}</p>
            <div className="flex items-center gap-4">
              <span className={productStatus.includes('Cancelled') ? 'text-red-600' : 'text-green-600'}>
                {productStatus}
              </span>
              {additionalStatus && (
                <>
                  <span className="text-gray-500">|</span>
                  <span className={productStatus.includes('Cancelled') ? 'text-red-600' : 'text-blue-600'}>
                    {additionalStatus}
                  </span>
                </>
              )}
            </div>
            {progress !== undefined && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-[#2874f0] h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span>Ordered</span>
                  <span>Shipped</span>
                  <span className="text-[#2874f0]">Out for delivery</span>
                  <span className="text-gray-400">Delivered</span>
                </div>
              </div>
            )}
            <div className="flex gap-4 mt-4">
              <button className="px-6 py-2 border rounded-sm">Action 1</button>
              <button className="px-6 py-2 border rounded-sm">Action 2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default OrderItem;
  