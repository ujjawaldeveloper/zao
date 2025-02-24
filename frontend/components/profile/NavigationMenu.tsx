const NavigationMenu = () => (
    <div className="bg-white rounded-sm shadow-sm">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-box text-[#2874f0]"></i>
          <span className="font-medium">MY ORDERS</span>
        </div>
      </div>
      <div className="p-4 border-b bg-[#f5faff]">
        <div className="flex items-center gap-2 text-[#2874f0]">
          <i className="fa-solid fa-user"></i>
          <span className="font-medium">ACCOUNT SETTINGS</span>
        </div>
        <div className="ml-6 mt-2 space-y-2">
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            Profile Information
          </a>
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            Manage Addresses
          </a>
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            PAN Card Information
          </a>
        </div>
      </div>
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-wallet text-[#2874f0]"></i>
          <span className="font-medium">PAYMENTS</span>
        </div>
        <div className="ml-6 mt-2 space-y-2">
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            Gift Cards
          </a>
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            Saved UPI
          </a>
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            Saved Cards
          </a>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-heart text-[#2874f0]"></i>
          <span className="font-medium">MY STUFF</span>
        </div>
        <div className="ml-6 mt-2 space-y-2">
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            My Wishlist
          </a>
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            My Reviews
          </a>
          <a href="#" className="block text-sm hover:text-[#2874f0]">
            My Notifications
          </a>
        </div>
      </div>
    </div>
  );
  export default NavigationMenu;