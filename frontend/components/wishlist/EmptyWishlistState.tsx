import React from "react";

const EmptyWishlistState: React.FC = () => {
  return (
    <div className="bg-white rounded-sm shadow-sm p-8 text-center">
      <div className="w-48 h-48 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
        <i className="fa-regular fa-heart text-4xl text-gray-400"></i>
      </div>
      <h2 className="text-xl font-medium mb-2">Empty Wishlist</h2>
      <p className="text-gray-500 mb-4">
        Save items that you like in your wishlist. Review them anytime and easily move them to the bag.
      </p>
      <button className="bg-[#2874f0] text-white px-8 py-2 rounded-sm">Continue Shopping</button>
    </div>
  );
};

export default EmptyWishlistState;
