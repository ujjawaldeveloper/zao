import React from "react";
import WishlistItem from "./WishlistItem";

interface WishlistGridProps {
  items: Array<{
    id: string;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    rating: string;
    reviews: string;
    image: string;
    isOutOfStock?: boolean;
  }>;
}

const WishlistGrid: React.FC<WishlistGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <WishlistItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default WishlistGrid;
