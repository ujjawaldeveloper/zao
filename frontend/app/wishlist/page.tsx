"use client"
import EmptyWishlistState from "@/components/wishlist/EmptyWishlistState";
import WishlistGrid from "@/components/wishlist/WishlistGrid";
import WishlistHeader from "@/components/wishlist/WishlistHeader";
import { useState } from "react";

const WishlistPage = () => {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "iPhone 13 (128GB) - Midnight",
      price: "₹69,999",
      originalPrice: "₹79,900",
      discount: "12% off",
      rating: "4.5",
      reviews: "2,345",
      image: "",
    },
    // Add other wishlist items here...
  ]);

  return (
    <main id="WishlistPage" className="bg-gray-100 min-h-screen pt-4">
      <div className="h-16 md:h-16"></div>
      <div className="max-w-7xl mx-auto px-4">
        <WishlistHeader
          itemCount={items.length}
          onSortChange={(value) => console.log("Sorting by:", value)}
        />
        {items.length > 0 ? <WishlistGrid items={items} /> : <EmptyWishlistState />}
      </div>
      <div className="h-16 md:h-16"></div>
    </main>
  );
};

export default WishlistPage;
