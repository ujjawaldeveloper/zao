import CheckoutSteps from "@/components/payment/CheckoutSteps";
import PaymentOptions from "@/components/payment/PaymentOptions";
import PriceSummary from "@/components/payment/PriceSummary";
import DeliveryAddress from "@/components/payment/DeliveryAddress";

const PaymentPage = () => {
  return (
    <main id="PaymentPage" className="bg-gray-100 min-h-screen pt-4">
      <div className="h-16 md:h-16"></div>
      <div className="max-w-7xl mx-auto px-4">
        <CheckoutSteps />
        <div className="flex flex-col lg:flex-row gap-4">
          <PaymentOptions />
          <div className="lg:w-96">
            <PriceSummary />
            <DeliveryAddress />
          </div>
        </div>
      </div>
      <div className="h-16 md:h-16"></div>
    </main>
  );
};

export default PaymentPage;
