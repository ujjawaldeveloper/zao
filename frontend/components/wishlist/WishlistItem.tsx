interface WishlistItemProps {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  rating: string;
  reviews: string;
  image: string;
  isOutOfStock?: boolean;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  name,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  image,
  isOutOfStock,
}) => {
  return (
    <div className={`bg-white rounded-sm shadow-sm group ${isOutOfStock ? "opacity-75" : ""}`}>
      <div className="relative">
        <div className="aspect-square bg-gray-100 p-4">{/* Replace with image */}</div>
        {isOutOfStock && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <span className="text-red-600 font-medium">Out of Stock</span>
          </div>
        )}
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <i className="fa-solid fa-trash text-gray-500"></i>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-green-600 text-white text-sm px-2 py-0.5 rounded">{rating} ★</span>
          <span className="text-gray-500 text-sm">({reviews})</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xl font-medium">{price}</span>
            <span className="text-gray-500 line-through">{originalPrice}</span>
            <span className="text-green-600">{discount}</span>
          </div>
          <button
            className={`w-full ${
              isOutOfStock ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-[#ff9f00] text-white"
            } py-2 rounded-sm font-medium`}
          >
            {isOutOfStock ? "NOTIFY ME" : "ADD TO CART"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
