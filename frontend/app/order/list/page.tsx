import Header from "@/components/order/Header";
import Filters from "@/components/order/Filters";
import OrderItem from "@/components/order/OrderItem";
import Pagination from "@/components/order/Pagination";

const OrdersPage = () => {
  return (
    <main id="OrderHistory" className="bg-gray-100 min-h-screen pt-4">
      <div className="h-16 md:h-16"></div>
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <Filters />
        <div className="space-y-4">
          <OrderItem
            datePlaced="15 March 2024"
            total="₹69,999.00"
            recipient="John Doe"
            orderId="123456"
            productName="iPhone 13 (128GB) - Midnight"
            productColor="Midnight"
            productStatus="Delivered on Mar 18"
            additionalStatus="Your item has been delivered"
          />
          <OrderItem
            datePlaced="10 March 2024"
            total="₹11,999.00"
            recipient="John Doe"
            orderId="123457"
            productName="OnePlus Buds Pro 2"
            productColor="Black"
            productStatus="Arriving tomorrow"
            additionalStatus="Your item is out for delivery"
            progress={75}
          />
          <OrderItem
            datePlaced="1 March 2024"
            total="₹24,999.00"
            recipient="John Doe"
            orderId="123458"
            productName="Samsung Galaxy Watch 5"
            productColor="Silver"
            productStatus="Cancelled"
            additionalStatus="Cancelled on Mar 2"
          />
        </div>
        <Pagination />
      </div>
      <div className="h-16 md:h-16"></div>
    </main>
  );
};

export default OrdersPage;
